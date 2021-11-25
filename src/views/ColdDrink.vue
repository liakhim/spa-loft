<template>
    <div class="container">
        <div class="title">
            <h2>Холодные напитки</h2>
        </div>
        <div class="content">
            <div class="menu-column" :style="{'max-width': $store.state.width > 700 ? '50%' : '100%'}" style="padding: 0">
                <div class="menu-column-subtitle">
                    <h3>Газированные напитки</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Coca-Cola</li>
                        <li>Coca-Cola Zero</li>
                        <li>Fanta</li>
                        <li>Sprite</li>
                        <li>Schweppers</li>
                        <li>Dr. Pepper</li>
                        <li>Red Bull</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>150 RUB</p>
                    </div>
                </div>
                <div class="menu-column-subtitle">
                    <h3>Лимонады</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li>Классический</li>
                        <li>Клубничный</li>
                        <li>Маракуйя</li>
                        <li>Мятный</li>
                        <li>Пина Коллада</li>
                    </ul>
                    <div class="menu-block-price">
                        <p>450 RUB</p>
                    </div>
                </div>
                <div class="menu-column-subtitle">
                    <h3>Соки</h3>
                </div>
                <div class="menu-block">
                    <ul class="menu-block-title">
                        <li><p>250 мл</p></li>
                    </ul>
                    <div class="menu-block-price">
                        <p>100 RUB</p>
                    </div>
                </div>
            </div>
<!--            <div class="menu-column">-->
<!--                <div class="menu-column-subtitle">-->
<!--                    <h3>Витаминный чай</h3>-->
<!--                </div>-->
<!--                <div class="menu-block">-->
<!--                    <ul class="menu-block-title">-->
<!--                        <li>Фруктовый</li>-->
<!--                        <li>Ягодный</li>-->
<!--                        <li>Облепиховый</li>-->
<!--                    </ul>-->
<!--                    <div class="menu-block-price">-->
<!--                        <p>300 RUB</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="menu-column-subtitle">-->
<!--                    <h3>Кофе</h3>-->
<!--                </div>-->
<!--                <div class="menu-block">-->
<!--                    <ul class="menu-block-title">-->
<!--                        <li>Американо</li>-->
<!--                    </ul>-->
<!--                    <div class="menu-block-price">-->
<!--                        <p>120 RUB</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="menu-block">-->
<!--                    <ul class="menu-block-title">-->
<!--                        <li>Капучино</li>-->
<!--                    </ul>-->
<!--                    <div class="menu-block-price">-->
<!--                        <p>180 RUB</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="menu-block">-->
<!--                    <ul class="menu-block-title">-->
<!--                        <li>Эспрессо</li>-->
<!--                    </ul>-->
<!--                    <div class="menu-block-price">-->
<!--                        <p>80 RUB</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'ColdDrink',
        methods: {
            ...mapMutations(['setTheme'])
        },
        mounted() {
            this.setTheme({
                textColor: '#000',
                backgroundColor: '#fff',
                backgroundImageSize: '50% auto',
                backgroundPosition: 'bottom',
                backImage: 'cold-back'
            })
        }
    }
</script>
