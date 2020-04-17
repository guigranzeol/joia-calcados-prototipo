<template>
  <admin>
    <span>
      <v-carousel height="70vh" progress>
        <carousel-default
          src="/images/calcados/joia1.jpg"
          title="Other"
          justify="end"
          colorTitle="black"
          text="Lorem ipsum or delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
          colorText="black--text"
          buttonText="Other"
          buttonHref="/Other"
        />
        <carousel-default
          src="/images/calcados/joia2.jpg"
          title="Other"
          justify="end"
          colorTitle="grey--text text--darken-4"
          text="Lorem ipsum or delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
          colorText="white--text"
          buttonText="Other"
          buttonHref="/Other"
        />
      </v-carousel>
    </span>

    <!-- <categories-grid
      title1="Tênis"
      route1="man"
      img1="/images/calcados/Tenis1.png"
      title2="Chinelos"
      route2="boots"
      img2="/images/calcados/chinelão1.png"
      title3="Sapatilha"
      route3="looks"
      img3="/images/calcados/sapatilha1.png"
      title4="Salto Alto"
      route4="woman"
      img4="/images/calcados/Sapato alto1.png"
    />-->

    <hr />
    <most-seens></most-seens>
  </admin>
</template>

<script>
import Admin from "@/templates/Admin";
import CarouselDefault from "@/components/reusables/CarouselDefault";
// import CategoriesGrid from "@/components/views/home/CategoriesGrid";
import MostSeens from "@/components/views/home/MostSeens";

export default {
  name: "Home",
  components: {
    Admin,
    CarouselDefault,
    // CategoriesGrid,
    MostSeens
  }
};
</script>

<style scouped>
hr {
  width: 60%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 50px auto;
}
</style>
