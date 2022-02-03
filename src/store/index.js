import { createStore } from 'vuex'

export default createStore({
  state: {
    candidats:[],
    entretiens:[],
    entretien:{
      "@id": "/api/entretiens/3",
      "@type": "Entretien",
      "titre": "Entretien d'embauche",
      "lieu": "tanambao",
      "date": "2017-10-22T00:00:00+02:00",
      "heure": "12:16:14",
      "candidat": {
          "@id": "/api/candidats/3",
          "@type": "Candidat",
          "Nom": "Dr. Tatum Greenholt",
          "email": "amani.zemlak@yahoo.com",
          "tel": "225-877-54"
      }
    },
    edit:{value:false, data:{}},
  },
  mutations: {
    setCandidats(state, data){
      state.candidats = data
    },
    setEntretiens(state, data){
      state.entretiens = data
    },
    setEntretien(state, data){
      state.entretien = data
    },
    removeCandidat(state, id){
      let data = []
      state.candidats.forEach(elem => {
        if(elem.id != id){
          data.push(elem);
        }
      });

      state.candidats = data;
    },
    setEdit(state, data){
      state.edit = data
    },
  },
  actions: {
    setCandidats({commit}, data){
      commit('setCandidats', data)
    },
    setEntretiens({commit}, data){
      commit('setEntretiens', data)
    },
    setEntretien({commit}, data){
      commit('setEntretien', data)
    },
    removeCandidat({commit}, id){
      commit("removeCandidat", id)
    },
    setEdit({commit}, data){
      commit('setEdit', data)
    },
  },
  modules: {
  }
})
