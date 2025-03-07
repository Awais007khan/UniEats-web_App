import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './Images/loginback.jpg';

function Contactt() {
    const [credentials, setCredentials] = useState({ UserName: "", ItemName: "", DepartmentName: "", CurrentSemester: "", RoomNumber: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { UserName, ItemName, DepartmentName, CurrentSemester, RoomNumber } = credentials;

        setLoading(true);

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/auth/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ UserName, ItemName, DepartmentName, CurrentSemester, RoomNumber }),
            });

            const json = await response.json();
            console.log(json);

            if (json.Success) {
                localStorage.setItem('token', json.authtoken);

                // Redirect to a specific page based on ItemName
                if (ItemName.toLowerCase() === 'biryani') {
                    navigate("/Baryani"); // Redirect to Biryani page
                } else if (ItemName.toLowerCase() === 'banana juice') {
                    navigate("/Banana%20Juice"); // Redirect to Pizza page
                } else if (ItemName.toLowerCase() === 'burger') {
                    navigate("/Burgerr"); // Redirect to Burger page
                } 
                else if (ItemName.toLowerCase() === 'baryani') {
                    navigate("/Baryani"); // Redirect to Burger page
                } 
                else {
                    alert('No page available for this item.'); // Handle unknown items
                }
            } else {
                alert('Try to enter correct credentials');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='flex flex-col h-screen'
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-16 shadow-lg rounded-lg mt-14">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Order From Here</h2>
                <div className="mb-4">
                    <label htmlFor="UserName" className="block text-sm font-medium text-black">UserName</label>
                    <input
                        type="text"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        value={credentials.UserName}
                        onChange={onChange}
                        name='UserName'
                        id="UserName"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ItemName" className="block text-sm font-medium text-black">Item Name</label>
                    <input
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        value={credentials.ItemName}
                        onChange={onChange}
                        name='ItemName'
                        id="ItemName"
                        required
                    />
                    <p className="mt-1 text-xs text-black">We'll never share your order with anyone else.</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="DepartmentName" className="block text-sm font-medium text-black">Department Name</label>
                    <input
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        value={credentials.DepartmentName}
                        onChange={onChange}
                        name='DepartmentName'
                        id="DepartmentName"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="CurrentSemester" className="block text-sm font-medium text-black">Current Semester</label>
                    <input
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        value={credentials.CurrentSemester}
                        onChange={onChange}
                        name='CurrentSemester'
                        id="CurrentSemester"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="RoomNumber" className="block text-sm font-medium text-black">Room Number</label>
                    <input
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        value={credentials.RoomNumber}
                        onChange={onChange}
                        name='RoomNumber'
                        id="RoomNumber"
                        required
                    />
                </div>
                <button type="submit" className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default Contactt;
