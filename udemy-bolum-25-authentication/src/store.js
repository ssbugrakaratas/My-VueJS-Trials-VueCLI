import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: "",
        firebaseAPIkey: "AIzaSyC10xCH5qDLskp59AosjvJnqs9WtxUtuK4"
    },
    getters: {
        getToken(state) {
            return state.token;
        }
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
            let authLink =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
            if (authData.isUser) {
                authLink =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
            }

            return axios
                .post(authLink + "AIzaSyC10xCH5qDLskp59AosjvJnqs9WtxUtuK4", {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(response => {
                    commit("setToken", response.data.idToken);
                })
                .catch(e => {
                    console.log(e);
                });
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