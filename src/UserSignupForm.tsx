import React, { useState } from "react";
import { UserSignupInterface } from "./interfaces";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
/** Form for signing up a user.
 *
 * props:
 * - function to submit form (lives on parent)
 * State:
 * - formData: { firstName, lastName }
 * 
 * Homepage => {UserSignupForm}
 */

//Note: Form
function UserSignupForm() {

    const INITIAL_DATA: UserSignupInterface = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        hobbies: "",
        interests: "",
        zipCode: "",
        image: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_DATA);
    console.log("* UserSignUp Form", formData)

    /**Handle change on form*/
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /**Handle submit of form, register user or return error if any */
    function handleSubmit(evt) {
        evt.preventDefault();
        setFormData(INITIAL_DATA);
        console.log("Check out state ->", formData);
        // do something with the data submitted
        //TODO: try/catch with register user and handle errors
    }

    return (
        // <Card>
        //     <CardBody>
                <form onSubmit={handleSubmit}>
                    {/* <CardTitle> */}
                        <label htmlFor="username">Username:</label>
                    {/* </CardTitle> */}
                    <input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="firstName">First:</label>
                    <input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    <label htmlFor="lastName">Last:</label>
                    <input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="hobbies">Hobbies:</label>
                    <textarea
                        id="hobbies"
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                    />
                    <label htmlFor="interests">Interests:</label>
                    <textarea
                        id="interests"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                    />
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                    <label htmlFor="image">Image:</label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        value={formData.image}
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
                    <button>Sign Up!</button>
                </form>
        //     </CardBody>
        // </Card>
    );
}

export default UserSignupForm;