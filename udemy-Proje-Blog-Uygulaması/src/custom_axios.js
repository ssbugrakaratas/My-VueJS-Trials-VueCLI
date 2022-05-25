import axios from "axios";

const instance = axios.create({
    baseURL: "https://udemy-vuejs-proje-blog-axios-default-rtdb.firebaseio.com"
});

//aşağıdaki kullanımı kullanarak set edilebilir
//instance.defaults.headers.common[""]

export default instance;