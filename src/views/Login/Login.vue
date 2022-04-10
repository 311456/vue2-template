<template>
  <div class="login">
    <div class="loginPanel">
      <el-form
        ref="loginForm"
        label-position="left"
        label-width="80px"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item label="账号" prop="account">
          <el-input v-model="loginForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input show-password v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" class="validateBox" prop="validateCode">
          <el-row>
            <el-col :span="12"
              ><el-input v-model="loginForm.validateCode"></el-input
            ></el-col>
            <el-col :span="12"
              ><div style="border: none" @click="refreshCode">
                <HIdentify :identifyCode="identifyCode"></HIdentify></div
            ></el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        style="width: 100%"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { HIdentify } from "@/components/index";
export default {
  name: "Login",
  components: {
    HIdentify,
  },
  data() {
    const validateAccount = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的账号"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("请输入正确的密码"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value !== this.identifyCode) {
        callback(new Error("验证码错误，请重新输入"));
      } else {
        callback();
      }
    };
    return {
      // 登录的相关数据
      loginForm: {
        account: "admin",
        password: "123456",
        validateCode: "",
      },
      loginRules: {
        account: [
          { required: true, trigger: "blur", validator: validateAccount },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        validateCode: [
          { required: true, trigger: "blur", validator: validateCode },
        ],
      },
      // 可选值
      identifyCodes: "1234567890",
      identifyCode: "",
    };
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成随机数
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    // 登录逻辑
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$router.push("/");
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
    const self = this;
    self.makeCode(this.identifyCodes, 4);
    this.refreshCode();
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: space-around;
  min-width: 289px;
}
.loginPanel {
  width: 30%;
  margin-top: 100px;
  padding: 30px;
  background-color: rgb(243, 242, 236);
}
</style>
