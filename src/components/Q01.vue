<template>
  <div id="app">

  <h2 class="text-center">がっつり系？</h2>

  <br>
  <br>

  <div>
    <v-container>
      <v-row>

        <v-col class="text-center">
          <router-link to="/Q02" class="no-line">
            <v-btn
              rounded
              color="blue darken-2"
              dark
              large
              @click="restaurantListUpdate">
            はい
            </v-btn>
          </router-link>
        </v-col>

        <v-col class="text-center">
          <router-link to="/Q02" class="no-line">
            <v-btn
              rounded
              color="teal"
              dark
              large>
            どちらでもない
            </v-btn>
          </router-link>
        </v-col>

        <v-col class="text-center">
          <router-link to="/Q02" class="no-line">
            <v-btn
              rounded
              color="pink darken-3"
              dark
              large>
            いいえ
            </v-btn>
          </router-link>
        </v-col>


    </v-row>
    </v-container>
  </div>


  </div>
</template>

<script>
export default {
   props:["answerList"],
   data : function(){
    return{ restaurantId:"" }},

   methods:{
    updateAnswerListQ01(){
     console.log(this.answerlist)
    },
    restaurantListUpdate(){
      this.$store.commit(
        "updateRestaurantList" ,
        {restaurantId : ["03", "04", "06", "11", "13", "14", "15"] ,
        chosenOrFallOutFlg : "1"});
    }
   }

}
</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>