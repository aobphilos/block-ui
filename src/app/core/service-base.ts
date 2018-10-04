import { environment } from '../../environments/environment';

export abstract class ServiceBase {

  getApiUrl(path: string) {
    return `${environment.api.url}${path}`;
  }

  constructor() { }

}
