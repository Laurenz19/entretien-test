<template>
    <div class="info">
        <div class="entretien-preview"> 
            <h3>Grand Titre de l'entretien</h3>
            <div class="entretien-info">
                <span class="schedule">02 Fev 2022 à 15h:30</span>
                <p>Entretien avec "Sambany Michel laurenzio"</p>
                <span class="lieu">Lieu: Tanambao</span> 
            </div>
            <div class="actions">
                <button>
                <i class="material-icons-outlined">
                    edit
                </i>
                    Modifier
                </button>
                <button>
                    <i class="material-icons-outlined">
                    close
                    </i>
                    Effacer
               </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Entretien"
}
</script>
<style>
    
    .info{
        width: 85%;
        margin: 5px auto;
    }

     .actions button{
    margin: 0 5px;
    background-color: white;
    border: solid 1px rgb(53, 53, 53);
    border-radius: 5px;
    cursor: pointer;
  }

  .actions button i{
    font-size: 20px;
  }
</style>