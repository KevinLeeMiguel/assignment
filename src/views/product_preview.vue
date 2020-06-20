<template>
  <div class="h-card-panel h-shadow h-shadow-primary h-pb-5">
    <div class="h-card-panel-header h-p-1 h-bg-primary">
      <h3 class="h-text-white">{{product.name}}</h3>
    </div>
    <div class="h-card-panel-content h-p-3">
      <div class="h-row">
        <div class="h-row h-col-xs-12 h-col-sm-3 h-col-md-3 h-col-lg-3">
          <div
            v-for="image in product.gal"
            :key="image"
            class="h-col-xs-12 h-col-sm-12 h-col-md-12 h-col-lg-12"
          >
            <img
              :src="image"
              class="h-card-rounded h-card-h-shadow-default"
              style="width:10vw; height:20vh"
              alt
            />
          </div>
        </div>
        <div class="h-col-xs-12 h-col-sm-6 h-col-md-6 h-col-lg-6">
          <img
            :src="product.gal[1]"
            class="h-card-rounded h-card-h-shadow-default"
            style="width:100%; height:100%"
            alt
          />
        </div>
        <div class="h-col-xs-12 h-col-sm-3 h-col-md-3 h-col-lg-3">
          <h2>{{product.name}}</h2>
          <h3>{{product.price}} $</h3>
          <h4>Specifications</h4>
          <ul style="list-style:none">
            <li v-for="spec in product.specifications" :key="spec">{{spec}}</li>
          </ul>
        </div>
      </div>
      <div class="h-mt-7">
        <h3>Description</h3>
        <p>{{product.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {},
  computed: {
    products: function() {
      return this.$store.getters.get_products;
    }
  },
  data() {
    return {
      product: {
        gal: []
      }
    };
  },
  methods: {
    get_product: function() {
      this.product = this.products.find(
        product => (product.name = this.$route.params.name)
      );
      this.product.gal = this.product.galleryy.split(","); 
    }
  },
  created() {
    this.get_product();
  }
};
</script>

<style>
</style>