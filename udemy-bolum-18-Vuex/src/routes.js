import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

const User = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/User.vue"));
    });
};
//3 tane importu beraber gruplayıp bir tanesi yüklenince hepsi yüklenecek
const UserStart = resolve => {
    require.ensure(
        ["./components/user/UserStart.vue"],
        () => {
            resolve(require("./components/user/UserStart.vue"));
        },
        "User"
    );
};
const UserDetail = resolve => {
    require.ensure(
        ["./components/user/UserDetail.vue"],
        () => {
            resolve(require("./components/user/UserDetail.vue"));
        },
        "User"
    );
};
const UserEdit = resolve => {
    require.ensure(
        ["./components/user/UserEdit.vue"],
        () => {
            resolve(require("./components/user/UserEdit.vue"));
        },
        "User"
    );
};

export const routes = [{
        path: "/",
        name: "anaSayfa",
        components: { default: Home, "header-top": Header }
    },
    {
        path: "/user",
        name: "kullaniciSayfasi",
        children: [
            { path: "", component: UserStart, name: "kullaniciListele" },
            {
                path: ":id",
                component: UserDetail,
                name: "kullaniciDetay",
                //Router bazlı olarak bir sonra sayfaya geçişi engellemek için
                beforeEnter: (to, from, next) => {
                    console.log("Route control");
                    next();
                }
            },
            { path: ":id/edit", component: UserEdit, name: "kullaniciGuncelle" }
        ],
        components: { default: User, "header-bottom": Header }
    },
    {
        path: "/redirect",
        redirect: "/"
    },
    {
        path: "*",
        redirect: "/"
    }
];