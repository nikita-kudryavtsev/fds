<template>
  <div class="class">
    <div class="search">
      <b-form-input v-model="search" id="input-default" placeholder="Найти"></b-form-input>
    </div>
    <ul>
      <li v-for="(item, index) in getFiltered"
          :key="index"
          v-bind="listSort"
      >
        <div> {{ item.title }}</div>
        <div>  {{ item.count }}</div>
        <div> {{ item.unit }}</div>
        <b-button @click="remove(index)">Удалить</b-button>
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
      <b-button @click="addNewProd"  variant="success">+</b-button>
    </div>
  </div>
</template>

<script>


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

  methods: {

    remove(index) {
      let product = {
        index: index,
        listId: this.listId
      }
      this.$store.commit('remove', product)
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
  margin: 1px;
}
.search {
  display: flex;
  margin-bottom: 20px;
}
.search input {
  margin-right: 5px;
}
.push-block {
  display: flex;
  justify-content: space-between;
}
.push-block input {
  margin: 0;
  width: 100%;
  padding: 5px;
}
.push-block input:nth-child(2){
  width: 30%;
}
.push-block button {
  margin: 0;
}
li {
  display: flex;
  font-size: 20px;
  width: 100%;
}
li div {
  width: 25%;
}
li div:nth-child(2) {
  text-align: right;
  padding-right: 5px;
}

</style>