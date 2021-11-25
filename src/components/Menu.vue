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
    @media (max-width: 700px) {
        .nav {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            max-width: 100%;
            overflow: scroll;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-top: 20px;
            &-item {
                padding: 0;
                width: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                &:not(:last-child) {
                    padding-right: 15px;
                }
                a {
                    white-space: nowrap;
                    color: #fff;
                    font-size: 1.2em;
                    &:hover {
                        color: red;
                    }
                }
            }
        }
    }
</style>
