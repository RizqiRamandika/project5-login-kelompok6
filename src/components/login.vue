<template>
  <div class="a">
    <div class="kotak_login">
      <p class="tulisan_login">Silahkan login</p>
      <br>
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          v-model="username"
          class="form_login"
          placeholder="Username atau email .."
        />
        <br>
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form_login"
          placeholder="Password .."
        /><br>

        <div
          @click="login"
          style="
            background-color: silver;
            text-align: center;
            height: 40px;
            padding-top: 10px;
            margin-left: 40px;
            margin-right: 40px;
            border-radius: 10px;
          "
        >
          <bottom>Login</bottom>
        </div>

        <br />
        <br />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      useres: [],
    };
  },
  methods: {
    async getUsers() {
      const user = await axios.get("http://localhost:3000/usersLogin");
      this.useres = user.data;
    },
    login() {
      const login = this.useres.find(
        (data) =>
          data.username === this.username && data.password === this.password
      );
      if (login === undefined) {
        alert("Username Or Password not found");
      } else {
        this.$router.push("/bor");
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
<style>
h1 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}

.tulisan_login {
  text-align: center;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
}

.kotak_login {
  width: 350px;
  background: white;
  border-radius: 10px;
  height: 350px;
  /*meletakkan form ke tengah*/
  margin: 80px auto;
  padding: 30px 20px;
}

label {
  font-size: 11pt;
}

.form_login {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}

.tombol_login {
  background: #46de4b;
  color: white;
  font-size: 11pt;
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
}

.link {
  color: #232323;
  text-decoration: none;
  font-size: 10pt;
}
</style>