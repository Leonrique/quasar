<template>
  <div>
    <div class="container">
        <form action="">
          <div class="row">
            <div class="col-6">
              <q-input id="inputNome" v-model="item.nome" type="text" placeholder="Item" value=""></q-input>
            </div>

            <div class="col-6">
              <q-input id="inputValor" v-model="item.valor" :step=0.01 type="number" placeholder="Valor"></q-input>
            </div>
          </div>
          <q-btn @click="salvarItens">Inserir</q-btn>
        </form>
        
        <ul is="transition-group">
          <li v-for="item in itens" class="user" :key="item['.key']">
            <!-- <q-checkbox v-model="item.selecionado" class="btn"></q-checkbox> -->
            <span>{{item.nome}} - {{item.valor}}   </span>
            <a href="#" v-on:click="removeItem(item)">Excluir</a>
            <!-- <q-btn v-on:click="removeItem(item)" class="btn">Get rid</q-btn> -->
          </li>
        </ul>

        <form id="form" v-on:submit.prevent="addUser">
          <div class="row">
            <div class="col-3">
              <q-input id="input1" type="text" class="form-control input-md" v-model="newUser.name" placeholder="Username"/>
            </div>
            <div class="col-3">
              <q-input id="input2" type="email" class="form-control input-md" v-model="newUser.email" placeholder="email@email.com"/>
            </div>
            <div class="col-3">
              <q-btn class="btn">Inserir</q-btn>
            </div>
          </div>
        </form>

        <ul class="errors">
          <li v-show="!validation.name">Name cannot be empty.</li>
          <li v-show="!validation.email">Please provide a valid email address.</li>
        </ul>

        <ul is="transition-group">
          <li v-for="user in users" class="user" :key="user['.key']">
            <span>{{user.name}} - {{user.email}}</span>
            <q-btn v-on:click="removeUser(user)" class="btn">X</q-btn>
          </li>
        </ul>

        <!-- <q-select
          v-model="select"
          :options="selectOptions"
        /> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { QInput, QRadio, QBtn, QCheckbox, QSelect } from 'quasar'
import { db, usersRef, itensRef } from '../firebase'

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
   name: 'Expenses',
   components: { QInput, QRadio, QBtn, QCheckbox, QSelect },
   data: function() {
      return {
         select: '',
         item: { nome: '', valor: 0, selecionado: false },
         newUser: {
            name: '',
            email: ''
         },
         selectOptions: [
            {
               label: 'Take a ride',
               value: 'ride'
            },
            {
               label: 'Go by car',
               value: 'car'
            }
         ]
      }
   },
   props: {},
   firebase: {
      users: usersRef,
      itens: itensRef
   },
   watch: {},
   methods: {
      addUser: function() {
         if (this.isValid) {
            usersRef.push(this.newUser)

            this.newUser.name = ''
            this.newUser.email = ''

            console.log(this.users)
         }
      },
      removeUser: function(user) {
         usersRef.child(user['.key']).remove()
      },
      removeItem: function(item) {
         itensRef.child(item['.key']).remove()
      },
      salvarItens() {
         itensRef.push(this.item)
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

#input1,
#input2 {
   width: 80%;
}

#inputNome,
#inputValor {
   width: 80%;
}

.container {
   width: 80%;
   /* height: 100px; */

   position: absolute;
   /* top:0;
    bottom: 0; */
   left: 0;
   right: 0;

   margin: auto;
}
</style>
