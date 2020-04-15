<template>
  <div id="nav-bar">
    <v-row>
      <div class="categoryMenu">
        <ul>
          <slot></slot>
        </ul>
      </div>
      <div class="allCategory">
      </div>
    </v-row>
  </div>

  
</template>

<script>
export default {

}
</script>

<style scoped>

#nav-bar{
  position: relative;
}

.categoryMenu{
  width: 70%;
  margin: auto;
}

ul{
  display: flex;
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  padding: 20px;
}

li{
  flex: 1;
  list-style-type: none;
  padding: 10px;
  font-size: 20px;
}

/* .allCategory{
  position: absolute;
  left: 20px;
  display: flex;
  height: 100%;
}

.icon-color{
  font-size: 3rem;
} */

</style>