import express from 'express'
import tallyController from '../controllers/tally'

const router = express.Router()

router.post('/tally-hook', tallyController.receiveData)

export = router
