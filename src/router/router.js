import VueRouter from "vue-router";
import newComponent from "@/components/newComponent";
import products from "@/components/products/products";
import chemistry from "@/components/products/chemistry";
import auto from "@/components/products/auto";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: newComponent
        },
        {
            path: 'products',
            name: 'products',
            component: products
        },
        {
            path: 'chemistry',
            name: 'chemistry',
            component: chemistry
        },
        {
            path: 'auto',
            name: 'auto',
            component: auto
        },

    ]
})