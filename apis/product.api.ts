import BaseAPI from './base.api';

class ProductAPI extends BaseAPI {
  getList(params: unknown) {
    return this.get('', { params });
  }
}

export default new ProductAPI('beers');
