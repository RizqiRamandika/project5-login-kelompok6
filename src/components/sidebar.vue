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
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  background: #e7e7e7ff;
}
.navbar {
  width: 100%;
  height: 60px;
  background: red;
  border-bottom: 2px solid #585858ff;
}
.sidebar {
  width: 70px;
  height: 1072px;
  background: #3a3a3aff;
  float: left;
}
/*.wrapper {
 width: 1270px;
 height: 549px;
 background: #E7E7E7FF;
 float: left;
 margin:5px;
}*/
.box1 {
  width: 250px;
  height: 150px;
  background: #5aaa4cff;
  float: left;
  box-shadow: 2px 4px 4px grey;
  cursor: pointer;
}
.box2 {
  width: 250px;
  height: 150px;
  background: blue;
  float: left;
  margin-left: 30px;
  box-shadow: 2px 4px 4px grey;
  cursor: pointer;
}
.box3 {
  width: 250px;
  height: 150px;
  background: #dc7e3bff;
  float: left;
  margin-left: 30px;
  box-shadow: 2px 4px 4px grey;
  cursor: pointer;
}
.box4 {
  width: 250px;
  height: 150px;
  background: #f74c4fff;
  float: left;
  margin-left: 30px;
  box-shadow: 2px 4px 4px grey;
  cursor: pointer;
}
.box5 {
  width: 250px;
  height: 150px;
  background: rgb(255, 143, 15);
  float: left;
  margin-left: 30px;
  box-shadow: 2px 4px 4px grey;
  cursor: pointer;
}
.boxx {
  width: 1140px;
  height: 150px;
  margin-top: 20px;
  margin-left: 170px;
}
.admin {
  color: white;
  font-size: 35px;
  line-height: 60px;
  margin-left: 20px;
}
.btn {
  width: 70px;
  height: 40px;
  background: #3a3a3aff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #3a3a3aff;
}
.btnt {
  width: 70px;
  height: 40px;
  background: #2d2d2dff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #2d2d2dff;
}
.btnn {
  width: 70px;
  height: 40px;
  background: #595959ff;
  border: none;
  border-bottom: 1px solid #666666ff;
  color: white;
  cursor: pointer;
  outline-color: #595959ff;
}
.btn:hover {
  background: #595959ff;
}
.btnn:hover {
  background: #353535ff;
}
.title {
  width: 120px;
  height: 150px;
  float: right;
}
.int {
  color: white;
  margin: 30px 30px;
}
.intt {
  color: white;
  margin: 30px 30px;
}
.inttt {
  color: white;
  margin: 30px 30px;
}
.intttt {
  color: white;
  margin: 30px 30px;
}
.inttttt {
  color: white;
  margin: 30px 30px;
}
.box1:hover {
  background: #529646ff;
}
.box2:hover {
  background: #5160b4ff;
}
.box3:hover {
  background: #f1873aff;
}
.box4:hover {
  background: #cf4330ff;
}
.insert {
  margin-top: 40px;
  margin-left: 20px;
  width: 150px;
  height: 30px;
  background: #507ac7ff;
  border: none;
  color: white;
  font-weight: bold;
  box-shadow: 2px 2px 4px grey;
  cursor: pointer;
}
.insert:hover {
  background: #335fffff;
}
.hapus {
  width: 20px;
  height: 20px;
  background: #ff1919ff;
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 30px;
}
.edit {
  width: 20px;
  height: 20px;
  background: #0808bdff;
  border: none;
  color: white;
  margin-left: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.dasare {
  width: 500px;
  height: 300px;
  margin: 30px auto;
  border-radius: 20px;
  border: 1px solid #d9d9d9ff;
}
.in {
  width: 400px;
  margin-left: 50px;
  margin-top: 50px;
  height: 40px;
  background: none;
  border: 1px solid #55b6ffff;
  border-radius: 20px;
  outline: none;
  text-align: center;
}
.inn {
  width: 400px;
  margin-left: 50px;
  margin-top: 10px;
  height: 40px;
  background: none;
  border: 1px solid #55b6ffff;
  border-radius: 20px;
  text-align: center;
  outline: none;
}
.innn {
  margin-left: 50px;
  margin-top: 10px;
}
.sbm {
  width: 148px;
  height: 30px;
  background-color: #5180eeff;
  border: none;
  color: white;
  font-weight: bold;
  box-shadow: 2px 2px 3px grey;
}
</style>
