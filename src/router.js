//routerの設定をするJS

//import
import Vue from 'vue';
import router from 'vue-router';

//component読み込み
import top from "./components/top"
import Q01Gatsuri from "./components/Q01"
import Q02Meat from "./components/Q02"
import Q03Fish from "./components/Q03"
import Q04Chicken from "./components/Q04"
import Q05Vegetable from "./components/Q05"
import Q06Ramen from "./components/Q06"
import Q07Izakaya from "./components/Q07"
import Q08Reasonable from "./components/Q08"
import Q09Cool from "./components/Q09"
import Q10Quick from "./components/Q10"
import recommend from "./components/recommend"

//明示的にvue-routerをインストール
Vue.use(router);

//routerインスタンス生成
export default new router({
  routes:[
    {
        path: "/", //トップページ
        component:top
      },
      
      {
        path: "/Q01", //がっつり系？
        component:Q01Gatsuri
      },
       
      {
        path: "/Q02", //肉の気分？
        component:Q02Meat
      },
      
      {
        path: "/Q03", //魚の気分？
        component:Q03Fish
      },
      
      {
        path: "/Q04", //鶏の気分？
        component:Q04Chicken
      },
      
      {
        path: "/Q05", //野菜の気分？
        component:Q05Vegetable
      },
      
      {
        path: "/Q06", //ラーメン？
        component:Q06Ramen
      },
      
      {
        path: "/Q07", //居酒屋？
        component:Q07Izakaya
      },
      
      {
        path: "/Q08", //安いお店？
        component:Q08Reasonable
      },
      
      {
        path: "/Q09", //洒落たお店？
        component:Q09Cool
      },
      
      {
        path: "/Q10", //手早く済ませたい？
        component:Q10Quick
      },

      {
        path: "/recommend" ,//提案ページ
        component:recommend
      }  
  ]
});
