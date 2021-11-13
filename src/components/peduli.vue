<template>
  <div>
    <div class="navbar">
      <h3 class="admin">Dashboard Admin</h3>
    </div>
    <div class="sidebar">
      <div class="nav"></div>
      <a href="/infoMotor"
        ><button class="btn">
          <i style="margin-right: 5px" class="fa fa-list"></i><br />info</button
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
      <h1 style="text-align: center; color: white">
        DATA KEGIATAN PENGABDIAN MASYARAKAT
      </h1>
      <form @submit.prevent="add" style="text-align: center">
        <input type="hidden" v-model="form.id" />
        <label for="">Tahun :</label><br />
        <input
          type="text"
          v-model="form.tahun"
          placeholder="Masukkan tahun"
        /><br /><br />
        <label for="">Kegiatan :</label><br />
        <textarea
          v-model="form.judul"
          placeholder="Masukkan sebuah kegiatan"
        ></textarea
        ><br /><br />
        <label for="">Sumber :</label><br />
        <input
          type="text"
          v-model="form.sumber"
          placeholder="Masukkan sumber"
        /><br /><br />
        <label for="">Prodi :</label><br />
        <input
          type="text"
          v-model="form.prodi"
          placeholder="Masukkan prodi"
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

      <table>
        <thead>
          <tr>
            <th><h3>No</h3></th>
            <th style="width: 80px"><h3>Tahun</h3></th>
            <th>
              <h3>Judul Kegiatan Pelayanan/Pengabdian kepada Masyarakat</h3>
            </th>
            <th style="width: 170px"><h3>Sumber dan Jenis Dana</h3></th>
            <th style="width: 100px"><h3>Prodi</h3></th>
            <th><h3>Action</h3></th>
          </tr>
        </thead>

        <tbody v-for="user in agenda" :key="user.id">
          <tr>
            <td>{{ user.id + 1 }}</td>
            <td>{{ user.tahun }}</td>
            <td>{{ user.judul }}</td>
            <td>{{ user.sumber }}</td>
            <td>{{ user.prodi }}</td>
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
      <br />
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
        tahun: "",
        judul: "",
        sumber: "",
        prodi: "",
      },
      agenda: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/agenda")
        .then((res) => {
          this.agenda = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/agenda/", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.tahun = ""),
          (this.form.judul = ""),
          (this.form.sumber = ""),
          (this.form.prodi = "");
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.tahun = user.tahun;
      this.form.judul = user.judul;
      this.form.sumber = user.sumber;
      this.form.prodi = user.prodi;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/agenda/" + form.id, {
          tahun: this.form.tahun,
          judul: this.form.judul,
          sumber: this.form.sumber,
          prodi: this.form.prodi,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.tahun = "";
          this.form.judul = "";
          this.form.sumber = "";
          this.form.prodi = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/agenda/" + user.id).then((res) => {
        this.load();
        let index = this.agenda.indexOf(form.tahun);
        this.agenda.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
#app {
  color: white;
  padding: 30px;
  background-color: #333;
  margin-left: 80px;
  height: 1072px;
  margin-right: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
table {
  color: black;
  border: 1px solid black;
  border-collapse: collapse;
  height: 400px;
}
th {
  border: 1px solid black;
  border-collapse: collapse;
  background-color: white;
  padding: 10px;
  text-align: center;
}
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
  background-color: white;
}
input,
select,
textarea {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button[type="submit"] {
  width: 50%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="button"] {
  width: 50%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
label {
  font-size: 20px;
}
</style>
