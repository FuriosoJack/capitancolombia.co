<template>
    <app>

       <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-card height="150"></v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </app>
</template>

<script>
import App from '../components/App';
export default {
    components:{
        App
    },
    data() {
        return {
            loading: false,
            selection: 1,
        }
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },

}
</script>

<style>

</style>
