<template>
  <div class="h-card-panel h-shadow h-shadow-primary h-pb-5">
    <div class="h-card-panel-header h-p-1 h-bg-primary">
      <h3 class="h-text-white">New Product</h3>
    </div>
    <div class="h-card-panel-content h-p-3">
      <div class="h-row">
        <div class="h-col-xs-12 h-col-sm-6 h-col-md-6 h-col-lg-6 h-form-group">
          <label class="h-float-left">Product Name:</label>
          <input class="h-form-control" type="text" v-model="product.name" />
        </div>
      </div>
      <drop-area @picture-added="handle_newPicture" @picture-removed="handle_picture_remove" />
      <div class="h-row h-mt-7">
        <div class="h-col-xs-12 h-col-sm-12 h-col-md-12 h-col-lg-12 h-form-group">
          <label class="h-float-left">Description:</label>
          <textarea class="h-form-control" cols="20" rows="10" v-model="product.description"></textarea>
        </div>
        <div class="h-col-xs-12 h-col-sm-6 h-col-md-3 h-col-lg-3 h-form-group">
          <label class="h-float-left">Price:</label>
          <input class="h-form-control" type="number" v-model="product.price" />
        </div>
      </div>
      <button class="h-btn h-btn-block h-btn-outline-primary">Submit</button>
    </div>
  </div>
</template>

<script>
import DropArea from "../components/DropArea";
export default {
  name: "Product",
  components: {
    "drop-area": DropArea
  },
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: "",
        gallery: []
      }
    };
  },
  methods: {
    handle_newPicture: function(payload) {
      this.product.gallery.push(payload);
    },
    handle_picture_remove: function(payload) {
      this.product.gallery = this.product.gallery.filter(img => img != payload);
    }
  }
};
</script>

<style>
</style>