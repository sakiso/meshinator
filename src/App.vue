<template>
  <div id="app">
  <v-app>


  <v-app-bar color="teal darken-1" dark app>
     <v-toolbar-title>MESHI nator</v-toolbar-title>
  </v-app-bar>
  <br><br><br><br>

  <!-- <v-container fluid>
    <v-row> 
     <v-col>

      <threeRadio></threeRadio>

     </v-col>
   </v-row>
  </v-container> -->

  <router-view></router-view>

 
  </v-app>
  </div>
</template>

<script>
//import threeRadio from "./components/threeRadio";
export default {
  name: 'App',
  components: {
//    threeRadio
  }
}
</script>