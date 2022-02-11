import BasicController from '@app/Http/Shared/BasicController'
import IService from '@app/Domains/Shared/IService'
import CategoryService from '@app/Domains/General/Category/CategoryService'

export default class CategoryController extends BasicController {
  static service (): IService {
    return new CategoryService()
  }
}
