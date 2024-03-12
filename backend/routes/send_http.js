import express from 'express'

import { send } from '../controller/send_http.js'

const router = express.Router();


router.get('/send',send)

export default router