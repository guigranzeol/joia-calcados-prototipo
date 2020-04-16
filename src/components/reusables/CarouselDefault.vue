<template>
  <div class="carousel">
    <v-carousel-item
      :src="src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      class="main-carousel"
    >
      <v-row :justify="justify" align="center">
        <v-col sm="6" col="6" class="text" v-if="title && text">
          <div class="carousel-text">
            <h2 :class="colorText">{{ title }}</h2>
            <p :class="colorText">{{ text }}</p>
            <a :href="buttonHref">
              <button v-if="buttonText" class="corousel-button">{{ buttonText }}</button>
            </a>
          </div>
        </v-col>
      </v-row>

      <v-sheet></v-sheet>
    </v-carousel-item>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {
    justify: String,
    src: { String },
    title: { String },
    colorTitle: { String },
    text: { String },
    colorText: { String },
    buttonText: { String },
    buttonHref: { String }
  }
};
</script>

<style scoped>
.main-carousel {
  background: linear-gradient(
    90deg,
    rgba(250, 250, 250, 1) 0%,
    rgba(221, 161, 228, 1) 100%,
    rgba(197, 200, 209, 1) 100%,
    rgba(114, 125, 161, 1) 100%,
    rgba(45, 62, 116, 1) 100%,
    rgba(2, 0, 36, 1) 100%,
    rgba(57, 65, 66, 1) 100%,
    rgba(164, 164, 164, 1) 100%
  );
}
.carousel {
  position: relative;
}

.text {
  /* color: rgb(253, 253, 253) !important; */
  align-items: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6%;
}

h2 {
  font-size: 3rem;
}

button {
  margin-top: 30px;
}
</style>