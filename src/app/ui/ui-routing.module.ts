import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileNotFoundComponent } from './pages/file-not-found/file-not-found.component';
import { MedicalChainComponent } from './pages/medical-chain/medical-chain.component';
import { MedicalRecordListComponent } from './pages/medical-record-list/medical-record-list.component';
import { RequestFromOtherComponent } from './pages/request-from-other/request-from-other.component';
import { RequestMedicalRecordComponent } from './pages/request-medical-record/request-medical-record.component';
import { SummaryDischargeComponent } from './pages/summary-discharge/summary-discharge.component';

const routes: Routes = [
  { path: 'medical-chain', component: MedicalChainComponent },
  { path: 'request-medical', component: RequestMedicalRecordComponent },
  { path: 'medical-record', component: MedicalRecordListComponent },
  { path: 'request-other', component: RequestFromOtherComponent },
  { path: 'summary-discharge', component: SummaryDischargeComponent },
  { path: '', redirectTo: '/medical-chain', pathMatch: 'full' },
  { path: '**', component: FileNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class UiRoutingModule { }
