import { useEffect, useState } from "react";
import axios from "axios";


const Box = ({ text, style }) => {


    const defaultStyle = {
      backgroundColor: "#f0f0f0",
      color: "#333",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      textAlign: "center",
      width: "200px",
      margin: "10px auto",
      ...style, // Merge with custom styles passed as props
    };
  
    return <div style={defaultStyle}>{text}</div>;
  };

  export default Box;