<template>
  <div class="pesquisa-container">
    <h1>Pesquise algo:</h1>
    <input
      type="text"
      class="inputbox"
      @keyup.enter="pesquisadb(pesquisa)"
      v-model="pesquisa"
      placeholder="Pesquisa"
      size="auto"
      required
    />
    <input
      type="button"
      class="btn mais-info"
      value="Pesquisar"
      @click="pesquisadb(pesquisa)"
    />
  </div>
  <div class="container">
    <div class="menu-grid">
    <li
      class="buscacomida"
      style="list-style: none"
      v-for="(prato, index) in refeicoes"
      :key="index"
    >
      <p
        style="
          font-size: 40px;
          font-family: 'Arial', Courier, monospace;
          color: black;
        "
      >
        {{ prato.strMeal }}
      </p>
      <div class="menu-container">
        <img
          :src="prato.strMealThumb"
          width="200"
          style="
            margin: 10px;
            border: black solid 3px;
            border-radius: 5%;
            cursor: pointer;
          "
          @click="adicionarCompra(prato)"
          alt="adicionar"
        />
        <br>
        <button
          class="btn btn-primary btn-sm btn-block mais-info"
          @click="navega(prato.strMeal)"
        >
          Mais Informação
        </button>
        <button
          class="btn btn-primary btn-sm btn-block mais-info"
          @click="adicionarCompra(prato)"
        >
          Adicionar Carrinho
        </button>
        
      </div>
    </li>
  </div>
  <hr />
  </div>
  
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      refeicoes: ["hamburguer", "ovo frito"],
      user: null,
      pesquisa: "",
    };
  },
  methods: {
    navega(prato) {
      this.$router.push("/produto/" + prato);
    },
    adicionarCompra(prato) {
      firebase
        .database()
        .ref("/compras/" + this.user.uid + "/")
        .push()
        .set(prato);
    },
    pesquisadb(pesquisa) {
      this.axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + pesquisa)
        .then((res) => {
          console.log(res);
          this.refeicoes = res.data.meals;
        });
    },
  },
  mounted() {
    this.pesquisadb("");
    this.user = firebase.auth().currentUser;
  },
};
</script>

<style>
.pesquisa-container {
  width: 40%;
  height: 20%;
  background-color: rgb(170, 170, 247);
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 2%;
}

.mais-info {
  height: 5%;
  width: 20%;
  background: white;
}

.inputbox {
  width: 300px;
  height: 40px;
  border-radius: 10%;
  font-size: 14px;
  margin: 2%;
}
</style>