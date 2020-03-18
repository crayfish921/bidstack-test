import { Pipe, PipeTransform } from '@angular/core';
import { CompanyTitle } from '../interfaces/company';

@Pipe({
  name: 'statusLength'
})
export class StatusLengthPipe implements PipeTransform {
  counter = 0;
  titles: CompanyTitle[] = [];

  updateValues(companyTitle: CompanyTitle){
    this.counter++;
    this.titles.push(companyTitle);
  }


  transform(value: CompanyTitle[], active: boolean, array?: string): number | CompanyTitle[] {
  
    value.forEach(companyTitle => {
      if (active && companyTitle.active) {
        this.updateValues(companyTitle);
      }

      if (!active && !companyTitle.active) {
        this.updateValues(companyTitle);
      }
    })

    return array === 'array' ? this.titles : this.counter;
  }

}
