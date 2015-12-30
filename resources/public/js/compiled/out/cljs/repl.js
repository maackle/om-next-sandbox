// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27445_27459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27446_27460 = null;
var count__27447_27461 = (0);
var i__27448_27462 = (0);
while(true){
if((i__27448_27462 < count__27447_27461)){
var f_27463 = cljs.core._nth.call(null,chunk__27446_27460,i__27448_27462);
cljs.core.println.call(null,"  ",f_27463);

var G__27464 = seq__27445_27459;
var G__27465 = chunk__27446_27460;
var G__27466 = count__27447_27461;
var G__27467 = (i__27448_27462 + (1));
seq__27445_27459 = G__27464;
chunk__27446_27460 = G__27465;
count__27447_27461 = G__27466;
i__27448_27462 = G__27467;
continue;
} else {
var temp__4425__auto___27468 = cljs.core.seq.call(null,seq__27445_27459);
if(temp__4425__auto___27468){
var seq__27445_27469__$1 = temp__4425__auto___27468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27445_27469__$1)){
var c__17629__auto___27470 = cljs.core.chunk_first.call(null,seq__27445_27469__$1);
var G__27471 = cljs.core.chunk_rest.call(null,seq__27445_27469__$1);
var G__27472 = c__17629__auto___27470;
var G__27473 = cljs.core.count.call(null,c__17629__auto___27470);
var G__27474 = (0);
seq__27445_27459 = G__27471;
chunk__27446_27460 = G__27472;
count__27447_27461 = G__27473;
i__27448_27462 = G__27474;
continue;
} else {
var f_27475 = cljs.core.first.call(null,seq__27445_27469__$1);
cljs.core.println.call(null,"  ",f_27475);

var G__27476 = cljs.core.next.call(null,seq__27445_27469__$1);
var G__27477 = null;
var G__27478 = (0);
var G__27479 = (0);
seq__27445_27459 = G__27476;
chunk__27446_27460 = G__27477;
count__27447_27461 = G__27478;
i__27448_27462 = G__27479;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27480 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27480);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27480)))?cljs.core.second.call(null,arglists_27480):arglists_27480));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27449 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27450 = null;
var count__27451 = (0);
var i__27452 = (0);
while(true){
if((i__27452 < count__27451)){
var vec__27453 = cljs.core._nth.call(null,chunk__27450,i__27452);
var name = cljs.core.nth.call(null,vec__27453,(0),null);
var map__27454 = cljs.core.nth.call(null,vec__27453,(1),null);
var map__27454__$1 = ((((!((map__27454 == null)))?((((map__27454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27454):map__27454);
var doc = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27481 = seq__27449;
var G__27482 = chunk__27450;
var G__27483 = count__27451;
var G__27484 = (i__27452 + (1));
seq__27449 = G__27481;
chunk__27450 = G__27482;
count__27451 = G__27483;
i__27452 = G__27484;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27449);
if(temp__4425__auto__){
var seq__27449__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27449__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__27449__$1);
var G__27485 = cljs.core.chunk_rest.call(null,seq__27449__$1);
var G__27486 = c__17629__auto__;
var G__27487 = cljs.core.count.call(null,c__17629__auto__);
var G__27488 = (0);
seq__27449 = G__27485;
chunk__27450 = G__27486;
count__27451 = G__27487;
i__27452 = G__27488;
continue;
} else {
var vec__27456 = cljs.core.first.call(null,seq__27449__$1);
var name = cljs.core.nth.call(null,vec__27456,(0),null);
var map__27457 = cljs.core.nth.call(null,vec__27456,(1),null);
var map__27457__$1 = ((((!((map__27457 == null)))?((((map__27457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27457):map__27457);
var doc = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27489 = cljs.core.next.call(null,seq__27449__$1);
var G__27490 = null;
var G__27491 = (0);
var G__27492 = (0);
seq__27449 = G__27489;
chunk__27450 = G__27490;
count__27451 = G__27491;
i__27452 = G__27492;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1451439389598