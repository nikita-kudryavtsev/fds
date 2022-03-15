<template>
  <div class="modal-main">
    <div class="modal__content">

      <b-button class="modal__button_close"
      @click="$emit('closeModal')">
        x
      </b-button>

      <input class="modal__input" type="text" placeholder="Введите название списка" v-model="title">
      <b-button class="modal__button_add"
      @click="addNewList">Добавить список</b-button>

    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  data() {
    return {
      show: false,
      listId: this.$store.state.lists.length,
      title: '',
      items: []
    }
  },
  methods: {

    addNewList() {
      let list = {
        listId: ++this.listId,
        title: this.title,
        items: this.items
      }
      this.$store.commit('addNewList', list)

      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>

.modal-main {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 20px 60px;
  width: 400px;
  height: 200px;
  margin: auto;
  text-align: center;
  background-color: aliceblue;
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}
.modal__button_close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: red;
  font-size: 30px;
  background-color: transparent;
  border: none;
}
.modal__button_close:hover {
  background: none;
  color: brown;
}


</style>