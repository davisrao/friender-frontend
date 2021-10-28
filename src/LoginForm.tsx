import React, { useState } from "react";
import { LoginInterface } from "./interfaces";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

/** Form for logging in up a user.
 *
 * props:
 * - function to loginUser (lives on parent)
 * State:
 * - formData: { username, password }
 * - errors: "err"
 * 
 * Homepage => Routes => {LoginForm}
 */

//Note: Form
function LoginForm({ loginUser }) {

    const INITIAL_DATA: LoginInterface = {
        username: "elies",
        password: "password"
    }
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [errors, setErrors] = useState(null);

    /**Handle change on form*/
    function handleChange(evt) {
        const { name, value } = evt.target;
        // console.log("target.files: ", evt.target.files);
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /**Handle submit of form, register user or return error if any */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try{
            await loginUser(formData);
            setFormData(INITIAL_DATA);
        } catch (err) {
            console.log("errors form Login Form: ", err["Error"]);
            setErrors(err);
        }
    }

    console.log("Errors right before return: ", errors);
    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button>Login!</button>
            {errors && <p>{errors.toString()}</p>}
        </form>
    );
}

export default LoginForm;