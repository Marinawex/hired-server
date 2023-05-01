import { Request, Response } from 'express';
import { PositionsService } from '../services/positionsService';
// import { companies } from '../models/companies';
import { PositionModel } from '../models/positionsModel';
import { validatePosition } from './positionsValidator';

export class PositionsController {
  positionsService = new PositionsService();

  constructor() {}

  async getAllPositions(req: Request, res: Response) {
    try {
      //build query
      //1)filtering

      const queryObj = { ...req.query };
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach((field) => delete queryObj[field]);
      console.log(req.query, queryObj);

      // //2) advenced filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      let query = PositionModel.find(JSON.parse(queryStr));

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
      const positions = await query;

      // console.log(companies);

      // //  i want to refactor this function call place and dind here better place and implementation
      const positionsWithDaysCounter = positions.map((position) => {
        return {
          ...position,
          //  find the way to make it work with companiesServise!!!
          daysPassedSinceApplication: 7,
        };
      });

      //send response
      res.status(200).json({
        status: 'success',
        results: positions.length,
        data: {
          positions: positions,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async getAllPositionsByStatus(req: Request, res: Response) {
    try {
      const statusaName = req.params.status;
      const positions = await PositionModel.find().where({status:statusaName});
      res.status(200).json({
        status: 'success',
        results: positions.length,
        data: {
          positions,
        },
      });
    } catch (err) {
      console.log(err);
      
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async getPosition(req: Request, res: Response) {
    try {
      const position = await PositionModel.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          position,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async createPosition(req: Request, res: Response) {
    // const status = 'applied'
    console.log(req.body);

    try {
      // const validPosition = validatePosition(req.body);
      // the status is added automatically by the DB
      // const newPosition = await PositionModel.create({ status, ...validPosition });
      const newPosition = await PositionModel.create(req.body);
      console.log(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          position: newPosition,
        },
      });
    } catch (err) {
      console.log(err);

      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async updatePosition(req: Request, res: Response) {
    try {
      const position = await PositionModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      res.status(200).json({
        status: 'success',
        data: {
          position,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }

  async deletePosition(req: Request, res: Response) {
    try {
      await PositionModel.findByIdAndDelete(req.params.id);
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
