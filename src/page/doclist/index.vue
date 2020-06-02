<template>
<div class="detail_page">
    <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">名医直约首页</div>
    </div>
    <div id="content" class="mainBox" v-cloak>
	<div class="top" v-cloak>
		<div class="inputBox">
			<img @click="searchFun" class="searchImg" src="../../images/mingyi/searchBtn.png" />
			<input class="searchInput" placeholder="医生 | 科室 | 疾病 | 医院 " v-model="searchContent" />
		</div>
	</div>
	<div class="bottomBox">
		<div class="tuijianBox">
			<div class="leftBox">
				<select class="selectBox" name="select_name" @change="selectChange($event)">
				        <option value="1" v-model="selectNum">综合排序</option>
				        <option value="2" v-model="selectNum">价格从低到高</option>
						<option value="3" v-model="selectNum">价格从高到低</option>
				        <option value="4" v-model="selectNum">距离从近到远</option>
				        <option value="5" v-model="selectNum">距离从远到近</option>
				    </select>
			</div>
			<div class="rightBox">
				<select class="selectBox" name="select_name"  >
				        <option value="1">全国</option>
				        <option value="2">北京</option>
				        <option value="3">湖北</option>
				        <option value="4">河北</option>
				    </select>
			</div>
		</div>
		<ul>
				<li v-for="item in docArr">
					<div class="userImgBox">
						<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
					</div>
					<div class="userInfoMessage">
						<div class="docName">
							<span class="docName1">{{item.name}}</span> 
							<span class="docName2">{{item.titleName}}</span>
							<span class="docName3">{{item.distance}}km</span>
						</div>
						<div class="docType">{{item.docType}}</div>
						<div class="docWork">{{item.message}}</div>
						<div class="docOrder">
							<div class="feiyongBox">预约: <span style="color: #e13911;">¥ {{item.num}}</span> </div>
							<div class="orderBtn" @click="toOrderFun">预约</div>
						</div>
					</div>
				</li>
				
			</ul>
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
                	selectNum:1,
			searchContent:"",
			docArr:[
				{
					name:"王医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../images/mingyi/indexUserImg.png",
					num:60,
					distance:5
				},
				{
					name:"张医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../images/mingyi/indexUserImg.png",
					num:80,
					distance:3
				},
				{
					name:"张医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../images/mingyi/indexUserImg.png",
					num:100,
					distance:4
				},
				{
					name:"赵医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../images/mingyi/indexUserImg.png",
					num:160,
					distance:6
				},
				{
					name:"张医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../images/mingyi/indexUserImg.png",
					num:120,
					distance:7
				},
				{
					name:"张医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../images/mingyi/indexUserImg.png",
					num:140,
					distance:9
				},
				{
					name:"李医生",
					titleName:"主治医师",
					docType:"精神科 北京首都医院",
					message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
					img:"../../images/mingyi/indexUserImg.png",
					num:180,
					distance:10
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
            searchFun(){},
            goPageFun(){
               window.history.back(-1); 

            },
            toOrderFun:function(){
                this.$router.push('/yydocorderList')
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
  height: 1.45rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  background-color: #FFFFFF;
}
.mainBox .top .inputBox {
  background-color: #f2f2f2;
  position: absolute;
  width: 17.5rem;
  height: 1.45rem;
  left: 0.625rem;
  border-radius: 0.75rem;
  z-index: 53;
}
.mainBox .top .inputBox .searchImg {
  margin-left: 0.625rem;
  width: 0.8rem;
  height: 0.8rem;
}
.mainBox .top .inputBox .searchInput {
  width: 15rem;
  height: 0.8rem;
  background-color: transparent;
  border: 0;
}
.mainBox .bottomBox {
  width: 100%;
  position: absolute;
  top: 2.05rem;
  left: 0px;
}
.mainBox .bottomBox .tuijianBox {
  height: 2.625rem;
  padding-left: 1rem;
  line-height: 2.475rem;
  background-color: #FFFFFF;
  clear: both;
  text-align: center;
}
.mainBox .bottomBox .tuijianBox .selectBox {
  border: none;
  background-color: #FFFFFF;
}
.mainBox .bottomBox .tuijianBox .leftBox {
  width: 8.75rem;
  height: 2.625rem;
  border-right: 1px solid #DEDEDE;
  float: left;
}
.mainBox .bottomBox .tuijianBox .rightBox {
  width: 8.875rem;
  height: 2.625rem;
  float: right;
}
.mainBox .bottomBox ul {
  padding: 0.625rem 0.6rem 0 0.6rem;
}
.mainBox .bottomBox ul li {
  height: 6.75rem;
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding: 0.375rem 0.5rem 0.375rem 0.5rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  z-index: 12;
  clear: both;
}
.mainBox .bottomBox ul li .userImgBox {
  float: left;
  width: 2.2rem;
  height: 4.25rem;
}
.mainBox .bottomBox ul li .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .bottomBox ul li .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .bottomBox ul li .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
  clear: both;
}
.mainBox .bottomBox ul li .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .bottomBox ul li .userInfoMessage .docName .docName2 {
  font-size: 0.65rem;
}
.mainBox .bottomBox ul li .userInfoMessage .docName .docName3 {
  float: right;
  font-size: 0.65rem;
  margin-right: 0.65rem;
}
.mainBox .bottomBox ul li .userInfoMessage .docType {
  margin-bottom: 0.2rem;
  font-size: 0.65rem;
  color: #207fc9;
}
.mainBox .bottomBox ul li .userInfoMessage .docWork {
  font-size: 0.7rem;
  color: #232323;
}
.mainBox .bottomBox ul li .userInfoMessage .docOrder {
  width: 100%;
  font-size: 0.7rem;
  height: 1.5rem;
  color: #232323;
  clear: both;
}
.mainBox .bottomBox ul li .userInfoMessage .docOrder .feiyongBox {
  float: left;
}
.mainBox .bottomBox ul li .userInfoMessage .docOrder .orderBtn {
  border-radius: 10px;
  background-color: #4eb92a;
  float: right;
  width: 3.25rem;
  height: 1.3rem;
  line-height: 1.3rem;
  text-align: center;
  color: #FFFFFF;
  z-index: 21;
}

  
</style>
