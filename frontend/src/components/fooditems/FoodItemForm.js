import React, { useState, useEffect } from 'react';
import '../Form.css'; // Import shared styles

const FoodItemForm = ({ onSave }) => {
    const [name, setName] = useState('');
    const [unitId, setUnitId] = useState('');
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUnits = async () => {
            const response = await fetch('http://localhost:5000/api/units');
            const data = await response.json();
            setUnits(data);
        };
        fetchUnits();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!name || !unitId) {
            alert('Please provide both a name and a unit.');
            setLoading(false);
            return;
        }

        try {
            await onSave({ name, unit_id: unitId });
            setName('');
            setUnitId('');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Food Item Name"
                required
            />
            <select
                className="input"
                value={unitId}
                onChange={(e) => setUnitId(e.target.value)}
                required
            >
                <option value="" disabled>Select Unit</option>
                {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                        {unit.name}
                    </option>
                ))}
            </select>
            <button className="button" type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </button>
        </form>
    );
};

export default FoodItemForm;
