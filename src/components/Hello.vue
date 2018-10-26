/* eslint-disable */
<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Leon
      </q-toolbar-title>
    </q-toolbar>
    
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essenciais</q-list-header>
        <q-item @click="setView(0)">
          <q-item-side icon="school" />
          <q-item-main label="Sorteador" sublabel="Um sorteador para coisas gerais" />
        </q-item>
        <q-item @click="setView(1)">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Despesas" sublabel="Onde lançar algumas expenses" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Notes" sublabel="Anotações gerais" />
        </q-item>
        <q-item>
          <q-item-side icon="rss feed" />
          <q-item-main label="Também vazio" sublabel="Aceito sugestões para uma função" />
        </q-item>
      </q-list>
    </div>

    <div v-if="visao == 0" style="margin: 10px">
      <Sorter/>
    </div>

    <div v-if="visao == 1" style="margin: 10px">
      <Expenses/>
    </div>
  </q-layout>
</template>

<script>
/* eslint-disable */
import {
   dom,
   event,
   openURL,
   QLayout,
   QToolbar,
   QToolbarTitle,
   QBtn,
   QIcon,
   QList,
   QListHeader,
   QItem,
   QItemSide,
   QItemMain
} from 'quasar'

import Sorter from './Sorter.vue'
import Expenses from './Expenses.vue'

export default {
   name: 'index',
   components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain,
      Sorter,
      Expenses
   },
   data() {
      return {
         visao: 0
      }
   },
   computed: {
      position() {
         const transform = `rotateX(${this.rotateX}deg) rotateY(${
            this.rotateY
         }deg)`
         return {
            top: this.moveY + 'px',
            left: this.moveX + 'px',
            '-webkit-transform': transform,
            '-ms-transform': transform,
            transform
         }
      }
   },
   methods: {
      setView: function(view) {
         this.visao = view
         //this.$refs.layout.toggleLeft()
      },
      launch(url) {
         openURL(url)
      }
   }
}
</script>

<style lang="stylus">
.logo-container {
  width: 255px;
  height: 242px;
  perspective: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.logo {
  position: absolute;
  transform-style: preserve-3d;
}
</style>
