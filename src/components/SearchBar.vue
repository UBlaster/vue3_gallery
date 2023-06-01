<template>
    <div class="header__search-container">
       <my-input></my-input>     
    </div>
</template>

<script>
export default {
    props: {},
    methods: {
        // Your code here
    }
}
</script>

<style scoped>
.header__search-container {
    
    background: url('@/assets/bg__search-bar.jpg') 50%/100% auto no-repeat ;
    padding: 4.792vw 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>