import { useState } from "react";
import { useHistory } from "react-router-dom";
/** Form for signing up a user.
 *
 * props:
 * - function to submit form (lives on parent)
 * State:
 * - formData: { firstName, lastName }
 * 
 * Homepage => {UserSignupForm}
 */


function UserSignupForm({ registerUser }) {
    const history = useHistory();
    const INITIAL_DATA = {
        username: "1",
        firstName: "1",
        lastName: "1",
        email: "1@1.com",
        hobbies: "1",
        interests: "1",
        zipCode: "1",
        image: "",
        password: "12345678"
    }
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [fileData, setFileData] = useState(null);
    const [errors, setErrors] = useState(null);
    console.log("* UserSignUp Form", formData)


    /**Handle change on form*/
    function handleChange(evt) {
        const { name, value } = evt.target;
        console.log("target.files: ", evt.target.files);
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleFileChange(evt) {
        setFileData(evt.target.files[0]);
        handleChange(evt); //refactor: remove image key/value pair
    }

    /**Handle submit of form, register user or return error if any */
    async function handleSubmit(evt) {
        evt.preventDefault();
        const data = new FormData()

        for (let input in formData) {
            data.append(input, formData[input])
        };

        data.append('file', fileData)

        console.log("Check out state on form submit", formData);

        try {
            await registerUser(data)
            setFormData(INITIAL_DATA);
            history.push("/");
        } catch (err) {
            setErrors(err);
        }
    }

    return (
        <div className="row justify-content-center">
            <h1 className="m-4">Sign Up!</h1>
            <form className="col-8 border" onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="username">Username:</label>
                    <input
                        className="col-4"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="firstName">First:</label>
                    <input
                        className="col-4"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="lastName">Last:</label>
                    <input
                        className="col-4"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="email">Email:</label>
                    <input
                        className="col-4"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="hobbies">Hobbies:</label>
                    <textarea
                        className="col-4"
                        id="hobbies"
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="interests">Interests:</label>
                    <textarea
                        className="col-4"
                        id="interests"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="zipCode">Zip Code:</label>
                    <input
                        className="col-4"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="image">Image:</label>
                    <input
                        className="col-4"
                        id="image"
                        name="image"
                        type="file"
                        value={formData.image}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="password">Password:</label>
                    <input
                        className="col-4"
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button className="mt-4">Sign Up!</button>
                {errors && <p>{errors.toString()}</p>}
            </form>
        </div>
    );
}

export default UserSignupForm;