import { pool } from '../config/database.js'
import '../config/dotenv.js'
// import carData from '../data/cars.js'
import ColorData from '../data/colors.js'
import roofData from '../data/roof.js'

const createCarsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS cars,

        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint SERIAL NOT NULL,
            color VARCHAR(255) NOT NULL,
            roof VARCHAR(255) NOT NULL,
            wheel VARCHAR(255) NOT NULL
        )
    `

    try{
        await pool.query(createTableQuery)
        console.log('cars table created successfully')
    } catch (err) {
        console.log(' error creating cars table', err)
    }
}

const createColorTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS colors;

    CREATE TABLE IF NOT EXISTS colors(
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price SERIAL NOT NULL,
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 events table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

const seedColorsTable = async () => {
  await createCarTable()
  await createColorTable()

  ColorData.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO colors (color, image,price) VALUES ($1, $2, $3)'
    }

    const values = [
      event.color,
      event.image,
      event.price
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting event', err)
        return
      }
      console.log(`✅ ${event.name} added successfully`)
    })
  })
}
const createRoofTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS roof;

    CREATE TABLE IF NOT EXISTS colors(
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price SERIAL NOT NULL,
      isconvertible BOOLEAN NOT NULL,
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 events table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

const seedRoofTable = async () => {
  await createRoofTable()

  roofData.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO roof (color, image,price,isconvertible) VALUES ($1, $2, $3, $4)'
    }

    const values = [
      event.color,
      event.image,
      event.price,
      event.isconvertible
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting event', err)
        return
      }
      console.log(`✅ ${event.name} added successfully`)
    })
  })
}




seedRoofTable();
seedColorsTable();