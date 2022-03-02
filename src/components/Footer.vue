<template>
  <div>
    <v-bottom-navigation
      fixed
      color="#13A69A"
      hide-on-scroll
      scroll-threshold="500"
      :value="value"
    >
      <v-btn class="footer-item">
        <span>المزيد</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn to="/pre-orders" class="footer-item">
        <span>طلبات مسبقة</span>

        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn class="footer-item">
        <span>المبيعات</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn class="footer-item">
        <span>المحفظة</span>

        <v-icon>mdi-wallet</v-icon>
      </v-btn>

      <v-btn to="/" class="footer-item">
        <span>الرئيسية</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  data: () => ({ value: 1 }),
};
</script>