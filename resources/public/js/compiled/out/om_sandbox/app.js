// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_sandbox.app');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('om.dom');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_sandbox.app.log = (function om_sandbox$app$log(var_args){
var args__17891__auto__ = [];
var len__17884__auto___28483 = arguments.length;
var i__17885__auto___28484 = (0);
while(true){
if((i__17885__auto___28484 < len__17884__auto___28483)){
args__17891__auto__.push((arguments[i__17885__auto___28484]));

var G__28485 = (i__17885__auto___28484 + (1));
i__17885__auto___28484 = G__28485;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return om_sandbox.app.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

om_sandbox.app.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.println.call(null,">>>");

var seq__28479_28486 = cljs.core.seq.call(null,xs);
var chunk__28480_28487 = null;
var count__28481_28488 = (0);
var i__28482_28489 = (0);
while(true){
if((i__28482_28489 < count__28481_28488)){
var x_28490 = cljs.core._nth.call(null,chunk__28480_28487,i__28482_28489);
cljs.pprint.pprint.call(null,x_28490);

var G__28491 = seq__28479_28486;
var G__28492 = chunk__28480_28487;
var G__28493 = count__28481_28488;
var G__28494 = (i__28482_28489 + (1));
seq__28479_28486 = G__28491;
chunk__28480_28487 = G__28492;
count__28481_28488 = G__28493;
i__28482_28489 = G__28494;
continue;
} else {
var temp__4425__auto___28495 = cljs.core.seq.call(null,seq__28479_28486);
if(temp__4425__auto___28495){
var seq__28479_28496__$1 = temp__4425__auto___28495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28479_28496__$1)){
var c__17629__auto___28497 = cljs.core.chunk_first.call(null,seq__28479_28496__$1);
var G__28498 = cljs.core.chunk_rest.call(null,seq__28479_28496__$1);
var G__28499 = c__17629__auto___28497;
var G__28500 = cljs.core.count.call(null,c__17629__auto___28497);
var G__28501 = (0);
seq__28479_28486 = G__28498;
chunk__28480_28487 = G__28499;
count__28481_28488 = G__28500;
i__28482_28489 = G__28501;
continue;
} else {
var x_28502 = cljs.core.first.call(null,seq__28479_28496__$1);
cljs.pprint.pprint.call(null,x_28502);

var G__28503 = cljs.core.next.call(null,seq__28479_28496__$1);
var G__28504 = null;
var G__28505 = (0);
var G__28506 = (0);
seq__28479_28486 = G__28503;
chunk__28480_28487 = G__28504;
count__28481_28488 = G__28505;
i__28482_28489 = G__28506;
continue;
}
} else {
}
}
break;
}

return cljs.core.last.call(null,xs);
});

om_sandbox.app.log.cljs$lang$maxFixedArity = (0);

om_sandbox.app.log.cljs$lang$applyTo = (function (seq28478){
return om_sandbox.app.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28478));
});
/**
 * @constructor
 */
om_sandbox.app.Root = (function om_sandbox$app$Root(){
var this__21407__auto__ = this;
React.Component.apply(this__21407__auto__,arguments);

if(!((this__21407__auto__.initLocalState == null))){
this__21407__auto__.state = this__21407__auto__.initLocalState();
} else {
this__21407__auto__.state = {};
}

return this__21407__auto__;
});

om_sandbox.app.Root.prototype = goog.object.clone(React.Component.prototype);

var x28511_28525 = om_sandbox.app.Root.prototype;
x28511_28525.componentWillUpdate = ((function (x28511_28525){
return (function (next_props__21348__auto__,next_state__21349__auto__){
var this__21347__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21347__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21347__auto__);
});})(x28511_28525))
;

x28511_28525.shouldComponentUpdate = ((function (x28511_28525){
return (function (next_props__21348__auto__,next_state__21349__auto__){
var this__21347__auto__ = this;
var or__16826__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21347__auto__),goog.object.get(next_props__21348__auto__,"omcljs$value"));
if(or__16826__auto__){
return or__16826__auto__;
} else {
var and__16814__auto__ = this__21347__auto__.state;
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21347__auto__.state,"omcljs$state"),goog.object.get(next_state__21349__auto__,"omcljs$state"));
} else {
return and__16814__auto__;
}
}
});})(x28511_28525))
;

x28511_28525.componentWillUnmount = ((function (x28511_28525){
return (function (){
var this__21347__auto__ = this;
var r__21353__auto__ = om.next.get_reconciler.call(null,this__21347__auto__);
var cfg__21354__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21353__auto__);
var st__21355__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21354__auto__);
var indexer__21352__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21354__auto__);
if((st__21355__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21355__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21347__auto__);
}

if((indexer__21352__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21352__auto__,this__21347__auto__);
}
});})(x28511_28525))
;

x28511_28525.componentDidUpdate = ((function (x28511_28525){
return (function (prev_props__21350__auto__,prev_state__21351__auto__){
var this__21347__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21347__auto__);
});})(x28511_28525))
;

x28511_28525.isMounted = ((function (x28511_28525){
return (function (){
var this__21347__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21347__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28511_28525))
;

x28511_28525.componentWillMount = ((function (x28511_28525){
return (function (){
var this__21347__auto__ = this;
var indexer__21352__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21347__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21352__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21352__auto__,this__21347__auto__);
}
});})(x28511_28525))
;

x28511_28525.render = ((function (x28511_28525){
return (function (){
var this__21346__auto__ = this;
var this$ = this__21346__auto__;
var _STAR_reconciler_STAR_28512 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28513 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28514 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28515 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28516 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21346__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21346__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21346__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21346__auto__);

om.next._STAR_parent_STAR_ = this__21346__auto__;

try{var map__28517 = om.next.props.call(null,this$);
var map__28517__$1 = ((((!((map__28517 == null)))?((((map__28517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);
var bugs = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"bugs","bugs",-828146579));
var message = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h1(null,om.util.force_children.call(null,message))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__28517,map__28517__$1,bugs,message,_STAR_reconciler_STAR_28512,_STAR_depth_STAR_28513,_STAR_shared_STAR_28514,_STAR_instrument_STAR_28515,_STAR_parent_STAR_28516,this$,this__21346__auto__,x28511_28525){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"change-things","change-things",-1572762172,null),"howdy"),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"bugs","bugs",-828146579)], null));
});})(map__28517,map__28517__$1,bugs,message,_STAR_reconciler_STAR_28512,_STAR_depth_STAR_28513,_STAR_shared_STAR_28514,_STAR_instrument_STAR_28515,_STAR_parent_STAR_28516,this$,this__21346__auto__,x28511_28525))
},om.util.force_children.call(null,"change stuff"))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,(function (){var iter__17598__auto__ = ((function (map__28517,map__28517__$1,bugs,message,_STAR_reconciler_STAR_28512,_STAR_depth_STAR_28513,_STAR_shared_STAR_28514,_STAR_instrument_STAR_28515,_STAR_parent_STAR_28516,this$,this__21346__auto__,x28511_28525){
return (function om_sandbox$app$iter__28519(s__28520){
return (new cljs.core.LazySeq(null,((function (map__28517,map__28517__$1,bugs,message,_STAR_reconciler_STAR_28512,_STAR_depth_STAR_28513,_STAR_shared_STAR_28514,_STAR_instrument_STAR_28515,_STAR_parent_STAR_28516,this$,this__21346__auto__,x28511_28525){
return (function (){
var s__28520__$1 = s__28520;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28520__$1);
if(temp__4425__auto__){
var s__28520__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28520__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__28520__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__28522 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__28521 = (0);
while(true){
if((i__28521 < size__17597__auto__)){
var bug = cljs.core._nth.call(null,c__17596__auto__,i__28521);
cljs.core.chunk_append.call(null,b__28522,React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(bug)].join(''))));

var G__28526 = (i__28521 + (1));
i__28521 = G__28526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28522),om_sandbox$app$iter__28519.call(null,cljs.core.chunk_rest.call(null,s__28520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28522),null);
}
} else {
var bug = cljs.core.first.call(null,s__28520__$2);
return cljs.core.cons.call(null,React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(bug)].join(''))),om_sandbox$app$iter__28519.call(null,cljs.core.rest.call(null,s__28520__$2)));
}
} else {
return null;
}
break;
}
});})(map__28517,map__28517__$1,bugs,message,_STAR_reconciler_STAR_28512,_STAR_depth_STAR_28513,_STAR_shared_STAR_28514,_STAR_instrument_STAR_28515,_STAR_parent_STAR_28516,this$,this__21346__auto__,x28511_28525))
,null,null));
});})(map__28517,map__28517__$1,bugs,message,_STAR_reconciler_STAR_28512,_STAR_depth_STAR_28513,_STAR_shared_STAR_28514,_STAR_instrument_STAR_28515,_STAR_parent_STAR_28516,this$,this__21346__auto__,x28511_28525))
;
return iter__17598__auto__.call(null,bugs);
})()))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28516;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28515;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28514;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28513;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28512;
}});})(x28511_28525))
;


om_sandbox.app.Root.prototype.constructor = om_sandbox.app.Root;

om_sandbox.app.Root.prototype.om$isComponent = true;

var x28523_28527 = om_sandbox.app.Root;
x28523_28527.om$next$IQueryParams$ = true;

x28523_28527.om$next$IQueryParams$params$arity$1 = ((function (x28523_28527){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(10)], null);
});})(x28523_28527))
;

x28523_28527.om$next$IQuery$ = true;

x28523_28527.om$next$IQuery$query$arity$1 = ((function (x28523_28527){
return (function (_){
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"bugs","bugs",-828146579)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"num","num",1985240673)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-sandbox.app","?num","om-sandbox.app/?num",1197093947,null))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",-406056002))))));
});})(x28523_28527))
;


var x28524_28528 = om_sandbox.app.Root.prototype;
x28524_28528.om$next$IQueryParams$ = true;

x28524_28528.om$next$IQueryParams$params$arity$1 = ((function (x28524_28528){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(10)], null);
});})(x28524_28528))
;

x28524_28528.om$next$IQuery$ = true;

x28524_28528.om$next$IQuery$query$arity$1 = ((function (x28524_28528){
return (function (_){
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"bugs","bugs",-828146579)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"num","num",1985240673)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-sandbox.app","?num","om-sandbox.app/?num",1197093947,null))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",-406056002))))));
});})(x28524_28528))
;


om_sandbox.app.Root.cljs$lang$type = true;

om_sandbox.app.Root.cljs$lang$ctorStr = "om-sandbox.app/Root";

om_sandbox.app.Root.cljs$lang$ctorPrWriter = (function (this__21409__auto__,writer__21410__auto__,opt__21411__auto__){
return cljs.core._write.call(null,writer__21410__auto__,"om-sandbox.app/Root");
});
if(typeof om_sandbox.app.read !== 'undefined'){
} else {
om_sandbox.app.read = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-sandbox.app","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,om_sandbox.app.read,new cljs.core.Keyword(null,"message","message",-406056002),(function (p__28529,k,params){
var map__28530 = p__28529;
var map__28530__$1 = ((((!((map__28530 == null)))?((((map__28530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28530):map__28530);
var env = map__28530__$1;
var state = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k)], null);
}));
cljs.core._add_method.call(null,om_sandbox.app.read,new cljs.core.Keyword(null,"bugs","bugs",-828146579),(function (p__28532,k,params){
var map__28533 = p__28532;
var map__28533__$1 = ((((!((map__28533 == null)))?((((map__28533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28533):map__28533);
var env = map__28533__$1;
var state = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k)], null);
}));
if(typeof om_sandbox.app.mutate !== 'undefined'){
} else {
om_sandbox.app.mutate = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-sandbox.app","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,om_sandbox.app.mutate,new cljs.core.Symbol(null,"change-things","change-things",-1572762172,null),(function (p__28535,k,params){
var map__28536 = p__28535;
var map__28536__$1 = ((((!((map__28536 == null)))?((((map__28536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28536):map__28536);
var env = map__28536__$1;
var state = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28536,map__28536__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"message","message",-406056002),"howdy");
});})(map__28536,map__28536__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,om_sandbox.app.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2){
return om_sandbox.app.log.call(null,"bad mutate");
}));
om_sandbox.app.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_sandbox.app.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_sandbox.app.mutate], null));
om_sandbox.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bugs","bugs",-828146579),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"message","message",-406056002),"hello"], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),om_sandbox.app.parser], null));
om.next.add_root_BANG_.call(null,om_sandbox.app.reconciler,om_sandbox.app.Root,goog.dom.getElement("app-root"));

//# sourceMappingURL=app.js.map?rel=1451439409241