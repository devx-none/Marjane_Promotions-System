import { getConnection } from "typeorm";
import { Router } from "express"
import { center } from "../models";
import { hashPassword, checkPassword, generateToken, isSuper } from "../middleware";


const router = Router();

//products catgeory  array 
// let centers = [
//     {
//         name: "marjane",
//         city: "safi"
//     },
//     {
//         name: "marjane",
//         city:"agadir"
//     }
// ]

router.get('/all', async (req, res) => {
    const connection = getConnection()
    console.log("connection");
    const centers = await connection
        .getRepository("center")
        .find({where: {adminCenter : null}})
        .catch(error => {
            console.log(error);
        })
    res.json(centers)
})


router.post('/add', isSuper, async (req, res) => {
    const { name, city, adminCenter } = req.body;
    const connection = getConnection()
    let newCenter = new center()
    newCenter.name = name
    newCenter.city = city
    newCenter.adminCenter = adminCenter
    newCenter = await connection
        .getRepository("center")
        .save(newCenter)
        .catch(error => {
            console.log(error);
        })
    console.log(newCenter);
    // })

    res.json({
        message: "Center added"
    })
})



export { router as center }