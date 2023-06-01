<template>
    <div>
        <header-gallery :searchInNav="search"></header-gallery>
    </div>
</template>

<script>
import HeaderGallery from '@/components/HeaderGallery.vue';

export default {
    name: 'picture',
    component: {
        HeaderGallery,
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
