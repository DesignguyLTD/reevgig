import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [formData, setFormData] = useState({
        first_name: "Seyi",
        last_name: "Odediran",
        email: "stalliongfx125@gmail.com",
        username: "stalliongfx125",
        user_type: "FREELANCER",
        country: "Nigeria",
        password: 'Seyifunmi2003$'
    });

    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://3.251.73.7:8080/api/user/create/',
                formData,
                {
                    headers: {
                        Authorization: 'Api-Key XvtAppIE.RwyVYIdeZkjErNjhIwBKxZaTA5WWstJE',
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 201) {
                setResponseMessage('User created successfully!');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                setResponseMessage('Invalid data provided.' + JSON.stringify(error.response.data));
            } else {
                setResponseMessage('An error occurred.');
            }
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    country:
                    <input
                        type="text"
                        name="password"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Create User</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default CreateUser;
