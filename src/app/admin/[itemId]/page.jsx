"use client";
import { useContext, useEffect, useState } from 'react';
import { UserAuthContext } from "../../../context/foodItemContext";
import axios from 'axios';
import {useFoodData} from '../../../hooks/foodItem.js';
// import { useRouter } from 'next/router';

const UpdateMenu = ({ params }) => {
  const id = params.itemId
  const context = useContext(UserAuthContext);
  const { router, setUpdatedData, updatedData}=useFoodData()
  const { loading,setLoading  }= context

  
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}api/foodItem/${id}`)
        const result = await res.data
        setUpdatedData(result)
      } catch (error) {
        
        console.error("error");
      }
    })()
  }, [])

  const submitUpdateData = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await axios.put(`${process.env.NEXT_PUBLIC_DOMAIN}api/foodItem/${id}`, updatedData)
      alert("Data updated successfully")
      setLoading(false)
      router.push('/admin');
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  }

  return (
    <div className="dashboard">
    <div className="add-form">
      <h1 className="heading">Add <span>User</span></h1>
      <form onSubmit={submitUpdateData}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={updatedData.name}
          onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={updatedData.description}
          onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
        />
        <label>Type:</label>
        <select
          name="type"
          onChange={(e) => setUpdatedData({ ...updatedData, type: e.target.value })}
          value={updatedData.type}
        >
          <option className="option" value="" selected disabled>select one</option>
          <option className="option" value="Dinner">Dinner</option>
          <option className="option" value="Lunch">Lunch</option>
          <option className="option" value="Breakfast">Breakfast</option>
        </select>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={updatedData.price}
          onChange={(e) => setUpdatedData({ ...updatedData, price: e.target.value })}
        />
         {
          loading && <p className="loader">updatedData is uploading...</p>
        }
        <button type="submit" className="btn">update Data </button>
      </form>
    </div>
    </div>
  );
};

export default UpdateMenu;
// export updateData 