<template>
  <div id="app">
  <v-app>


  <v-app-bar color="teal darken-1" dark app>
     <v-toolbar-title>MESHI nator</v-toolbar-title>
  </v-app-bar>
  <br><br><br><br>
  
  <router-view
   :answerList="answerList">
  </router-view>

  </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return{
      answerList:[]
    }
  },
}
</script>