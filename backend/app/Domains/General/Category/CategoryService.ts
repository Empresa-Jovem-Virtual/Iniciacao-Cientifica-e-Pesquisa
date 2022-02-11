import IService from '@app/Domains/Shared/IService'

export default class CategoryService implements IService {
  all (): Promise<[]> {
    return new Promise((resolve, reject) => {
      resolve([])
    })
  }
}
