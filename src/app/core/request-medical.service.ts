import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRequestMedicalRecords } from '../model/interface/RequestMedicalRecords';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class RequestMedicalService extends ServiceBase {

  private path = 'RequestMedicalRecords';

  private items: Observable<IRequestMedicalRecords[]>;
  private cids: string[];

  constructor(private http: HttpClient) {
    super();
    this.getCurrentItems();
  }

  get url() {
    return this.getApiUrl(this.path);
  }

  get currentItems(): Observable<IRequestMedicalRecords[]> {
    return this.items;
  }

  get allCid() {
    return of(this.cids);
  }

  public getCurrentItems(cid: string = '', keyword: string = '') {
    this.items = this.http.get(this.url).pipe(
      map((res: IRequestMedicalRecords[]) => {
        let reqMed = res;
        this.getCurrentCid(reqMed);

        if (cid && cid !== '') {
          reqMed = reqMed.filter(a => a.Cid === cid);
        }

        if (keyword && keyword !== '') {
          const regKey = new RegExp(`(${keyword})`, 'i');
          reqMed = reqMed
            .filter(a => regKey.test(a.FromHospital) || regKey.test(a.ToHospital));
        }

        return reqMed.map((item, idx) => {
          return { Id: idx + 1, Status: 'Request', ...item } as IRequestMedicalRecords;
        });
      })
    );
  }

  private genGuid() {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  public add(model: any) {
    return new Promise<any>((resolve, reject) => {

      const data = {
        $class: 'org.health.network.RequestMedicalRecords',
        RequestId: this.genGuid(),
        FromHospital: model.hospital,
        ToHospital: model.hospital,
        Cid: model.cid,
        StartDate: new Date(model.fromDate.year, model.fromDate.month, model.fromDate.day),
        EndDate: new Date(model.toDate.year, model.toDate.month, model.toDate.day),
        CreatedDate: new Date().toISOString(),
        CreatedBy: 'Block-Ui',
      } as IRequestMedicalRecords;

      this.http.post(this.url, data).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );

    });
  }

  private getCurrentCid(items: IRequestMedicalRecords[]) {
    const cid = {};
    items.map(m => cid[m.Cid] = 1);
    this.cids = Object.keys(cid).sort();
  }

}
