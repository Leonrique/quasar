<template>
  <div>
    <div class="container">
      <label for="inputFile">Itens</label>
      <!-- <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="itensParaSortear"></textarea> -->
      <q-input v-model="itensParaSortear" type="textarea" float-label="Digite os itens" :max-height="50" :min-rows="2"/>
      <q-radio type="radio" name="tipoSeparacao" id="porVirgula" v-model="virgula" label="Separar por vírgula" val="opt1"/>
      <!-- <label for="porVirgula">Separar por vírgula</label> -->
      <q-radio type="radio" name="tipoSeparacao" id="porPontoVirgula" v-model="virgula" label="Separar por ponto e vírgula" val="opt2"/>
      <!-- <label for="porPontoVirgula">Separar por ponto e vírgula</label> -->
      <br>
      <div style="text-align: center">
         <q-btn @click="sortear" class="btn">Sortear</q-btn>
      </div>
      <p style="font-size: 50px; text-align: center">{{ itemSorteado }}</p>
      <!-- <q-radio v-model="option" val="opt1" label="Option 1" />
      <q-radio v-model="option" val="opt2" label="Option 2" />
      <q-radio v-model="option" val="opt3" label="Option 3" /> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { QInput, QRadio, QBtn } from 'quasar'
export default {
   name: 'Sorter',
   components: { QInput, QRadio, QBtn },
   data: function() {
      return {
         itemSorteado: '',
         itensParaSortear: '',
         tipoSeparador: '',
         virgula: false,
         pontoVirgula: false,
         area: '', option: '',       }
   },
   props:  {
       opt1: true,
       opt2: true,
       opt3: true
   },
   watch: {
      virgula: function() {
         this.tipoSeparador = ','
      },
      pontoVirgula: function() {
         this.tipoSeparador = ';'
      }
   },
   methods: {
      sortear: function() {
         if (this.tipoSeparador == '') {
            alert('Selecione um tipo de separador de itens.')
            return
         }

         if (this.itensParaSortear == '') {
            alert('Insira itens para fazer o sorteio.')
            return
         }

         var vm = this

         var itens = this.itensParaSortear.split(this.tipoSeparador)
         var qtde = itens.length
         var max = 0
         var min = 0
         max = qtde - 1
         var tempo = new Date().getTime() / 1000

         setInterval(function() {
            if (new Date().getTime() / 1000 - tempo <= 3)
               vm.itemSorteado =
                  itens[Math.round(Math.random() * (max - min) + min)]
         }, 100)
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
