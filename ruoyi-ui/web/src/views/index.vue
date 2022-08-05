<template>
  <div>
    <div class="left">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>会议基础信息</span>
        </div>
        <div class="text item">
          <el-row>
            会议主题：关于腾讯会议-视频展业应用介绍
          </el-row>
          <el-row>
            会议时间：2022-08-02 12:00至15:00
          </el-row>
          <el-row>
            预计参会人数：200
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>会议文件</span>
        </div>
        <div class="file-item" @click="$router.push({path: '/ppt'})">
          <img src="@/assets/images/pdf-icon.png" class="image">
          <div class="file-name">ppt演示</div>
        </div>
      </el-card>
    </div>
    <div class="right">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>会议议程</span>
        </div>
        <p class="agenda">
          一、会议背景介绍
          <br/>
          二、结束会议
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    async config() {
      // get code
      const code = await this.getCode();
      console.log(code);
    },

    getCode() {
      return wemeet.permission.requestAuthCode({
        sdkId: process.env.VUE_APP_SDKID,
      })
        .then((resp) => {
          return resp.authCode
        })
        .catch((err) => {
          console.error(err)
        });
    }
  },
  created() {
    //鉴权
    this.config();
  }
};
</script>

<style scoped lang="scss">
.left {
  width: 35%;
  margin: 0 14px;
  display: inline-block;
  vertical-align: top;
}
.right {
  width: calc(100% - 35% - 14px - 14px - 14px);
  display: inline-block;
  vertical-align: top;
}
.box-card {
  margin-top: 14px;
  ::v-deep {
    .el-card__header {
      font-weight: bold;
    }
  }
}
.el-row {
  font-size: 14px;
  padding: 5px 0;
}

.file-item {
  display: inline-block;
  width: 100px;
  height: 100px;
  font-size: 14px;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
  }
  .file-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.file-item:hover {
  cursor: pointer;
}

.agenda {
  line-height: 30px;
  font-size: 14px;
  margin: 0;
}
</style>

