"use client";
import { useContext } from 'react';
import { UserAuthContext } from "../../context/foodItemContext";

const AddMenu = () => {

  const context = useContext(UserAuthContext);
  const {submitFoodData,foodItem, loading, setFoodItem,imageInputRef }= context

  return (
    <div className="add-form">
      <h1 className="heading">Add <span>User</span></h1>
      <form onSubmit={submitFoodData}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={foodItem.name || ""}
          onChange={(e) => setFoodItem({ ...foodItem, name: e.target.value })}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={foodItem.description || ""}
          onChange={(e) => setFoodItem({ ...foodItem, description: e.target.value })}
        />
        <label>Type:</label>
        <select
          name="type"
          value={foodItem.type || ""}
          onChange={(e) => setFoodItem({ ...foodItem, type: e.target.value })}
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
          value={foodItem.price || ""}
          onChange={(e) => setFoodItem({ ...foodItem, price: e.target.value })}
        />
        <label>Image:</label>
        <input
          type="file"
          name="image"
          ref={imageInputRef}
          onChange={(e) => setFoodItem({ ...foodItem, image: e.target.files[0] })}
        />
        {
          loading && <p className="loader">data is uploading...</p>
        }
        <button type="submit" className="btn">Add Data </button>
      </form>
    </div>
  );
};

export default AddMenu;
