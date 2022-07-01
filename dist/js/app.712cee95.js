(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var i=o[c];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gh-pages/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=i;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("GameContainer")],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"spock-container"}},[o("h1",[e._v("Rock Paper Scissors Lizard Spock")]),o("div",{staticClass:"result-container"},[o("transition",{attrs:{name:"fade"}},[e.result?o("h2",{attrs:{id:"result"}},[e._v(e._s(e.result))]):e._e()])],1),o("div",{attrs:{id:"game-area"}},[o("div",{attrs:{id:"scoreboard"}},[o("div",{staticClass:"score-container"},[o("h3",[e._v("Your Score: "+e._s(e.playerScore))])]),o("div",{staticClass:"score-container"},[o("h3",[e._v("Computer's Score: "+e._s(e.computerScore))])])]),o("div",{attrs:{id:"play-area"}},[o("HumanPlayer",{attrs:{weapons:e.weapons}}),o("ComputerPlayer",{attrs:{weapons:e.weapons}})],1)])])},c=[],i=(o("99af"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"opponent-box",attrs:{id:"player"}},[o("div",{staticClass:"box-contents"},[o("h2",[e._v("You")]),e.showPlayerChoice?o("h3",[e._v("You Chose:")]):o("h3",[e._v("Choose Your Weapon:")])]),e.showPlayerChoice?o("div",{staticClass:"selection"},[o("i",{class:e.icon})]):e._e(),o("transition",{attrs:{name:"fadeIn"}},[e.showWeapons?o("div",{attrs:{id:"weapons"}},e._l(e.weapons,(function(t){return o("button",{key:t.ID,staticClass:"weapon-button",on:{click:function(o){return e.handleAttack(t.name)}}},[o("i",{staticClass:"weapon-pic",class:t.icon}),e._v(" "+e._s(t.name)+" ")])})),0):e._e()])],1)}),u=[],p=(o("7db0"),o("d3b7"),o("b0c0"),o("2f62"));n["a"].use(p["a"]);var l=new p["a"].Store({state:{player:0,computer:0,playerChoice:"",computerChoice:""},mutations:{incrementScore:function(e,t){e[t]++},setPlayerWeapon:function(e,t){e.playerChoice=t},setComputerWeapon:function(e,t){e.computerChoice=t}}}),f=l,h={name:"HumanPlayer",props:["weapons"],data:function(){return{showPlayerChoice:!1,showWeapons:!0,icon:""}},methods:{handleAttack:function(e){var t=this,o=["rock","paper","scissors","lizard","spock"],n=Math.floor(5*Math.random());f.commit("setComputerWeapon",o[n]),f.commit("setPlayerWeapon",e);var r=this.weapons.find((function(t){return t.name===e}));this.icon=r.icon,this.showWeapons=!1,setTimeout((function(){t.showPlayerChoice=!0}),200)}},watch:{showPlayerChoice:function(e){var t=this;e&&setTimeout((function(){t.showPlayerChoice=!1,t.showWeapons=!0}),2500)}}},m=h,d=(o("96ee"),o("2877")),C=Object(d["a"])(m,i,u,!1,null,"0f0206b0",null),v=C.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"opponent-box",attrs:{id:"computer"}},[o("div",{staticClass:"box-contents"},[o("h2",[e._v("Computer")]),e.computerChoice?o("h3",[e._v("Computer Chooses:")]):o("h3",[e._v("Computer is waiting...")])]),o("transition",{attrs:{name:"fade"}},[e.showComputerChoice?o("span",{key:"chosen",staticClass:"selection"},[o("i",{class:e.icon})]):e._e()])],1)},w=[],b={name:"ComputerPlayer",props:["weapons"],data:function(){return{icon:"",showComputerChoice:!1}},computed:{computerChoice:function(){return f.state.computerChoice}},watch:{computerChoice:function(e){var t=this;this.showComputerChoice=!1;var o=this.weapons.find((function(t){return t.name===e}));this.icon=o?o.icon:"",setTimeout((function(){t.showComputerChoice=!0}),300)}}},_=b,k=Object(d["a"])(_,y,w,!1,null,null,null),P=k.exports,g=(o("caad"),["rockscissors","rocklizard","paperrock","paperspock","scissorslizard","scissorspaper","lizardpaper","lizardspock","spockrock","spockscissors"]),S=function(e){return!!g.includes(e)},O={name:"GameContainer",components:{HumanPlayer:v,ComputerPlayer:P},data:function(){return{result:"",weapons:[{name:"rock",icon:"far fa-hand-rock"},{name:"paper",icon:"far fa-hand-paper"},{name:"scissors",icon:"far fa-hand-scissors"},{name:"lizard",icon:"far fa-hand-lizard"},{name:"spock",icon:"far fa-hand-spock"}]}},computed:{playerChoice:function(){return f.state.playerChoice},computerChoice:function(){return f.state.computerChoice},playerScore:function(){return f.state.player},computerScore:function(){return f.state.computer}},watch:{computerChoice:function(e){var t=this;if(""!==e){this.result="";var o=this.playerChoice,n=this.computerChoice,r=S("".concat(o).concat(n));if(o===n)setTimeout((function(){t.result="It's a tie"}),700);else{var a=r?"player":"computer";setTimeout((function(){t.result=r?"You Win!":"Computer Wins!",f.commit("incrementScore",a)}),700)}}},result:function(){var e=this;""!==this.result&&setTimeout((function(){f.commit("setComputerWeapon",""),e.result=""}),2e3)}}},x=O,j=(o("eff0"),Object(d["a"])(x,s,c,!1,null,"9454ff82",null)),W=j.exports,T={name:"App",components:{GameContainer:W}},z=T,M=(o("034f"),Object(d["a"])(z,r,a,!1,null,null,null)),Y=M.exports;n["a"].config.productionTip=!1,new n["a"]({store:f,render:function(e){return e(Y)}}).$mount("#app")},"85ec":function(e,t,o){},"8ee8":function(e,t,o){},"96ee":function(e,t,o){"use strict";o("8ee8")},df41:function(e,t,o){},eff0:function(e,t,o){"use strict";o("df41")}});
//# sourceMappingURL=app.712cee95.js.map