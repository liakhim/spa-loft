<template>
    <div class="page-wrapper" style="width: 100%"
         :style="{
            'background-color': demoSmoke ? '#000' : themeSettings.backgroundColor,
            'background-size' : themeSettings.backgroundImageSize,
            'background-image': 'url(/assets/img/'+themeSettings.backImage+'.png)',
            'background-position': themeSettings.backgroundPosition,
            'color': demoSmoke ? '#fff' : themeSettings.textColor
         }">
            <div style="backdrop-filter: blur(10px);min-height: 100vh;display:flex;flex-direction: column">
                <Header/>
                <video v-if="demoSmoke"
                       style="position: absolute; height: 100vh;" autoplay muted loop id="myVideo">
                    <source src="/assets/img/smoke.mp4" type="video/mp4">
                </video>
                <div class="content-wrapper">
                    <router-view class="smooth-show"></router-view>
                </div>
                <Footer/>
            </div>
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
       ...mapState(['themeSettings', 'demoSmoke'])
    }
}
</script>
<style lang="scss">
    .page-wrapper {
        min-height: 100vh;
        // background-image: url("/assets/img/cold-hot-back.png");
        // background-position: bottom;
        background-repeat: no-repeat;
        margin: auto;
        max-width: 100%;
        @media (max-width: 700px) {
            background-position: bottom;
        }
        .content-wrapper {
            // backdrop-filter: blur(10px);
            min-height: calc(100vh - 120px - 40px);
            margin-top: 120px;
            /*display: flex;*/
            /*flex-direction: column;*/
            /*align-items: flex-start;*/
            /*justify-content: center;*/
        }
    }
</style>
