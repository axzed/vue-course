const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: 'https://www.google.com',
      raw_url: '<a href="https://www.google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  // v-bind 用法
  // template: '<a :href="url" target="_blank">Google</a>'
  methods: {

    increment() {
      this.age++;
    },
    updateLastName(msg, e) {
      // event.preventDefault() 阻止默认行为
      // event.preventDefault();
      // console.log(msg)
      this.lastName = e.target.value;
    },
  },
  computed: {
    fullName() {
      console.log('Full name computed property was called!')
      // this.age
      // if you add age, you change age will trigger this function
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newAge, oldAge) {
      setTimeout(() => {
        this.age = 20;
      }, 3000)
    }
  },
}).mount('#app');

// setTimeout(() => {
//   vm.firstName = 'xue';
// }, 2000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'xue',
//       lastName: 'wenchao'
//     }
//   }
// }).mount('#app2');