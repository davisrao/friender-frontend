import { useState } from "react";
import { useHistory } from "react-router-dom";

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
    const history = useHistory();

    const INITIAL_DATA = {
        username: "",
        password: ""
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
        try {
            await loginUser(formData);
            setFormData(INITIAL_DATA);
            history.push("/")
        } catch (err) {
            console.log("errors form Login Form: ", err["Error"]);
            setErrors(err);
        }
    }

    console.log("Errors right before return: ", errors);
    return (
        <div className="row justify-content-center">
            <h1 className="m-4">Log In!</h1>
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
                <button className="m-4">Login!</button>
                {errors && <p>{errors.toString()}</p>}
            </form>
        </div >
    );
}

export default LoginForm;