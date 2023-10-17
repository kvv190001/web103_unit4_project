
import '../App.css'
import * as CarsAPI from "../services/CarsAPI";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
const CarDetails = (props) => {

    const { id } = useParams()
  
    const[cars, setCars] = useState([])

    // useEffect(() => {
    //     (async () => {
    //       try {
    //         const data = await CarAPI.getcarbyid();
    //         setCars(data);
    //         console.log("Data1", data);
         
    //       } catch (error) {
    //         throw error;
    //       }
    //     })();
    //   }, [id]);
console.log("id",)
    return (
        <div>
            <h2 style={{textAlign: "center"}}>

                car details
            </h2>
            
            <h3>
            Midnight Black
            </h3>
            Carbon Fiber Removable Roof



        </div>
    )
}

export default CarDetails