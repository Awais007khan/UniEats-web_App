// import React, { useState, useEffect } from 'react';
// import image from './Images/loginback.jpg';

// function AddItems() {
//     const [credentials, setCredentials] = useState({
//         name: "",
//         role: "",
//         intro: "",
//         Price: "",
//         image: null,
//     });
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const API_BASE_URL = 'http://localhost:5000/api/auth/item'; // Fixed API endpoint

//     // Handle form input changes
//     const onChange = (e) => {
//         if (e.target.name === 'image') {
//             const file = e.target.files[0];
//             const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//             if (file && !allowedTypes.includes(file.type)) {
//                 setError('Only JPEG, PNG, and JPG images are allowed');
//             } else {
//                 setError(null);
//                 setCredentials({ ...credentials, image: file });
//             }
//         } else {
//             setCredentials({ ...credentials, [e.target.name]: e.target.value });
//         }
//     };

//     // Fetch items from backend
//     const fetchItems = async () => {
//         try {
//             const response = await fetch(API_BASE_URL);
//             if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
//             const json = await response.json();
//             setItems(json.items || []);
//         } catch (err) {
//             console.error('Error fetching items:', err.message || err);
//         }
//     };

//     // Submit form data to the backend
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);

//         const { name, role, intro, Price, image } = credentials;
//         if (!name || !role || !intro || !Price || !image) {
//             setError('All fields are required');
//             setLoading(false);
//             return;
//         }

//         const numericPrice = parseFloat(Price);
//         if (isNaN(numericPrice) || Price.trim() === "") {
//             setError('Price must be a valid number');
//             setLoading(false);
//             return;
//         }

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('role', role);
//         formData.append('intro', intro);
//         formData.append('Price', numericPrice);
//         formData.append('image', image);

//         try {
//             const response = await fetch(API_BASE_URL, { method: 'POST', body: formData });
//             const json = await response.json();

//             if (!response.ok) {
//                 setError(json.message || 'Failed to add item');
//             } else {
//                 alert('Item added successfully!');
//                 fetchItems(); // Refresh items
//                 setCredentials({ name: "", role: "", intro: "", Price: "", image: null });
//             }
//         } catch (err) {
//             setError('An error occurred. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     return (
//         <div 
//             className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4" 
//             style={{ backgroundImage: `url(${image})` }}
//         >
//             <h1 className="text-3xl font-bold mb-6 text-center text-white bg-black bg-opacity-50 p-2 rounded">Add Items</h1>

//             <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow rounded bg-opacity-90">
//                 {error && <p className="text-red-500 mb-4">{error}</p>}

//                 <input type="text" name="name" value={credentials.name} onChange={onChange} placeholder="Name" className="w-full border p-2 rounded mb-2" required />
//                 <input type="text" name="role" value={credentials.role} onChange={onChange} placeholder="Role" className="w-full border p-2 rounded mb-2" required />
//                 <input type="text" name="intro" value={credentials.intro} onChange={onChange} placeholder="Intro" className="w-full border p-2 rounded mb-2" required />
//                 <input type="number" name="Price" value={credentials.Price} onChange={onChange} placeholder="Price" className="w-full border p-2 rounded mb-2" required />
//                 <input type="file" name="image" onChange={onChange} accept="image/*" className="w-full border p-2 rounded mb-2" required />

//                 <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//                     {loading ? 'Submitting...' : 'Submit'}
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default AddItems;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX } from 'react-icons/fi'; // Import the close icon
import image from './Images/loginback.jpg';

function AddItems() {
    const [credentials, setCredentials] = useState({
        name: "",
        role: "",
        intro: "",
        Price: "",
        image: null,
    });
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const API_BASE_URL = 'http://localhost:5000/api/auth/item';

    // Handle form input changes
    const onChange = (e) => {
        if (e.target.name === 'image') {
            const file = e.target.files[0];
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (file && !allowedTypes.includes(file.type)) {
                setError('Only JPEG, PNG, and JPG images are allowed');
            } else {
                setError(null);
                setCredentials({ ...credentials, image: file });
            }
        } else {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
        }
    };

    // Fetch items from backend
    const fetchItems = async () => {
        try {
            const response = await fetch(API_BASE_URL);
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            const json = await response.json();
            setItems(json.items || []);
        } catch (err) {
            console.error('Error fetching items:', err.message || err);
        }
    };

    // Submit form data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { name, role, intro, Price, image } = credentials;
        if (!name || !role || !intro || !Price || !image) {
            setError('All fields are required');
            setLoading(false);
            return;
        }

        const numericPrice = parseFloat(Price);
        if (isNaN(numericPrice) || Price.trim() === "") {
            setError('Price must be a valid number');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('role', role);
        formData.append('intro', intro);
        formData.append('Price', numericPrice);
        formData.append('image', image);

        try {
            const response = await fetch(API_BASE_URL, { method: 'POST', body: formData });
            const json = await response.json();

            if (!response.ok) {
                setError(json.message || 'Failed to add item');
            } else {
                alert('Item added successfully!');
                fetchItems(); // Refresh items
                setCredentials({ name: "", role: "", intro: "", Price: "", image: null });
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4 relative" 
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Close button in top-right corner */}
            <button 
                onClick={() => navigate('/AdminPanel')}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                aria-label="Close"
            >
                <FiX className="text-xl" />
            </button>

            <h1 className="text-3xl font-bold mb-6 text-center text-white bg-black bg-opacity-50 p-2 rounded">Add Items</h1>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow rounded bg-opacity-90">
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <input type="text" name="name" value={credentials.name} onChange={onChange} placeholder="Name" className="w-full border p-2 rounded mb-2" required />
                <input type="text" name="role" value={credentials.role} onChange={onChange} placeholder="Role" className="w-full border p-2 rounded mb-2" required />
                <input type="text" name="intro" value={credentials.intro} onChange={onChange} placeholder="Intro" className="w-full border p-2 rounded mb-2" required />
                <input type="number" name="Price" value={credentials.Price} onChange={onChange} placeholder="Price" className="w-full border p-2 rounded mb-2" required />
                <input type="file" name="image" onChange={onChange} accept="image/*" className="w-full border p-2 rounded mb-2" required />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default AddItems;