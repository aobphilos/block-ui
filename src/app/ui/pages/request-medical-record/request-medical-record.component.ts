import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-medical-record',
  templateUrl: './request-medical-record.component.html',
  styleUrls: ['./request-medical-record.component.scss']
})
export class RequestMedicalRecordComponent implements OnInit {
  closeResult: string;
  model: {
    hospital: string,
    cid: string,
    fromDate: NgbDateStruct,
    toDate: NgbDateStruct
  };

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar
  ) {
    this.resetModel();
  }

  private resetModel() {
    this.model = {
      hospital: '',
      cid: '',
      fromDate: this.calendar.getToday(),
      toDate: this.calendar.getNext(this.calendar.getToday(), 'd', 10)
    };
  }

  openNewRequest(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'requestModalLabel',
        backdrop: 'static'
      })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.resetModel();
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.resetModel();
      });
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

  ngOnInit() {
  }

}
