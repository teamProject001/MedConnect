import React from "react";

const Login = () => {

    return (
        <div>
            <div className="bg-light" style={{height: '100vh'}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">MERN Profile</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Profile</a>
                                </li>
                            </ul>
                            <div class="d-flex">
                                <div class="mx-4">
                                    <a class="btn btn-outline-primary" href="/template/register.html">Register</a>
                                    <a class="btn btn-outline-primary" href="/template/login.html">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container p-4 mt-4">
                    <div class="row justify-content-evenly mt-4">
                        <div class="col-lg-6 col-md-12 mt-4">
                            <div class="d-flex">
                                <i class="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Login</h2>
                            </div>
                            <div class="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                                <form>
                                    <div class=" mb-3">
                                        <label class="form-label">Email address</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
                                            <input type="text" class="form-control" />
                                        </div>

                                    </div>
                                    <div class=" mb-3">
                                        <label class="form-label">Password</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                                            <input type="password" class="form-control" />
                                        </div>

                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <button type="submit" class="btn btn-outline-primary">Save <i class="fa-solid fa-floppy-disk"></i></button>
                                        <a href="/template/register.html">I don't have account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;