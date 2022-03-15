<template>
  <div class="main">
    <div class="row">

      <div class="col-3 offset-2">

        <b-list-group >

          <b-button
              v-for="list in lists"
              :key="list.listId"
              pill variant="outline-dark"
              :class="[ { active: currentListId === list.listId} ]"
              @click="currentListId = list.listId"

          > {{ list.title }}
          </b-button>

        </b-list-group>
        <b-button
            class="addList"
            @click="showModal">
          Добавить список
        </b-button>

      </div>
      <div class="col-5">

        <list-component :list-id="currentListId"></list-component>
        <modal-window
            v-if="isModalVisible"
            v-on:closeModal="closeModal">

        </modal-window>
      </div>

    </div>

  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import ListComponent from "@/components/products/list";
import modalWindow from "@/components/modalWindow";


export default {
  name: "newComponent",
  components: {
    ListComponent,
    modalWindow

  },

  data() {
    return {
      currentListId: 1,
      isModalVisible: false

    }
  },
  created() {

    this.initList();

  },
  methods: {
    ...mapActions(['initList']),
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  },
  computed: {
    ...mapState(['lists'])

  }

}
</script>

<style>

.main {
  margin-top: 70px;
}
.addList {
  display: block;
  margin: 20px;
}



</style>