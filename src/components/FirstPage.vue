<template>
    <div style="width: 100%">
        <div class="container">
            <div class="header">
                <div class="logo">
                    <img src="/assets/img/logo.svg" alt="">
                </div>
                <Menu/>
            </div>
            <div class="title">
                <h2>Горячие напитки</h2>
            </div>
            <div class="content">
                <div class="menu-column">
                    <div class="menu-column-subtitle">
                        <h3>Зеленый чай</h3>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li>Классическиц</li>
                        </ul>
                        <div class="menu-block-price">
                            <p>300 RUB</p>
                        </div>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li>Имбирный</li>
                            <li>С жасмином</li>
                            <li>Молочный улун</li>
                            <li>Васильковый</li>
                            <li>Земляничный</li>
                        </ul>
                        <div class="menu-block-price">
                            <p>300 RUB</p>
                        </div>
                    </div>
                    <div class="menu-column-subtitle">
                        <h3>Черный чай</h3>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li>Классический</li>
                            <li>Земляничный</li>
                        </ul>
                        <div class="menu-block-price">
                            <p>300 RUB</p>
                        </div>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li><p>Эрл Грей</p></li>
                            <li><p>С чабрецом</p></li>
                            <li><p>Шоколадный</p></li>
                            <li><p>С мятой</p></li>
                            <li><p>Ройбош</p></li>
                            <li><p>Пуэр</p></li>
                        </ul>
                        <div class="menu-block-price">
                            <p>300 RUB</p>
                        </div>
                    </div>
                </div>
                <div class="menu-column">
                    <div class="menu-column-subtitle">
                        <h3>Витаминный чай</h3>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li>Фруктовый</li>
                            <li>Ягодный</li>
                            <li>Облепиховый</li>
                        </ul>
                        <div class="menu-block-price">
                            <p>300 RUB</p>
                        </div>
                    </div>
                    <div class="menu-column-subtitle">
                        <h3>Кофе</h3>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li>Американо</li>
                        </ul>
                        <div class="menu-block-price">
                            <p>120 RUB</p>
                        </div>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li>Капучино</li>
                        </ul>
                        <div class="menu-block-price">
                            <p>180 RUB</p>
                        </div>
                    </div>
                    <div class="menu-block">
                        <ul class="menu-block-title">
                            <li>Эспрессо</li>
                        </ul>
                        <div class="menu-block-price">
                            <p>80 RUB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Menu from '../components/Menu.vue'
export default {
    name: 'FirstPage',
    components: {
        Menu
    }
}
</script>
