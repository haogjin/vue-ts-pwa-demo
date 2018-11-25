<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Getter, Mutation, namespace } from 'vuex-class'
@Component({
  components: {
    HelloWorld,
  },
})
// const ModuleMutation = namespace('a', Mutation)
export default class Home extends Vue {
// @Getter private isCollapse;//作者
//@Action('toggleSideBar') toggleSideBar;
//@Mutation('toggleSideBar') toggleSide: any
// @Getter author;
@Mutation('SET_AUTHOR') SET_AUTHOR: any;

private isCollapse: boolean;
  // private data() {
  //   return {
  //     isCollapse: false,
  //   };
  // }
  constructor() {
    super();
    this.isCollapse = false;
  }
 
   private created(): void {
    const vm = this;
    console.log(vm.$store)
    // vm.$store.commit('toggleSideBar', false)
    // vm.isCollapse = vm.$store.state.a.isCollapse
    //this.toggleSide(false);
    this.SET_AUTHOR('666');
    
    console.log( vm.isCollapse)
  }
}
</script>
