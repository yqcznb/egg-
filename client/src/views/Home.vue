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
      :key="item"
    >
      <div class="list">
        <div class="left">
          <img :src="item.img" alt="">
        </div>
        <div class="rig">
          <div class="title">{{item.title}}</div>
          <div class="create-time">{{item.createTime}}</div>
        </div>
      </div>
    </van-cell>
    </van-list>
  </div>
</template>
<script>
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
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        this.finished = true;
        this.list = [
          {
            id:1,
            "title": "11",
            "img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3134588255,1963050315&fm=26&gp=0.jpg",
            "summary": '222',
            "content": '333',
            "createTime": '2019-12-25 08:53:07'
          }
        ]
      
      }, 1000);
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
.left .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.left .right .title {
  font-size: 18px;
}
.left .right .create-time {
  font-size: 12px;
  color: #9c9e9c;
}
</style>
