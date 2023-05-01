import { PositionsController } from '../controllers/positionsController';
import { Router } from 'express';

export const router = Router();

const positionsController = new PositionsController();
// router.param('id', companiesController.checkID);

router.route('/').get(positionsController.getAllPositions).post(positionsController.createPosition);

router.route('/:status').get(positionsController.getAllPositionsByStatus)

router.route('/:id').get(positionsController.getPosition).patch(positionsController.updatePosition).delete(positionsController.deletePosition);
