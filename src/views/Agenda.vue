<template>
  <div class="entretien">
    
    <info-entretien :entretien="entretien" @fillForm="fill" @remove="removeEntretien"/>
    <div class="agenda-form">
      <div class="add-form">
        <div class="input-agenda">
          <label for="">Titre</label>
          <input type="text" name="titre" v-model="titre">
        </div>
         <div class="input-agenda">
          <label for="">Candidat</label>
          <input list="candidats" name="candidats" v-model="candidat">
          <datalist id="candidats">
            <option v-for="candidat in candidats" :key="candidat" :value="candidat['@id']">{{candidat.Nom}}</option>
          </datalist>
        </div>
        <div class="input-agenda">
          <label for="">Heure</label>
          <input type="time" name=""  v-model="heure">
        </div>
        <div class="input-agenda">
          <label for="">date</label>
          <input type="date" name=""  v-model="date">
        </div>
        <div class="input-agenda">
          <label for="">Lieu</label>
          <input type="text" name="lieu"  v-model="lieu">
        </div>
      </div>
      <div class="add-btn">
        <button class="cancel" @click="clearForm">
          <i class="material-icons-outlined">
          clear
          </i>
          Annuler
        </button>
        <button class="submit" v-if="edit.value==false" @click="addForm">
          <i class="material-icons-outlined">
          save_alt
          </i>
          Enregistrer
        </button>
         <button class="submit" v-if="edit.value==true" @click="updateForm">
          <i class="material-icons-outlined">
          save_alt
          </i>
          Enregistrer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Entretien from '../components/entretien.vue'
import read from '../composables/read'
import update from '../composables/update'
import create from '../composables/create'
import remove from '../composables/delete'
import { useStore } from 'vuex'
import moment from 'moment'
export default {
  name:"Agenda",
    computed:{
    entretiens(){
      return this.$store.state.entretiens
    },
    entretien(){
      return this.$store.state.entretien
    },
    candidats(){
      return this.$store.state.candidats
    },
     edit(){
      return this.$store.state.edit
    },
  },
  beforeCreate(){
      read("entretiens", (data)=>{
        this.$store.dispatch("setEntretien", data[0]);
        this.$store.dispatch("setEntretiens", data);
      })
  },
   beforeMount(){
      read("candidats", (data)=>{
        this.$store.dispatch("setCandidats", data);
      }) 
      
      read("entretiens", (data)=>{
        this.$store.dispatch("setEntretiens", data);
      })
  },
  setup(){
    let id = ref('')
    let titre = ref('')
    let candidat = ref('')
    let heure = ref('')
    let date = ref('')
    let lieu = ref('')
    let vide = ref({
      "titre": "",
      "date": "",
      "heure": "",
      "lieu": "",
      "candidat": "",
    })

    let store = useStore()
    
    let fill = function(){
        id.value = store.state.edit.data.id
        console.log(store.state.edit.data)
        titre.value = store.state.edit.data.titre
        date.value = moment(new Date(store.state.edit.data.date)).format('YYYY-MM-DD')
        heure.value = store.state.edit.data.heure
        lieu.value = store.state.edit.data.lieu
        candidat.value = store.state.edit.data.candidat['@id'] 
    }
  

    let clearForm = function(){
      titre.value = vide.value.titre
      date.value = vide.value.date
      heure.value = vide.value.heure
      lieu.value = vide.value.lieu
      candidat.value = vide.value.candidat 
      store.dispatch('setEdit', {value:false, data:{}})
    }

    let addForm = function(){
      console.log('addForm')
       let entretien = {
            "date": new Date(date.value),
            "heure": heure.value,
            "lieu": lieu.value,
            "candidat": candidat.value,
            "titre": titre.value
          }

          create("entretiens", entretien, (response)=>{
              console.log(response)
               read("entretiens", (data)=>{
                store.dispatch("setEntretiens", data);
              })
              store.dispatch("setEntretien", response.data.data)
            })
            clearForm()
    }

     let updateForm = function(){
        let entretien = {
            "date": new Date(date.value),
            "heure": heure.value,
            "lieu": lieu.value,
            "candidat": candidat.value,
            "titre": titre.value
          }
          console.log(id.value)
      update(`entretiens/${id.value}`, entretien, (response)=>{
              console.log(response.data)
              
               read("entretiens", (data)=>{
                store.dispatch("setEntretiens", data);
              })
              store.dispatch("setEntretien", response.data.data)
            })
            clearForm()
      store.dispatch('setEdit', {value:false, data:{}})
    }

    let removeEntretien = function(){
       id.value = store.state.edit.data.id
       remove(`entretiens/${id.value}`, (status)=>{
         console.log(status)
          read("entretiens", (data)=>{
                store.dispatch("setEntretien", data[0]);
                store.dispatch("setEntretiens", data);
          })
       })
    }

    return{
      titre, candidat, heure, date, lieu,
      clearForm, addForm, updateForm, fill, removeEntretien
    } 
  },
  components:{
    "info-entretien":Entretien,
  },
  methods:{

  }
}
</script>

<style>
 @import "../assets/css/agenda.css"; 
</style>