<template>
  <span>
    <buy-card title="Vestidos" :items="vestidos" />
    <buy-card title="Lançamentos" :items="news" />
  </span>
</template>

<script>
import BuyCard from "@/components/reusables/buyCard";
export default {
  components: {
    BuyCard
  },
  data: function() {
    return {
      vestidos: [
        {
          src: "/images/products/dresses/vestido1.jpeg",
          category: "Vestidos",
          name: "Vestido Casual",
          price: 299.99
        },
        {
          src: "/images/products/dresses/vestido2.jpeg",
          category: "Vestidos",
          name: "Vestido Babado",
          price: 199.99
        },
        {
          src: "/images/products/dresses/vestido3.jpeg",
          category: "Vestidos",
          name: "Vestido Poa Curto",
          price: 99.99
        },
        {
          src: "/images/products/dresses/vestido4.jpeg",
          category: "Vestidos",
          name: "Vestido Longo",
          price: 99.99
        }
      ],
      news: [
        {
          src: "/images/news/1.jpeg",
          category: "Blazers",
          name: "Blazer Casual",
          price: 299.99
        },
        {
          src: "/images/news/2.jpeg",
          category: "Calças",
          name: "Calça Destroyed",
          price: 199.99
        },
        {
          src: "/images/news/3.jpeg",
          category: "Blazers",
          name: "Blazer Executivo",
          price: 399.99
        },
            {
          src: "/images/news/4.jpeg",
          category: "Blazers",
          name: "Blazer Executivo",
          price: 399.99
        }
      ]
    };
  }
};
</script>

<style>
</style>