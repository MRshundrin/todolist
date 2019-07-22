<template>
  <div id="authorization-wrapper">
    <div id="authorization">
      <img src="http://s1.iconbird.com/ico/0912/RadiumNeue/w256h2561348762222User.png" alt="user">
      <h2>Email:</h2>
      <form action="submit" @submit.prevent="authorization()">
        <input type="email" name="email" placeholder="E-Mail" id="input-mail" v-model="name" required>
        <button type="submit" id="authorization-btn">submit</button>
      </form> 
    </div>
  </div>
</template>


<script>

  export default {
    name: 'authorization',
    beforeCreate() {
      if (localStorage.getItem('name')) {
        this.$router.push('/tasks')
      }
    },
    data() {
      return {
        name: ''
      }
    },
    methods: {
      authorization() {
        localStorage.setItem('name', JSON.stringify(this.name));
        this.$store.state.name = JSON.parse(localStorage.getItem('name'))
        console.log(this.$store.state.name)
        this.$router.push('/tasks') 
      }
    }
  }
  
</script>


<style scoped lang="scss">
  $mainColor: #4CAF50;
  $fontSize: 16px;


  #authorization {
    display: flex;
    flex-direction: column;
    align-items: center;

    #authorization-btn {
      background-color:$mainColor;
      color: white;
      padding: 15px 30px;
      text-align: center;
      margin-right: 50px;
      font-size: $fontSize;
    }

    #input-mail {
      padding: 13px 30px;
      font-size: $fontSize;
      border: 2px solid  $mainColor;
    }
  }

  
</style>