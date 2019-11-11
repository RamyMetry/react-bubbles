import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import AddColor from "./AddColor"
import api from "../utils/api"

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(()=>{
    api().get("/api/colors")
    .then(res=>{
      console.log(res)
      setColorList(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <AddColor colors={colorList} updateColors={setColorList}/>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
