<script setup>
import {ref} from 'vue'
const textColor = ref('white');
const fontSize1 = ref('2rem')
const is_purple = ref(true);
const email = ref('');
const pass = ref('');
const box_color =ref('');
function textChangeColor(){
    textColor.value = 'black';
}
function getData(){
    console.log('email:',email.value);
    console.log('password:',pass.value);

}
function changeBoxColor(color){
    box_color.value = color;
}
</script>

<template>
<div class="box" :class="{'bgColor':is_purple}" :style="{color: textColor, fontSize: fontSize1, backgroundColor: box_color}" @click="textChangeColor">
AF
</div>
<div class="container mt-3">
    <button class="btn btn-secondary me-3" @click="changeBoxColor('red')">紅色</button>
    <button class="btn btn-secondary me-3" @click.once="changeBoxColor('orange')">橘色</button>
    <button class="btn btn-secondary me-3" @click.right="changeBoxColor('lightblue')">粉藍色</button>
    <button class="btn btn-secondary me-3" @click.middle="changeBoxColor('lightgreen')">綠色</button>
    <button class="btn btn-secondary me-3" @wheel.passive="changeBoxColor('purple')">紫色</button>
</div>
<div class="container">
    <form method="get" @submit.prevent="getData">
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" name="Email" v-model="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="pass">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
</template>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    margin-top: 2rem;
    background-color: tomato;
}
.bgColor{
    background-color:purple;
}
</style>