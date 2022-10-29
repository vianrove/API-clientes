import mongoose from "mongoose";

const Schema = mongoose.Schema

const ClientSchema = Schema({
    firstName: String, required: true,
    lastName: String, required: true,
    age: Number, required: true,
    email: String, required: true,
    password: String, required: true,
    contactNumber: Number, required: false,
})

export default mongoose.model('Client', ClientSchema)