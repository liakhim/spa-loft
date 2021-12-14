<template>
    <div v-if="$store.state.width < 700"
         class="burger"
         :class="{ invert: $store.state.themeSettings.textColor === '#000' }" @click="changeVisionMobileMenu()">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Burger',
    methods: {
        ...mapMutations(['changeVisionMobileMenu'])
    }
}
</script>
<style scoped lang="scss">
    .burger {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 36px;
        height: 26px;
        span {
            width: 36px;
            height: 2px;
            background: #fff;
        }
    }
    .invert {
        span {
            background: #000;
        }
    }
</style>
