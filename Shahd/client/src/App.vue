<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
  }

  button {
    width: 100px;
    height: 50px;
    padding: 15px;
    font-weight: 800;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 15px;
  }

  button:hover, .router-link:hover{
    background-color: #0056b3;
  }

  input, select {
    border-radius: 50px;
  }

  input[type = date] {
    margin-bottom: 20px;
  }

  .router-link {
    padding: 15px;
    background: #007bff;
    color: white;
    font-weight: 800;
    text-decoration: none;
    border-radius: 10px;
    font-size: 15px;
  }


  </style>
