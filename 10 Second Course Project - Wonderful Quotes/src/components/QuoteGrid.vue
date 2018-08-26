<template>
    <div class="row">
        <!-- don't forgot v-bind:key not key it will be not render-->
        <app-quote v-for="(quote, index) in quotes" :key="index"  @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>    
</template>

<script>
import Quote from './Quote.vue'
export default {
	props: ['quotes'],
	components: {
		appQuote: Quote
    },
    methods: {
        deleteQuote(index) {
            this.$emit('quoteDeleted', index)
        }
    }
}
</script>

<style>
</style>