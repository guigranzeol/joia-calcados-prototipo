<template>
  <span>
    <div class="category-div">
      <!-- <h2 class="text-center mb-5 title red--text">Categorias</h2> -->

      <v-row justify="center">
        <v-col sm="4" cols="12">
          <v-img class="img-left img-4" :src="img1" alt>
            <div class="img-info">
              <P>{{ title1 }}</P>
            </div>
          </v-img>
        </v-col>
        <v-col sm="4" cols="12">
          <div class="div-center">
            <v-img class="img-center" :src="img2" alt>
              <div class="img-info">
                <P>{{ title2 }}</P>
              </div>
            </v-img>
            <v-img style="margin-top: 10px !important; " class="img-center" :src="img3" alt>
              <div class="img-info">
                <P>{{ title3 }}</P>
              </div>
            </v-img>
          </div>
        </v-col>
        <v-col sm="4" cols="12">
          <v-img class="img-right" :src="img4" alt>
            <div class="img-info">
              <P>{{ title4 }}</P>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    route1: {},
    route2: {},
    route3: {},
    route4: {},
    img1: {},
    img2: {},
    img3: {},
    img4: {},
    title1: {},
    title2: {},
    title3: {},
    title4: {}
  }
};
</script>

<style  scoped>
.category-div {
  padding: 5px 0 0 0;
}

h1::before,
h1::after {
  display: inline-block;
  content: "";
  border-top: 0.3rem solid black;
  width: 4rem;
  margin: 0 1rem;
  transform: translateY(-1rem);
}
.title {
  margin-top: 70px;
  font-size: 50px !important;
}
.div-center {
  padding: 100px auto 0 auto !important;
}

h2 {
  padding-top: 30px;
}

.img-left {
  padding: 30px;
  margin: 0 0 0 20% !important;
  position: relative;
  width: 100%;
  height: 400px;
}

.img-left:hover {
  width: 110%;
  height: 415px;
}

.img-right {
  padding: 30px;
  margin-left: -20% !important;
  position: relative;
  height: 400px;
}

.img-right:hover {
  width: 110%;
  height: 415px;
}

.img-center {
  margin: 0px auto 0px auto !important;
  position: relative;
  width: 50%;
  height: 195px;
}

.img-center:hover {
  width: 55%;
  height: 200px;
}

.img-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-info p {
  font-size: 35px;
  text-align: center;
  margin: 20px 0 0 0;
}

.img-info:hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background: rgba(0, 0, 0, 0.664);
}
</style>