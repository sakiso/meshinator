<template>
  <div id="app">

  <h2 class="text-center">魚の気分？</h2>

  <br>
  <br>

  <div>
    <v-container>
      <v-row>

        <v-col class="text-center">
          <router-link to="/Q04" class="no-line">
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
          <router-link to="/Q04" class="no-line">
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
          <router-link to="/Q04" class="no-line">
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
        {restaurantId : ["01", "02", "09", "16"] ,
        chosenOrFallOutFlg : "1"}
        );
    //脱落させるもの なし
    },

  //"いいえ"が選ばれたときのメソッド なし
    restaurantListUpdateNo(){
      //脱落させるもの
      return
    }
   }}
</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>