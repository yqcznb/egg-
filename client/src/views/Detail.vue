<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
    <div class="create-time">{{detail.createTime}}</div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import moment from 'moment';
export default {
  name: " detail",
  data(){
    return {
      detail: {
        id:undefined,
        title: undefined,
        img: undefined,
        summary: undefined,
        content: undefined,
        createTime: undefined
      }
    }
  },
  created(){
    fetch('/article/detail/'+this.$route.query.id)
        .then(res=>res.json())
        .then(res=>{
          if(res.status == 200){
            this.detail = res.data;
            this.detail.createTime = res.data.createTime ? moment(res.data.createTime).format('YYYY-MM-DD HH:mm:ss') : undefined;  
          }else{
            this.$toast.fail(res.errMsg)
          }
        })
  }
};
</script>
<style lang="scss" scoped>
.detail{
  padding: 20px;
  text-align: left;
  .title{
    font-size: 25px;
    padding-bottom: 20px;
  }
  .summary{
    padding: 20px;
    background: #dcdcdc;
  }
  .content {
    text-indent: 2em;
    line-height: 200%;
    padding-bottom: 20px;
  }
  .create-time{
    color: #9c9c9c;
    text-align: right;
  }
}
</style>
