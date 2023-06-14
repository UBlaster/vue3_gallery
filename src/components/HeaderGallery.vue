<template>
    <header class="header">
            <div class="header__container">
                <img src="@/assets/logo.png" alt="ArtGallery" class="header__logo" @click="$router.push('/')">
                <nav class="header__nav">
                    <ul v-if="resoluton">
                        <li class="header__search header__list-item" v-if="searchInNav"><img src="@/assets/SearchIconWhite.svg" alt="search">Поиск</li>
                        <li class="header__favorites header__list-item" @click="$router.push('/favorites')"><img src="@/assets/HeartIcon.svg" alt="search" >Избранное</li>
                    </ul>
                    <ul v-else>
                        <li class="header__search header__list-item" v-if="searchInNav"><img src="@/assets/SearchIconWhite.svg" alt="search"></li>
                        <li class="header__favorites header__list-item" @click="$router.push('/favorites')"><img src="@/assets/HeartIcon.svg" alt="search" ></li>
                    </ul>
                </nav>
            </div>
            <div>
                <search-bar v-if="!searchInNav"></search-bar>
            </div>
            <div class="header__bottom-row" ></div>
        </header>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
    components: {
        SearchBar,
    },
    props: {
        searchInNav: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            resoluton: true,
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
@import '@/mixins/mixinLayout.scss';

.header {
    background: #000000;

}
.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vw $offset;
}

.header__logo {
    width: 9.635vw;
}

.header__nav ul {
    color: white;
    display: flex;
    gap: 2vw;
}

.header__list-item {
    display: block;
    font-size: 1vw;
}
.header__list-item img{
    margin: 0 0.6vw 0 0;
    width: 1.2vw
}

@media(max-width: 768px) {
    .header__list-item {
        font-size: 3vw;
    }
}


@media(max-width: 768px) {
    .header__list-item {
        font-size: 3vw;
    }
}

.header__bottom-row {
    height: 0.7vw;
    background-color: #C4C4C4; 
}
@media (max-width: 768px) {
    .header__bottom-row {
        display: none; 
    }
}

</style>
