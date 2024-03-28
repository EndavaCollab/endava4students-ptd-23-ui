import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import sha256 from "js-sha256";

import { API_URL } from "../../../config";
import "./index.css";
import logo from "../../../assets/Logo-White.svg";

// the keys have the same name as the input states
const REGEX = {
    firstName: /^[a-zA-Z ]+$/,
    lastName: /^[a-zA-Z ]+$/,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
}

const errorMessages = {
    firstName: "First Name must contain only letters or spaces",
    lastName: "Last Name must contain only letters or spaces",
    email: "Invalid email format",
    password: "Password must contain at least 8 characters including at least one upper and lowercase letter and a number.",
    confirmPassword: "Passwords do not match",
    emptyField: "This field is required",
}


const Register = () => {
    const navigate = useNavigate();

    const firstNameRef = useRef();

    const [wasFormSubmitted, setWasFormSubmitted] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [formError, setFormError] = useState("");

    useEffect(() => {
        setFormError("");
    }, [firstName, lastName, email, password, confirmPassword, wasFormSubmitted]);

    const getErrorMessage = (fieldName) => {
        const fieldValues = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        }

        const fieldValue = fieldValues[fieldName];

        let errorMessage = null;
        const emptyFieldError = errorMessages["emptyField"];
        const invalidFieldError = errorMessages[fieldName];

        if (!fieldValue && wasFormSubmitted) {
            errorMessage = emptyFieldError;
        } else if (
            (fieldValue && fieldName === "confirmPassword" && password !== confirmPassword) ||
            (REGEX[fieldName] && !REGEX[fieldName].test(fieldValue) && fieldValue)) {
            errorMessage = invalidFieldError;
        }

        return errorMessage ?
            <div className="w-100"><p className="badge text-wrap error-message">{errorMessage}</p></div> : null;
    }

    const isFormValid = () => {
        return (
            REGEX.firstName.test(firstName) &&
            REGEX.lastName.test(lastName) &&
            REGEX.email.test(email) &&
            REGEX.password.test(password) &&
            password === confirmPassword
        );
    }

    const submit = (e) => {
        e.preventDefault();
        setWasFormSubmitted(true);

        if (isFormValid()) {
            const hashedPassword = sha256(password);
            fetch(`${API_URL}/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({firstname: firstName, lastname: lastName, email, password: hashedPassword}),
            })
                .then(response => {
                    if (!response.ok) {
                        {
                            if (response.status === 400)
                                throw Error("Email already exits");
                            else
                                throw Error("Something went wrong!");
                        }
                    }
                    return response.json();
                })
                .then((user) => {
                    if (user) {
                        navigate("/login");
                    } else {
                        throw Error("Something went wrong!");
                    }
                })
                .catch((error) => {
                    setFormError(error.message);
                });
        }
    };


    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center text-white pt-5">
                <div className="d-flex flex-column fs-3 w-50 text-shadow">
                    <p className="opacity-75">Welcome to</p>
                    <img src={logo} alt="logo" className="logo"/>
                    <ul className="pt-5">
                        <li> Plan your trips easily.</li>
                        <li> Have your notes in one place.</li>
                        <li> Log your trip expenses.</li>
                    </ul>
                </div>
                <div className="card rounded-4 border-1 border-black shadow" style={{width: "40%"}}>
                    <div className="card-body">
                        <div className="d-flex justify-content-center m-3">
                            <span className="card-title fs-3 font-weight-bold">Register Your Account</span>
                        </div>
                        <form onSubmit={submit} className="d-flex flex-column gap-2 align-items-center" noValidate>
                            <div className="w-100"><p className="badge text-wrap error-message">{formError}</p></div>
                            <div className="input-field">
                                <label htmlFor="first-name">First Name</label>
                                <input
                                    ref={firstNameRef}
                                    className="border border-dark rounded-3"
                                    type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="John"
                                    value={firstName}
                                    id="first-name"
                                />
                                {getErrorMessage("firstName")}
                            </div>

                            <div className="input-field">
                                <label htmlFor="last-name">Last Name</label>
                                <input
                                    className="border border-dark rounded-3"
                                    type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Doe"
                                    value={lastName}
                                    id="last-name"
                                />
                                {getErrorMessage("lastName")}
                            </div>

                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="border border-dark rounded-3"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john.doe@domain.com"
                                    value={email}
                                    id="email"
                                />
                                {getErrorMessage("email")}
                            </div>

                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input
                                    className="border border-dark rounded-3"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Type in your password"
                                    value={password}
                                    id="password"
                                />
                                {getErrorMessage("password")}
                            </div>

                            <div className="input-field">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    className="border border-dark rounded-3"
                                    type="password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Retype in your password"
                                    value={confirmPassword}
                                    id="confirm-password"
                                />
                                {getErrorMessage("confirmPassword")}
                            </div>

                            <button type="submit" className="btn btn-dark rounded-3 w-100">
                                Register
                            </button>
                            <span>Do you have an account? <a href="/login" className="login-link">Log In</a></span>
                        </form>
                    </div>
                </div>
            </div>
        </>);
};

export default Register;
