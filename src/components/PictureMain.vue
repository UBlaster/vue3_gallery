<template>
    <div class="main__container">
        <div class="main__wrapper">
            <div class="main__toolbar">
                <div class="main__autor-info">
                    <div class="main__autor-photo">
                        <img src="" alt="">
                    </div>
                    <div class="main__autor-contacts">
                        <div class="main__autor-name">lol</div>
                        <div class="main__autor-links">kek</div>
                    </div>
                </div>
                <div class="main__buttons">
                    <button class="main__like"></button>
                    <button class="main__download">
                        <img src="" alt="photoError">
                        <p>Download</p>
                    </button>                    
                </div>
            </div>
        </div>
        <div v-if="getPhotoFromStore">
            <img :src="getPhotoFromStore.urls.regular" alt="errorImagePath">
        </div>
        <div v-else>
            huyta kakayato
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    components: {
    },
    props: {},
    computed: {
        ...mapGetters(['CHOOSEDPHOTO']),
        getPhotoFromStore() {
            return this.CHOOSEDPHOTO          
        },
    },
    data() {
        return{}
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.main__container{
    background-color: #00000050;
}
</style>