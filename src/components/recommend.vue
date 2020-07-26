<template>
  <div id="app">

  <h2 class="text-center">Recommend!</h2>

  <br>

    <v-container>
      <v-row justify="center">

        <v-col class="text-center" cols="8">
         行くべきお店は…<br><br>

         <v-card
          max-width="400"
          color="teal darken-1"
          dark >
          <v-card-text>
          <v-list color="teal darken-1" class="body-1">
           <v-list-item v-for="item in recommendRestaurantList" v-bind:key="item">
             {{item}}
           </v-list-item>
         </v-list>
         </v-card-text>
         </v-card>


        </v-col>

    </v-row>
    
    <v-row>
      <v-col class="text-center">
       <v-btn
       color="light-blue darken-3"
       x-large
       dark>
        <router-link to="/" @click.native="initializeList()" class="no-line white-text">TOPに戻る</router-link>
        </v-btn>
      </v-col>
    </v-row>

    </v-container>

  </div>
</template>

<script>

export default {
  data : function(){
    return{
      recommendRestaurantList:[]
    }
  },

created :function(){
  //chosenFlg=1 かつ falOutFlg≠1 の 要素のみにフィルタしてwork配列に格納
  const work = this.$store.state.resutaurantList.filter( el =>
    el.chosenFlg == "1"
    && el.fallOutFlg != "1" )

  //work配列をforEachで回してrestaurantNameだけの配列にする
  work.forEach(el => {
   this.recommendRestaurantList.push(el.restaurantName)
  });
  },

 //フラグを立てたRestaurantListを初期化する（TOPに戻るときに発火）
 methods:{
    initializeList(){
      console.log("delete")
      this.$store.commit(
        "initializeRestaurantList");
    }
   }

}
</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }
 .white-text{
   color: #FFFFFF;
 }
</style>