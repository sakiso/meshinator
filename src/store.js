//routerの設定をするJSファイル

import Vue from 'vue';
import Vuex from 'vuex';

//明示的にvue-routerをインストール
Vue.use(Vuex);

//ストアインスタンス生成
const store = new Vuex.Store({
  
  //レストランID単位で、chosenフラグ（候補）, falloutフラグ（候補外）を保持する配列
  state:{
    resutaurantList:[{a:"storeだよ"}]
  },

  //レストランIDと、そのレストランがchosen(候補になった)かfall out(候補から外れた)かを引数に
  //state(ResutaourantList)のchosenフラグとfalloutフラグを更新するミューテーション
  mutations:{
    updateRestaurantList( /*state, RestaurantId, chosenOrFallOutFlg */ ){
      //ここにミューテーションで実行したい処理を書く
    }
  }

});

//storeをエクスポート
export default store;

