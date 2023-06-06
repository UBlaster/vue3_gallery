<template>
    <div class="main__container">
        <div v-if="!isSearching && photos.length" class="main__gallery">
            <picture-from-api
                v-for="photo in this.photos"
                :photoFromApi="photo"
                :key="photo.id"
            >
            </picture-from-api>
        </div>
        <div v-else-if="isSearching && SEARCHRESULTS.length" class="main__gallery">
            <picture-from-api
                v-for="photo in this.SEARCHRESULTS"
                :photoFromApi="photo"
                :key="photo.id"
            >
            </picture-from-api>
        </div>
        <div v-else>
            <my-loader></my-loader>
        </div>
    </div>
</template>

<script>
import PictureFromApi from '@/components/PictureFromApi.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
        PictureFromApi,
    },
    computed: {
        ...mapGetters([
            'SEARCHRESULTS',
            'SEARCH'
        ]),
        photos() {
            return this.$store.getters.RANDOMPHOTOS;
        },
        isSearching() {
            return this.SEARCH !== '';
        }
    }, 
    methods: {
        async updateRandomPhotos() {
            return this.$store.dispatch('fetchPictures');
        },
    },
    mounted() {
        this.updateRandomPhotos();
    },
}
</script>

<style lang="scss" scoped>
@import '@/mixins/mixinLayout.scss';

.main__container {
    padding: 5.4vw $offset;
}

.main__gallery {
    display: grid;
    grid-template: repeat(3,1fr) / repeat(3,1fr);
    gap:1.56vw; 
}



</style>