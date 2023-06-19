<template>
    <div class="img-container" @click="pushPhotoURLToState">
        <img :src="photoFromApi.urls.regular" alt="" class="img">
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    props: {
        photoFromApi:{
            type: Object,
            required: true,
        }
    },
    methods: {
        pushPhotoURLToState() {
            
        }
    }
}

</script>

<style lang="scss" scoped>
@import '@/mixins/mixinLayout.scss';

.img {
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%; 
}

.img-container {
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 0.42vw;
    @include rezMobile {
        border-radius: 2.2vw;
    }

    @include rezTablet{
        border-radius: 1.2vw;
    }
}

</style>