import { getConnection } from "typeorm";
import { Router } from "express"
import { adminCenter, manager ,logs } from "../models";
import { hashPassword, checkPassword, generateToken, isAdCenter, generatePassword, sendEmail, verifyToken, localLogs, isSuper } from "../middleware";


const router = Router();


router.get('/all', async (req, res) => {
    const connection = getConnection()

    console.log(connection);
    const admins = await connection
        .getRepository("admin_center")
        .find({ relations: ['center'] })
        .catch(error => {
            console.log(error);
        })
    res.json(admins)
})

router.get('/:id', async (req, res) => {
    const connection = getConnection()
    const id = req.params.id
    const users = await connection.getRepository("admin_center").findOne({
        where: {
            id
        }
    })
    res.json(users)
})

router.post('/add', async (req, res, next) => {
    const connection = getConnection()
    const { email, password } = req.body
    let admin = new adminCenter();
    admin.email = email;
    admin.password = await hashPassword(password);
    admin = await connection.getRepository("admin_center").save(admin).catch(error => {
        console.log(error.message);
    })

    res.json(admin)


})

router.post('/addManger',isAdCenter, async (req, res, next) => {
    const password = await generatePassword();
    
    const { name , email ,category} = req.body

    const getAdminCenter = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET);
    console.log(getAdminCenter.id);
        const connection = getConnection()
        const getcenter = await connection.getRepository("center").findOne({
           
            where: {
                adminCenter: getAdminCenter.id
            }
        })
        console.log(getcenter);

    let managerRayon = new manager();
    managerRayon.name = name
    managerRayon.email = email;
    managerRayon.password = await hashPassword(password);
    managerRayon.center = getcenter.id
    managerRayon.category = category

    //Send Email 
    sendEmail(email, password); 

    managerRayon = await connection.getRepository("manager").save(managerRayon).catch(error => {
        console.log(error.message);

    
    })
    console.log(managerRayon);

    //create log
    const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET)
    console.log(tokensData);
    let logMsg = new logs();
    logMsg.message = ` Admin Center : `;
    logMsg.target = tokensData.id;
    logMsg.status = 'created';
    logMsg = await connection.getRepository("logs").save(logMsg).catch(error => {
        console.log(error);
    })
    localLogs(logMsg);
    res.json({
        message: "manager center added"
    })
   

})



router.post('/login', async (req, res) => {
    const connection = getConnection()
    const { email, password } = req.body
    const admin = await connection.getRepository("admin_center").findOne({
        where: {
            email
        }
    })
    if (admin) {
        const isValid = await checkPassword(password, admin.password)
        if (isValid) {
            const token = generateToken(admin, process.env.JWT_CENTER_SECRET, "admin_center")
            res.json({
                data: admin,
                token
            })
        } else {
            res.json({
                message: "Invalid password"
            })
        }
    } else {
        res.json({
            message: "Invalid email"
        })
    }
})

// router.get('/statistics', async (req, res) => {
//     const connection = getConnection()
   
//     console.log(connection);
//     const promo = await connection
//         .getRepository("promotion")
//         .findAndCount()
//         .catch(error => {
//             console.log(error);
//         })
//     res.json(promo);
// })



export { router as adminCenter }