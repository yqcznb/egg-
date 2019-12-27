<template>
  <div class="home">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <van-cell
      v-for="item in list"
      :key="item.id"
      @click="handelClick(item.id)"
    >
      <div class="list">
        <div class="left">
          <img :src="item.img" alt="图片">
        </div>
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="create-time">{{item.createTime}}</div>
        </div>
      </div>
    </van-cell>
    </van-list>
  </div>
</template>
<script>
import { Toast } from 'vant';
import moment from 'moment';
export default {
  name: " home",
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    handelClick(id){
      this.$router.push({
        path:"/detail",
        query:{
          id
        }
      })
    },
    onLoad() {
      fetch('/article/lists')
        .then(res=>res.json())
        .then(res=>{
          if(res.status == 200){
            this.loading = false;
            this.finished = true;
            this.list = res.data.map(item=>{
              if(item.createTime){
                item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss');
              }
              return item;
            });
          }else{
            this.$toast.fail(res.errMsg)
          }
        })
      
     
    }
  }
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: row;
}
.list .left, img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
}
.list .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.list .right .title {
  font-size: 18px;
}
.list .right .create-time {
  font-size: 12px;
  color: #9c9e9c;
}
</style>
