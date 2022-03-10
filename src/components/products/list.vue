<template>
  <div class="class">
    <b-form-input v-model="search" id="input-default" placeholder="Найти"></b-form-input>
    <b-button
        @click="listSort">

      По имени</b-button>

    <ul>
      <li v-for="(item, listId) in getFiltered"
          :key="listId">
        <div> {{ item.title }}</div>
        <div>  {{ item.count }}</div>
        <div> {{ item.unit }}</div>
        <b-button @click="remove">Удалить</b-button>
      </li>
    </ul>

    <div class="push-block">
      <input v-model="title" placeholder="Продукт" type="text">
      <input v-model="count" placeholder="Кол-во">
      <select v-model="unit">
        <option>шт</option>
        <option>бан</option>
        <option>кг</option>
      </select>
      <b-button @click="addNewProd" variant="outline-success">+</b-button>
    </div>
  </div>


</template>

<script>

import {mapActions} from "vuex";


export default {

  name: "ListComponent",

  props: ['listId'],

  data() {
    return {
      search: '',
      id: 5,
      title: '',
      unit: 'шт',
      count: '',

    }
  },

  created() {


     // this.initList();


  },

  methods: {
    ...mapActions(['initList']),

    remove(index) {
      let product = {
        index: index,
        listId: this.listId
      }
      this.$store.commit('remove', product)
    },


    setProducts() {
      this.$store.commit('setProducts')
    },


    addNewProd() {
      let product = {
        id: this.id++,
        title: this.title,
        unit: this.unit,
        count: this.count,
        listId: this.listId,
        // list: this.$store.state.lists.find((item) => item.listId === this.listId).items

      };


      this.$store.commit('addNewProd',  product)




      this.title = ''
      this.count = ''
      this.unit = 'шт'




      // let list = this.$store.state.lists.find((item) => item.listId === this.tab).items

      // localStorage.setItem('products', JSON.stringify(list))
      //
      // JSON.parse(localStorage.getItem('products'))
      //
      // localStorage.setItem('products', JSON.stringify(list))



    },


  },
  computed: {

    getFiltered() {
      return this.$store.getters.getFiltered(this.search, this.listId)
    },
    listSort() {
      return this.$store.getters.listSort(this.listId)
    }

  }

}
</script>

<style scoped>

</style>