(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"21d7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12 col-md-6 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"fit"},[a("q-card-section",[a("div",{staticClass:"text-h6 text-grey-8"},[t._v("\n        "+t._s(t.registerMode?"Delegator Giveaways":"Pool Giveaways")+"\n      ")])]),a("q-card-section",{staticClass:"q-pa-sm"},[a("q-table",{attrs:{data:this.getGiveaways,columns:t.columns},scopedSlots:t._u([{key:"body-cell-Rewards",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-item",{staticStyle:{"max-width":"420px"}},[a("q-item-section",[a("q-item-label",t._l(e.row.rewards,(function(e){return a("div",[a("q-chip",{attrs:{color:"blue-6","text-color":"white",icon:"mdi-seal"}},[t._v("\n                      "+t._s(e)+"\n                    ")])],1)})),0)],1)],1)],1)]}},t.registerMode?{key:"body-cell-Register",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{color:"green-4",size:"md",dense:"",disable:!1===t.userDetails.stake_address_registered}},[t._v("\n              Register\n            ")])],1)]}}:null,{key:"body-cell-Rules",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{color:"primary",icon:"mdi-information",flat:"",dense:""}},[a("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("div",{staticStyle:{"font-size":"15px"}},[t._v("\n                  "+t._s(e.row.rules)+"\n                ")])])],1)],1)]}}],null,!0)})],1)],1)],1)},o=[],i=(a("e6cf"),a("ded3")),l=a.n(i),r=a("2f62"),n={name:"TableGiveaways",computed:l()(l()({},Object(r["d"])("store",["userDetails"])),Object(r["c"])("giveawaysStore",["getGiveaways"])),props:{registerMode:null},data(){return{columns:[{name:"Name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"Start At",label:"Start At",field:"date_start",sortable:!0,align:"left"},{name:"End At",label:"End Date",field:"date_end",sortable:!0,align:"left"},{name:"Beneficiary",label:"Issuer",field:"issuer",sortable:!0,align:"left"},{name:"Rewards",label:"Rewards",field:"rewards",sortable:!1,align:"left"},{name:"Register",label:"",field:"register",sortable:!1,align:"right"},{name:"Rules",label:"Rules",field:"rules",sortable:!1,align:"center"}]}},beforeMount(){this.getData(),this.getStakeAddress()},methods:l()(l()({},Object(r["b"])("giveawaysStore",["fetchGiveaways","fetchStakeAddress"])),{},{async getData(){await this.fetchGiveaways()},async getStakeAddress(){}})},c=n,d=a("2877"),m=a("f09f"),h=a("a370"),u=a("eaac"),p=a("db86"),b=a("66e5"),g=a("4074"),f=a("0170"),y=a("b047"),v=a("9c40"),w=a("05c0"),C=a("eebe"),_=a.n(C),x=Object(d["a"])(c,s,o,!1,null,"5aa493d8",null);e["a"]=x.exports;_()(x,"components",{QCard:m["a"],QCardSection:h["a"],QTable:u["a"],QTd:p["a"],QItem:b["a"],QItemSection:g["a"],QItemLabel:f["a"],QChip:y["a"],QBtn:v["a"],QTooltip:w["a"]})},"3e16":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-sm"},[a("card-pool-infos",{attrs:{dataset:t.pool_data,icon_position:"left"}}),a("card-pool-charts",{attrs:{dataset:t.pool_history_data}}),a("div",{staticClass:"row q-col-gutter-md q-py-sm "},[a("card-time-line-pool-news"),a("card-grand-prize"),a("card-timeline-donations"),a("table-giveaways",{attrs:{registerMode:!1}})],1)],1)},o=[],i=(a("e6cf"),a("ddb0"),a("ded3")),l=a.n(i),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"fit"},[a("q-card-section",{staticClass:"text-h6 q-pb-none"},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticStyle:{"font-size":"2em"},attrs:{color:"blue",name:"mdi-handshake"}})],1),a("q-item-section",[a("div",{staticClass:"text-h6"},[t._v("Donations")])])],1)],1),a("q-card-section",{},[a("iframe",{staticClass:"airtable-embed",staticStyle:{background:"transparent",border:"1px solid #ccc"},attrs:{src:"https://airtable.com/embed/shr1yZ6VZiICzp6gX?backgroundColor=purple&layout=card&viewControls=on",frameborder:"0",onmousewheel:"",width:"100%",height:"533"}})])],1)],1)},n=[],c={name:"CardTimelineDonations",data(){return{timeline_list:[{title:"First Donation ",side:"left",desc:"First Donation incoming",color:"red",icon:"thumb_up"}]}}},d=c,m=a("2877"),h=a("f09f"),u=a("a370"),p=a("66e5"),b=a("4074"),g=a("0016"),f=a("eebe"),y=a.n(f),v=Object(m["a"])(d,r,n,!1,null,null,null),w=v.exports;y()(v,"components",{QCard:h["a"],QCardSection:u["a"],QItem:p["a"],QItemSection:b["a"],QIcon:g["a"]});var C=a("21d7"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"fit"},[a("q-card-section",{staticClass:"text-h6 q-pb-none"},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticStyle:{"font-size":"2em"},attrs:{color:"blue",name:"mdi-newspaper-variant-outline"}})],1),a("q-item-section",[a("div",{staticClass:"text-h6"},[t._v("Pool News")])])],1)],1),a("q-card-section",{},[a("q-timeline",{attrs:{color:"secondary"}},t._l(t.timeline_list,(function(e,s){return a("q-timeline-entry",{key:s,attrs:{title:e.title,subtitle:e.subtitle,color:e.color,icon:e.icon,side:e.side}},[a("div",[t._v("\n            "+t._s(e.desc)+"\n          ")])])})),1)],1)],1)],1)},x=[],q={name:"CardTimeLinePoolNews",data(){return{timeline_list:[{title:"Pool Nodes update 1.27.0",side:"left",desc:"Our servers are running with the latest node versions. You can always check their performance in the live data on menu.",color:"green",icon:"thumb_up"},{title:"New Dashboard",side:"left",desc:"Welcome to the Adazul Center alpha version, we have a lot of ideas to implement here, but the basic is already running enjoy!",color:"orange",icon:"mdi-check-circle"},{title:"Website updated ",side:"left",desc:"Updates were made in our website and domain to show more info about the team.",color:"blue",icon:"mdi-check-circle"}]}}},S=q,k=a("05eb"),Q=a("74af"),I=Object(m["a"])(S,_,x,!1,null,null,null),D=I.exports;y()(I,"components",{QCard:h["a"],QCardSection:u["a"],QItem:p["a"],QItemSection:b["a"],QIcon:g["a"],QTimeline:k["a"],QTimelineEntry:Q["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"fit",style:{"background-image":t.background_image}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("\n        Adazul Grand Prize\n      ")])]),a("q-separator"),a("q-card-section",[a("div",{staticClass:"text-h3 text-weight-bolder text-center"},[a("q-icon",{attrs:{name:"mdi-gold",color:"yellow-7"}})],1)]),a("q-card-section",{staticClass:"q-pa-none"},[a("div",{staticClass:"text-h4 text-weight-bolder text-center"},[t._v("\n        35 ₳\n      ")])]),a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("\n        ADABR holds 2% of pool rewards each epoch to the annual giveaway\n      ")])]),a("q-separator"),a("q-card-section",{staticClass:"text-center"},[t._v("\n      * To be eligible in a giveaway please go to Profile > Settings and register your stake address\n    ")]),a("q-card-section",{staticClass:"text-center"},[t._v("\n      ** Last pot update on epoch 271\n    ")])],1)],1)},A=[],P={name:"CardGrandPrize",props:["background_image"]},z=P,T=a("eb85"),E=Object(m["a"])(z,L,A,!1,null,"3ca945aa",null),G=E.exports;y()(E,"components",{QCard:h["a"],QCardSection:u["a"],QSeparator:T["a"],QIcon:g["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-transparent no-shadow no-border"},[a("q-card-section",{staticClass:"q-pa-none"},[a("div",{staticClass:"row q-col-gutter-sm "},t._l(t.items,(function(e,s){return a("div",{key:s,staticClass:"col-sm-4 col-md-4 col-lg-2 col-xs-6"},[a("q-item",{staticClass:"q-pa-none q-ml-xs",style:"background-color: "+e.color1},["left"===t.icon_position?a("q-item-section",{staticClass:" q-pa-lg q-mr-none text-white",style:"background-color: "+e.color2,attrs:{side:""}},[a("q-icon",{attrs:{name:e.icon,color:"white",size:"24px"}})],1):t._e(),a("q-item-section",{staticClass:" q-pa-md q-ml-none  text-white"},[a("q-item-label",{staticClass:"text-white text-h6 text-weight-bolder"},[t._v(t._s(e.value))]),a("q-item-label",[t._v(t._s(e.title))])],1),"right"===t.icon_position?a("q-item-section",{staticClass:"q-mr-md text-white",attrs:{side:""}},[a("q-icon",{attrs:{name:e.icon,color:"white",size:"44px"}})],1):t._e()],1)],1)})),0)])],1)},O=[],F={name:"CardPoolInfos",props:{dataset:{},icon_position:{required:!1,default:"left"}},computed:{items:function(){return[{title:"Delegators",icon:"person",value:this.dataset.live_delegators,color1:"#5064b5",color2:"#3e51b5"},{title:"Total Blocks",icon:"mdi-cube",value:this.dataset.blocks_minted,color1:"#75ce5c",color2:"#61bb45"},{title:"Active Stake",icon:"mdi-gold",value:new Intl.NumberFormat("en",{maximumSignificantDigits:4}).format(this.dataset.active_stake/1e6),color1:"#ea6a7f",color2:"#ea4b64"},{title:"Pledge",icon:"mdi-handshake",value:new Intl.NumberFormat("en",{maximumSignificantDigits:4}).format(this.dataset.declared_pledge/1e6),color1:"#5ecdcd",color2:"#5cbfb0"},{title:"Pool Fees",icon:"bar_chart",value:this.dataset.margin_cost+"%",color1:"#a270b1",color2:"#9f52b1"},{title:"Saturation",icon:"mdi-beer",value:new Intl.NumberFormat("en",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}).format(this.dataset.live_saturation),color1:"#a270b1",color2:"#9f52b1"}]}}},N=F,R=a("0170"),B=Object(m["a"])(N,j,O,!1,null,null,null),W=B.exports;y()(B,"components",{QCard:h["a"],QCardSection:u["a"],QItem:p["a"],QItemSection:b["a"],QIcon:g["a"],QItemLabel:R["a"]});var $=a("76c7"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row q-col-gutter-sm  q-py-sm"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"background-color":"#38b1c5"}},[a("q-card-section",{staticClass:"text-h6 text-white"},[t._v("\n        Pool Blocks / Epoch\n      ")]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.BlocksChartComputed,resizable:!0}})],1)],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"background-color":"#ea4b64"}},[a("q-card-section",{staticClass:"text-h6 text-white"},[t._v("\n        Pool Delegators / Epoch\n      ")]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.DelegatorsChartComputed,resizable:!0}})],1)],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"background-color":"#1e88e5"}},[a("q-card-section",{staticClass:"text-h6 text-white"},[t._v("\n        Pool Active Stake / Epoch\n      ")]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.ActiveStakeChartComputed,resizable:!0}})],1)],1)],1)])},H=[],J=a("4082"),Z=a.n(J),K=a("ce44"),U={name:"CardPoolCharts",props:{dataset:null},components:{IEcharts:K["a"]},computed:{BlocksChartComputed:function(){return{tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0,left:"0",bottom:"0",right:"0"},xAxis:{show:!1,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},boundaryGap:!1},yAxis:{show:!1,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"line",areaStyle:{},smooth:!1}],dataset:{source:this.filterBlocksChartComputed(this.dataset)},color:["#45c2c5"]}},ActiveStakeChartComputed:function(){return{tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0,left:"0",bottom:"0",right:"0"},xAxis:{show:!1,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},boundaryGap:!1},yAxis:{show:!1,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"line",areaStyle:{},smooth:!0}],dataset:{source:this.filterActiveStakeChartComputed(this.dataset)},color:["#2196f3"]}},DelegatorsChartComputed:function(){return{tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0,bottom:"10%",top:"5%"},xAxis:{show:!1,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1}},yAxis:{show:!1,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dot"}},axisLabel:{show:!0},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"bar",barGap:"-100%",itemStyle:{normal:{color:"rgba(0,0,0,0.1)"}},barWidth:"50%"},{barWidth:"50%",type:"bar",itemStyle:{normal:{color:"#ffffff"}}}],dataset:{source:this.filterDelegatorsChartComputed(this.dataset)}}}},methods:{filterActiveStakeChartComputed(t){let e=t.map((t=>{let{blocks:e,delegators_count:a,fees:s,rewards:o,active_size:i}=t,l=Z()(t,["blocks","delegators_count","fees","rewards","active_size"]);return l["Active Stake"]=l["active_stake"],delete l["active_stake"],l}));return e},filterDelegatorsChartComputed(t){let e=t.map((t=>{let{blocks:e,fees:a,rewards:s,active_size:o,active_stake:i}=t,l=Z()(t,["blocks","fees","rewards","active_size","active_stake"]);return l["Delegators"]=l["delegators_count"],delete l["delegators_count"],l}));return e},filterBlocksChartComputed(t){let e=t.map((t=>{let{delegators_live:e,fees:a,rewards:s,active_size:o,active_stake:i}=t,l=Z()(t,["delegators_live","fees","rewards","active_size","active_stake"]);return l["Delegators"]=l["delegators_count"],delete l["delegators_count"],l}));return e}},data(){return{forceKey:0}}},V=U,X=Object(m["a"])(V,M,H,!1,null,null,null),Y=X.exports;y()(X,"components",{QCard:h["a"],QCardSection:u["a"]});var tt=a("2f62"),et={name:"home",components:{CardPoolCharts:Y,CardPoolInfos:W,CardGrandPrize:G,CardTimeLinePoolNews:D,TableGiveaways:C["a"],CardTimelineDonations:w},data(){return{pool_data:{},pool_history_data:[],mode:"list"}},computed:l()({},Object(tt["d"])("store",["userDetails","adabr_id"])),beforeMount(){this.getPoolInfos(),this.getPoolHistory()},methods:{async getPoolInfos(){const t=await $["a"](this.adabr_id);200===t.status&&(this.pool_data=l()({},t.data))},async getPoolHistory(){const t=await $["b"](this.adabr_id);200===t.status&&(this.pool_history_data=[...t.data])}}},at=et,st=a("9989"),ot=Object(m["a"])(at,s,o,!1,null,"0a4b1e55",null);e["default"]=ot.exports;y()(ot,"components",{QPage:st["a"]})}}]);