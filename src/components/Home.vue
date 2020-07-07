<template>
  <div>
    <el-container>
      <el-header>
        <div class="HomeLogo"><img src="../assets/logo.png" alt />商城后台管理系统</div>
        <div class="HomeQuit"><el-button type="info" class="quit">退出</el-button></div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: white;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: white;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-container {
  height: 100vh;
}
.el-header {
  padding-left: 10px;
  background-color: #666;
  display: flex;
  justify-content: space-between;
}
.HomeLogo{
    height: 100%;
}
.HomeLogo img {
  margin-right: 20px;
  height: 100%;
  vertical-align: middle;
}
</style>