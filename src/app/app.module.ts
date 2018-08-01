import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalChainComponent } from './medical-chain/medical-chain.component';
import { RequestMedicalRecordComponent } from './request-medical-record/request-medical-record.component';
import { MedicalRecordListComponent } from './medical-record-list/medical-record-list.component';
import { RequestFromOtherComponent } from './request-from-other/request-from-other.component';
import { SummaryDischargeComponent } from './summary-discharge/summary-discharge.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalChainComponent,
    RequestMedicalRecordComponent,
    MedicalRecordListComponent,
    RequestFromOtherComponent,
    SummaryDischargeComponent,
    FileNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
