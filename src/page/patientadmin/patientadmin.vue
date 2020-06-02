 <template>
  <div class="rating_page">
        <div class="titleBox" style="absolute" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">我的资料</div>
        </div>
        <div id="content" class="mainBox">
	<div class="top" v-cloak>
		<div class="messageBox">
			<div class="user">
          <span class="name">医生照片</span>
          <span class="pic">			
            	<img class="userInfoImg" src="../../images/mingyi/indexUserImg.png" />
        </span>
			</div>
		</div>
		<div class="information">
        <ul>
          <li>
            <span class="inputleft">姓名</span>
            <span class="inputright">张三</span>
          </li>
           <li>
            <span class="inputleft">身份证号</span>
            <span class="inputright">2103811996089999</span>
          </li>
          <li>
            <span class="inputleft">医院</span>
            <span class="inputright">杭州医院</span>
          </li> 
          <li>
            <span class="inputleft">科是</span>
            <span class="inputright">精神科</span>
          </li> 
          <li>
            <span class="inputleft">级别</span>
            <span class="inputright">张三</span>
          </li> 
          <li>
            <span class="inputleft">从业事件</span>
            <span class="inputright">张三</span>
          </li>
        </ul>
    </div>
		<div class="Box describeBox">
			<div class="describeTitle">
				擅长
			</div>
			<div class="describeContent">
				{{docObj.message}}
			</div>
		</div>
		
		<div class="Box describeBox introductionBox" >
			<div class="describeTitle">
				简介
			</div>
			<div class="describeContent">
				{{docObj.introduction}}
			</div>
		</div>
		
		<div class="Box videoBox" >
			<div class="describeTitle">
				医生视频
			</div>
			<div class="videoView">
				<!-- <video autoplay="autoplay" loop="loop" muted="muted" src="../../video/790b5d448def5a856d2cb3508183c1fd.mp4"></video> -->
			</div>
		</div>
		
		<div class="Box honorBox" >
			<div class="describeTitle">
				医生荣誉
			</div>
			<div class="honorView">
				<div class="honorViewTitle">2020年，获得“全国优秀医师”称号</div>
				<div class="honorViewContent">
					<img class="imgBox" src="../../images/mingyi/img2.png" />
				</div>
			</div>
			<div class="honorView">
				<div class="honorViewTitle">2017年，获得“2017人民好医生”号</div>
				<div class="honorViewContent">
					<img class="imgBox" src="../../images/mingyi/img3.png" />
				</div>
			</div>
		</div>
		
		<!-- <div class="btnBox">
			<div class="serverBtn">
				<a href="tel:400-0000-688">客服</a>
			</div>
			<div class="orderBtn" @click="toOrderFun">预约</div>
		</div> -->
	</div>
	
</div>
    </div>
</template>

<script>
    export default {
      data(){
            return{
                 docObj:{
					name:"张医生",
					titleName:"主治医师",
					department:"精神科",
					hospital:"北京首都医院",
					time:"从业5年",
					message:"抑郁症，精神分裂症，失眠焦虑，抑郁症，精神分裂症，失眠焦虑。",
					introduction:"内科副主任医师。大学本科，医学学士。糖尿病专科门诊主诊医师，从事内科临床工作20余年，曾在四川省人民医院内科及华西医院急诊科进修学习，擅长于糖尿病、高血压和呼吸、消化、心血管、泌尿系统等内科各类疾病的诊断治疗，以及内科急重症的急诊急救。参研2项国家以及校级科研项目。公开发表医学论文11篇。",
					img:"../../images/mingyi/indexUserImg.png"
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
					time:"周三",
					money:1000,
					}
				]
            }
        },

        mounted(){
            // this.initData();
        },
        mixins: [],
        components: {
        },
        props:[],
        methods: {

            // ...mapMutations([
            //     'SAVE_QUESTION'
            // ]),
            // //获取信息
            // async initData(){
            //     this.serviceData = await getService();
            //     Object.keys(this.serviceData).forEach(item => {
            //         let avoidRepeat = false;
            //         this.questionTitle.forEach((insertItem) => {
            //             //防止重复的数据，后台返回的数据有些是重复的
            //             if (insertItem == this.serviceData[item]) {
            //                 avoidRepeat = true;
            //             }
            //         })
            //         //将标题和内容分别放进数组中
            //         if (item.indexOf('Caption') !== -1 && !avoidRepeat) {
            //                 this.questionTitle.push(this.serviceData[item]);
            //         }else if(!avoidRepeat){
            //             this.questionDetail.push(this.serviceData[item]);
            //         }
            //     })
            // },
            goPageFun(){
                  this.$router.go(-1);

            },
            aaa(){
                console.log("000")
            },
             goPageFun(){
               window.history.back(-1); 

            },
            toOrderFun:function(){
              this.$router.push('/yydocorderList')
            },
           
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
.mainBox {
  background-color: #f2f2f2;
  height: 100%;
}
.mainBox .Box {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  // position: absolute;
  left: 0.6rem;
  right: 0.6rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
}

.mainBox {
    .top {
      width: 100vw;
      background-color: #f2f2f2;
      .messageBox{
        .user{
            background-color: #ffffff;
            box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
            border-radius: 0.25rem;
            padding-left: 0.6rem;
            padding-right: 0.6rem;
            z-index: 4;
            height: 4rem;
            margin-top: 0.55rem;
            margin-left: 0.6rem;
            margin-right: 0.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .name{
              font-size:0.75rem;
              color:rgb(35,35,35);

            }
            .pic{
              width: 2.7rem;
              height: 2.7rem;
              display: inline-block;
              img{
                width:100%;
                height: 100%;
              }
            }

        }
      }
      .information{
          border-radius: 0.25rem;
          margin-top: 0.55rem;
          background-color: #ffffff;
          box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
          display: flex;
          margin: 0.55rem 0.6rem 0 0.6rem;
          ul{
            width: 100%;
            li{
              display: flex;
              display: -webkit-flex;
              justify-content: space-between;
              border-bottom: 1px solid #e6e6e6;
              height: 2.2rem;
              line-height: 2.2rem;
              padding: 0 0.6rem;
              .inputleft{
                font-size: 0.75rem;
                color: rgb(102,102,102);
              }
              .inputright{
                font-size: 0.75rem;
                color: rgb(35,35,35);
              }
            
            }
          }


      }
      .describeBox{
         margin: 0.55rem 0.6rem 0 0.6rem;
      }
      .describeBox{
         margin: 0.55rem 0.6rem 0 0.6rem;

      }
      .videoBox{
         margin: 0.55rem 0.6rem 0 0.6rem;

      }
      .honorBox{
        margin: 0.55rem 0.6rem 0 0.6rem;
      }
    }
}
// .mainBox .top .messageBox {
//     background-color: #ffffff;
//     box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
//     border-radius: 0.25rem;
//     padding-left: 0.5rem;
//     padding-right: 0.5rem;
//     z-index: 4;
//     height: 4.5rem;
//     margin-top: 0.55rem;
//     margin-left: 0.6rem;
//     margin-right: 0.6rem;
// }
// .mainBox .top .messageBox .userImgBox {
//   float: left;
//   width: 2.2rem;
// }
// .mainBox .top .messageBox .userImgBox .userInfoImg {
//   width: 2.2rem;
//   height: 2.2rem;
// }
// .mainBox .top .messageBox .userInfoMessage {
//   float: left;
//   width: 13.5rem;
//   margin-left: 0.5rem;
//   margin-top: 0.375rem;
// }
// .mainBox .top .messageBox .userInfoMessage .docName {
//   margin-bottom: 0.2rem;
//   color: #232323;
// }
// .mainBox .top .messageBox .userInfoMessage .docName .docName1 {
//   font-size: 0.8rem;
// }
// .mainBox .top .messageBox .userInfoMessage .docName .docName2 {
//   font-size: 0.65rem;
// }
// .mainBox .top .messageBox .userInfoMessage .docType {
  // margin-bottom: 0.2rem;
  // font-size: 0.65rem;
  // color: #207fc9;
.mainBox .describeBox {
//   width: 16.55rem;
  // height: 4rem;//3.825rem
  // top: 23.2rem;
}
.mainBox .describeBox .describeTitle {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.8rem;
  color: #232323;
}
.mainBox .describeBox .describeContent {
  width: 100%;
  height: 2.5rem;
  line-height: 1rem;
  font-size: 0.65rem;
  color: #666666;
}
.mainBox .introductionBox {
  height: 8.025rem;
  // top: 13.575rem;
}
.mainBox .videoBox {
  height: 10.9rem;
  // top: 22.525rem;
}
.mainBox .videoBox .describeTitle {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.8rem;
  color: #232323;
}
.mainBox .videoBox .videoView {
  width: 15.8rem;
  height: 8.2rem;
  margin-left: 0.375rem;
  margin-top: 0.375rem;
  background-color: #f2f2f2;
}
.mainBox .videoBox .videoView video {
  width: 15.8rem;
  height: 8.2rem;
}
.mainBox .honorBox {
  height: 24.45rem;
  // top: 34.1rem;
}
.mainBox .honorBox .describeTitle {
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.8rem;
  color: #232323;
}
.mainBox .honorBox .honorView {
  width: 15.8rem;
  height: 11.125rem;
  margin-left: 0.375rem;
  border-top: 1px solid #dedede;
}
.mainBox .honorBox .honorView .honorViewTitle {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.65rem;
  margin-top: 0.375rem;
  color: #666666;
}
.mainBox .honorBox .honorView .honorViewContent {
  width: 15.8rem;
  height: 8.2rem;
  margin-top: 0.375rem;
  background-color: #f2f2f2;
}
.mainBox .honorBox .honorView .honorViewContent .imgBox {
  width: 11.925rem;
  height: 8.05rem;
  margin-left: 1.925rem;
}
.mainBox .btnBox {
  position: fixed;
  width: 18.75rem;
  height: 2.225rem;
  padding-top: 0.25rem;
  bottom: -0.05rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  font-size: 0.8rem;
  text-align: center;
  color: #FFFFFF;
}
.mainBox .btnBox .serverBtn {
  background-color: #207fc9;
  position: absolute;
  width: 4.175rem;
  height: 2rem;
  line-height: 2rem;
  left: 1.425rem;
  border-radius: 0.275rem;
  z-index: 61;
}
.mainBox .btnBox .serverBtn a {
  border: none;
  text-decoration: none;
  color: #FFFFFF;
}
.mainBox .btnBox .orderBtn {
  border-radius: 11px;
  background-color: #4eb92a;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  position: absolute;
  width: 11.225rem;
  height: 2rem;
  line-height: 2rem;
  right: 1.425rem;
  border-radius: 0.275rem;
  z-index: 63;
}
</style>
