import React, { useState } from 'react';
import '../Form.css';

const UnitForm = ({ onSave }) => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await onSave({ name });
            setName('');
        } catch (err) {
            setError('Failed to save unit. Please try again.');
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
                placeholder="Unit Name"
                required
            />
            <button className="button" type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default UnitForm;
