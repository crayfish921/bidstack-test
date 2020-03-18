import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from './company-card.component';
import { StatusLengthPipe } from 'src/app/shared/pipes/status-length.pipe';
import { CompaniesTooltipDirective } from 'src/app/shared/directives/companies-tooltip.directive';
import { TooltipComponent } from '../tooltip/tooltip.component';

@NgModule({
  declarations: [
    CompanyCardComponent,
    StatusLengthPipe,
    CompaniesTooltipDirective,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CompanyCardComponent]
})
export class CompanyCardModule { }
