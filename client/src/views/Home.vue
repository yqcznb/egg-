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
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
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
.left .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.left .right .title {
  font-size: 18px;
}
</style>
