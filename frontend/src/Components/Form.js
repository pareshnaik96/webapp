import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'
import List from './List'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        value: "",
    })
    const [name, setName] = useState('')
    const [closest, setClosest] = useState('')
    const [temp, setTemp] = useState('')


    const handlerChange = (event) => {
        const { name, value } = event.target
        setUserInput((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { name, value } = userInput
        if (name && value) {
            await axios.post("http://localhost:4000/api/post", userInput)
                .then((res) => {
                    toast.success("Success", { position: toast.POSITION.TOP_CENTER });
                })
                .catch((err) => {
                    toast.error(err)
                })

            let response = await axios.get("http://localhost:4000/api/get")
            setName(response.data.name)
            setClosest(response.data.closest)
            setTemp(response.data.temperature)


            setUserInput({ name: "", value: "" })

        } else {
            toast.error("Error", { position: toast.POSITION.TOP_CENTER });
        }

    }


    return (
        <div className="box">
            <form onSubmit={handleSubmit}>
                <label >Name:</label>
                <input type="text" value={userInput.name} name="name" onChange={handlerChange}></input>

                <label >Value:</label>
                <input type="text" value={userInput.value} name="value" onChange={handlerChange}></input>
                <div >
                    <button className="btn" type="submit" >Submit</button>
                </div>
                <ToastContainer></ToastContainer>
            </form>
            <List name={name} closest={closest} temp={temp} />
        </div>
    )
}

export default Form;

