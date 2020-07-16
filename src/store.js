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
    },
    {
      restaurantId : "03",
      restaurantName : "王将",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "04",
      restaurantName : "和っ黒",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "05",
      restaurantName : "うどん屋",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "06",
      restaurantName : "カッパハウス",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "07",
      restaurantName : "ピッツェリア ナポレターナ ラルデンツァ",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "08",
      restaurantName : "ヤオコーの惣菜",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "09",
      restaurantName : "やよい軒",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "10",
      restaurantName : "手打ちそば 弥兵衛",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "11",
      restaurantName : "サイゼリヤ",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "12",
      restaurantName : "むさし屋",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "13",
      restaurantName : "ダンダダン酒場",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "14",
      restaurantName : "中華の新規開拓",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "15",
      restaurantName : "イタリアンの新規開拓",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "16",
      restaurantName : "和食居酒屋の新規開拓",
      chosenFlg : " ",
      fallOutFlg : " ",
    },
    {
      restaurantId : "17",
      restaurantName : "すみれ",
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
      //chosenOrFallOutFlg が 1(chosen)のとき、ペイロードで受け取ったレストランIDの配列を回して候補フラグを立てる
      if(chosenOrFallOutFlg == "1"){        
        restaurantId.forEach(item =>
          state.resutaurantList.find(el => el.restaurantId == item).chosenFlg = 1
          )
      }
      //chosenOrFallOutFlg が 2(fall out)のとき、ペイロードで受け取ったレストランIDの配列を回して脱落フラグを立てる
      else if(chosenOrFallOutFlg == "2"){
        restaurantId.forEach(item =>
          state.resutaurantList.find(el => el.restaurantId == item).fallOutFlg = 1
        )
      }
    }
  }

});

//storeをエクスポート
export default store;

