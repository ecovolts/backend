export interface PaginatedResult<TPaginatedResult> {
  data: TPaginatedResult[]
  meta: {
    total: number
    lastPage: number
    currentPage: number
    perPage: number
    prev: number | null
    next: number | null
  }
}
