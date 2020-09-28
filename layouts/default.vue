<template>
  <div>
    <md-tabs>
      <md-tab id="tab-about" md-label="About" to="/"></md-tab>
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
  
}
</script>