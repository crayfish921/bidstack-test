import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/interfaces/company';
import { CompaniesService } from 'src/app/shared/services/companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  searchTerm: string;

  constructor(private companiesService: CompaniesService, private router: Router, ) { }

  ngOnInit() {
    this.companies = this.companiesService.companies;
  }
  
  setSearchTerm(term) {
    this.searchTerm = term;
  }

  gotoCompany(company: Company) {
    const companyName = company ? company.company_name : null;
    this.router.navigate(['/company', companyName]);
  }

}
