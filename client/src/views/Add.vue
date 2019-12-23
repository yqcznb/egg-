<template>
  <div class="add">
    <van-uploader 
    :max-count="1" 
    v-model="fileList" 
    :after-read="afterRead">
    </van-uploader>
  </div>
</template>
<script>
export default {
  name: " add",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    afterRead(info) {
      console.log(info)
    }
  }
};
</script>
