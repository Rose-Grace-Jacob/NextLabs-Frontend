import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const baseUrl = "https://rosegracejacob.pythonanywhere.com/";
// https://next-labs-backend.vercel.app/
const SignUpPage = () => {

  const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [userData, setUserData] = useState({
      username: "",
      email: "",
      password: "",
      password2: "",
    });
    
    const handleChange= (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    };

    console.log(userData);

    const submitForm = (e) => {
      e.preventDefault();
      setFormErrors(validate(userData));
      // if (formErrors) {
      //   Swal.fire("error", "Something went wrong!");
      // }
  
      Axios.post(baseUrl + 'user/register/', {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        password2: userData.password2,
      }).then((response) => {
   
        console.log("ooooooooooooooooo",response.data);
        navigate("/login");
        
  
      }).catch((err)=>{
        console.log(err);
      });
    };

    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(userData);
      }
    }, [formErrors]);
   
    const validate = (values) => {
      console.log("validating");
      const errors = {};
      if (!values.email) {
        errors.email = "Email  is required";
      }
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.password.length < 4) {
        errors.password = "Password length more than 4 characters";
      }
      if (values.password !== values.password2) {
        errors.password2 = "Confrim password does not match";
      }
      return errors;
    };



    function odiko() {
      navigate("/login");
    }
  return (
    <div>
        <div className="w-full max-w-lg container mx-auto mt-6">
      <h1
        className="text-indigo-700 text-4xl mt-12 justify-center text-center
         font-extrabold"
      >
        Sign Up
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      > 
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Username
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="username"
            id="username"
            type="text"
            placeholder="Username"
          />
          <p className="text-red-600">{formErrors.username}</p>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Email
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="username"
            type="text"
            placeholder="Username"
          />
          <p className="text-red-600">{formErrors.email}</p>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
           
          >
            Password
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-600">{formErrors.password}</p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
           
          >
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password2"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-600">{formErrors.password2}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={submitForm}
            className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <p
            className="inline-block align-baseline font-bold text-sm text-indigo-700 hover:text-indigo-500"
            onClick={odiko}
          >
            Already have account?
          </p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignUpPage