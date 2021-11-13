import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue"
import infoMotor from "@/components/infoMotor.vue"
import beli from "@/components/beli.vue"
import beliAdmin from "@/components/beliAdmin.vue"
import kegiatan from "@/components/kegiatan.vue"
import kontak from "@/components/kontak.vue"
import peduli from "@/components/peduli.vue"
import login from "@/components/login.vue"
import bor from "@/components/bor.vue"
import infoUser from "@/components/infoUser.vue"
import homeUser from "@/components/homeUser.vue"

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
            path: "/beliAdmin",
            name: 'beliAdmin',
            component: beliAdmin
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
        {
            path: "/peduli",
            name: 'peduli',
            component: peduli
        },
        {
            path: "/login",
            name: 'login',
            component: login
        },
        {
            path: "/bor",
            name: 'bor',
            component: bor
        },
        {
            path: "/infoUser",
            name: 'infoUser',
            component: infoUser
        },
        {
            path: "/homeUser",
            name: 'homeUser',
            component: homeUser
        },
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;