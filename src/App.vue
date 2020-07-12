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

{{answerList}}

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

  created:function(){
    this.answerList = [
      {
        RestaurantNo : "01",
        RestaurantName : "おいでまい",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "02",
        RestaurantName : "東家",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "03",
        RestaurantName : "王将",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "04",
        RestaurantName : "和っ黒",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "05",
        RestaurantName : "うどん屋",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "06",
        RestaurantName : "カッパハウス",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "07",
        RestaurantName : "ピッツェリア ナポレターナ ラルデンツァ",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "08",
        RestaurantName : "ヤオコーの惣菜",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "09",
        RestaurantName : "やよい軒",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "10",
        RestaurantName : "手打ちそば 弥兵衛",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "11",
        RestaurantName : "サイゼリヤ",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "12",
        RestaurantName : "むさし屋",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "13",
        RestaurantName : "ダンダダン酒場",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "14",
        RestaurantName : "中華料理屋（新規開拓）",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "15",
        RestaurantName : "イタリアン（新規開拓）",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "16",
        RestaurantName : "和食居酒屋（新規開拓）",
        ChosenGlg : " ",
      },
      {
        RestaurantNo : "17",
        RestaurantName : "何もなし",
        ChosenGlg : " ",
      }      
    ]}
}
</script>