import { Between, getConnection, MoreThanOrEqual } from "typeorm";
import { Router } from "express"
import { manager } from "../models";
import { isMorning, checkPassword, generateToken, isAdCenter, isManager, verifyToken } from "../middleware";



const router = Router();
//get all promotion by category
// router.get('/promotion', async (req, res, next) => {
//     try {
//         const  idManager   = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
//         console.log(idManager);

//         const connection = getConnection()
//         const getManager = await connection.getRepository("manager").find({relations: ['category'],
//             id :idManager.id
//         })
//         console.log(getManager.categoryId);
//         const promotion = await connection
//             .getRepository("promotion")
//             // .find({relations: ['product','category']})
//             .createQueryBuilder("promotion")
//             .leftJoinAndSelect("promotion.product","product")
//             .leftJoinAndSelect("product.category","category")
//             .where('category.id = :categoryId',{categoryId:"2abbab78-9e90-40ed-a881-d19fa96d1c45"})
//             .getMany();

//             console.log(promotion);
//         res.json(promotion)
//     } catch (error) {
//         next(error)
//     }
// })

//get all promotion by category
router.get('/promotion', isManager, isMorning, async (req, res, next) => {
    try {
        const getcategory = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
        const connection = getConnection()
        const manager = await connection.getRepository("manager").findOne({
            where: {
                id: getcategory.id
            },
            relations: ['category', 'center', 'center.adminCenter']
        })

        const start = `${(new Date()).toISOString().split('T')[0]} 00:00:00`
        const end = `${(new Date()).toISOString().split('T')[0]} 11:59:59`

        const promotion = await connection
            .getRepository("promotion")
            .find({
                relations: ['product', "product.category", "adminCenter", "adminCenter.center"],
                where: {
                    product: { category: manager.category.id },
                    adminCenter: { id: manager.center.adminCenter.id },
                    createdAt: Between(start, end)
                }
            })



        // //update status the promotion

        res.json(promotion)
    } catch (error) {
        next(error)
    }
})







router.post('/login', async (req, res) => {
    const connection = getConnection()
    const { email, password } = req.body
    const manager = await connection.getRepository("manager").findOne({
        where: {
            email
        }
    })
    if (manager) {
        const isValid = await checkPassword(password, manager.password)
        if (isValid) {
            const token = generateToken(manager, process.env.JWT_MANAGER_SECRET, "manager")
            res.json({
                data: manager,
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








export { router as manager }