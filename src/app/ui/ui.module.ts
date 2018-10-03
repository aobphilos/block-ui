import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { MedicalChainComponent } from './pages/medical-chain/medical-chain.component';
import { MedicalRecordListComponent } from './pages/medical-record-list/medical-record-list.component';
import { RequestFromOtherComponent } from './pages/request-from-other/request-from-other.component';
import { RequestMedicalRecordComponent } from './pages/request-medical-record/request-medical-record.component';
import { SummaryDischargeComponent } from './pages/summary-discharge/summary-discharge.component';
import { FileNotFoundComponent } from './pages/file-not-found/file-not-found.component';
import { UiRoutingModule } from './ui-routing.module';
import { RequestMedicalService } from '../core/request-medical.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    NgxDatatableModule,
    NgSelectModule,
    CommonModule,
    UiRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    LayoutComponent, HeaderComponent, FooterComponent,
    MedicalChainComponent, MedicalRecordListComponent, RequestFromOtherComponent,
    RequestMedicalRecordComponent, SummaryDischargeComponent, FileNotFoundComponent
  ],
  providers: [RequestMedicalService],
  exports: [LayoutComponent]
})
export class UiModule { }
