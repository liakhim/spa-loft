<template>
    <div id="container">
        <!-- to increase performance, we change the opacity of shadow instead of changing the text-shadow directly -->
        <p id="text">LOFT</p>
        <p id="shadow">
            <span id="glow">LO</span><span id="blink">FT</span>
        </p>
    </div>
</template>
<script>
export default {
    name: 'Preloader',
    data () {
      return {
          is: false
      }
    },
    mounted() {
        setTimeout(() => {
            this.is = true
        }, 1000)
        setTimeout(() => {
            // this.$router.push('/hot-drinks')
        }, 2000)
    }
}
</script>
<style lang="scss">
    body {
        height: 100vh;
        // background: #112 url(https://cdn.pixabay.com/photo/2017/02/12/12/42/wall-2059909_960_720.png) center no-repeat;
        background-size: cover;
        background: #000;
    }
    .hide-container {
        animation: 1s hide-eff 1;
    }
    @keyframes hide-eff {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    #text,
    #shadow {
        position: absolute;
        margin: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 7em;
        letter-spacing: 20px;
        // font-family: Bad Script;
        color: #fff;
        @media (max-width: 700px) {
            left: 53%;
        }
    }

    #text {
        color: #333
    }

    #shadow {
        text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
    }

    #glow {
        animation: neon1 linear infinite 3s;
        will-change: opacity;
    }

    #blink {
        animation: blink linear infinite 2s;
    }


    @keyframes neon1 {
        20% {
            opacity: 1;
        }
        80% {
            opacity: 0.6;
        }
    }


    @keyframes blink {
        70% {
            opacity: 1;
        }
        79% {
            opacity: 0;
        }
        81% {
            opacity: 1;
        }
        82% {
            opacity: 0;
        }
        83% {
            opacity: 1;
        }
        92% {
            opacity: 0;
        }
        92.5% {
            opacity: 1;
        }
    }
</style>
