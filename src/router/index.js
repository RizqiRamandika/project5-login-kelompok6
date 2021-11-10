import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue"
import infoMotor from "@/components/infoMotor.vue"
import beli from "@/components/beli.vue"
import kegiatan from "@/components/kegiatan.vue"
import kontak from "@/components/kontak.vue"

Vue.use(Router)

function configRoutes() {
    return [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/infoMotor",
            name: 'infoMotor',
            component: infoMotor
        },
        {
            path: "/beli",
            name: 'beli',
            component: beli
        },
        {
            path: "/kontak",
            name: 'kontak',
            component: kontak
        },
        {
            path: "/kegiatan",
            name: 'kegiatan',
            component: kegiatan
        },
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;