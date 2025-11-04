import React from 'react'
import { useState } from "react";

const Colored = ({label}) => {

        const [isClicked, setIsClicked] = useState(false);

      const handleClick = () => {
    setIsClicked(!isClicked);
  };

    const buttonStyle = {
    backgroundColor: isClicked ? '#40BFFF' : 'transparent', 
    color: isClicked ? '#ffffff' : '#22262A',
  };

  return (
    <div>
        <button style={buttonStyle} onClick={handleClick}>
        {label}
        </button>
    </div>
  )
}

export default Colored