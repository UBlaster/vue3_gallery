import { createStore } from 'vuex';
import { searchModule } from './searchModule';
import { randomPhotosModule } from './randomPhotosModule';
import createPersistedState from 'vuex-persistedstate';

export default createStore({ // функция которая создает хранилище
  modules: {
    search: searchModule,
    random: randomPhotosModule,
  },
  plugins: [createPersistedState({
    paths: ['searchModule', 'randomPhotosModule']    
  })] // плагин для сохранения даты в локалстор
})
