<template>
  <div id="calculator">
    <div class="wrapper">
      <screen  class="screen box" type="text" v-bind:text-display="message"></screen>
      <keyboard @message="inputKey($event), checkLength($event)" @cal="checkKeyboardOpt($event)" @calOpt="operate($event)"></keyboard>
    </div>
  </div>
</template>
<script>
  import Screen from './Screen.vue'
  import Keyboard from './Keyboard.vue'
  export default {
    name: 'calculator',
    components: {
      'screen': Screen,
      'keyboard': Keyboard
    },
    data () {
      return {
        value: '',
        message: '0',
        equation: '',
        cal: ''
      }
    },
    methods: {
      checkLength: function () {
        if (this.message.length > 16) {
          this.message = (parseFloat(this.message).toExponential(4)).toString()
        }
      },
      inputKey: function (num) {
        if (num === '.' && this.message.includes('.')) {
          return false
        } else if (this.message === '0') {
          this.message = num
          this.value = num
        } else {
          this.value += num
          console.log(this.value)
          this.message = this.value
        }
      },
      checkKeyboardOpt: function (cal) {
        switch (cal) {
          case 'clear':
            this.clear()
            break
          case 'minus':
            this.minus()
            break
          case 'per':
            this.percentage()
            break
          case '=':
            this.equalise()
            this.resetAfter()
            break
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
      operate: function (opt) {
        this.cal = opt
        this.equation += this.value
        this.message = (this.equation).toString()
        this.equation = this.message
        this.value = ''
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
      equalise: function () {
        if (this.equation === '') {
          return
        }
        if (this.cal !== '') {
          console.log(this.message)
        }
        switch (this.cal) {
          case '+':
            this.message = (parseFloat(this.equation) + parseFloat(this.message)).toString()
            break
          case '-':
            this.message = (parseFloat(this.equation) - parseFloat(this.message)).toString()
            break
          case '*':
            this.message = (parseFloat(this.equation) * parseFloat(this.message)).toString()
            break
          case '/':
            if (this.message === '0') {
              this.message = 'Error'
            } else {
              if (parseFloat(parseFloat(this.equation) / parseFloat(this.message)) - parseInt(parseFloat(this.equation) / parseFloat(this.message)) === 0) {
                this.message = (parseFloat(this.equation) / parseFloat(this.message)).toString()
              } else {
                this.message = parseFloat((this.message = (parseFloat(this.equation) / parseFloat(this.message)).toFixed(2)))
              }
            }
            break
        }
      },
      resetAfter: function () {
        this.value = ''
        this.cal = ''
        this.equation = ''
      }
    }
  }
</script>

<style>
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
#screen {
  grid-area: 1 / 1 / 2 / 5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #bdbdbd;
  text-align: right;
}
#keyboard {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 80px 80px 80px 80px 80px;
  grid-auto-flow: row;
  grid-area: 2 / 1 / 7 / 4;
}
#keyboard > .operator {
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: 80px 80px 80px 80px 80px;
  grid-auto-flow: row;
  grid-area: 1 / 4 / 7 / 5;
}
.zero{
  grid-area: 5/1/6/3;
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
