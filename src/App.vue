<template>
  <div class="content">
    <header>
      <div class="header-content">
        <h3>Agenda des Entretiens</h3>
      </div>
      <div class="header-nav">
        <ul>
          <li> <router-link :to="{name:'Home'}">Agenda</router-link> </li>
          <li> <router-link :to="{name:'Candidat'}">Candidat</router-link> </li>
        </ul>
      </div>
    </header>
    <section>
      <div id="agenda-filter">
        <div class="filter-input heure">
          <i class="material-icons-outlined heure">
          schedule
          </i>
           <input type="time" name="heure" v-model="heure" @change="filterEntretien">
        </div>
        <div class="filter-input date">
          <i class="material-icons-outlined date">
          calendar_today
          </i>
          <input type="date" name="date" v-model="date" @change="filterEntretien">
        </div>
      </div>
      <div id="agenda-list">
        <div class="today">
          <h5>Aujourd'hui</h5>
          <ul>
            <li>
               <i class="material-icons-outlined">
                calendar_today
              </i>
              <h5 class="ent-titre">Titre de l'entretien</h5>
              <span class="ent-candidat"> Nom du candidat </span>
              <span class="ent-date">13/02/2000 à 15:30 </span>
            </li>
          </ul>
        </div>
        <div class="all-list">
          <ul>
            <li v-for="entretien in entretiens" :key="entretien.id" @click="show(entretien)">
              <h5 class="ent-titre">{{entretien.titre}}</h5>
              <span class="ent-candidat">{{entretien.candidat.Nom}}</span>
              <span class="ent-date"> {{entretien.heure}} - {{moment(entretien.date).format('MMMM Do YYYY')}}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <main>
       <router-view/>
    </main>
    <footer>
     <ul>
       <li>
         <a href="http://"><img src="./assets/gh.png" alt=""></a>
       </li>
       <li>
         <a href="http://"><img src="./assets/in.png" alt=""></a>
       </li>
     </ul>
     
     <div>Designed by myself & Copyright &copy; 2022</div>
     
    </footer>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import read from './composables/read'
import moment from 'moment'
import { useStore } from 'vuex'
export default {
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
    let date = ref('')
    let heure = ref('')
    let today = ref({})
    const store = useStore();

     read(`entretiens?date=${moment(Date.now()).format("yyyy-MM-DD")}`, (data)=>{
          today = data
          console.log(today)
     })

     let filterEntretien= function(){
       console.log(date)
            if(heure.value != "" && date.value != ""){
                  read(`entretiens?date=${moment(date.value).format("yyyy-MM-DD")}&heure=${heure.value}`, (data)=>{
                        store.dispatch("setEntretiens", data);
                 })
            }else if(heure.value == "" && date.value == ""){
                read(`entretiens`, (data)=>{
                        store.dispatch("setEntretiens", data);
                })
            }else{
                 if(heure.value != ""){
                      read(`entretiens?heure=${heure.value}`, (data)=>{
                        store.dispatch("setEntretiens", data);
                    })
                }

                if(date != ""){
                      read(`entretiens?date=${moment(date.value).format("yyyy-MM-DD")}`, (data)=>{
                        store.dispatch("setEntretiens", data);
                    })
                }
            }
          
        }

        let show = function(entretien){
           store.dispatch("setEntretien", entretien);
        }

    return{
      heure, date, today, moment, filterEntretien, show
    }
  }
}
</script>
<style>
@import "./assets/css/app.css";
</style>
