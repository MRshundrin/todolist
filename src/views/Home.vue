<template>
  <div id="Home">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card.vue'
import Header from '@/components/HeaderPart.vue'
import Main from '@/components/MainPart.vue'

export default {
  name: 'home',
  mounted() {
    
    this.$store.commit('GET_TASKS') 
  },
  components: {
    Header,
    Main
  }
}
</script>