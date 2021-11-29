<template>
    <swiper
            style="width: 100%; display:flex;"
            :slides-per-view="2"
            :space-between="50"
            @swiper="onSwiper()"
            :loop="false"
            ref="carousel"
            class="swiper-slider"
            @slideChange="onSlideChange()"
    >
        <swiper-slide>
            <router-link to="/hot-drinks">
                <span :class="{'active': $route.path === '/hot-drinks'}">Горячие напитки</span>
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/cold-drinks">
                <span :class="{'active': $route.path === '/cold-drinks'}">Холодные напитки</span>
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/alcohol-drinks">
                <span :class="{'active': $route.path === '/alcohol-drinks'}">Алкогольные напитки</span>
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/cocktails">
                <span :class="{'active': $route.path === '/cocktails'}">Коктейли</span>
            </router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link to="/vip-rooms">
                <span :class="{'active': $route.path === '/vip-rooms'}">Vip Rooms</span>
            </router-link>
        </swiper-slide>
    </swiper>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    // import 'swiper/css';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        // setup() {
        //     const onSwiper = (swiper) => {
        //         console.log(swiper);
        //     };
        //     const onSlideChange = () => {
        //         console.log('slide change');
        //         alert('nnnjn')
        //     };
        //     return {
        //         onSwiper,
        //         onSlideChange,
        //     };
        // },
        methods: {
            onSwiper (swiper) {
                console.log('-------')
                console.log(swiper);
            },
            test () {
                console.log(this.$refs.carousel)
            },
            onSlideChange () {
                console.log('slide change');
                console.log(this.$refs.carousel)
                this.swiper.on('slideChange',()=>{
                    this.onSwipe(this)
                });
            }
        }
    };
</script>
<style lang="scss">
    .swiper-slider {
        width: auto;
    }
    .swiper-slide {
        display: inline-flex;
        width: auto!important;
        margin-right: auto!important;
    }
    a {
        white-space: nowrap;
        padding: 5px 10px;
        display: inline-flex;
        color: #fff;
        .active {
            color: red;
        }
    }
</style>
