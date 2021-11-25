<template>
    <div class="footer">
        <div class="footer-container container">
            <button class="demoSmoke" type="button" @click="toggleDemoSmoke()">Demo Smoke</button>
            <button class="demoSmoke green" @click="setUniversalImage()">Universal Image</button>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default {
        name: 'Footer',
        methods: {
            ...mapMutations(['toggleDemoSmoke', 'setUniversalImage'])
        }
    }
</script>
<style lang="scss">
    .footer {
        // background: #000;
        position: relative;
        // backdrop-filter: blur(10px);
        height: 40px;
        z-index: 1000;
        &-container {
            .demoSmoke {
                color: red;
                border: 1px solid red;
                border-radius: 10px;
                padding: 5px 10px;
            }
        }
    }
</style>
