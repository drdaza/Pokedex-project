<script setup >

</script>

<template>
    <div id="Header">
    <img src="../assets/pokemon-title.png" alt="Title">
    <nav>

      </nav> 
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main" as *;
#Header{
   @include FlexDisplay(column, center, center, 100%, 30vh);
   background-color: brown;

img{
    width: 30vw;
}

nav{
 @include FlexDisplay(row, space-evenly, center, 30%, auto);
    a{
      color: black;
      font-size: 2rem;
      text-decoration: none;  
    }
}

}
</style>