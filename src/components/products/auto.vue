<template>
  <div class="class">
    <b-form-input v-model="search" id="input-default" placeholder="Найти"></b-form-input>
    <b-button
        @click="listSort">

      По имени</b-button>

    <ul>
      <li v-for="(car, index) in getFiltered"
          :key="index"
      >
        <div> {{ car.title }}</div>
        <div>  {{ car.count }}</div>
        <div> {{ car.unit }}</div>
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
      <b-button @click="addNewProd(products)"  variant="outline-success">+</b-button>
    </div>
  </div>


</template>

<script>

import { mapState } from "vuex";





export default {

  name: "productsComponent",

  // props: ['listId'], // указать что этот пропс первого айтема в листс

  data() {
    return {
      search: '',
      id: 5,
      title: '',
      unit: 'шт',
      count: '',
      tab: 2
    }

  },
  created() {

    // let list = this.$store.state.lists.find((item) => item.listId === this.tab).items
    // localStorage.setItem('auto', JSON.stringify(list))

  },

  methods: {

    remove(index) {
      let product = {
        index: index,
        tab: this.tab
      }
      this.$store.commit('remove', product)
    },

    addNewProd() {
      let product = {
        id: this.id,
        title: this.title,
        unit: this.unit,
        count: this.count,
        tab: this.tab
      };

      this.$store.commit('addNewProd',  product )

      this.title = ''
      this.count = ''
      this.unit = 'шт'

      let list = this.$store.state.lists.find((item) => item.listId === this.tab).items
      localStorage.setItem('products', JSON.stringify(list))
    },

  },
  computed: {

    ...mapState({

      products: state => {

        let list = state.lists.find((item) => item.listId === 1); //this.listId

        return list ? list.items : [];

      },

    }),

    getFiltered() {
      return this.$store.getters.getFiltered(this.search, this.tab)
    },
    listSort() {
      return this.$store.getters.listSort(this.tab)
    }

  }

}
</script>

<style scoped>

</style>