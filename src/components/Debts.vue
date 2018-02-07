<template>
  <div>
    <div class="container">
        <form action="">
          <q-input v-model="item.nome" type="text" placeholder="Item" value=""></q-input>
          <q-input v-model="item.valor" type="number" placeholder="Valor" value=0></q-input>
          <q-btn>Inserir</q-btn>
        </form>

        <!-- <div class="row">
          <div class="col-md-6">
            <ul is="transition-group">
              <li v-for="user in users" class="user" :key="user['.key']">
                <span>{{user.name}} - {{user.email}}</span>
                <button v-on:click="removeUser(user)" class="btn">X</button>
              </li>
            </ul>
            <form id="form" v-on:submit.prevent="addUser">
              <input type="text" class="form-control input-md" v-model="newUser.name" placeholder="Username">
              <input type="email" class="form-control input-md" v-model="newUser.email" placeholder="email@email.com">
              <input type="submit" class="btn" value="Add User">
            </form>
            <ul class="errors">
              <li v-show="!validation.name">Name cannot be empty.</li>
              <li v-show="!validation.email">Please provide a valid email address.</li>
            </ul>
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { QInput, QRadio, QBtn } from 'quasar'
/* import {db, usersRef} from '../firebase'; */

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
   name: 'Debts',
   components: { QInput, QRadio, QBtn },
   data: function() {
      return {
         item: {nome:"", valor: 0},
         newUser: {
            name: '',
            email: ''
         }
      }
   },
   props:  {
       
   },
   /* firebase: {
      users: usersRef
   }, */
   watch: {
      
   },
   methods: {
      addUser: function() {
         if (this.isValid) {
            var doisUsers = [this.newUser, this.newUser]
            usersRef.push(doisUsers)

            var pessoa = {
               nome: 'leon',
               sobreNome: 'Oliveira',
               cidadeEmQueNasceu: 'Goaiania'
            }
            usersRef.push(pessoa)

            this.newUser.name = ''
            this.newUser.email = ''
         }
      },
      removeUser: function(user) {
         usersRef.child(user['.key']).remove()
      }
   },
   computed: {
      validation: function() {
         return {
            name: !!this.newUser.name.trim(),
            email: emailRE.test(this.newUser.email)
         }
      },
      isValid: function() {
         var validation = this.validation
         return Object.keys(validation).every(function(key) {
            return validation[key]
         })
      }
   }
  }
</script>

<style scoped>
.container {
   width: 100%;
}

input,
label,
button,
textarea {
   margin: 4px;
}
</style>
