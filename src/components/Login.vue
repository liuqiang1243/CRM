<template>
  <div class="hello">
    <div class="login">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form ref="form" :model="loginFrom" label-width="0px" class="login_from" :rules="loginFromRules" >
        <el-form-item prop="username">
          <el-input
            v-model="loginFrom.username"
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginFrom.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="login_button">
          <el-button type="primary" @click="loginFormToken">提交</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginFrom: {
        username: "admin",
        password: "123456"
      },
      //这是表单的验证规则
      loginFromRules: {
        //账号的验证规则
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        //密码的验证规则
        password: [
            { required: true, message: '请输入有效的密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
      }
    };
  },
  methods: {
    //重置按钮
    reset(){
      // console.log(this.$refs.form)
      this.$refs.form.resetFields()
    },
    //登录按钮发送请求
    loginFormToken(){
      this.$refs.form.validate(async (res,obj)=>{
        if(!res)return
        let {data} =  await this.$http.post('login',this.loginFrom)
        if(data.meta.status!==200)return this.$message.error('登陆失败! 请检查用户名和密码');
        window.sessionStorage.setItem('token',data.data.token)
        this.$message.success('恭喜您! 登录成功')
        this.$router.push('/home')
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100vh;
  background-color: #2b4b6b;
}
.login {
  width: 450px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
}
.logo {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  -webkit-box-shadow: 0 0 10px #ddd;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  left: 50%;
  margin: -65px 0 0 -65px;
  background-color: white;
  margin-bottom: 40px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_from {
  padding: 0 20px;
}
.login_button {
  display: flex;
  justify-content: flex-end;
}
</style>
