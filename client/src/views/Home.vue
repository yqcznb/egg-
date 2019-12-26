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
            title: "111111111 111111111111111",
            "img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3134588255,1963050315&fm=26&gp=0.jpg",
            "summary": '222',
            "content": '333',
            "createTime": '2019-12-25 08:53:07'
          },
           {
            id:2,
            "title": "22",
            "img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3134588255,1963050315&fm=26&gp=0.jpg",
            "summary": '222',
            "content": '333',
            "createTime": '2019-12-25 08:53:07'
          },
           {
            id:3,
            "title": "33",
            "img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3134588255,1963050315&fm=26&gp=0.jpg",
            "summary": '222',
            "content": '333',
            "createTime": '2019-12-25 08:53:07'
          }
        ]
      }, 500);
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
