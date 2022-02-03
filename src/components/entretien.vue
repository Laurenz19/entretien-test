<template>
    <div class="info">
        <div class="entretien-preview"> 
            <h3>{{entretien.titre}}</h3>
            <div class="entretien-info">
                <span class="schedule"> {{moment(entretien.date).format('LL')}} à {{entretien.heure}}</span>
                <p>Entretien avec {{entretien.candidat.Nom}}</p>
                <span class="lieu">Lieu: {{entretien.lieu}}</span> 
            </div>
            <div class="actions">
                <button @click="edit">
                <i class="material-icons-outlined">
                    edit
                </i>
                    Modifier
                </button>
                <button @click="remove">
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
import moment from 'moment'
import { useStore } from 'vuex'
export default {
    name:"Entretien",
    props:{
        entretien:{}
    },
    setup(props, {emit}){
        let store = useStore()
        let edit = function(){
            store.dispatch('setEdit', {value:true, data:props.entretien})
             emit('fillForm')
        }

        let remove = function(){
             store.dispatch('setEdit', {value:true, data:props.entretien})
             emit('remove')
        }
        return{
            moment, edit, remove
        }
    }
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