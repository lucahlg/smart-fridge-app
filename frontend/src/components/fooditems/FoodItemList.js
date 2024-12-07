import React, { useEffect, useState } from 'react';
import FoodItemForm from './FoodItemForm';
import '../List.css'; // Shared styles for lists

const FoodItemList = () => {
    const [foodItems, setFoodItems] = useState([]);

    const fetchFoodItems = async () => {
        const response = await fetch('http://localhost:5000/api/food_items');
        const data = await response.json();
        setFoodItems(data);
    };

    const handleSave = async (foodItem) => {
        await fetch('http://localhost:5000/api/food_items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(foodItem),
        });
        fetchFoodItems();
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/api/food_items/${id}`, {
            method: 'DELETE',
        });
        fetchFoodItems();
    };

    useEffect(() => {
        fetchFoodItems();
    }, []);

    return (
        <div>
            <h2>Food Items</h2>
            <FoodItemForm onSave={handleSave} />
            <ul className="list">
                {foodItems.map((item) => (
                    <li key={item.id} className="list-item">
                        <span>{item.name} ({item.unit_name})</span>
                        <button
                            className="button-delete"
                            onClick={() => handleDelete(item.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodItemList;
