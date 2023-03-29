import { FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm';
import {
  PaginateResponse,
  QueryParamsPaginate,
} from '../interfaces/paginate.interface';
import { OrderPaginate } from './enums';

const OFFSET_DEFAULT = 10;
const INITAL_PAGE = 1;

/**
 * Faz a paginação da lista a partir da atualização do item
 * @param repository
 * @param initialPage
 * @param offset
 * @param order
 */
export class Paginate {
  constructor(
    private repository: Repository<any>,
    private initialPage: number = INITAL_PAGE,
    private offset: number = OFFSET_DEFAULT,
    private order: OrderPaginate = OrderPaginate.DESC,
    private where: FindOptionsWhere<any> = {},
    private relations: FindOptionsRelations<any> = {},
  ) {}

  static handleQueryParams(query: any): QueryParamsPaginate {
    const initialPage: string = query.initialPage as string;
    const offset: string = query.offset as string;
    const order: string = query.order as string;

    const queryParams: QueryParamsPaginate = {
      initialPage: parseInt(initialPage) || INITAL_PAGE,
      offset: parseInt(offset) || OFFSET_DEFAULT,
      order: OrderPaginate[order?.toUpperCase()] || OrderPaginate.ASC,
    };

    return queryParams;
  }

  async byUpdatedAt(): Promise<PaginateResponse> {
    const { repository, initialPage, offset, order, where, relations } = this;

    // Número de itens que a consulta irá pular para iniciar a paginação
    const skip: number = (initialPage - 1) * offset;

    const [data, count]: [any[], number] = await repository.findAndCount({
      where,
      relations,
      order: {
        times: {
          updatedAt: order,
        },
      },
      skip,
      take: offset,
    });

    return <PaginateResponse>{ data, count };
  }
}
