const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: 'https://www.google.com',
    }
  },
  // v-bind 用法
  // template: '<a :href="url" target="_blank">Google</a>'
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    }
  }
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