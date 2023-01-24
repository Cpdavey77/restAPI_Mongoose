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

export const UpdatePerson = async(req) => {
    const data = await PersonModel.findByIdAndUpdate(req.params.Id, req.body, {new: true, useFindAndModify: false});
    return data;
}

export const DeletePerson = async(req) => {
    const data = await PersonModel.findByIdAndDelete(req.params.Id, req.body)
    return data
}
