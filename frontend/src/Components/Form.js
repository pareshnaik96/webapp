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
    const [temp, setTemp] = useState('')
    const [name, setName] = useState('')

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
            let response = await axios.get(`http://localhost:4000/api/get?city=${userInput.value}`)
            await setTemp(response.data.temp)

            await setUserInput((st) => {
                return {
                    ...st,
                    temp
                }
            })

            await axios.post("http://localhost:4000/api/post", userInput)
                .then((res) => {
                    toast.success("Success", { position: toast.POSITION.TOP_CENTER });
                })
                .catch((err) => {
                    toast.error(err.response)
                })

            let res = await axios.get("http://localhost:4000/api/get/user")
            console.log("user", res.data.user)
            await setName(res.data.user)

            setUserInput({ name: "", value: "" })
        } else {
            toast.error("Enter the required fields", { position: toast.POSITION.TOP_CENTER })
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
            <List name={name} temp={temp.temperature} city={temp.city} />
        </div>
    )
}

export default Form;

