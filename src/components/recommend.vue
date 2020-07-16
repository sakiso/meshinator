<template>
  <div id="app">

  <h2 class="text-center">Recommend!</h2>

  <br>

    <v-container>
      <v-row>

        <v-col class="text-center">
         行くべきお店は…<br>
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
  this.recommendRestaurantList = this.$store.state.resutaurantList.filter(el => el.chosenFlg == "1")
  console.log(this.$store.state.resutaurantList.filter(el => el.chosenFlg == "1"))
  }
}
</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>