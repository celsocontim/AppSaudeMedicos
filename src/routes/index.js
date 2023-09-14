import { Router } from 'express';
import medicosRoutes from './medicos';

const router = Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use('/medicos', medicosRoutes);
export default router;