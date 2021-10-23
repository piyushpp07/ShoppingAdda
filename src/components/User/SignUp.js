
import React, { useState } from "react";
import styled from "styled-components";
import { auth, database } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import { Lock, Person } from "@material-ui/icons";
export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory()
    const signUp = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    auth.user.updateProfile({ displayName: firstName + " " + lastName });
                    database.collection("users").doc(auth.user.uid).set({
                        name: firstName + lastName,
                        email: email

                    });
                    if (auth) {
                        history.push("/");
                    }
                })
                .catch((error) => alert(error.message));
        } else {
            alert("Password must be same");
        }
    };
    return (
        <>
            <Styles>
                <div className="content">
                    <div className="text">
                        <h1>Sign Up</h1>
                        <br />
                        <h3> Discover Fashion! </h3>
                        <p>You're just one step away from signing up</p>
                    </div>
                    <form action="#">
                        <div className="name">
                            <Input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter your firstname"
                                required
                            />
                            <Input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter your lastname"
                                required
                            />
                        </div>

                        <div className="field">
                            <Person
                                style={{ position: "absolute", bottom: "14px", left: "1rem" }}
                            />
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email or Phone"
                                required
                            />
                        </div>
                        <div className="field">
                            <Lock
                                style={{ position: "absolute", bottom: "14px", left: "1rem" }}
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="field">
                            <Lock
                                style={{ position: "absolute", bottom: "14px", left: "1rem" }}
                            />
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <button onClick={signUp}>Sign Up</button>
                        <div className="signup">
                            Already  Have an account?
                            <Link to="/login">Login Now</Link>
                        </div>
                    </form>
                </div>
            </Styles>
        </>

    )
}
const Input = styled.input`
    width: 50%;
    padding: 0.8rem;
    font-size: 14px;
    outline: none;
    border: none;
    color: #595959;
    background: #fff;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
    &:focus ~ label {
        box-shadow: inset 2px 2px 5px #babecc, inset -1px -1px 2px #ffffff73;
    }
    &:nth-child(1) {
        border-radius: 25px 0 0 25px;
    }
    &:nth-child(2) {
        border-radius: 0 25px 25px 0;
    }
    `;

const Styles = styled.div`
    display: flex;
    justify-content: center;
    .content {
        width: 400px;
        background: #ffff;
        border-radius: 15px;
        padding: 40px 30px;
        box-shadow: 0 22px 40px rgba(17, 96, 96, 0.2);
    }
    .name {
        display: flex;
    }
    .text {
        text-align: center;
        text-transform: uppercase;
        padding-bottom: 0.5rem;
        h1 {
        font-size: 22px;
        font-weight: bold;
        }
        h3 {
        font-size: 18px;
        font-weight: bold;
        }
        p {
        font-size: 10px;
        }
    }
    .field {
        height: 50px;
        width: 100%;
        display: flex;
        position: relative;
        margin-top: 20px;
        input {
        height: 100%;
        width: 100%;
        padding-left: 45px;
        font-size: 18px;
        outline: none;
        border: none;
        color: #595959;
        border-radius: 25px;
        box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
        &:focus ~ label {
            box-shadow: inset 2px 2px 5px #babecc, inset -1px -1px 2px #ffffff73;
        }
        }
        .field span {
        position: absolute;
        width: 50px;
        line-height: 50px;
        color: #595959;
        }
        .field label {
        position: absolute;
        top: 50%;
        left: 45px;
        pointer-events: none;
        color: #666666;
        transform: translateY(-50%);
        }
        .field input:focus ~ label {
        opacity: 0;
        }
    }
    button {
        margin: 15px 0;
        width: 100%;
        height: 50px;
        color: #000;
        font-size: 18px;
        font-weight: 600;
        background: #dde1e7;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 25px;
        box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;
        &:focus {
        color: #3498db;
        box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
        }
    }
    .signup {
        font-size: 16px;
        color: #595959;
        margin: 10px 0;
        a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            color: #000;
        }
        }
    }
    `;