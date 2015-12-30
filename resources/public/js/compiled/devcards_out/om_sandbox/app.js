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
var len__17884__auto___43505 = arguments.length;
var i__17885__auto___43506 = (0);
while(true){
if((i__17885__auto___43506 < len__17884__auto___43505)){
args__17891__auto__.push((arguments[i__17885__auto___43506]));

var G__43507 = (i__17885__auto___43506 + (1));
i__17885__auto___43506 = G__43507;
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

var seq__43501_43508 = cljs.core.seq.call(null,xs);
var chunk__43502_43509 = null;
var count__43503_43510 = (0);
var i__43504_43511 = (0);
while(true){
if((i__43504_43511 < count__43503_43510)){
var x_43512 = cljs.core._nth.call(null,chunk__43502_43509,i__43504_43511);
cljs.pprint.pprint.call(null,x_43512);

var G__43513 = seq__43501_43508;
var G__43514 = chunk__43502_43509;
var G__43515 = count__43503_43510;
var G__43516 = (i__43504_43511 + (1));
seq__43501_43508 = G__43513;
chunk__43502_43509 = G__43514;
count__43503_43510 = G__43515;
i__43504_43511 = G__43516;
continue;
} else {
var temp__4425__auto___43517 = cljs.core.seq.call(null,seq__43501_43508);
if(temp__4425__auto___43517){
var seq__43501_43518__$1 = temp__4425__auto___43517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43501_43518__$1)){
var c__17629__auto___43519 = cljs.core.chunk_first.call(null,seq__43501_43518__$1);
var G__43520 = cljs.core.chunk_rest.call(null,seq__43501_43518__$1);
var G__43521 = c__17629__auto___43519;
var G__43522 = cljs.core.count.call(null,c__17629__auto___43519);
var G__43523 = (0);
seq__43501_43508 = G__43520;
chunk__43502_43509 = G__43521;
count__43503_43510 = G__43522;
i__43504_43511 = G__43523;
continue;
} else {
var x_43524 = cljs.core.first.call(null,seq__43501_43518__$1);
cljs.pprint.pprint.call(null,x_43524);

var G__43525 = cljs.core.next.call(null,seq__43501_43518__$1);
var G__43526 = null;
var G__43527 = (0);
var G__43528 = (0);
seq__43501_43508 = G__43525;
chunk__43502_43509 = G__43526;
count__43503_43510 = G__43527;
i__43504_43511 = G__43528;
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

om_sandbox.app.log.cljs$lang$applyTo = (function (seq43500){
return om_sandbox.app.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43500));
});

//# sourceMappingURL=app.js.map?rel=1451445026456