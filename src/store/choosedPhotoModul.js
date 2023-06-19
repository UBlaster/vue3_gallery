// import axios from "axios";

export const choosedPhotoModle = {
    state: {
        photoInfo: {},
    },
    mutations: {
        getPhotoInfo({state, results}) { // получаем объект с инфо о фотографии
            state.photoInfo = results;
        }
    },
    getters: {
    },
    actions: {
    }
}