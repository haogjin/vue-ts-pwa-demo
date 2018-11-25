<template>
  <section class="financial-list">
    <section class="collect" @click="jumpPage">
      <aside>
        <h2>{{newsDate ? newsDate.title : ''}}</h2>
        <section class="Cleft clearfix">
          <img class="fl" src="../../assets/logo.png" style="width:0.24rem;height:0.2rem;">
          <span class="fl">{{newsDate ? newsDate.author_name : ''}}</span>
        </section>
        <section class="Cright">
          <img src="../../assets/logo.png" style="width:0.2rem;height:0.2rem;">
          <span>{{newsDate ? newsDate.date : ''}}</span>
        </section>
        <div style="clear: both"></div>
      </aside>
      <aside>
        <img :src="newsDate ? newsDate.thumbnail_pic_s : ''" style="border-radius: 0.2rem;">
      </aside>
      <div style="clear: both"></div>
    </section>
  </section>
</template>
 
<script lang="ts">
// export default {
//   name: 'NewsCell',
//   props: {
//     newsDate: Object
//   },
//   data () {
//     return {
//     }
//   },
//   computed: {
//   },
//   methods: {
//     jumpPage: function () {
//       window.location.href = this.newsDate.url
//     }
//   }
// }
import { Component, Prop, Vue } from 'vue-property-decorator';
import api from '../api/http.ts'
import NewsCell from './NewsCell/NewsCell.vue'
@Component
export default class NewsCell extends Vue {
  @Prop() private newsDate!: any; 
  private jumpPage() {
    window.location.href = this.newsDate? this.newsDate.url : ''
  }

}
</script>
 
<style lang="scss" src="./NewsCell.scss" >
</style>