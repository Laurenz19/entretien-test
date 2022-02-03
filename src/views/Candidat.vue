<template>
  <div class="candidat">
      <div class="candidat-form">
         <div class="input-candidat">
          <label for="">Nom</label>
          <input type="text" name="nom" v-model="nom">
        </div>
        <div class="input-candidat">
          <label for="">Diplôme</label>
          <select name="diplome" v-model="diplome">
            <option value="Aucune"></option>
            <option value="Master">Master</option>
            <option value="Licence">Licence</option>
          </select>
        </div>
        <div class="input-candidat">
          <label for="">Email</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="input-candidat">
          <label for="">Tel</label>
          <input type="text" name="tel" v-model="tel">
        </div>
        <div class="input-candidat">
          <label for="">Compétences</label>
          <input type="text" name="competence" v-model="competence" @keypress.enter="addExp">
          <div class="competence-list">
            <span v-for="comp in competences" :key="comp" @click="removeExp(comp)">
              "{{comp}}"
            </span>
          </div>
        </div>
        <div class="actions">
              <button @click="clearForm">
                    <i class="material-icons-outlined">
                    close
                    </i>
                    Effacer
               </button>
                <button @click="addForm">
                <i class="material-icons-outlined">
                    save
                </i>
                    Enregistrer
                </button>
            </div>
      </div>
      <div class="candidat-list">
         
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import read from '../composables/read'
import create from '../composables/create'
import { useStore } from 'vuex'

export default {
  name:"Candidat",
  computed:{
    entretiens(){
      return this.$store.state.entretiens
    },
    candidats(){
      return this.$store.state.candidats
    },
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
    let nom= ref("");
    let diplome= ref("");
    let email= ref("");
    let tel= ref("");
    let competence= ref("");
    let competences= ref([]);

    let store = useStore()
    let addExp = ()=>{
      let exist = false
      if(competence.value != ''){
         competences.value.forEach(elem=>{
            if(elem == competence.value) exist = true;
          })
          if(exist == false)  competences.value.push(competence.value);
      }
      competence.value = ""
    }

    let removeExp = (comp_clicked)=>{
     
     let data = ref([]);
     competences.value.forEach(elem=>{
       if(elem !=comp_clicked) data.value.push(elem);
     })
     competences.value = data.value;
    }

    let clearForm = function(){
      nom.value = ''
      diplome.value= '';
      email.value= '';
      tel.value= '';
      competence.value= '';
      competences.value= [];
    }

    let addForm = function(){
      let candidat = ref({
            "Nom": nom.value,
            "email": email.value,
            "tel":  tel.value,
            "competences":  competences.value})
      create("candidats",candidat.value,
           (response)=>{
              console.log(response)
               read("candidats", (data)=>{
                store.dispatch("setCandidats", data);
              })
              clearForm()
            })
    }

    return{
      nom, diplome, email, tel,
      competence, competences, addExp, removeExp,
      clearForm, addForm
    }
  }
}
</script>

<style>
 @import "../assets/css/candidat.css";
</style>





