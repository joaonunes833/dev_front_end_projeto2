<template>
  <div class="comentario">
                <form method="post">
                    <textarea name="comments" id="comments" style="width:700px;height:200px;padding:2%;font-size:1.2em;background-color:white;">
                    Diga algo sobre o nosso serviço.
                    </textarea>
                    <button type="button" class="btn" onclick="alert('Obrigado pelo seu comentário.')">Enviar</button>
                    </form>
            </div>
</template>

<style>

.comentario{
    margin-top: 10%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>