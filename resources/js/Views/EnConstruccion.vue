<template>
    <app>

       <v-container>
           <v-alert
  border="left"
  outlined
  text
  type="warning"
>En Construccion</v-alert>
        <v-alert
            border="top"
            colored-border
            type="info"
            elevation="2"
            >
            Colombia esta cambiando su historia y nosotros tambien queremos ayudar a tener un mejor pais creando un sistema para reportar desaparecidos en tiempo real. <b>Es tan solo el inicio</b>
            </v-alert>
             <v-alert
            border="top"
            colored-border
            type="info"
            elevation="2"
            >
            Si te gustaria colaborar sin importar a que te dediques escribenos hola@capitancolombia.co. Si eres desarrollador arriba te dejamos el enlace del repositorio de github para que te unas y escribas codigo🦾
            </v-alert>
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
