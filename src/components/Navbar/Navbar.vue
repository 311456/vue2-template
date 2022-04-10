<template>
  <div class="navbar">
    <el-row>
      <el-col :span="21">
        <div class="header_left">成都东软学院</div>
      </el-col>
      <el-col :span="3">
        <div class="avatarBox">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <el-dropdown @command="handleLogout">
            <span class="el-dropdown-link">
              安酱<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import router from "../../router";
export default {
  name: "Navbar",
  methods: {
    handleLogout(command) {
      if (command === "logout") {
        router.replace("/login");
      }
    },
  },
};
</script>

<style scoped>
.header_left {
  margin-left: 20px;
}
.el-dropdown-link {
  color: white;
  margin-left: 8px;
}
.avatarBox {
  display: flex;
  align-items: center;
}
</style>
