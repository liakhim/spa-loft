//store/index.js
import { createStore } from 'vuex';

export default createStore({
    state:{
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
        toggleDemoSmoke (state) {
            state.demoSmoke = !state.demoSmoke
        }
    },
    actions:{},
    modules:{}
});
