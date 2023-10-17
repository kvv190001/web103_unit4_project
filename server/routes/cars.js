import express from 'express'
import CarsController from '../controllers/cars.js'

const router = express.Router()

router.get('/car', CarsController.getCar)
router.get('/car:id', CarsController.getCarById)
router.post('/', CarsController.createCar)
router.delete('/:id', CarsController.deleteCar)
router.patch('/:id', CarsController.updateCar)
router.get('/color', CarsController.getColor)
router.get('/wheel', CarsController.getWheel)
router.get('/roof', CarsController.getRoof)

export default router