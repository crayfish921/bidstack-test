export interface Company {
    company_name: string;
    logo: string;
    companies: CompanyTitle[];
    active_games: string[]
}

export interface CompanyTitle {
    title: string;
    active: boolean;
}