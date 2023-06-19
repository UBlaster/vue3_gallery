import { createStore } from 'vuex';
import { searchModule } from '@/store/searchModule';
import { randomPhotosModule } from '@/store/randomPhotosModule';
import { choosedPhotoModle } from '@/store/choosedPhotoModul';
import createPersistedState from 'vuex-persistedstate';

export default createStore({ // функция которая создает хранилище
  modules: {
    search: searchModule,
    random: randomPhotosModule,
    choosed: choosedPhotoModle,
  },
  plugins: [createPersistedState({
    paths: ['searchModule', 'randomPhotosModule', 'choosedPhotoModle']    
  })] // плагин для сохранения даты в локалстор
})
