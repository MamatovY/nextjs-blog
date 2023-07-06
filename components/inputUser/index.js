'use client'

import { useState } from "react";

const InputUser = ({ name, id }) => {
    const [param, setParam] = useState(name)

    const handleChange = async (value) => {
        const response = await fetch(`http://localhost:3001/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: value })
        });
        const data = await response.json()
        setParam(data.name)
        // Handle the response
        if (response.ok) {
            // Request was successful
            console.log('Name successfully updated');
        } else {
            // Request failed
            console.error('Failed to update name');
        }
    };

    return (
        <div className='index'>
            <input type="text" name="name" value={param} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default InputUser