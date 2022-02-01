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
           <input type="time" name="heure">
        </div>
        <div class="filter-input date">
          <i class="material-icons-outlined date">
          calendar_today
          </i>
          <input type="date" name="date">
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
            <li>
              <h5 class="ent-titre">Titre de l'entretien</h5>
              <span class="ent-candidat"> Nom du candidat </span>
              <span class="ent-date">13/02/2000 à 15:30 </span>
            </li>
            <li>
              <h5 class="ent-titre">Titre de l'entretien</h5>
              <span class="ent-candidat"> Nom du candidat </span>
              <span class="ent-date">13/02/2000 à 15:30 </span>
            </li>
            <li>
              <h5 class="ent-titre">Titre de l'entretien</h5>
              <span class="ent-candidat"> Nom du candidat </span>
              <span class="ent-date">13/02/2000 à 15:30 </span>
            </li>
            <li>
              <h5 class="ent-titre">Titre de l'entretien</h5>
              <span class="ent-candidat"> Nom du candidat </span>
              <span class="ent-date">13/02/2000 à 15:30 </span>
            </li>
              <li>
              <h5 class="ent-titre">Titre de l'entretien</h5>
              <span class="ent-candidat"> Nom du candidat </span>
              <span class="ent-date">13/02/2000 à 15:30 </span>
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
     
     <span>Designed by myself & Copyright &copy; 2022</span>
     
    </footer>
  </div>
</template>

<script>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;*/
  color: #2c3e50;
}

/*#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/

body{
  top: 0%;
  margin: 0%;
  background-color: rgb(243, 242, 242);
  font-family: Arial, Helvetica, sans-serif;
}

.content{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(80px, auto);
    grid-gap:5px;

    grid-template-areas: 
    "header header header header"
    "section main main main"
    "section main main main"
    "section main main main"
    "section main main main"
    "section main main main"
    "section main main main"
    "section footer footer footer"
    ;
}

@media only screen and (max-width: 990px) {
    /* For mobile phones: */
    .content{
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         grid-gap:5px;
         grid-auto-rows: minmax(80px, auto);
      
         grid-template-areas: 
         "header header header header"
         "section section section section"
         "main main main main"
         "main main main main"
         "main main main main"
         "main main main main"
         "footer footer footer footer"
         ;
        
     }

      .header-content h3{
       text-align: center !important;
      }
     
     #agenda-filter{
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         grid-gap:5px;
         grid-auto-rows: minmax(auto, auto);
         grid-template-areas: 
          "heure date"
         ;  
     }

     div.filter-input input{
      width: 75% !important;
     }

      i.date{
       left: 58% !important;
       top: 15px!important;
      }

      i.heure{
         left: 7% !important;
         top: 15px!important;
         font-size: 17px !important;
      }

      main{
          margin: 5px 0px !important;
      }
}


/* Using Grid Area*/

header{
    grid-area: header;
    width: inherit;
    background-color: white;
    z-index: 1;
}

section{
    grid-area: section;
    border: solid 1px rgb(238, 238, 238);
    box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
    position: relative;
    top: -6px;
    background-color: white;
    margin-bottom: 0%;
    /*height: 638px;*/
    z-index: 1;
}


main{
    grid-area: main;
    background-color: white;
    border: solid 1px rgb(238, 238, 238);
    box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
    margin: 8px 15px;
    border-radius: 3px;
}

footer{
    grid-area: footer;
    background-color: white;
    position: relative;
    border: solid 1px rgb(238, 238, 238);
  
    right: -5px;
    left: -5px;
}

/* Header */
header div.header-nav{
   background-image: radial-gradient( circle 346px at 6.3% 95%,  rgba(87,213,255,1) 0%, rgba(146,109,255,1) 90% );
   box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
}
header ul{
  list-style: none;
  width: 75%;
  margin: 0 auto;
  padding: 0%;
  text-align: center;
}
header li{
  display: inline-block;
  padding: 15px;
  text-align: center;
}
.header-content h3{
  text-align: left;
  margin-left: 25px;
}
header ul a{
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 15px;
}
a.router-link-exact-active {
  border-top: solid 3px whitesmoke;
  border-bottom: solid 3px whitesmoke;
  padding: 5px;
}

/* Section */
    /* Filter */
div#agenda-filter{
  border-bottom: solid 1px rgb(243, 242, 242);
  padding: 10px;
}

div#agenda-list .all-list{
 height: 422px;
 overflow-y: scroll;
 /*scrollbar-width: thin;*/
  scrollbar-color: white white;
  scrollbar-width: thin;
}


div#agenda-filter input{
  display: block;
  margin: 6px auto;
  background-color: rgb(243, 242, 242);
  border-radius: 3px;
  padding: 6px;
  border: none;
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  width: 50%;
  text-align: right;
}

div#agenda-filter input:hover{
 background-color: white;
 box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
}

div#agenda-filter i{
 position: absolute;
 padding: 7px;
 font-size: 16px;
 text-align: center;
 left: 25%;
}

div.heure{
  grid-area: heure;
}

div.date{
  grid-area: date;
}

    /* All Agenda */
      /* Todays & all-list */
     .today ul, .all-list ul{
       list-style: none;
       padding: 0%;
       margin: 0%;
     } 
     .today h5{
       margin: 0%;
       margin-left: 20px;
       margin-top: 10px;
       margin-bottom: 10px;
     }

     .today h5.ent-titre, .all-list h5.ent-titre{
       margin: 0%;
     }

     .today li, .all-list li{
       border-radius: 10px;
       width: 85%;
       margin: 5px auto;
       padding: 15px;
       background-color: aliceblue;
       color: rgb(63, 63, 63);
     }

     .today li span, .all-list li span{
       font-family: Helvetica, sans-serif;
       font-size: 14px;
     }

     .today{
       border-bottom: solid 1px rgb(243, 242, 242);
       padding-bottom: 5px;
       margin-bottom: 5px;
     }

      .today li{
       border-radius: 10px;
       width: 85%;
       margin: 5px auto;
       padding: 15px;
       background-color: rgb(97, 173, 240);
       box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
       color: white;
     }

     .today li i{
       position: absolute;
       left: 75%;
     }
  /* Main */

  /* Footer */
  footer img{
    width: 25px;
  }
  footer ul{
    list-style: none;
    width: 10%;
    margin: 10px auto;
    padding: 0;
  }

  footer ul li{
    display: inline;
    margin: 5px;
  }

  footer span{
   position: relative;
   left: 37.5%;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   font-size: 14px;
   color: #484b4e;
  }
  

</style>
