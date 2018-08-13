<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ link.params.id }}</p>
        <!-- <router-link 
            tag="button" 
            :to="'/user/' + id + '/edit'"
            class="btn btn-primary">Edit User</router-link> -->
        <router-link 
            tag="button" 
            :to="link"
            class="btn btn-primary">Edit User</router-link>        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if (true) {
                next()
            }
            else {
                next(false)
            }
            // next(); do not call next() only here!! because the component doesn't loaded
            // this also means that in this lifecycle hook cant access your view instance
        }
    }
</script>

<!--
<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ id }}</p>
        // comment one
        <router-link 
            tag="button" 
            :to="'/user/' + id + '/edit'"
            class="btn btn-primary">Edit User</router-link> 
        <router-link 
            tag="button" 
            :to="{ name: 'userEdit', params: { id: id }, query: { locale: 'en', q: 100 } }"
            class="btn btn-primary">Edit User</router-link>        
    </div>
</template>


<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        // watch: {
        //     '$route'(to, from) {
        //         this.id = to.params.id;
        //     }
        // }
    }
</script>
-->