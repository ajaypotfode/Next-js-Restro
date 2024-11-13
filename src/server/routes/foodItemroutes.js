import {Router} from "express"
import { addFoodItem, deleteFoodItem, getFoodItem, getFoodById, updateFoodItem } from "../controllers/foodItem-cotrollers.js";

const router=Router()

router.route("/foodItem").get(getFoodItem).post(addFoodItem)
// router.route("/foodItem").post(addFoodItem)
router.route("/foodItem/:id").put(updateFoodItem).delete(deleteFoodItem).get(getFoodById)
// router.route("/foodItem/:id").delete(deleteFoodItem)

export default router;