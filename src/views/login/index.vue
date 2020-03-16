<template >
  <div class="login">
      <div class="left-login">
          <div class="title">
                  <img class="title-img" src="../../assets/images/login.png" alt="" srcset="">
              <span class="title-name">黑马面面</span>
              <span class="title-line"></span>
              <span class="title-login">用户登录</span>
          </div>
          <!-- 登录表单 -->
          <el-form ref="form" :rules="rules" :model="form" label-width="0">
            <el-form-item prop="phone">
                <el-input v-model="form.phone" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="" prop="code">
            <!-- 使用栅格系统来添加内容 -->
                <el-row>
                    <el-col :span="16" >
                        <el-input prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="form.code"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <img class="code" src="../../assets/images/login_captcha.png" alt="">
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item class="checkboxheight"  prop="type">
                <el-checkbox v-model="form.type" name="type">
                    我已阅读并同意
                    <el-link type="primary">用户协议</el-link>和
                    <el-link type="primary">隐私条款</el-link>
                </el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button class="loginbnt" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button class="loginbnt" type="primary" @click="openregister" >注册</el-button>
        </el-form-item>
      </el-form>
      </div>
      <div class="right-img">
          <img src="../../assets/images/login_banner_ele.png" alt="" srcset="">
      </div>
      <register ref="register" />
  </div>
</template>

<script>
// 导入注册组件
import register from './components/register.vue'
export default {
    data() {
        return {
            form:{
                phone:'',
                password:'',
                code:'',
                type:[],
            },
            rules: {
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 11, max: 11, message: '长度在11字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },   
                ],
                code:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 4, max: 4, message: '验证码长度应该为4', trigger: 'blur' }
                ],
                type:[
                    { type:'array', required: true, message: '请至少选择一项活动性质', trigger: 'change' },
                ]
            },
        }
    },
    components:{
        register,
    },
    methods: {
        // 点击登录按钮时触发
        onSubmit() {
            // 调用 form 的验证方法
            this.$refs.form.validate(valid => {
                // valid 就是验证后返回的数据
                if (valid) {
                    // 验证通过的逻辑
                    this.$message({
                        message: '验证通过',
                        type: 'success'
                    })
                } else {
                    // 验证不通过的逻辑
                    this.$message.error('验证不通过')
                }
            })
        },
        // 打开注册面板
        openregister () {
            // 使用 $refs 传参的方式将注册组件中的属性进行修改
            this.$refs.register.dialogFormVisible = true
        }
    },
}
</script>

<style lang="less">
.login {
    // 使用弹性盒模型布局
    display: flex;
    // 让其子元素左右对其
    justify-content: space-around;
    // 让其子元素上下对齐
    align-items: center;
    height: 100%;
    background:linear-gradient(225deg,rgba(20,147,250,1),rgba(1,198,250,1));

    .left-login {
        width:478px;
        height:550px;
        padding: 48px 42px 86px;
        box-sizing: border-box;
        background:rgba(245,245,245,1);

        .title {
            // 让里面的子元素变成行内块
            display: flex;
            // 让其子元素上下居中
            align-items: center;
            margin-bottom: 29px;
            

            .title-img {
                width: 22px;
                height: 17px;
                margin-right: 16px;
            }

            .title-name {
                font-size:24px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(12,12,12,1); 
            }

            .title-line {
                width:1px;
                height:28px;
                background:rgba(199,199,199,1);
                margin-left: 14px;
                margin-right: 12px;
            }

            .title-login {
                font-size:22px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(12,12,12,1);
            }
        }
        .checkboxheight {
            .el-checkbox__label {
                line-height: 20px;
            }
        }
        .code {
            width: 100%;
            height: 40px;
        }
        .loginbnt {
            width: 100%;
        }
    }

    .right-img {
        width: 633px;
        height: 435px;
    }
}
</style>