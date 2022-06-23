<template>
  <div class="container-artigo">
    <br />
    <div class="grid-container-artigo">
      <div class="grid-item-artigo">
        <img
          src="@\assets\vinhos.jpg"
          alt="VINHOS"
          width="700"
          height="360"
          class="img-artigo"
        />
      </div>
      <div class="grid-item-artigo">
        <h1>Vinhos regionais</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          id enim dicta itaque dolor fugiat quod voluptatum. Dignissimos ratione
          dolor quis! Reprehenderit suscipit molestiae enim consequatur. Porro
          eius dolorem quas? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur id enim dicta itaque dolor fugiat quod voluptatum.
          Dignissimos ratione dolor quis! Reprehenderit suscipit molestiae enim
          consequatur. Porro eius dolorem quas?
        </h2>
        <br />
        <button type="button" class="botao-artigo">Comprar</button><br /><br />
        <button type="button" class="botao-artigo">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.container-artigo{
    width: 1300px;
    height: 500px;
    background-color: rgb(87, 87, 196);
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 2%;
}

.grid-container-artigo {
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
  }
  .grid-item-artigo {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
  h1{
    text-align: center;
    color:black;
  }
  h2{
      text-align: center;
      color: black;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-weight: normal;
  }
  .img-artigo{
      border-radius: 10%;
      
  }

  .botao-artigo{
      font-weight: bold;
      background-color: rgb(177, 177, 230);
      border-radius: 10%;
      width: 120px;
      height: 50px;
  }
</style>