<template>
    <div>        
        <!-- <p>{{ qoute }}</p> -->

        <!-- use slot to recieved html tag -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
    //   props: ['qoute'] 
    }
    
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

</style>
