(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(2),s=a.n(o),l=a(6),r=a(3),d=a(4),i=a(8),u=a(7),m=a(5),p=a.n(m),f=(a(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:[]},e.addSelectedGoods=function(t){var a=e.state.selectedGoods;e.setState({selectedGoods:[].concat(Object(l.a)(a),[t])})},e.removeSelectedGoods=function(t){var a=e.state.selectedGoods;e.setState({selectedGoods:a.filter((function(e){return e!==t}))})},e.deleteSelectedGoods=function(){e.setState({selectedGoods:[]})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return n.a.createElement("div",{className:"app"},n.a.createElement("h1",{className:"title"},"Selected goods: ".concat(t.join(", "))),0!==t.length&&n.a.createElement("button",{type:"button",className:"cross",onClick:this.deleteSelectedGoods},"\u0425"),n.a.createElement("p",{className:"selected"},"Selected: \n        ".concat(t.length)),n.a.createElement("ul",{className:"list"},f.map((function(a){return n.a.createElement("li",{key:a,className:"item"},n.a.createElement("span",{className:"item-text, ".concat(t.includes(a)?"active":"")},a),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{type:"button",onClick:function(){return e.addSelectedGoods(a)},className:p()("add",{addSelected:!0===t.includes(a)})},"Select"),n.a.createElement("button",{type:"button",onClick:function(){return e.removeSelectedGoods(a)},className:"remove"},"Remove")))}))))}}]),a}(n.a.Component);s.a.render(n.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.274f8c66.chunk.js.map