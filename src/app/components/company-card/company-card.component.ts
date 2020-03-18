import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/shared/interfaces/company';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {

  @Input() data: Company = {
    company_name: 'Carat',
    logo: 'https://logo.clearbit.com/carat.nl',
    companies: [
      {title: 'Coca-Cola PopFizz Q1 19', active: true},
      {title: 'Sky Digital Wifi Q1 19', active: false},
      {title: 'BooHoo Man Q1 19', active: true},
      {title: 'Heineken UK Q1 19', active: false},
      {title: 'MG Cars Q1 19', active: false},
      {title: '118 Bet China Q1 19', active: true}
    ],
    active_games: ['Football manager 2019', 'Dirt', 'Football manager 2018']
  };

}
