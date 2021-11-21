<template>
    <ul class="nav">
        <li class="nav-item">
            <router-link to="/hot-drinks">
                Горячие напитки
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/cold-drinks">
                Холодные напитки
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/alcohol-drinks">
                Алкогольные напитки
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/cocktails">
                Коктейли
            </router-link>
        </li>
<!--        <li class="nav-item">-->
<!--            <router-link to="/hookah">-->
<!--                Кальян-->
<!--            </router-link>-->
<!--        </li>-->
        <li class="nav-item">
            <router-link to="/vip-rooms">
                VIP Rooms
            </router-link>
        </li>
    </ul>
</template>
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
