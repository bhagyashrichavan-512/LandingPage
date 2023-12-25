import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const RegistrationForm = () => {
  const backgroundImageUrl = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp' ;

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

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
    <div>
      <section className="vh-100 bg-image" style={sectionStyle}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                        <input
                        type="text"
                          name="firstName"
                           value={formData.firstName}
                          onChange={handleChange}
                          className={`form-control ${errors.firstName && 'is-invalid'}`}
                       />
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in{' '}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      {/* <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{' '}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;
