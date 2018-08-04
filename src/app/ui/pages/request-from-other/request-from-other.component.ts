import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-from-other',
  templateUrl: './request-from-other.component.html',
  styleUrls: ['./request-from-other.component.scss']
})
export class RequestFromOtherComponent implements OnInit {
  closeResult: string;
  model: {
    hospital: string,
    cid: string,
    fromDate: Date,
    toDate: Date
  };

  constructor(
    private modalService: NgbModal
  ) {
  }

  private resetModel() {
    this.model = {
      hospital: '',
      cid: '',
      fromDate: new Date(),
      toDate: new Date()
    };
  }

  openNewRequest(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'recordDetailLabel',
        backdrop: 'static',
        size: 'lg'
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
