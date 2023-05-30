// import { CreditCard } from './data-card';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  cards: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://fakerapi.it/api/v1/credit_cards?_quantity=30').subscribe(response => {
      this.cards = response.data;
      console.log('data : ',this.cards)
    });
  }
  
  
}
