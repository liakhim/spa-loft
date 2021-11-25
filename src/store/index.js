//store/index.js
import { createStore } from 'vuex';

export default createStore({
    state:{
        width: null,
        demoSmoke: false,
        themeSettings: {
            textColor: '#fff',
            backgroundColor: '#000',
            backgroundImageSize: '50% auto',
            backgroundPosition: 'top right',
            backImage: 'alco-back'
        }
    },
    mutations:{
        setTheme(state, payload) {
            state.themeSettings = payload
        },
        setWidth(state, payload) {
            state.width = payload
        },
        toggleDemoSmoke (state) {
            state.demoSmoke = !state.demoSmoke
        },
        setUniversalImage (state) {
            state.themeSettings.textColor = '#fff'
            state.themeSettings.backgroundColor = '#000',
            state.themeSettings.backImage = 'universal-back'
        }
    },
    actions:{},
    modules:{}
});
