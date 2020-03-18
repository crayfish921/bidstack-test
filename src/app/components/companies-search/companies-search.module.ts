import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompaniesSearchComponent } from './companies-search.component';

@NgModule({
  declarations: [CompaniesSearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CompaniesSearchComponent]
})
export class CompaniesSearchModule { }
