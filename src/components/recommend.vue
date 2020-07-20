<template>
  <div id="app">

  <h2 class="text-center">Recommend!</h2>

  <br>

    <v-container>
      <v-row>

        <v-col class="text-center">
         行くべきお店は…<br><br>
         <ul>
           <li v-for="item in recommendRestaurantList" v-bind:key="item">
             {{item}}
           </li>
         </ul>


        </v-col>

    </v-row>
    
    <v-row>
      <v-col class="text-center">
        <router-link to="/">TOPに戻る</router-link>
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
  //chosenFlgが1の要素のみにフィルタしてwork配列に格納
  const work = this.$store.state.resutaurantList.filter(el => el.chosenFlg == "1")

  //work配列をforEachで回してrestaurantNameだけの配列にする
  work.forEach(el => {
   this.recommendRestaurantList.push(el.restaurantName)
  });
  }
}
</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>