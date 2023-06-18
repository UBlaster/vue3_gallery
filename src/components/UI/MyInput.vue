<template>
    <div>
        <form class="header__search-bar" @submit.prevent>
                <input 
                    type="text" 
                    class="header__search" 
                    placeholder="Поиск" 
                    v-model="query"
                >
                <button class="header__search-icon" type="submit" @click="search">
                    <img src="@/assets/Vector.svg" alt="">
                </button>
        </form>
    </div>
</template>

<script>


export default {
    name: 'my-input',
    props: {},
    data() {
        return{
        }   
    },
    computed: {
        query: {
            get() {
                // Возвращает текущее значение поискового запроса из состояния Vuex
                return this.$store.state.searchQuery;
            },
            set(value) {
                // Вызывает мутацию 'updateSearchQuery' для обновления значения поискового запроса в состоянии Vuex
                this.$store.commit('updateSearchQuery', value);
            }
        }
        
    },
    methods: {
        search() {
            this.$store.dispatch('performSearch'); //  Это позволяет выполнить поиск с текущим значением запроса.
        }
    },
} 
</script>

<style lang="scss" scoped>
@import '@/mixins/mixinLayout.scss';

.header__search {
    padding: 1.094vw 1.510vw 1.094vw 1.510vw;
    border: none;
    width: 45.208vw;
    font-size: 1.6vw;
    @include rezTablet {
        width: 100%;
        font-size: 3vw;
    }
    
    @include rezMobile {
        font-size: 6vw;
    }
}

.header__search::-webkit-search-decoration,
.header__search::-webkit-search-cancel-button,
.header__search::-webkit-search-results-button,
.header__search::-webkit-search-results-decoration { display: none; }


.header__search-icon img {
    width: 1.2vw;
    @include rezTablet {
        width: 2.4vw;
    }
    
    @include rezMobile {
        width: 4.4vw;
    }
}

.header__search-icon img:hover {
    background: #00000005;
    border-radius: 15%;
    box-shadow: 0 0 1.3vw #00000018;
}

.header__search:active, .header__search:hover, .header__search:focus {
    outline: 0;
    outline-offset: 0;
} 

.header__search-bar {
    position: relative;
}
.header__search-icon {
    position: absolute;
    right: 1.20vw;
    top: 50%; 
    transform: translateY(-50%);
    border: none; 
    outline: none;
    background: none;
}
</style>