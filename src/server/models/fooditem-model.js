import mongoose from "mongoose"

const foodItemModel=new mongoose.Schema({
    name:String,
    description:String,
    type:String,
    price:String,
    image:String
})

export const FoodItem = mongoose.models.items || mongoose.model("items",foodItemModel);