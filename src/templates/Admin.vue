<template>
  <span>
    <div class="main-class">
      <bar-top userRoute="/user" cartRouter="/cart"></bar-top>

      <nav-bar>
        <li-default name="T-Shirts" src="#" />
        <li-default name="Jeans" src="#" />
        <li-default name="Vestidos" src="#" />
        <li-default name="Acessórios" src="#" />
        <li-default name="Sapatos" src="#" />
        <li-default name="Saias" src="#" />
      </nav-bar>

      <slot></slot>

      <footer-page>
        <template v-slot:col1>Teste</template>
        <template v-slot:col2>Teste 2</template>
        <template v-slot:col3>Teste 3</template>
      </footer-page>
    </div>
  </span>
</template>

<script>
import BarTop from "@/components/templates/NavBarTop/BarTop";
import NavBar from "@/components/templates/NavBarTop/NavBar";
import LiDefault from "@/components/reusables/LiDefault";
import FooterPage from "@/components/templates/Footer/FooterPage";

export default {
  components: {
    BarTop,
    NavBar,
    LiDefault,
    FooterPage
  }
};
</script>

<style scoped>
.main-class{
  background-color: white !important;
}

</style>