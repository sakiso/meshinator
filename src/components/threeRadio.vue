<template>
<div id="app">

    <v-radio-group row v-model="hoge">
      <v-radio label="はい"          value="1"></v-radio>
      <v-radio label="どちらでもない" value="2"></v-radio>
      <v-radio label="いいえ"        value="3"></v-radio>
    </v-radio-group>

{{hoge}}

</div>
</template>

<script>
export default {
  name :"threeRadio",
  data:function(){
    return{
      hoge:'1'
      }
  }
}
</script>