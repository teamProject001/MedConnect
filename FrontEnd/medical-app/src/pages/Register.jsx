import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Classnames from 'classnames'
const Register = ({ add, errors }) => {

    { console.log(errors) }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const navigate = useNavigate();

    return (

        <div className="container p-4 mt-4">
            <div className="row justify-content-evenly mt-4">

                <div className="col-lg-6 col-md-12 mt-4">
                    <div className="d-flex">
                        <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Register</h2>
                    </div>
                    <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                        <div className=" mb-3">
                            <label className="form-label">Name</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-user"></i></span>
                                <input type="text" className={Classnames("form-control", { "is-invalid": errors })} value={name}
                                    onChange={(e) => { setName(e.target.value) }} />
                                {
                                    errors && (<div className="invalid-feedback">
                                        {errors.name}
                                    </div>)
                                }
                            </div></div>
                        <div className=" mb-3">
                            <label className="form-label">Email address</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-at"></i></span>
                                <input type="text" className={Classnames("form-control", { "is-invalid": errors })} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                {
                                    errors && (<div className="invalid-feedback">
                                        {errors.email}
                                    </div>)
                                }
                            </div>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-key"></i></span>
                                <input type="password" className={Classnames("form-control", { "is-invalid": errors })} value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                                {
                                    errors && (<div className="invalid-feedback">
                                        {errors.password}
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className=" mb-3">
                            <label className="form-label">Confirm password</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-key"></i></span>
                                <input type="password" className={Classnames("form-control", { "is-invalid": errors })} value={confirm} onChange={(e) => { setConfirm(e.target.value) }} />
                                {
                                    errors && (<div className="invalid-feedback">
                                        {errors.confirm}
                                    </div>)
                                }
                            </div>

                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-primary" onClick={() => {
                                add({
                                    name: name,
                                    email: email,
                                    password: password,
                                    confirm: confirm
                                }, navigate)
                            }}>Save <i className="fa-solid fa-floppy-disk"></i></button>
                            <Link to="/login">I have account</Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}



export default Register