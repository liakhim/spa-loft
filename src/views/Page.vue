<template>
    <div class="page-wrapper" style="width: 100%">
            <Header/>
            <div class="content-wrapper">
                <router-view></router-view>
            </div>
            <Footer/>
    </div>
</template>
<script>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'
export default {
   name: 'FirstPage',
   components: {
      Header, Footer
   }
}
</script>
<style lang="scss">
    .page-wrapper {
        min-height: 100vh;
        background-image: url("/assets/img/back.png");
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100% auto;
        margin: auto;
        max-width: 100%;
        @media (max-width: 700px) {
            background-position: bottom;
        }
        .content-wrapper {
            min-height: calc(100vh - 120px - 40px);
            margin-top: 120px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
    }
</style>
