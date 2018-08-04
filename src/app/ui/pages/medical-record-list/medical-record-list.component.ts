import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.scss']
})

export class MedicalRecordListComponent implements OnInit {

  model: {
    cid: string,
    chronic: string,
    drugAllergyDate: NgbDateStruct,
    checkedDate: Date
  };

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar
  ) {
    this.resetModel();
  }

  private resetModel() {
    this.model = {
      cid: '',
      chronic: '',
      drugAllergyDate: this.calendar.getToday(),
      checkedDate: new Date()
    };
  }
  openRequest(content, mode = 'new') {
    this.modalService
      .open(content, {
        ariaLabelledBy: mode === 'new' ? 'addMedicalLabel' : 'editMedicalLabel',
        backdrop: 'static'
      })
      .result.then((result) => {
        this.resetModel();
      }, (reason) => {
        this.resetModel();
      });
  }

  ngOnInit() {
  }

}
