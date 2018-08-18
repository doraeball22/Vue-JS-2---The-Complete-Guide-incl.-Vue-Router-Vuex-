<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- ส่งค่าที่ชื่อ quote ไปให้่ Quete component -->
               <!-- <app-quote qoute="A wonderful qoute!"></app-quote> -->
               <!-- passing html tag with slot -->
               <app-quote>
                    <h2 slot="title">{{ qouteTitle }}</h2>
                    <p slot="content">wonderful Quote</p>
               </app-quote>               
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        data: function() {
            return {
                qouteTitle: 'The Quote'
            }
        },
        components: {
            'app-quote': Quote 
        }
    }
</script>

<style>
    /* การประกาศสไตร์ที่อยู่นอก scoped จะสามารภถ่ายถอดไปยังคอมโพเนนต์ลูกได้ */
    h2 {
        color: red;
    }
</style>
