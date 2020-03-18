import { Injectable } from '@angular/core';
import { CompaniesService } from './companies.service';
import { Company } from '../interfaces/company';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private companiesService: CompaniesService) { }

  getCompany(name: string) {
    return of(this.companiesService.companies).pipe(
      map((companies: Company[]) => companies.find(company => company.company_name === name)
    ))
  }
}
