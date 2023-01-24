import { Router } from "express";
import { GetPeople, InsertPerson} from "../Controllers/crud.js"

const router = Router();


router.get("/", async(req, res, next) => {
    const data = await GetPeople();
    res.json(data);
})
router.post("/addPerson", async(req, res) => {
    const person = await InsertPerson(req);
    res.json(person)
})
    





export default router



