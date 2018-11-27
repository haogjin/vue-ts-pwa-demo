<template>
  <section>
    <van-row class="wrap" @click="toDetail">
      <van-col span="16">
        <div class="detail-info">{{newsDate.title}}</div>
        <div class="detail-info">{{newsDate.author_name}}</div>
        <div class="detail-info">{{newsDate.date}}</div>  
      </van-col>
      <van-col span="8">
        <img :src="newsDate.thumbnail_pic_s" style="width:90px;height:90px;">
      </van-col>
    </van-row>  
  </section>
</template>
 <style lang="scss">
 @import '../../style/common.scss';
 .wrap{
    border-bottom:1px solid #dfdfdf;
    margin:10px 10px
    ;padding:10px 0;
 }
 .detail-info{
   @include fontSize();
 }
 </style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import api from '../api/http.ts'
@Component
export default class NewsCell extends Vue {
  @Prop() private newsDate!: any; 
  private toDetail() {
    console.log(222)
    window.addEventListener('touchmove', func, { passive: false })
   //  window.location.href = this.newsDate? this.newsDate.url : ''
  }

}
</script>
 
<style lang="scss">
</style>