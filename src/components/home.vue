<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul>
          <li v-for="(item,index) in arrayexample" v-bind:key="index">{{item}}</li>
        </ul>
      </div>
      <div class="col">{{arrayexample2.eyeColor}}</div>
      <div class="col">
        <div v-for="(item,index) in arrayexample3" v-bind:key="index">
          {{item.firstName}}
          {{item.eyeColor}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arrayexample: [1, 2, 3, 4, 5],
      arrayexample2: {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
      },
      arrayexample3: [
        { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
        { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
        { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
        { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
        { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
        { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }
      ]
    };
  }
};
</script>