import React, { useState, useEffect } from "react";
import '../App.css'
import * as CarsAPI from "../services/CarsAPI";

const CreateCar = () => {
    const [car, setCar] = useState({
        color: "",
        roof: "",
        wheel: "",
        pricePoint: 1495
    });

    const [colors, setColors] = useState("")
    const [roof, setRoof] = useState("")
    const [colorData, setColorData] = useState()
    const [colorPrice, setColorPrice] = useState(0)
    const [roofs, setRoofs] = useState([])
    const [roofPrice, setRoofPrice] = useState(0)

    const [isConvertible, setIsConvertible] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const data = await CarsAPI.getAllColors()
                setColorData(data)
                console.log("Data1", data)
                const data2 = await CarsAPI.getAllRoof()
                console.log("Data2", data2)
                setRoofs(data2)
            } catch (error) {
                throw error
            }
        })()
    }, [])

    const handleChangeRoof = (event) => {
        var divElem = document.querySelector(".img__wrap")
        divElem.classList.toggle("Selected")
        const { id, value } = event.target
        if (isConvertible && id === "Targa Blue Transparent") {
            alert("Targa Blue Transparent is not available for convertible")
            setRoof("")
        } else {
            for (let i = 0; i < roofs.length; i++) {
                if (roofs[i].color === event.target.id) {
                    const priceroof = roofs[i].price;
                    setRoofPrice(priceroof);
                }
            }

            setRoof(event.target.id)
            setCar((prevCar) => ({
                ...prevCar,
                roof: roof,
            }))
            console.log("This car price of roof ", car)
        }
    }

    const handleChangeColor = (event) => {
        const { id, value } = event.target
        setColors(event.target.id)

        setCar((prevCar) => ({
            ...prevCar,
            color: colors,
        }))

        console.log("This car price of color ", car)
        for (let i = 0; i < colorData.length; i++) {
            if (colorData[i].color === event.target.id) {
                const priceroof = colorData[i].price
                setcolorPrice(colorData[i].price)
            }
        }

        console.log("Thifff ee  ", colors)
        console.log("pppppr  ", colorPrice)
    };
    const SubmitcreateCar = (event) => {
        const price = colorPrice + roofPrice
        setCar((prevCar) => ({
            ...prevCar,
            price: price,
        }))

        console.log("This car price ", car)
        event.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        }

        fetch("http://localhost:3000/api", options)
        // window.location = "/";

    }

    const RoofOption = () => {
        var divElem = document.querySelector(".roofcontainer")
        divElem.classList.toggle("mystyle")
    }
    const ExteriorOption = () => {
        var divElem = document.querySelector(".exteriorcontainer")
        divElem.classList.toggle("mystyle")
    }
    const handleconvertibleChange = (event) => {
        setIsConvertible(!isConvertible)
    }

    return (
        <div>

        </div>
    )
}

export default CreateCar