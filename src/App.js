import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  RegistrationForm  from './RegistrationForm';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? '' : '', // Clear the error message when the user types
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Display validation errors
    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
      console.log('errors:', errors);
    }
  };

  return (
    <>
    <RegistrationForm/>
    </>
    // <div className="container mt-5">
    //   <div className="card p-4" >
    //     <h1 className="mb-4 text-center">Registration Form</h1>
    //     <div className="container d-flex justify-content-center align-items-center">
    //    <form onSubmit={handleSubmit}>
    //       <div className="mb-3 d-flex">
    //         <label className="form-label mr-3">
    //           First Name:
    //         </label>
    //         <div>
    //         <input
    //             type="text"
    //             name="firstName"
    //             value={formData.firstName}
    //             onChange={handleChange}
    //             className={`form-control ${errors.firstName && 'is-invalid'}`}
    //           />
    //           <div  className="invalid-feedback">{errors.firstName}</div>
    //         </div>              
    //       </div>
    //       <div className="mb-6">
    //         <label className="form-label">
    //           Last Name:
    //           <input
    //             type="text"
    //             name="lastName"
    //             value={formData.lastName}
    //             onChange={handleChange}
    //             className={`form-control ${errors.lastName && 'is-invalid'}`}
    //           />
    //           <div className="invalid-feedback">{errors.lastName}</div>
    //         </label>
    //       </div>
    //       <div className="mb-3">
    //         <label className="form-label">
    //           Email:
    //           <input
    //             type="email"
    //             name="email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             className={`form-control ${errors.email && 'is-invalid'}`}
    //           />
    //           <div className="invalid-feedback">{errors.email}</div>
    //         </label>
    //       </div>
    //       <div className="mb-3">
    //         <label className="form-label">
    //           Password:
    //           <input
    //             type="password"
    //             name="password"
    //             value={formData.password}
    //             onChange={handleChange}
    //             className={`form-control ${errors.password && 'is-invalid'}`}
    //           />
    //           <div className="invalid-feedback">{errors.password}</div>
    //         </label>
    //       </div>
    //       <div className="text-center">
    //         <button type="submit" className="btn btn-primary">
    //           Register
    //         </button>
    //       </div>
    //     </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
