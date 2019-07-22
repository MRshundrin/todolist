<template>
  	<ul id="task-wrapper">
		<li class="task" v-for="task in todoList" :key="task._id">
			<div class="task-header">
				<button class="edit-btn" @click="edit(task._id)">&#9998;</button>
				<button class="del-btn" @click="removeTask(task._id)">&#128465;</button>
			</div>
			<div class="task-main">
				<h2>{{ task.title }}</h2>
				<p>{{ task.description }}</p>
			</div>
		</li>
	</ul>
</template>

<script>
import axios from 'axios'
export default {
  	name: 'card',
  	computed: {
		todoList() {
			return this.$store.getters.TODOS;
		}
	},
  	methods: {
		removeTask(id) {
			this.$store.state.showDrawer = false;
			const question = confirm('Remove task?');
			if (question) {
				axios.delete('https://raysael.herokuapp.com/todo/' + id)
				.then(() => this.$store.commit('GET_TASKS'));
			}
		},
		edit(id) {
			this.$store.commit('EDIT', id);
		}
	} 	
}
</script>


<style scoped lang="scss">
  	
	#task-wrapper {
		display: flex;
        flex-wrap: wrap;
		margin: 0 auto;
		overflow: hidden;
		list-style-type: none;
		padding: 0;

		.task {
			width: 400px;
			height: 430px;
			margin: 20px;
			background-image: url(https://www.stickpng.com/assets/images/5b06c18efad1cae04539afdf.png);
			background-size: cover;
			background-position: center;
		}

		.task-header {
			width: 350px;
			height: 30px;
			display: flex;
			justify-content: flex-end;
			margin: 0 auto;
			margin-top: 80px;

			.edit-btn, .del-btn {
				font-size: 25px;
				width: 35px;
				color: black;
				font-weight: 700;
			}
					
		}
		.task-main {
			width: 270px;
			height: 250px;
			margin: 0 auto;
			overflow: hidden;
			text-decoration: underline;

			h2 {
				margin: 0;
			}
		}
	}
</style>
