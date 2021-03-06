import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Category } from '@app/Domains/General/Category'

export class CategoryController {

  private userRepository = getRepository(Category)

  async all (request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find()
  }

  async one (request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id)
  }

  async save (request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body)
  }

  async remove (request: Request, response: Response, next: NextFunction) {
    const category = await this.userRepository.findOne(request.params.id) as Category
    await this.userRepository.remove(category)
  }
}
