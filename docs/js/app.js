(function(e){function t(t){for(var i,a,r=t[0],d=t[1],c=t[2],p=0,u=[];p<r.length;p++)a=r[p],n[a]&&u.push(n[a][0]),n[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);l&&l(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],i=!0,r=1;r<s.length;r++){var d=s[r];0!==n[d]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},n={app:0},o=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/billshare/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var l=d;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0d9c":function(e,t,s){"use strict";var i=s("22d5"),n=s.n(i);n.a},"0f3c":function(e,t,s){"use strict";var i=s("b44e"),n=s.n(i);n.a},"1c7c":function(e,t,s){"use strict";var i=s("5dac"),n=s.n(i);n.a},"22d5":function(e,t,s){},"269d":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],a={name:"app",mounted:function(){this.init()},methods:{init:function(){}}},r=a,d=s("2877"),c=Object(d["a"])(r,n,o,!1,null,null,null),l=c.exports,p=s("59ca"),u=s.n(p),h=(s("ea7b"),s("8c4f")),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"tb"},[s("div",{staticClass:"tbT"},[e.date?s("div",{staticClass:"pT",domProps:{textContent:e._s(e.getTitle)}}):e._e()]),s("div",{staticClass:"tbB"},[s("div",{staticClass:"pN"},[e._m(0),s("div",[s("i",{staticClass:"bs-user",attrs:{title:"My Account"}}),e._v(e._s(e.currentUser.displayName))]),s("div",{staticClass:"lo",attrs:{title:"Logout"},on:{click:e.logout}},[s("i",{staticClass:"bs-logout"})])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.show.loading,expression:"!show.loading"}],staticClass:"cW"},[s("PersonListing",{staticClass:"uW"}),s("ExpenseListing",{staticClass:"eW"})],1),e.show.loading?s("div",{staticClass:"cW"},[s("FullLoading",{attrs:{message:"Wait while We prepare your Expenses..."}})],1):e._e()])},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("i",{staticClass:"bs-settings",attrs:{title:"Settings"}})])}],v=(s("a481"),s("cebc")),C=s("2f62"),x=(s("e71f"),{firebaseConfig:{apiKey:"AIzaSyB1gTLWPHWOHCZFhs1yGuouPZ_F9anANLw",authDomain:"billshare-4f2ac.firebaseapp.com",databaseURL:"https://billshare-4f2ac.firebaseio.com",projectId:"billshare-4f2ac",storageBucket:"billshare-4f2ac.appspot.com",messagingSenderId:"810948359815"},adminUid:"tMfUwcCyAlVEBjRT6oUVrRIjQ8v1"});u.a.initializeApp(x.firebaseConfig);var g=u.a.firestore(),P=u.a.auth(),y=P.currentUser,w=g.collection("persons"),b=g.collection("expenses"),_={db:g,auth:P,currentUser:y,personCollection:w,expenseCollection:b},E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"ewT"},[e._v("\n    Persons "),i("span",[e._v("("+e._s(e.personCollection.length)+")")])]),e.personCollection.length>0?i("div",{staticClass:"ewCon",attrs:{id:"personContainer"}},e._l(e.personCollection,function(e){return i("Person",{key:e.id,attrs:{person:e,expand:e.expand,modified:e.modified,modifyBalPay:e.modify.balPayRequired,modifyMode:e.modify.mode,modifyCost:e.modify.cost,modifyName:e.modify.name}})}),1):e._e(),e.isAdmin&&e.show.editor?i("div",{staticClass:"addPerEdit"},[i("div",{staticClass:"overlay",on:{click:e.closeEditor}}),i("div",{staticClass:"apCon"},[e.error?i("div",{staticClass:"err"},[i("span",{domProps:{textContent:e._s(e.error)}})]):e._e(),i("span",{staticClass:"cBut",on:{click:e.closeEditor}},[e._v("×")]),i("div",{staticClass:"avatar-upload"},[i("div",{staticClass:"avatar-edit"},[i("label",{staticClass:"bs-edit"},[i("input",{attrs:{id:"imgUpload",type:"file",accept:".png, .jpg, .jpeg"},on:{change:e.photoChanged}})])]),i("div",{staticClass:"avatar-preview"},[e.editor.photo?i("img",{attrs:{src:e.editor.photo}}):i("img",{attrs:{src:s("c824")}})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.editor.name,expression:"editor.name"}],attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:e.editor.name},on:{input:function(t){t.target.composing||e.$set(e.editor,"name",t.target.value)}}}),i("div",{staticClass:"apButW"},[i("span",{staticClass:"apBut",domProps:{textContent:e._s(e.editor.but)},on:{click:e.addPerson}})])])]):e._e(),e.isAdmin?i("div",{staticClass:"addPerTrig",on:{click:function(t){return e.showEditor("new",null,null,"Add Person")}}},[e._v("+ New")]):e._e()])},$=[],M=(s("7f7f"),s("5176")),T=s.n(M),k=(s("ac6a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"perC",attrs:{id:"person_"+e.person.id}},[i("div",{staticClass:"perW",class:{expanded:e.expand}},[i("div",{staticClass:"perHead",class:{expanded:e.expand},on:{click:function(t){return e.expandPerson()}}},[i("div",[e.photo?i("img",{staticClass:"pPic",attrs:{src:e.person.photo}}):i("img",{staticClass:"pPic",attrs:{src:s("c824")}})]),i("div",{staticClass:"perName",domProps:{textContent:e._s(e.name)}}),e.isAdmin?i("div",{staticClass:"perDelIi",class:{modified:e.modified},on:{mouseleave:function(t){e.show.options=!1}}},[i("i",{directives:[{name:"show",rawName:"v-show",value:!e.show.options,expression:"!show.options"}],staticClass:"bs-more",attrs:{title:"More Options"},on:{click:function(t){t.stopPropagation(),e.show.options=!0}}}),e.show.options?i("span",{staticClass:"icWra"},[i("span",{staticClass:"iconHolder"},[i("i",{staticClass:"bs-edit",attrs:{title:"Edit Person"},on:{click:function(t){return t.stopPropagation(),e.$parent.editPerson(e.person)}}}),i("i",{staticClass:"bs-wallet",class:{pPaid:e.paid},attrs:{title:"Record Payment"},on:{click:function(t){t.stopPropagation(),e.paid=!e.paid}}}),i("i",{staticClass:"bs-delete",attrs:{title:"Move to trash"}})])]):e._e()]):e._e(),e.expand||e.modified?e._e():i("div",{class:{pPaid:e.paid}},[i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("span",{domProps:{textContent:e._s(Math.ceil(e.balPayRequired))}})]),!e.expand&&e.modified?i("div",{staticClass:"peModI"},[i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("span",{domProps:{textContent:e._s(Math.ceil(e.modifyBalPay))}}),i("i",{class:{"bs-arrow-up":"add"===e.modifyMode,"bs-arrow-down":"add"!==e.modifyMode}}),i("i",{staticClass:"bs-preview"}),i("span",{staticClass:"previewSplit",class:{modAdd:e.modified&&"add"===e.modifyMode,modSub:e.modified&&"add"!==e.modifyMode}},[i("span",{domProps:{textContent:e._s("( "+Math.ceil(e.person.payment.balPayRequired)+" "+("add"===e.modifyMode?"+":"-")+" "+Math.ceil(e.modifyCost)+" )")}})])]):e._e()]),"view"===e.mode?i("div",{staticClass:"perCon",class:{expanded:e.expand}},[i("div",{staticClass:"perExW"},[e._l(e.expenses,function(t){return i("div",{key:t.id,staticClass:"perEx"},[i("div",{staticClass:"peExCRight",class:{pPaid:e.paid&&!e.modified,modAdd:e.modified&&e.person.modify.id==t.id&&"add"===e.modifyMode,modSub:e.modified&&e.person.modify.id==t.id&&"add"!==e.modifyMode},on:{click:function(s){return s.stopPropagation(),e.openExpense(t.id)}}},[i("div",{domProps:{textContent:e._s(t.name)}}),i("div",{staticClass:"m45"},[i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("span",{domProps:{textContent:e._s(e.modified&&e.person.modify.id==t.id?"add"===e.modifyMode?Math.ceil(t.cost+e.modifyCost):Math.ceil(t.cost-e.modifyCost):Math.ceil(t.cost))}}),e.modified&&e.person.modify.id==t.id?i("span",{domProps:{textContent:e._s("( "+Math.ceil(t.cost)+" "+("add"===e.modifyMode?"+":"-")+" "+Math.ceil(e.modifyCost)+" )")}}):e._e()])])])}),e.modified&&"new"!==e.person.modify.id&&!e.person.expenses[e.person.modify.id]?i("div",{staticClass:"perEx"},[i("div",{staticClass:"peExCRight modAdd",on:{click:function(t){return t.stopPropagation(),e.openExpense(e.person.modify.id)}}},[i("div",{domProps:{textContent:e._s(e.modifyName)}}),i("div",{staticClass:"m45"},[i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("span",{domProps:{textContent:e._s(Math.ceil(e.modifyCost))}})])])]):e._e()],2)]):e._e(),i("div",{staticClass:"pTot"},[i("div",[e._v("Total")]),i("div",{class:{pPaid:e.paid&&!e.modified,modAdd:e.modified&&"add"===e.modifyMode,modSub:e.modified&&"add"!==e.modifyMode}},[e.modified?i("span",{staticClass:"bs-preview"}):e._e(),i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),e.modified?e._e():i("span",{domProps:{textContent:e._s(Math.ceil(e.balPayRequired))}}),e.modified?i("span",[e._v("\n              "+e._s(Math.ceil(e.modifyBalPay)+" ( "+Math.ceil(e.person.payment.balPayRequired)+" "+("add"===e.modifyMode?"+":"-")+" "+Math.ceil(e.modifyCost)+" )")+"\n              "),e.modified?i("i",{class:{"bs-arrow-up":"add"===e.modifyMode,"bs-arrow-down":"add"!==e.modifyMode}}):e._e()]):e._e()])])])])}),A=[],q={name:"Person",computed:Object(v["a"])({},Object(C["b"])(["isAdmin","settings"])),props:["person","expand","modified","modifyBalPay","modifyMode","modifyCost","modifyName"],data:function(){return{mode:"view",edit:!1,name:"",photo:null,balPayRequired:0,paid:!1,expenses:[],show:{options:!1}}},mounted:function(){this.init()},methods:{init:function(){this.mode=this.edit?"edit":"view",this.initPerson()},initPerson:function(){for(var e in this.name=this.person.name,this.photo=this.person.photo,this.balPayRequired=this.person.payment.balPayRequired,this.paid=this.person.paid,this.expenses=[],this.person.expenses)this.expenses.push(this.person.expenses[e])},expandPerson:function(){if(this.expand){var e=T()({},this.$route.query);delete e.person,this.$router.push({query:e})}else this.$parent.expandFromChild(this.person.id)},openExpense:function(e){var t=T()({},this.$route.query);t.expense=e,be.push({query:t})},deletePeople:function(e){}}},O=q,S=(s("e6cd"),Object(d["a"])(O,k,A,!1,null,null,null)),N=S.exports,R={name:"PersonListing",components:{Person:N},computed:Object(v["a"])({},Object(C["b"])(["isAdmin","personCollection"])),props:[],data:function(){return{show:{editor:!1},editor:{id:null,name:"",photo:null},error:null}},mounted:function(){this.initPersons()},methods:{initPersons:function(){this.show.editor=!1;var e=this;_.personCollection.orderBy("name","asc").onSnapshot(function(t){var s=[];t.forEach(function(i){var n=i.data();n.id=i.id,n.modified=!1,n.expand=!1,n.modify={name:null,cost:0,toPay:0,mode:null},s.push(n),s.length===t.size&&e.commitToStore(s)})})},commitToStore:function(e){this.$store.commit("setPersonCollection",e),this.$parent.hideLoading()},expandFromChild:function(e){var t=T()({},this.$route.query);t.person=e,be.push({query:t})},expandPerson:function(){if(this.personCollection){for(var e=0;e<this.personCollection.length;e++)this.personCollection[e].expand=this.$route.query.person===this.personCollection[e].id;if(this.$route.query.person){var t=document.getElementById("person_"+this.$route.query.person);t&&setTimeout(function(){t.scrollIntoView(!0),document.getElementById("personContainer").scrollTop-=100},200)}}},addPerson:function(){if(this.editor.name&&this.editor.name.trim().length>1){this.editor.payment||(this.editor.payment={paid:0,totalPayRequired:0,balPayRequired:0});var e={createdOn:new Date,name:this.editor.name,photo:this.editor.photo,expenses:this.editor.expenses,paid:0===this.editor.payment.balPayRequired,payment:this.editor.payment},t=this;"new"===this.editor.id?_.personCollection.add(e).then(function(e){t.closeEditor(),t.initPersons()}).catch(function(e){t.closeEditor(),t.showError("Something Went Wrong")}):_.personCollection.doc(this.editor.id).set(e,{merge:!0}).then(function(){t.closeEditor(),t.initPersons()}).catch(function(e){t.closeEditor(),t.showError("Something Went Wrong")}),console.log(e)}else this.showError("Name Cannot be Empty")},showError:function(e){this.error=e,setTimeout(this.hideError,2e3)},hideError:function(){this.error=null},photoChanged:function(){var e=document.getElementById("imgUpload");if(e.files&&e.files[0]){var t=new FileReader,s=this;t.onload=function(e){Math.ceil(e.total/1024)<500?s.editor.photo=e.currentTarget.result:s.showError("File Size should be less than 500 Kb")},t.readAsDataURL(e.files[0])}},showEditor:function(e,t,s,i,n,o){this.editor.id=e,this.editor.name=t,this.editor.photo=s,this.editor.but=i,this.editor.payment=n,this.editor.expenses=o,this.show.editor=!0},closeEditor:function(){this.show.editor=!1,this.editor.id=null,this.editor.photo=null},editPerson:function(e){this.showEditor(e.id,e.name,e.photo,"Edit Person",e.payment,e.expenses)}},watch:{"$route.query.person":function(){this.expandPerson()},personCollection:function(){setTimeout(this.expandPerson,250)}}},j=R,B=(s("1c7c"),Object(d["a"])(j,E,$,!1,null,null,null)),L=B.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"ewT"},[e._v("\n    Expenses "),s("span",[e._v("("+e._s(e.expenseCollection.length)+")")])]),s("div",{staticClass:"ewCon",attrs:{id:"expenseContainer"}},e._l(e.expenseCollection,function(e,t){return s("Expense",{key:e.id,attrs:{expense:e,expenseIteration:t,expand:e.expand}})}),1),s("div",{staticClass:"neBut bs-add",on:{click:e.addExpense}})])},I=[],U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"billC",attrs:{id:"expense_"+e.expense.id}},[i("div",{staticClass:"neW",class:{expanded:e.expand}},[e.error?i("div",{staticClass:"err"},[i("span",{domProps:{textContent:e._s(e.error)}})]):e._e(),i("div",{staticClass:"eWHead",class:{edit:"view"!==e.mode,expanded:e.expand},on:{click:function(t){return e.expandExpense(e.expense)}}},[i("div",{staticClass:"eWHeadLeft"},["view"!==e.mode?i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:e.name},on:{click:function(t){return t.stopPropagation(),e.noAct(t)},input:function(t){t.target.composing||(e.name=t.target.value)}}}):i("span",{attrs:{id:"expenseName_"+e.expense.id},domProps:{textContent:e._s(this.name)}}),"view"===e.mode&&e.isAdmin?i("i",{staticClass:"bs-edit",attrs:{title:"Edit Expense"},on:{click:function(t){return e.editClick(t)}}}):e._e(),"view"===e.mode&&e.isAdmin?i("i",{staticClass:"bs-delete",attrs:{title:"Move to Trash"},on:{click:function(t){t.stopPropagation(),e.mode="edit",e.expand=!0}}}):e._e(),e.checkTemp?i("div",{staticClass:"neHt"},[i("span",{staticClass:"bs-save"},[e._v(" Not Saved")])]):e._e()]),"view"===e.mode?i("div",{staticClass:"eWHeadRight",class:{expanded:e.expand}},[e.expand?e._e():i("span",{staticClass:"costHo"},[i("div",{domProps:{textContent:e._s(e.settings.currency)}}),i("span",{domProps:{textContent:e._s(this.cost)}})]),i("span",{domProps:{textContent:e._s(this.date)}})]):e.expand?i("div",{staticClass:"eWHeadRight"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.cost,expression:"cost",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"Enter Amount",size:"1"},domProps:{value:e.cost},on:{click:function(t){return t.stopPropagation(),e.noAct(t)},input:function(t){t.target.composing||(e.cost=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("div",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),"view"!==e.mode?i("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",placeholder:"Enter Date"},domProps:{value:e.date},on:{click:function(t){return t.stopPropagation(),e.noAct(t)},input:function(t){t.target.composing||(e.date=t.target.value)}}}):e._e()]):e._e()]),"view"!==e.mode?i("div",{staticClass:"exPc",class:{expanded:e.expand}},[e.settings&&e.settings.show.help?i("div",{staticClass:"exHelpT"},[e._m(0),e._m(1)]):e._e(),i("div",{staticClass:"exPcTitle"},[i("div",{staticClass:"exPcL",class:{search:e.search.show}},[i("span",{staticClass:"exPcT"},[e._v("Available Persons")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.search.text,expression:"search.text",modifiers:{trim:!0}}],staticClass:"searchI",attrs:{type:"text"},domProps:{value:e.search.text},on:{input:function(t){t.target.composing||e.$set(e.search,"text",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("i",{staticClass:"bs-search",on:{click:function(t){e.search.show=!e.search.show}}})]),e._m(2)]),i("div",{staticClass:"exPcTab"},[i("div",{staticClass:"exPcL"},[i("div",{staticClass:"exPcPW",class:{help:e.settings.show.help}},e._l(e.availablePersons,function(t,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:-1!=t.name.toLowerCase().indexOf(e.search.text),expression:"person.name.toLowerCase().indexOf(search.text) != -1"}],key:t.id,staticClass:"exPcP"},[i("div",{staticClass:"pCont"},[t.photo?i("img",{staticClass:"pPic",attrs:{src:t.photo}}):i("img",{staticClass:"pPic",attrs:{src:s("c824")}})]),i("div",{staticClass:"pName",domProps:{textContent:e._s(t.name)}}),i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cost,expression:"person.cost",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.cost},on:{input:function(s){s.target.composing||e.$set(t,"cost",e._n(s.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("div",{staticClass:"but bs-add",on:{click:function(s){return e.addPerson(t,n)}}})])}),0)]),i("div",{staticClass:"exPcR"},[i("div",{staticClass:"exPcPW",class:{help:e.settings.show.help}},e._l(e.selectedPersons,function(t,n){return i("div",{key:t.id,staticClass:"exPcP"},[i("div",{staticClass:"pCont"},[t.photo?i("img",{staticClass:"pPic",attrs:{src:t.photo}}):i("img",{staticClass:"pPic",attrs:{src:s("c824")}})]),i("div",{staticClass:"pName",domProps:{textContent:e._s(t.name)}}),i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cost,expression:"person.cost",modifiers:{number:!0}}],attrs:{type:"number",disabled:"disabled"},domProps:{value:t.cost},on:{input:function(s){s.target.composing||e.$set(t,"cost",e._n(s.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("div",{staticClass:"but bs-minus",on:{click:function(s){return e.removePerson(t,n)}}})])}),0)])])]):e._e(),"view"===e.mode?i("div",{staticClass:"exPc",class:{expanded:e.expand}},[i("div",{staticClass:"exPe"},e._l(e.expense.persons,function(t){return i("div",{key:t.id,staticClass:"exPeC"},[i("div",{staticClass:"exPeCRight"},[i("div",[t.photo?i("img",{staticClass:"pPic",attrs:{src:t.photo}}):i("img",{staticClass:"pPic",attrs:{src:s("c824")}}),i("span",{domProps:{textContent:e._s(t.name)}})]),i("div",{staticClass:"m45"},[i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("span",{domProps:{textContent:e._s(t.cost)}})])])])}),0)]):e._e(),i("div",{staticClass:"exTot",attrs:{id:"expenseTot_"+e.expense.id}},[i("div",[e._v("Total")]),e.expand&&"view"!==e.mode?i("div",{staticClass:"butPB",on:{click:e.addExpense}},[i("i",{staticClass:"bs-save"}),e._v(" Add Expense\n      ")]):e._e(),e.expand&&"view"!==e.mode?i("div",{staticClass:"butSB",on:{click:e.previewExpense}},[i("i",{staticClass:"bs-preview"}),e._v(" Preview Expense\n      ")]):e._e(),i("div",[i("span",{staticClass:"currency",domProps:{textContent:e._s(e.settings.currency)}}),i("span",{domProps:{textContent:e._s(this.cost)}})])])])])},W=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"neHt"},[s("span",{staticClass:"bs-help"},[e._v("Add Persons to Billed Persons to split the bill amount")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"neHt"},[s("span",{staticClass:"bs-help"},[e._v(" To auto calculate split bill set '0' as cost")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"exPcR"},[s("span",{staticClass:"exPcT"},[e._v("Billed Persons")])])}],H=(s("28a5"),s("f499")),D=s.n(H),G={name:"ExpenseEditor",computed:Object(v["a"])({},Object(C["b"])(["isAdmin","personCollection","settings"]),{checkTemp:function(){return this.expense&&0===this.expense.id.indexOf("TEMP")&&"view"==this.mode}}),props:["expense","expenseIteration","expand"],data:function(){return{name:"",cost:null,costValidate:!1,date:null,persons:{},selectedPersons:[],availablePersons:[],error:null,mode:"view",edit:!1,search:{text:"",show:!1}}},mounted:function(){this.init()},methods:{init:function(){this.expense&&this.expense.id&&"new"===this.expense.id?this.mode="add":this.expense&&this.expense.id?this.mode=this.edit?"edit":"view":this.mode="view",this.initPersons()},expandExpense:function(e){if(this.expand){if("new"!==e.id){var t=T()({},this.$route.query);delete t.expense,this.$router.push({query:t}),"view"!==this.mode&&this.$parent.resetPreview()}else if(this.expense.id="TEMP_"+Math.random(),this.name&&""==this.name&&(this.name="Unnamed"),this.expense.name=this.name,this.expense.persons={},this.$parent.resetPreview(),"new"===this.$route.query.expense){var s=T()({},this.$route.query);delete s.expense,this.$router.push({query:s})}}else this.$parent.expandFromChild(e.id)},editClick:function(e){this.edit=!0,this.mode="edit",this.expand&&e.stopPropagation()},noAct:function(){},goBack:function(){this.$parent.show.editor=!1},initExpense:function(){this.availablePersons=[],this.selectedPersons=[],this.persons={},this.costValidate=!1,this.name&&0==this.name.trim().length&&(this.name=""),this.date=null},initPersons:function(){if(this.initExpense(),this.personCollection&&this.personCollection.length!=this.availablePersons.length){for(var e=0;e<this.personCollection.length;e++){var t=this.personCollection[e];this.availablePersons.push({id:t.id,name:t.name,cost:0,photo:t.photo})}this.expense.id&&"new"!==this.expense.id&&"edit"!==this.mode&&this.initData()}},initData:function(){this.name=this.expense.name,this.cost=this.expense.cost,this.date=this.expense.date;JSON.parse(D()(this.availablePersons));var e=this.availablePersons.length;while(e--)this.expense.persons[this.availablePersons[e].id]&&this.addPerson(this.expense.persons[this.availablePersons[e].id],e,!0);this.recalculateSplit()},addExpense:function(){if(this.name&&this.name.trim().length>0&&this.cost>0&&this.costValidate)new Date,this.name,this.cost,this.date&&new Date(this.date),this.persons;else this.costValidate?this.showError("Invalid Bill"):this.showError("Billed Person Amount Invalid")},previewExpense:function(){this.name&&this.name.trim().length>0&&this.cost>0&&this.costValidate?this.renderPreview():this.costValidate?(this.showError("Invalid Bill"),this.$parent.resetPreview()):(this.showError("Bill Split not valid"),this.renderPreview())},renderPreview:function(){for(var e=0;e<this.personCollection.length;e++){var t=this.personCollection[e].id;this.persons[t]?"add"===this.mode?(this.personCollection[e].modify={id:this.expense.id,name:this.name,mode:"add",balPayRequired:this.personCollection[e].payment.balPayRequired+this.persons[t].cost,cost:this.persons[t].cost},this.personCollection[e].modified=!0):"edit"===this.mode&&(this.personCollection[e].expenses[this.expense.id]?this.persons[t].cost===this.personCollection[e].expenses[this.expense.id].cost?this.personCollection[e].modified=!1:(this.personCollection[e].modify={id:this.expense.id,name:this.expense.name,mode:this.persons[t].cost>this.personCollection[e].expenses[this.expense.id].cost?"add":"sub",balPayRequired:this.personCollection[e].payment.balPayRequired+this.persons[t].cost-this.personCollection[e].expenses[this.expense.id].cost,cost:Math.abs(this.persons[t].cost-this.personCollection[e].expenses[this.expense.id].cost)},this.personCollection[e].modified=!0):(this.personCollection[e].modify={id:this.expense.id,name:this.name,mode:"add",balPayRequired:this.personCollection[e].payment.balPayRequired+this.persons[t].cost,cost:this.persons[t].cost},this.personCollection[e].modified=!0)):this.expense.persons[t]?(this.personCollection[e].modify={id:this.expense.id,name:this.expense.name,mode:"sub",balPayRequired:this.personCollection[e].payment.balPayRequired-this.personCollection[e].expenses[this.expense.id].cost,cost:this.personCollection[e].expenses[this.expense.id].cost},this.personCollection[e].modified=!0,console.log(this.personCollection[e])):this.personCollection[e].modified=!1}this.$store.commit("setPersonCollection",this.personCollection)},showError:function(e){this.error=e,setTimeout(this.hideError,2e3)},hideError:function(){this.error=null},addPerson:function(e,t,s){this.persons[e.id]||(e.cost<this.cost&&this.name&&this.name.length>0?(this.persons[e.id]=e.id,s?this.selectedPersons.push(e):this.selectedPersons.push({id:e.id,name:e.name,cost:e.cost,photo:e.photo,omitSplit:e.cost>0}),this.availablePersons.splice(t,1),s||this.recalculateSplit()):void 0==this.cost||0===this.cost?this.showError("Expense Cost Cannot be Zero"):void 0==this.name||0===this.name.length?this.showError("Expense Name Cannot be Empty"):this.showError("Individual Cost must be less than total bill cost to share bill"))},recalculateSplit:function(){var e=0,t=0;this.selectedPersons.forEach(function(s){s.omitSplit?t+=s.cost:e++});for(var s=(this.cost-t)/e,i=0,n=0;n<this.selectedPersons.length;n++)this.selectedPersons[n].omitSplit||(this.selectedPersons[n].cost=s),i+=this.selectedPersons[n].cost,this.persons[this.selectedPersons[n].id]=this.selectedPersons[n];this.costValidate=i===this.cost,"view"!==this.mode&&this.previewExpense()},removePerson:function(e,t){this.persons[e.id]&&(delete this.persons[e.id],this.availablePersons.push({id:e.id,name:e.name,cost:0}),this.selectedPersons.splice(t,1),this.recalculateSplit())},costReset:function(e){this.split.amount=e}},watch:{personCollection:function(){this.initPersons()},cost:function(){this.initPersons()},expand:function(){this.expand||(console.log("hhhh"),this.$parent.resetPreview(),this.mode="view")}}},V=G,J=(s("0f3c"),Object(d["a"])(V,U,W,!1,null,null,null)),z=J.exports,Y=s("5118"),Z={name:"ExpenseListing",computed:Object(v["a"])({},Object(C["b"])(["isAdmin","settings","personCollection"])),components:{Expense:z},data:function(){return{expenseCollection:[]}},mounted:function(){this.initExpenses()},methods:{initExpenses:function(){var e=this;_.expenseCollection.orderBy("createdOn","desc").onSnapshot(function(t){var s=[];t.forEach(function(e){var t=e.data();t.id=e.id,t.expand=!1,s.push(t)}),e.expenseCollection=s})},expandExpense:function(){if(this.expenseCollection&&"new"!==this.expenseCollection[0].id){if(this.$route.query.expense&&"new"===this.$route.query.expense){var e=[{id:"new",expand:!1,persons:{}}];this.expenseCollection.forEach(function(t){e.push(t)}),this.expenseCollection=e}for(var t=0;t<this.expenseCollection.length;t++)this.expenseCollection[t].expand=this.$route.query.expense===this.expenseCollection[t].id;if(this.$route.query.expense){var s=document.getElementById("expense_"+this.$route.query.expense);s&&Object(Y["setTimeout"])(function(){s.scrollIntoView(!0),document.getElementById("expenseContainer").scrollTop-=100},200)}}},addExpense:function(){void 0===this.$route.query.expense?this.pushRouter("new"):"new"!==this.$route.query.expense&&this.pushRouter("new")},expenseAdded:function(){this.$parent.init()},expandFromChild:function(e){if("new"===this.expenseCollection[0].id){this.expenseCollection[0].id="TEMP_"+Math.random();var t=this.pushRouter;Object(Y["setTimeout"])(function(){t(e)},200)}else this.pushRouter(e)},pushRouter:function(e){var t=T()({},this.$route.query);t.expense=e,be.push({query:t})},resetPreview:function(e){for(var t=0;t<this.personCollection.length;t++)this.personCollection[t].modified=!1;this.$store.commit("setPersonCollection",this.personCollection),e&&e()}},watch:{"$route.query.expense":function(){this.expandExpense()},expenseCollection:function(){Object(Y["setTimeout"])(this.expandExpense,250)}}},K=Z,X=(s("9719"),Object(d["a"])(K,F,I,!1,null,null,null)),Q=X.exports,ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fsloading"},[s("div",{staticClass:"fsM"},[s("div",{staticClass:"fsText"},[e._v(" "+e._s(e.message))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show.chrome,expression:"show.chrome"}],staticClass:"infinityChrome"},[s("div"),s("div"),s("div")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show.others,expression:"show.others"}],staticClass:"infinity"},[e._m(0),e._m(1),e._m(2)])])])},te=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("span")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("span")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("span")])}],se={name:"FullScreenLoading",props:["message"],data:function(){return{show:{chrome:!0,others:!1}}},mounted:function(){!/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)&&(this.show.chrome=!1,this.show.others=!0)}},ie=se,ne=(s("a75a"),Object(d["a"])(ie,ee,te,!1,null,null,null)),oe=ne.exports,ae={name:"home",computed:Object(v["a"])({},Object(C["b"])(["currentUser","isAdmin","settings"]),{getTitle:function(){return this.getMonth(this.date.getMonth()-1)+" "+this.date.getFullYear()+" Expense"}}),components:{PersonListing:L,ExpenseListing:Q,FullLoading:oe},mounted:function(){this.init()},data:function(){return{date:null,personCollection:[],show:{loading:!0}}},methods:{logout:function(){var e=this;_.auth.signOut().then(function(){e.$store.commit("setCurrentUser",null),e.$router.replace("login")})},init:function(){this.date=new Date;var e={show:{help:!1},expenseMonth:this.date.getFullYear()+""+this.getMonth(this.date.getMonth()-1),currency:"₹"};this.$store.commit("saveSettings",e)},hideLoading:function(){this.show.loading=!1},getMonth:function(e){var t=["Jan","Feb","Mar","Apr","May","Jue","Jul","Aug","Sept","Oct","Nov","Dec"];return-1===e&&(e=t.length-1),t[e]}}},re=ae,de=(s("cccb"),Object(d["a"])(re,m,f,!1,null,null,null)),ce=de.exports,le=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logC",on:{mousemove:function(t){return e.mouseOver(t)}}},[i("div",{staticClass:"logW"},[i("div",{staticClass:"logLogo"},[i("div",{staticClass:"logLogoW"},[i("div",{staticClass:"logLogoDiv",attrs:{id:"logLogoDiv"}},[i("img",{style:{transform:"perspective(100px) rotateX("+e.xTransform+"deg) rotateY("+e.yTransform+"deg) scale3d("+e.scale+","+e.scale+","+e.scale+")"},attrs:{src:s("cf05")}})])])]),i("div",{staticClass:"logFW"},[i("FullLoading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{message:"Signing you in..."}}),i("div",{staticClass:"logFC",on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login()}}},[i("span",{staticClass:"logFT"},[e._v("Login")]),i("div",{staticClass:"logFIC"},[i("div",{staticClass:"logFIG"},[i("label",{staticClass:"logFILab"},[e._v("Email")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"logFI",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),i("div",{staticClass:"logFIG"},[i("label",{staticClass:"logFILab"},[e._v("Password")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"logFI",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),i("div",{staticClass:"logFB",on:{click:e.login}},[e._v("\n          Sign In\n        ")]),i("div",{staticClass:"logFsG",on:{click:e.loginAsGuest}},[e._v("\n          Sign In As Guest\n        ")])]),e.error?i("div",{staticClass:"logErr",domProps:{textContent:e._s(e.error)}}):e._e()],1)])])},pe=[],ue={name:"login",components:{FullLoading:oe},data:function(){return{email:"",password:"",xTransform:0,yTransform:0,scale:1,loading:!1,height:document.body.offsetHeight,width:document.body.offsetWidth,error:null}},methods:{mouseOver:function(e){var t=e.pageX/this.height,s=e.pageY/this.width,i=10;this.xTransform=i*(s-.5),this.yTransform=-i*(t-.5),this.scale=1.5},login:function(){this.loginToFB(this.email,this.password)},loginToFB:function(e,t,s){var i=this;this.loading=!0,u.a.auth().signInWithEmailAndPassword(e,t).then(function(e){i.$router.replace("home"),i.$store.commit("setCurrentUser",e)},function(e){s?s():(i.loading=!1,i.error="Email & password do not match")})},loginAsGuest:function(){this.loginToFB("guest@domain.com","guest@123",this.createGues)},createGuest:function(){var e=this;u.a.auth().createUserWithEmailAndPassword("guest@domain.com","guest@123").then(function(){e.loginAsGuest()},function(t){e.error=t.message})}}},he=ue,me=(s("0d9c"),Object(d["a"])(he,le,pe,!1,null,"12829c01",null)),fe=me.exports,ve=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sign-up"},[i("img",{attrs:{src:s("cf05")}}),i("p",[e._v("Let's create a new account !")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),i("br"),i("button",{on:{click:e.signUp}},[e._v("Sign Up")]),i("span",[e._v("or go back to "),i("router-link",{attrs:{to:"/login"}},[e._v("login")]),e._v(".")],1)])},Ce=[],xe={name:"signUp",data:function(){return{email:"",password:"",name:""}},methods:{signUp:function(){var e=this;u.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){t.updateProfile({displayName:e.name}),e.$router.replace("home")},function(e){alert("Oops. "+e.message)})}}},ge=xe,Pe=(s("b526"),Object(d["a"])(ge,ve,Ce,!1,null,"1a75f273",null)),ye=Pe.exports;i["a"].use(h["a"]);var we=new h["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:fe},{path:"/sign-up",name:"SignUp",component:ye},{path:"/home",name:"Home",component:ce,meta:{requiresAuth:!0}}]});we.beforeEach(function(e,t,s){var i=u.a.auth().currentUser,n=e.matched.some(function(e){return e.meta.requiresAuth});n&&!i?s("login"):!n&&i?s("home"):s()});var be=we;i["a"].use(C["a"]);var _e=new C["a"].Store({state:{currentUser:null,isAdmin:!1,personCollection:[],expenseCollection:[],settings:{}},mutations:{setCurrentUser:function(e,t){e.currentUser=t,e.isAdmin=t&&t.uid===x.adminUid},setPersonCollection:function(e,t){e.personCollection=t},setexpenseCollection:function(e,t){e.expenseCollection=t},saveSettings:function(e,t){e.settings=t}},actions:{}});_.auth.onAuthStateChanged(function(e){e&&_e.commit("setCurrentUser",e)});var Ee=_e;i["a"].config.productionTip=!1;var $e="";_.auth.onAuthStateChanged(function(){$e||($e=new i["a"]({router:be,store:Ee,render:function(e){return e(l)}}).$mount("#app"))})},5801:function(e,t,s){},"5dac":function(e,t,s){},"88f7":function(e,t,s){},9719:function(e,t,s){"use strict";var i=s("5801"),n=s.n(i);n.a},a0dd:function(e,t,s){},a75a:function(e,t,s){"use strict";var i=s("88f7"),n=s.n(i);n.a},b44e:function(e,t,s){},b526:function(e,t,s){"use strict";var i=s("269d"),n=s.n(i);n.a},c824:function(e,t,s){e.exports=s.p+"img/guest.svg"},cccb:function(e,t,s){"use strict";var i=s("d563"),n=s.n(i);n.a},cf05:function(e,t,s){e.exports=s.p+"img/logo.png"},d563:function(e,t,s){},e6cd:function(e,t,s){"use strict";var i=s("a0dd"),n=s.n(i);n.a}});