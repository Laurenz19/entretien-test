<template>
  <div class="entretien">
    <app-entretien/>
    <div class="agenda-form">
      <div class="add-form">
        <div class="input-agenda">
          <label for="">Titre</label>
          <input type="text" name="titre" value="">
        </div>
         <div class="input-agenda">
          <label for="">Candidat</label>
          <input list="browsers" name="browser">
          <datalist id="browsers">
            <option value="Internet Explorer">IE</option>
            <option value="Firefox">Firefox</option>
            <option value="Chrome">Chrome</option>
            <option value="Opera">Opera</option>
            <option value="Safari">Safari</option>
          </datalist>
        </div>
        <div class="input-agenda">
          <label for="">Heure</label>
          <input type="time" name="" id="">
        </div>
        <div class="input-agenda">
          <label for="">date</label>
          <input type="date" name="" id="">
        </div>
        <div class="input-agenda">
          <label for="">Lieu</label>
          <input type="text" name="lieu" value="">
        </div>
      </div>
      <div class="add-btn">
        <i class="material-icons-outlined">
        save_alt
        </i>
        enregistrer
      </div>
    </div>
  </div>
</template>

<script>
import Entretien from '../components/entretien.vue'
export default {
  name:"Agenda",
  components:{
    "app-entretien":Entretien,
  }
}
</script>