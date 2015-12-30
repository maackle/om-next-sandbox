// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_sandbox.cards.awkay');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_sandbox.cards.awkay.log = (function om_sandbox$cards$awkay$log(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22399 = arguments.length;
var i__17885__auto___22400 = (0);
while(true){
if((i__17885__auto___22400 < len__17884__auto___22399)){
args__17891__auto__.push((arguments[i__17885__auto___22400]));

var G__22401 = (i__17885__auto___22400 + (1));
i__17885__auto___22400 = G__22401;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return om_sandbox.cards.awkay.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

om_sandbox.cards.awkay.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.println.call(null,">>>");

var seq__22395_22402 = cljs.core.seq.call(null,xs);
var chunk__22396_22403 = null;
var count__22397_22404 = (0);
var i__22398_22405 = (0);
while(true){
if((i__22398_22405 < count__22397_22404)){
var x_22406 = cljs.core._nth.call(null,chunk__22396_22403,i__22398_22405);
cljs.pprint.pprint.call(null,x_22406);

var G__22407 = seq__22395_22402;
var G__22408 = chunk__22396_22403;
var G__22409 = count__22397_22404;
var G__22410 = (i__22398_22405 + (1));
seq__22395_22402 = G__22407;
chunk__22396_22403 = G__22408;
count__22397_22404 = G__22409;
i__22398_22405 = G__22410;
continue;
} else {
var temp__4425__auto___22411 = cljs.core.seq.call(null,seq__22395_22402);
if(temp__4425__auto___22411){
var seq__22395_22412__$1 = temp__4425__auto___22411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22395_22412__$1)){
var c__17629__auto___22413 = cljs.core.chunk_first.call(null,seq__22395_22412__$1);
var G__22414 = cljs.core.chunk_rest.call(null,seq__22395_22412__$1);
var G__22415 = c__17629__auto___22413;
var G__22416 = cljs.core.count.call(null,c__17629__auto___22413);
var G__22417 = (0);
seq__22395_22402 = G__22414;
chunk__22396_22403 = G__22415;
count__22397_22404 = G__22416;
i__22398_22405 = G__22417;
continue;
} else {
var x_22418 = cljs.core.first.call(null,seq__22395_22412__$1);
cljs.pprint.pprint.call(null,x_22418);

var G__22419 = cljs.core.next.call(null,seq__22395_22412__$1);
var G__22420 = null;
var G__22421 = (0);
var G__22422 = (0);
seq__22395_22402 = G__22419;
chunk__22396_22403 = G__22420;
count__22397_22404 = G__22421;
i__22398_22405 = G__22422;
continue;
}
} else {
}
}
break;
}

return cljs.core.last.call(null,xs);
});

om_sandbox.cards.awkay.log.cljs$lang$maxFixedArity = (0);

om_sandbox.cards.awkay.log.cljs$lang$applyTo = (function (seq22394){
return om_sandbox.cards.awkay.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22394));
});
/**
 * @constructor
 */
om_sandbox.cards.awkay.Root = (function om_sandbox$cards$awkay$Root(){
var this__21407__auto__ = this;
React.Component.apply(this__21407__auto__,arguments);

if(!((this__21407__auto__.initLocalState == null))){
this__21407__auto__.state = this__21407__auto__.initLocalState();
} else {
this__21407__auto__.state = {};
}

return this__21407__auto__;
});

om_sandbox.cards.awkay.Root.prototype = goog.object.clone(React.Component.prototype);

var x22427_22441 = om_sandbox.cards.awkay.Root.prototype;
x22427_22441.componentWillUpdate = ((function (x22427_22441){
return (function (next_props__21348__auto__,next_state__21349__auto__){
var this__21347__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21347__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21347__auto__);
});})(x22427_22441))
;

x22427_22441.shouldComponentUpdate = ((function (x22427_22441){
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
});})(x22427_22441))
;

x22427_22441.componentWillUnmount = ((function (x22427_22441){
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
});})(x22427_22441))
;

x22427_22441.componentDidUpdate = ((function (x22427_22441){
return (function (prev_props__21350__auto__,prev_state__21351__auto__){
var this__21347__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21347__auto__);
});})(x22427_22441))
;

x22427_22441.isMounted = ((function (x22427_22441){
return (function (){
var this__21347__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21347__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22427_22441))
;

x22427_22441.componentWillMount = ((function (x22427_22441){
return (function (){
var this__21347__auto__ = this;
var indexer__21352__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21347__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21352__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21352__auto__,this__21347__auto__);
}
});})(x22427_22441))
;

x22427_22441.render = ((function (x22427_22441){
return (function (){
var this__21346__auto__ = this;
var this$ = this__21346__auto__;
var _STAR_reconciler_STAR_22428 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22429 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22430 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22431 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22432 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21346__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21346__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21346__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21346__auto__);

om.next._STAR_parent_STAR_ = this__21346__auto__;

try{var map__22433 = om.next.props.call(null,this$);
var map__22433__$1 = ((((!((map__22433 == null)))?((((map__22433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22433):map__22433);
var bugs = cljs.core.get.call(null,map__22433__$1,new cljs.core.Keyword(null,"bugs","bugs",-828146579));
var message = cljs.core.get.call(null,map__22433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h1(null,om.util.force_children.call(null,message))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__22433,map__22433__$1,bugs,message,_STAR_reconciler_STAR_22428,_STAR_depth_STAR_22429,_STAR_shared_STAR_22430,_STAR_instrument_STAR_22431,_STAR_parent_STAR_22432,this$,this__21346__auto__,x22427_22441){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"change-things","change-things",-1572762172,null),"howdy"),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"bugs","bugs",-828146579)], null));
});})(map__22433,map__22433__$1,bugs,message,_STAR_reconciler_STAR_22428,_STAR_depth_STAR_22429,_STAR_shared_STAR_22430,_STAR_instrument_STAR_22431,_STAR_parent_STAR_22432,this$,this__21346__auto__,x22427_22441))
},om.util.force_children.call(null,"change stuff"))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,(function (){var iter__17598__auto__ = ((function (map__22433,map__22433__$1,bugs,message,_STAR_reconciler_STAR_22428,_STAR_depth_STAR_22429,_STAR_shared_STAR_22430,_STAR_instrument_STAR_22431,_STAR_parent_STAR_22432,this$,this__21346__auto__,x22427_22441){
return (function om_sandbox$cards$awkay$iter__22435(s__22436){
return (new cljs.core.LazySeq(null,((function (map__22433,map__22433__$1,bugs,message,_STAR_reconciler_STAR_22428,_STAR_depth_STAR_22429,_STAR_shared_STAR_22430,_STAR_instrument_STAR_22431,_STAR_parent_STAR_22432,this$,this__21346__auto__,x22427_22441){
return (function (){
var s__22436__$1 = s__22436;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22436__$1);
if(temp__4425__auto__){
var s__22436__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22436__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__22436__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__22438 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__22437 = (0);
while(true){
if((i__22437 < size__17597__auto__)){
var bug = cljs.core._nth.call(null,c__17596__auto__,i__22437);
cljs.core.chunk_append.call(null,b__22438,React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(bug)].join(''))));

var G__22442 = (i__22437 + (1));
i__22437 = G__22442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22438),om_sandbox$cards$awkay$iter__22435.call(null,cljs.core.chunk_rest.call(null,s__22436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22438),null);
}
} else {
var bug = cljs.core.first.call(null,s__22436__$2);
return cljs.core.cons.call(null,React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(bug)].join(''))),om_sandbox$cards$awkay$iter__22435.call(null,cljs.core.rest.call(null,s__22436__$2)));
}
} else {
return null;
}
break;
}
});})(map__22433,map__22433__$1,bugs,message,_STAR_reconciler_STAR_22428,_STAR_depth_STAR_22429,_STAR_shared_STAR_22430,_STAR_instrument_STAR_22431,_STAR_parent_STAR_22432,this$,this__21346__auto__,x22427_22441))
,null,null));
});})(map__22433,map__22433__$1,bugs,message,_STAR_reconciler_STAR_22428,_STAR_depth_STAR_22429,_STAR_shared_STAR_22430,_STAR_instrument_STAR_22431,_STAR_parent_STAR_22432,this$,this__21346__auto__,x22427_22441))
;
return iter__17598__auto__.call(null,bugs);
})()))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22432;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22431;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22430;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22429;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22428;
}});})(x22427_22441))
;


om_sandbox.cards.awkay.Root.prototype.constructor = om_sandbox.cards.awkay.Root;

om_sandbox.cards.awkay.Root.prototype.om$isComponent = true;

var x22439_22443 = om_sandbox.cards.awkay.Root;
x22439_22443.om$next$IQueryParams$ = true;

x22439_22443.om$next$IQueryParams$params$arity$1 = ((function (x22439_22443){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(10)], null);
});})(x22439_22443))
;

x22439_22443.om$next$IQuery$ = true;

x22439_22443.om$next$IQuery$query$arity$1 = ((function (x22439_22443){
return (function (_){
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"bugs","bugs",-828146579)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"num","num",1985240673)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-sandbox.cards.awkay","?num","om-sandbox.cards.awkay/?num",1980652724,null))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",-406056002))))));
});})(x22439_22443))
;


var x22440_22444 = om_sandbox.cards.awkay.Root.prototype;
x22440_22444.om$next$IQueryParams$ = true;

x22440_22444.om$next$IQueryParams$params$arity$1 = ((function (x22440_22444){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(10)], null);
});})(x22440_22444))
;

x22440_22444.om$next$IQuery$ = true;

x22440_22444.om$next$IQuery$query$arity$1 = ((function (x22440_22444){
return (function (_){
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"bugs","bugs",-828146579)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"num","num",1985240673)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-sandbox.cards.awkay","?num","om-sandbox.cards.awkay/?num",1980652724,null))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",-406056002))))));
});})(x22440_22444))
;


om_sandbox.cards.awkay.Root.cljs$lang$type = true;

om_sandbox.cards.awkay.Root.cljs$lang$ctorStr = "om-sandbox.cards.awkay/Root";

om_sandbox.cards.awkay.Root.cljs$lang$ctorPrWriter = (function (this__21409__auto__,writer__21410__auto__,opt__21411__auto__){
return cljs.core._write.call(null,writer__21410__auto__,"om-sandbox.cards.awkay/Root");
});
if(typeof om_sandbox.cards.awkay.read !== 'undefined'){
} else {
om_sandbox.cards.awkay.read = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-sandbox.cards.awkay","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,om_sandbox.cards.awkay.read,new cljs.core.Keyword(null,"message","message",-406056002),(function (p__22445,k,params){
var map__22446 = p__22445;
var map__22446__$1 = ((((!((map__22446 == null)))?((((map__22446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22446):map__22446);
var env = map__22446__$1;
var state = cljs.core.get.call(null,map__22446__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k)], null);
}));
cljs.core._add_method.call(null,om_sandbox.cards.awkay.read,new cljs.core.Keyword(null,"bugs","bugs",-828146579),(function (p__22448,k,params){
var map__22449 = p__22448;
var map__22449__$1 = ((((!((map__22449 == null)))?((((map__22449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22449):map__22449);
var env = map__22449__$1;
var state = cljs.core.get.call(null,map__22449__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k)], null);
}));
if(typeof om_sandbox.cards.awkay.mutate !== 'undefined'){
} else {
om_sandbox.cards.awkay.mutate = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-sandbox.cards.awkay","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,om_sandbox.cards.awkay.mutate,new cljs.core.Symbol(null,"change-things","change-things",-1572762172,null),(function (p__22451,k,params){
var map__22452 = p__22451;
var map__22452__$1 = ((((!((map__22452 == null)))?((((map__22452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22452):map__22452);
var env = map__22452__$1;
var state = cljs.core.get.call(null,map__22452__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22452,map__22452__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"message","message",-406056002),"howdy");
});})(map__22452,map__22452__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,om_sandbox.cards.awkay.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2){
return om_sandbox.cards.awkay.log.call(null,"bad mutate");
}));
om_sandbox.cards.awkay.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_sandbox.cards.awkay.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_sandbox.cards.awkay.mutate], null));
om_sandbox.cards.awkay.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bugs","bugs",-828146579),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"message","message",-406056002),"hello"], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),om_sandbox.cards.awkay.parser], null));

//# sourceMappingURL=awkay.js.map?rel=1451439383512