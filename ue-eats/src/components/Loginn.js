// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // function Loginn() {
// //     const [credentials, setCredentials] = useState({ email: "", password: "" });
// //     const navigate = useNavigate();
// //     const handleSubmit=async (e)=>{
// //               e.preventDefault();
// //               const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
// //                   method: 'Post',
// //                   headers: {
// //                     'Content-Type': 'application/json',
// //                   },
// //                   body: JSON.stringify({email:credentials.email,password:credentials.password})
// //                 })
// //                 const json = await response.json();
// //                 console.log(json)
// //                 if(json.Success){
// //                   localStorage.setItem('token',json.authtoken)
// //                   console.log("success")
// //                   navigate("/hero")
// //                 }
// //                 else{
// //                   alert('try to enter correct credentials')
// //                 }
// //           }

// //     const handleChange = (e) => {
// //         setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //     }

// //     return (
// //         <div className="flex flex-col h-screen">
// //             <nav className="bg-gray-800 text-white p-4">
// //                 <h1 className="text-lg">My Navbar</h1>
// //             </nav>
// //             <div className="flex-grow flex justify-center items-center">
// //                 <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
// //                     <div className="mb-4">
// //                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
// //                         <input type="email" name="email" value={credentials.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
// //                     </div>
// //                     <div className="mb-4">
// //                         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
// //                         <input type="password" name="password" value={credentials.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
// //                     </div>
// //                     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Loginn;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Loginn() {
//     const [credentials, setCredentials] = useState({ email: "", password: "" });
//     const [loading, setLoading] = useState(false); // To track loading state
//     const [error, setError] = useState(""); // To handle error messages
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(""); // Reset error on form submission

//         try {
//             const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: credentials.email,
//                     password: credentials.password,
//                 }),
//             });

//             const json = await response.json();

//             if (json.Success) {
//                 localStorage.setItem('token', json.authtoken);
//                 navigate("/hero");
//             } else {
//                 setError("Invalid credentials, please try again.");
//             }
//         } catch (error) {
//             setError("An error occurred, please try again later.");
//         } finally {
//             setLoading(false); // Stop loading after the request is complete
//         }
//     };

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleRegisterClick = () => {
//         navigate("/Singupp"); // Navigate to the signup page
//     };

//     return (
//         <div className="flex flex-col h-screen">
//             <nav className="bg-gray-800 text-white p-4">
//                 <h1 className="text-lg">My Navbar</h1>
//             </nav>
//             <div className="flex-grow flex justify-center items-center">
//                 <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={credentials.email}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                             aria-describedby="email-helper"
//                         />
//                         <small id="email-helper" className="text-gray-500">Enter your email address</small>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={credentials.password}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                             aria-describedby="password-helper"
//                         />
//                         <small id="password-helper" className="text-gray-500">Your secure password</small>
//                     </div>

//                     {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//                     <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         disabled={loading}
//                     >
//                         {loading ? "Loading..." : "Submit"}
//                     </button>

//                     {/* Register Link */}
//                     <div className="mt-4 text-center">
//                         <p className="text-sm text-gray-600">
//                             Don't have an account?{' '}
//                             <button
//                                 onClick={handleRegisterClick}
//                                 className="text-blue-500 hover:text-blue-700 font-bold"
//                             >
//                                 Register
//                             </button>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Loginn;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import image from './Images/loginback.jpg'

// function Loginn() {
//     const [credentials, setCredentials] = useState({ email: "", password: "" });
//     const [loading, setLoading] = useState(false); // To track loading state
//     const [error, setError] = useState(""); // To handle error messages
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(""); // Reset error on form submission

//         try {
//             const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: credentials.email,
//                     password: credentials.password,
//                 }),
//             });

//             const json = await response.json();

//             if (json.Success) {
//                 localStorage.setItem('token', json.authtoken);
//                 navigate("/hero");
//             } else {
//                 setError("Invalid credentials, please try again.");
//             }
//         } catch (error) {
//             setError("An error occurred, please try again later.");
//         } finally {
//             setLoading(false); // Stop loading after the request is complete
//         }
//     };

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleRegisterClick = () => {
//         navigate("/Singupp"); // Navigate to the signup page
//     };

//     return (
//         <div
//             className="flex flex-col h-screen"
//             style={{
//                 backgroundImage: `url(${image})`, // Replace with your image URL
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             <nav className="bg-gray-800 text-white p-4">
//                 <h1 className="text-lg">My Navbar</h1>
//             </nav>
//             <div className="flex-grow flex justify-center items-center">
//                 <form onSubmit={handleSubmit} className="bg-green-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={credentials.email}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                             aria-describedby="email-helper"
//                         />
//                         <small id="email-helper" className="text-gray-500">Enter your email address</small>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={credentials.password}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                             aria-describedby="password-helper"
//                         />
//                         <small id="password-helper" className="text-gray-500">Your secure password</small>
//                     </div>

//                     {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//                     <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         disabled={loading}
//                     >
//                         {loading ? "Loading..." : "Submit"}
//                     </button>

//                     {/* Register Link */}
//                     <div className="mt-4 text-center">
//                         <p className="text-sm text-gray-600">
//                             Don't have an account?{' '}
//                             <button
//                                 onClick={handleRegisterClick}
//                                 className="text-blue-500 hover:text-blue-700 font-bold"
//                             >
//                                 Register
//                             </button>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Loginn;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import image from './Images/loginback.jpg';

// function Loginn() {
//     const [credentials, setCredentials] = useState({ email: "", password: "" });
//     const [loading, setLoading] = useState(false); // To track loading state
//     const [error, setError] = useState(""); // To handle error messages
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(""); // Reset error on form submission

//         try {
//             const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: credentials.email,
//                     password: credentials.password,
//                 }),
//             });

//             const json = await response.json();
//             console.log(json)

//             if (json.Success) {
//                 localStorage.setItem('token', json.authtoken);
//                 navigate("/hero");
//             } else {
//                 setError("Invalid credentials, please try again.");
//             }
//         } catch (error) {
//             setError("An error occurred, please try again later.");
//         } finally {
//             setLoading(false); // Stop loading after the request is complete
//         }
//     };

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleRegisterClick = () => {
//         navigate("/Singupp"); // Navigate to the signup page
//     };

//     return (
//         <div
//             className="flex flex-col h-screen bg-cover bg-center"
//             style={{
//                 backgroundImage: `url(${image})`, // Set the background image
//             }}
//         >
//             <nav className="bg-gray-800 text-white p-4">
//                 <h1 className="text-lg">My Navbar</h1>
//             </nav>
//             <div className="flex-grow flex justify-center items-center">
//                 <form onSubmit={handleSubmit} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={credentials.email}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                             aria-describedby="email-helper"
//                         />
//                         <small id="email-helper" className="text-gray-500">Enter your email address</small>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={credentials.password}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                             aria-describedby="password-helper"
//                         />
//                         <small id="password-helper" className="text-gray-500">Your secure password</small>
//                     </div>

//                     {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//                     <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none active:scale-95"
//                         disabled={loading}
//                     >
//                         {loading ? "Loading..." : "Submit"}
//                     </button>

//                     {/* Register Link */}
//                     <div className="mt-4 text-center">
//                         <p className="text-sm text-gray-600">
//                             Don't have an account?{' '}
//                             <button
//                                 onClick={handleRegisterClick}
//                                 className="text-purple-700 hover:text-purple-800 font-bold"
//                             >
//                                 Register
//                             </button>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Loginn;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './Images/loginback.jpg';

function Loginn() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false); // To track loading state
    const [error, setError] = useState(""); // To handle error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Reset error on form submission

        // Basic client-side validation for email and password
        if (!credentials.email || !credentials.password) {
            setError("Please fill in both email and password.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            const json = await response.json();
            console.log(json)

            if (json.Success) {
                localStorage.setItem('token', json.authtoken); // Store token in localStorage
    
                navigate("/team"); // Redirect to hero page
            } else {
                setError("Invalid credentials, please try again.");
            }
        } catch (error) {
            setError("An error occurred, please try again later.");
        } finally {
            setLoading(false); // Stop loading after the request is complete
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleRegisterClick = () => {
        navigate("/Singupp"); // Navigate to the signup page
    };

    return (
        <div
            className="flex flex-col h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${image})`, // Set the background image
            }}
        >
            <nav className="bg-gray-800 text-white p-4">
                <h1 className="text-lg">My Navbar</h1>
            </nav>
            <div className="flex-grow flex justify-center items-center">
                <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            aria-describedby="email-helper"
                        />
                        <small id="email-helper" className="text-gray-500">Enter your email address</small>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            aria-describedby="password-helper"
                        />
                        <small id="password-helper" className="text-gray-500">Your secure password</small>
                    </div>

                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none active:scale-95"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>

                    {/* Register Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <button
                                onClick={handleRegisterClick}
                                className="text-purple-700 hover:text-purple-800 font-bold"
                            >
                                Register As Student
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Loginn;
