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

//     const API_BASE_URL = 'http://localhost:5000/api/auth/item';

//     // Handle form input changes
//     const onChange = (e) => {
//         if (e.target.name === 'image') {
//             const file = e.target.files[0];
//             // Validate image type (JPEG, PNG, JPG)
//             const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//             if (file && !allowedTypes.includes(file.type)) {
//                 setError('Only JPEG, PNG, and JPG images are allowed');
//             } else {
//                 setError(null); // Reset error if file type is valid
//                 setCredentials({ ...credentials, image: file });
//             }
//         } else {
//             setCredentials({ ...credentials, [e.target.name]: e.target.value });
//         }
//     };

//     // Fetch items from the backend
//     const fetchItems = async () => {
//         try {
//             const response = await fetch(API_BASE_URL);
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} ${response.statusText}`);
//             }
//             const json = await response.json();
//             if (json.Success) {
//                 setItems(json.items);
//             } else {
//                 console.error(json.message || 'Failed to fetch items');
//             }
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

//         // Validate input: Check if all fields are filled
//         if (!name || !role || !intro || !Price || !image) {
//             setError('All fields are required');
//             setLoading(false);
//             return;
//         }

//         // Ensure Price is a valid number
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
//         formData.append('Price', numericPrice); // Ensure Price is a number
//         formData.append('image', image);

//         try {
//             const response = await fetch(API_BASE_URL, {
//                 method: 'POST',
//                 body: formData, // Don't set Content-Type, it will be set automatically
//             });

//             const json = await response.json();

//             if (!response.ok) {
//                 setError(json.message || 'Failed to add item');
//                 setLoading(false);
//                 return;
//             }

//             if (json.Success) {
//                 alert('Item added successfully!');
//                 fetchItems(); // Refresh the items list
//                 setCredentials({ name: "", role: "", intro: "", Price: "", image: null });
//             } else {
//                 setError(json.message || 'Failed to add item');
//             }
//         } catch (err) {
//             console.error('Error during submission:', err.message || err);
//             setError('An error occurred. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Load items on component mount
//     useEffect(() => {
//         fetchItems();
//     }, []);

//     return (
//         <div 
//             className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4" 
//             style={{ backgroundImage: `url(${image})` }} // Replace with your image URL
//         >
//             <h1 className="text-3xl font-bold mb-6 text-center text-white bg-black bg-opacity-50 p-2 rounded">Add Items</h1>

//             {/* Form Section */}
//             <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow rounded bg-opacity-90">
//                 {error && <p className="text-red-500 mb-4">{error}</p>}

//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-sm font-medium">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={credentials.name}
//                         onChange={onChange}
//                         className="w-full border p-2 rounded"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="role" className="block text-sm font-medium">Role</label>
//                     <input
//                         type="text"
//                         id="role"
//                         name="role"
//                         value={credentials.role}
//                         onChange={onChange}
//                         className="w-full border p-2 rounded"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="intro" className="block text-sm font-medium">Intro</label>
//                     <input
//                         type="text"
//                         id="intro"
//                         name="intro"
//                         value={credentials.intro}
//                         onChange={onChange}
//                         className="w-full border p-2 rounded"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="Price" className="block text-sm font-medium">Price</label>
//                     <input
//                         type="number"
//                         id="Price"
//                         name="Price"
//                         value={credentials.Price}
//                         onChange={onChange}
//                         className="w-full border p-2 rounded"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="image" className="block text-sm font-medium">Upload Image</label>
//                     <input
//                         type="file"
//                         id="image"
//                         name="image"
//                         onChange={onChange}
//                         accept="image/*"
//                         className="w-full border p-2 rounded"
//                         required
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className={`w-full bg-blue-600 text-white py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
//                     disabled={loading}
//                 >
//                     {loading ? 'Submitting...' : 'Submit'}
//                 </button>
//             </form>

//             {/* Items List Section */}
//             <div className="mt-8 w-full">
//                 <h2 className="text-2xl font-bold mb-4 text-white bg-black bg-opacity-50 p-2 rounded text-center">Items</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {items.map((item) => (
//                         <div key={item._id} className="bg-white p-4 shadow rounded bg-opacity-90">
//                             <img
//                                 src={`http://127.0.0.1:5000/uploads/${item.image}`}
//                                 alt={item.name}
//                                 className="w-full h-40 object-cover mb-2"
//                             />
//                             <h3 className="text-lg font-bold">{item.name}</h3>
//                             <p className="text-gray-700">{item.role}</p>
//                             <p className="text-gray-600">{item.intro}</p>
//                             <p className="text-blue-600 font-bold">Price: ${item.Price}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddItems;
import React, { useState, useEffect } from 'react';
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

    const API_BASE_URL = 'http://localhost:5000/api/auth/item'; // Fixed API endpoint

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
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4" 
            style={{ backgroundImage: `url(${image})` }}
        >
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

