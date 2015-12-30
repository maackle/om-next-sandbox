// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26420_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26420_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26425 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26426 = null;
var count__26427 = (0);
var i__26428 = (0);
while(true){
if((i__26428 < count__26427)){
var n = cljs.core._nth.call(null,chunk__26426,i__26428);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26429 = seq__26425;
var G__26430 = chunk__26426;
var G__26431 = count__26427;
var G__26432 = (i__26428 + (1));
seq__26425 = G__26429;
chunk__26426 = G__26430;
count__26427 = G__26431;
i__26428 = G__26432;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26425);
if(temp__4425__auto__){
var seq__26425__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26425__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26425__$1);
var G__26433 = cljs.core.chunk_rest.call(null,seq__26425__$1);
var G__26434 = c__17629__auto__;
var G__26435 = cljs.core.count.call(null,c__17629__auto__);
var G__26436 = (0);
seq__26425 = G__26433;
chunk__26426 = G__26434;
count__26427 = G__26435;
i__26428 = G__26436;
continue;
} else {
var n = cljs.core.first.call(null,seq__26425__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26437 = cljs.core.next.call(null,seq__26425__$1);
var G__26438 = null;
var G__26439 = (0);
var G__26440 = (0);
seq__26425 = G__26437;
chunk__26426 = G__26438;
count__26427 = G__26439;
i__26428 = G__26440;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26479_26486 = cljs.core.seq.call(null,deps);
var chunk__26480_26487 = null;
var count__26481_26488 = (0);
var i__26482_26489 = (0);
while(true){
if((i__26482_26489 < count__26481_26488)){
var dep_26490 = cljs.core._nth.call(null,chunk__26480_26487,i__26482_26489);
topo_sort_helper_STAR_.call(null,dep_26490,(depth + (1)),state);

var G__26491 = seq__26479_26486;
var G__26492 = chunk__26480_26487;
var G__26493 = count__26481_26488;
var G__26494 = (i__26482_26489 + (1));
seq__26479_26486 = G__26491;
chunk__26480_26487 = G__26492;
count__26481_26488 = G__26493;
i__26482_26489 = G__26494;
continue;
} else {
var temp__4425__auto___26495 = cljs.core.seq.call(null,seq__26479_26486);
if(temp__4425__auto___26495){
var seq__26479_26496__$1 = temp__4425__auto___26495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26479_26496__$1)){
var c__17629__auto___26497 = cljs.core.chunk_first.call(null,seq__26479_26496__$1);
var G__26498 = cljs.core.chunk_rest.call(null,seq__26479_26496__$1);
var G__26499 = c__17629__auto___26497;
var G__26500 = cljs.core.count.call(null,c__17629__auto___26497);
var G__26501 = (0);
seq__26479_26486 = G__26498;
chunk__26480_26487 = G__26499;
count__26481_26488 = G__26500;
i__26482_26489 = G__26501;
continue;
} else {
var dep_26502 = cljs.core.first.call(null,seq__26479_26496__$1);
topo_sort_helper_STAR_.call(null,dep_26502,(depth + (1)),state);

var G__26503 = cljs.core.next.call(null,seq__26479_26496__$1);
var G__26504 = null;
var G__26505 = (0);
var G__26506 = (0);
seq__26479_26486 = G__26503;
chunk__26480_26487 = G__26504;
count__26481_26488 = G__26505;
i__26482_26489 = G__26506;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26483){
var vec__26485 = p__26483;
var x = cljs.core.nth.call(null,vec__26485,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26485,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26485,x,xs,get_deps__$1){
return (function (p1__26441_SHARP_){
return clojure.set.difference.call(null,p1__26441_SHARP_,x);
});})(vec__26485,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26519 = cljs.core.seq.call(null,provides);
var chunk__26520 = null;
var count__26521 = (0);
var i__26522 = (0);
while(true){
if((i__26522 < count__26521)){
var prov = cljs.core._nth.call(null,chunk__26520,i__26522);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26523_26531 = cljs.core.seq.call(null,requires);
var chunk__26524_26532 = null;
var count__26525_26533 = (0);
var i__26526_26534 = (0);
while(true){
if((i__26526_26534 < count__26525_26533)){
var req_26535 = cljs.core._nth.call(null,chunk__26524_26532,i__26526_26534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26535,prov);

var G__26536 = seq__26523_26531;
var G__26537 = chunk__26524_26532;
var G__26538 = count__26525_26533;
var G__26539 = (i__26526_26534 + (1));
seq__26523_26531 = G__26536;
chunk__26524_26532 = G__26537;
count__26525_26533 = G__26538;
i__26526_26534 = G__26539;
continue;
} else {
var temp__4425__auto___26540 = cljs.core.seq.call(null,seq__26523_26531);
if(temp__4425__auto___26540){
var seq__26523_26541__$1 = temp__4425__auto___26540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26523_26541__$1)){
var c__17629__auto___26542 = cljs.core.chunk_first.call(null,seq__26523_26541__$1);
var G__26543 = cljs.core.chunk_rest.call(null,seq__26523_26541__$1);
var G__26544 = c__17629__auto___26542;
var G__26545 = cljs.core.count.call(null,c__17629__auto___26542);
var G__26546 = (0);
seq__26523_26531 = G__26543;
chunk__26524_26532 = G__26544;
count__26525_26533 = G__26545;
i__26526_26534 = G__26546;
continue;
} else {
var req_26547 = cljs.core.first.call(null,seq__26523_26541__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26547,prov);

var G__26548 = cljs.core.next.call(null,seq__26523_26541__$1);
var G__26549 = null;
var G__26550 = (0);
var G__26551 = (0);
seq__26523_26531 = G__26548;
chunk__26524_26532 = G__26549;
count__26525_26533 = G__26550;
i__26526_26534 = G__26551;
continue;
}
} else {
}
}
break;
}

var G__26552 = seq__26519;
var G__26553 = chunk__26520;
var G__26554 = count__26521;
var G__26555 = (i__26522 + (1));
seq__26519 = G__26552;
chunk__26520 = G__26553;
count__26521 = G__26554;
i__26522 = G__26555;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26519);
if(temp__4425__auto__){
var seq__26519__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26519__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26519__$1);
var G__26556 = cljs.core.chunk_rest.call(null,seq__26519__$1);
var G__26557 = c__17629__auto__;
var G__26558 = cljs.core.count.call(null,c__17629__auto__);
var G__26559 = (0);
seq__26519 = G__26556;
chunk__26520 = G__26557;
count__26521 = G__26558;
i__26522 = G__26559;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26519__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26527_26560 = cljs.core.seq.call(null,requires);
var chunk__26528_26561 = null;
var count__26529_26562 = (0);
var i__26530_26563 = (0);
while(true){
if((i__26530_26563 < count__26529_26562)){
var req_26564 = cljs.core._nth.call(null,chunk__26528_26561,i__26530_26563);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26564,prov);

var G__26565 = seq__26527_26560;
var G__26566 = chunk__26528_26561;
var G__26567 = count__26529_26562;
var G__26568 = (i__26530_26563 + (1));
seq__26527_26560 = G__26565;
chunk__26528_26561 = G__26566;
count__26529_26562 = G__26567;
i__26530_26563 = G__26568;
continue;
} else {
var temp__4425__auto___26569__$1 = cljs.core.seq.call(null,seq__26527_26560);
if(temp__4425__auto___26569__$1){
var seq__26527_26570__$1 = temp__4425__auto___26569__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26527_26570__$1)){
var c__17629__auto___26571 = cljs.core.chunk_first.call(null,seq__26527_26570__$1);
var G__26572 = cljs.core.chunk_rest.call(null,seq__26527_26570__$1);
var G__26573 = c__17629__auto___26571;
var G__26574 = cljs.core.count.call(null,c__17629__auto___26571);
var G__26575 = (0);
seq__26527_26560 = G__26572;
chunk__26528_26561 = G__26573;
count__26529_26562 = G__26574;
i__26530_26563 = G__26575;
continue;
} else {
var req_26576 = cljs.core.first.call(null,seq__26527_26570__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26576,prov);

var G__26577 = cljs.core.next.call(null,seq__26527_26570__$1);
var G__26578 = null;
var G__26579 = (0);
var G__26580 = (0);
seq__26527_26560 = G__26577;
chunk__26528_26561 = G__26578;
count__26529_26562 = G__26579;
i__26530_26563 = G__26580;
continue;
}
} else {
}
}
break;
}

var G__26581 = cljs.core.next.call(null,seq__26519__$1);
var G__26582 = null;
var G__26583 = (0);
var G__26584 = (0);
seq__26519 = G__26581;
chunk__26520 = G__26582;
count__26521 = G__26583;
i__26522 = G__26584;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26589_26593 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26590_26594 = null;
var count__26591_26595 = (0);
var i__26592_26596 = (0);
while(true){
if((i__26592_26596 < count__26591_26595)){
var ns_26597 = cljs.core._nth.call(null,chunk__26590_26594,i__26592_26596);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26597);

var G__26598 = seq__26589_26593;
var G__26599 = chunk__26590_26594;
var G__26600 = count__26591_26595;
var G__26601 = (i__26592_26596 + (1));
seq__26589_26593 = G__26598;
chunk__26590_26594 = G__26599;
count__26591_26595 = G__26600;
i__26592_26596 = G__26601;
continue;
} else {
var temp__4425__auto___26602 = cljs.core.seq.call(null,seq__26589_26593);
if(temp__4425__auto___26602){
var seq__26589_26603__$1 = temp__4425__auto___26602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26589_26603__$1)){
var c__17629__auto___26604 = cljs.core.chunk_first.call(null,seq__26589_26603__$1);
var G__26605 = cljs.core.chunk_rest.call(null,seq__26589_26603__$1);
var G__26606 = c__17629__auto___26604;
var G__26607 = cljs.core.count.call(null,c__17629__auto___26604);
var G__26608 = (0);
seq__26589_26593 = G__26605;
chunk__26590_26594 = G__26606;
count__26591_26595 = G__26607;
i__26592_26596 = G__26608;
continue;
} else {
var ns_26609 = cljs.core.first.call(null,seq__26589_26603__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26609);

var G__26610 = cljs.core.next.call(null,seq__26589_26603__$1);
var G__26611 = null;
var G__26612 = (0);
var G__26613 = (0);
seq__26589_26593 = G__26610;
chunk__26590_26594 = G__26611;
count__26591_26595 = G__26612;
i__26592_26596 = G__26613;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26614__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26615__i = 0, G__26615__a = new Array(arguments.length -  0);
while (G__26615__i < G__26615__a.length) {G__26615__a[G__26615__i] = arguments[G__26615__i + 0]; ++G__26615__i;}
  args = new cljs.core.IndexedSeq(G__26615__a,0);
} 
return G__26614__delegate.call(this,args);};
G__26614.cljs$lang$maxFixedArity = 0;
G__26614.cljs$lang$applyTo = (function (arglist__26616){
var args = cljs.core.seq(arglist__26616);
return G__26614__delegate(args);
});
G__26614.cljs$core$IFn$_invoke$arity$variadic = G__26614__delegate;
return G__26614;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26618 = cljs.core._EQ_;
var expr__26619 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26618.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26619))){
var path_parts = ((function (pred__26618,expr__26619){
return (function (p1__26617_SHARP_){
return clojure.string.split.call(null,p1__26617_SHARP_,/[\/\\]/);
});})(pred__26618,expr__26619))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26618,expr__26619){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26621){if((e26621 instanceof Error)){
var e = e26621;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26621;

}
}})());
});
;})(path_parts,sep,root,pred__26618,expr__26619))
} else {
if(cljs.core.truth_(pred__26618.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26619))){
return ((function (pred__26618,expr__26619){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26618,expr__26619){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26618,expr__26619))
);

return deferred.addErrback(((function (deferred,pred__26618,expr__26619){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26618,expr__26619))
);
});
;})(pred__26618,expr__26619))
} else {
return ((function (pred__26618,expr__26619){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26618,expr__26619))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26622,callback){
var map__26625 = p__26622;
var map__26625__$1 = ((((!((map__26625 == null)))?((((map__26625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26625):map__26625);
var file_msg = map__26625__$1;
var request_url = cljs.core.get.call(null,map__26625__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26625,map__26625__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26625,map__26625__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_26649){
var state_val_26650 = (state_26649[(1)]);
if((state_val_26650 === (7))){
var inst_26645 = (state_26649[(2)]);
var state_26649__$1 = state_26649;
var statearr_26651_26671 = state_26649__$1;
(statearr_26651_26671[(2)] = inst_26645);

(statearr_26651_26671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (1))){
var state_26649__$1 = state_26649;
var statearr_26652_26672 = state_26649__$1;
(statearr_26652_26672[(2)] = null);

(statearr_26652_26672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (4))){
var inst_26629 = (state_26649[(7)]);
var inst_26629__$1 = (state_26649[(2)]);
var state_26649__$1 = (function (){var statearr_26653 = state_26649;
(statearr_26653[(7)] = inst_26629__$1);

return statearr_26653;
})();
if(cljs.core.truth_(inst_26629__$1)){
var statearr_26654_26673 = state_26649__$1;
(statearr_26654_26673[(1)] = (5));

} else {
var statearr_26655_26674 = state_26649__$1;
(statearr_26655_26674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (6))){
var state_26649__$1 = state_26649;
var statearr_26656_26675 = state_26649__$1;
(statearr_26656_26675[(2)] = null);

(statearr_26656_26675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (3))){
var inst_26647 = (state_26649[(2)]);
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26649__$1,inst_26647);
} else {
if((state_val_26650 === (2))){
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26649__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26650 === (11))){
var inst_26641 = (state_26649[(2)]);
var state_26649__$1 = (function (){var statearr_26657 = state_26649;
(statearr_26657[(8)] = inst_26641);

return statearr_26657;
})();
var statearr_26658_26676 = state_26649__$1;
(statearr_26658_26676[(2)] = null);

(statearr_26658_26676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (9))){
var inst_26633 = (state_26649[(9)]);
var inst_26635 = (state_26649[(10)]);
var inst_26637 = inst_26635.call(null,inst_26633);
var state_26649__$1 = state_26649;
var statearr_26659_26677 = state_26649__$1;
(statearr_26659_26677[(2)] = inst_26637);

(statearr_26659_26677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (5))){
var inst_26629 = (state_26649[(7)]);
var inst_26631 = figwheel.client.file_reloading.blocking_load.call(null,inst_26629);
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26649__$1,(8),inst_26631);
} else {
if((state_val_26650 === (10))){
var inst_26633 = (state_26649[(9)]);
var inst_26639 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26633);
var state_26649__$1 = state_26649;
var statearr_26660_26678 = state_26649__$1;
(statearr_26660_26678[(2)] = inst_26639);

(statearr_26660_26678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (8))){
var inst_26629 = (state_26649[(7)]);
var inst_26635 = (state_26649[(10)]);
var inst_26633 = (state_26649[(2)]);
var inst_26634 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26635__$1 = cljs.core.get.call(null,inst_26634,inst_26629);
var state_26649__$1 = (function (){var statearr_26661 = state_26649;
(statearr_26661[(9)] = inst_26633);

(statearr_26661[(10)] = inst_26635__$1);

return statearr_26661;
})();
if(cljs.core.truth_(inst_26635__$1)){
var statearr_26662_26679 = state_26649__$1;
(statearr_26662_26679[(1)] = (9));

} else {
var statearr_26663_26680 = state_26649__$1;
(statearr_26663_26680[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23415__auto__ = null;
var figwheel$client$file_reloading$state_machine__23415__auto____0 = (function (){
var statearr_26667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26667[(0)] = figwheel$client$file_reloading$state_machine__23415__auto__);

(statearr_26667[(1)] = (1));

return statearr_26667;
});
var figwheel$client$file_reloading$state_machine__23415__auto____1 = (function (state_26649){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_26649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e26668){if((e26668 instanceof Object)){
var ex__23418__auto__ = e26668;
var statearr_26669_26681 = state_26649;
(statearr_26669_26681[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26682 = state_26649;
state_26649 = G__26682;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23415__auto__ = function(state_26649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23415__auto____1.call(this,state_26649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23415__auto____0;
figwheel$client$file_reloading$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23415__auto____1;
return figwheel$client$file_reloading$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_26670 = f__23527__auto__.call(null);
(statearr_26670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_26670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26683,callback){
var map__26686 = p__26683;
var map__26686__$1 = ((((!((map__26686 == null)))?((((map__26686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26686):map__26686);
var file_msg = map__26686__$1;
var namespace = cljs.core.get.call(null,map__26686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26686,map__26686__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26686,map__26686__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26688){
var map__26691 = p__26688;
var map__26691__$1 = ((((!((map__26691 == null)))?((((map__26691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26691):map__26691);
var file_msg = map__26691__$1;
var namespace = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26693,callback){
var map__26696 = p__26693;
var map__26696__$1 = ((((!((map__26696 == null)))?((((map__26696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26696):map__26696);
var file_msg = map__26696__$1;
var request_url = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26696__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23526__auto___26784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___26784,out){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___26784,out){
return (function (state_26766){
var state_val_26767 = (state_26766[(1)]);
if((state_val_26767 === (1))){
var inst_26744 = cljs.core.nth.call(null,files,(0),null);
var inst_26745 = cljs.core.nthnext.call(null,files,(1));
var inst_26746 = files;
var state_26766__$1 = (function (){var statearr_26768 = state_26766;
(statearr_26768[(7)] = inst_26745);

(statearr_26768[(8)] = inst_26744);

(statearr_26768[(9)] = inst_26746);

return statearr_26768;
})();
var statearr_26769_26785 = state_26766__$1;
(statearr_26769_26785[(2)] = null);

(statearr_26769_26785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (2))){
var inst_26749 = (state_26766[(10)]);
var inst_26746 = (state_26766[(9)]);
var inst_26749__$1 = cljs.core.nth.call(null,inst_26746,(0),null);
var inst_26750 = cljs.core.nthnext.call(null,inst_26746,(1));
var inst_26751 = (inst_26749__$1 == null);
var inst_26752 = cljs.core.not.call(null,inst_26751);
var state_26766__$1 = (function (){var statearr_26770 = state_26766;
(statearr_26770[(11)] = inst_26750);

(statearr_26770[(10)] = inst_26749__$1);

return statearr_26770;
})();
if(inst_26752){
var statearr_26771_26786 = state_26766__$1;
(statearr_26771_26786[(1)] = (4));

} else {
var statearr_26772_26787 = state_26766__$1;
(statearr_26772_26787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (3))){
var inst_26764 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26766__$1,inst_26764);
} else {
if((state_val_26767 === (4))){
var inst_26749 = (state_26766[(10)]);
var inst_26754 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26749);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26766__$1,(7),inst_26754);
} else {
if((state_val_26767 === (5))){
var inst_26760 = cljs.core.async.close_BANG_.call(null,out);
var state_26766__$1 = state_26766;
var statearr_26773_26788 = state_26766__$1;
(statearr_26773_26788[(2)] = inst_26760);

(statearr_26773_26788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (6))){
var inst_26762 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26774_26789 = state_26766__$1;
(statearr_26774_26789[(2)] = inst_26762);

(statearr_26774_26789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (7))){
var inst_26750 = (state_26766[(11)]);
var inst_26756 = (state_26766[(2)]);
var inst_26757 = cljs.core.async.put_BANG_.call(null,out,inst_26756);
var inst_26746 = inst_26750;
var state_26766__$1 = (function (){var statearr_26775 = state_26766;
(statearr_26775[(9)] = inst_26746);

(statearr_26775[(12)] = inst_26757);

return statearr_26775;
})();
var statearr_26776_26790 = state_26766__$1;
(statearr_26776_26790[(2)] = null);

(statearr_26776_26790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23526__auto___26784,out))
;
return ((function (switch__23414__auto__,c__23526__auto___26784,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto____0 = (function (){
var statearr_26780 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26780[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto__);

(statearr_26780[(1)] = (1));

return statearr_26780;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto____1 = (function (state_26766){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_26766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e26781){if((e26781 instanceof Object)){
var ex__23418__auto__ = e26781;
var statearr_26782_26791 = state_26766;
(statearr_26782_26791[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26792 = state_26766;
state_26766 = G__26792;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto__ = function(state_26766){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto____1.call(this,state_26766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___26784,out))
})();
var state__23528__auto__ = (function (){var statearr_26783 = f__23527__auto__.call(null);
(statearr_26783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___26784);

return statearr_26783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___26784,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26793,opts){
var map__26797 = p__26793;
var map__26797__$1 = ((((!((map__26797 == null)))?((((map__26797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26797):map__26797);
var eval_body__$1 = cljs.core.get.call(null,map__26797__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26799){var e = e26799;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26800_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26800_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26805){
var vec__26806 = p__26805;
var k = cljs.core.nth.call(null,vec__26806,(0),null);
var v = cljs.core.nth.call(null,vec__26806,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26807){
var vec__26808 = p__26807;
var k = cljs.core.nth.call(null,vec__26808,(0),null);
var v = cljs.core.nth.call(null,vec__26808,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26812,p__26813){
var map__27060 = p__26812;
var map__27060__$1 = ((((!((map__27060 == null)))?((((map__27060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27060):map__27060);
var opts = map__27060__$1;
var before_jsload = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27061 = p__26813;
var map__27061__$1 = ((((!((map__27061 == null)))?((((map__27061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27061):map__27061);
var msg = map__27061__$1;
var files = cljs.core.get.call(null,map__27061__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27061__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27061__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27214){
var state_val_27215 = (state_27214[(1)]);
if((state_val_27215 === (7))){
var inst_27075 = (state_27214[(7)]);
var inst_27076 = (state_27214[(8)]);
var inst_27078 = (state_27214[(9)]);
var inst_27077 = (state_27214[(10)]);
var inst_27083 = cljs.core._nth.call(null,inst_27076,inst_27078);
var inst_27084 = figwheel.client.file_reloading.eval_body.call(null,inst_27083,opts);
var inst_27085 = (inst_27078 + (1));
var tmp27216 = inst_27075;
var tmp27217 = inst_27076;
var tmp27218 = inst_27077;
var inst_27075__$1 = tmp27216;
var inst_27076__$1 = tmp27217;
var inst_27077__$1 = tmp27218;
var inst_27078__$1 = inst_27085;
var state_27214__$1 = (function (){var statearr_27219 = state_27214;
(statearr_27219[(7)] = inst_27075__$1);

(statearr_27219[(8)] = inst_27076__$1);

(statearr_27219[(11)] = inst_27084);

(statearr_27219[(9)] = inst_27078__$1);

(statearr_27219[(10)] = inst_27077__$1);

return statearr_27219;
})();
var statearr_27220_27306 = state_27214__$1;
(statearr_27220_27306[(2)] = null);

(statearr_27220_27306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (20))){
var inst_27118 = (state_27214[(12)]);
var inst_27126 = figwheel.client.file_reloading.sort_files.call(null,inst_27118);
var state_27214__$1 = state_27214;
var statearr_27221_27307 = state_27214__$1;
(statearr_27221_27307[(2)] = inst_27126);

(statearr_27221_27307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (27))){
var state_27214__$1 = state_27214;
var statearr_27222_27308 = state_27214__$1;
(statearr_27222_27308[(2)] = null);

(statearr_27222_27308[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (1))){
var inst_27067 = (state_27214[(13)]);
var inst_27064 = before_jsload.call(null,files);
var inst_27065 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27066 = (function (){return ((function (inst_27067,inst_27064,inst_27065,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26809_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26809_SHARP_);
});
;})(inst_27067,inst_27064,inst_27065,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27067__$1 = cljs.core.filter.call(null,inst_27066,files);
var inst_27068 = cljs.core.not_empty.call(null,inst_27067__$1);
var state_27214__$1 = (function (){var statearr_27223 = state_27214;
(statearr_27223[(14)] = inst_27065);

(statearr_27223[(15)] = inst_27064);

(statearr_27223[(13)] = inst_27067__$1);

return statearr_27223;
})();
if(cljs.core.truth_(inst_27068)){
var statearr_27224_27309 = state_27214__$1;
(statearr_27224_27309[(1)] = (2));

} else {
var statearr_27225_27310 = state_27214__$1;
(statearr_27225_27310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (24))){
var state_27214__$1 = state_27214;
var statearr_27226_27311 = state_27214__$1;
(statearr_27226_27311[(2)] = null);

(statearr_27226_27311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (39))){
var inst_27168 = (state_27214[(16)]);
var state_27214__$1 = state_27214;
var statearr_27227_27312 = state_27214__$1;
(statearr_27227_27312[(2)] = inst_27168);

(statearr_27227_27312[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (46))){
var inst_27209 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27228_27313 = state_27214__$1;
(statearr_27228_27313[(2)] = inst_27209);

(statearr_27228_27313[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (4))){
var inst_27112 = (state_27214[(2)]);
var inst_27113 = cljs.core.List.EMPTY;
var inst_27114 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27113);
var inst_27115 = (function (){return ((function (inst_27112,inst_27113,inst_27114,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26810_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26810_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26810_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_27112,inst_27113,inst_27114,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27116 = cljs.core.filter.call(null,inst_27115,files);
var inst_27117 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27118 = cljs.core.concat.call(null,inst_27116,inst_27117);
var state_27214__$1 = (function (){var statearr_27229 = state_27214;
(statearr_27229[(17)] = inst_27112);

(statearr_27229[(18)] = inst_27114);

(statearr_27229[(12)] = inst_27118);

return statearr_27229;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27230_27314 = state_27214__$1;
(statearr_27230_27314[(1)] = (16));

} else {
var statearr_27231_27315 = state_27214__$1;
(statearr_27231_27315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (15))){
var inst_27102 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27232_27316 = state_27214__$1;
(statearr_27232_27316[(2)] = inst_27102);

(statearr_27232_27316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (21))){
var inst_27128 = (state_27214[(19)]);
var inst_27128__$1 = (state_27214[(2)]);
var inst_27129 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27128__$1);
var state_27214__$1 = (function (){var statearr_27233 = state_27214;
(statearr_27233[(19)] = inst_27128__$1);

return statearr_27233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27214__$1,(22),inst_27129);
} else {
if((state_val_27215 === (31))){
var inst_27212 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27214__$1,inst_27212);
} else {
if((state_val_27215 === (32))){
var inst_27168 = (state_27214[(16)]);
var inst_27173 = inst_27168.cljs$lang$protocol_mask$partition0$;
var inst_27174 = (inst_27173 & (64));
var inst_27175 = inst_27168.cljs$core$ISeq$;
var inst_27176 = (inst_27174) || (inst_27175);
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27176)){
var statearr_27234_27317 = state_27214__$1;
(statearr_27234_27317[(1)] = (35));

} else {
var statearr_27235_27318 = state_27214__$1;
(statearr_27235_27318[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (40))){
var inst_27189 = (state_27214[(20)]);
var inst_27188 = (state_27214[(2)]);
var inst_27189__$1 = cljs.core.get.call(null,inst_27188,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27190 = cljs.core.get.call(null,inst_27188,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27191 = cljs.core.not_empty.call(null,inst_27189__$1);
var state_27214__$1 = (function (){var statearr_27236 = state_27214;
(statearr_27236[(20)] = inst_27189__$1);

(statearr_27236[(21)] = inst_27190);

return statearr_27236;
})();
if(cljs.core.truth_(inst_27191)){
var statearr_27237_27319 = state_27214__$1;
(statearr_27237_27319[(1)] = (41));

} else {
var statearr_27238_27320 = state_27214__$1;
(statearr_27238_27320[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (33))){
var state_27214__$1 = state_27214;
var statearr_27239_27321 = state_27214__$1;
(statearr_27239_27321[(2)] = false);

(statearr_27239_27321[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (13))){
var inst_27088 = (state_27214[(22)]);
var inst_27092 = cljs.core.chunk_first.call(null,inst_27088);
var inst_27093 = cljs.core.chunk_rest.call(null,inst_27088);
var inst_27094 = cljs.core.count.call(null,inst_27092);
var inst_27075 = inst_27093;
var inst_27076 = inst_27092;
var inst_27077 = inst_27094;
var inst_27078 = (0);
var state_27214__$1 = (function (){var statearr_27240 = state_27214;
(statearr_27240[(7)] = inst_27075);

(statearr_27240[(8)] = inst_27076);

(statearr_27240[(9)] = inst_27078);

(statearr_27240[(10)] = inst_27077);

return statearr_27240;
})();
var statearr_27241_27322 = state_27214__$1;
(statearr_27241_27322[(2)] = null);

(statearr_27241_27322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (22))){
var inst_27136 = (state_27214[(23)]);
var inst_27132 = (state_27214[(24)]);
var inst_27128 = (state_27214[(19)]);
var inst_27131 = (state_27214[(25)]);
var inst_27131__$1 = (state_27214[(2)]);
var inst_27132__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27131__$1);
var inst_27133 = (function (){var all_files = inst_27128;
var res_SINGLEQUOTE_ = inst_27131__$1;
var res = inst_27132__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27136,inst_27132,inst_27128,inst_27131,inst_27131__$1,inst_27132__$1,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26811_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26811_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27136,inst_27132,inst_27128,inst_27131,inst_27131__$1,inst_27132__$1,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27134 = cljs.core.filter.call(null,inst_27133,inst_27131__$1);
var inst_27135 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27136__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27135);
var inst_27137 = cljs.core.not_empty.call(null,inst_27136__$1);
var state_27214__$1 = (function (){var statearr_27242 = state_27214;
(statearr_27242[(23)] = inst_27136__$1);

(statearr_27242[(24)] = inst_27132__$1);

(statearr_27242[(25)] = inst_27131__$1);

(statearr_27242[(26)] = inst_27134);

return statearr_27242;
})();
if(cljs.core.truth_(inst_27137)){
var statearr_27243_27323 = state_27214__$1;
(statearr_27243_27323[(1)] = (23));

} else {
var statearr_27244_27324 = state_27214__$1;
(statearr_27244_27324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (36))){
var state_27214__$1 = state_27214;
var statearr_27245_27325 = state_27214__$1;
(statearr_27245_27325[(2)] = false);

(statearr_27245_27325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (41))){
var inst_27189 = (state_27214[(20)]);
var inst_27193 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27194 = cljs.core.map.call(null,inst_27193,inst_27189);
var inst_27195 = cljs.core.pr_str.call(null,inst_27194);
var inst_27196 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27195)].join('');
var inst_27197 = figwheel.client.utils.log.call(null,inst_27196);
var state_27214__$1 = state_27214;
var statearr_27246_27326 = state_27214__$1;
(statearr_27246_27326[(2)] = inst_27197);

(statearr_27246_27326[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (43))){
var inst_27190 = (state_27214[(21)]);
var inst_27200 = (state_27214[(2)]);
var inst_27201 = cljs.core.not_empty.call(null,inst_27190);
var state_27214__$1 = (function (){var statearr_27247 = state_27214;
(statearr_27247[(27)] = inst_27200);

return statearr_27247;
})();
if(cljs.core.truth_(inst_27201)){
var statearr_27248_27327 = state_27214__$1;
(statearr_27248_27327[(1)] = (44));

} else {
var statearr_27249_27328 = state_27214__$1;
(statearr_27249_27328[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (29))){
var inst_27136 = (state_27214[(23)]);
var inst_27132 = (state_27214[(24)]);
var inst_27168 = (state_27214[(16)]);
var inst_27128 = (state_27214[(19)]);
var inst_27131 = (state_27214[(25)]);
var inst_27134 = (state_27214[(26)]);
var inst_27164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27167 = (function (){var all_files = inst_27128;
var res_SINGLEQUOTE_ = inst_27131;
var res = inst_27132;
var files_not_loaded = inst_27134;
var dependencies_that_loaded = inst_27136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27168,inst_27128,inst_27131,inst_27134,inst_27164,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27166){
var map__27250 = p__27166;
var map__27250__$1 = ((((!((map__27250 == null)))?((((map__27250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27250):map__27250);
var namespace = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27168,inst_27128,inst_27131,inst_27134,inst_27164,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27168__$1 = cljs.core.group_by.call(null,inst_27167,inst_27134);
var inst_27170 = (inst_27168__$1 == null);
var inst_27171 = cljs.core.not.call(null,inst_27170);
var state_27214__$1 = (function (){var statearr_27252 = state_27214;
(statearr_27252[(28)] = inst_27164);

(statearr_27252[(16)] = inst_27168__$1);

return statearr_27252;
})();
if(inst_27171){
var statearr_27253_27329 = state_27214__$1;
(statearr_27253_27329[(1)] = (32));

} else {
var statearr_27254_27330 = state_27214__$1;
(statearr_27254_27330[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (44))){
var inst_27190 = (state_27214[(21)]);
var inst_27203 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27190);
var inst_27204 = cljs.core.pr_str.call(null,inst_27203);
var inst_27205 = [cljs.core.str("not required: "),cljs.core.str(inst_27204)].join('');
var inst_27206 = figwheel.client.utils.log.call(null,inst_27205);
var state_27214__$1 = state_27214;
var statearr_27255_27331 = state_27214__$1;
(statearr_27255_27331[(2)] = inst_27206);

(statearr_27255_27331[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (6))){
var inst_27109 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27256_27332 = state_27214__$1;
(statearr_27256_27332[(2)] = inst_27109);

(statearr_27256_27332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (28))){
var inst_27134 = (state_27214[(26)]);
var inst_27161 = (state_27214[(2)]);
var inst_27162 = cljs.core.not_empty.call(null,inst_27134);
var state_27214__$1 = (function (){var statearr_27257 = state_27214;
(statearr_27257[(29)] = inst_27161);

return statearr_27257;
})();
if(cljs.core.truth_(inst_27162)){
var statearr_27258_27333 = state_27214__$1;
(statearr_27258_27333[(1)] = (29));

} else {
var statearr_27259_27334 = state_27214__$1;
(statearr_27259_27334[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (25))){
var inst_27132 = (state_27214[(24)]);
var inst_27148 = (state_27214[(2)]);
var inst_27149 = cljs.core.not_empty.call(null,inst_27132);
var state_27214__$1 = (function (){var statearr_27260 = state_27214;
(statearr_27260[(30)] = inst_27148);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27149)){
var statearr_27261_27335 = state_27214__$1;
(statearr_27261_27335[(1)] = (26));

} else {
var statearr_27262_27336 = state_27214__$1;
(statearr_27262_27336[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (34))){
var inst_27183 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27183)){
var statearr_27263_27337 = state_27214__$1;
(statearr_27263_27337[(1)] = (38));

} else {
var statearr_27264_27338 = state_27214__$1;
(statearr_27264_27338[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (17))){
var state_27214__$1 = state_27214;
var statearr_27265_27339 = state_27214__$1;
(statearr_27265_27339[(2)] = recompile_dependents);

(statearr_27265_27339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (3))){
var state_27214__$1 = state_27214;
var statearr_27266_27340 = state_27214__$1;
(statearr_27266_27340[(2)] = null);

(statearr_27266_27340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (12))){
var inst_27105 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27267_27341 = state_27214__$1;
(statearr_27267_27341[(2)] = inst_27105);

(statearr_27267_27341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (2))){
var inst_27067 = (state_27214[(13)]);
var inst_27074 = cljs.core.seq.call(null,inst_27067);
var inst_27075 = inst_27074;
var inst_27076 = null;
var inst_27077 = (0);
var inst_27078 = (0);
var state_27214__$1 = (function (){var statearr_27268 = state_27214;
(statearr_27268[(7)] = inst_27075);

(statearr_27268[(8)] = inst_27076);

(statearr_27268[(9)] = inst_27078);

(statearr_27268[(10)] = inst_27077);

return statearr_27268;
})();
var statearr_27269_27342 = state_27214__$1;
(statearr_27269_27342[(2)] = null);

(statearr_27269_27342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (23))){
var inst_27136 = (state_27214[(23)]);
var inst_27132 = (state_27214[(24)]);
var inst_27128 = (state_27214[(19)]);
var inst_27131 = (state_27214[(25)]);
var inst_27134 = (state_27214[(26)]);
var inst_27139 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27141 = (function (){var all_files = inst_27128;
var res_SINGLEQUOTE_ = inst_27131;
var res = inst_27132;
var files_not_loaded = inst_27134;
var dependencies_that_loaded = inst_27136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27128,inst_27131,inst_27134,inst_27139,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27140){
var map__27270 = p__27140;
var map__27270__$1 = ((((!((map__27270 == null)))?((((map__27270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27270):map__27270);
var request_url = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27128,inst_27131,inst_27134,inst_27139,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27142 = cljs.core.reverse.call(null,inst_27136);
var inst_27143 = cljs.core.map.call(null,inst_27141,inst_27142);
var inst_27144 = cljs.core.pr_str.call(null,inst_27143);
var inst_27145 = figwheel.client.utils.log.call(null,inst_27144);
var state_27214__$1 = (function (){var statearr_27272 = state_27214;
(statearr_27272[(31)] = inst_27139);

return statearr_27272;
})();
var statearr_27273_27343 = state_27214__$1;
(statearr_27273_27343[(2)] = inst_27145);

(statearr_27273_27343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (35))){
var state_27214__$1 = state_27214;
var statearr_27274_27344 = state_27214__$1;
(statearr_27274_27344[(2)] = true);

(statearr_27274_27344[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (19))){
var inst_27118 = (state_27214[(12)]);
var inst_27124 = figwheel.client.file_reloading.expand_files.call(null,inst_27118);
var state_27214__$1 = state_27214;
var statearr_27275_27345 = state_27214__$1;
(statearr_27275_27345[(2)] = inst_27124);

(statearr_27275_27345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (11))){
var state_27214__$1 = state_27214;
var statearr_27276_27346 = state_27214__$1;
(statearr_27276_27346[(2)] = null);

(statearr_27276_27346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (9))){
var inst_27107 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27277_27347 = state_27214__$1;
(statearr_27277_27347[(2)] = inst_27107);

(statearr_27277_27347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (5))){
var inst_27078 = (state_27214[(9)]);
var inst_27077 = (state_27214[(10)]);
var inst_27080 = (inst_27078 < inst_27077);
var inst_27081 = inst_27080;
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27081)){
var statearr_27278_27348 = state_27214__$1;
(statearr_27278_27348[(1)] = (7));

} else {
var statearr_27279_27349 = state_27214__$1;
(statearr_27279_27349[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (14))){
var inst_27088 = (state_27214[(22)]);
var inst_27097 = cljs.core.first.call(null,inst_27088);
var inst_27098 = figwheel.client.file_reloading.eval_body.call(null,inst_27097,opts);
var inst_27099 = cljs.core.next.call(null,inst_27088);
var inst_27075 = inst_27099;
var inst_27076 = null;
var inst_27077 = (0);
var inst_27078 = (0);
var state_27214__$1 = (function (){var statearr_27280 = state_27214;
(statearr_27280[(7)] = inst_27075);

(statearr_27280[(8)] = inst_27076);

(statearr_27280[(32)] = inst_27098);

(statearr_27280[(9)] = inst_27078);

(statearr_27280[(10)] = inst_27077);

return statearr_27280;
})();
var statearr_27281_27350 = state_27214__$1;
(statearr_27281_27350[(2)] = null);

(statearr_27281_27350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (45))){
var state_27214__$1 = state_27214;
var statearr_27282_27351 = state_27214__$1;
(statearr_27282_27351[(2)] = null);

(statearr_27282_27351[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (26))){
var inst_27136 = (state_27214[(23)]);
var inst_27132 = (state_27214[(24)]);
var inst_27128 = (state_27214[(19)]);
var inst_27131 = (state_27214[(25)]);
var inst_27134 = (state_27214[(26)]);
var inst_27151 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27153 = (function (){var all_files = inst_27128;
var res_SINGLEQUOTE_ = inst_27131;
var res = inst_27132;
var files_not_loaded = inst_27134;
var dependencies_that_loaded = inst_27136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27128,inst_27131,inst_27134,inst_27151,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27152){
var map__27283 = p__27152;
var map__27283__$1 = ((((!((map__27283 == null)))?((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var namespace = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27128,inst_27131,inst_27134,inst_27151,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27154 = cljs.core.map.call(null,inst_27153,inst_27132);
var inst_27155 = cljs.core.pr_str.call(null,inst_27154);
var inst_27156 = figwheel.client.utils.log.call(null,inst_27155);
var inst_27157 = (function (){var all_files = inst_27128;
var res_SINGLEQUOTE_ = inst_27131;
var res = inst_27132;
var files_not_loaded = inst_27134;
var dependencies_that_loaded = inst_27136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27128,inst_27131,inst_27134,inst_27151,inst_27153,inst_27154,inst_27155,inst_27156,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27136,inst_27132,inst_27128,inst_27131,inst_27134,inst_27151,inst_27153,inst_27154,inst_27155,inst_27156,state_val_27215,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27158 = setTimeout(inst_27157,(10));
var state_27214__$1 = (function (){var statearr_27285 = state_27214;
(statearr_27285[(33)] = inst_27151);

(statearr_27285[(34)] = inst_27156);

return statearr_27285;
})();
var statearr_27286_27352 = state_27214__$1;
(statearr_27286_27352[(2)] = inst_27158);

(statearr_27286_27352[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (16))){
var state_27214__$1 = state_27214;
var statearr_27287_27353 = state_27214__$1;
(statearr_27287_27353[(2)] = reload_dependents);

(statearr_27287_27353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (38))){
var inst_27168 = (state_27214[(16)]);
var inst_27185 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27168);
var state_27214__$1 = state_27214;
var statearr_27288_27354 = state_27214__$1;
(statearr_27288_27354[(2)] = inst_27185);

(statearr_27288_27354[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (30))){
var state_27214__$1 = state_27214;
var statearr_27289_27355 = state_27214__$1;
(statearr_27289_27355[(2)] = null);

(statearr_27289_27355[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (10))){
var inst_27088 = (state_27214[(22)]);
var inst_27090 = cljs.core.chunked_seq_QMARK_.call(null,inst_27088);
var state_27214__$1 = state_27214;
if(inst_27090){
var statearr_27290_27356 = state_27214__$1;
(statearr_27290_27356[(1)] = (13));

} else {
var statearr_27291_27357 = state_27214__$1;
(statearr_27291_27357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (18))){
var inst_27122 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
if(cljs.core.truth_(inst_27122)){
var statearr_27292_27358 = state_27214__$1;
(statearr_27292_27358[(1)] = (19));

} else {
var statearr_27293_27359 = state_27214__$1;
(statearr_27293_27359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (42))){
var state_27214__$1 = state_27214;
var statearr_27294_27360 = state_27214__$1;
(statearr_27294_27360[(2)] = null);

(statearr_27294_27360[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (37))){
var inst_27180 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27295_27361 = state_27214__$1;
(statearr_27295_27361[(2)] = inst_27180);

(statearr_27295_27361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (8))){
var inst_27075 = (state_27214[(7)]);
var inst_27088 = (state_27214[(22)]);
var inst_27088__$1 = cljs.core.seq.call(null,inst_27075);
var state_27214__$1 = (function (){var statearr_27296 = state_27214;
(statearr_27296[(22)] = inst_27088__$1);

return statearr_27296;
})();
if(inst_27088__$1){
var statearr_27297_27362 = state_27214__$1;
(statearr_27297_27362[(1)] = (10));

} else {
var statearr_27298_27363 = state_27214__$1;
(statearr_27298_27363[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23414__auto__,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto____0 = (function (){
var statearr_27302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27302[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto__);

(statearr_27302[(1)] = (1));

return statearr_27302;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto____1 = (function (state_27214){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_27214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e27303){if((e27303 instanceof Object)){
var ex__23418__auto__ = e27303;
var statearr_27304_27364 = state_27214;
(statearr_27304_27364[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27365 = state_27214;
state_27214 = G__27365;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto__ = function(state_27214){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto____1.call(this,state_27214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23528__auto__ = (function (){var statearr_27305 = f__23527__auto__.call(null);
(statearr_27305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_27305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__,map__27060,map__27060__$1,opts,before_jsload,on_jsload,reload_dependents,map__27061,map__27061__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23526__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27368,link){
var map__27371 = p__27368;
var map__27371__$1 = ((((!((map__27371 == null)))?((((map__27371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27371):map__27371);
var file = cljs.core.get.call(null,map__27371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27371,map__27371__$1,file){
return (function (p1__27366_SHARP_,p2__27367_SHARP_){
if(cljs.core._EQ_.call(null,p1__27366_SHARP_,p2__27367_SHARP_)){
return p1__27366_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27371,map__27371__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27377){
var map__27378 = p__27377;
var map__27378__$1 = ((((!((map__27378 == null)))?((((map__27378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27378):map__27378);
var match_length = cljs.core.get.call(null,map__27378__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27378__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27373_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27373_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27380 = [];
var len__17884__auto___27383 = arguments.length;
var i__17885__auto___27384 = (0);
while(true){
if((i__17885__auto___27384 < len__17884__auto___27383)){
args27380.push((arguments[i__17885__auto___27384]));

var G__27385 = (i__17885__auto___27384 + (1));
i__17885__auto___27384 = G__27385;
continue;
} else {
}
break;
}

var G__27382 = args27380.length;
switch (G__27382) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27380.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27387_SHARP_,p2__27388_SHARP_){
return cljs.core.assoc.call(null,p1__27387_SHARP_,cljs.core.get.call(null,p2__27388_SHARP_,key),p2__27388_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27389){
var map__27392 = p__27389;
var map__27392__$1 = ((((!((map__27392 == null)))?((((map__27392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27392):map__27392);
var f_data = map__27392__$1;
var file = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27394,files_msg){
var map__27401 = p__27394;
var map__27401__$1 = ((((!((map__27401 == null)))?((((map__27401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27401):map__27401);
var opts = map__27401__$1;
var on_cssload = cljs.core.get.call(null,map__27401__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27403_27407 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27404_27408 = null;
var count__27405_27409 = (0);
var i__27406_27410 = (0);
while(true){
if((i__27406_27410 < count__27405_27409)){
var f_27411 = cljs.core._nth.call(null,chunk__27404_27408,i__27406_27410);
figwheel.client.file_reloading.reload_css_file.call(null,f_27411);

var G__27412 = seq__27403_27407;
var G__27413 = chunk__27404_27408;
var G__27414 = count__27405_27409;
var G__27415 = (i__27406_27410 + (1));
seq__27403_27407 = G__27412;
chunk__27404_27408 = G__27413;
count__27405_27409 = G__27414;
i__27406_27410 = G__27415;
continue;
} else {
var temp__4425__auto___27416 = cljs.core.seq.call(null,seq__27403_27407);
if(temp__4425__auto___27416){
var seq__27403_27417__$1 = temp__4425__auto___27416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27403_27417__$1)){
var c__17629__auto___27418 = cljs.core.chunk_first.call(null,seq__27403_27417__$1);
var G__27419 = cljs.core.chunk_rest.call(null,seq__27403_27417__$1);
var G__27420 = c__17629__auto___27418;
var G__27421 = cljs.core.count.call(null,c__17629__auto___27418);
var G__27422 = (0);
seq__27403_27407 = G__27419;
chunk__27404_27408 = G__27420;
count__27405_27409 = G__27421;
i__27406_27410 = G__27422;
continue;
} else {
var f_27423 = cljs.core.first.call(null,seq__27403_27417__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27423);

var G__27424 = cljs.core.next.call(null,seq__27403_27417__$1);
var G__27425 = null;
var G__27426 = (0);
var G__27427 = (0);
seq__27403_27407 = G__27424;
chunk__27404_27408 = G__27425;
count__27405_27409 = G__27426;
i__27406_27410 = G__27427;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27401,map__27401__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27401,map__27401__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1451439389396