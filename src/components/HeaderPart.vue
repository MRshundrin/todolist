<template>
    <div id="header-part">
        <span id="user-name">{{ name }}</span>
		<button id="logout-btn" @click="logout">LogOut</button>
    </div>
</template>

<script>
export default {
  name: 'header-part',
  data() {
	  	return {
		  name: JSON.parse(localStorage.getItem('name'))
	  	}
  },
  methods: {
	logout() {
		this.$store.commit('LOGOUT');
		localStorage.removeItem('name');
		this.$router.push('/');
	}
  }
}
</script>


<style scoped lang="scss">
	$mainColor: #4CAF50;
	$secondColor: white;

    #header-part {
		position: fixed;
		width: 100%;
		z-index: 1;
		background: $secondColor;
		border-bottom: 2px solid black;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		#user-name {
			padding-left: 50px;
		}

		#logout-btn {
			background-color: $mainColor;
			color: $secondColor;
			padding: 15px 30px;
			text-align: center;
			font-size: 16px;
			margin-right: 50px;
		}
	}
</style>
