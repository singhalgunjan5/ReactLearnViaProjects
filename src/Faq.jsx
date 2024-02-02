// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Faq({title,info}) {
 const [sign,Setsign] = useState("+");
 const[content,Setcontent]=useState("")
  function showInfo()
  {
    if(sign === "+"){
    Setsign("-");
    Setcontent(info)
    }
    else{
        Setsign("+");
        Setcontent("");
    }

  }
  return (
    <>
  <div>
  <div onClick={showInfo} style={{ display: 'flex', alignItems: 'center' }}>
    <h1>{title}</h1>
    <h1>{sign}</h1>
    <div>
      {content}
    </div>
  </div>
</div>

  </>
  );

}


