import { useRef, useState} from "react";
import { useRouter } from 'next/navigation';

export const useFoodData=()=>{
     // for submiting a data to the mongo db
 const [foodItem, setFoodItem] = useState({});
//for getting data from mongo db
  const [foodData, setFoodData] = useState([])
// get data category vise
  const [filterdData, setFilterdData] = useState([])
// setUpdated data 
 const [updatedData, setUpdatedData] = useState({})
// to clear image input after submit data 
const imageInputRef = useRef(null); 

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return {
    foodItem,
    setFoodItem,
    foodData,
    setFoodData,
    filterdData,
    setFilterdData,
    updatedData,
    setUpdatedData,
    error,
    setError,
    loading,
    setLoading,
    router,
    imageInputRef
  };
}