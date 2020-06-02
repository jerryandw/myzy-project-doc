<template>
    <div class="profile_page">
        <div class="titleBox" @click="goPageFun">
            <div class="titleContent">个人中心</div>
        </div>	
        <div id="content" class="mainBox">
            <div class="top" v-cloak>
                <div class="messageBox">
                    <div class="userImgBox">
                        <img class="userInfoImg" src="../../images/mingyi/userInfo.png" />
                    </div>
                    <div class="userInfoMessage">
                        <div class="userName">用户名</div>
                        <div class="userPhone">15188886666</div>
                    </div>
                    <!-- <div class="btnBox"> <a href="tel:400-0000-688">我的客服</a> </div> -->
                </div>
            </div>
            <div class="bottomBox">
                <ul>
                        <li @click="toChangeFun('patient')">
                            <div>我的资料</div>
                            <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                        </li>
                        <li @click="toChangeFun('yygl')">
                            <div>预约管理</div>
                            <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                        </li>
                        <!-- <li @click="toChangeFun('ss')">
                            <div>预约管理</div>
                            <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                        </li> -->
                        <li @click="toChangeFun('myNews')">
                            <div>我的消息</div>
                            <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                        </li>
                         <li @click="toChangeFun('czyy')">
                            <div>出诊医院</div>
                            <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                        </li>
                        <li>
                            <div><a href="tel:400-0000-688">专属客服</a></div>
                            <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                        </li>
                        <li @click="toChangeFun('mesetting')">
                            <div>设置</div>
                            <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                        </li>
                    </ul>
            </div>
        </div>
        <foot-guide></foot-guide>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
import {mapState, mapMutations} from 'vuex'
import {imgBaseUrl} from 'src/config/env'
import {getImgPath} from 'src/components/common/mixin'

export default {
    data(){
        return{
            profiletitle: '个人中心',
            username: '登录/注册',           //用户名
            resetname: '',
            mobile: '暂无绑定手机号',             //电话号码
            balance: 0,            //我的余额
            count : 0,             //优惠券个数
            pointNumber : 0,       //积分数
            avatar: '',             //头像地址
            imgBaseUrl,
        }
    },
    mounted(){
        this.initData();
    },
    mixins: [getImgPath],
    components:{
        headTop,
        footGuide,
    },

    computed:{
        ...mapState([
            'userInfo',
        ]),
        //后台会返回两种头像地址格式，分别处理
        imgpath:function () {
            let path;
            if(this.avatar.indexOf('/') !==-1){
                path = imgBaseUrl +　this.avatar;
            }else{
                path = this.getImgPath(this.avatar)
            }
            this.SAVE_AVANDER(path);
            return path;
        }
    },

    methods:{
        ...mapMutations([
            'SAVE_AVANDER'
        ]),
         goPageFun(){
          console.log("990")
        },
       toChangeFun(type){
        let src = "";
				switch(type){
					case "patient":
						src = "/patientadmin";
          break;
          case "yygl":
						src = "/myyygl";
          break;
          case "czyy":
            src = "/myczyy";
          break;
					case "myNews":
						src = "/mynews"
					break;
					case "mesetting":
						src = "/mesetting"
					break;
					case "policyManagement":
						src = "/policymanagement"
					break;
				}
        		this.$router.push(src)
        },
        initData(){
            if (this.userInfo && this.userInfo.user_id) {
                this.avatar = this.userInfo.avatar;
                this.username = this.userInfo.username;
                this.mobile = this.userInfo.mobile || '暂无绑定手机号';
                this.balance = this.userInfo.balance;
                this.count = this.userInfo.gift_amount;
                this.pointNumber = this.userInfo.point;
            }else{
                this.username = '登录/注册';
                this.mobile = '暂无绑定手机号';
            }
        },
    },
    watch: {
        userInfo: function (value){
            this.initData()
        }
    }
}

</script>

<style lang="scss" scoped>
   @import 'src/style/mixin';

    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .profile-number{
        padding-top:1.95rem;
        .profile-link{
            display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background:$blue;
            padding: .666667rem .6rem;
            .privateImage{
                display:inline-block;
                @include wh(2.5rem,2.5rem);
                border-radius:50%;
                vertical-align:middle;
                .privateImage-svg{
                    background:$fc;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .user-info{
                margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p{
                    font-weight:700;
                    @include sc(.8rem,$fc);
                    .user-icon{
                        @include wh(0.5rem,0.75rem);
                        display:inline-block;
                        vertical-align:middle;
                        line-height:0.75rem;
                        .icon-mobile{
                            @include wh(100%,100%);
                        }
                    }
                    .icon-mobile-number{
                        display:inline-block;
                        @include sc(.57333rem,$fc);

                    }
                }

            }
            .arrow{
                @include wh(.46667rem,.98rem);
                display:inline-block;
                svg{
                   @include wh(100%,100%);
                }
            }
        }
   }
   .info-data{
        width:100%;
        background:$fc;
        box-sizing: border-box;
        ul{
            .info-data-link{
                float:left;
                width:33.33%;
                display:inline-block;
                border-right:1px solid #f1f1f1;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                .info-data-top{
                    @include sc(.55rem,#333);
                    padding: .853333rem 0 .453333rem;
                    b{
                        display:inline-block;
                        @include sc(1.2rem,#f90);
                        font-weight:700;
                        line-height:1rem;
                        font-family: Helvetica Neue,Tahoma;
                    }
                }
                .info-data-bottom{
                    @include sc(.57333rem,#666);
                    font-weight:400;
                    padding-bottom:.453333rem;

                }
            }
            .info-data-link:nth-of-type(2){
                .info-data-top{
                    b{
                        color:#ff5f3e;
                    }
                }

            }
            .info-data-link:nth-of-type(3){
                border:0;
                .info-data-top{
                    b{
                        color:#6ac20b;
                    }
                }
            }
        }
   }
   .profile-1reTe{
        margin-top:.4rem;
        background:$fc;
        .myorder{
            padding-left:1.6rem;
            display:flex;
            align-items: center;
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.433333rem .266667rem .433333rem 0;
                @include sc(.7rem,#333);
                display:flex;
                justify-content:space-between;
                span{
                    display:block;
                }
                .myorder-divsvg{
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
        .myorder:nth-of-type(3) .myorder-div{
            border:0;
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }

//xin
.mui-bar-tab {
		    bottom: 0;
		    display: table;
		    width: 100%;
		    height: 50px;
		    padding: 0;
		    table-layout: fixed;
		    border-top: 0;
		    border-bottom: 0;
		    -webkit-touch-callout: none;
		}
		
		.mui-bar {
		    position: fixed;
		    z-index: 10;
		    right: 0;
		    left: 0;
		    height: 44px;
		    padding-right: 10px;
		    padding-left: 10px;
		    border-bottom: 0;
		    background-color: #f7f7f7;
		    -webkit-box-shadow: 0 0 1px rgba(0,0,0,.85);
		    box-shadow: 0 0 1px rgba(0,0,0,.85);
		    -webkit-backface-visibility: hidden;
		    backface-visibility: hidden;
		}
		.mui-bar-tab .mui-tab-item.mui-active {
		    color: #444444;
		}
		.mui-bar-tab .mui-tab-item {
		    display: table-cell;
		    overflow: hidden;
		    width: 1%;
		    height: 50px;
		    text-align: center;
		    vertical-align: middle;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    color: #929292;
		}
		.mui-bar-tab .mui-tab-item.mui-active {
		    color: #007aff;
		}
		.mui-bar-tab .mui-tab-item {
		    display: table-cell;
		    overflow: hidden;
		    width: 1%;
		    height: 50px;
		    text-align: center;
		    vertical-align: middle;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    color: #929292;
		}
		.mui-bar-tab .mui-tab-item .mui-icon {
		    top: 3px;
		    width: 24px;
		    height: 24px;
		    padding-top: 0;
		    padding-bottom: 0;
		}
		.mui-bar .mui-icon {
		    font-size: 24px;
		    position: relative;
		    z-index: 20;
		    padding-top: 10px;
		    padding-bottom: 10px;
		}
		.iconfont {
		    font-family: "iconfont" !important;
		    font-size: 10px;
		    font-style: normal;
		    -webkit-font-smoothing: antialiased;
		    -moz-osx-font-smoothing: grayscale;
		    /* -webkit-text-stroke-width: 0.2px; */
		}
		.mui-icon {
		    font-family: Muiicons;
		    font-size: 24px;
		    font-weight: 400;
		    font-style: normal;
		    line-height: 1;
		    display: inline-block;
		    text-decoration: none;
		    -webkit-font-smoothing: antialiased;
		}
		.mui-bar-tab .mui-tab-item .mui-icon~.mui-tab-label {
		    font-size: 11px;
		    display: block;
		    overflow: hidden;
		    text-overflow: ellipsis;
		}
    //me.css
    html {
  font-size: 40px;
}
@media only screen and (min-width: 320px) {
  html {
    font-size: 17.06666667px !important;
  }
}
@media only screen and (min-width: 360px) {
  html {
    font-size: 19.2px !important;
  }
}
@media only screen and (min-width: 375px) {
  html {
    font-size: 20px !important;
  }
}
@media only screen and (min-width: 400px) {
  html {
    font-size: 21.33333333px !important;
  }
}
@media only screen and (min-width: 411px) {
  html {
    font-size: 21.92px !important;
  }
}
@media only screen and (min-width: 414px) {
  html {
    font-size: 22.08px !important;
  }
}
@media only screen and (min-width: 480px) {
  html {
    font-size: 25.6px !important;
  }
}
html {
  font-family: "Microsoft YaHei";
}
body {
  background-color: #f5f5f5;
}
body,
div,
a,
img,
h5,
p,
ul,
li,
span {
  margin: 0;
  padding: 0;
}
a {
  border: none;
  text-decoration: none;
}
img {
  border: none;
  vertical-align: middle;
}
li {
  list-style: none;
}
body {
  padding: 0;
  margin: 0;
  position: absolute;
}
.mainBox {
  background-color: #f2f2f2;
  height: 100%;
}
.mainBox .top {
  width: 100vw;
  height: 5.225rem;
  background-color: #f2f2f2;
}
.mainBox .top .messageBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  width: 17.55rem;
  height: 4.05rem;
  left: 0.6rem;
  top: 2.8rem;
  border-radius: 0.25rem;
  z-index: 4;
}
.titleBox .goPage .goPageImg {
    width: 0.45rem;
    height: 0.775rem;
    margin-left: 0.75rem;
}
.titleBox{
    position: fixed;
    width: 18.75rem;
    height: 2.225rem;
    line-height: 2.225rem;
    top: -0.05rem;
    background-color: #ffffff;
    box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
    font-size: 0.8rem;
    color: #333333;
    z-index: 999;
    clear: both;
}
.titleContent{
    position: absolute;
    width: 18.75rem;
    height: 2.225rem;
    top: 0;
    text-align: center;
    float: right;
}
.mainBox .top .messageBox .userImgBox {
  position: absolute;
  width: 2.7rem;
  height: 2.7rem;
  left: 0.875rem;
  top: 0.625rem;
}
.mainBox .top .messageBox .userImgBox .userInfoImg {
  width: 2.7rem;
  height: 2.7rem;
}
.mainBox .top .messageBox .userInfoMessage {
  position: absolute;
  width: 9.375rem;
  height: 2.5rem;
  left: 4.125rem;
  top: 1rem;
}
.mainBox .top .messageBox .userInfoMessage .userName {
  width: 9.375rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.8rem;
  color: #232323;
}
.mainBox .top .messageBox .userInfoMessage .userPhone {
  width: 9.375rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.65rem;
  color: #207fc9;
}
.mainBox .top .messageBox .btnBox {
  background-color: #207fc9;
  position: absolute;
  width: 3.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  right: 0.625rem;
  top: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  text-align: center;
  color: #ffffff;
  z-index: 6;
}
.mainBox .top .messageBox .btnBox a {
  border: none;
  text-decoration: none;
  color: #FFFFFF;
}
.mainBox .contentBox {
  position: absolute;
  width: 18.75rem;
  height: 6.25rem;
  top: 7.45rem;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  background-color: #FFFFFF;
  z-index: 4;
}
.mainBox .contentBox .roleBox {
  position: absolute;
  width: 18.75rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.8rem;
  border-bottom: 1px solid #dedede;
  color: #666666;
}
.mainBox .contentBox .roleBox div {
  display: inline-block;
  margin-left: 0.85rem;
}
.mainBox .contentBox .roleBox .iconNext {
  position: absolute;
  width: 0.45rem;
  height: 0.775rem;
  top: 0.8rem;
  right: 0.75rem;
}
.mainBox .contentBox .ulBox {
  position: absolute;
  width: 16.375rem;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  top: 2.5rem;
}
.mainBox .contentBox .ulBox ul {
  width: 16.375rem;
  height: 3.5rem;
  clear: both;
}
.mainBox .contentBox .ulBox ul li {
  float: left;
  width: 2rem;
  height: 2.5rem;
  margin-left: 1.25rem;
}
.mainBox .contentBox .ulBox ul li .imgBox {
  width: 2rem;
  height: 1.75rem;
  text-align: center;
}
.mainBox .contentBox .ulBox ul li .imgBox .w_zhifu {
  margin: 0 auto;
  width: 1.325rem;
  height: 1.35rem;
}
.mainBox .contentBox .ulBox ul li .imgBox .w_zhenduan {
  margin: 0 auto;
  width: 1.45rem;
  height: 1.3rem;
}
.mainBox .contentBox .ulBox ul li .imgBox .w_queren {
  margin: 0 auto;
  width: 1.3rem;
  height: 1.4rem;
}
.mainBox .contentBox .ulBox ul li .imgBox .yiwancheng {
  margin: 0 auto;
  width: 1.3rem;
  height: 1.375rem;
}
.mainBox .contentBox .ulBox ul li .imgBox .all {
  margin: 0 auto;
  width: 1.175rem;
  height: 1.225rem;
}
.mainBox .contentBox .ulBox ul li .megBox {
  width: 2rem;
  height: 0.75rem;
  line-height: 0.75rem;
  font-size: 0.6rem;
  text-align: center;
  color: #666666;
}
.mainBox .bottomBox {
  position: absolute;
  width: 18.75rem;
  top: 6.85rem;
}
.mainBox .bottomBox ul li {
  width: 100%;
  position: relative;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-top: 0.625rem;
  font-size: 0.8rem;
  color: #666666;
  background-color: #FFFFFF;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}
.mainBox .bottomBox ul li div {
  display: inline-block;
  margin-left: 0.85rem;
}
.mainBox .bottomBox ul li div a {
  border: none;
  text-decoration: none;
  color: #666666;
}
.mainBox .bottomBox ul li .iconNext {
  position: absolute;
  width: 0.45rem;
  height: 0.775rem;
  top: 0.8rem;
  right: 0.75rem;
}
.mainBox .settingBox {
  position: absolute;
  width: 18.75rem;
  top: 2.225rem;
}
.mainBox .settingBox ul li {
  width: 100%;
  position: relative;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.8rem;
  color: #666666;
  background-color: #FFFFFF;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}
.mainBox .settingBox ul li div {
  display: inline-block;
  margin-left: 0.85rem;
}
.mainBox .settingBox ul li .iconNext {
  position: absolute;
  width: 0.45rem;
  height: 0.775rem;
  top: 0.8rem;
  right: 0.75rem;
}
.mainBox .settingBox .signOut {
  background-color: #2e74d1;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  position: absolute;
  width: 14.575rem;
  height: 2rem;
  line-height: 2rem;
  bottom: -10rem;
  left: 2.1rem;
  border-radius: 0.275rem;
  font-size: 0.8rem;
  text-align: center;
  color: #f2f2f2;
  z-index: 2;
}

</style>
