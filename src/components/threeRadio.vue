<template>
<div id="app">

    <v-radio-group row v-model="checkedRadioBtn">
      <v-radio label="はい"          value="1"></v-radio>
      <v-radio label="どちらでもない" value="2"></v-radio>
      <v-radio label="いいえ"        value="3"></v-radio>
    </v-radio-group>

</div>
</template>

<script>
export default {
  name :"threeRadio",
  data:function(){
    return{
      checkedRadioBtn:'1'
      }
  }
}
</script>