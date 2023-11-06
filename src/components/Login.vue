<template>
    <login>
      <h1>Sign in</h1>
      <p>ASURITE User ID</p>
      <p>Password</p>
      <div class="btn">
        <button v-on:click="onClick()">Submit</button>
      </div>
    </login>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
  }
  // methods: {''
  //   // onClick() {

  //   // }
  // }
  </script>
  
  <style scoped>
    login {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

    }
    .btn{
       display: inline-block;
       background: maroon;
       color: #fff;
       border: none;
       padding: 10px 20px;
       margin: 5px;
       border-radius: 5px;
       cursor: pointer;
       text-decoration: none;
       font-size: 15px;
       font-family: inherit;
    }
  </style>
  