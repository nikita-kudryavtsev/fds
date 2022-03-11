<template>
  <div class="class">
    <div class="search">
      <b-form-input v-model="search" id="input-default" placeholder="Найти"></b-form-input>
      <b-button @click="listSort">По имени</b-button>
    </div>


    <ul>
      <li v-for="(item, listId) in getFiltered"
          :key="listId">
        <div> {{ item.title }}</div>
        <div>  {{ item.count }}</div>
        <div> {{ item.unit }}</div>
        <b-button
            @click="remove"
            variant="outline-danger"
            >Удалить</b-button>
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
      <b-button @click="addNewProd" variant="success">+</b-button>
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
      toggle: true

    }
  },

  methods: {
    ...mapActions(['initList']),

    // remove() {
    //   let product = {
    //     index: this.index,
    //     listId: this.listId
    //
    //   }
    //   this.$store.commit('remove', product)
    // },

    remove(index) {
      let list = this.$store.state.lists.find((item) => item.listId === this.listId)

      // console.log(list.items)

      // index = this.$store.state.find(item => item.id)
      console.log(list.items.index)

      list.items.splice(index, 1)
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
      };

      this.$store.commit('addNewProd',  product)

      this.title = ''
      this.count = ''
      this.unit = 'шт'

    },
  },

  computed: {

    getFiltered() {
      return this.$store.getters.getFiltered(this.search, this.listId)
    },
    listSort() {
      return this.$store.getters.listSort(this.listId)
    },

  }

}
</script>

<style scoped>

.btn {
  width: 25%;
  height: 38px;
}
.search {
  display: flex;
  margin-bottom: 20px;
}
.search input {
  margin-right: 5px;
}
.push-block input {
  margin: 0;
}
.push-block button {
  margin: 0;
}


</style>