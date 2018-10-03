import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { RequestMedicalService } from '../../../core/request-medical.service';

@Component({
  selector: 'app-request-medical-record',
  templateUrl: './request-medical-record.component.html',
  styleUrls: ['./request-medical-record.component.scss']
})
export class RequestMedicalRecordComponent implements OnInit {

  model: {
    hospital: string,
    cid: string,
    fromDate: NgbDateStruct,
    toDate: NgbDateStruct
  };
  cidSelected: string;

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    private reqMedService: RequestMedicalService
  ) {
    this.resetModel();
  }

  get currentItems() {
    return this.reqMedService.currentItems;
  }

  get allCid() {
    return this.reqMedService.allCid;
  }

  get columns() {
    return [
      { prop: 'Id', name: '#', width: 45, sortable: false },
      { prop: 'RequestId', name: 'Request Id', sortable: false },
      { prop: 'ToHospital', name: 'To Hospital', sortable: false },
      { prop: 'Cid', name: 'CID', sortable: false },
      { prop: 'StartDate', name: 'From Date', pipe: '', sortable: false },
      { prop: 'EndDate', name: 'To Date', pipe: '', sortable: false },
      { prop: 'Status', name: 'Status', width: 85, sortable: false }
    ];
  }

  openNewRequest(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'requestModalLabel',
        backdrop: 'static'
      })
      .result.then((result) => {
        this.reqMedService.add(this.model).subscribe(res => console.log(res));
        this.resetModel();
      }, (reason) => {
        this.resetModel();
      });
  }

  onSearch() {
    this.reqMedService.getCurrentItems(this.cidSelected);
  }

  private resetModel() {
    this.model = {
      hospital: '',
      cid: '',
      fromDate: this.calendar.getToday(),
      toDate: this.calendar.getNext(this.calendar.getToday(), 'd', 10)
    };
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() { }

}
