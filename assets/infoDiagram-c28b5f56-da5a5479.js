import{s as X,e as I,t as Y,n as P}from"./mermaid.esm.min-df344fdd.js";import"./app-4eea30fd.js";import"./framework-302bfe56.js";var L=function(){var c=function(o,t,n,e){for(n=n||{},e=o.length;e--;n[o[e]]=t);return n},p=[6,9,10],k={trace:function(){},yy:{},symbols_:{error:2,start:3,info:4,document:5,EOF:6,line:7,statement:8,NL:9,showInfo:10,$accept:0,$end:1},terminals_:{2:"error",4:"info",6:"EOF",9:"NL",10:"showInfo"},productions_:[0,[3,3],[5,0],[5,2],[7,1],[7,1],[8,1]],performAction:function(o,t,n,e,s,i,h){switch(i.length-1,s){case 1:return e;case 4:break;case 6:e.setInfo(!0);break}},table:[{3:1,4:[1,2]},{1:[3]},c(p,[2,2],{5:3}),{6:[1,4],7:5,8:6,9:[1,7],10:[1,8]},{1:[2,1]},c(p,[2,3]),c(p,[2,4]),c(p,[2,5]),c(p,[2,6])],defaultActions:{4:[2,1]},parseError:function(o,t){if(t.recoverable)this.trace(o);else{var n=new Error(o);throw n.hash=t,n}},parse:function(o){var t=this,n=[0],e=[],s=[null],i=[],h=this.table,$="",x=0,O=0,z=2,N=1,M=i.slice.call(arguments,1),r=Object.create(this.lexer),f={yy:{}};for(var w in this.yy)Object.prototype.hasOwnProperty.call(this.yy,w)&&(f.yy[w]=this.yy[w]);r.setInput(o,f.yy),f.yy.lexer=r,f.yy.parser=this,typeof r.yylloc>"u"&&(r.yylloc={});var E=r.yylloc;i.push(E);var R=r.options&&r.options.ranges;typeof f.yy.parseError=="function"?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function U(){var u;return u=e.pop()||r.lex()||N,typeof u!="number"&&(u instanceof Array&&(e=u,u=e.pop()),u=t.symbols_[u]||u),u}for(var l,g,a,S,d={},b,y,T,v;;){if(g=n[n.length-1],this.defaultActions[g]?a=this.defaultActions[g]:((l===null||typeof l>"u")&&(l=U()),a=h[g]&&h[g][l]),typeof a>"u"||!a.length||!a[0]){var A="";v=[];for(b in h[g])this.terminals_[b]&&b>z&&v.push("'"+this.terminals_[b]+"'");r.showPosition?A="Parse error on line "+(x+1)+`:
`+r.showPosition()+`
Expecting `+v.join(", ")+", got '"+(this.terminals_[l]||l)+"'":A="Parse error on line "+(x+1)+": Unexpected "+(l==N?"end of input":"'"+(this.terminals_[l]||l)+"'"),this.parseError(A,{text:r.match,token:this.terminals_[l]||l,line:r.yylineno,loc:E,expected:v})}if(a[0]instanceof Array&&a.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+l);switch(a[0]){case 1:n.push(l),s.push(r.yytext),i.push(r.yylloc),n.push(a[1]),l=null,O=r.yyleng,$=r.yytext,x=r.yylineno,E=r.yylloc;break;case 2:if(y=this.productions_[a[1]][1],d.$=s[s.length-y],d._$={first_line:i[i.length-(y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(y||1)].first_column,last_column:i[i.length-1].last_column},R&&(d._$.range=[i[i.length-(y||1)].range[0],i[i.length-1].range[1]]),S=this.performAction.apply(d,[$,O,x,f.yy,a[1],s,i].concat(M)),typeof S<"u")return S;y&&(n=n.slice(0,-1*y*2),s=s.slice(0,-1*y),i=i.slice(0,-1*y)),n.push(this.productions_[a[1]][0]),s.push(d.$),i.push(d._$),T=h[n[n.length-2]][n[n.length-1]],n.push(T);break;case 3:return!0}}return!0}},m=function(){var o={EOF:1,parseError:function(t,n){if(this.yy.parser)this.yy.parser.parseError(t,n);else throw new Error(t)},setInput:function(t,n){return this.yy=n||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var n=t.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var n=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===s.length?this.yylloc.first_column:0)+s[s.length-e.length].length-e[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),n=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+n+"^"},test_match:function(t,n){var e,s,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),s=t[0].match(/(?:\r\n?|\n).*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var h in i)this[h]=i[h];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,n,e,s;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),h=0;h<i.length;h++)if(e=this._input.match(this.rules[i[h]]),e&&(!n||e[0].length>n[0].length)){if(n=e,s=h,this.options.backtrack_lexer){if(t=this.test_match(e,i[h]),t!==!1)return t;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(t=this.test_match(n,i[s]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,n,e,s){switch(e){case 0:return 4;case 1:return 9;case 2:return"space";case 3:return 10;case 4:return 6;case 5:return"TXT"}},rules:[/^(?:info\b)/i,/^(?:[\s\n\r]+)/i,/^(?:[\s]+)/i,/^(?:showInfo\b)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5],inclusive:!0}}};return o}();k.lexer=m;function _(){this.yy={}}return _.prototype=k,k.Parser=_,new _}();L.parser=L;const q=L;var j="",F=!1;const B=c=>{I.debug("Setting message to: "+c),j=c},D=()=>j,G=c=>{F=c},H=()=>F,J={setMessage:B,getMessage:D,setInfo:G,getInfo:H,clear:X},K=()=>"",Q=K,V=(c,p,k)=>{try{I.debug(`Rendering info diagram
`+c);const m=Y().securityLevel;let _;m==="sandbox"&&(_=P("#i"+p));const o=(m==="sandbox"?P(_.nodes()[0].contentDocument.body):P("body")).select("#"+p);o.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size","32px").style("text-anchor","middle").text("v "+k),o.attr("height",100),o.attr("width",400)}catch(m){I.error("Error while rendering info diagram"),I.error(m.message)}},W={draw:V},nt={parser:q,db:J,renderer:W,styles:Q};export{nt as diagram};
