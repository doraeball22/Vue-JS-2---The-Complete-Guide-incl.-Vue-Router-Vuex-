<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p> 
        <hr>
        <button class="btn btn-primary" @click="comfirmed = true" >Confirm</button>
        <div style="height: 1920px"></div> 
        <p id="data" >Data anchor div that height: 700px</p>       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                comfirmed: false
            }
        },
        beforeRouteLeave (to, from, next) {
            // comfirm for leave this page
            if (this.comfirmed) {
                next()
            } 
            else {
                if (confirm('Are you sure?')) {
                    next()
                }
                else {
                    next(false)
                }
            }
        }   
    }
    
</script>