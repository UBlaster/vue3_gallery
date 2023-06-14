<template>
    <div class="img-container">
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
    data() {
        return {
        }
    },
    mounted() {
        // console.log(this.photoFromApi)
    },
    methods: {
    },
}

</script>

<style scoped>
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
}

@media (max-width: 376px) {
   .img-container {
        border-radius: 2.2vw;
    }
}

@media (max-width: 768px) {
   .img-container {
        border-radius: 1.2vw;
    }
}


</style>