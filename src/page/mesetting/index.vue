<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">设置</div>
    </div>
    <div id="content" class="mainBox">
        <div class="settingBox">
            <ul>
                    <li>
                        <div>关于名医直约</div>
                        <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                    </li>
                    <li>
                        <div>检查新版本</div>
                        <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                    </li>
                    <li>
                        <div>隐私保护</div>
                        <img class="iconNext" src="../../images/mingyi/iconNext.png" />
                    </li>
                </ul>
                
                <div class="signOut" @click="goOutFun">
                    退出登录
                </div>
        </div>
    </div>
</div>
</template>

<script>
    import 'src/style/comman.css'
    import headTop from 'src/components/header/head'

    export default {
      data(){
            return{
			
            }
        },
        components: {
            headTop,
        },
        mounted(){
            
        },
        computed: {
        
        },
        methods: {
            goPageFun(){
               window.history.back(-1); 

            },
            goOutFun(){
              this.$router.push('/wxlogin')
            }
         
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
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
  top: 13.7rem;
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
