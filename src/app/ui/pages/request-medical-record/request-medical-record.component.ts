import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-medical-record',
  templateUrl: './request-medical-record.component.html',
  styleUrls: ['./request-medical-record.component.scss']
})
export class RequestMedicalRecordComponent implements OnInit {
  closeResult: string;
  model: {
    fromDate: NgbDateStruct,
    toDate: NgbDateStruct
  };

  constructor(
    private modalService: NgbModal
  ) {
    this.model = {
      fromDate: { day: 1, month: 8, year: 2018 },
      toDate: { day: 1, month: 8, year: 2018 }
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
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
