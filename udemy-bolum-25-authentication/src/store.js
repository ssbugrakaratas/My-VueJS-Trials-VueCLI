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
                let expirationDate = localStorage.getItem("expirationDate");
                let nowTime = new Date().getTime();

                if (nowTime >= parseInt(expirationDate)) {
                    console.log("token suresi geçmiş");
                    dispatch("logout");
                } else {
                    commit("setToken", token);
                    dispatch("setExpireTimerLogout", parseInt(expirationDate - nowTime));
                    router.push("/");
                }
            } else {
                router.push("/auth");
                return false;
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
                    //yorumlanmış satırlar gerçek kullanıma uygun olacak şekilde tanımlanmıştır.
                    //localStorage.setItem("expirationDate",new Date().getTime() + parseInt(response.data.expiresIn) * 1000);
                    //dispatch("setExpireTimerLogout", parseInt(response.data.expiresIn));

                    localStorage.setItem("expirationDate", new Date().getTime() + 10000);
                    dispatch("setExpireTimerLogout", 10000);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        logout({ commit }) {
            commit("clearToken");
            localStorage.removeItem("expirationDate");
            router.replace("/auth");
        },
        setExpireTimerLogout({ dispatch }, expiresIn) {
            setTimeout(() => {
                dispatch("logout");
            }, expiresIn);
        }
    }
});

export default store;