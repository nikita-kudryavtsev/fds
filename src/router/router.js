import VueRouter from "vue-router";
import newComponent from "@/components/newComponent";


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: newComponent
        },
    ]
})