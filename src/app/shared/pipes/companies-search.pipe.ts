import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../interfaces/company';

@Pipe({
  name: 'companiesSearch'
})
export class CompaniesSearchPipe implements PipeTransform {

  transform(companies: Company[], searchTerm: string): Company[] {
    if (!companies) return [];
    if (!searchTerm) return companies;

    return companies.filter(company => company.company_name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
