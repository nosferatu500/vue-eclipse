/**
 * Mocking client-server processing
 */
const _modules = [
  {'id': 1, 'name': 'vue-router', 'link': 'http://router.vuejs.org/'},
  {'id': 2, 'name': 'vuex', 'link': 'http://vuex.vuejs.org/'},
  {'id': 3, 'name': 'vue-loader', 'link': 'http://vue-loader.vuejs.org/'},
  {'id': 4, 'name': 'awesome-vue', 'link': 'https://github.com/vuejs/awesome-vue'}
]

export default {
  getModules (cb) {
    cb(_modules)
  }
}
