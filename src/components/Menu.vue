<template>
    <ul class="nav">
        <li class="nav-item">
            <router-link :style="{color: demoSmoke ? '#fff' : $store.state.themeSettings.textColor}" to="/hot-drinks">
                Горячие напитки
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :style="{color: demoSmoke ? '#fff' : $store.state.themeSettings.textColor}" to="/cold-drinks">
                Холодные напитки
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :style="{color: demoSmoke ? '#fff' : $store.state.themeSettings.textColor}" to="/alcohol-drinks">
                Алкогольные напитки
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :style="{color: demoSmoke ? '#fff' : $store.state.themeSettings.textColor}" to="/cocktails">
                Коктейли
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :style="{color: demoSmoke ? '#fff' : $store.state.themeSettings.textColor}" to="/vip-rooms">
                VIP Rooms
            </router-link>
        </li>
    </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Menu',
    computed: {
        ...mapState(['demoSmoke'])
    }
}
</script>
<style lang="scss">
    .nav {
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &-item {
            padding: 5px 5px 5px 10px;
            a {
                color: #fff;
                font-size: 1.2em;
                &:hover {
                    color: red;
                }
            }
        }
    }
</style>
