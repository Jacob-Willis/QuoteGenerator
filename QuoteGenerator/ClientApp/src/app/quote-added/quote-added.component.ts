import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-added',
  templateUrl: './quote-added.component.html',
  styleUrls: ['./quote-added.component.css']
})
export class QuoteAddedComponent implements OnInit {

  showError = true;
  errorMessage = 'Please fill in the missing inputs';
  author = '';
  quote = '';
  type = '';

  constructor() { }

  ngOnInit() {
    this.validate();
  }

  submit() {
    console.log('Let us send this off');
  }

  validate() {
    this.showError = false;

    if (this.author === '') {
      this.showError = true;
      return;
    }
    if (this.quote === '') {
      this.showError = true;
      return;
    }
    if (this.type === '') {
      this.showError = true;
      return;
    }
  }

  getErrorMessage() {
    let addendum = '';

    if (this.author === '') {
      this.showError = true;
      addendum = addendum + ' | author';
    }
    if (this.quote === '') {
      this.showError = true;
      addendum = addendum + ' | quote';
    }
    if (this.type === '') {
      this.showError = true;
      addendum = addendum + ' | type';
    }
    return this.errorMessage + addendum + ' |';
  }
}
