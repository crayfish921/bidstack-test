import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { CompanyCardModule } from '../company-card/company-card.module';
import { CompaniesSearchModule } from '../companies-search/companies-search.module';
import { AddCompanyButtonModule } from '../add-company-button/add-company-button.module';
import { CompaniesSearchPipe } from 'src/app/shared/pipes/companies-search.pipe';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    CompanyListComponent,
    CompaniesSearchPipe
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    CompanyCardModule,
    CompaniesSearchModule,
    AddCompanyButtonModule,
  ],
  exports: [CompanyListComponent]
})
export class CompanyListModule { }
