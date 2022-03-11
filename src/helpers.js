export default {

    getListItems(state, payload){

            let list = state.lists.find((item) => item.listId === payload.listId)

            return list && list.items ? list : []

    }
}