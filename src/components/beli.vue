<template>
  <div class="app">
    <div style="background-color: white; margin-bottom: 10px">
      <h1>HALAMAN PEMBELIAN MOTOR</h1>
    </div>
    <form @submit.prevent="add">
      <input type="hidden" v-model="form.id" />
      <div class="body">
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

      <div v-if="detailMotor" class="sidenav body">
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
            <fieldset><legend>HARGA</legend></fieldset>
            <div
              style="
                background-color: gray;
                height: 80px;
                width: 95%;
                margin: auto;
              "
            >
              <h2 v-if="form.method === 'Cash'" style="padding-top: 28px">
                Harga Motor: Rp {{ harga }}
              </h2>
              <h2 v-else style="padding-top: 12px">
                Harga Motor: Rp {{ harga }}<br />Uang Muka: Rp {{ dp }}
              </h2>
            </div>
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
              v-show="form.method"
              style="margin: auto"
              @click="confirmed = true"
            >
              <b> KONFIRMASI </b>
            </button>
          </div>
        </div>
      </div>
    </form>
    <div v-show="confirmed" class="mask">
      <div>
        <h1>Motor {{ form.motor }} Yang Anda Pesan Akan Segera Diantar</h1>
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
      Harga: {},
      slogan: "",
      deskripsi: "",
      beli: "",
      harga: "",
      dp: "",
      gambar: "",
      users: [],
      confirmed: false,
      detailMotor: false,
      updateSubmit: false,
    };
  },
  mounted() {
    this.loadmotor();
  },
  methods: {
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
      this.harga = motor.harga;
      this.dp = motor.dp;
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
  },
};
</script>

<style scoped>
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
.sidenav {
  padding-top: 1px;
  height: 20px;
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
.mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  color: white;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  text-align: center;
}
</style>
