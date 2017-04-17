<template lang="pug">
  .hello
    .container
      h1 \{{ msg }}
      h1 \{{ msg2 }}
      br
      hr
      br
    .row
        .col-md-5.col-md-offset-1
          h2 Essential Links
          ul
            li: a(href="https://vuejs.org" target="_blank") Core Docs
            li: a(href="https://forum.vuejs.org" target="_blank") Forum
            li: a(href="https://gitter.im/vuejs/vue" target="_blank") Gitter Chat
            li: a(href="https://twitter.com/vuejs" target="_blank") Twitter
            br
            li: a(href="https://github.com/nosferatu500/eclipse-vue/" target="_blank") Docs for This Template
        .col-md-5
          h2 Ecosystem
          ul
            li(v-for="m in modules"): a(:href="m.link" target="_blank") \{{ m.name }}
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue-Eclipse App.',{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      msg2: 'Based on Vue.js. Created for You.'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}},
  computed: mapGetters({
    modules: 'allModules'
  }),
  created () {
    this.$store.dispatch('getAllModules')
  }
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

@media screen and (max-width: 400px)
  h1:first-child
    font-size: 24px
  h1:nth-child(2)
    font-size: 20px
  hr
    margin: 0
  h2:nth-child(1)
    margin-top: 40px

</style>
