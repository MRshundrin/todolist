<template>

  <div id="main-part">
    <Tasks/>
    <Drawer/>
    <button id="add-btn" @click="show" >&#43;</button>
  </div>
 
</template>

<script>

import Drawer from '@/components/Drawer.vue'
import Tasks from '@/components/Tasks.vue'

export default {
  name: 'main-part',
  components: {
    Drawer,
    Tasks
  },
  data() {
    return {

    } 
  },
  methods: {
    show: function () {
      this.$store.state.showDrawer = true;
    }
  }
}

</script>


<style scoped lang="scss">

  $mainColor: #4CAF50;
	$secondColor: white;

  #main-part {
			position: relative;
	}

  #add-btn {
    position: fixed;
    bottom: 70px;
    right: 70px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color:$mainColor;
    font-size: 60px;
    color: $secondColor;
  }
</style>
