new Vue({
   el:'#rolas',
   data: {
      name: 'Villancicos',
      songs: [
         {
            name: 'Los peces en el río',
            id: 'los-peces-en-el-rio',
         },

         {
            name: 'A la nanita nana',
            id: 'nanita-nana',
         },

         {
            name: 'Adeste fideles',
            id: 'adeste-fideles',
         },

         {
            name: 'Campana sobre campana',
            id: 'campana-sobre-campana',
         },
         {
            name: 'En el portal de Belén',
            id:'en-el-portal-de-belen'
         },
         {
            name: 'Gloria in excelsis Deo',
            id:'gloria-in-excelsis'
         }
      ]
   },
   methods: {
      changeName: function(e){
         // console.log(this.name);
         this.name = e.target.value;
      }
   }
})















// var rolas = new Vue({
//    el: '#rolas',
//    data: {
//       items: [
//          {
//             nombre: 'A la nanita nana',
//             id: 'a-la-nanita-nana',
//             urlVideo: '7Oxe5zJfG2w'
//             // letra:
//          },
//          {
//             nombre:  'Vamos vamos pastorcitos',
//             id:'vamos-vamos-pastorcitos',
//             urlVideo: 'D7VlNxgknjo'
//          }
//       ]
//    }
// });

// Campana sobre campana
// En el portal de Belén
// Pastores venid
// Una pandereta suena
// Los gitanillos
// Gloria in excelsis
// Los 5 monaguillos
// El burrito sabanero

// Hacia Belén va una burra
// Vamos pastores vamos
// Noche de paz
// Adestes Fideles
// Los peces en el río
// Cuando la luna
// Pecos Bill