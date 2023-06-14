<template>
    <header-gallery :searchInNav="search"></header-gallery>
    <main-gallery></main-gallery>
</template>

<script>
import HeaderGallery from '@/components/HeaderGallery.vue';
import MainGallery from '@/components/MainGallery.vue';

export default {
    // eslint-disable-next-line
    name:'home',
    components: {
        HeaderGallery,
        MainGallery
    },
    data() {
        return {
            search: false,
        }
    },
}
</script>   

<style scoped>

</style>