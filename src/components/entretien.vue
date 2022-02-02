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
                    <span class="material-icons-outlined">
                    close
                    </span>
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
</style>