<template>
    <Preloader v-show="preloading"/>
    <div v-show="!preloading" class="page-wrapper" style="width: 100%"
         :style="{
            'background-color': demoSmoke ? '#000' : themeSettings.backgroundColor,
            'background-size' : width > 700 ? themeSettings.backgroundImageSize : 'auto 100%',
            'background-attachment': width > 700 ? 'none' : 'fixed',
            'background-image': 'url(/assets/img/'+themeSettings.backImage+'.png)',
            'background-position': themeSettings.backgroundPosition,
            'color': demoSmoke ? '#fff' : themeSettings.textColor
         }">
            <div class="video-background" v-if="demoSmoke">
                <video style="width100vw;height: 100vh" autoplay muted loop id="myVideo">
                    <source src="/assets/img/smoke.mp4" type="video/mp4">
                </video>
            </div>
            <div style="min-height: 100vh;display:flex;flex-direction: column"
                 :style="{'backdrop-filter':demoSmoke ? 'blur(30px)' : 'blur(10px)'}">
                <Header/>
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
import { mapState, mapMutations } from 'vuex'
import Preloader from "../components/Preloader";
export default {
   name: 'FirstPage',
    data () {
       return {
           width: 0,
           preloading: true
       }
    },
   components: {
       Preloader,
      Header, Footer
   },
    methods: {
       ...mapMutations(['setWidth']),
        updateWidth() {
            this.width = window.innerWidth;
            this.setWidth(this.width)
        }
    },
    computed: {
       ...mapState(['themeSettings', 'demoSmoke'])
    },
    created() {
        this.width = window.innerWidth
        this.setWidth(this.width)
        window.addEventListener('resize', this.updateWidth);
    },
    mounted() {
        setTimeout(() => {
            this.preloading = false
        }, 2000)
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
        .video-background {
            position: absolute;
            min-height: 100%;
            width: auto;
            min-width: 100vw;
            @media (max-width: 700px) {
                max-width: 100vw;
                /* max-height: 100vh; */
                overflow: hidden;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: fixed;
            }
        }
        .content-wrapper {
            // backdrop-filter: blur(10px);
            min-height: calc(100vh - 120px - 40px);
            margin-top: 120px;
            position: relative;
            /*display: flex;*/
            /*flex-direction: column;*/
            /*align-items: flex-start;*/
            /*justify-content: center;*/
        }
    }
    @media (max-width: 700px) {
        .page-wrapper {
            .video-background {
                max-width: 100vw;
                max-height: 100vh;
                overflow: hidden;
            }
            .content-wrapper {
                // margin-top: 160px;
            }
        }
    }
</style>
