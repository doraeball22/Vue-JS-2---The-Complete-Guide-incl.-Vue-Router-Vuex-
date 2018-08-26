<template>
	<div class="container">
		<app-new-quote @quoteAdded="newQuote"></app-new-quote>
		<app-quote-grid :quotes="quotes"></app-quote-grid>
	</div>
</template>


<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
	// data เป็นฟังก์ชั่นที่ return object
	data: function() {
		return {
			quotes: ['Just a Quote to see something', 'second quote'],
			maxQuotes: 10
		}
	},
	components: {
		appQuoteGrid: QuoteGrid,
		appNewQuote: NewQuote
	},
	methods: {
		newQuote(quote) {
			this.quotes.push(quote)
		}
	},
}
</script>

<style>
</style>