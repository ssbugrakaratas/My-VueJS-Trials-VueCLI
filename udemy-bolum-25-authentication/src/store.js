import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: "",
        firebaseAPIkey: "AIzaSyC10xCH5qDLskp59AosjvJnqs9WtxUtuK4"
    },
    getters: {
        //getToken(){
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = "";
        }
    },
    actions: {
        login({ commit, dispatch, state }, authData) {
            //giriş yap
        },
        logout({ commit, dispatch, state }) {
            //çıkış yap
        }
        /*
                    login(vuexContext){
                        vuexContext.commit()
                    }
                    */
    }
});

export default store;