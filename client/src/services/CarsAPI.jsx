export const getAllColors = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/color`)
        const data = await response.json()
        console.log("data", data)
        return data
       
    } catch (error) {
        throw error
    }
}

export const getAllRoofs = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/roof`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getAllWheels = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/wheel`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getAllCars = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/car`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}


export const getCarById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/car/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}