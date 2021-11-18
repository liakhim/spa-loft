<template>
    <div class="header">
        <div class="header-container">
            <div class="logo">
                <img src="/assets/img/logo.svg" alt="">
            </div>
            <Menu/>
        </div>
    </div>
</template>
<script>
import Menu from './Menu.vue'
export default {
    name: 'Header',
    components: {
        Menu
    }
}
</script>
<style lang="scss">
    .header {
        height: 120px;
        border: 1px solid red;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #00000090;
        backdrop-filter: blur(10px);
        .header-container {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            max-width: 1200px;
            margin: auto;
            @media (max-width: 700px) {
                max-width: 90%;
            }
            .logo {
                padding-top: 20px;
                img {
                    max-width: 250px;
                }
            }
        }
    }
</style>
