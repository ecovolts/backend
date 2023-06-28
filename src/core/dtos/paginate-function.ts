import { PaginateOptions } from './paginate-options'
import { PaginatedResult } from './paginated-result'

export type PaginateFunction = <T, K>(
  model: any,
  options: PaginateOptions,
  args?: K,
) => Promise<PaginatedResult<T>>
