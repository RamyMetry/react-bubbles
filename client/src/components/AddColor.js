import React,{useState} from "react";
import api from "../utils/api"

function AddColor(props){
    console.log(props)
    const[addColor,setAddColor]=useState({
        color: "",
        code: { hex: "" }
    })

    const handleChande=(event)=>{
        setAddColor({
            ...addColor,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        api().post("/api/colors",addColor)
        .then(res=>{
            console.log(res)
            localStorage.setItem("data",JSON.stringify(res.data))
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <p>color</p><input name="color" type="text" value={addColor.color} onChange={handleChande}/>
                <p>hexcode</p><input name="code" type="text" value={addColor.code.hex} onChange={handleChande}/>
                <button type="submit">AddColor</button>
            </form>
        </>
    )
}

export default AddColor;

