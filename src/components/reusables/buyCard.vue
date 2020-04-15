<template>
  <span>
    <h1 class="title-category">{{title}}</h1>
    <section class="flex">
      <div v-for="item of items" :key="item.id">
        <div>
          <v-img :src="item.src" max-height='330px'></v-img>
          <p class="category">{{item.category}}</p>
          <p class="title">{{item.name}}</p>
          <p>
            <strong>R$ {{item.price}}</strong>
          </p>
          <p class="parcel">10x R$ {{(item.price/10).toFixed(2)}}</p>
        </div>
      </div>
    </section>
    <hr />
  </span>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.flex > div {
  flex: 1 1 200px;
  margin: 10px;
  max-width: 22.5%;
}
.title-category {
  margin-left: 83px;
}
.category {
  color: grey;
  text-transform: uppercase;
  font-size: 12px !important;
}
.title {
  margin: -20px 0 0 0 !important;
}
.parcel {
  margin: -20px 0 0 0 !important;
}
</style>