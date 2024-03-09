import { useState } from 'react';
import './InoutField.css'; // Import CSS file for styling
import { FaEnvelope, FaEye, FaEyeSlash, } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const InputFields = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };
   const onSubmit = data => console.log(data);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="goof-form">
            <div className="form-group">
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  {...register('name', { required: "Name is required", pattern: { value: /^[A-Za-z]+$/, message: "Name must contain only letters" } })}
               />
               {errors && errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>
            <div className="form-group">
               <label htmlFor="phone">Phone Number:</label>
               <input
                  type="tel"
                  name="phone"
                  id="phone"
                  {...register('phone', { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
               />
               {errors && errors.phone && <span className="error-message">{errors.phone.message}</span>}
            </div>
            <div className="form-group">
               <label htmlFor="email">Email:</label>
               <div className="input-with-icon">

                  <input
                     type="email"
                     id="email"
                     name="email"
                     {...register('email', { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}
                     className="form-control"
                  />
                  <FaEnvelope className="input-icon" />
               </div>
               {errors && errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="form-group">
               <label htmlFor="password">Password:</label>
               <div className="input-with-icon">

                  <input
                     type={showPassword ? "text" : "password"}
                     id="password"
                     name="password"
                     {...register('password', {
                        required: "Password is required",
                        minLength: { value: 8, message: "Password must be at least 8 characters long" },
                        pattern: {
                           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                           message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                        }
                     })}
                     className="form-control" // Apply the same class as other fields
                  />
                  <div className="toggle-password" onClick={togglePasswordVisibility}>
                     {showPassword ? <FaEyeSlash className="password-toggle-icon" /> : <FaEye className="password-toggle-icon" />}
                  </div>
               </div>
               {errors && errors.password && <span className="error-message">{errors.password.message}</span>}
            </div>

            <div className="form-group">
               <label htmlFor="dropdown">Select Option:</label>
               <div className="select-wrapper">
                  <select id="dropdown" name="dropdown" {...register('dropdown', { required: "Please select an option" })} className="form-control">
                     <option value="">Select...</option>
                     <option value="option1">Option 1</option>
                     <option value="option2">Option 2</option>
                     <option value="option3">Option 3</option>
                     {/* Add more options as needed */}
                  </select>
                  <div className="dropdown-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                     </svg>
                  </div>
               </div>
               {errors && errors.dropdown && <span className="error-message">{errors.dropdown.message}</span>}
            </div>




            <div className="form-group">
               <label htmlFor="birthdate">Birthdate:</label>
               <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  {...register('birthdate', { required: "Birthdate is required" })}
               />
               {errors && errors.birthdate && <span className="error-message">{errors.birthdate.message}</span>}
            </div>
            <div className="form-group">
               <label htmlFor="price">Choose a maximum house price:</label>
               <input
                  type="range"
                  name="price"
                  id="price"
                  min="50000"
                  max="500000"
                  step="100"
                  defaultValue="250000"
                  {...register('price')}
               />
            </div>
            <div className="form-group ">
               <label>Gender:</label>
               <div className='d-flex align-items-center'>
                  <input
                     type="radio"
                     id="male"
                     name="gender"
                     value="male"
                     {...register('gender', { required: true })}
                  />
                  <label htmlFor="male">Male</label>
               </div>
               <div className='d-flex align-items-center'>
                  <input
                     type="radio"
                     id="female"
                     name="gender"
                     value="female"
                     {...register('gender', { required: true })}
                  />
                  <label htmlFor="female">Female</label>
               </div>
               {errors && errors.gender && <span className="error-message">Please select your gender</span>}
            </div>
            <div className="form-group">
               <label>Interests:</label>
               <div className='d-flex align-items-center'>
                  <input
                     type="checkbox"
                     id="football"
                     name="interests"
                     value="football"
                     {...register('interests')}
                  />
                  <label htmlFor="football">Football</label>
               </div>
               <div className='d-flex align-items-center'>
                  <input
                     type="checkbox"
                     id="basketball"
                     name="interests"
                     value="basketball"
                     {...register('interests')}
                  />
                  <label htmlFor="basketball">Basketball</label>
               </div>
               <div className='d-flex align-items-center'>
                  <input
                     type="checkbox"
                     id="tennis"
                     name="interests"
                     value="tennis"
                     {...register('interests')}
                  />
                  <label htmlFor="tennis">Tennis</label>
               </div>
               {/* Add more checkboxes as needed */}
            </div>

         </div>
         <div className="text-center">
            <button type="submit" className="submit-button ">Submit</button>
         </div>
      </form>
   )
}

export default InputFields;
