import IService from '@app/Domains/Shared/IService'
import CategoryService from '@app/Domains/General/Category/CategoryService'
import { Request, Response } from 'express'
import StatusCodes from 'http-status-codes'

/**
 * @param {e.Request} request
 * @param {e.Response} response
 * @return {e.Response<any, Record<string, any>>}
 */
async function index (request: Request, response: Response): Promise<unknown> {
  const service: IService = new CategoryService()
  return response
    .jsend
    .success(await service.search())
}

/**
 * @param {e.Request} request
 * @param {e.Response} response
 * @return {e.Response<any, Record<string, any>>}
 */
async function store (request: Request, response: Response): Promise<unknown> {
  const data = request.body
  const service: IService = new CategoryService()
  const result = await service.create(data)
  return response
    .status(StatusCodes.CREATED)
    .jsend
    .success(result)
}

export default {
  index,
  store
}
