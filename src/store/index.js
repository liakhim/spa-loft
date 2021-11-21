//store/index.js
import { createStore } from 'vuex';

export default createStore({
    state:{
        themeSettings: {
            textColor: '#fff',
            backgroundColor: '#000',
            backgroundImageSize: '100% auto'
        }
    },
    mutations:{},
    actions:{},
    modules:{}
});
