<template>
  <v-contain>
    <admin>
      <hr />
      <most-seens></most-seens>
    </admin>
  </v-contain>
</template>

<script>
import Admin from "@/templates/Admin";
import MostSeens from "@/components/views/home/MostSeens";

export default {
  name: "Home",
  components: {
    Admin,
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
