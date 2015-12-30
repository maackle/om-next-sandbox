// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_sandbox.cards.awkay');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_sandbox.cards.awkay.log = (function om_sandbox$cards$awkay$log(var_args){
var args__17891__auto__ = [];
var len__17884__auto___44701 = arguments.length;
var i__17885__auto___44702 = (0);
while(true){
if((i__17885__auto___44702 < len__17884__auto___44701)){
args__17891__auto__.push((arguments[i__17885__auto___44702]));

var G__44703 = (i__17885__auto___44702 + (1));
i__17885__auto___44702 = G__44703;
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

var seq__44697_44704 = cljs.core.seq.call(null,xs);
var chunk__44698_44705 = null;
var count__44699_44706 = (0);
var i__44700_44707 = (0);
while(true){
if((i__44700_44707 < count__44699_44706)){
var x_44708 = cljs.core._nth.call(null,chunk__44698_44705,i__44700_44707);
cljs.pprint.pprint.call(null,x_44708);

var G__44709 = seq__44697_44704;
var G__44710 = chunk__44698_44705;
var G__44711 = count__44699_44706;
var G__44712 = (i__44700_44707 + (1));
seq__44697_44704 = G__44709;
chunk__44698_44705 = G__44710;
count__44699_44706 = G__44711;
i__44700_44707 = G__44712;
continue;
} else {
var temp__4425__auto___44713 = cljs.core.seq.call(null,seq__44697_44704);
if(temp__4425__auto___44713){
var seq__44697_44714__$1 = temp__4425__auto___44713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44697_44714__$1)){
var c__17629__auto___44715 = cljs.core.chunk_first.call(null,seq__44697_44714__$1);
var G__44716 = cljs.core.chunk_rest.call(null,seq__44697_44714__$1);
var G__44717 = c__17629__auto___44715;
var G__44718 = cljs.core.count.call(null,c__17629__auto___44715);
var G__44719 = (0);
seq__44697_44704 = G__44716;
chunk__44698_44705 = G__44717;
count__44699_44706 = G__44718;
i__44700_44707 = G__44719;
continue;
} else {
var x_44720 = cljs.core.first.call(null,seq__44697_44714__$1);
cljs.pprint.pprint.call(null,x_44720);

var G__44721 = cljs.core.next.call(null,seq__44697_44714__$1);
var G__44722 = null;
var G__44723 = (0);
var G__44724 = (0);
seq__44697_44704 = G__44721;
chunk__44698_44705 = G__44722;
count__44699_44706 = G__44723;
i__44700_44707 = G__44724;
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

om_sandbox.cards.awkay.log.cljs$lang$applyTo = (function (seq44696){
return om_sandbox.cards.awkay.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44696));
});
om_sandbox.cards.awkay.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bugs","bugs",-828146579),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"text","text",-1790561697),"hello"], null);
om_sandbox.cards.awkay.side_state = cljs.core.atom.call(null,om_sandbox.cards.awkay.init_data);
/**
 * @constructor
 */
om_sandbox.cards.awkay.Bugs = (function om_sandbox$cards$awkay$Bugs(){
var this__21205__auto__ = this;
React.Component.apply(this__21205__auto__,arguments);

if(!((this__21205__auto__.initLocalState == null))){
this__21205__auto__.state = this__21205__auto__.initLocalState();
} else {
this__21205__auto__.state = {};
}

return this__21205__auto__;
});

om_sandbox.cards.awkay.Bugs.prototype = goog.object.clone(React.Component.prototype);

var x44729_44743 = om_sandbox.cards.awkay.Bugs.prototype;
x44729_44743.componentWillUpdate = ((function (x44729_44743){
return (function (next_props__21146__auto__,next_state__21147__auto__){
var this__21145__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21145__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21145__auto__);
});})(x44729_44743))
;

x44729_44743.shouldComponentUpdate = ((function (x44729_44743){
return (function (next_props__21146__auto__,next_state__21147__auto__){
var this__21145__auto__ = this;
var or__16826__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21145__auto__),goog.object.get(next_props__21146__auto__,"omcljs$value"));
if(or__16826__auto__){
return or__16826__auto__;
} else {
var and__16814__auto__ = this__21145__auto__.state;
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21145__auto__.state,"omcljs$state"),goog.object.get(next_state__21147__auto__,"omcljs$state"));
} else {
return and__16814__auto__;
}
}
});})(x44729_44743))
;

x44729_44743.componentWillUnmount = ((function (x44729_44743){
return (function (){
var this__21145__auto__ = this;
var r__21151__auto__ = om.next.get_reconciler.call(null,this__21145__auto__);
var cfg__21152__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21151__auto__);
var st__21153__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21152__auto__);
var indexer__21150__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21152__auto__);
if((st__21153__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21153__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21145__auto__);
}

if((indexer__21150__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21150__auto__,this__21145__auto__);
}
});})(x44729_44743))
;

x44729_44743.componentDidUpdate = ((function (x44729_44743){
return (function (prev_props__21148__auto__,prev_state__21149__auto__){
var this__21145__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21145__auto__);
});})(x44729_44743))
;

x44729_44743.isMounted = ((function (x44729_44743){
return (function (){
var this__21145__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21145__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44729_44743))
;

x44729_44743.componentWillMount = ((function (x44729_44743){
return (function (){
var this__21145__auto__ = this;
var indexer__21150__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21145__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21150__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21150__auto__,this__21145__auto__);
}
});})(x44729_44743))
;

x44729_44743.render = ((function (x44729_44743){
return (function (){
var this__21144__auto__ = this;
var this$ = this__21144__auto__;
var _STAR_reconciler_STAR_44730 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44731 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44732 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44733 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44734 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21144__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21144__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21144__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21144__auto__);

om.next._STAR_parent_STAR_ = this__21144__auto__;

try{var map__44735 = om.next.props.call(null,this$);
var map__44735__$1 = ((((!((map__44735 == null)))?((((map__44735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44735):map__44735);
var props = map__44735__$1;
var bugs = cljs.core.get.call(null,map__44735__$1,new cljs.core.Keyword(null,"bugs","bugs",-828146579));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,(function (){var iter__17598__auto__ = ((function (map__44735,map__44735__$1,props,bugs,_STAR_reconciler_STAR_44730,_STAR_depth_STAR_44731,_STAR_shared_STAR_44732,_STAR_instrument_STAR_44733,_STAR_parent_STAR_44734,this$,this__21144__auto__,x44729_44743){
return (function om_sandbox$cards$awkay$iter__44737(s__44738){
return (new cljs.core.LazySeq(null,((function (map__44735,map__44735__$1,props,bugs,_STAR_reconciler_STAR_44730,_STAR_depth_STAR_44731,_STAR_shared_STAR_44732,_STAR_instrument_STAR_44733,_STAR_parent_STAR_44734,this$,this__21144__auto__,x44729_44743){
return (function (){
var s__44738__$1 = s__44738;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44738__$1);
if(temp__4425__auto__){
var s__44738__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44738__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__44738__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__44740 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__44739 = (0);
while(true){
if((i__44739 < size__17597__auto__)){
var bug = cljs.core._nth.call(null,c__17596__auto__,i__44739);
cljs.core.chunk_append.call(null,b__44740,React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(bug)].join(''))));

var G__44744 = (i__44739 + (1));
i__44739 = G__44744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44740),om_sandbox$cards$awkay$iter__44737.call(null,cljs.core.chunk_rest.call(null,s__44738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44740),null);
}
} else {
var bug = cljs.core.first.call(null,s__44738__$2);
return cljs.core.cons.call(null,React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(bug)].join(''))),om_sandbox$cards$awkay$iter__44737.call(null,cljs.core.rest.call(null,s__44738__$2)));
}
} else {
return null;
}
break;
}
});})(map__44735,map__44735__$1,props,bugs,_STAR_reconciler_STAR_44730,_STAR_depth_STAR_44731,_STAR_shared_STAR_44732,_STAR_instrument_STAR_44733,_STAR_parent_STAR_44734,this$,this__21144__auto__,x44729_44743))
,null,null));
});})(map__44735,map__44735__$1,props,bugs,_STAR_reconciler_STAR_44730,_STAR_depth_STAR_44731,_STAR_shared_STAR_44732,_STAR_instrument_STAR_44733,_STAR_parent_STAR_44734,this$,this__21144__auto__,x44729_44743))
;
return iter__17598__auto__.call(null,bugs);
})()))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44734;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44733;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44732;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44731;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44730;
}});})(x44729_44743))
;


om_sandbox.cards.awkay.Bugs.prototype.constructor = om_sandbox.cards.awkay.Bugs;

om_sandbox.cards.awkay.Bugs.prototype.om$isComponent = true;

var x44741_44745 = om_sandbox.cards.awkay.Bugs;
x44741_44745.om$next$IQueryParams$ = true;

x44741_44745.om$next$IQueryParams$params$arity$1 = ((function (x44741_44745){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(5)], null);
});})(x44741_44745))
;

x44741_44745.om$next$IQuery$ = true;

x44741_44745.om$next$IQuery$query$arity$1 = ((function (x44741_44745){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"bugs","bugs",-828146579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Symbol(null,"?num","?num",-554466528,null)], null))], null);
});})(x44741_44745))
;


var x44742_44746 = om_sandbox.cards.awkay.Bugs.prototype;
x44742_44746.om$next$IQueryParams$ = true;

x44742_44746.om$next$IQueryParams$params$arity$1 = ((function (x44742_44746){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(5)], null);
});})(x44742_44746))
;

x44742_44746.om$next$IQuery$ = true;

x44742_44746.om$next$IQuery$query$arity$1 = ((function (x44742_44746){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"bugs","bugs",-828146579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Symbol(null,"?num","?num",-554466528,null)], null))], null);
});})(x44742_44746))
;


om_sandbox.cards.awkay.Bugs.cljs$lang$type = true;

om_sandbox.cards.awkay.Bugs.cljs$lang$ctorStr = "om-sandbox.cards.awkay/Bugs";

om_sandbox.cards.awkay.Bugs.cljs$lang$ctorPrWriter = (function (this__21207__auto__,writer__21208__auto__,opt__21209__auto__){
return cljs.core._write.call(null,writer__21208__auto__,"om-sandbox.cards.awkay/Bugs");
});
/**
 * @constructor
 */
om_sandbox.cards.awkay.Message = (function om_sandbox$cards$awkay$Message(){
var this__21205__auto__ = this;
React.Component.apply(this__21205__auto__,arguments);

if(!((this__21205__auto__.initLocalState == null))){
this__21205__auto__.state = this__21205__auto__.initLocalState();
} else {
this__21205__auto__.state = {};
}

return this__21205__auto__;
});

om_sandbox.cards.awkay.Message.prototype = goog.object.clone(React.Component.prototype);

var x44751_44761 = om_sandbox.cards.awkay.Message.prototype;
x44751_44761.componentWillUpdate = ((function (x44751_44761){
return (function (next_props__21146__auto__,next_state__21147__auto__){
var this__21145__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21145__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21145__auto__);
});})(x44751_44761))
;

x44751_44761.shouldComponentUpdate = ((function (x44751_44761){
return (function (next_props__21146__auto__,next_state__21147__auto__){
var this__21145__auto__ = this;
var or__16826__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21145__auto__),goog.object.get(next_props__21146__auto__,"omcljs$value"));
if(or__16826__auto__){
return or__16826__auto__;
} else {
var and__16814__auto__ = this__21145__auto__.state;
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21145__auto__.state,"omcljs$state"),goog.object.get(next_state__21147__auto__,"omcljs$state"));
} else {
return and__16814__auto__;
}
}
});})(x44751_44761))
;

x44751_44761.componentWillUnmount = ((function (x44751_44761){
return (function (){
var this__21145__auto__ = this;
var r__21151__auto__ = om.next.get_reconciler.call(null,this__21145__auto__);
var cfg__21152__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21151__auto__);
var st__21153__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21152__auto__);
var indexer__21150__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21152__auto__);
if((st__21153__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21153__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21145__auto__);
}

if((indexer__21150__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21150__auto__,this__21145__auto__);
}
});})(x44751_44761))
;

x44751_44761.componentDidUpdate = ((function (x44751_44761){
return (function (prev_props__21148__auto__,prev_state__21149__auto__){
var this__21145__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21145__auto__);
});})(x44751_44761))
;

x44751_44761.isMounted = ((function (x44751_44761){
return (function (){
var this__21145__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21145__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44751_44761))
;

x44751_44761.componentWillMount = ((function (x44751_44761){
return (function (){
var this__21145__auto__ = this;
var indexer__21150__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21145__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21150__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21150__auto__,this__21145__auto__);
}
});})(x44751_44761))
;

x44751_44761.render = ((function (x44751_44761){
return (function (){
var this__21144__auto__ = this;
var this$ = this__21144__auto__;
var _STAR_reconciler_STAR_44752 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44753 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44754 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44755 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44756 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21144__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21144__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21144__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21144__auto__);

om.next._STAR_parent_STAR_ = this__21144__auto__;

try{var map__44757 = om.next.props.call(null,this$);
var map__44757__$1 = ((((!((map__44757 == null)))?((((map__44757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44757):map__44757);
var props = map__44757__$1;
var text = cljs.core.get.call(null,map__44757__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__44757,map__44757__$1,props,text,_STAR_reconciler_STAR_44752,_STAR_depth_STAR_44753,_STAR_shared_STAR_44754,_STAR_instrument_STAR_44755,_STAR_parent_STAR_44756,this$,this__21144__auto__,x44751_44761){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"change-things","change-things",-1572762172,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"howdy"], null)),new cljs.core.Keyword(null,"bugs","bugs",-828146579)], null));
});})(map__44757,map__44757__$1,props,text,_STAR_reconciler_STAR_44752,_STAR_depth_STAR_44753,_STAR_shared_STAR_44754,_STAR_instrument_STAR_44755,_STAR_parent_STAR_44756,this$,this__21144__auto__,x44751_44761))
},om.util.force_children.call(null,"change things"))),om.util.force_children.call(null,React.DOM.h1(null,om.util.force_children.call(null,text))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44756;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44755;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44754;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44753;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44752;
}});})(x44751_44761))
;


om_sandbox.cards.awkay.Message.prototype.constructor = om_sandbox.cards.awkay.Message;

om_sandbox.cards.awkay.Message.prototype.om$isComponent = true;

var x44759_44762 = om_sandbox.cards.awkay.Message;
x44759_44762.om$next$IQuery$ = true;

x44759_44762.om$next$IQuery$query$arity$1 = ((function (x44759_44762){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null);
});})(x44759_44762))
;


var x44760_44763 = om_sandbox.cards.awkay.Message.prototype;
x44760_44763.om$next$IQuery$ = true;

x44760_44763.om$next$IQuery$query$arity$1 = ((function (x44760_44763){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null);
});})(x44760_44763))
;


om_sandbox.cards.awkay.Message.cljs$lang$type = true;

om_sandbox.cards.awkay.Message.cljs$lang$ctorStr = "om-sandbox.cards.awkay/Message";

om_sandbox.cards.awkay.Message.cljs$lang$ctorPrWriter = (function (this__21207__auto__,writer__21208__auto__,opt__21209__auto__){
return cljs.core._write.call(null,writer__21208__auto__,"om-sandbox.cards.awkay/Message");
});
om_sandbox.cards.awkay.make_message = om.next.factory.call(null,om_sandbox.cards.awkay.Message);
om_sandbox.cards.awkay.make_bugs = om.next.factory.call(null,om_sandbox.cards.awkay.Bugs);
/**
 * @constructor
 */
om_sandbox.cards.awkay.Root = (function om_sandbox$cards$awkay$Root(){
var this__21205__auto__ = this;
React.Component.apply(this__21205__auto__,arguments);

if(!((this__21205__auto__.initLocalState == null))){
this__21205__auto__.state = this__21205__auto__.initLocalState();
} else {
this__21205__auto__.state = {};
}

return this__21205__auto__;
});

om_sandbox.cards.awkay.Root.prototype = goog.object.clone(React.Component.prototype);

var x44768_44778 = om_sandbox.cards.awkay.Root.prototype;
x44768_44778.componentWillUpdate = ((function (x44768_44778){
return (function (next_props__21146__auto__,next_state__21147__auto__){
var this__21145__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21145__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21145__auto__);
});})(x44768_44778))
;

x44768_44778.shouldComponentUpdate = ((function (x44768_44778){
return (function (next_props__21146__auto__,next_state__21147__auto__){
var this__21145__auto__ = this;
var or__16826__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21145__auto__),goog.object.get(next_props__21146__auto__,"omcljs$value"));
if(or__16826__auto__){
return or__16826__auto__;
} else {
var and__16814__auto__ = this__21145__auto__.state;
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21145__auto__.state,"omcljs$state"),goog.object.get(next_state__21147__auto__,"omcljs$state"));
} else {
return and__16814__auto__;
}
}
});})(x44768_44778))
;

x44768_44778.componentWillUnmount = ((function (x44768_44778){
return (function (){
var this__21145__auto__ = this;
var r__21151__auto__ = om.next.get_reconciler.call(null,this__21145__auto__);
var cfg__21152__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21151__auto__);
var st__21153__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21152__auto__);
var indexer__21150__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21152__auto__);
if((st__21153__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21153__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21145__auto__);
}

if((indexer__21150__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21150__auto__,this__21145__auto__);
}
});})(x44768_44778))
;

x44768_44778.componentDidUpdate = ((function (x44768_44778){
return (function (prev_props__21148__auto__,prev_state__21149__auto__){
var this__21145__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21145__auto__);
});})(x44768_44778))
;

x44768_44778.isMounted = ((function (x44768_44778){
return (function (){
var this__21145__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21145__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44768_44778))
;

x44768_44778.componentWillMount = ((function (x44768_44778){
return (function (){
var this__21145__auto__ = this;
var indexer__21150__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21145__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21150__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21150__auto__,this__21145__auto__);
}
});})(x44768_44778))
;

x44768_44778.render = ((function (x44768_44778){
return (function (){
var this__21144__auto__ = this;
var this$ = this__21144__auto__;
var _STAR_reconciler_STAR_44769 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44770 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44771 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44772 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44773 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21144__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21144__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21144__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21144__auto__);

om.next._STAR_parent_STAR_ = this__21144__auto__;

try{var map__44774 = om.next.props.call(null,this$);
var map__44774__$1 = ((((!((map__44774 == null)))?((((map__44774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44774):map__44774);
var props = map__44774__$1;
var bugs = cljs.core.get.call(null,map__44774__$1,new cljs.core.Keyword("root","bugs","root/bugs",-823198909));
var message = cljs.core.get.call(null,map__44774__$1,new cljs.core.Keyword("root","message","root/message",-411529516));
return React.DOM.div(null,om.util.force_children.call(null,om_sandbox.cards.awkay.make_message.call(null,message)),om.util.force_children.call(null,om_sandbox.cards.awkay.make_bugs.call(null,bugs)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44773;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44772;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44771;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44770;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44769;
}});})(x44768_44778))
;


om_sandbox.cards.awkay.Root.prototype.constructor = om_sandbox.cards.awkay.Root;

om_sandbox.cards.awkay.Root.prototype.om$isComponent = true;

var x44776_44779 = om_sandbox.cards.awkay.Root;
x44776_44779.om$next$IQuery$ = true;

x44776_44779.om$next$IQuery$query$arity$1 = ((function (x44776_44779){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","message","root/message",-411529516),om.next.get_query.call(null,om_sandbox.cards.awkay.Message)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","bugs","root/bugs",-823198909),om.next.get_query.call(null,om_sandbox.cards.awkay.Bugs)], null)], null);
});})(x44776_44779))
;


var x44777_44780 = om_sandbox.cards.awkay.Root.prototype;
x44777_44780.om$next$IQuery$ = true;

x44777_44780.om$next$IQuery$query$arity$1 = ((function (x44777_44780){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","message","root/message",-411529516),om.next.get_query.call(null,om_sandbox.cards.awkay.Message)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","bugs","root/bugs",-823198909),om.next.get_query.call(null,om_sandbox.cards.awkay.Bugs)], null)], null);
});})(x44777_44780))
;


om_sandbox.cards.awkay.Root.cljs$lang$type = true;

om_sandbox.cards.awkay.Root.cljs$lang$ctorStr = "om-sandbox.cards.awkay/Root";

om_sandbox.cards.awkay.Root.cljs$lang$ctorPrWriter = (function (this__21207__auto__,writer__21208__auto__,opt__21209__auto__){
return cljs.core._write.call(null,writer__21208__auto__,"om-sandbox.cards.awkay/Root");
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
cljs.core._add_method.call(null,om_sandbox.cards.awkay.read,new cljs.core.Keyword("root","bugs","root/bugs",-823198909),(function (p__44781,k,params){
var map__44782 = p__44781;
var map__44782__$1 = ((((!((map__44782 == null)))?((((map__44782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44782):map__44782);
var env = map__44782__$1;
var parser = cljs.core.get.call(null,map__44782__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__44782__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__44782__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}));
cljs.core._add_method.call(null,om_sandbox.cards.awkay.read,new cljs.core.Keyword("root","message","root/message",-411529516),(function (p__44784,k,params){
var map__44785 = p__44784;
var map__44785__$1 = ((((!((map__44785 == null)))?((((map__44785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44785):map__44785);
var env = map__44785__$1;
var parser = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}));
cljs.core._add_method.call(null,om_sandbox.cards.awkay.read,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__44787,k,params){
var map__44788 = p__44787;
var map__44788__$1 = ((((!((map__44788 == null)))?((((map__44788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44788):map__44788);
var env = map__44788__$1;
var state = cljs.core.get.call(null,map__44788__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k)], null);
}));
cljs.core._add_method.call(null,om_sandbox.cards.awkay.read,new cljs.core.Keyword(null,"bugs","bugs",-828146579),(function (p__44790,k,p__44791){
var map__44792 = p__44790;
var map__44792__$1 = ((((!((map__44792 == null)))?((((map__44792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44792):map__44792);
var env = map__44792__$1;
var state = cljs.core.get.call(null,map__44792__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__44793 = p__44791;
var map__44793__$1 = ((((!((map__44793 == null)))?((((map__44793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44793):map__44793);
var params = map__44793__$1;
var num = cljs.core.get.call(null,map__44793__$1,new cljs.core.Keyword(null,"num","num",1985240673));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.take.call(null,num,cljs.core.get.call(null,cljs.core.deref.call(null,state),k))], null);
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
cljs.core._add_method.call(null,om_sandbox.cards.awkay.mutate,new cljs.core.Symbol(null,"change-things","change-things",-1572762172,null),(function (p__44797,k,p__44798){
var map__44799 = p__44797;
var map__44799__$1 = ((((!((map__44799 == null)))?((((map__44799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44799):map__44799);
var env = map__44799__$1;
var state = cljs.core.get.call(null,map__44799__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__44800 = p__44798;
var map__44800__$1 = ((((!((map__44800 == null)))?((((map__44800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44800):map__44800);
var text = cljs.core.get.call(null,map__44800__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var st = cljs.core.deref.call(null,state);
var num_bugs = (cljs.core.count.call(null,new cljs.core.Keyword(null,"bugs","bugs",-828146579).cljs$core$IFn$_invoke$arity$1(st)) + (1));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (st,num_bugs,map__44799,map__44799__$1,env,state,map__44800,map__44800__$1,text){
return (function (){
var seq__44803 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null));
var chunk__44804 = null;
var count__44805 = (0);
var i__44806 = (0);
while(true){
if((i__44806 < count__44805)){
var s = cljs.core._nth.call(null,chunk__44804,i__44806);
cljs.core.swap_BANG_.call(null,s,((function (seq__44803,chunk__44804,count__44805,i__44806,s,st,num_bugs,map__44799,map__44799__$1,env,state,map__44800,map__44800__$1,text){
return (function (p1__44796_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__44796_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str,", ",text),new cljs.core.Keyword(null,"bugs","bugs",-828146579),cljs.core.conj,num_bugs);
});})(seq__44803,chunk__44804,count__44805,i__44806,s,st,num_bugs,map__44799,map__44799__$1,env,state,map__44800,map__44800__$1,text))
);

var G__44807 = seq__44803;
var G__44808 = chunk__44804;
var G__44809 = count__44805;
var G__44810 = (i__44806 + (1));
seq__44803 = G__44807;
chunk__44804 = G__44808;
count__44805 = G__44809;
i__44806 = G__44810;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__44803);
if(temp__4425__auto__){
var seq__44803__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44803__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__44803__$1);
var G__44811 = cljs.core.chunk_rest.call(null,seq__44803__$1);
var G__44812 = c__17629__auto__;
var G__44813 = cljs.core.count.call(null,c__17629__auto__);
var G__44814 = (0);
seq__44803 = G__44811;
chunk__44804 = G__44812;
count__44805 = G__44813;
i__44806 = G__44814;
continue;
} else {
var s = cljs.core.first.call(null,seq__44803__$1);
cljs.core.swap_BANG_.call(null,s,((function (seq__44803,chunk__44804,count__44805,i__44806,s,seq__44803__$1,temp__4425__auto__,st,num_bugs,map__44799,map__44799__$1,env,state,map__44800,map__44800__$1,text){
return (function (p1__44796_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__44796_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str,", ",text),new cljs.core.Keyword(null,"bugs","bugs",-828146579),cljs.core.conj,num_bugs);
});})(seq__44803,chunk__44804,count__44805,i__44806,s,seq__44803__$1,temp__4425__auto__,st,num_bugs,map__44799,map__44799__$1,env,state,map__44800,map__44800__$1,text))
);

var G__44815 = cljs.core.next.call(null,seq__44803__$1);
var G__44816 = null;
var G__44817 = (0);
var G__44818 = (0);
seq__44803 = G__44815;
chunk__44804 = G__44816;
count__44805 = G__44817;
i__44806 = G__44818;
continue;
}
} else {
return null;
}
}
break;
}
});})(st,num_bugs,map__44799,map__44799__$1,env,state,map__44800,map__44800__$1,text))
], null);
}));
om_sandbox.cards.awkay.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_sandbox.cards.awkay.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_sandbox.cards.awkay.mutate], null));
om_sandbox.cards.awkay.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_sandbox.cards.awkay.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om_sandbox.cards.awkay.parser], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"om_sandbox.cards.awkay","om_sandbox.cards.awkay",-1068697866),new cljs.core.Keyword(null,"parameterized-query-update","parameterized-query-update",-1272115454)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"parameterized-query-update",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.next.mock_root.call(null,om_sandbox.cards.awkay.reconciler,om_sandbox.cards.awkay.Root),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=awkay.js.map?rel=1451445138564