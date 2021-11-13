<template>
  <div>
    <div class="navbar">
      <h3 class="admin">Dashboard Admin</h3>
    </div>
    <div>
      <div class="sidebarr">
        <div class="nav"></div>
        <a href="/infoMotor"
          ><button class="btn">
            <i style="margin-right: 5px" class="fa fa-list"></i
            ><br />info</button
          ><br
        /></a>
        <a href="/beliAdmin"
          ><button class="btn">
            <i style="margin-right: 5px" class="fas fa-shopping-cart">
              <br />
              beli</i
            ></button
          ><br
        /></a>
        <a href="/peduli"
          ><button class="btnn">
            <i style="margin-right: 5px" class="fas fa-hand-holding-medical"></i
            ><br />care</button
          ><br
        /></a>
        <a href="/login"
          ><button class="btnn">
            <i style="margin-right: 5px" class="fas fa-sign-out-alt"></i
            ><br />Logout</button
          ><br
        /></a>
      </div>
      <div id="app">
        <h1 style="text-align: center">Daftar Pesanan Motor</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Motor</th>
              <th>Metode Pembayaran</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody v-for="user in beli" :key="user.id">
            <tr>
              <td>{{ user.id + 1 }}</td>
              <td>
                <div class="imagecon">
                  <img :src="user.gambar" width="140px" />
                  {{ user.motor }}
                </div>
              </td>
              <td>{{ user.method }}</td>
              <td>
                <button
                  style="
                    background-color: green;
                    color: white;
                    width: 60px;
                    padding: 5px;
                    border: 1px solid white;
                  "
                  @click="edit(user)"
                >
                  Edit</button
                ><br />
                <button
                  style="
                    background-color: red;
                    color: white;
                    width: 60px;
                    padding: 5px;
                    border: 1px solid white;
                  "
                  @click="del(user)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" />
          <div>
            <div
              class="motor"
              v-for="(data, index) in users"
              :key="index"
              @click="getListmotor(index)"
            >
              <label for="motor1"
                ><img :src="data.gambar" />
                <h2 class="nama">{{ data.namaMotor }}</h2></label
              >
            </div>
          </div>

          <div v-if="detailMotor" class="sidenav">
            <div class="action">
              <h2>{{ form.motor }}</h2>
              <fieldset><legend>CREDIT</legend></fieldset>
              <div class="radio-toolbar">
                <input
                  type="radio"
                  id="bayar"
                  name="bayar"
                  value="Kredit 12 Bulan"
                  v-model="form.method"
                />
                <label for="bayar" style="margin-right: 1%">12 Bulan</label>
                <input
                  type="radio"
                  id="cicil"
                  name="bayar"
                  value="Kredit 24 Bulan"
                  v-model="form.method"
                />
                <label for="cicil" style="margin-right: 1%">24 Bulan</label>
                <fieldset><legend>CASH</legend></fieldset>
                <input
                  type="radio"
                  id="cash"
                  name="bayar"
                  value="Cash"
                  v-model="form.method"
                />
                <label for="cash" style="margin-right: 1%">Cash</label>
              </div>
            </div>
            <div class="info">
              <div>
                <h2>{{ slogan }}</h2>
                <p>
                  {{ deskripsi }}
                </p>
              </div>
            </div>
            <div class="preview">
              <span
                class="close"
                @click="(detailMotor = false), (updateSubmit = false)"
                >&times;</span
              >
              <div class="img">
                <img :src="gambar" />
                <button
                  type="submit"
                  class="confirm"
                  v-show="!updateSubmit && form.method"
                  style="margin: auto"
                >
                  <b> KONFIRMASI </b>
                </button>
                <button
                  class="confirm"
                  v-show="updateSubmit"
                  @click="update(form)"
                >
                  <b> Update </b>
                </button>
              </div>
            </div>
          </div>
        </form>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        motor: "",
        method: "",
      },
      slogan: "",
      deskripsi: "",
      beli: "",
      gambar: "",
      users: [],
      detailMotor: false,
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
    this.loadmotor();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/beli")
        .then((res) => {
          this.beli = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadmotor() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getListmotor(id) {
      const motor = this.users[id];
      this.form.motor = motor.namaMotor;
      this.slogan = motor.slogan;
      this.deskripsi = motor.deskripsi;
      this.gambar = motor.gambar;
      this.detailMotor = true;
    },
    async add() {
      const postMotor = {
        motor: this.form.motor,
        method: this.form.method,
        gambar: this.gambar,
      };
      await axios.post("http://localhost:3000/beli/", postMotor);
      this.detailMotor = false;
      this.load();
    },
    edit(user) {
      this.updateSubmit = true;
      this.detailMotor = true;
      this.form.id = user.id;
      this.form.motor = user.motor;
      this.form.method = user.method;
      this.gambar = user.gambar;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/beli/" + form.id, {
          motor: this.form.motor,
          method: this.form.method,
          gambar: this.gambar,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.detailMotor = false;
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/beli/" + user.id).then((res) => {
        this.load();
        let index = this.beli.indexOf(form.namaMotor);
        this.beli.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.sidebarr {
  width: 70px;
  height: 1400px;
  background: #3a3a3aff;
  float: left;
}
#app {
  /* color: white; */
  padding: 30px;
  /* background-color: #333; */
  margin-left: 80px;
  height: 1072px;
  margin-right: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.body {
  content: "";
  display: table;
  clear: both;
}
.motor {
  float: left;
  width: 32%;
  margin-right: 1%;
  border: solid 1px black;
  margin-bottom: 13px;
  cursor: pointer;
}
img {
  width: 100%;
  height: 70%;
  background-color: white;
}
.nama {
  background-color: #f1f1f1;
  padding: 10px 0 10px;
  margin: 0;
  text-align: center;
}
.gap {
  margin-right: 1.5%;
}
.imagecon {
  width: 200px;
  background-color: white;
  margin: auto;
}
.imagecon h2 {
  background-color: gray;
}
.imagecon img {
  width: 100%;
}
.sidenav {
  padding-top: 1px;
  height: 325px;
  width: 100%;
  position: fixed;
  bottom: 0;
  top: auto;
  left: 0;
  background-color: #222;
  overflow-x: hidden;
  transition: 0.5s;
  overflow-y: hidden;
  color: #f2f2f2;
}
.action {
  text-align: center;
  width: 32%;
  float: left;
}
.info {
  float: left;
  width: 34%;
  height: 324px;
  padding: 10px;
  border-left: #f2f2f2 solid 1px;
  border-right: #f2f2f2 solid 1px;
}
.preview {
  border-top: black;
  width: 34%;
  float: left;
  height: 324px;
  background-color: white;
}
.close {
  color: black;
  top: 5px;
  left: auto;
  right: 10px;
  font-size: 40px;
  cursor: pointer;
  position: absolute;
}
fieldset {
  border-left: none;
  border-right: none;
  border-bottom: none;
}
legend {
  padding: 0 5px 0 5px;
  color: #f1f1f1;
}
input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}
.radio-toolbar label {
  display: inline-block;
  background-color: #333;
  padding: 15px 32px;
  font-size: 17px;
  border-radius: 4px;
  width: 47%;
  margin-bottom: 5px;
}
.radio-toolbar label:hover {
  background-color: black;
}
.radio-toolbar input[type="radio"]:checked + label {
  background-color: black;
}
.img {
  text-align: center;
  width: 100%;
}
.img img {
  width: 80%;
}
.confirm {
  border: none;
  color: #f2f2f2;
  background-color: #333;
  padding: 15px 32px;
  font-size: 17px;
  border-radius: 4px;
  width: 95%;
  margin-bottom: 5px;
}
.confirm:hover {
  background-color: black;
}
* {
  box-sizing: border-box;
}
table {
  border: 1px solid #dddddd;
  padding: 20px;
  width: 750px;
  border-collapse: collapse;
  text-align: center;
  margin: auto;
}
th {
  border: 1px solid #dddddd;
  color: white;
  height: 70px;
  background-color: #333;
}
td {
  border: 1px solid #dddddd;
  color: black;
}
input,
select {
  /* width: 100%; */
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
