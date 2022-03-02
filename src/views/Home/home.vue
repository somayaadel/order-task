<template>
  <div>
    <v-row>
      <v-col md="3" class="order-list">
        <div>
          <div class="search-box">
            <v-row>
              <v-col md="3">
                <div class="user-icon"><i class="fas fa-user"></i></div>
              </v-col>
              <v-col md="3" id="user-search">
                <div class="user-search-icon">
                  <i class="fas fa-user"></i>
                  <i class="fas fa-search"></i>
                </div>
              </v-col>
              <v-col md="6" id="search-input">
                <v-autocomplete
                  filled
                  :items="students"
                  :item-text="'name'"
                  :item-value="'id'"
                  prepend-inner-icon="mdi-magnify"
                  v-model="studentName"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </div>
          <div class="empty-sec" v-if="studentName == null">
            <img
              class="empty-img"
              src="@/assets/images/noun_Empty_203873.png"
            />
            <p class="empty-text">يجب عليك اختيار طالب اولا</p>
          </div>
          <div v-if="studentName != null" class="main-container">
            <div class="order-items" id="items">
              <i class="fas fa-times-circle"></i>
              <p class="student-id">135</p>
              <p class="student-id-label">الرقم المقصفي</p>
              <img class="student-img" src="@/assets/images/kid Image.png" />
            </div>
            <p class="student-name">محمد بن بندر الوشيقيرى</p>
          </div>
          <div v-if="studentName != null" class="products-list">
            <div class="d-flex">
              <p class="product-count-label">منتجات</p>
              <p class="product-count">3</p>
            </div>

            <div class="student-products">
              <div class="d-flex">
                <i class="fas fa-times-circle"></i>
                <p class="order-name">شيبسي لايز 150جم</p>
                <img
                  class="order-img"
                  src="@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"
                />
              </div>
              <div class="d-flex singel-order-detailes">
                <p class="cur-total">ريال</p>
                <p class="total-price">15.00</p>
                <p class="items-count">2 x</p>
                <p class="cur-single-item">ريال</p>
                <p class="single-item-price">7.50</p>
              </div>
            </div>
            <div class="student-products">
              <div class="d-flex">
                <i class="fas fa-times-circle"></i>
                <p class="order-name">شيبسي لايز 150جم</p>
                <img
                  class="order-img"
                  src="@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"
                />
              </div>
              <div class="d-flex singel-order-detailes">
                <p class="cur-total">ريال</p>
                <p class="total-price">15.00</p>
                <p class="items-count">2 x</p>
                <p class="cur-single-item">ريال</p>
                <p class="single-item-price">7.50</p>
              </div>
            </div>
          </div>

          <div v-if="studentName != null" class="order-total">
            <p>
              <span class="notes-label">الملاحظات</span
              ><span class="notes"> يفضل تاريخ صلاحية حديث</span>
            </p>
            <v-divider></v-divider>
            <p>
              <span class="tax-label"> عمولة التطبيق</span>
              <span>2.50</span><span class="cur-total ml-3 mr-1">ريال</span>
            </p>
            <v-divider></v-divider>
            <p>
              <span class="total-label">المجموع</span
              ><span class="t-value">22.50</span
              ><span class="total-value">ريال</span>
            </p>
            <v-btn class="buy-btn">شراء</v-btn>
          </div>
        </div>
      </v-col>
      <v-col md="9" class="catAndProducts">
        <div class="all-categories">
          <div>
            <v-row>
              <v-col md="2" v-for="cat in allCategories" :key="cat.id + 'C'">
                <div class="single-category">
                  <p class="cat-name">{{ cat.name }}</p>
                  <img class="cat-img" :src="cat.imgSrc" />
                </div>
              </v-col>
              <v-col md="2">
                <p class="all">الكل</p>
              </v-col>
            </v-row>
          </div>
        </div>
        <Products></Products>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Products from "@/components/Products.vue";
export default {
  data() {
    return {
      allCategories: [
        {
          id: 1,
          name: "سندوتشات",
          imgSrc: require("@/assets/images/hamburger.png"),
        },
        {
          id: 2,
          name: "سندوتشات",
          imgSrc: require("@/assets/images/coffee-cup.png"),
        },
        {
          id: 3,
          name: "سندوتشات",
          imgSrc: require("@/assets/images/pizza-slice.png"),
        },
        {
          id: 4,
          name: "سندوتشات",
          imgSrc: require("@/assets/images/hamburger.png"),
        },
        {
          id: 5,
          name: "سندوتشات",
          imgSrc: require("@/assets/images/coffee-cup.png"),
        },
      ],
      students: [
        {
          id: 1,
          name: "محمد بن بندر الوشيقيرى",
        },
      ],
      studentName: null,
    };
  },
  components: {
    Products,
  },
};
</script>