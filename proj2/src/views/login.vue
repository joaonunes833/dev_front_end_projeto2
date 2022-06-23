<template>
  <div class="login-box">
    <h1>Login</h1>

    <div class="textbox">
      <i class="fa fa-user" aria-hiddn="true"></i>
      <input type="text" placeholder="Email" v-model="email" />
    </div>

    <div class="textbox">
      <i class="fa fa-lock" aria-hiddn="true"></i>
      <input type="password" placeholder="Password" v-model="password" />
    </div>

    <input type="submit" class="btn" value="Log In" @click="login()" />
  </div>
</template>

<script>
    import firebase from "firebase";
    export default {
    data() {
        return {
        email: "",
        password: "",
        user: null,
        };
    },
    methods: {
        login() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(res => {
            console.log(res);
            alert("Log in com sucesso");
            });
        },
    },
    created() {
        this.user = firebase.auth().currentUser;
    },
    };
</script>

<style>
.login-box {
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}

.login-box h1 {
  float: left;
  font-size: 40px;
  border-bottom: 6px solid;
  margin-bottom: 50px;
  padding: 13px 0;
}

.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid black;
}

.textbox i {
  width: 26px;
  float: left;
  text-align: center;
}
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: rgb(0, 0, 0);
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 10px;
}

.btn {
  width: 100%;
  background: none;
  border: 2px solid black;
  color: black;
  padding: 5px;
  cursor: pointer;
  margin: 12px 0;
}
</style>