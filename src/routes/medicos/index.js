import { Router } from 'express';
import { Medicos } from '../../models/medicos';

const router = Router();


router.get ('/medicos-disponiveis', async (req, res, next) => {
	try {
		const medicos = await Medicos.find();
          res.json({
            Medicos: medicos,
          });
        } catch (error) {
          next(error);
	}
});

router.post('/novo-medico',async  (req, res, next) => {
  try {
    await Medicos.create({
      nome: req.body.nome,
      especialidade: req.body.especialidade,
    });
    res.json({
      message: 'Sucesso!',
    });
  } catch (error) {
    next(error);
  }
});

router.get('/medico-id:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const medicos = await Medicos.findOne({ _id: id });
    if (!medicos) {
      const err = new Error('Id não encontrado');
      err.status = 404;
      throw err;
    }
    res.json({
      Medico: medicos,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
