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
             <option value="Aucune"></option>
            <option value="Master">Master</option>
            <option value="Licence">Licence</option>
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
        <div class="actions">
             <button>
                    <i class="material-icons-outlined">
                    close
                    </i>
                    Effacer
               </button>
                <button>
                <i class="material-icons-outlined">
                    edit
                </i>
                    Modifier
                </button>
            </div>
      </div>
      <div class="candidat-list">
         
      </div>
  </div>
</template>

<script>
export default {
  name:"Candidat"
}
</script>

<style>
 .candidat-form label, .candidat-form input{
    display: block;
  }

  .candidat-form{
    grid-area: candidat-form;
    width: 90%;
    margin: 25px auto;
  }

  .candidat-form input{
    border: none;
    border-bottom: solid 2px rgb(243, 242, 242);
    width: 100%;
    height: 25px;
    font-family: Helvetica, sans-serif;
    font-size: 15px;
  }

  .candidat-form select{
    border: none;
    border-bottom: solid 2px rgb(243, 242, 242);
    width: 100%;
    height: 25px;
    font-family: Helvetica, sans-serif;
    font-size: 15px;
    background-color: white;
  }

  .candidat-list{
    grid-area: candidat-list;
    background-color: rgb(243, 242, 242);
    margin: 50px;
  }

  .candidat{
      display: grid;
        grid-template-columns: repeat(2, 1fr);
         grid-gap:5px;
         grid-auto-rows: minmax(70px, auto);
      
         grid-template-areas: 
         "candidat-form candidat-list"
         ;
    }
   .input-candidat{
     margin: 15px;
   } 

   .competence-list{
     height: 70px;
     background-color:rgb(243, 242, 242);
     margin: 5px;
     border-radius: 5px;
     box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
   }
  @media only screen and (max-width:990px) {
    .candidat{
      display: grid;
        grid-template-columns: repeat(2, 1fr);
         grid-gap:5px;
         grid-auto-rows: minmax(70px, auto);
      
         grid-template-areas: 
         "candidat-form candidat-form"
         "candidat-list candidat-list"
         ;
    }

    .candidat-list, .candidat-form{
      width: 100%;
    }
  }
</style>





