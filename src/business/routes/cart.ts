import express, { Router } from 'express';
import * as cartController from '../controllers/cart';

const router: Router = express.Router();

router.get('/', cartController.getUserCart);
router.post('/', cartController.addItemToCart);
// ... other routes ...

export default router;