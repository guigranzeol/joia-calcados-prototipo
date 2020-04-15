<template>
  <div id="nav-top">
    <div>
      <v-row align="center" justify="center" class="text-center">
        <v-col md="3" cols="12" class="text-left">
          <img class="img-class" src="/images/logo/logoHorizotal.png" alt />
        </v-col>
        <v-col class="search-class" cols="12" md="6">
          <input type="text" placeholder="Busca"/>
          <button class="background-gray-hover">
            <v-icon class="text-primay">mdi-magnify</v-icon>
          </button>
        </v-col>
        <v-col class="icons-class text-left font-color" cols="12" md="2">
          <a :href="cartRouter" ><v-icon class="background-icon-top-menu mr-2">mdi-cart</v-icon></a>
          <a :href="userRoute"><v-icon class="background-icon-top-menu">mdi-account</v-icon> </a>   
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  props:{
    //TODO Transformar Logo Em Props
  }

};
</script>

<style scoped>
.img-class {
  height: 100px;
  width: auto;
}

.search-class{
  position: relative;
  height: 50px;
}

.icons-class{
  display: flex;
  width: 70%;
  padding: 0 70px;
}

.icons-class a{
  flex: 1;
  text-align: center;
}

.icons-class i{
  padding: 10px;
  font-size: 30px;
}

</style>