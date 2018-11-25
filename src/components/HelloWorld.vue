<template>
  <div class="hello">
  <div>{{msg}}</div>
  <div v-if="!complete" >
     {{
       '我还在渲染 这里可以放骨架屏'
     }}
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import api from '../api/http.ts'
import NewsCell from './NewsCell/NewsCell.vue'
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
//  @Component({
//     components: {
//       NewsCell,
//     },
//   })
  private newsListShow!: News[];
  private complete!: boolean;
  private data() {
    return {
      newsListShow: [],
      complete: false,
    };
  }
  // constructor() {
  //   super();
  //   this.newsListShow = [];
  //   this.complete = false;
  // }
  private created(){
    this.setNewsApi()
  }
  private setNewsApi() { 
      api.JH_news('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.newsListShow = res.articles;
        this.complete = true
        console.log(this.newsListShow);    
      }).catch((err: any) => {
        this.complete = false;
        throw new Error(err);
      });;
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0rem;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 1.2rem;
  color:#fff;
  font-size:0.3rem;
}
.navActive{
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder{
  width:100%;
  height: 1rem;
}
</style>
