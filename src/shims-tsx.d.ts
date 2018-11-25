import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  // 自定义接口
  interface News {
    author_name: string;
    date: string;
    thumbnail_pic_s: string;
    title: string;
  }
}


