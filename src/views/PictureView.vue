<template>
    <header-gallery :searchInNav="search"></header-gallery>
    <picture-main></picture-main>
</template>

<script>
import HeaderGallery from '@/components/HeaderGallery.vue';
import PictureMain from '@/components/PictureMain.vue';

export default {
     // eslint-disable-next-line
    name: 'picture',
    components: {
        HeaderGallery, PictureMain
    },
    data() {
        return {
            search: true,
        }
    },
    props: {},
    methods: {
        // Your code here
    }
}
</script>

<style scoped>

</style>
