<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-about" md-label="About" to="/" exact></md-tab>
      <md-tab id="tab-reading" md-label="Reading" to="/reading"></md-tab>
    </md-tabs>
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

export default {
  computed: {
      currentRouteName() {
        return this.$route.name;
      }
  }
}
</script>