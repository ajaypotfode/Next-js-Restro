import { FoodItem } from "../models/fooditem-model.js";

// get data from mongo db
export const getFoodItem=async(req,res)=>{
    try {
        const fooditem= await FoodItem.find()
        res.status(200).json(fooditem)
    } catch (error) {
        res.status(500).json({ message: "Error fetching food items", error });
    }
}

// send data to the mongo db
export const addFoodItem=async(req,res)=>{
        const data = req.body
       try {
         const foodItem= new FoodItem(data)
          await foodItem.save()
        //  console.log(data);
        res.status(200).json(foodItem)
       } catch (error) {
        res.status(400).json({ message: "Error creating food item", error });
       }
}

// uodate existing data 
export const updateFoodItem=async(req,res)=>{
    const {id}=req.params
    const data=req.body
  try {
    // Use { new: true } when you want to immediately work with the modified version of the document,
      const updateItem=await FoodItem.findByIdAndUpdate(id,data,{new:true})
      if (updateItem) {
          res.status(200).json(updateItem);   
      } else {
          res.status(404).json({ message: "Food item not found" });
      }
  } catch (error) {
    res.status(500).json({ message: "Error updating food item", error });
  }
    
}

// delete existing data
export const deleteFoodItem=async(req,res)=>{
    const {id}= req.params
   try {
     const deleteItem=await FoodItem.findByIdAndDelete(id)
     // Send a 204 No Content response to indicate success 
     res.status(204).end();
     if (!deleteItem) {
         res.status(404).json({ message: "Food item not found" })
     }
   } catch (error) {
    res.status(500).json({ message: "Error deleting food item", error });
   }
}

export const getFoodById=async(req,res)=>{
     const {id}=req.params
    try {
         const foodItem=await FoodItem.findById(id)
         if (foodItem) {
            res.status(200).json(foodItem)
         } else {
            res.status(404).json({message: "Error Fooditem not Found "})
         }
    } catch (error) {
        res.status(500).json({ message: "Error deleting food item", error });
    }
}