import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
// import { Product } from '../models/product'

@Injectable({
	providedIn: 'root'
})
export class QuotesService {
	url = 'http://localhost:3000/quotes'
  asyncResult: any;

	constructor(private http: HttpClient) {}

	async getAsyncData() {
		this.asyncResult = await this.http
    .get(this.url)
    .toPromise()
    .then((data) => {
			console.log(data)
		})
		console.log('No issues, I will wait until promise is resolved..')
	}
}
