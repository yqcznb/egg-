<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
    <div class="create-time">{{detail.createTime}}</div>
  </div>
</template>
<script>
export default {
  name: " detail",
  data(){
    return {
      detail: {
        id:1,
        title: "111111111 111111111111111",
        "img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3134588255,1963050315&fm=26&gp=0.jpg",
        "summary": '222',
        "content": '333',
        "createTime": '2019-12-25 08:53:07'
      }
    }
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
