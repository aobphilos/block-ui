import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [
    LayoutComponent, HeaderComponent, FooterComponent,
    MedicalChainComponent, MedicalRecordListComponent, RequestFromOtherComponent,
    RequestMedicalRecordComponent, SummaryDischargeComponent, FileNotFoundComponent
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
