<template>
    <div class="header__search-wrapper">
        <div class="header__search-container">
           <my-input></my-input>     
        </div>
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
    
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}


.header__search-wrapper{
    background: url('@/assets/bg__search-bar.jpg') 50%/100% auto no-repeat ;
    padding: 4.792vw 0;
}

@media(max-width: 767px) {
    .header__search-wrapper {
        padding: 10.430vw 5.8vw;
    }
    .header__search-container {
        display: block;  
    }
}

</style>