<template>
<div class="detail_page homeindex">
    <div class="titleBox" @click="goPageFun">
            <div class="titleContent">我的订单</div>
    </div>
    <div id="content" class="mainBox" v-cloak>
	<div class="top" v-cloak>
		<div class="inputBox">
			<ul class="tabUl">
				<li :class="showNum == 1 ? 'selectLi' : ''" @click="selectFun(1)">待支付/待审核</li>
				<li :class="showNum == 2 ? 'selectLi' : ''" @click="selectFun(2)">待诊断</li>
				<li :class="showNum == 3 ? 'selectLi' : ''" @click="selectFun(3)">进行中</li>
				<li :class="showNum == 4 ? 'selectLi' : ''" @click="selectFun(4)">已完成</li>
				<li :class="showNum == 5 ? 'selectLi' : ''" @click="selectFun(5)">已取消</li>
				<li :class="showNum == 0 ? 'selectLi' : ''" @click="selectFun(0)">全部</li>
			</ul>
		</div>
	</div>
	<div class="contentBox" v-if="showNum==1">
		<ul>
				<li class="waitExamineli" v-for="item in doc1Arr">
					<div class="userImgBox" @click="toInfoFun(1)">
						<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
					</div>
					<div class="userInfoMessage" @click="toInfoFun(1)">
						<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName4">待支付</span></div>
					</div>
					<div class="userContentBox" @click="toInfoFun(1)">
						<div class="describeBox timeSpan">
							{{item.orderTime}}
						</div>
						<div class="describeBox desBox">
							预约医院：{{item.hospital}}
						</div>
						<div class="describeBox desBox">
							科室：{{item.department}}
						</div>
						<div class="describeBox des2Box">
							金额：¥ {{item.money}}
						</div>
					</div>
					<div class="clearBtnBox">
						<div class="timeBox">剩余支付时间: 30分00秒</div>
						<div class="okBtn"  @click="toPayFun">去支付</div>
						<div class="clearBtn" @click="showMessageFun">取消</div>
					</div>
				</li>
				
			</ul>
	</div>
	<div class="contentBox" v-else-if="showNum==2">
		<ul>
				<li class="waitLi" v-for="item in doc2Arr">
					<div class="userImgBox"  @click="toInfoFun(2)">
						<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
					</div>
					<div class="userInfoMessage"  @click="toInfoFun(2)">
						<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName3">已审核,待诊断</span></div>
					</div>
					<div class="userContentBox"  @click="toInfoFun(2)">
						<div class="describeBox timeSpan">
							预约时间：{{item.orderTime}}
						</div>
						<div class="describeBox desBox">
							预约医院：{{item.hospital}}
						</div>
						<div class="describeBox desBox">
							科室：{{item.department}}
						</div>
						<div class="describeBox des2Box">
							详细地址：{{item.detailed}}
						</div>
						<div class="describeBox des2Box">
							说明：{{item.explain}}
						</div>
						<div class="describeBox des2Box">
							私人助理：{{item.assistant}}
						</div>
						<div class="describeBox des2Box">
							联系方式：{{item.phone}}
						</div>
						<div class="describeBox des2Box">
							金额：¥ {{item.money}}
						</div>
					</div>
					<div class="clearBtnBox">
						<div class="clearBtn" @click="showMessageFun">取消</div>
					</div>
				</li>
				
			</ul>
	</div>
	<div class="contentBox" v-else-if="showNum==3">
		<ul>
				<li class="overBoxli" v-for="item in doc3Arr"  @click="toInfoFun(3)">
					<div class="userImgBox">
						<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
					</div>
					<div class="userInfoMessage">
						<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName3">已诊断,待确认</span></div>
					</div>
					<div class="userContentBox">
						<div class="describeBox timeSpan">
							预约时间：{{item.orderTime}}
						</div>
						<div class="describeBox desBox">
							预约医院：{{item.hospital}}
						</div>
						<div class="describeBox desBox">
							科室：{{item.department}}
						</div>
						<div class="describeBox des2Box">
							详细地址：{{item.detailed}}
						</div>
						<div class="describeBox des2Box">
							说明：{{item.explain}}
						</div>
						<div class="describeBox des2Box">
							私人助理：{{item.assistant}}
						</div>
						<div class="describeBox des2Box">
							联系方式：{{item.phone}}
						</div>
						<div class="describeBox des2Box">
							金额：¥ {{item.money}}
						</div>
					</div>
				</li>
				
			</ul>
	</div>
	<div class="contentBox" v-else-if="showNum==4">
		<ul>
				<li class="overBoxli"  v-for="item in doc4Arr"  @click="toInfoFun(4)">
					<div class="userImgBox">
						<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
					</div>
					<div class="userInfoMessage">
						<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName3">已完成</span></div>
					</div>
					<div class="userContentBox">
						<div class="describeBox timeSpan">
							预约时间：{{item.orderTime}}
						</div>
						<div class="describeBox desBox">
							预约医院：{{item.hospital}}
						</div>
						<div class="describeBox desBox">
							科室：{{item.department}}
						</div>
						<div class="describeBox des2Box">
							详细地址：{{item.detailed}}
						</div>
						<div class="describeBox des2Box">
							说明：{{item.explain}}
						</div>
						<div class="describeBox des2Box">
							私人助理：{{item.assistant}}
						</div>
						<div class="describeBox des2Box">
							联系方式：{{item.phone}}
						</div>
						<div class="describeBox des2Box">
							金额：¥ {{item.money}}
						</div>
					</div>
				</li>
				
			</ul>
	</div>
	
	<div class="contentBox" v-else-if="showNum==5">
		<ul>
				<li class="cancelli" v-for="item in doc4Arr"  @click="toInfoFun(5)">
					<div class="userImgBox">
						<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
					</div>
					<div class="userInfoMessage">
						<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName2">已取消</span></div>
					</div>
					<div class="userContentBox">
						<div class="describeBox timeSpan">
							预约时间：{{item.orderTime}}
						</div>
						<div class="describeBox desBox">
							预约医院：{{item.hospital}}
						</div>
						<div class="describeBox desBox">
							科室：{{item.department}}
						</div>
						<div class="describeBox des2Box">
							金额：¥ {{item.money}}
						</div>
					</div>
				</li>
				
			</ul>
	</div>
	
	<div class="contentBox" v-else-if="showNum==0">
		<ul>
			<li class="waitExamineli" v-for="item in doc1Arr ">
				<div class="userImgBox"  @click="toInfoFun(1)">
					<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
				</div>
				<div class="userInfoMessage"  @click="toInfoFun(1)">
					<div class="docName">
                        <span class="docName1">{{item.name}}</span>
                        <span class="docName4">待支付</span>
                    </div>
				</div>
				<div class="userContentBox"  @click="toInfoFun(1)">
					<div class="describeBox timeSpan">
						{{item.orderTime}}
					</div>
					<div class="describeBox desBox">
						预约医院：{{item.hospital}}
					</div>
					<div class="describeBox desBox">
						科室：{{item.department}}
					</div>
					<div class="describeBox des2Box">
						金额：¥ {{item.money}}
					</div>
				</div>
				<div class="clearBtnBox">
					<div class="timeBox">剩余支付时间: 30分00秒</div>
					<div class="okBtn"  @click="toPayFun">去支付</div>
					<div class="clearBtn" @click="showMessageFun">取消</div>
				</div>
			</li>
			<li class="waitLi" v-for="item in doc2Arr">
				<div class="userImgBox"  @click="toInfoFun(2)">
					<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
				</div>
				<div class="userInfoMessage"  @click="toInfoFun(2)">
					<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName3">已审核,待诊断</span></div>
				</div>
				<div class="userContentBox"  @click="toInfoFun(2)">
					<div class="describeBox timeSpan">
						预约时间：{{item.orderTime}}
					</div>
					<div class="describeBox desBox">
						预约医院：{{item.hospital}}
					</div>
					<div class="describeBox desBox">
						科室：{{item.department}}
					</div>
					<div class="describeBox des2Box">
						详细地址：{{item.detailed}}
					</div>
					<div class="describeBox des2Box">
						说明：{{item.explain}}
					</div>
					<div class="describeBox des2Box">
						私人助理：{{item.assistant}}
					</div>
					<div class="describeBox des2Box">
						联系方式：{{item.phone}}
					</div>
					<div class="describeBox des2Box">
						金额：¥ {{item.money}}
					</div>
				</div>
				<div class="clearBtnBox">
					<div class="clearBtn" @click="showMessageFun">取消</div>
				</div>
			</li>
			<li class="overBoxli" v-for="item in doc3Arr" @click="toInfoFun(3)">
				<div class="userImgBox">
					<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
				</div>
				<div class="userInfoMessage">
					<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName3">已诊断,待确认</span></div>
				</div>
				<div class="userContentBox">
					<div class="describeBox timeSpan">
						预约时间：{{item.orderTime}}
					</div>
					<div class="describeBox desBox">
						预约医院：{{item.hospital}}
					</div>
					<div class="describeBox desBox">
						科室：{{item.department}}
					</div>
					<div class="describeBox des2Box">
						详细地址：{{item.detailed}}
					</div>
					<div class="describeBox des2Box">
						说明：{{item.explain}}
					</div>
					<div class="describeBox des2Box">
						私人助理：{{item.assistant}}
					</div>
					<div class="describeBox des2Box">
						联系方式：{{item.phone}}
					</div>
					<div class="describeBox des2Box">
						金额：¥ {{item.money}}
					</div>
				</div>
			</li>
			<li class="overBoxli"  v-for="item in doc4Arr"  @click="toInfoFun(4)">
				<div class="userImgBox">
					<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
				</div>
				<div class="userInfoMessage">
					<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName3">已完成</span></div>
				</div>
				<div class="userContentBox">
					<div class="describeBox timeSpan">
						预约时间：{{item.orderTime}}
					</div>
					<div class="describeBox desBox">
						预约医院：{{item.hospital}}
					</div>
					<div class="describeBox desBox">
						科室：{{item.department}}
					</div>
					<div class="describeBox des2Box">
						详细地址：{{item.detailed}}
					</div>
					<div class="describeBox des2Box">
						说明：{{item.explain}}
					</div>
					<div class="describeBox des2Box">
						私人助理：{{item.assistant}}
					</div>
					<div class="describeBox des2Box">
						联系方式：{{item.phone}}
					</div>
					<div class="describeBox des2Box">
						金额：¥ {{item.money}}
					</div>
				</div>
			</li>
			<li class="cancelli" v-for="item in doc5Arr"  @click="toInfoFun(5)">
					<div class="userImgBox">
						<img class="userInfoImg" src='../../images/mingyi/indexUserImg.png' />
					</div>
					<div class="userInfoMessage">
						<div class="docName"><span class="docName1">{{item.name}}</span> <span class="docName2">已取消</span></div>
					</div>
					<div class="userContentBox">
						<div class="describeBox timeSpan">
							预约时间：{{item.orderTime}}
						</div>
						<div class="describeBox desBox">
							预约医院：{{item.hospital}}
						</div>
						<div class="describeBox desBox">
							科室：{{item.department}}
						</div>
						<div class="describeBox des2Box">
							金额：¥ {{item.money}}
						</div>
					</div>
			</li>
				
		</ul>
	</div>

    <div class="maskDiv" v-else-if="showMask">
                <div class="payBox">
                    <div class="titleBox1">
                        <div class="titleMeg">订单支付</div>
                        <div class="imgBox" @click="hidePayFun">
                            <img class="imgClose"  src="../../images/mingyi/closeBtn.png" />
                        </div>
                    </div>
                    <div class="contentBox">
                        <div class="payImgBox">
                            <img class="payImg" src="../../images/mingyi/img5.png" />
                        </div>
                        <div class="payBtnBox" @click="payFun">立即支付</div>
                    </div>
                </div>
                
        </div>
        
        
    <div class="maskDiv" v-else-if="showMessage">
            <div class="tipMessageBox">
                <div class="titleBox1">
                    <div class="titleMeg">系统提醒</div>
                    <div class="imgBox" @click="hideMessageFun">
                        <img class="imgClose"  src="../../images/mingyi/closeBtn.png" />
                    </div>
                </div>
                <div class="tipContentBox">
                    <div class="contentMsg">确定要取消订单吗</div>
                    <div class="btnBox">
                        <div class="closeBtnBox" @click="hideMessageFun">取消</div>
                        <div class="okBtnBox" @click="hideMessageFun">确定</div>
                    </div>
                    
                </div>
            </div>
    </div>
	
</div>

    
 <foot-guide></foot-guide>

</div>
</template>

<script>
    import 'src/style/comman.css'
    import headTop from 'src/components/header/head'
    import footGuide from "src/components/footer/footGuide";

    export default {
      data(){
            return{
                showNum:1,
                showMask:false,
                showMessage:false,
                doc1Arr:[{
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
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
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:1,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    }],
                doc2Arr:[{
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:2,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:2,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    }],
                    doc3Arr:[{
                            name:"张医生",
                            titleName:"主治医师",
                            docType:"精神科 北京首都医院",
                            message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                            img:"../../images/mingyi/indexUserImg.png",
                            states:3,
                            orderTime:"2020-02-18  9:00-10:00 周二 上午",
                            hospital:"北京市第一医院",
                            department:"精神科",
                            detailed:"一层101",
                            explain:"说明点啥",
                            assistant:"小助理",
                            phone:"15166668888",
                            money:"1000"
                        },
                        {
                            name:"张医生",
                            titleName:"主治医师",
                            docType:"精神科 北京首都医院",
                            message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                            img:"../../images/mingyi/indexUserImg.png",
                            states:3,
                            orderTime:"2020-02-18  9:00-10:00 周二 上午",
                            hospital:"北京市第一医院",
                            department:"精神科",
                            detailed:"一层101",
                            explain:"说明点啥",
                            assistant:"小助理",
                            phone:"15166668888",
                            money:"1000"
                        }],
                        doc4Arr:[{
                                name:"张医生",
                                titleName:"主治医师",
                                docType:"精神科 北京首都医院",
                                message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                                img:"../../images/mingyi/indexUserImg.png",
                                states:4,
                                orderTime:"2020-02-18  9:00-10:00 周二 上午",
                                hospital:"北京市第一医院",
                                department:"精神科",
                                detailed:"一层101",
                                explain:"说明点啥",
                                assistant:"小助理",
                                phone:"15166668888",
                                money:"1000"
                            },
                            {
                                name:"张医生",
                                titleName:"主治医师",
                                docType:"精神科 北京首都医院",
                                message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                                img:"../../images/mingyi/indexUserImg.png",
                                states:4,
                                orderTime:"2020-02-18  9:00-10:00 周二 上午",
                                hospital:"北京市第一医院",
                                department:"精神科",
                                detailed:"一层101",
                                explain:"说明点啥",
                                assistant:"小助理",
                                phone:"15166668888",
                                money:"1000"
                            }],
                            doc5Arr:[{
                                    name:"张医生",
                                    titleName:"主治医师",
                                    docType:"精神科 北京首都医院",
                                    message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                                    img:"../../images/mingyi/indexUserImg.png",
                                    states:5,
                                    orderTime:"2020-02-18  9:00-10:00 周二 上午",
                                    hospital:"北京市第一医院",
                                    department:"精神科",
                                    detailed:"一层101",
                                    explain:"说明点啥",
                                    assistant:"小助理",
                                    phone:"15166668888",
                                    money:"1000"
                                },
                                {
                                    name:"张医生",
                                    titleName:"主治医师",
                                    docType:"精神科 北京首都医院",
                                    message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                                    img:"../../images/mingyi/indexUserImg.png",
                                    states:5,
                                    orderTime:"2020-02-18  9:00-10:00 周二 上午",
                                    hospital:"北京市第一医院",
                                    department:"精神科",
                                    detailed:"一层101",
                                    explain:"说明点啥",
                                    assistant:"小助理",
                                    phone:"15166668888",
                                    money:"1000"
                                }],
                docArr:[
                    
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:2,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:3,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:4,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:5,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
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
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:2,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:3,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:4,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    },
                    {
                        name:"张医生",
                        titleName:"主治医师",
                        docType:"精神科 北京首都医院",
                        message:"擅长：抑郁症，精神分裂症，失眠焦虑，睡眠障碍",
                        img:"../../images/mingyi/indexUserImg.png",
                        states:5,
                        orderTime:"2020-02-18  9:00-10:00 周二 上午",
                        hospital:"北京市第一医院",
                        department:"精神科",
                        detailed:"一层101",
                        explain:"说明点啥",
                        assistant:"小助理",
                        phone:"15166668888",
                        money:"1000"
                    }
                ]
            }
        },
        components: {
            headTop,
            footGuide
        },
        mounted(){
            				this.showNum = 0;

            console.log(this.$route.query.num)
            var num = this.$route.query.num
            // var num = this.GetQueryString("num");
			console.log(num)
			if(num != undefined && num != "" && num != null  && num != "null"){
                                console.log("AA")

				this.showNum = num;
			}else{
                console.log("BB")
				this.showNum = 0;
			}
        },
        computed: {
        
        },
        methods: {
            goPageFun(){
               window.history.back(-1); 

            },
            goOutFun(){
                self.location = "../../login.html";
            },
            selectFun(num){
				this.showNum = num;
				console.log(this.showNum)
            },
            toInfoFun(num){
                this.showNum = num;
                console.log(num,"KKKLLLL")
				let src = "";
				switch(num){
					case 1:
						src = "/waitExamine";
					break;
					case 2:
						src = "/waitorder"
					break;
					case 3:
						src = "/goingOrder"
					break;
					case 4:
						src = "/overorder"
					break;
					case 5:
						src = "/cancelorder"
					break;
        }
        this.$router.push(src)
            },
            GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)return  unescape(r[2]); return null;
            },
            toPayFun(){
				this.showMask = true;
			},
			hidePayFun(){
				this.showMask = false;
            },
            payFun(){
				self.location = "policyManagement.html?showRadio=1";
			},
			showMessageFun(){
				this.showMessage = true;
            },
            hideMessageFun(){
				this.showMessage = false;
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
.mainBox .top .inputBox {
  background-color: #FFFFFF;
  position: absolute;
  width: 17.5rem;
  height: 1.45rem;
  left: 0.625rem;
  border-radius: 0.75rem;
  z-index: 53;
}
.mainBox .top .inputBox .tabUl {
  width: 17.5rem;
  height: 1.45rem;
  clear: both;
}
.mainBox .top .inputBox .tabUl li {
  float: left;
  width: 2.5rem;
  height: 1.45rem;
  line-height: 1.45rem;
  font-size: 0.65rem;
  color: #207fc9;
  text-align: center;
}
.mainBox .top .inputBox .tabUl li:first-child {
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  width: 5rem;
}
.mainBox .top .inputBox .tabUl li:last-child {
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}
.mainBox .top .inputBox .tabUl .selectLi {
  background-color: #207fc9;
  color: #FFFFFF;
}
.mainBox .contentBox {
  width: 100%;
  position: absolute;
  top: 4.275rem;
  left: 0px;
}
.mainBox .contentBox ul {
  padding-left: 0.6rem;
  padding-top: 0.625rem;
  padding-right: 0.6rem;
}
.mainBox .contentBox ul .waitExamineli {
  height: 10.8rem;
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
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
  width: 15.5rem;
  height: 5.25rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
}
.mainBox .contentBox ul .waitExamineli .userContentBox .describeBox {
  width: 15.5rem;
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
  width: 15.5rem;
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
.mainBox .contentBox ul .waitLi {
  height: 15.8rem;
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  z-index: 12;
  clear: both;
}
.mainBox .contentBox ul .waitLi .userImgBox {
  float: left;
  width: 2.2rem;
  height: 2.25rem;
}
.mainBox .contentBox ul .waitLi .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
  clear: both;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName .docName2 {
  float: right;
  color: #8c8c8c;
  font-size: 0.65rem;
}
.mainBox .contentBox ul .waitLi .userInfoMessage .docName .docName3 {
  float: right;
  font-size: 0.65rem;
  color: #4eb92a;
}
.mainBox .contentBox ul .waitLi .userContentBox {
  width: 15.5rem;
  height: 10.25rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
}
.mainBox .contentBox ul .waitLi .userContentBox .describeBox {
  width: 15.5rem;
  height: 1.25rem;
  font-size: 0.7rem;
}
.mainBox .contentBox ul .waitLi .userContentBox .timeSpan {
  color: #2e74d1;
}
.mainBox .contentBox ul .waitLi .userContentBox .desBox {
  color: #232323;
}
.mainBox .contentBox ul .waitLi .userContentBox .des2Box {
  color: #8c8c8c;
}
.mainBox .contentBox ul .waitLi .clearBtnBox {
  width: 15.5rem;
  height: 2.725rem;
  border-top: 1px solid #DEDEDE;
  clear: both;
}
.mainBox .contentBox ul .waitLi .clearBtnBox .clearBtn {
  float: right;
  background-color: #d5d5d5;
  width: 3.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  margin-top: 0.625rem;
  color: #ffffff;
  text-align: center;
  z-index: 15;
}
.mainBox .contentBox ul .overBoxli {
  height: 13rem;
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  z-index: 12;
  clear: both;
}
.mainBox .contentBox ul .overBoxli .userImgBox {
  float: left;
  width: 2.2rem;
  height: 2.25rem;
}
.mainBox .contentBox ul .overBoxli .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .contentBox ul .overBoxli .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .contentBox ul .overBoxli .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
  clear: both;
}
.mainBox .contentBox ul .overBoxli .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .contentBox ul .overBoxli .userInfoMessage .docName .docName2 {
  float: right;
  color: #8c8c8c;
  font-size: 0.65rem;
}
.mainBox .contentBox ul .overBoxli .userInfoMessage .docName .docName3 {
  float: right;
  font-size: 0.65rem;
  color: #4eb92a;
}
.mainBox .contentBox ul .overBoxli .userContentBox {
  width: 15.5rem;
  height: 9rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
}
.mainBox .contentBox ul .overBoxli .userContentBox .describeBox {
  width: 15.5rem;
  height: 1.25rem;
  font-size: 0.7rem;
}
.mainBox .contentBox ul .overBoxli .userContentBox .timeSpan {
  color: #2e74d1;
}
.mainBox .contentBox ul .overBoxli .userContentBox .desBox {
  color: #232323;
}
.mainBox .contentBox ul .overBoxli .userContentBox .des2Box {
  color: #8c8c8c;
}
.mainBox .contentBox ul .cancelli {
  height: 8rem;
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  z-index: 12;
  clear: both;
}
.mainBox .contentBox ul .cancelli .userImgBox {
  float: left;
  width: 2.2rem;
  height: 2.25rem;
}
.mainBox .contentBox ul .cancelli .userImgBox .userInfoImg {
  width: 2.2rem;
  height: 2.2rem;
}
.mainBox .contentBox ul .cancelli .userInfoMessage {
  float: left;
  width: 13.5rem;
  margin-left: 0.5rem;
}
.mainBox .contentBox ul .cancelli .userInfoMessage .docName {
  margin-bottom: 0.2rem;
  color: #232323;
  clear: both;
}
.mainBox .contentBox ul .cancelli .userInfoMessage .docName .docName1 {
  font-size: 0.8rem;
}
.mainBox .contentBox ul .cancelli .userInfoMessage .docName .docName2 {
  float: right;
  color: #8c8c8c;
  font-size: 0.65rem;
}
.mainBox .contentBox ul .cancelli .userInfoMessage .docName .docName3 {
  float: right;
  font-size: 0.65rem;
  color: #4eb92a;
}
.mainBox .contentBox ul .cancelli .userInfoMessage .docName .docName4 {
  float: right;
  font-size: 0.65rem;
  color: #e13911;
}
.mainBox .contentBox ul .cancelli .userContentBox {
  width: 15.5rem;
  height: 4.75rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
}
.mainBox .contentBox ul .cancelli .userContentBox .describeBox {
  width: 15.5rem;
  height: 1.25rem;
  font-size: 0.7rem;
}
.mainBox .contentBox ul .cancelli .userContentBox .timeSpan {
  color: #2e74d1;
}
.mainBox .contentBox ul .cancelli .userContentBox .desBox {
  color: #232323;
}
.mainBox .contentBox ul .cancelli .userContentBox .des2Box {
  color: #8c8c8c;
}
.mainBox .contentBox ul .cancelli .clearBtnBox {
  width: 15.5rem;
  height: 2.725rem;
  line-height: 2.725rem;
  border-top: 1px solid #DEDEDE;
  font-size: 0.65rem;
  clear: both;
}
.mainBox .contentBox ul .cancelli .clearBtnBox .timeBox {
  float: left;
  width: 8.25rem;
  height: 1.45rem;
  color: #207fc9;
}
.mainBox .contentBox ul .cancelli .clearBtnBox .okBtn {
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
.mainBox .contentBox ul .cancelli .clearBtnBox .clearBtn {
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
  height: 5.475rem;
  left: 0.6rem;
  top: 14.075rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  z-index: 3;
}
.mainBox .waitExamineOrderInfo .titleBox1 {
  height: 2.125rem;
  line-height: 2.125rem;
  font-size: 0.8rem;
  color: #232323;
  border-bottom: 1px solid #DEDEDE;
}
.mainBox .waitExamineOrderInfo .contentBox1 {
  height: 2.35rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.mainBox .waitExamineOrderInfo .contentBox1 .contentInfo {
  line-height: 1.25rem;
  font-size: 0.7rem;
  color: #8c8c8c;
}
.mainBox .waitOrderInfo {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 7.5rem;
  left: 0.6rem;
  right: 0.6rem;
  top: 25rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  z-index: 3;
}
.mainBox .waitOrderInfo .titleBox2 {
  height: 2.125rem;
  line-height: 2.125rem;
  font-size: 0.8rem;
  color: #232323;
  border-bottom: 1px solid #DEDEDE;
}
.mainBox .waitOrderInfo .contentBox2 {
  height: 4.875rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.mainBox .waitOrderInfo .contentBox2 .contentInfo {
  line-height: 1.25rem;
  font-size: 0.7rem;
  color: #8c8c8c;
}
.mainBox .goingOrderInfo {
  top: 16.35rem;
}
.mainBox .assistantInfo {
  background-color: #ffffff;
  box-shadow: 0px 6px 10px 0px rgba(11, 4, 7, 0.05);
  position: absolute;
  height: 4.975rem;
  left: 0.6rem;
  right: 0.6rem;
  top: 19rem;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  z-index: 3;
}
.mainBox .assistantInfo .titleBox1 {
  height: 2.125rem;
  line-height: 2.125rem;
  font-size: 0.8rem;
  color: #232323;
  border-bottom: 1px solid #DEDEDE;
}
.mainBox .assistantInfo .contentBox1 {
  height: 2.35rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.mainBox .assistantInfo .contentBox1 .contentInfo {
  line-height: 1.25rem;
  font-size: 0.7rem;
  color: #232323;
}
.mainBox .goingAssistantInfo {
  top: 25.075rem;
}
.mainBox .cancelOrderInfo {
  top: 11.625rem;
  height: 10.4rem;
}


.homeindex{
  .titleBox{
    position: fixed;
    top:0
  }
}
</style>
