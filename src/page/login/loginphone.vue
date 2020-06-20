<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">登录s</div>
    </div>
    <div class="mainBox" style="background-color: white;">

        <div class="top">
            <img class="logoImg" src="../../images/mingyi/logo.png" />
        </div>
        <div id="login-form-id" class="bottom">
            <div class="inputBox">
                <div>
                    <input type="number" v-model="telphone"  placeholder="请输入手机号码" />
                    <img class="clearImg" src="images/mingyi/clear.png" />
                </div>
                <div class="line"></div>
                <div>
                    <input id="login-pwd-id" v-model="phonecode"  placeholder="请输入手机验证码" />
                    <!-- <span @click="btnGet" class="btnGet">获取验证码</span> -->
                     <span  @click="getVerifyCode" class="btnGet" v-if="!timeShow">获取验证码</span>
                     <span style="color:#666666;font-size:0.6rem"  v-if="timeShow">{{times}}后重发</span>
                </div>
            </div>
            <div :class="phonecode && telphone?'btn_bing_color':'btn_bing'" @click="login">立即绑定</div>
            <div class="checkView">
            <input type="checkbox" id="checkbox">
            <label for="checkbox">已阅读并同意</label>
            <span style="color: #0c51b1;">《授权协议》</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Cookies from 'js-cookie';
    import api from '../../fetch/api.js';
    import 'src/style/comman.css'
   import {toast} from '../../config/env'

    import headTop from 'src/components/header/head'
    import { loginphone } from '../../service/getData'



    export default {
      data(){
            return{
             timeShow: false,
        times: 60, //倒计时
              phonecode:'',
              telphone:'',
               computedTime: 0, //倒数记时

            }
        },
        components: {
            headTop,
        },
        mounted(){
            console.log(api,"llll")
        },
        computed: {
            //判断手机号码
            rightPhoneNumber: function (){
                console.log("OII");
                return /^1\d{10}$/gi.test(this.phoneNumber)
            }
        },
        methods: {
            goPageFun(){
               window.history.back(-1); 

            },
            btnGet(){
                console.log(api,"opppp")
                 api.api('get', api.myzy + '/common/sms', {
                    phone: phone,
                    token:'ssssss'
                  }).then(res => {
                    console.log("00099")
                  })
             
            },
                 //获取短信验证码
           getVerifyCode(){ 
                let _this = this;
                // if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(_this.telphone)){
                //     toast('请输入正确的手机号');
                //     return false;
                // }
                let aa = _this.telphone
                console.log("sss",_this.telphone)
                 api.api('get', api.myzy + '/common/sms', {
                    token:'ssssss',
                    phone:aa,
                  }).then(res => {
                    console.log("00099")
                  })
                      
                  _this.timeShow = !_this.timeShow;
                  var setTime = setInterval(function () {
                    _this.times--;

                    if (_this.times <= 0) {
                      _this.timeShow = false;
                      _this.times = 60;
                      clearInterval(setTime);
                    }
                  }, 1000)
      
                 
                 
            },
            login(){
                 api.json('post', api.myzy + '/login/phonecode', {
                    token:'ssssss',
                    phone:this.telphone,
                    phoneCode:this.phonecode
                  }).then(res => {
                    console.log("000aa99",res)
                    if(res){
                      Cookies.set('token',res.token);
                      Cookies.set('userid',res.id);

                      this.$router.push('/home')

                    }
                  })
            }
        
           
         
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
    .mainBox {
  background-color: #999;
  height: 100%;
}
.mainBox .top {
  width: 100vw;
  height: 14.475rem;
  background-color: #69b5eb;
}
.mainBox .top .logoImg {
  position: absolute;
  width: 7.075rem;
  height: 6.325rem;
  top: 4rem;
  left: 5.8375rem;
}
.mainBox .bottom {
  background-color: #FFFFFF;
  width: 100%;
  position: absolute;
  top: 14.475rem;
  bottom: 0rem;
  left: 0px;
}
.mainBox .bottom .inputBox {
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  width: 16.575rem;
  height: 5.05rem;
  line-height: 2rem;
  top: -1.575rem;
  left: 1.1rem;
  padding-top: 0.875rem;
  border-radius: 0.25rem;
  z-index: 3;
}
.mainBox .bottom .inputBox input {
  width: 12.875rem;
  height: 2rem;
  padding-left: 0.875rem;
  text-align: left;
}
.mainBox .bottom .inputBox .clearImg {
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  top: 1.35rem;
  right: 0.625rem;
}
.mainBox .bottom .inputBox .line {
  width: 15.675rem;
  height: 0.05rem;
  margin-left: 0.45rem;
  background-color: #dedede;
  position: absolute;
  left: 0.45rem;
  margin: 0;
  padding: 0;
}
.mainBox .bottom .inputBox .btnGet {
  border-color: #4eb92a;
  border-style: solid;
  position: absolute;
  width: 5.2rem;
  line-height: 1.1rem;
  top: 3.5rem;
  right: 0.625rem;
  border-width: 0.05rem;
  border-radius: 0.25rem;
  font-size: 0.7rem;
  color: #4eb92a;
  text-align: center;
  z-index: 12;
}
.mainBox .bottom .btn_bing {
  background-color: #cecece;
  box-shadow: 0px 10px 20px 0px rgba(178, 178, 178, 0.2);
  position: absolute;
  width: 16.575rem;
  height: 2rem;
  line-height: 2rem;
  top: 6.625rem;
  left: 1.1rem;
  border-radius: 0.275rem;
  font-size: 0.8rem;
  text-align: center;
  color: #f2f2f2;
  z-index: 14;
}
.mainBox .bottom .checkView {
  position: absolute;
  width: 16.575rem;
  height: 2rem;
  line-height: 2rem;
  top: 10rem;
  left: 1.1rem;
  border-radius: 0.275rem;
  font-size: 0.9rem;
  text-align: center;
  color: #999999;
  z-index: 14;
}
.wxLogin {
  background-color: #e5f6fd;
  height: 100%;
}
.wxLogin .top {
  width: 100vw;
  height: 14.475rem;
}
.wxLogin .top .logoImg {
  position: absolute;
  width: 8.75rem;
  height: 7.825rem;
  top: 4rem;
  left: 5rem;
}
.mainBox .bottom .btn_bing_color{
  background-color: #08cd66;
  box-shadow: 0px 10px 20px 0px rgba(178, 178, 178, 0.2);
  position: absolute;
  width: 16.575rem;
  height: 2rem;
  line-height: 2rem;
  top: 6.625rem;
  left: 1.1rem;
  border-radius: 0.275rem;
  font-size: 0.8rem;
  text-align: center;
  color: #f2f2f2;
  z-index: 14;
}

.mint-toast-text{
  color: #ffffff!important;
}


</style>
