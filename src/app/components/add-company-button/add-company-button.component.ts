import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/shared/services/companies.service';

@Component({
  selector: 'app-add-company-button',
  templateUrl: './add-company-button.component.html',
  styleUrls: ['./add-company-button.component.scss']
})
export class AddCompanyButtonComponent implements OnInit {

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
  }

  addCompany() {
    this.companiesService.companies.push(
      {
        company_name: 'PHD',
        logo:'https://www.xing.com/img/custom/cp/assets/logo/6/8/0/59008/square_128px/PHD_MLogo_RGB_P300dpi.jpg',
        companies: [
          {title: 'BooHoo Man Q1 19', active: true},
          {title: 'Sky Digital Wifi Q1 19', active: false},
          {title: 'Heineken UK Q1 19', active: false},
        ],
        active_games: ['Dirt', 'NFS', 'Drag']
        }
      )
  }

}
