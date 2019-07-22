<template>
    <div id="drawer" v-if="this.$store.state.showDrawer">
        <form id="create-task" @submit.prevent="sendTask()">
            <span>Title</span>
            <input type="text" id="title-input" v-model="$store.state.newTask.title" required>
            <span>Description</span>
            <textarea id="description-textarea" v-model="$store.state.newTask.description" required></textarea>
            <button type="submit" id="submit-btn">Submit</button>
            <button type="button" id="close-btn" @click="close()">&#215;</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  	name: 'drawer',
  	methods: {

	sendTask() {
		if (this.$store.state.id == '') {
			console.log(this.$store.state.id);
			this.$store.commit('ADD_TASK');
		} else {
			console.log(this.$store.state.id);
			this.$store.commit('PATCH');
		}	
    },
	close() {
		this.$store.commit('CLOSE');
	}
  }
}
</script>


<style scoped lang="scss">

	$mainColor: #4CAF50;
	$secondColor: white;

    #drawer {
		position: fixed;
		left: 0;
		top: 62px;
		min-height: calc(100vh - 62px);
		width: 200px;
		background-color:$mainColor;
		color: $secondColor;
		padding: 20px;

		#title-input, #description-textarea {
			width: 100%;
		}

		#description-textarea {
			height: 200px;
		}

		#submit-btn {
			width: 50%;
			background-color: $secondColor;
			color: $mainColor;
			font-size: 25px;
			margin: 10px 25%;
		}

		#close-btn {
			width: 50%;
			margin: 0 25%;
			color: $secondColor;
			font-size: 60px;
		}
	}		
</style>
