<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Correo"
        required
        ></v-text-field>

       <v-text-field
            v-model="password"
            :counter="10"
            :rules="nameRules"
            label="Contraseña"
            required
        ></v-text-field>


        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="¿Estas deacuerdo?"
        required
        ></v-checkbox>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        >
        Validate
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Reset Form
        </v-btn>

        <v-btn
        color="warning"
        @click="resetValidation"
        >
        Reset Validation
        </v-btn>
  </v-form>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: null,
            checkbox: false,
        }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },

}
</script>

<style>

</style>
