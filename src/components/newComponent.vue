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

      </div>
      <div class="col-5">

        <list-component :list-id="currentListId"></list-component>

      </div>

    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import ListComponent from "@/components/products/list";


export default {
  name: "newComponent",
  components: {
    ListComponent,
  },

  data() {
    return {
      currentListId: 1,

    }
  },
  created() {

    this.initList();

  },
  methods: {
    ...mapActions(['initList'])
  },
  computed: {
    currentTabComponent: function() {
      return this.currentListId;
    },

    ...mapState(['lists'])
  }

}
</script>

<style>

.main {
  margin-top: 70px;
}

.btn {
  margin: 1px;
}

.push-block {
  display: flex;
  justify-content: space-between;
}

.push-block input {
  margin: 5px;
  padding: 5px;
}
li {
  display: flex;
  font-size: 20px;
  width: 100%;
}
li div {
  width: 25%;
}

</style>