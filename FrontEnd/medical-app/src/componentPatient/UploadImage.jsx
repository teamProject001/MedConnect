import React, { useState } from 'react'

const UploadImage = (props) => {
    const [firstName,setfirst]=useState("")
    const [lastName,setlastname]=useState("")
    const [age,setage]=useState("")
    const [phone,setphone]=useState("")
    const [email,setemail]=useState("")
    const [adresse,setadres]=useState("")
    const [city,setcity]=useState("")
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const uploadFile = async () => {
        const data = new FormData();
        data.append("file", image); 
        data.append("upload_preset", "tested");
        try {
            const cloudName = "dxjndurf9";
            const resourceType = "image"; 
            const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
            const res = await axios.post(api, data);
            const { url } = res.data;
            console.log(url);
            return url;
        } catch (error) {
            console.log(error);
        }
    }
    const handle = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const imgUrl = await uploadFile();
            setImageUrl(imgUrl);  // Store the uploaded image URL in state
            setImage(null); // Clear the image input
            console.log("Upload successful");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const handleCreate = () => {
        props.addPatient({
            image: imageUrl,  // Use the uploaded image URL
            name: name,
            firstName:firstName,
            lastname:lastname,
            age:age,
            phone:phone,
            email:email,
            adresse:adresse,
            city:city
        });
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <form onSubmit={handle} className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <div className="flex mb-4">
                <div className="flex-1">
                    <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])} // set the image file
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                   
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 text-white rounded mt-2 ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                    >
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                    <input
                        type="text"
                        value={firstName}
                        placeholder='fistname'
                        onChange={e => setfirst(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                    <input
                        type="text"
                        value={lastName}
                        placeholder='lastname'
                        onChange={e => setlastname(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                    <input
                        type="text"
                        value={age}
                        placeholder='age'
                        onChange={e => setage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                    <input
                        type="text"
                        value={phone}
                        placeholder='phone'
                        onChange={e => setphone(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                    <input
                        type="text"
                        value={email}
                        placeholder='email'
                        onChange={e => setemail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                    <input
                        type="text"
                        value={adresse}
                        placeholder='adresse'
                        onChange={e => setadres(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                     <input
                        type="text"
                        value={city}
                        placeholder='city'
                        onChange={e => setcity(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                </div>
                {imageUrl && (
                    <div className="ml-4">
                        <img src={imageUrl}  className="w-20 h-20 object-cover rounded-full border border-gray-300" />
                    </div>
                )}
            </div>
            <button
            onClick={handleCreate}
            disabled={loading || !imageUrl}
            className={`w-full py-2 px-4 mt-4 text-white rounded ${loading || !imageUrl ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
        >
            {loading ? 'Creating...' : 'Create'}
        </button> 
        
        </form>
    </div>
        
);
}

export default UploadImage
