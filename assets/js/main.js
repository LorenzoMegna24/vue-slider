const { createApp } = Vue

createApp({
  data() {
    return {
      attiva: 0,

      movies:{
        image:[
          'assets/img/01.webp',
          'assets/img/02.webp',
          'assets/img/03.webp',
          'assets/img/04.webp',
          'assets/img/05.webp',
        ],
        title:[
          'Marvel\'s Spiderman Miles Morale',
          'Ratchet & Clank: Rift Apart',
          'Fortnite',
          'Stray',
          "Marvel's Avengers",
        ],
        text:[
          'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
          'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
          "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
          'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        ],
      }
    }
    
  },
  methods: {

    prev(){

      this.attiva--

      if ( this.attiva < 0 ) {
        this.attiva = this.movies.image.length - 1
      }
    },

    next(){

      this.attiva++

      if ( this.attiva > this.movies.image.length - 1 ) {
        this.attiva = 0
      }
    },

    cambiaImg(x){
      this.attiva = x 
    }
    

  }
}).mount('#app')