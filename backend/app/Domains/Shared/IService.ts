export default interface IService {
  search (): Promise<[]>

  create (data: Record<string, unknown>): Promise<string | number>

  read (id: string | number): Promise<Record<string, unknown>>

  update (id: string | number): Promise<boolean>

  destroy (id: string | number): Promise<boolean>
}
