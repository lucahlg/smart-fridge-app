import React, { useEffect, useState } from 'react';
import { getHomeMessage } from './services/api';
import FoodItemList from './components/fooditems/FoodItemList';
import UnitList from './components/units/UnitList';
import './App.css'; // Custom styles for the app

function App() {
    const [message, setMessage] = useState('');
    const [view, setView] = useState('home');

    useEffect(() => {
        getHomeMessage().then((data) => setMessage(data.message));
    }, []);

    const renderView = () => {
        switch (view) {
            case 'foodItems':
                return <FoodItemList />;
            case 'units':
                return <UnitList />;
            default:
                return <div className="home-message">{message}</div>;
        }
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Smart Fridge App</h1>
                <nav className="nav">
                    <button className="nav-button" onClick={() => setView('home')}>
                        Home
                    </button>
                    <button className="nav-button" onClick={() => setView('foodItems')}>
                        Manage Food Items
                    </button>
                    <button className="nav-button" onClick={() => setView('units')}>
                        Manage Units
                    </button>
                </nav>
            </header>
            <main className="main">{renderView()}</main>
        </div>
    );
}

export default App;
