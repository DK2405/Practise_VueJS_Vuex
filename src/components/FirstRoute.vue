<template>
   <div>
       Hello {{ $route.params.name }}

  <div id="calculator">
    <div class="wrapper">
      <button class="box clear" v-on:click="clear">AC</button>
      <button class="box" v-on:click="input('7')">7</button>
      <button class="box" v-on:click="input('4')">4</button>
      <button class="box" v-on:click="input('1')">1</button>
      <button class="box minus" v-on:click="minus">+/_</button>
      <button class="box" v-on:click="input('8')">8</button>
      <button class="box" v-on:click="input('5')">5</button>
      <button class="box" v-on:click="input('2')">2</button>
      <button class="zero box" v-on:click="input('0')">0</button>
      <button class="box percentage" v-on:click="percentage">%</button>
      <button class="box" v-on:click="input('9')">9</button>
      <button class="box" v-on:click="input('6')">6</button>
      <button class="box" v-on:click="input('3')">3</button>
      <button class="box" v-on:click="input('.')">.</button>
      <!--<input id="screen" type="text" v-model="message" />-->
      <input class="box screen" type="text" v-model="message"></input>
      <button class="box operator division" v-on:click="operator('/')">÷</button>
      <button class="box operator multiplication" v-on:click="operator('*')">x</button>
      <button class="box operator subtraction" v-on:click="operator('-')">-</button>
      <button class="box operator addition" v-on:click="operator('+')">+</button>
      <button class="box operator equal" v-on:click="equal">=</button>
    </div>
  </div>
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  name: 'firstroute',
  data () {
    return {
      value: '',
      message: '0',
      equation: '',
      cal: ''
    }
  },
  methods: {
    check_leght: function () {
      if (this.message.length > 17) {
        this.message = (parseFloat(this.message).toExponential(4)).toString()
      }
    },
    input: function (key) {
      if (key === '.' && this.message.includes('.')) {
        return false
      } else if (this.message === '0') {
        this.message = key
        this.value = key
      } else {
        this.value += key
        console.log(this.value)
        this.message = this.value
//        console.log(this.value += key)
      }
    },
    clear: function () {
      if (this.message === '0') {
        this.equation = ''
      } else {
        this.message = '0'
        this.value = ''
        this.equation = ''
      }
    },
    operator: function (opt) {
      this.cal = opt
      this.equation += this.value
      this.message = (this.equation).toString()
      this.equation = this.message
//      this.equation += opt
      this.value = ''
      console.log(this.equation)
      console.log(this.cal)
    },
    percentage: function () {
      this.equation = ''
      this.message = (this.message / 100).toString()
      this.value = this.message
    },
    minus: function () {
      if (this.message === 0) {
        return false
      }
      this.equation = ''
      if (this.message[0] === '-') {
        this.message = this.message.substr(1)
      } else {
        this.message = '-' + this.message
      }
      this.value = this.message
    },
    equal: function () {
      if (this.equation === '') {
        return
      }
      if (this.cal !== '') {
        console.log(this.message)
      }
      if (this.cal === '+') {
        console.log(parseFloat(this.equation) + parseFloat(this.message))
        this.message = (parseFloat(this.equation) + parseFloat(this.message)).toString()
      } else if (this.cal === '-') {
        this.message = (parseFloat(this.equation) - parseFloat(this.message)).toString()
      } else if (this.cal === '*') {
        this.message = (parseFloat(this.equation) * parseFloat(this.message)).toString()
      } else if (this.cal === '/') {
        if (parseFloat(parseFloat(this.equation) / parseFloat(this.message)) - parseInt(parseFloat(this.equation) / parseFloat(this.message)) === 0) {
          this.message = (parseFloat(this.equation) / parseFloat(this.message)).toString()
        } else {
          this.message = parseFloat((this.message = (parseFloat(this.equation) / parseFloat(this.message)).toFixed(2)))
        }
      }
      this.value = ''
      this.cal = ''
      this.equation = ''
//      this.message
    }
  }
}
</script>

<style scoped>

* {
  padding: 0;
  margin: 0;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}
#calculator {
  background-color: #bdbdbd;
  width: 400px;
  height: 520px;
  border: 1px black solid;
  margin: 10px auto;
  border-radius: 10px;
}
.box {
  background-color: #e0e0e0;
  color: black;
  margin: -0.5px;
  padding: 18px;
  font-size: 250%;
  text-align: center;
  font-weight: 500;
  border: #9E9E9E 1.3px solid;
}
.box:hover {
  filter: opacity(0.8);
}
.screen {
  grid-area: 1 / 1 / 2 /5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #bdbdbd;
  text-align: right;
}
.zero{
  grid-area: 6/1/7/3;
  border-bottom-left-radius: 10px;
}
.equal{
  border-bottom-right-radius: 10px;
}
.operator {
  background-color: #F79231;
  color: #fff;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: 120px 80px 80px 80px 80px 80px;
  grid-auto-flow: column;
}

</style>
