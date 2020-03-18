import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsComponent } from './company-details.component';
import { CompanyDetailsRoutingModule } from './company-details-routing.module';


@NgModule({
  declarations: [CompanyDetailsComponent],
  imports: [
    CommonModule,
    CompanyDetailsRoutingModule
  ],
  exports: [CompanyDetailsComponent]
})
export class CompanyDetailsModule { }
