import { Router } from 'express';
import disciplinasRoter from './disciplinas.routes'

const router = Router();

router.use('/disciplinas', disciplinasRoter);

export default router;
