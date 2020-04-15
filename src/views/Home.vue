<template>
  <admin>
    <span>
      <v-carousel height="70vh" progress>
        <carousel-default
          src="/images/calcados"
          title="Other"
          justify="end"
          colorTitle="grey--text text--darken-4"
          text="Lorem ipsum or delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
          colorText="grey--text"
          buttonText="Other"
          buttonHref="/Other"
        />
        <carousel-default
          src="/images/Edited/maria-luiza-modas3.png"
          title="Other"
          justify="end"
          colorTitle="grey--text text--darken-4"
          text="Lorem ipsum or delectus reiciendis sequi ducimus quo rerum, laboriosam perferendis, facilis quia blanditiis! Id eius, cumque totam vel eveniet debitis libero sint."
          colorText="grey--text"
          buttonText="Other"
          buttonHref="/Other"
        />
        <carousel-default
          src="/images/Edited/maria-luiza-modas.jpg"
          title="Blazers"
          colorTitle="black--text"
          justify="end"
          text="Aqui você encontra os melhores Blazers para a proxima estação. Que combinam com o trabalho,balada e também para aquele momento especial com a familia. Confira todos os modelos"
          colorText="black--text"
          buttonText="Ver Mais"
          buttonHref="helloworld"
        />
        <carousel-default
          justify="start"
          src="/images/others/bg.jpg"
          title="Blazers"
          colorTitle="black--text"
          text="Aqui você encontra os melhores Blazers para a proxima estação. Que combinam com o trabalho,balada e também para aquele momento especial com a familia. Confira todos os modelos"
          colorText="black--text"
          buttonText="Ver Mais"
          buttonHref="helloworld"
        />
      </v-carousel>
    </span>

    <categories-grid
      title1="Vestidos"
      route1="man"
      img1="/images/tests/categories/vestidos.jpeg"
      title2="T-Shits"
      route2="boots"
      img2="/images/tests/categories/t-shirt.jpeg"
      title3="Jeans"
      route3="looks"
      img3="/images/tests/categories/jeans.jpeg"
      title4="Blazers"
      route4="woman"
      img4="/images/tests/categories/blazer.jpeg"
    />

    <hr />
    <most-seens></most-seens>
  </admin>
</template>

<script>
import Admin from "@/templates/Admin";
import CarouselDefault from "@/components/reusables/CarouselDefault";
import CategoriesGrid from "@/components/views/home/CategoriesGrid";
import MostSeens from "@/components/views/home/MostSeens";

export default {
  name: "Home",
  components: {
    Admin,
    CarouselDefault,
    CategoriesGrid,
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
