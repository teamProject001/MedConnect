import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
    const navigate = useNavigate()
    const [tel, setTel] = useState(props.oneProfile.tel)
    const [city, setCity] = useState(props.oneProfile.city)
    const [country, setCountry] = useState(props.oneProfile.country)
    const [address, setAdress] = useState(props.oneProfile.address)
    const [bio, setBio] = useState(props.oneProfile.bio)

    { console.log(props) }

    return (

        <div className="container p-4 mt-4">

            <div className="row justify-content-evenly mt-4">

                <div className="col-lg-6 col-md-12 mt-4">
                    <div className="d-flex">
                        <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
                    </div>
                    <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                        <form>
                            <div className=" mb-3">
                                <label className="form-label">Telephone</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" value={tel}
                                        onChange={(e) => { setTel(e.target.value) }} />
                                </div>
                            </div>
                            <div className=" mb-3">
                                <label className="form-label">City</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" value={city}
                                        onChange={(e) => { setCity(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className=" mb-3">
                                <label className="form-label">Country</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" value={country}
                                        onChange={(e) => { setCountry(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className=" mb-3">
                                <label className="form-label">Bio</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" value={bio}
                                        onChange={(e) => { setBio(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className=" mb-3">
                                <label className="form-label">Address</label>
                                <div className="input-group">
                                    <textarea type="text" className="form-control" value={address}
                                        onChange={(e) => { setAdress(e.target.value) }}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-outline-primary"
                                    onClick={() => {
                                        props.addProfile({
                                            user: props.oneProfile.user._id,
                                            tel: tel,
                                            city: city,
                                            country: country,
                                            bio: bio,
                                            address: address
                                        }, navigate)
                                    }}>Update <i className="fa-solid fa-floppy-disk"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
