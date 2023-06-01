import axios from "axios";

export const randomPhotosModule  = {
    state: {
        randomPhotos: [], // хранение в массиве дату с рандомными фотками
    },
    mutations: {
        updateRandomPhotos(state, results) {
            state.randomPhotos = results;
            localStorage.setItem('results', JSON.stringify(results))
        }
    },
    getters: {
        RANDOMPHOTOS: state => {
            return state.randomPhotos
        }
    },
    actions: {
        async fetchPictures({commit}) {
            try {
                const response = await axios.get("https://api.unsplash.com/photos/random", {
                    headers: {
                        Authorization: `Client-ID qiiOWcJpbkAlwl6tk67RxLnqJp4sVZmDDhiHzFZgr5I`,
                    },
                    params: {
                        count: 9,
                    },
                });
                const data = response.data; // забираем данные из ответа сервера
                commit('updateRandomPhotos', data); // Обновляем
                return true 
            } catch {
                alert('Error teching')
                return false;
            }
        }
    }

}