import { CompaniesController } from '../controllers/companiesController';
import { Request, Response, Router } from 'express';

export const router = Router();

const companiesController = new CompaniesController();
// router.param('id', companiesController.checkID);

router.route('/').get(companiesController.getAllCompanies).post(companiesController.createCompany);

router.route('/:id').get(companiesController.getCompany).patch(companiesController.updateCompany).delete(companiesController.deleteCompany);
