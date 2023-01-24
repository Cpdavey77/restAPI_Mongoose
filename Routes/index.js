import { Router } from "express";
import { GetPeople, InsertPerson, UpdatePerson, DeletePerson} from "../Controllers/crud.js"

const router = Router();


router.get("/", async(req, res) => {
    const data = await GetPeople();
    res.json(data);
})
router.post("/addPerson", async(req, res) => {
    const person = await InsertPerson(req);
    res.json(person)
})
router.put("/changeData/:Id", async(req, res) => {
    const newData = await UpdatePerson(req);
    console.log(newData);
    res.json(newData);
})
router.delete("/removePerson/:Id", async(req, res) => {
    const deletedPerson = await DeletePerson(req);
    res.json(deletedPerson)
})

export default router



