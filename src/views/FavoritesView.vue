<template>
    <header-gallery :searchInNav="search"></header-gallery>
</template>

<script>
import HeaderGallery from '@/components/HeaderGallery.vue';

export default {
    // eslint-disable-next-line
    name: 'favorites',
    components: {
        HeaderGallery,
    },
    data() {
        return {
            search: true,
        }
    },
    methods: {
        // Your code here
    }
}
</script>

<style scoped>

</style>