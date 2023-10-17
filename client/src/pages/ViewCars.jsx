import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import * as CarsAPI from "../services/CarsAPI";
import '../App.css'
import { useParams } from 'react-router-dom'

const ViewCars = () => {

    const { id } = useParams()
    const [cars, setCars] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await CarsAPI.getAllCars()
                setCars(data)
            } catch (error) {
                throw error
            }
        })()
    }, [])

    const deleteCar = async (event) => {
        const id = event.target.id
        event.preventDefault()
        const options = {
            method: 'DELETE'
        }
        window.location = '/customcars'
    }


    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Cars</h1>

            {cars ? (
                <div >
                    {/* <select id="carModel" name="carModel"> */}
                    {cars.map((model) => (
                        <Link to={`/customcars/:${model.id}`} >
                            <div className="card" id={model.id}>
                                <div className="card-header">
                                    <h2 className="card-title">{model.pricePoint}</h2>
                                </div>
                                <div className="card-content">
                                    <p> exterior: {model.color}</p>
                                    <p> roof: {model.roof}</p>
                                    <p> wheel: {model.wheel}</p>
                                    <button id={model.id} onClick={DeleteCar}>Delete</button>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            ) : (
                <h3 className="noResults">{"Loading"}</h3>
            )}
        </div>
    )
}

export default ViewCars