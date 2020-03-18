import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyCardModule } from './components/company-card/company-card.module';
import { CompaniesSearchModule } from './components/companies-search/companies-search.module';
import { AddCompanyButtonModule } from './components/add-company-button/add-company-button.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyCardModule,
    CompaniesSearchModule,
    AddCompanyButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
