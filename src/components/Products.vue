<template>
  <div class="all-products">
    <v-row>
      <v-col md="3" v-for="product in allProducts" :key="product.id + 'P'">
        <div class="single-product">
          <div>
            <v-row>
              <v-col md="6">
                <p class="kcal">
                  <i class="fas fa-walking mr-2"></i>
                  {{ product.kcal }} Kcal
                </p>
              </v-col>
              <v-col md="6">
                <div class="exclamation">
                  <i class="fa fa-exclamation-circle"></i>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="product-details">
            <img class="product-img" :src="product.imgSrc" />

            <p class="product-name">{{ product.name }}</p>
            <p class="product-qnt">
              <span class="qnt">{{ product.quantity }}</span>
              <span class="product-name ml-5">الكمية بالمخزون:</span>
            </p>
          </div>
          <div>
            <v-row>
              <v-col md="9">
                <div class="price-container">
                  <p class="curruncy">ريال</p>
                  <p class="product-price">
                    {{ product.price }}
                  </p>
                </div>
              </v-col>
              <v-col md="3">
                <div class="add-product">
                  <i class="fas fa-plus-circle"></i>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allProducts: [
        {
          id: 1,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"),

          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 2,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4598025_apple-juice-png-hydra-juice-75-apple-juice.png"),
          kcal: 200,
          price: 7.5,
          quantity: 5,
        },
        {
          id: 3,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"),
          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 4,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4598025_apple-juice-png-hydra-juice-75-apple-juice.png"),

          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 5,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"),
          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 6,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4598025_apple-juice-png-hydra-juice-75-apple-juice.png"),
          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 7,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"),
          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 8,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4598025_apple-juice-png-hydra-juice-75-apple-juice.png"),
          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 9,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"),
          kcal: 200,
          price: 50,
          quantity: 5,
        },
        {
          id: 10,
          name: "عصير تفاح ٢٥٠ مل",
          imgSrc: require("@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"),
          kcal: 200,
          price: 50,
          quantity: 5,
        },
      ],
    };
  },
};
</script>
