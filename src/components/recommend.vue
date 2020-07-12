<template>
  <div id="app">

  <h2 class="text-center">Recommend!</h2>

  <br>

    <v-container>
      <v-row>

        <v-col class="text-center">
         行くべきお店は…<br>
         ・○○<br>
         ・○○<br>
         ・○○<br><br>
         です！<br>
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

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>