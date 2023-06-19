// import axios from "axios";

export const choosedPhotoModle = {
    state: {
        photoInfo: {},
    },
    mutations: {
        GETPHOTOINFO(state, results) { // получаем объект с инфо о фотографии
            state.photoInfo = results;
        }
    },
    getters: {
    },
    actions: {
    }
}