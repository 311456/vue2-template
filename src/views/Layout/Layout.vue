<template>
  <div class="layout">
    <el-container>
      <el-header class="header"><Navbar /> </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="/layout/home"
            class="el-menu-vertical-demo"
            router
          >
            <el-menu-item index="/layout/home">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/layout/profile">
              <i class="el-icon-menu"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-card class="box-card">
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Navbar } from "@/components/index";
export default {
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.el-header {
  width: 100%;
  height: 80px !important;
  background-image: url("../../assets/header.png");
  background-size: cover;
  line-height: 80px;
  color: white;
  font-size: 22px;
}
.is-active {
  background-color: #ecf5ff;
}
</style>
