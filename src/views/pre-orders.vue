<template>
  <div>
    <div>
      <div class="header" id="per-orders">
        <span class="pre-order-title">كل الطلبات المسبقة</span>
        <v-icon color="white">mdi-chevron-right</v-icon>
      </div>
      <v-row>
        <v-col md="3" class="side-menu">
          <div class="current-orders-container">
            <p class="current-orders">الطلبات الحالية</p>
          </div>
          <div class="incoming-orders">
            <v-row>
              <v-col md="6">
                <v-btn class="edit-btn"
                  >تعديل <i class="fas fa-edit"></i
                ></v-btn>
              </v-col>
              <v-col md="6">
                <p class="incoming-brief">ملخص الطلبات الواردة</p>
              </v-col>
            </v-row>
            <div class="incoming-order">
              <div class="d-flex">
                <p class="inc-order-qnt">5</p>
                <p class="inc-order-name">شيبسي شطة و ليمون 150جرام</p>
                <img
                  class="inc-order-img"
                  src="@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"
                />
              </div>
              <p class="qnt-edited">تم تعديل الكمية</p>
            </div>
            <div class="incoming-order">
              <div class="d-flex">
                <p class="inc-order-qnt">5</p>
                <p class="inc-order-name">شيبسي شطة و ليمون 150جرام</p>
                <img
                  class="inc-order-img"
                  src="@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"
                />
              </div>
              <p class="qnt-edited">تم تعديل الكمية</p>
            </div>
            <div class="incoming-order">
              <div class="d-flex">
                <p class="inc-order-qnt">5</p>
                <p class="inc-order-name">شيبسي شطة و ليمون 150جرام</p>
                <img
                  class="inc-order-img"
                  src="@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"
                />
              </div>
              <p class="qnt-edited">تم تعديل الكمية</p>
            </div>
            <div class="incoming-order">
              <div class="d-flex">
                <p class="inc-order-qnt">5</p>
                <p class="inc-order-name">شيبسي شطة و ليمون 150جرام</p>
                <img
                  class="inc-order-img"
                  src="@/assets/images/4777488_cheddar-png-transparent-lays-chips-png-png-download.png"
                />
              </div>
              <p class="qnt-edited">تم تعديل الكمية</p>
            </div>

            <div class="inc-orders-total">
              <p>
                <span class="total-label">عدد الطلبات</span
                ><span class="t-value ml-9">30</span>
              </p>
              <v-divider></v-divider>
              <p>
                <span class="total-label">المجموع</span
                ><span class="t-value">22.50</span
                ><span class="total-value">ريال</span>
              </p>
              <div>
                <v-row>
                  <v-col md="6">
                    <v-btn class="refuse-order">رفض الطلبات</v-btn>
                  </v-col>
                  <v-col md="6">
                    <v-btn class="accept-order">قبول الطلبات</v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-col>
        <v-col md="9" class="per-ordered-Products">
          <div class="filter-box">
            <v-row>
              <v-col md="2">
                <v-icon color="#13A69A" class="filter-icon">mdi-filter</v-icon>
              </v-col>
              <v-col md="9" id="filter">
                <v-text-field
                  solo
                  flat
                  label="بحث"
                  append-icon="mdi-filter"
                  prepend-inner-icon="mdi-magnify"
                ></v-text-field>
                <div class="chips-chosen">
                  <v-chip
                    v-if="chip1"
                    class="ma-2"
                    color="#FFFFFF"
                    text-color="#818181"
                    @click:close="chip1 = false"
                  >
                    <v-icon left> mdi-close-circle </v-icon>
                    سندوتشات
                  </v-chip>
                  <v-chip
                    v-if="chip2"
                    class="ma-2"
                    color="#FFFFFF"
                    text-color="#818181"
                    @click:close="chip2 = false"
                  >
                    <v-icon left> mdi-close-circle </v-icon>

                    طبق متكامل
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </div>
          <Products></Products>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import Products from "@/components/Products.vue";

export default {
  data() {
    return {
      chip1: true,
      chip2: true,
    };
  },
  components: {
    Products,
  },
};
</script>