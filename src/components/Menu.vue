<template>
    <div class="nav-wrapper"
         :class="{'nav-wrapper-lines': $store.state.mobileMenuState && $store.state.themeSettings.textColor === '#fff',
          'nav-wrapper-lines-light': $store.state.mobileMenuState && $store.state.themeSettings.textColor === '#000' }"
         :style="{'height': heightHeader}">
        <div :style="{'transform': !$store.state.mobileMenuState ? 'scale(0)' : 'scale(1)'}" class="logo-nav">
            <img :style="{'filter': 'invert(' + ($store.state.themeSettings.textColor === '#fff' ? '0' : '1') + ')'}" src="/assets/img/logo.svg" alt="">
        </div>
        <ul class="nav">
            <li @click="$store.commit('setVisionMobileMenu')" class="nav-item">
                <router-link :style="{color: $store.state.themeSettings.textColor}" to="/hot-drinks">
                    Горячие напитки
                </router-link>
            </li>
            <li @click="$store.commit('setVisionMobileMenu')" class="nav-item">
                <router-link :style="{color: $store.state.themeSettings.textColor}" to="/cold-drinks">
                    Холодные напитки
                </router-link>
            </li>
            <li @click="$store.commit('setVisionMobileMenu')" class="nav-item">
                <router-link :style="{color: $store.state.themeSettings.textColor}" to="/alcohol-drinks">
                    Алкогольные напитки
                </router-link>
            </li>
            <li @click="$store.commit('setVisionMobileMenu')" class="nav-item">
                <router-link :style="{color: $store.state.themeSettings.textColor}" to="/cocktails">
                    Коктейли
                </router-link>
            </li>
            <li @click="$store.commit('setVisionMobileMenu')" class="nav-item">
                <router-link :style="{color: $store.state.themeSettings.textColor}" to="/vip-rooms">
                    VIP Rooms
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Menu',
    components: {},
    computed: {
        ...mapState(['demoSmoke']),
        heightHeader () {
            if (this.$store.state.width < 700) {
                if (this.$store.state.mobileMenuState) {
                    return '160px'
                } else {
                    return '0px'
                }
            } else {
                return 'auto'
            }
            // return (!this.$store.state.mobileMenuState && this.$store.state.width < 700) ? '160px' : '0'
        }
    }
}
</script>
<style lang="scss">
    .nav-wrapper {
        width: 100%;
        transition: 0.6s;
        overflow: hidden;
        height: auto;
        .logo-nav {
            display: none;
        }
        .nav {
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: auto;
            &-item {
                padding: 0 5px 0 10px;
                height: 40px;
                white-space: nowrap;
                a {
                    color: #fff;
                    font-size: 1.2em;
                    &:hover {
                        color: red;
                    }
                }
            }
        }
    }
    @media (max-width: 700px) {
        .nav-wrapper {
            display: flex;
            .logo-nav {
                display: flex;
                width: 40px;
                align-items: center;
                justify-content: center;
                img {
                    transform: rotate(-90deg);
                    max-width: 130px;
                    opacity: 0.5;
                }
            }
            .nav {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-start;
                max-width: 100%;
                overflow: scroll;
                width: 100%;
                transition: 0.6s;
                padding: 0;
                height: 160px;
                &-item {
                    padding: 0;
                    width: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    /*&:not(:last-child) {*/
                    /*    padding-right: 15px;*/
                    /*}*/
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
        .nav-wrapper-lines {
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
        }
        .nav-wrapper-lines-light {
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }
    }
</style>
