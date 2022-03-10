export default {
    getListItems(lists, listId) {
        let list = lists.find((item) => item.listId === listId);

        return list && list.items ? list.items : [];
    }
}