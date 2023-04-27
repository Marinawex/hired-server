import { Request, Response, NextFunction } from 'express';
import { CompaniesService } from '../services/companiesService';
// import { companies } from '../models/companies';
import { Position } from '../models/positionsModel';
import { validatePosition } from './companiesValidator';

export class CompaniesController {
  companiesService = new CompaniesService();

  constructor() {}

  async getAllCompanies(req: Request, res: Response) {
    try {
      //build query
      //1)filtering
      
      const queryObj = { ...req.query };
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach((field) => delete queryObj[field]);
      console.log(req.query, queryObj);

      //2) advenced filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      let query = Position.find(JSON.parse(queryStr));

      // console.log(query);
      

      // in the query string this will lock like  ?duration[gte]=5

      //3) sorting ?sort=price
      // or ?sort=-price desending order
      // if(req.query.sort){
      //   query = query.sort(req.query.sort)
      //   const sortBy = this.queryStr.sort.split(',').join(' ');
      //   query = this.query.sort(sortBy);

      // }

      // const companies = await Company.find(); ---- return all companies
      // const companies = await Company.find(req.query); ----- query example
      // const companies = await Company.find().where('applicationDate').equals('2023-03-07') ----- query example

      //exequte query
      const companies = await query;

      // console.log(companies);
      

      // //  i want to refactor this function call place and dind here better place and implementation
     const companiesWithDaysCounter =  companies.map((company) => {
        return {
          ...company,
          //  find the way to make it work with companiesServise!!!
        daysPassedSinceApplication:  7
        };

      }) 

      console.log(companiesWithDaysCounter);

      //send response
      res.status(200).json({
        status: 'success',
        results: companiesWithDaysCounter.length,
        data: {
          companies:companiesWithDaysCounter,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async getAllCompaniesByStatus(req: Request, res: Response) {
    let statusaName = req.query
    const companies = Position.find({})

  }

  async getCompany(req: Request, res: Response) {
    try {
      const company = await Position.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          company,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async createCompany(req: Request, res: Response) {
    const status = 'applied'

    try {
      const validCompany = validatePosition(req.body);
      const newCompany = await Position.create({ status, ...validCompany });
      console.log(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          comapany: newCompany,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async updateCompany(req: Request, res: Response) {
    try {
      const company = await Position.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      res.status(200).json({
        status: 'success',
        data: {
          company,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async deleteCompany(req: Request, res: Response) {
    try {
      await Position.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
}
