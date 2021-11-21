<template>
    <div class="page-wrapper" style="width: 100%"
         :style="{
            'background-color': themeSettings.backgroundColor,
            'background-size' : themeSettings.backgroundImageSize,
            'color': themeSettings.textColor
         }">
            <Header/>
            <div class="content-wrapper">
                <router-view class="smooth-show"></router-view>
            </div>
            <Footer/>
    </div>
</template>
<script>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'
import { mapState } from 'vuex'
export default {
   name: 'FirstPage',
   components: {
      Header, Footer
   },
    computed: {
       ...mapState(['themeSettings'])
    }
}
</script>
<style lang="scss">
    .page-wrapper {
        min-height: 100vh;
        background-image: url("/assets/img/back.png");
        // background-image: url("/assets/img/cold-back.png");
        background-position: bottom;
        background-repeat: no-repeat;
        margin: auto;
        max-width: 100%;
        @media (max-width: 700px) {
            background-position: bottom;
        }
        .content-wrapper {
            min-height: calc(100vh - 120px - 40px);
            margin-top: 120px;
            /*display: flex;*/
            /*flex-direction: column;*/
            /*align-items: flex-start;*/
            /*justify-content: center;*/
        }
    }
</style>
