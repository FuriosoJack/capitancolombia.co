<template>
    <v-navigation-drawer app  v-model="localDrawer"
            fixed
            temporary>
         <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


</template>

<script>
export default {
    props:{
        drawer:Boolean
    },
    data()
    {
        return {
            localDrawer:this.drawer,
            selectedItem: 0,
            items: [
                { text: 'My Files', icon: 'mdi-folder' },
                { text: 'Shared with me', icon: 'mdi-account-multiple' },
                { text: 'Starred', icon: 'mdi-star' },
                { text: 'Recent', icon: 'mdi-history' },
                { text: 'Offline', icon: 'mdi-check-circle' },
                { text: 'Uploads', icon: 'mdi-upload' },
                { text: 'Backups', icon: 'mdi-cloud-upload' },
            ],
        }
    },
    watch:{
        localDrawer:function(newv,oldv){

        }
    }

}
</script>

<style>

</style>
