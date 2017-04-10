<template>
  <div class="hello">
    <div class="container">
      <h1>\{{ msg }}</h1>
      <h1>\{{ msg2 }}</h1>
      <br>
      <hr>
      <br>
    </div>
    <div class="row">
        <div class="col-md-1"></div>      
        <div class="col-md-5">
          <h2>Essential Links</h2>
          <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="https://github.com/nosferatu500/eclipse-vue/" target="_blank">Docs for This Template</a></li>
          </ul>
        </div>
        <div class="col-md-5">
          <h2>Ecosystem</h2>
          <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
          </ul>
        </div>
        <div class="col-md-1"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue-Eclipse App.',{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      msg2: 'Based on Vue.js. Created for You.'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h1, h2 
  font-weight: normal

h1:first-child
  font-size: 48px

ul 
  list-style-type: none
  padding: 0


li 
  display: inline-block
  margin: 0 10px


a
  color: #42b983

hr
  border-top: 3px solid #42b983


</style>
