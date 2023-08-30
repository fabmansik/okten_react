
export interface IPagination<DATA>{
    items: DATA[]
    next: { page?: string }
    prev: { page?: string }
    total_items: number
    total_pages:number
}