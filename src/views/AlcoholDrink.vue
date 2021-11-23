<template>
    <div class="container">
        <div class="title">
            <h2>Алкогольные напитки</h2>
        </div>
        <div class="content">
            <div class="menu-column">
                <div class="menu-column-subtitle">
                    <h3>Пиво</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Крушовице</li>
                        <li>Kozel Cerny</li>
                        <li>Bud б/а</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>300 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Clausthaler</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>200 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Hoegaarden</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>250 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Corona</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>200 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Spaten</li>
                        <li>Schofferhofer</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>300 RUB</p>
                    </div>
                </div>
                <div class="menu-column-subtitle">
                    <h3>Снеки</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Чипсы</li>
                        <li>Ореховая смесь</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>200 RUB</p>
                    </div>
                </div>
            </div>
            <div class="menu-column">
                <div class="menu-column-subtitle">
                    <h3>Шампанское</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Prosecco</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>700 RUB</p>
                    </div>
                </div>
                <div class="menu-column-subtitle">
                    <h3>Вино</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Красное сухое</li>
                        <li>Белое сухое</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>1500 RUB</p>
                    </div>
                </div>
                <div class="menu-column-subtitle">
                    <h3>Крепкий алкоголь</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>WHISKEY</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>300 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>GIN</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>300 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>RUM</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>300 RUB</p>
                    </div>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>HENNESY</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>300 RUB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'AlcoDrink',
        methods: {
            ...mapMutations(['setTheme'])
        },
        mounted() {
            this.setTheme({
                textColor: '#fff',
                backgroundColor: '#000',
                backgroundImageSize: '50%',
                backgroundPosition: 'bottom right',
                backImage: 'alco-back'
            })
        }
    }
</script>
