<template>
    <div class="main__container">
        <div v-if="photos.length" class="main__gallery">
            <picture-from-api
                v-for="photo in this.photos"
                :photoFromApi="photo"
                :key="photo.id"
            >
            </picture-from-api>
        </div>
        <div v-else>[ebnf]</div>
    </div>
</template>

<script>
import PictureFromApi from '@/components/PictureFromApi.vue';
// import { mapState } from 'vuex';

export default {
    components:{
        PictureFromApi,
    },
    props: {
    },
    computed: {
        
    },
    created() {
        
       
    },
    async mounted() {
        // eslint-disable-next-line
        Promise.all([this.updateRandomPhotos()]).then(res => { // поковыряться с асинхорнонстью и ипромисами
            this.getRandomPictures()
        })
        
        
        //this.consoleLog()
    },
    data() {
        return {
            photos: [],
        }
    },
    methods: {
        async updateRandomPhotos() {
            return this.$store.dispatch('fetchPictures');         
        },
        getRandomPictures() {
            this.photos = this.$store.getters.RANDOMPHOTOS;
        },
        consoleLog() {
            console.log('huy')
        }
    }
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