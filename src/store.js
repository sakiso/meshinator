//routerの設定をするJSファイル

import Vue from 'vue';
import Vuex from 'vuex';

//明示的にvue-routerをインストール
Vue.use(Vuex);

//ストアインスタンス生成
const store = new Vuex.Store({
  
  //レストランID単位で、chosenフラグ（候補）, falloutフラグ（候補外）を保持する配列
  state:{
    resutaurantList:[
    {
      restaurantId : "01",
      restaurantName : "おいでまい",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "02",
      restaurantName : "東家",
      chosenFlg : " ",
      fallOutFlg : " ",
    }
    ]
  },

  //レストランIDと、そのレストランがchosen(候補になった)かfall out(候補から外れた)かを引数に
  //state(ResutaourantList)のchosenフラグとfalloutフラグを更新するミューテーション
  mutations:{
    //レストランIDと候補・脱落フラグを引数に、レストランの候補・脱落状態を更新します
    //chosenOrFallOutFlg =1(Chosen),2(FallOut)
    updateRestaurantList( state, {restaurantId, chosenOrFallOutFlg}){
      //chosenOrFallOutFlg が 1(chosen)のとき、候補フラグに"1"を立てる
      if(chosenOrFallOutFlg == "1"){
        state.resutaurantList.find(el => el.restaurantId == restaurantId).chosenFlg = 1
      }
      else if(chosenOrFallOutFlg == "1"){
        state.resutaurantList.find(el => el.restaurantId == restaurantId).fallOutFlg = 1
      }
    }
  }

});

//storeをエクスポート
export default store;

