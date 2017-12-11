<template>
  <div id="keyboard">
    <button class="box clear" @click="opt('clear')">AC</button>
    <button class="box minus" @click="opt('minus')">+/_</button>
    <button class="box percentage" @click="opt('per')">%</button>
    <button class="box" @click="inputKey('7')">7</button>
    <button class="box" @click="inputKey('8')">8</button>
    <button class="box" @click="inputKey('9')">9</button>
    <button class="box" @click="inputKey('4')">4</button>
    <button class="box" @click="inputKey('5')">5</button>
    <button class="box" @click="inputKey('6')">6</button>
    <button class="box" @click="inputKey('1')">1</button>
    <button class="box" @click="inputKey('2')">2</button>
    <button class="box" @click="inputKey('3')">3</button>
    <button class="zero box" @click="inputKey('0')">0</button>
    <button class="box" @click="inputKey('.')">.</button>
    <div class="operator">
      <button class="box operator division" @click="operator('/')">÷</button>
      <button class="box operator multiplication" @click="operator('*')">x</button>
      <button class="box operator subtraction" @click="operator('-')">-</button>
      <button class="box operator addition" @click="operator('+')">+</button>
      <button class="box operator equal" @click="opt('=')">=</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keyboard',
    data: function () {
      return {
      }
    },
    methods: {
      inputKey (num) {
        this.$emit('message', num)
        // console.log(this.$parent.message)
      },
      operator (opt) {
        this.$emit('calOpt', opt)
      },
      opt (keyOpt) {
        this.$emit('cal', keyOpt)
      }
    }
  }
</script>
<style>
</style>
