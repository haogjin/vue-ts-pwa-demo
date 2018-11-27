<template>
  <div class="home">
     <div v-if="!complete" >
     {{'我还在渲染 这里可以放骨架屏'}}
    </div>
   <div v-else v-for="(item, index) in newsListShow" :key="index">
      <news-cell
      :newsDate="item"
      :key="index"
      ></news-cell>
    </div> 
  </div>
</template>

<script lang="ts">
import { Component,  Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Getter, Mutation, namespace } from 'vuex-class'
import api from '../api/http.ts'
import NewsCell from '../components/NewsCell/NewsCell.vue'
// components 写法 从vue-property-decorator引入
 @Component({
    components: {
      NewsCell,
    },
  })
export default class Home extends Vue {
//  @Prop() private msg!: string; //prop写法

// @Getter private isCollapse;//作者
//@Action('toggleSideBar') toggleSideBar;
//@Mutation('toggleSideBar') toggleSide: any
// @Getter author;
@Mutation('SET_AUTHOR') SET_AUTHOR: any;
  private isCollapse!: boolean;
  private newsListShow!: News[];
  private complete!: boolean;
  // 定义方式1 
  private data() {
    return {
      isCollapse: false,
      newsListShow: [],
      complete: false,
    };
  }
  // 定义方式2
  // constructor() {
  //   super();
  //   this.isCollapse = false;
  //   this.complete = false;
  //   this.newsListShow = [];
  // }
   private created(): void {
    //console.log(555)
    this.setNewsApi()
    // vm.$store.commit('toggleSideBar', false)
    // vm.isCollapse = vm.$store.state.a.isCollapse
    //this.toggleSide(false);
    // this.SET_AUTHOR('666');
  }
   private setNewsApi() { 
    let vm = this
    api.JH_news('/news/index', 'type=top&key=123456')
    .then(res => {
      console.log(res);
      vm.newsListShow = res.articles;
      vm.complete = true
      console.log(this.newsListShow);    
    }).catch((err: any) => {
      vm.complete = false;
      throw new Error(err);
    });
  }
}
</script>
