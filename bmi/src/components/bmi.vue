<script setup>
import {ref} from 'vue'
const height = ref(0);
const weight = ref(0);
const height_m =  computed(() => (height.value / 100).toFixed(2));
const calc = ()=>{

}
</script>

<template>
  <h1>BMI計算</h1>
  <div class="container">
    <form>
        <div class="mb-3">
            <label for="Height" class="form-label">身高(公尺)</label>
            <input type="text" class="form-control" id="Height" v-model="height_m">
        </div>
        <div class="mb-3">
            <label for="Weight" class="form-label">體重</label>
            <input type="text" class="form-control" id="Weight" v-model="weight">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div class="result alert alert-success mt-5">BMI結果</div>
    </form>
  </div>
</template>

<style scoped>

</style>
