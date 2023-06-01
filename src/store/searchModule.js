import axios from 'axios';

export  const searchModule = {
    state: {
        searchValue: [], // Состояние для хранения результатов поиска
        searchQuery: '' // для хранения результата запроса
    },
    mutations: {
        // Мутация для обновления результатов поиска
        updateSearchValue(state, results) {
            state.searchValue = results;
        },
        // Мутация для обновления текущего запроса
        updateSearchQuery(state, query) {
            state.searchQuery = query;
        }
    },
    getters: {
        SEARCH: state => {
            return state.searchQuery
        }
    },
    actions: {
         // Действие для выполнения поиска
        async performSearch ({commit, state}) {
            try {
                const query = state.searchQuery;
                const response = await axios.get("https://api.unsplash.com/search/photos", {
                    headers: {
                        Authorization: `Client-ID bXNsCQVXDLGXKZoezxLzvVKNSLal07jlr6gVeQwdQao`,
                    },
                    params: {
                        query: query,
                        count: 9,
                    },
                });
                const data = response.data; // забираем данные из ответа сервера
                commit('updateSearchValue', data); // Обновляем результаты поиска
            } catch {
                console.log('ERROR SEARCH RESPONSE');   
            }
        }
    },
}