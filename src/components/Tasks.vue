<template>

    <div id="tasks">
        <div id="overlay" v-if="this.$store.state.showDrawer" @click="close()"></div>
        <Card/> 
    </div>
 
</template>


<script>

import Card from '@/components/Card.vue'

export default {
    name: 'tasks',
    
    components: {
        Card
    },
    methods: {
        close() {
            this.$store.commit('CLOSE');
        }
    }
}
</script>


<style scoped lang="scss">

    #tasks {
        max-width: 1330px;
        padding-top: 100px;
		display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
		margin: 0 auto;	

        @media screen and (max-width: 1320px) and (min-width: 879px) {
            max-width: 880px;
        }

        @media screen and (max-width: 880px) {
            max-width: 440px;
        }

        #overlay {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            background:rgba(0, 0, 0, 0.4);
        }
	}
</style>