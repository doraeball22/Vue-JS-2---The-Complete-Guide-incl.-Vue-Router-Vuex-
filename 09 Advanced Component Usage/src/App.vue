<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- ส่งค่าที่ชื่อ quote ไปให้่ Quete component -->
               <!-- <app-quote qoute="A wonderful qoute!"></app-quote> -->
               <!-- passing html tag with slot -->

                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
               <hr>
               <p>{{ selectedComponent }}</p>
               <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component> 
               </keep-alive>
               <!-- <app-quote>
                    <h2 slot="title">{{ qouteTitle }}</h2>
                    <p>wonderful Quote</p>
               </app-quote> -->               
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "./components/Quote.vue"
import Author from "./components/Author.vue"
import New from "./components/New.vue"
export default {
  data: function() {
    return {
      qouteTitle: "The Quote",
      selectedComponent: "appQuote"
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>
/* การประกาศสไตร์ที่อยู่นอก scoped จะสามารภถ่ายถอดไปยังคอมโพเนนต์ลูกได้ */
h2 {
  color: red;
}
</style>
