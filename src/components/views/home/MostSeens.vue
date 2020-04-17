<template>
  <span>
    <buy-card title="Mais Vistos" :items="mostSeen" />
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
      sandals: [],
      mostSeen: [
        {
          src: "/images/calcados/4.png",
          category: "Tenis",
          name: "Adidas Cano Alto",
          price: 499.99
        },
        {
          src: "/images/calcados/chinelão1.png",
          category: "Chinelo",
          name: "Chinelo Coca-Cola",
          price: "49,90"
        },
        {
          src: "/images/calcados/6.png",
          category: "Tenis",
          name: "Adidas",
          price: "299,90"
        },

        {
          src: "/images/calcados/7.png",
          category: "Tenis",
          name: "Adidas Botinha",
          price: 349.99
        },
        {
          src: "/images/calcados/8.png",
          category: "Tenis",
          name: "Ramarim",
          price: 349.99
        },
        {
          src: "/images/calcados/9.png",
          category: "Tenis",
          name: "olympus",
          price: 349.99
        },
        {
          src: "/images/calcados/12.png",
          category: "Chinelo",
          name: "Chinelo Coca-Cola",
          price: 49.99
        },
        {
          src: "/images/calcados/11.png",
          category: "Tenis",
          name: "Mizuno",
          price: 349.99
        }
      ],
      news: [
        {
          src: "/images/calcados/13.png",
          category: "Blazers",
          name: "Blazer Casual",
          price: 299.99
        },
        {
          src: "/images/calcados/14.png",
          category: "Calças",
          name: "Calça Destroyed",
          price: 199.99
        },
        {
          src: "/images/calcados/15.png",
          category: "Blazers",
          name: "Blazer Executivo",
          price: 399.99
        },
        {
          src: "/images/calcados/16.png",
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