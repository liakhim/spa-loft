<template>
    <div class="container">
        <div class="title">
            <h2>Коктейли</h2>
        </div>
        <div class="content">
            <div class="menu-column" :style="{'max-width': $store.state.width > 700 ? '50%' : '100%'}">
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Апероль</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Виски-кола</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Джин-тоник</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Фиеро-тоник</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Пино колада</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Тропический физ</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Фруктовый физ</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'Cocktails',
        methods: {
            ...mapMutations(['setTheme'])
        },
        mounted() {
            this.setTheme({
                textColor: '#000',
                backgroundColor: '#fff',
                backgroundImageSize: '50%',
                backgroundPosition: 'bottom right',
                backImage: 'cocktail-back'
            })
        }
    }
</script>
