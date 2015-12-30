// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17891__auto__ = [];
var len__17884__auto___27515 = arguments.length;
var i__17885__auto___27516 = (0);
while(true){
if((i__17885__auto___27516 < len__17884__auto___27515)){
args__17891__auto__.push((arguments[i__17885__auto___27516]));

var G__27517 = (i__17885__auto___27516 + (1));
i__17885__auto___27516 = G__27517;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27507_27518 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27508_27519 = null;
var count__27509_27520 = (0);
var i__27510_27521 = (0);
while(true){
if((i__27510_27521 < count__27509_27520)){
var k_27522 = cljs.core._nth.call(null,chunk__27508_27519,i__27510_27521);
e.setAttribute(cljs.core.name.call(null,k_27522),cljs.core.get.call(null,attrs,k_27522));

var G__27523 = seq__27507_27518;
var G__27524 = chunk__27508_27519;
var G__27525 = count__27509_27520;
var G__27526 = (i__27510_27521 + (1));
seq__27507_27518 = G__27523;
chunk__27508_27519 = G__27524;
count__27509_27520 = G__27525;
i__27510_27521 = G__27526;
continue;
} else {
var temp__4425__auto___27527 = cljs.core.seq.call(null,seq__27507_27518);
if(temp__4425__auto___27527){
var seq__27507_27528__$1 = temp__4425__auto___27527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27507_27528__$1)){
var c__17629__auto___27529 = cljs.core.chunk_first.call(null,seq__27507_27528__$1);
var G__27530 = cljs.core.chunk_rest.call(null,seq__27507_27528__$1);
var G__27531 = c__17629__auto___27529;
var G__27532 = cljs.core.count.call(null,c__17629__auto___27529);
var G__27533 = (0);
seq__27507_27518 = G__27530;
chunk__27508_27519 = G__27531;
count__27509_27520 = G__27532;
i__27510_27521 = G__27533;
continue;
} else {
var k_27534 = cljs.core.first.call(null,seq__27507_27528__$1);
e.setAttribute(cljs.core.name.call(null,k_27534),cljs.core.get.call(null,attrs,k_27534));

var G__27535 = cljs.core.next.call(null,seq__27507_27528__$1);
var G__27536 = null;
var G__27537 = (0);
var G__27538 = (0);
seq__27507_27518 = G__27535;
chunk__27508_27519 = G__27536;
count__27509_27520 = G__27537;
i__27510_27521 = G__27538;
continue;
}
} else {
}
}
break;
}

var seq__27511_27539 = cljs.core.seq.call(null,children);
var chunk__27512_27540 = null;
var count__27513_27541 = (0);
var i__27514_27542 = (0);
while(true){
if((i__27514_27542 < count__27513_27541)){
var ch_27543 = cljs.core._nth.call(null,chunk__27512_27540,i__27514_27542);
e.appendChild(ch_27543);

var G__27544 = seq__27511_27539;
var G__27545 = chunk__27512_27540;
var G__27546 = count__27513_27541;
var G__27547 = (i__27514_27542 + (1));
seq__27511_27539 = G__27544;
chunk__27512_27540 = G__27545;
count__27513_27541 = G__27546;
i__27514_27542 = G__27547;
continue;
} else {
var temp__4425__auto___27548 = cljs.core.seq.call(null,seq__27511_27539);
if(temp__4425__auto___27548){
var seq__27511_27549__$1 = temp__4425__auto___27548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27511_27549__$1)){
var c__17629__auto___27550 = cljs.core.chunk_first.call(null,seq__27511_27549__$1);
var G__27551 = cljs.core.chunk_rest.call(null,seq__27511_27549__$1);
var G__27552 = c__17629__auto___27550;
var G__27553 = cljs.core.count.call(null,c__17629__auto___27550);
var G__27554 = (0);
seq__27511_27539 = G__27551;
chunk__27512_27540 = G__27552;
count__27513_27541 = G__27553;
i__27514_27542 = G__27554;
continue;
} else {
var ch_27555 = cljs.core.first.call(null,seq__27511_27549__$1);
e.appendChild(ch_27555);

var G__27556 = cljs.core.next.call(null,seq__27511_27549__$1);
var G__27557 = null;
var G__27558 = (0);
var G__27559 = (0);
seq__27511_27539 = G__27556;
chunk__27512_27540 = G__27557;
count__27513_27541 = G__27558;
i__27514_27542 = G__27559;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27504){
var G__27505 = cljs.core.first.call(null,seq27504);
var seq27504__$1 = cljs.core.next.call(null,seq27504);
var G__27506 = cljs.core.first.call(null,seq27504__$1);
var seq27504__$2 = cljs.core.next.call(null,seq27504__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27505,G__27506,seq27504__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27560 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27560.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27560.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27560.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27560);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27561,st_map){
var map__27566 = p__27561;
var map__27566__$1 = ((((!((map__27566 == null)))?((((map__27566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566):map__27566);
var container_el = cljs.core.get.call(null,map__27566__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27566,map__27566__$1,container_el){
return (function (p__27568){
var vec__27569 = p__27568;
var k = cljs.core.nth.call(null,vec__27569,(0),null);
var v = cljs.core.nth.call(null,vec__27569,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27566,map__27566__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27570,dom_str){
var map__27573 = p__27570;
var map__27573__$1 = ((((!((map__27573 == null)))?((((map__27573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27573):map__27573);
var c = map__27573__$1;
var content_area_el = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27575){
var map__27578 = p__27575;
var map__27578__$1 = ((((!((map__27578 == null)))?((((map__27578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27578):map__27578);
var content_area_el = cljs.core.get.call(null,map__27578__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (1))){
var inst_27606 = (state_27621[(7)]);
var inst_27606__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27607 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27608 = ["10px","10px","100%","68px","1.0"];
var inst_27609 = cljs.core.PersistentHashMap.fromArrays(inst_27607,inst_27608);
var inst_27610 = cljs.core.merge.call(null,inst_27609,style);
var inst_27611 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27606__$1,inst_27610);
var inst_27612 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27606__$1,msg);
var inst_27613 = cljs.core.async.timeout.call(null,(300));
var state_27621__$1 = (function (){var statearr_27623 = state_27621;
(statearr_27623[(8)] = inst_27612);

(statearr_27623[(7)] = inst_27606__$1);

(statearr_27623[(9)] = inst_27611);

return statearr_27623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(2),inst_27613);
} else {
if((state_val_27622 === (2))){
var inst_27606 = (state_27621[(7)]);
var inst_27615 = (state_27621[(2)]);
var inst_27616 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27617 = ["auto"];
var inst_27618 = cljs.core.PersistentHashMap.fromArrays(inst_27616,inst_27617);
var inst_27619 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27606,inst_27618);
var state_27621__$1 = (function (){var statearr_27624 = state_27621;
(statearr_27624[(10)] = inst_27615);

return statearr_27624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
return null;
}
}
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto____0 = (function (){
var statearr_27628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27628[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto__);

(statearr_27628[(1)] = (1));

return statearr_27628;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto____1 = (function (state_27621){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e27629){if((e27629 instanceof Object)){
var ex__23418__auto__ = e27629;
var statearr_27630_27632 = state_27621;
(statearr_27630_27632[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27633 = state_27621;
state_27621 = G__27633;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_27631 = f__23527__auto__.call(null);
(statearr_27631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27635 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27635,(0),null);
var ln = cljs.core.nth.call(null,vec__27635,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27638 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27638,(0),null);
var file_line = cljs.core.nth.call(null,vec__27638,(1),null);
var file_column = cljs.core.nth.call(null,vec__27638,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27638,file_name,file_line,file_column){
return (function (p1__27636_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27636_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27638,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27641 = figwheel.client.heads_up.ensure_container.call(null);
var map__27641__$1 = ((((!((map__27641 == null)))?((((map__27641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27641):map__27641);
var content_area_el = cljs.core.get.call(null,map__27641__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (1))){
var inst_27672 = (state_27689[(7)]);
var inst_27672__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27673 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27674 = ["0.0"];
var inst_27675 = cljs.core.PersistentHashMap.fromArrays(inst_27673,inst_27674);
var inst_27676 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27672__$1,inst_27675);
var inst_27677 = cljs.core.async.timeout.call(null,(300));
var state_27689__$1 = (function (){var statearr_27691 = state_27689;
(statearr_27691[(8)] = inst_27676);

(statearr_27691[(7)] = inst_27672__$1);

return statearr_27691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(2),inst_27677);
} else {
if((state_val_27690 === (2))){
var inst_27672 = (state_27689[(7)]);
var inst_27679 = (state_27689[(2)]);
var inst_27680 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27681 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27682 = cljs.core.PersistentHashMap.fromArrays(inst_27680,inst_27681);
var inst_27683 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27672,inst_27682);
var inst_27684 = cljs.core.async.timeout.call(null,(200));
var state_27689__$1 = (function (){var statearr_27692 = state_27689;
(statearr_27692[(9)] = inst_27683);

(statearr_27692[(10)] = inst_27679);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(3),inst_27684);
} else {
if((state_val_27690 === (3))){
var inst_27672 = (state_27689[(7)]);
var inst_27686 = (state_27689[(2)]);
var inst_27687 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27672,"");
var state_27689__$1 = (function (){var statearr_27693 = state_27689;
(statearr_27693[(11)] = inst_27686);

return statearr_27693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
return null;
}
}
}
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23415__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23415__auto____0 = (function (){
var statearr_27697 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27697[(0)] = figwheel$client$heads_up$clear_$_state_machine__23415__auto__);

(statearr_27697[(1)] = (1));

return statearr_27697;
});
var figwheel$client$heads_up$clear_$_state_machine__23415__auto____1 = (function (state_27689){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e27698){if((e27698 instanceof Object)){
var ex__23418__auto__ = e27698;
var statearr_27699_27701 = state_27689;
(statearr_27699_27701[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27702 = state_27689;
state_27689 = G__27702;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23415__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23415__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23415__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23415__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_27700 = f__23527__auto__.call(null);
(statearr_27700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_27700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_27734){
var state_val_27735 = (state_27734[(1)]);
if((state_val_27735 === (1))){
var inst_27724 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27734__$1 = state_27734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27734__$1,(2),inst_27724);
} else {
if((state_val_27735 === (2))){
var inst_27726 = (state_27734[(2)]);
var inst_27727 = cljs.core.async.timeout.call(null,(400));
var state_27734__$1 = (function (){var statearr_27736 = state_27734;
(statearr_27736[(7)] = inst_27726);

return statearr_27736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27734__$1,(3),inst_27727);
} else {
if((state_val_27735 === (3))){
var inst_27729 = (state_27734[(2)]);
var inst_27730 = figwheel.client.heads_up.clear.call(null);
var state_27734__$1 = (function (){var statearr_27737 = state_27734;
(statearr_27737[(8)] = inst_27729);

return statearr_27737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27734__$1,(4),inst_27730);
} else {
if((state_val_27735 === (4))){
var inst_27732 = (state_27734[(2)]);
var state_27734__$1 = state_27734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27734__$1,inst_27732);
} else {
return null;
}
}
}
}
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto____0 = (function (){
var statearr_27741 = [null,null,null,null,null,null,null,null,null];
(statearr_27741[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto__);

(statearr_27741[(1)] = (1));

return statearr_27741;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto____1 = (function (state_27734){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_27734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object)){
var ex__23418__auto__ = e27742;
var statearr_27743_27745 = state_27734;
(statearr_27743_27745[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27746 = state_27734;
state_27734 = G__27746;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto__ = function(state_27734){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto____1.call(this,state_27734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_27744 = f__23527__auto__.call(null);
(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_27744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1451439389898