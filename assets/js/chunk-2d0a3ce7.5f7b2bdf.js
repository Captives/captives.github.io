(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3ce7"],{"046c":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{ref:"chart",staticClass:"chart-view"})},l=[],m=(n("99af"),n("4160"),n("d81d"),n("b0c0"),n("9a84")),o=(n("3139"),{name:"AirRouteMap1",methods:{},mounted:function(){this.chart=this.$echarts.init(this.$refs.chart),window.onresize=this.chart.resize;var e=this;window.onresize=function(){e.chart.resize()};var a=[[{name:"北京"},{name:"乌鲁木齐",value:95}],[{name:"北京"},{name:"广州",value:90}],[{name:"北京"},{name:"大连",value:80}],[{name:"北京"},{name:"南宁",value:70}],[{name:"北京"},{name:"南昌",value:60}],[{name:"北京"},{name:"拉萨",value:50}],[{name:"北京"},{name:"长春",value:40}],[{name:"北京"},{name:"包头",value:30}],[{name:"北京"},{name:"重庆",value:20}],[{name:"北京"},{name:"常州",value:10}]],n=[[{name:"上海"},{name:"包头",value:95}],[{name:"上海"},{name:"昆明",value:90}],[{name:"上海"},{name:"广州",value:80}],[{name:"上海"},{name:"郑州",value:70}],[{name:"上海"},{name:"长春",value:60}],[{name:"上海"},{name:"重庆",value:50}],[{name:"上海"},{name:"长沙",value:40}],[{name:"上海"},{name:"北京",value:30}],[{name:"上海"},{name:"丹东",value:20}],[{name:"上海"},{name:"大连",value:10}]],t=[[{name:"广州"},{name:"福州",value:95}],[{name:"广州"},{name:"太原",value:90}],[{name:"广州"},{name:"长春",value:80}],[{name:"广州"},{name:"乌鲁木齐",value:70}],[{name:"广州"},{name:"西安",value:60}],[{name:"广州"},{name:"成都",value:50}],[{name:"广州"},{name:"常州",value:40}],[{name:"广州"},{name:"北京",value:30}],[{name:"广州"},{name:"拉萨",value:20}],[{name:"广州"},{name:"海口",value:10}]],l="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",o=["#a6c84c","#ffa022","#46bee9"],r=[],i=function(e){for(var a=[],n=0;n<e.length;n++){var t=e[n],l=m["a"][t[0].name],o=m["a"][t[1].name];l&&o&&a.push([{coord:l},{coord:o}])}return a};[["北京",a],["上海",n],["广州",t]].forEach((function(e,a){r.push({name:e[0]+" Top10",type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:o[a],width:0,curveness:.2}},data:i(e[1])},{name:e[0]+" Top10",type:"lines",zlevel:2,symbol:["none","arrow"],symbolSize:10,effect:{show:!0,period:6,trailLength:0,symbol:l,symbolSize:15},lineStyle:{normal:{color:o[a],width:1,opacity:.6,curveness:.2}},data:i(e[1])},{name:e[0]+" Top10",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(e){return e[2]/8},itemStyle:{normal:{color:o[a]}},data:e[1].map((function(e){return{name:e[1].name,value:m["a"][e[1].name].concat([e[1].value])}}))})}));var u={backgroundColor:"#404a59",title:{text:"模拟迁徙",subtext:"数据纯属虚构",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:function(e,a,n){return console.log(e),"effectScatter"==e.seriesType?"线路："+e.data.name+e.data.value[2]:"lines"==e.seriesType?e.data.fromName+">"+e.data.toName+"<br />"+e.data.value:e.name}},legend:{orient:"vertical",top:"bottom",left:"right",data:["北京 Top10","上海 Top10","广州 Top10"],textStyle:{color:"#fff"},selectedMode:"multiple"},geo:{map:"china",label:{emphasis:{show:!0,color:"#fff"}},roam:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}},series:r};this.chart.setOption(u)}}),r=o,i=n("2877"),u=Object(i["a"])(r,t,l,!1,null,null,null);a["default"]=u.exports}}]);