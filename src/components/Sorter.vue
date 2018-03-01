<template>
  <div>
    <div class="container">
      <label for="inputFile">Itens</label>
      
      <q-input v-model="itensParaSortear" type="textarea" float-label="Digite os itens" :max-height="50" :min-rows="2"/>
      <q-radio type="radio" name="tipoSeparacao" id="porVirgula" v-model="virgula" label="Separar por vírgula" val="opt1"/>
      
      <q-radio type="radio" name="tipoSeparacao" id="porPontoVirgula" v-model="virgula" label="Separar por ponto e vírgula" val="opt2"/>
      
      <br>
      <div style="text-align: center">
         <q-btn @click="sortear" class="btn">Sortear</q-btn>
      </div>
      <p style="font-size: 50px; text-align: center">{{ itemSorteado }}</p>
      

      <div class="row" style="text-align: center">
        <div class="col-md-2">
          {{numeros.numero1}}
        </div>
        <div class="col-md-2">
          {{numeros.numero2}}
        </div>
        <div class="col-md-2">
          {{numeros.numero3}}
        </div>
        <div class="col-md-2">
          {{numeros.numero4}}
        </div>
        <div class="col-md-2">
          {{numeros.numero5}}
        </div>
        <div class="col-md-2">
          {{numeros.numero6}}
        </div>
      </div>

      <div style="text-align: center; margin-top: 50px">
         <q-btn @click="sortearNumeros" class="btn">Sortear os Números</q-btn>
      </div>
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
         area: '',
         option: '',
         numeros: {
            numero1: 0,
            numero2: 0,
            numero3: 0,
            numero4: 0,
            numero5: 0,
            numero6: 0
         }
      }
   },
   props: {
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
      },
      sortearNumeros: function() {
         var vm = this
         var min = 0
         var max = 59

         var tempo = new Date().getTime() / 1000

         setInterval(function() {
            if (new Date().getTime() / 1000 - tempo <= 3) {
               vm.numeros.numero1 = Math.round(
                  Math.random() * (max - min) + min
               )
               vm.numeros.numero2 = Math.round(
                  Math.random() * (max - min) + min
               )
               vm.numeros.numero3 = Math.round(
                  Math.random() * (max - min) + min
               )
               vm.numeros.numero4 = Math.round(
                  Math.random() * (max - min) + min
               )
               vm.numeros.numero5 = Math.round(
                  Math.random() * (max - min) + min
               )
               vm.numeros.numero6 = Math.round(
                  Math.random() * (max - min) + min
               )
            }
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
