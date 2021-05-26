<template>
   <v-app >
        <v-app-bar app>
             <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>CapitanColombiAPP 🇨🇴</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon  href="https://github.com/FuriosoJack/capitancolombia.co" target="_blank">
                <v-icon>mdi-github</v-icon>
            </v-btn>

        </v-app-bar>
       <navigation-drawer :drawer="drawer"></navigation-drawer>
        <!-- Sizes your content based upon application components -->
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
import NavigationDrawer from './NavigationDrawer.vue';
export default {
    components:{
        ButtonMenu,
        NavigationDrawer
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
