<script setup>
import {computed, ref} from 'vue'
const height = ref(0);
const weight = ref(0);
const height_m = ref(0);
let bmi = ref(0);
let bmi_result = ref('');
let bg_color = ref('alert_primary');
function calc (){
  height_m.value = height.value / 100
  bmi.value = (weight.value / Math.pow(height_m.value, 2)).toFixed(2);
  console.log(bmi);
  
  if(bmi.value<18.5){
    bmi_result.value=bmi.value+',體重過輕';
    bg_color.value = 'alert-warning';
  }else if(bmi.value<24){
    bmi_result.value=bmi.value+',體重正常';
    bg_color.value = 'alert-success';
  }else{
    bmi_result.value=bmi.value+'體重過重';
    bg_color.value = 'alert-danger';
  }
}
</script>

<template>
  <h1>BMI計算</h1>
  <div class="container">
    <form @submit.prevent="calc">
        <div class="mb-3">
            <label for="Height" class="form-label">身高(公尺)</label>
            <input type="text" class="form-control" id="Height" v-model="height">
        </div>
        <div class="mb-3">
            <label for="Weight" class="form-label">體重</label>
            <input type="text" class="form-control" id="Weight" v-model="weight">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div class="result alert mt-5" :class="bg_color">{{ bmi_result }}</div>
    </form>
  </div>
</template>

<style scoped>

</style>
