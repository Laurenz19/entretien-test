<template>
  <div class="entretien">
    <info-entretien/>
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
        <button class="cancel">
          <i class="material-icons-outlined">
          clear
          </i>
          Annuler
        </button>
        <button class="submit">
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
import Entretien from '../components/entretien.vue'
export default {
  name:"Agenda",
  components:{
    "info-entretien":Entretien,
  }
}
</script>

<style>
  .agenda-form{
    padding: 15px 80px;
    margin: 5px;
    border:solid 1px rgb(243, 242, 242);
  }

  .agenda-form label, .agenda-form input{
    display: block;
  }

  .agenda-form input{
    border: none;
    border-bottom: solid 2px rgb(243, 242, 242);
    width: 100%;
    height: 25px;
    font-family: Helvetica, sans-serif;
    font-size: 15px;
  }

  .add-form::after{
    content: "";
    display: block;
    clear: both;
  }

  .input-agenda{
    float: left;
    width: 36%;
    margin: 10px 8% 10px 8px;
    padding: 0;
  }

  .add-btn button{
    margin: 0 5px;
    background-color: white;
    border: solid 1px rgb(53, 53, 53);
    border-radius: 5px;
    cursor: pointer;
  }

  .add-btn button i{
    font-size: 20px;
  }

  @media only screen and (max-width: 990px) {
    /* For mobile phones: */
    .input-agenda{
    float:none !important;
    width: 100%;
  }
  
}
 
</style>