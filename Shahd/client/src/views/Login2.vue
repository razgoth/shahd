<template>
  <div>
    <div class="form">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <div class="inputs">
              <input v-model="formData.email" id="email" placeholder="Email" type="email">
              <input v-model="formData.password" id="password" placeholder="Password" type="password">
          </div>
          <div class="buttons">
            <router-link class="router-link" to="/">Back</router-link>
            <button class="button" type="submit">Login</button>
          </div>
          <h2 v-if="error" class="error">{{ error }}</h2>
        </form>
      </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          email: '',
          password: ''
        },
        error: '',
        user: []
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:4000/api/v1/login', this.formData);
          const token = response.data.token;
    
          localStorage.setItem('token', token);
          
          this.$store.commit('login')
          
          this.$router.push({ name: 'Administrator' });
        } catch (error) {
          console.error('Login failed:', error);
          this.error = 'Invalid credentials. Please try again.';
        }
      }
    }
  };
  </script>
 <style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

form {
  display: flex;
  margin-left: 0;
  margin-right: 0;
  align-content: center;
  justify-content: center;
  margin-top: 150px;
}

.button, .router-link {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.router-link {
  padding: 20px 20px 38px 20px;
  max-height: 1px;
  margin-top: 5px;
  background-color: #999;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

  .button:hover{
    background-color: #0056b3;
  }

  .router-link:hover {
    background-color: #777;
  }

  .buttons {
    display: flex;
  }

  .error {
    color: white;
    background-color: red;
    border-radius: 50px;
    padding: 20px;
  }

  input {
    margin-top: 50px;
  }

  </style>
  