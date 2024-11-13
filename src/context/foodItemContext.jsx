"use client"
import { imageDb } from '../utils/firebase';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { createContext, useEffect} from 'react'
// import { v4 as uuidv4 } from "uuid";
import { useFoodData } from "../hooks/foodItem"
export const UserAuthContext = createContext();

const ContextProvider = ({ children }) => {
  
  const { foodItem,
          foodData,
          loading,
          filterdData,
          imageInputRef,
          setFoodData,
          setLoading,
          setError,
          setFilterdData,
          setFoodItem } = useFoodData()


  // getting image URL through the firebase
  const handleImageUpload = async () => {
    const { image } = foodItem;

    if (!image) return null;

    setLoading(true)
    try {
      const imageRef = ref(imageDb, `images/${image.name}`);
      const metadata = { contentType: image.type };
      const uploadimage = await uploadBytes(imageRef, image, metadata);
      return await getDownloadURL(uploadimage.ref);

    } catch (error) {
      console.error("Image upload error:", error);
      alert("Image upload error");
      setLoading(false)
      return null;
    }
  };

  // submiting a data to the mongo db
  const submitFoodData = async (e) => {
    e.preventDefault()
    try {
      const imageUrl = await handleImageUpload();
      if (imageUrl == null){
        alert("you did not upladed image")
        return;
      }

      const updatedFoodItem = { ...foodItem, image: imageUrl };

      const res = await axios.post("http://localhost:4000/api/foodItem", updatedFoodItem);
      setLoading(false)
      alert("Data submitted successfully");
      setFoodItem({})

      // to clear imageUpload field after submitting data to db
      if (imageInputRef.current) {
        imageInputRef.current.value = ""; 
      }
    } catch (error) {
      console.error("Data submission error:", error);
      window.location.reload()
      setLoading(false)
      setError(error);
      setFoodItem({})
    }
  };

  // getting data from mongo db
  useEffect(() => {
    if (!loading) {
      (async () => {
        try {
          setLoading(false)
          const res = await axios.get("http://localhost:4000/api/foodItem")
          const data = await res.data  
          setFoodData(data)

        } catch (error) {
          console.error(error);
        }
      })()
    }
  }, [loading])


  // getting data category vise
  const getItemsCategory = (type) => {

    const result = foodData.filter(item => item.type === type);
    setFilterdData(result);
  }

  // Delete Food Item
  const handleDelete = async (id) => {
    try {
      setLoading(true)
      const res = await axios.delete("http://localhost:4000/api/foodItem/" + id)  
      alert("data deleted Successfully")
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return <UserAuthContext.Provider value={{
                                          foodItem,
                                          loading,
                                          foodData,
                                          filterdData,
                                          imageInputRef,
                                          setLoading,
                                          setFoodItem,
                                          submitFoodData,
                                          handleDelete,
                                          getItemsCategory,
                                        }}>
    {children}
  </UserAuthContext.Provider>
}

export default ContextProvider;