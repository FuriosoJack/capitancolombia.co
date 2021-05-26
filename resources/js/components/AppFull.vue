<template>
   <v-app>
        <v-main >

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
            <!-- If using vue-router -->
                <slot></slot>
            </v-container>
        </v-main>
        <button-menu></button-menu>
  </v-app>
</template>
<script>
import ButtonMenu from './ButtonMenu.vue';
export default {
    components:{
        ButtonMenu
    },
    data(){
        return {
            drawer: false
        }
    }

}
</script>

<style>

</style>
