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
var seq__30892_30906 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30893_30907 = null;
var count__30894_30908 = (0);
var i__30895_30909 = (0);
while(true){
if((i__30895_30909 < count__30894_30908)){
var f_30910 = cljs.core._nth.call(null,chunk__30893_30907,i__30895_30909);
cljs.core.println.call(null,"  ",f_30910);

var G__30911 = seq__30892_30906;
var G__30912 = chunk__30893_30907;
var G__30913 = count__30894_30908;
var G__30914 = (i__30895_30909 + (1));
seq__30892_30906 = G__30911;
chunk__30893_30907 = G__30912;
count__30894_30908 = G__30913;
i__30895_30909 = G__30914;
continue;
} else {
var temp__4425__auto___30915 = cljs.core.seq.call(null,seq__30892_30906);
if(temp__4425__auto___30915){
var seq__30892_30916__$1 = temp__4425__auto___30915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30892_30916__$1)){
var c__17629__auto___30917 = cljs.core.chunk_first.call(null,seq__30892_30916__$1);
var G__30918 = cljs.core.chunk_rest.call(null,seq__30892_30916__$1);
var G__30919 = c__17629__auto___30917;
var G__30920 = cljs.core.count.call(null,c__17629__auto___30917);
var G__30921 = (0);
seq__30892_30906 = G__30918;
chunk__30893_30907 = G__30919;
count__30894_30908 = G__30920;
i__30895_30909 = G__30921;
continue;
} else {
var f_30922 = cljs.core.first.call(null,seq__30892_30916__$1);
cljs.core.println.call(null,"  ",f_30922);

var G__30923 = cljs.core.next.call(null,seq__30892_30916__$1);
var G__30924 = null;
var G__30925 = (0);
var G__30926 = (0);
seq__30892_30906 = G__30923;
chunk__30893_30907 = G__30924;
count__30894_30908 = G__30925;
i__30895_30909 = G__30926;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30927 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30927);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30927)))?cljs.core.second.call(null,arglists_30927):arglists_30927));
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
var seq__30896 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30897 = null;
var count__30898 = (0);
var i__30899 = (0);
while(true){
if((i__30899 < count__30898)){
var vec__30900 = cljs.core._nth.call(null,chunk__30897,i__30899);
var name = cljs.core.nth.call(null,vec__30900,(0),null);
var map__30901 = cljs.core.nth.call(null,vec__30900,(1),null);
var map__30901__$1 = ((((!((map__30901 == null)))?((((map__30901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30901):map__30901);
var doc = cljs.core.get.call(null,map__30901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30928 = seq__30896;
var G__30929 = chunk__30897;
var G__30930 = count__30898;
var G__30931 = (i__30899 + (1));
seq__30896 = G__30928;
chunk__30897 = G__30929;
count__30898 = G__30930;
i__30899 = G__30931;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30896);
if(temp__4425__auto__){
var seq__30896__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30896__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__30896__$1);
var G__30932 = cljs.core.chunk_rest.call(null,seq__30896__$1);
var G__30933 = c__17629__auto__;
var G__30934 = cljs.core.count.call(null,c__17629__auto__);
var G__30935 = (0);
seq__30896 = G__30932;
chunk__30897 = G__30933;
count__30898 = G__30934;
i__30899 = G__30935;
continue;
} else {
var vec__30903 = cljs.core.first.call(null,seq__30896__$1);
var name = cljs.core.nth.call(null,vec__30903,(0),null);
var map__30904 = cljs.core.nth.call(null,vec__30903,(1),null);
var map__30904__$1 = ((((!((map__30904 == null)))?((((map__30904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30904):map__30904);
var doc = cljs.core.get.call(null,map__30904__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30904__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30936 = cljs.core.next.call(null,seq__30896__$1);
var G__30937 = null;
var G__30938 = (0);
var G__30939 = (0);
seq__30896 = G__30936;
chunk__30897 = G__30937;
count__30898 = G__30938;
i__30899 = G__30939;
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

//# sourceMappingURL=repl.js.map?rel=1451440004621