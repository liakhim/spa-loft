<template>
    <div class="header" :class="{'white-back': width < 700 && themeSettings.backgroundColor === '#fff',
    'black-back': width < 700 && themeSettings.backgroundColor === '#000'}">
        <div class="header-container">
            <div class="wrapper">
                <div class="logo" :style="{
                    'opacity': (!$store.state.mobileMenuState) ? '1' : '0'
                }">
                    <img :style="{'filter': 'invert(' + (($store.state.themeSettings.textColor === '#fff' || $store.state.demoSmoke) ? '0' : '1') + ')'}"
                         src="/assets/img/logo.svg" alt="">
                </div>
                <Burger/>
            </div>
            <Menu/>
            <DesktopMenu v-if="false"/>
        </div>
    </div>
</template>
<script>
import Menu from './Menu.vue'
import DesktopMenu from './DesktopMenu.vue'
import Burger from './Burger.vue'
import { mapState } from 'vuex'
export default {
    name: 'Header',
    components: {
        Menu, Burger, DesktopMenu
    },
    computed: {
        ...mapState(['scroll', 'width', 'themeSettings'])
    }
}
</script>
<style lang="scss">
    .header {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        padding: 10px 0;
        z-index: 1000;
        backdrop-filter: blur(10px);
        // backdrop-filter: blur(10px);
        .header-container {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            max-width: 1200px;
            margin: auto;
            .wrapper {
                z-index:1000;
                position: relative;
                display:flex;
                align-items: center;
                justify-content: space-between;
                width: auto;
            }
            @media (max-width: 700px) {
                max-width: 90%;
            }
            @media (max-width: 1367px) {
                max-width: 90%;
            }
            .logo {
                display: flex;
                align-items: center;
                transition: 0.2s;
                img {
                    min-width: 125px;
                    max-width: 200px;
                }
            }
            .logo-hide {
                transform: translateY(-120px);
                height: 0!important;
                overflow: hidden;
            }
        }
    }
    .white-back {
        background: transparent;
    }
    .black-back {
        background: transparent;
    }
    @media (max-width: 700px) {
        .header {
            padding: 0;
            position: sticky;
            .header-container {
                flex-direction: column;
                .wrapper {
                    width: 100%;
                    .logo {
                        height: 70px;
                        img {
                            width: 125px;
                        }
                    }
                }
            }
        }
        .white-back {
            background: #fff;
        }
        .black-back {
            background: #000;
        }
    }
</style>
