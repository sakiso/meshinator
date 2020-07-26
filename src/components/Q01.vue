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
              @click="restaurantListUpdateYes">
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
              large
              @click="restaurantListUpdateNo">
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
    //"はい"が選ばれたときのメソッド
    //候補に入れるもの
    restaurantListUpdateYes(){
      this.$store.commit(
        "updateRestaurantList" ,
        {restaurantId : ["03", "04", "06", "11", "13", "14", "15"] ,
        chosenOrFallOutFlg : "1"}
        );
    //脱落させるもの
      this.$store.commit(
        "updateRestaurantList" ,
        {restaurantId : ["10"] ,
        chosenOrFallOutFlg : "2"}
        );},

//"いいえ"が選ばれたときのメソッド
    restaurantListUpdateNo(){
      //脱落させるもの
      this.$store.commit(
        "updateRestaurantList" ,
        {restaurantId : ["04"] ,
        chosenOrFallOutFlg : "2"}
        );
    }
   }

}
</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>