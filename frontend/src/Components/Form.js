import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'
import List from './List'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function findClosest(numbers, target) {
    let closest = numbers[0]; // assume the first number is the closest

    for (let i = 1; i < numbers.length; i++) {
        // check the absolute difference between the current number and the target
        let diff1 = Math.abs(numbers[i] - target);
        let diff2 = Math.abs(closest - target);
        // console.log(diff1, "diff1")
        // console.log(diff2, "diff2")
        // if the current number is closer to the target, set it as the closest
        if (diff1 < diff2) {
            closest = numbers[i];
        }
    }

    return closest;
}


const Form = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        value: "",
    })
    const [closest, setClosest] = useState('')
    const [temp, setTemp] = useState('')
    // const [name, setName] = useState('')

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
        // try {
        const { name, value } = userInput
        // if (name && value) {
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

        //function call 
        await setClosest(findClosest(userInput.value.split(","), temp.temperature))

        // let res = await axios.get("http://localhost:4000/api/get/user")
        // await setName(res.data.user)

        console.log(value, temp, closest)
        // setUserInput({ name: "", value: "" })
        // } else {
        //     toast.error("Enter the required fields", { position: toast.POSITION.TOP_CENTER })
        // }
        // }
        // catch (error) {
        //     toast.error("error", { position: toast.POSITION.TOP_CENTER })
        // }

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
            <List temp={temp.temperature} closest={closest} />
        </div>
    )
}

export default Form;

