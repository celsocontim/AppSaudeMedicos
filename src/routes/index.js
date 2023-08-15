import { Router } from 'express';
import medicosRoutes from './medicos';

const router = Router();

router.use('/medicos', medicosRoutes);
export default router;