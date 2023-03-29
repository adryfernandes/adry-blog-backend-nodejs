import { OrderPaginate } from '../utils/enums';

// Retorno para paginação
export interface PaginateResponse {
  data: any[];
  count: number;
}

// Parametro da requisição para a paginação
export interface QueryParamsPaginate {
  initialPage: number;
  offset: number;
  order: OrderPaginate;
}
