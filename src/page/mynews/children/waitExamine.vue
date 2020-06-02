<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">待支付订单详情</div>
    </div>
    <div id="content" class="mainBox" v-cloak>
        <div class="contentBox waitExamineTop">
            <ul>
                    <li class="waitExamineli">
                        <div class="userImgBox">
                            <img class="userInfoImg" src='../../../images/mingyi/indexUserImg.png' />
                        </div>
                        <div class="userInfoMessage">
                            <div class="docName"><span class="docName1">{{docObj.name}}</span> <span class="docName4">待支付</span></div>
                        </div>
                        <div class="userContentBox">
                            <div class="describeBox timeSpan">
                                {{docObj.orderTime}}
                            </div>
                            <div class="describeBox desBox">
                                预约医院：{{docObj.hospital}}
                            </div>
                            <div class="describeBox desBox">
                                科室：{{docObj.department}}
                            </div>
                            <div class="describeBox des2Box">
                                金额：¥ {{docObj.money}}
                            </div>
                        </div>
                        <div class="clearBtnBox">
                            <div class="timeBox">剩余支付时间: 30分00秒</div>
                            <div class="okBtn">去支付</div>
                            <div class="clearBtn">取消</div>
                        </div>
                    </li>
                    
                </ul>
        </div>
        
        <div class="waitExamineOrderInfo">
            <div class="titleBox1">
                订单信息
            </div>
            <div class="contentBox1">
                <div class="contentInfo">订单编号：20202171239</div>
                <div class="contentInfo">下单时间：2020-2-17 12:39</div>
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
               docObj:{
					name:"张医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../../images/mingyi/indexUserImg.png",
					states:1,
					orderTime:"2020-02-18  9:00-10:00 周二 上午",
					hospital:"北京市第一医院",
					department:"精神科",
					detailed:"一层101",
					explain:"说明点啥",
					assistant:"小助理",
					phone:"15166668888",
					money:"1000"
				},
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
            
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
 //watiExamine

.mainBox {
  background-color: #f2f2f2;
  height: 100%;
}
.mainBox .top {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 1.45rem;
  top: 2.125rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  background-color: #f2f2f2;
  z-index: 99;
}
.mainBox .contentBox {
  width: 100%;
  position: absolute;
  top: 4.275rem;
  left: 0px;
}
.mainBox .contentBox ul {
 padding: 0.625rem 0.6rem 0 0.6rem;
}
.mainBox .contentBox ul .waitExamineli {
  height: 10.9rem;//  height: 10.125rem;
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding:0.375rem 0.5rem 0.375rem 0.5rem ;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  z-index: 12;
  clear: both;
}
.mainBox .contentBox ul .waitExamineli .userImgBox {
  float: left;
  width: 2.2rem;
  height: 2.25rem;
}
.mainBox .contentBox ul .waitExamineli .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .contentBox ul .waitExamineli .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .contentBox ul .waitExamineli .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
  clear: both;
}
.mainBox .contentBox ul .waitExamineli .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .contentBox ul .waitExamineli .userInfoMessage .docName .docName2 {
  float: right;
  color: #8c8c8c;
  font-size: 0.65rem;
}
.mainBox .contentBox ul .waitExamineli .userInfoMessage .docName .docName3 {
  float: right;
  font-size: 0.65rem;
  color: #4eb92a;
}
.mainBox .contentBox ul .waitExamineli .userInfoMessage .docName .docName4 {
  float: right;
  font-size: 0.65rem;
  color: #e13911;
}
.mainBox .contentBox ul .waitExamineli .userContentBox {
  height: 5.25rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
}
.mainBox .contentBox ul .waitExamineli .userContentBox .describeBox {
  height: 1.25rem;
  font-size: 0.7rem;
}
.mainBox .contentBox ul .waitExamineli .userContentBox .timeSpan {
  color: #2e74d1;
}
.mainBox .contentBox ul .waitExamineli .userContentBox .desBox {
  color: #232323;
}
.mainBox .contentBox ul .waitExamineli .userContentBox .des2Box {
  color: #8c8c8c;
}
.mainBox .contentBox ul .waitExamineli .clearBtnBox {
  height: 2.725rem;
  line-height: 2.725rem;
  border-top: 1px solid #DEDEDE;
  font-size: 0.65rem;
  clear: both;
}
.mainBox .contentBox ul .waitExamineli .clearBtnBox .timeBox {
  float: left;
  width: 8.25rem;
  height: 1.45rem;
  color: #207fc9;
}
.mainBox .contentBox ul .waitExamineli .clearBtnBox .okBtn {
  float: right;
  background-color: #4eb92a;
  width: 3.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  border-radius: 0.25rem;
  margin-top: 0.625rem;
  color: #ffffff;
  text-align: center;
  z-index: 15;
}
.mainBox .contentBox ul .waitExamineli .clearBtnBox .clearBtn {
  float: right;
  background-color: #d5d5d5;
  width: 3.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  border-radius: 0.25rem;
  margin-top: 0.625rem;
  margin-right: 0.25rem;
  color: #ffffff;
  text-align: center;
  z-index: 15;
}
.mainBox .waitExamineTop {
  top: 2.225rem;
}
.mainBox .waitExamineOrderInfo {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 6rem;
  left: 0.6rem;
  right: 0.6rem;
  top: 14.85rem;//sss
  border-radius: 0.25rem;
  padding: 0.375rem 0.6rem;
  z-index: 3;
}
.mainBox .waitExamineOrderInfo .titleBox1 {
  width: 16.55rem;
  height: 2.125rem;
  line-height: 2.125rem;
  font-size: 0.8rem;
  color: #232323;
  border-bottom: 1px solid #DEDEDE;
}
.mainBox .waitExamineOrderInfo .contentBox1 {
  width: 16.55rem;
  height: 2.35rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.mainBox .waitExamineOrderInfo .contentBox1 .contentInfo {
  width: 16.55rem;
  line-height: 1.25rem;
  font-size: 0.7rem;
  color: #8c8c8c;
}
</style>
