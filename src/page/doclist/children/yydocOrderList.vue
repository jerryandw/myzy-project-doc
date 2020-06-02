<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">预约名医</div>
    </div>
    <div id="content" class="mainBox">
	<div class="top" v-cloak>
		<div class="messageBox topNum1">
			<div class="userImgBox">
				<img class="userInfoImg" src="../../../images/mingyi/indexUserImg.png" />
			</div>
			<div class="userInfoMessage">
				<div class="docName"><span class="docName1">{{docObj.name}}</span> <span class="docName2">{{docObj.titleName}}</span></div>
				<div class="docType">{{docObj.docType}}</div>
			</div>
		</div>
		
		<div class="messageBox topNum2">
			<div class="messageView">
				当您预约成功后，您的私人助理会主动和你联系，给您安排相关服务，想了解更多请联系客服！
			</div>
			<div class="serviceView">
			<a href="tel:400-0000-688">客服</a>
			</div>
		</div>
		
		<div class="chuzhenBox topNum3">
			<div class="messageOrderBox" style="border-bottom: 1px solid #dedede;">
				<div class="chuzhenDiv">
					<img class="addressImg" src="../../../images/mingyi/address.png" />
				</div>
				<div class="userInfoMessage" style="margin-left: 1rem;">
					<div class="docName"><span class="docName1">北京市首都医院</span></div>
					<div class="docType">精神科</div>
				</div>
				<div class="gapBox">
					<img class="gapIcon" src="../../../images/mingyi/gapIcon.png" />
					<span class="addressNum">3km</span>
				</div>
			</div>
			
			<ul class="orderUl">
				<li v-for="item in timeList">
					<div class="orderTime">{{item.orderTime}}</div>
					<div class="orderBox">
						<div class="time">{{item.time}}</div>
						<div class="money">预约 ¥ {{item.money}}</div>
						<div class="orderBtn" @click="toOrderFun">预约</div>
					</div>
				</li>
				
			</ul> 
		</div>
		
		
		
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
					img:"../../../images/mingyi/indexUserImg.png"
				},
				timeList:[
					{
					orderTime:"2020-02-18  9:00-10:00  周二  上午",
					time:"今天",
					money:1000,
					},
					{
					orderTime:"2020-02-18  9:00-10:00  周二  下午",
					time:"今天",
					money:1000,
					},
					{
					orderTime:"2020-02-25  9:00-10:00  周三  上午",
					time:"7天后",
					money:1000,
					}
				]
				
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
            toOrderFun:function(){
                let src = '/orderConfirm'
                this.$router.push(src)

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
  background-color: #f2f2f2;
}
.mainBox .top .topNum1 {
  top: 2.8rem;
}
.mainBox .top .topNum2 {
  top: 6.75rem;
}
// .mainBox .top .topNum3 {
//   top: 10.675rem;
// }
.mainBox .top .topNum4 {
  top: 22.5rem;
}
.mainBox .top .leftNum1 {
  margin-left: 0.75rem;
}
.mainBox .top .messageBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 3.125rem;
  left: 0.6rem;
  right:0.6rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  z-index: 4;
}
.mainBox .top .messageBox .userImgBox {
  float: left;
  width: 2.2rem;
  margin-top: 0.25rem;
}
.mainBox .top .messageBox .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .top .messageBox .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .top .messageBox .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
}
.mainBox .top .messageBox .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .top .messageBox .userInfoMessage .docName .docName2 {
  font-size: 0.65rem;
}
.mainBox .top .messageBox .userInfoMessage .docType {
  margin-bottom: 0.2rem;
  font-size: 0.65rem;
  color: #207fc9;
}
.mainBox .top .messageBox .messageView {
  width: 12rem;
  font-size: 0.65rem;
  color: #666666;
}
.mainBox .top .messageBox .serviceView {
  border-radius: 10px;
  background-color: #207fc9;
  position: absolute;
  width: 3.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  right: 0.5rem;
  top: 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  text-align: center;
  color: #FFFFFF;
  z-index: 96;
}
.mainBox .top .messageBox .serviceView a {
  border: none;
  text-decoration: none;
  color: #FFFFFF;
}
.mainBox .top .messageBox .chuzhenDiv {
  width: 1.1rem;
  height: 2.4rem;
  z-index: 16;
}
.mainBox .top .messageBox .chuzhenDiv .addressImg {
  width: 1.1rem;
  height: 2.4rem;
}
.mainBox .top .messageBox .gapBox {
  width: 2.5rem;
  height: 0.6rem;
  right: 0.5rem;
  bottom: 1.25rem;
}
.mainBox .top .messageBox .gapBox .gapIcon {
  width: 0.5rem;
  height: 0.6rem;
}
.mainBox .top .messageBox .gapBox .addressNum {
  font-size: 0.65rem;
  color: #8a8a8a;
}
.mainBox .top .chuzhenBox {
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  width: 17.55rem;
  height: 15.05rem;
  left: 0.6rem;
  border-radius: 0.25rem;
  z-index: 15;
}
.mainBox .top .chuzhenBox .messageOrderBox {
    background-color: #ffffff;
    width: 16.55rem;
    border-radius: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    z-index: 4;
    display: flex;
}
.mainBox .top .chuzhenBox .messageOrderBox .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .top .chuzhenBox .messageOrderBox .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
}
.mainBox .top .chuzhenBox .messageOrderBox .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .top .chuzhenBox .messageOrderBox .userInfoMessage .docName .docName2 {
  font-size: 0.65rem;
}
.mainBox .top .chuzhenBox .messageOrderBox .userInfoMessage .docType {
  margin-bottom: 0.2rem;
  font-size: 0.65rem;
  color: #207fc9;
}
.mainBox .top .chuzhenBox .messageOrderBox .chuzhenDiv {
  width: 1.1rem;
  height: 2.4rem;
  left: 0rem;
  top: 0.375rem;
  z-index: 16;
}
.mainBox .top .chuzhenBox .messageOrderBox .chuzhenDiv .addressImg {
  width: 1.1rem;
  height: 2.4rem;
}
.mainBox .top .chuzhenBox .messageOrderBox .gapBox {
  width: 2.5rem;
  height: 0.6rem;
  right: 0.5rem;
  bottom: 1.25rem;
}
.mainBox .top .chuzhenBox .messageOrderBox .gapBox .gapIcon {
  width: 0.5rem;
  height: 0.6rem;
}
.mainBox .top .chuzhenBox .messageOrderBox .gapBox .addressNum {
  font-size: 0.65rem;
  color: #8a8a8a;
}
.mainBox .top .chuzhenBox .orderUl {
  width: 17.55rem;
}
.mainBox .top .chuzhenBox .orderUl li {
  width: 17.55rem;
  height: 4rem;
  font-size: 0.65rem;
  border-bottom: 1px solid #dedede;
}
.mainBox .top .chuzhenBox .orderUl li .orderTime {
  width: 17.55rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background-color: #f2f2f2;
}
.mainBox .top .chuzhenBox .orderUl li .orderBox {
  width: 17.55rem;
  height: 2.5rem;
  background-color: #FFFFFF;
  clear: both;
}
.mainBox .top .chuzhenBox .orderUl li .orderBox .time {
  border-width: 2px;
  border-color: #2e74d1;
  border-style: solid;
  width: 2.3rem;
  height: 1rem;
  border-radius: 0.25rem;
  margin-top: 0.75rem;
  margin-left: 0.7rem;
  z-index: 25;
  color: #207fc9;
  text-align: center;
  float: left;
}
.mainBox .top .chuzhenBox .orderUl li .orderBox .money {
  float: left;
  line-height: 2.5rem;
  margin-left: 0.5rem;
  color: #666666;
}
.mainBox .top .chuzhenBox .orderUl li .orderBox .orderBtn {
  float: right;
  color: #FFFFFF;
  margin-right: 0.5rem;
  margin-top: 0.525rem;
  background-color: #4eb92a;
  width: 3.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  border-radius: 0.25rem;
  text-align: center;
  z-index: 29;
}

</style>
