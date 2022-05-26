import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from "./router";

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
            localStorage.setItem("token", token);
        },
        clearToken(state) {
            state.token = "";
            localStorage.removeItem("token");
        }
    },
    actions: {
        initAuth({ commit, dispatch }) {
            let token = localStorage.getItem("token");
            if (token) {
                commit("setToken", token);
                router.push("/");
            } else {
                router.push("/auth");
            }
        },
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
        logout({ commit }) {
            commit("clearToken");
        }
        /*
                                                                                                        login(vuexContext){
                                                                                                            vuexContext.commit()
                                                                                                        }
                                                                                                        */
    }
});

export default store;