<template>
    <div class="container">
        <div class="title" style="margin: 30px 0 0 0">
            <h2>Аренда VIP-КОМНАТ</h2>
        </div>
        <div class="content">
            <div class="menu-column" style="padding: 0">
                <div class="menu-column-subtitle">
                    <h3>2500 RUB</h3>
                </div>
                <div class="menu-column-rooms-info">
                    <p>2 часа</p>
                    <p>2 кальяна</p>
                    <p>PSP 4 / PSP PRO</p>
                </div>
                <div class="menu-column-rooms-info">
                    <p>Продление 500 RUB/час</p>
                </div>
                <div class="menu-column-rooms-bottom-info">
                    <p>10% скидка в день рождения</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'VipRooms',
        methods: {
            ...mapMutations(['setTheme'])
        },
        mounted() {
            this.setTheme({
                textColor: '#fff',
                backgroundColor: '#000',
                backgroundImageSize: '100% auto',
                backgroundPosition: 'bottom',
                backImage: 'rooms-back'
            })
        }
    }
</script>
