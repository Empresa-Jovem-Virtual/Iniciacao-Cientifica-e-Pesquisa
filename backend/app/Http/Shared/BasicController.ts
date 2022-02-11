import { Request, Response } from 'express'
import StatusCodes from 'http-status-codes'
import IService from '@app/Domains/Shared/IService'

const { CREATED, OK } = StatusCodes

export default class BasicController {
  static service (): IService {
    throw new Error('Not implemented')
  }

  static async index (request: Request, response: Response) {
    const data = await this.service().all()
    response
      .status(OK)
      .json({ data })
  }
}
