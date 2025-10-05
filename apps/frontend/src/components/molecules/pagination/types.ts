export type PaginationProps = {
  totalPages: number
  page: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}
