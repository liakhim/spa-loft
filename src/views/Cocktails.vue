<template>
    <div class="container">
        <div class="title">
            <h2>Коктейли</h2>
        </div>
        <div class="content">
            <div class="menu-column" style="padding: 0"
                 :style="{'max-width': $store.state.width > 700 ? '50%' : '100%'}">
                <div class="menu-block menu-block-cocktails">
                    <ul class="menu-block-title">
                        <li>
                            <p>Апероль</p>
                            <span>апероль, содовая, игристое</span>
                        </li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block menu-block-cocktails">
                    <ul class="menu-block-title">
                        <li>
                            <p>Виски-кола</p>
                            <span>виски, Coca-Cola, лимон</span>
                        </li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block menu-block-cocktails">
                    <ul class="menu-block-title">
                        <li>
                            <p>Джин-тоник</p>
                            <span>джин, тоник, лимон</span>
                        </li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block menu-block-cocktails">
                    <ul class="menu-block-title">
                        <li>
                            <p>Фиеро-тоник</p>
                            <span>фиеро, тоник, апельсин</span>
                        </li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block menu-block-cocktails">
                    <ul class="menu-block-title">
                        <li>
                            <p>Пино колада</p>
                            <span>ром, сливки, ананасовый сок</span>
                        </li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block menu-block-cocktails">
                    <ul class="menu-block-title">
                        <li>
                            <p>Тропический физ</p>
                            <span>сироп маракуйя, манго, ананасовый сок, джин</span>
                        </li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-block menu-block-cocktails">
                    <ul class="menu-block-title">
                        <li>
                            <p>Фруктовый физ</p>
                            <span>ягодный сироп, сок вишни, джин</span>
                        </li>
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
