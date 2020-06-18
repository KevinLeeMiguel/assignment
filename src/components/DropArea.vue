<template>
  <div class="h-row">
    <div class="h-col-xs-6 h-col-sm-6 h-col-md-6 h-col-lg-6">
      <vue-dropzone
        ref="myVueDropzone"
        :useCustomSlot="true"
        id="dropzone"
        :includeStyling="true"
        :options="dropzoneOptions"
        @vdropzone-success="success"
        @vdropzone-sending="sendingEvent"
        @vdropzone-removed-file="removed"
        class="h-shadow h-shadow-default h-bg-white"
      >
        <div class="dropzone-custom-content">
          <h3 class="h-text-size-lg h-text-primary">Drag Photos here</h3>
          <p class="h-text-centered h-text-default h-text-size-lg">Or</p>
          <button class="subtitle h-btn h-btn-sm h-btn-outline-primary">Choose from pc</button>
        </div>
      </vue-dropzone>
    </div>
    <div class="h-row h-form-group h-col-xs-6 h-col-sm-6 h-col-md-6 h-col-lg-6">
      <div
        v-for="image in uploaded_images"
        :key="image"
        class="h-col-xs-6 h-col-sm-6 h-col-md-6 h-col-lg-6"
      >
        <img
          :src="image"
          class="h-card-rounded h-card-h-shadow-default"
          style="width:10vw; height:20vh"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: `https://api.cloudinary.com/v1_1/${process.env.VUE_APP_CLOUD_NAME}/image/upload`,
        maxFilesize: 4,
        includeStyling: true,
        thumbnailWidth: 150,
        thumbnailHeight: 120,
        uploadMultiple: false,
        // parallelUploads: 20,
        addRemoveLinks: true
      },
      uploaded_images: []
    };
  },
  methods: {
    success: function(file, response) {
      file.myUrl = response.url;
      this.uploaded_images.push(response.url);
      this.$emit("picture-added", response.url);
    },
    removed: function(file) {
      this.uploaded_images = this.uploaded_images.filter(
        val => val != file.myUrl
      );
      this.$emit("picture-removed", file.myUrl);
    },
    sendingEvent(file, xhr, formData) {
      formData.append("api_key", process.env.VUE_APP_CLOUDINARY_API_KEY);
      formData.append("timestamp", Date.now());
      formData.append("file", file);
      formData.append("upload_preset", process.env.VUE_APP_UPLOAD_PRESET);
    }
  }
};
</script>

<style>
</style>