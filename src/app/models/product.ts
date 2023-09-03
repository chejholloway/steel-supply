import { Quote } from './quote'
export interface Product {
	Location: string
	PartNo: string
	Product: string
	Weight: number
	Quotes: Quote[]
}
