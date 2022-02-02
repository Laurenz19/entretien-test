<template>
  <div class="candidat">
      <div class="candidat-form">
         <div class="input-candidat">
          <label for="">Nom</label>
          <input type="text" name="titre" value="">
        </div>
        <div class="input-candidat">
          <label for="">Diplôme</label>
          <select name="diplome" id="">
            <option value="Master">Master</option>
            <option value="Licence">Licence</option>
            <option value="Aucune"></option>
          </select>
        </div>
        <div class="input-candidat">
          <label for="">Email</label>
          <input type="email" name="email" id="">
        </div>
        <div class="input-candidat">
          <label for="">Tel</label>
          <input type="text" name="tel" value="">
        </div>
        <div class="input-candidat">
          <label for="">Compétences</label>
          <input type="text" name="competence" value="">
          <div class="competence-list"></div>
        </div>
        <div class="input-candidat">
          <button>Ajouter</button>
          <button>Annuler</button>
        </div>
      </div>
      <div class="candidat-list">
          List des candidats
      </div>
  </div>
</template>

<script>
export default {
  name: 'Candidat',
}
</script>
