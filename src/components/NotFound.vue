<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <router-link to="/">Go to Sign In</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 20px;
    font-size: 24px;
    color: #555;
  }
  </style>