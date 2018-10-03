import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { IRequestMedicalRecords } from '../model/interface/RequestMedicalRecords';

@Injectable({
  providedIn: 'root'
})
export class RequestMedicalService {

  private url = 'http://206.189.146.192:3000/api/RequestMedicalRecords';

  private items: Observable<IRequestMedicalRecords[]>;
  private cids: string[];

  constructor(private http: HttpClient) {
    this.getCurrentItems();
  }

  get currentItems(): Observable<IRequestMedicalRecords[]> {
    return this.items;
  }

  get allCid() {
    return of(this.cids);
  }

  public getCurrentItems(cid: string = '') {
    this.items = this.http.get(this.url).pipe(
      map((res: IRequestMedicalRecords[]) => {
        let reqMed = res;
        this.getCurrentCid(reqMed);
        if (cid && cid !== '') {
          reqMed = res.filter(a => a.Cid === cid);
        }
        return reqMed.map((item, idx) => {
          return { Id: idx + 1, Status: 'Request', ...item } as IRequestMedicalRecords;
        });
      })
    );
  }

  private genGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  public add(model: any) {
    const data = {
      $class: 'org.health.network.RequestMedicalRecords',
      RequestId: this.genGuid(),
      FromHospital: model.hospital,
      ToHospital: model.hospital,
      Cid: model.cid,
      StartDate: new Date(model.fromDate.year, model.fromDate.month, model.fromDate.day),
      EndDate: new Date(model.toDate.year, model.toDate.month, model.toDate.day),
      CreatedDate: new Date().toISOString(),
      CreatedBy: 'Batman',
    } as IRequestMedicalRecords;

    return this.http.post(this.url, data);
  }

  private getCurrentCid(items: IRequestMedicalRecords[]) {
    const cid = {};
    items.map(m => cid[m.Cid] = 1);
    this.cids = Object.keys(cid).sort();
  }

}
