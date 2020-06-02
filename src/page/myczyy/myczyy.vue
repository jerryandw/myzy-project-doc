 <template>
  <div class="rating_page">
          <div class="titleBox" @click="goPageFun">
            <div class="goPage" @click="goPageFun">
                <img class="goPageImg" src="../../images/mingyi/goPage.png" />
            </div>
            <div class="titleContent">出诊医院</div>
            <div class="addBtn" @click.stop="toAddFun">
                添加
            </div>
        </div>
        <div class="nouser" v-if="isuser">
            <span>还没有用户，赶快添加吧！</span>
        </div>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import {getService} from 'src/service/getData'
    import {mapMutations} from 'vuex'

    export default {
      data(){
            return{
                isuser:true,//收否有患者
                serviceData: null, //服务信息
                questionTitle: [], //问题标题
                questionDetail: [], //问题详情
                name:"",
                sex:"",
                bordth:"",
                phone:""
            }
        },

        mounted(){
            this.initData();
        },
        mixins: [],
        components: {
            headTop,
        },
        props:[],
        methods: {
            ...mapMutations([
                'SAVE_QUESTION'
            ]),
            goPageFun(){
                console.log("OOOPPP")
                window.history.back(-1); 

            },
            //获取信息
            initData(){
                // this.serviceData = await getService();
                // Object.keys(this.serviceData).forEach(item => {
                //     let avoidRepeat = false;
                //     this.questionTitle.forEach((insertItem) => {
                //         //防止重复的数据，后台返回的数据有些是重复的
                //         if (insertItem == this.serviceData[item]) {
                //             avoidRepeat = true;
                //         }
                //     })
                //     //将标题和内容分别放进数组中
                //     if (item.indexOf('Caption') !== -1 && !avoidRepeat) {
                //             this.questionTitle.push(this.serviceData[item]);
                //     }else if(!avoidRepeat){
                //         this.questionDetail.push(this.serviceData[item]);
                //     }
                // })
            },
            //保存问题详情
            toQuestionDetail(title, index){
                this.SAVE_QUESTION({title, detail: this.questionDetail[index]});
                this.$router.push('/service/questionDetail');
            },
            toAddFun(){
                console.log("LLL")
                this.$router.push('/addmyczyy');
            }
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
  
    .rating_page{
        background-color: #fff;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .service_connect{
        @include fj;
        a{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 4rem;
            border-bottom: 1px solid #f5f5f5;
            svg{
                @include wh(1rem, 1rem);
            }
            span{
                margin-top: .4rem;
                @include sc(.6rem, #666);
            }
        }
        .service_left{
            border-right: 1px solid #f5f5f5;
        }
    }
    .hot_questions{
        .qustion_header{
            @include sc(.75rem, #333);
            line-height: 3rem;
            border-bottom: 1px solid #f5f5f5;
            padding-left: .7rem;
        }
        .question_title{
            padding: 0 .7rem;
            line-height: 2rem;
            border-bottom: 1px solid #f5f5f5;
            @include fj;
            align-items: center;
            span{
                @include sc(.6rem, #666);
            }
            svg{
                @include wh(.6rem, .6rem);
            }
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
    //css
    .titleBox {
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
.titleBox .goPage {
  width: 0.45rem;
  height: 0.775rem;
  float: left;
  z-index: 999;
}
.titleBox .goPage .goPageImg {
  width: 0.45rem;
  height: 0.775rem;
  margin-left: 0.75rem;
}
.titleBox .addBtn {
  background-color: #4eb92a;
  position: absolute;
  width: 2.85rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  right: 0.75rem;
  top: 0.5rem;
  text-align: center;
  color: #ffffff;
  z-index: 999;
}
.titleBox .titleContent {
  position: absolute;
  width: 18.75rem;
  height: 2.225rem;
  top: 0;
  text-align: center;
  float: right;
}
.maskDiv {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  _position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 18.75rem;
  height: 100%;
  overflow: hidden;
}
.maskDiv .payBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  width: 17.55rem;
  height: 17.725rem;
  left: 0.6rem;
  bottom: 1.25rem;
  border-radius: 0.25rem;
  z-index: 3;
}
.maskDiv .payBox .titleBox1 {
  width: 17.55rem;
  height: 2.25rem;
  line-height: 2.25rem;
  font-size: 0.8rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-color: #207fc9;
  text-align: center;
  color: #ffffff;
  clear: both;
}
.maskDiv .payBox .titleBox1 .titleMeg {
  float: left;
  width: 10rem;
  height: 2.25rem;
  text-align: right;
}
.maskDiv .payBox .titleBox1 .imgBox {
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
  float: right;
}
.maskDiv .payBox .titleBox1 .imgBox .imgClose {
  width: 1rem;
  height: 1rem;
}
.maskDiv .payBox .contentBox {
  width: 17.55rem;
  height: 15.5rem;
}
.maskDiv .payBox .contentBox .payImgBox {
  width: 17.55rem;
  height: 10.875rem;
}
.maskDiv .payBox .contentBox .payImgBox .payImg {
  width: 17.55rem;
  height: 10.875rem;
}
.maskDiv .payBox .contentBox .payBtnBox {
  background-color: #4eb92a;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  width: 14.575rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  border-radius: 0.275rem;
  margin-left: 1.5rem;
  text-align: center;
  color: #FFFFFF;
  z-index: 27;
}
.maskDiv .tipMessageBox {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  width: 17.55rem;
  height: 10.225rem;
  left: 0.6rem;
  top: 12.5rem;
  border-radius: 0.25rem;
}
.maskDiv .tipMessageBox .titleBox1 {
  width: 17.55rem;
  height: 2.25rem;
  line-height: 2.25rem;
  font-size: 0.8rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-color: #207fc9;
  text-align: center;
  color: #ffffff;
  clear: both;
}
.maskDiv .tipMessageBox .titleBox1 .titleMeg {
  float: left;
  width: 10rem;
  height: 2.25rem;
  text-align: right;
}
.maskDiv .tipMessageBox .titleBox1 .imgBox {
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
  float: right;
}
.maskDiv .tipMessageBox .titleBox1 .imgBox .imgClose {
  width: 1rem;
  height: 1rem;
}
.maskDiv .tipMessageBox .tipContentBox {
  width: 17.55rem;
  height: 7.975rem;
}
.maskDiv .tipMessageBox .tipContentBox .contentMsg {
  width: 17.55rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.maskDiv .tipMessageBox .tipContentBox .btnBox {
  width: 17.55rem;
  height: 5rem;
}
.maskDiv .tipMessageBox .tipContentBox .btnBox .closeBtnBox {
  background-color: gray;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  width: 5.075rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  border-radius: 0.275rem;
  margin-left: 1.5rem;
  float: left;
  text-align: center;
  color: #FFFFFF;
  z-index: 27;
}
.maskDiv .tipMessageBox .tipContentBox .btnBox .okBtnBox {
  background-color: #4eb92a;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.3);
  width: 5.075rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  border-radius: 0.275rem;
  margin-right: 1.5rem;
  text-align: center;
  float: right;
  color: #FFFFFF;
  z-index: 27;
}
//没有患者
.nouser{
    height: 100vh;
    background: #fafafa;
    span{
        display: block;
        color: #333333;
        width: 100%;
        text-align: center;
        padding-top: 30%;
        font-size: 0.8rem;
    }
}
</style>
