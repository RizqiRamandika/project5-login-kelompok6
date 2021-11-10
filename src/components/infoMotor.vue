<template>
  <div class="app">
    <h1 style="text-align: center">SELAMAT DATANG DI PERUSAHAAN KAMI...</h1>
    <img
      src="https://www.freepnglogos.com/uploads/yamaha-png-logo/yamaha-png-logo-hd-13.png"
      width="200px"
      height="200px"
      style="margin-left: 520px"
    />
    <div class="pr">
      <div class="border1 row">
        <h1>Form Info Motor</h1>

        <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" />
          <label for=""><b> Nama Motor : </b></label><br />
          <input
            type="text"
            v-model="form.namaMotor"
            placeholder="Masukkan Nama Motor"
          /><br /><br />
          <label for=""><b> CC : </b></label><br />
          <input
            type="text"
            v-model="form.cc"
            placeholder="Masukkan CC"
          /><br /><br />
          <label for=""><b> Tahun Produksi : </b></label><br />
          <input
            type="text"
            v-model="form.tahunProduksi"
            placeholder="Masukkan Tahun Produksi"
          /><br /><br />
          <label for=""><b> Gambar : </b></label><br />
          <input
            type="text"
            v-model="form.gambar"
            placeholder="Masukkan Sebuah Link Gambar"
          /><br /><br />
          <label for=""><b> Harga : </b></label><br />
          <input
            type="text"
            v-model="form.harga"
            placeholder="Masukkan Harga"
          /><br /><br />
          <button type="submit" v-show="!updateSubmit" style="margin: auto">
            <b> Add </b>
          </button>
          <!-- jika tidak update maka tombol update tidak muncul -->
          <button type="button" v-show="updateSubmit" @click="update(form)">
            <b> Update </b>
          </button>
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </form>
        <br />
      </div>

      <div class="border2">
        <h1>Tabel Daftar Motor</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Motor</th>
              <th>CC</th>
              <th>Tahun Produksi</th>
              <th>Gambar</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody v-for="user in users" :key="user.id">
            <tr>
              <td>{{ user.id + 1 }}</td>
              <td>{{ user.namaMotor }}</td>
              <td>{{ user.cc }}</td>
              <td>{{ user.tahunProduksi }}</td>
              <td>
                <img :src="user.gambar" width="140px" height="100px" />
              </td>
              <td>Rp {{ user.harga }}</td>
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

        <p>Showing 1 to 1 of 1 entries</p>
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
        namaMotor: "",
        cc: "",
        tahunProduksi: "",
        gambar: "",
        harga: "",
      },
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/users/", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.namaMotor = ""),
          (this.form.cc = ""),
          (this.form.tahunProduksi = ""),
          (this.form.gambar = ""),
          (this.form.harga = "");
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namaMotor = user.namaMotor;
      this.form.cc = user.cc;
      this.form.tahunProduksi = user.tahunProduksi;
      this.form.gambar = user.gambar;
      this.form.harga = user.harga;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/users/" + form.id, {
          namaMotor: this.form.namaMotor,
          cc: this.form.cc,
          tahunProduksi: this.form.tahunProduksi,
          gambar: this.form.gambar,
          harga: this.form.harga,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.namaMotor = "";
          this.form.cc = "";
          this.form.tahunProduksi = "";
          this.form.gambar = "";
          this.form.harga = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/users/" + user.id).then((res) => {
        this.load();
        let index = this.users.indexOf(form.namaMotor);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.app {
  border: 1px solid black none;
  background-color: #333;
  color: white;
  padding: 10px;
  margin-top: 20px;
}
.pr {
  display: flex;
}
.border1 {
  width: 30%;
  padding: 30px;
  background-color: none;
}
.border2 {
  width: 40%;
  padding: 30px;
}
table {
  border: 1px solid white;
  padding: 20px;
  width: 800px;
  border-collapse: collapse;
  background-color: white;
}
th {
  border: 1px solid white;
  height: 70px;
  background-color: #333;
}
td {
  border: 1px solid black none;
  text-align: center;
  color: black;
}
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button[type="submit"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="button"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>