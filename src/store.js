import Vue from 'vue'
import Vuex from 'vuex'
import helpers from "@/helpers";



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [
            {
                listId: 1,
                title: 'Продукты',
                items: [
                    { id: 1, title: 'Хлеб', count: 1, unit: 'шт' },
                    { id: 2, title: 'Помидоры', count: 2, unit: 'кг' },
                    { id: 3, title: 'Огурцы', count: 2, unit: 'кг' },
                    { id: 4, title: 'Пиво', count: 6, unit: 'бан' }
                ]
            },
            {
                listId: 2,
                title: 'Машина',
                items: [
                    { id: 1, title: 'Колеса', count: 1, unit: 'шт' },
                    { id: 2, title: 'Мойка', count: 1, unit: 'шт' },
                    { id: 3, title: 'Полировка', count: 1, unit: 'шт' }
                ]
            },
            {
                listId: 3,
                title: 'Химия',
                items: [
                    { id: 1, title: 'Моющее средство', count: 1, unit: 'шт' },
                    { id: 2, title: 'Порошок', count: 1, unit: 'шт' },
                    { id: 3, title: 'Мыло', count: 1, unit: 'шт' }
                ]
            }
        ],

    },

    getters: {

        getListItemsByListId: (state) => (listId) => {

            let list = state.lists.find(item => item.listId === listId);

            return list && list.items ? list.items : [];
        },

        getFiltered: (state, getters) => (search, listId) => {

            let list = getters.getListItemsByListId(listId);

            return list.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
        },

        listSort: (state, getters) => (listId) => {

            let list = getters.getListItemsByListId(listId)

            return list.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
        },
    },
    mutations: {

        remove (state, payload) {

            let list = helpers.getListItems(state, payload)

            list.splice(payload.index, 1)

            localStorage.setItem('lists', JSON.stringify(state.lists))
        },

        addNewProd(state, payload) {

            let list = helpers.getListItems(state, payload)

            if (payload.title && isNaN(payload.title) && payload.id && payload.count && !isNaN(payload.count)) {

                list.push({
                    id: payload.id,
                    title: payload.title,
                    count: payload.count,
                    unit: payload.unit,
                })
                alert('Продукт успешно добавлен!')

                localStorage.setItem('lists', JSON.stringify(state.lists))
            } else {
                alert('Проверьте правильность введенных данных!')
            }
        },

        setLists(state, payload) {
            state.lists = payload;
        }

    },

    actions: {
        initList({commit}) {
            let lists = JSON.parse(localStorage.getItem('lists'));

            if (lists) {
                commit('setLists', lists);
            }
        },
    },

})