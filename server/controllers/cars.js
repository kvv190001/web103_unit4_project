import { pool } from '../config/database.js'

const createCar = async (req, res) => {
  try {
    const { name, pricePoint, exterior, roof, wheel } = req.body // TK???????
    const results = await pool.query(`
      INSERT INTO cars (name, pricePoint, exterior, roof, wheel)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *`,
      [name, pricePoint, exterior, roof, wheel]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, pricePoint, exterior, roof, wheel } = req.body // TK???????
    const results = await pool.query(`
      UPDATE cars SET name = $1, pricepoint = $2, exterior = $3, roof = $4, wheel = $5 = $6 WHERE id = $7`,
      [name, pricePoint, exterior, roof, wheel, id]
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const getCar = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getCarById = async (req, res) => {
  try {
    const carId = req.params.carId
    const selectQuery = `SELECT name, pricePoint, exterior, roof, wheel FROM cars WHERE id = ${carId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM cars WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const getColor = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM colors ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getRoof= async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM roofs ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getWheel= async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM wheels ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

export default {
  getCar,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  getColor,
  getRoof,
  getWheel
}