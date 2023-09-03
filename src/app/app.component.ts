import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from './models/product'
import { QuotesService } from './services/quotes.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [ QuotesService ]
})
export class AppComponent {
	title = 'quote-analyzer'
	constructor(public qs: QuotesService) {}
	ngOnInit() {
		console.log('App loaded')
		console.log(this.qs.getAsyncData())
  
	}
}
