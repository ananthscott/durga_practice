import logo from './logo.svg';
import './App.css';
import Header from './Header';
import DivComponent from './DivComponent';
import Button from './Button';
import InputText from './InputText';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Box';
import axios from 'axios';
import { useState, useEffect } from 'react';
const App =() => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetWeatherDetails = async () => {
      try {
        const response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json",{
          headers: {
            "Cookie": "connect.sid=s%3Av_-rPV9DiWdhYzsAc6XjQ1D_eqai6tLJ.NidNMXOKzzraUU%2Bpj2lOV4FX603ZzIsQ0s3oXpt9hqc"
          
          },
      });
       console.log(response.data);
       setResults(response.data.Results)
      } catch (err) {
        console.log("Error");
      }
    };

    fetWeatherDetails(); // Call the function
  }, []);


  return (
  
    
    <div className="form-group">
      <Box text="Some text Some text Some text Some text Some text" ></Box>
      
      {results.map(eachResult => <Box text={eachResult.Make_Name}></Box>)}

    </div>
  );
}

export default App;
