import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
    _id: string;
    name: string;
}

const CategoryShema = new Schema({
    name: { type: String, require: true, unique: true }
})

const Category =  models.Category || model("Category", CategoryShema)

export default Category;