import IService from '@app/Domains/Shared/IService'

export default class CategoryService implements IService {
  search (): Promise<[]> {
    return new Promise((resolve, reject) => {
      resolve([])
    })
  }

  create (data: Record<string, unknown>): Promise<string | number> {
    return Promise.resolve('undefined')
  }

  read (id: string | number): Promise<Record<string, unknown>> {
    return Promise.resolve({})
  }

  update (id: string | number): Promise<boolean> {
    return Promise.resolve(false)
  }

  destroy (id: string | number): Promise<boolean> {
    return Promise.resolve(false)
  }
}
