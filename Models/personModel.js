import { Schema, model } from "mongoose";
import line from "single-line-log"

const log = line.stdout

const PersonSchema = new Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    age: {
        type: Number,
        required: "Age is required"
    },
    hobby: {
        type: String,
        required: "Hobby is required"
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

PersonSchema.pre("save", (next) => {
    log("Saving")
    const interval = setInterval(() => {
        log(".")
    }, 500)
    setTimeout(() => {
        console.log("User saved!");
        clearInterval(interval);
    }, 3000)
    return next();
})

export default model("Person", PersonSchema);