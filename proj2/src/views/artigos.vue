<template>
    <div class='container'>
            <h1>Prove algumas das melhores opções regionais!</h1>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="@\assets\bolo.jpg" alt="BOLO" width="260" height="150" class="img"> <br><br>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consequatur id enim dicta itaque dolor fugiat quod voluptatum.
                    Dignissimos ratione dolor quis! Reprehenderit suscipit molestiae
                    enim consequatur. Porro eius dolorem quas?</h2><br>
                    <button type="button" class="botao">Adicionar ao carrinho</button>
                </div>
                <div class="grid-item">
                    <img src="@\assets\frutos.jpg" alt="FRUTOS" width="260" height="150" class="img"> <br><br>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consequatur id enim dicta itaque dolor fugiat quod voluptatum.
                    Dignissimos ratione dolor quis! Reprehenderit suscipit molestiae
                    enim consequatur. Porro eius dolorem quas?</h2><br>
                    <button type="button" class="botao">Adicionar ao carrinho</button>
                </div>
                <div class="grid-item">
                    <img src="@\assets\vinhos.jpg" alt="VINHOS" width="260" height="150" class="img"> <br><br>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consequatur id enim dicta itaque dolor fugiat quod voluptatum.
                    Dignissimos ratione dolor quis! Reprehenderit suscipit molestiae
                    enim consequatur. Porro eius dolorem quas?</h2><br>
                    <button type="button" class="botao">Adicionar ao carrinho</button>    
                </div>
            </div>
        </div>
</template>

<style>
.container{
    width: 100%;
    height: 40%;
    background-color: rgb(87, 87, 196);
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 2%;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
  }
  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    border-radius: 10%;
  }
  h1{
    text-align: center;
    color: white;
  }
  h2{
      text-align: center;
      color: black;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-weight: normal;
  }
  .img{
      border-radius: 10%;
      cursor:pointer;
      
  }

  .botao{
      font-weight: bold;
      background-color: rgb(177, 177, 230);
      border-radius: 10%;
      width: 120px;
      height: 50px;
  }



</style>
