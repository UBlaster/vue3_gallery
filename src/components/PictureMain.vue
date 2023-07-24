<template>
    <div class="main__container">
        <div class="main__wrapper">
            <div class="main__toolbar">
                <div class="main__autor-info">
                    <div class="main__autor-photo">
                        <img :src="getPhotoFromStore.user.profile_image.small" alt="imgAuthorError">
                    </div>
                    <div class="main__autor-contacts">
                        <div v-if="getPhotoFromStore.user.name" class="main__autor-name">{{getPhotoFromStore.user.name }}</div>
                        <div v-if="getPhotoFromStore.user.twitter_username" class="main__autor-links">@ {{ getPhotoFromStore.user.twitter_username}}</div>
                    </div>
                </div>
                <div class="main__buttons">
                    <button class="main__like-btn">
                        <img src="@/assets/BlackHeart.svg" alt="photoError">
                    </button>
                    <button class="main__download">
                        <img src="@/assets/DownLoad.svg" alt="photoError">
                        <p>Download</p>
                    </button>                    
                </div>
            </div>
        </div>
        <div class="main__picture-container">
            <img :src="getPhotoFromStore.urls.regular" alt="errorImagePath" class="main__picture">
        </div>
        <img :src="getPhotoFromStore.urls.regular" alt="errorImagePath" class="main__picture-bg">
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
@import '@/mixins/mixinLayout.scss';

.main__container {
    background-color: #00000050;
    position: relative;
    overflow: hidden;
    padding: 2.2vw $offset;
}

.main__toolbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vw;
}
.main__autor-info {
    display: flex;
    gap: 10px;
}

.main__autor-photo {
    border:#fff 1px solid;
    width: 2.8vw;
    height: 2.8vw;
    border-radius: $borderRad;
    overflow: hidden;
}

.main__autor-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.main__autor-contacts { 
    color: #fff;
}

.main__autor-name {
    font-size: 28px;
}

.main__autor-links {
    font-size: 18px;
}
.main__buttons {
    display: flex;
    gap: 1vw;
}

.main__like-btn {
    background: #ffffff;
    border: none;
    border-radius: $borderRad;
    width: 2.54vw;
    height: 2.54vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main__like-btn:active {
    background: #00000050;
    transition: ease-in-out .08s;
    
}
.main__like-btn img {
    width: 1.12vw;
}
.main__download {
    width: 10.4vw;
    height: 2.54vw;
    display: flex;
    align-items: center;
    background-color: #FFF200;
    border-radius: $borderRad;
    border: none;
    gap: 0.8vw;
    padding: 0.6vw;
    transition: ease-in-out .08s;
}

.main__download:active {
    background: #FFF20050;
}

.main__download img {
    width: 1.4vw;
}

.main__download p {
    font-size: 20px;
}

.main__picture-container {
    overflow: hidden;
    height: 38vw;
}

.main__picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.main__picture-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    z-index: -1; 
}

</style>