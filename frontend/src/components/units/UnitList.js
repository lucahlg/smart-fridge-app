import React, { useEffect, useState } from 'react';
import UnitForm from './UnitForm';
import '../List.css';

const UnitList = () => {
    const [units, setUnits] = useState([]);

    const fetchUnits = async () => {
        const response = await fetch('http://localhost:5000/api/units');
        const data = await response.json();
        setUnits(data);
    };

    const handleSave = async (unit) => {
        await fetch('http://localhost:5000/api/units', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(unit),
        });
        fetchUnits();
    };

    useEffect(() => {
        fetchUnits();
    }, []);

    return (
        <div>
            <h2>Units</h2>
            <UnitForm onSave={handleSave} />
            <ul className="list">
                {units.map((unit) => (
                    <li key={unit.id} className="list-item">
                        <span>{unit.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UnitList;