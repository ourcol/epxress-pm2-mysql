webpackJsonp([1],{"+H5m":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("p",[this._v("6666")])],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("wnyr")},null,null).exports,r=n("/ocq"),o=n("NYxO"),c=n("mtWM"),u=n.n(c),l=n("mw3O"),p=n.n(l),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},m={name:"Home",data:()=>({msg:"修改test",tabs:[]}),created(){let t=this;u.a.get("http://192.168.199.118:3000/123").then(function(e){console.log(JSON.stringify(e)),t.tabs=e.data}).catch(function(t){console.log(t)}),u()({url:"http://192.168.199.118:3000/addUser",method:"post",data:p.a.stringify({id:"666",name:"777"})}).then(function(t){console.log(JSON.stringify(t))}).catch(function(t){console.log(t)})},computed:h({},Object(o.b)("List",["test"])),methods:{jump(){alert(this.test),!0===this.test?this.$store.commit("List/setTest",!1):this.$store.commit("List/setTest",!0),this.$router.push("/detail")}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._m(0),t._v(" "),n("button",{on:{click:t.jump}},[t._v(t._s(t.msg))]),t._v(" "),t._l(t.tabs,function(e){return n("p",{key:e.id},[t._v("\n    编号"+t._s(e.id)+"\n    "+t._s(e.name)+"\n    "+t._s(e.age)+"\n  ")])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("中国银行")]),this._v(" "),e("span",[this._v("0113")])])}]};var d=n("VU/8")(m,v,!1,function(t){n("ydT0")},"data-v-d7fe4a50",null).exports,f={name:"Detail",computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t})({},Object(o.b)("List",["test"])),methods:{back(){this.$router.go(-1)}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v(this._s(this.test))]),this._v(" "),e("p",[this._v("测试一下提交")]),this._v(" "),e("button",{on:{click:this.back}},[this._v("返回")])])},staticRenderFns:[]};var g=n("VU/8")(f,_,!1,function(t){n("+H5m")},null,null).exports;s.a.use(r.a);var b=new r.a({routes:[{path:"/",name:"home",component:d},{path:"/detail",name:"detail",component:g}]});var y={namespaced:!0,state:{test:!0},getters:{test:t=>t.test},mutations:{setTest(t,e){t.test=e}}};s.a.use(o.a);var O=new o.a.Store({modules:{List:y}});s.a.prototype.$qs=p.a,s.a.config.productionTip=!1,new s.a({el:"#app",router:b,store:O,axios:u.a,components:{App:i},template:"<App/>"})},wnyr:function(t,e){},ydT0:function(t,e){}},["NHnr"]);