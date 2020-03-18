import { Component, Input, Injectable } from '@angular/core';
import { CompanyTitle } from 'src/app/shared/interfaces/company';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() data: CompanyTitle[]
}
