<template>
  <div class="app-container home">
    当前计数：{{ num }}
    <el-button type="primary" @click="add">+1</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      webSocket: null
    };
  },
  methods: {
    add() {
      this.webSocket.send(1);
    }
  },
  created() {
    this.webSocket = new WebSocket('ws://localhost:8080/websocket/computer');
    this.webSocket.onmessage  = data => {
      console.log("onmessage");
      console.log(data.data);
      this.num = data.data;
    };
    this.webSocket.onopen = () => {
      console.log("onopen");
    };
    this.webSocket.onerror  = () => {
      console.log("onerror");
    };
    this.webSocket.onclose   = () => {
      console.log("onclose");
    };
  },
};
</script>

<style scoped lang="scss"></style>