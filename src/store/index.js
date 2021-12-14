//store/index.js
import { createStore } from 'vuex';

export default createStore({
    state:{
        width: null,
        scroll: null,
        demoSmoke: false,
        mobileMenuState: true,
        themeSettings: {
            textColor: '#fff',
            backgroundColor: '#000',
            backgroundImageSize: '50% auto',
            backgroundPosition: 'top right',
            backImage: 'alco-back'
        }
    },
    mutations:{
        changeVisionMobileMenu (state) {
          state.mobileMenuState = !state.mobileMenuState
        },
        setVisionMobileMenu (state) {
          state.mobileMenuState = false
        },
        setTheme(state, payload) {
            state.themeSettings = payload
        },
        setScroll (state, payload) {
            state.scroll = payload
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
