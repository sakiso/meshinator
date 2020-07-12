<template>
  <div id="app">

  <h2 class="text-center">野菜の気分？</h2>

  <br>

  <div>
    <v-container>
      <v-row>

        <v-col class="text-center">
          <router-link to="/Q06" class="no-line">
            <v-btn
              rounded
              color="blue darken-2"
              dark
              large>
            はい
            </v-btn>
          </router-link>
        </v-col>

        <v-col class="text-center">
          <router-link to="/Q06" class="no-line">
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
          <router-link to="/Q06" class="no-line">
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
   props:["answerList"]
}
</script>


<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>