<template>
<div class="container">
  <div class="buscacomida">
    <h1
      style="
        font-size: 50px;
         font-family: 'Arial', Courier, monospace;
        color: black;
      "
    >
      O seu carrinho:
    </h1>
    <li
      class="buscacomida"
      v-for="(prato, index) in refeicoes"
      :key="index"
      style="list-style-type: none; display: flex; align-items: center"
    >
      <div style="margin-left: 40%">
        <p
          style="
            font-size: 40px;
            font-family: 'Arial', Courier, monospace;
            color: black;
          "
        >
          {{ prato.strMeal }}
        </p>
        <img
          :src="prato.strMealThumb"
          width="200"
          style="border-radius: 10%; margin: 10px; border: black solid 3px"
          alt=""
        />
        <br>
        <button class="btn btn-primary btn-sm btn-block remove-carrinho" @click="removeritemcarrinho(index)">Remover</button>
      </div>
    </li>
  </div>
</div>

  
  
</template>


<style>
.remove-carrinho {
  background: white;
}
</style>

<script>
import firebase from "firebase"
export default{
    name:'carrinho',
    data(){
        return{
            user:[],
            user:null,
            refeicoes:[]
        }
    },
    methods:{
        removeritemcarrinho(prato){
            firebase.database()
        .ref("/compras/"+this.user.uid+"/"+prato)
        .remove()
        .then(
          res=>{
          alert("Refeicao retirada do Carrinho!")        
          }
        )
    }
    },
    

    mounted(){
        this.user = firebase.auth().currentUser
        firebase.database().ref('/compras/'+ this.user.uid+'/').get().then((res)=>{this.refeicoes = res.val()})
    }
}

</script>
