<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- ส่งค่าที่ชื่อ quote ไปให้่ Quete component -->
               <app-quote qoute="A wonderful qoute!"></app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        components: {
            'app-quote': Quote 
        }
    }
</script>

<style>
</style>
