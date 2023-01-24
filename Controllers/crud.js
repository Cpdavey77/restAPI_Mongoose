import person from "../Models/personModel.js";

const PersonModel = person

export async function GetPeople() {
    const data = await PersonModel.find()
    return data;
}

export const InsertPerson = async(req) => {
    console.log(req.body);
    const newPerson = new PersonModel(req.body)
    return await newPerson.save();
}