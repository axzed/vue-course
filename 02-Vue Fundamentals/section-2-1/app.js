const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: 'https://www.google.com',
      raw_url: '<a href="https://www.google.com" target="_blank">Google</a>'
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