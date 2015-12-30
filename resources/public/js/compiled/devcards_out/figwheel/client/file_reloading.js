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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29868_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29868_SHARP_));
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
var seq__29873 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29874 = null;
var count__29875 = (0);
var i__29876 = (0);
while(true){
if((i__29876 < count__29875)){
var n = cljs.core._nth.call(null,chunk__29874,i__29876);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29877 = seq__29873;
var G__29878 = chunk__29874;
var G__29879 = count__29875;
var G__29880 = (i__29876 + (1));
seq__29873 = G__29877;
chunk__29874 = G__29878;
count__29875 = G__29879;
i__29876 = G__29880;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29873);
if(temp__4425__auto__){
var seq__29873__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29873__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__29873__$1);
var G__29881 = cljs.core.chunk_rest.call(null,seq__29873__$1);
var G__29882 = c__17629__auto__;
var G__29883 = cljs.core.count.call(null,c__17629__auto__);
var G__29884 = (0);
seq__29873 = G__29881;
chunk__29874 = G__29882;
count__29875 = G__29883;
i__29876 = G__29884;
continue;
} else {
var n = cljs.core.first.call(null,seq__29873__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29885 = cljs.core.next.call(null,seq__29873__$1);
var G__29886 = null;
var G__29887 = (0);
var G__29888 = (0);
seq__29873 = G__29885;
chunk__29874 = G__29886;
count__29875 = G__29887;
i__29876 = G__29888;
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

var seq__29927_29934 = cljs.core.seq.call(null,deps);
var chunk__29928_29935 = null;
var count__29929_29936 = (0);
var i__29930_29937 = (0);
while(true){
if((i__29930_29937 < count__29929_29936)){
var dep_29938 = cljs.core._nth.call(null,chunk__29928_29935,i__29930_29937);
topo_sort_helper_STAR_.call(null,dep_29938,(depth + (1)),state);

var G__29939 = seq__29927_29934;
var G__29940 = chunk__29928_29935;
var G__29941 = count__29929_29936;
var G__29942 = (i__29930_29937 + (1));
seq__29927_29934 = G__29939;
chunk__29928_29935 = G__29940;
count__29929_29936 = G__29941;
i__29930_29937 = G__29942;
continue;
} else {
var temp__4425__auto___29943 = cljs.core.seq.call(null,seq__29927_29934);
if(temp__4425__auto___29943){
var seq__29927_29944__$1 = temp__4425__auto___29943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29927_29944__$1)){
var c__17629__auto___29945 = cljs.core.chunk_first.call(null,seq__29927_29944__$1);
var G__29946 = cljs.core.chunk_rest.call(null,seq__29927_29944__$1);
var G__29947 = c__17629__auto___29945;
var G__29948 = cljs.core.count.call(null,c__17629__auto___29945);
var G__29949 = (0);
seq__29927_29934 = G__29946;
chunk__29928_29935 = G__29947;
count__29929_29936 = G__29948;
i__29930_29937 = G__29949;
continue;
} else {
var dep_29950 = cljs.core.first.call(null,seq__29927_29944__$1);
topo_sort_helper_STAR_.call(null,dep_29950,(depth + (1)),state);

var G__29951 = cljs.core.next.call(null,seq__29927_29944__$1);
var G__29952 = null;
var G__29953 = (0);
var G__29954 = (0);
seq__29927_29934 = G__29951;
chunk__29928_29935 = G__29952;
count__29929_29936 = G__29953;
i__29930_29937 = G__29954;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29931){
var vec__29933 = p__29931;
var x = cljs.core.nth.call(null,vec__29933,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29933,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29933,x,xs,get_deps__$1){
return (function (p1__29889_SHARP_){
return clojure.set.difference.call(null,p1__29889_SHARP_,x);
});})(vec__29933,x,xs,get_deps__$1))
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
var seq__29967 = cljs.core.seq.call(null,provides);
var chunk__29968 = null;
var count__29969 = (0);
var i__29970 = (0);
while(true){
if((i__29970 < count__29969)){
var prov = cljs.core._nth.call(null,chunk__29968,i__29970);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29971_29979 = cljs.core.seq.call(null,requires);
var chunk__29972_29980 = null;
var count__29973_29981 = (0);
var i__29974_29982 = (0);
while(true){
if((i__29974_29982 < count__29973_29981)){
var req_29983 = cljs.core._nth.call(null,chunk__29972_29980,i__29974_29982);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29983,prov);

var G__29984 = seq__29971_29979;
var G__29985 = chunk__29972_29980;
var G__29986 = count__29973_29981;
var G__29987 = (i__29974_29982 + (1));
seq__29971_29979 = G__29984;
chunk__29972_29980 = G__29985;
count__29973_29981 = G__29986;
i__29974_29982 = G__29987;
continue;
} else {
var temp__4425__auto___29988 = cljs.core.seq.call(null,seq__29971_29979);
if(temp__4425__auto___29988){
var seq__29971_29989__$1 = temp__4425__auto___29988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29971_29989__$1)){
var c__17629__auto___29990 = cljs.core.chunk_first.call(null,seq__29971_29989__$1);
var G__29991 = cljs.core.chunk_rest.call(null,seq__29971_29989__$1);
var G__29992 = c__17629__auto___29990;
var G__29993 = cljs.core.count.call(null,c__17629__auto___29990);
var G__29994 = (0);
seq__29971_29979 = G__29991;
chunk__29972_29980 = G__29992;
count__29973_29981 = G__29993;
i__29974_29982 = G__29994;
continue;
} else {
var req_29995 = cljs.core.first.call(null,seq__29971_29989__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29995,prov);

var G__29996 = cljs.core.next.call(null,seq__29971_29989__$1);
var G__29997 = null;
var G__29998 = (0);
var G__29999 = (0);
seq__29971_29979 = G__29996;
chunk__29972_29980 = G__29997;
count__29973_29981 = G__29998;
i__29974_29982 = G__29999;
continue;
}
} else {
}
}
break;
}

var G__30000 = seq__29967;
var G__30001 = chunk__29968;
var G__30002 = count__29969;
var G__30003 = (i__29970 + (1));
seq__29967 = G__30000;
chunk__29968 = G__30001;
count__29969 = G__30002;
i__29970 = G__30003;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29967);
if(temp__4425__auto__){
var seq__29967__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29967__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__29967__$1);
var G__30004 = cljs.core.chunk_rest.call(null,seq__29967__$1);
var G__30005 = c__17629__auto__;
var G__30006 = cljs.core.count.call(null,c__17629__auto__);
var G__30007 = (0);
seq__29967 = G__30004;
chunk__29968 = G__30005;
count__29969 = G__30006;
i__29970 = G__30007;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29967__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29975_30008 = cljs.core.seq.call(null,requires);
var chunk__29976_30009 = null;
var count__29977_30010 = (0);
var i__29978_30011 = (0);
while(true){
if((i__29978_30011 < count__29977_30010)){
var req_30012 = cljs.core._nth.call(null,chunk__29976_30009,i__29978_30011);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30012,prov);

var G__30013 = seq__29975_30008;
var G__30014 = chunk__29976_30009;
var G__30015 = count__29977_30010;
var G__30016 = (i__29978_30011 + (1));
seq__29975_30008 = G__30013;
chunk__29976_30009 = G__30014;
count__29977_30010 = G__30015;
i__29978_30011 = G__30016;
continue;
} else {
var temp__4425__auto___30017__$1 = cljs.core.seq.call(null,seq__29975_30008);
if(temp__4425__auto___30017__$1){
var seq__29975_30018__$1 = temp__4425__auto___30017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29975_30018__$1)){
var c__17629__auto___30019 = cljs.core.chunk_first.call(null,seq__29975_30018__$1);
var G__30020 = cljs.core.chunk_rest.call(null,seq__29975_30018__$1);
var G__30021 = c__17629__auto___30019;
var G__30022 = cljs.core.count.call(null,c__17629__auto___30019);
var G__30023 = (0);
seq__29975_30008 = G__30020;
chunk__29976_30009 = G__30021;
count__29977_30010 = G__30022;
i__29978_30011 = G__30023;
continue;
} else {
var req_30024 = cljs.core.first.call(null,seq__29975_30018__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30024,prov);

var G__30025 = cljs.core.next.call(null,seq__29975_30018__$1);
var G__30026 = null;
var G__30027 = (0);
var G__30028 = (0);
seq__29975_30008 = G__30025;
chunk__29976_30009 = G__30026;
count__29977_30010 = G__30027;
i__29978_30011 = G__30028;
continue;
}
} else {
}
}
break;
}

var G__30029 = cljs.core.next.call(null,seq__29967__$1);
var G__30030 = null;
var G__30031 = (0);
var G__30032 = (0);
seq__29967 = G__30029;
chunk__29968 = G__30030;
count__29969 = G__30031;
i__29970 = G__30032;
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
var seq__30037_30041 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30038_30042 = null;
var count__30039_30043 = (0);
var i__30040_30044 = (0);
while(true){
if((i__30040_30044 < count__30039_30043)){
var ns_30045 = cljs.core._nth.call(null,chunk__30038_30042,i__30040_30044);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30045);

var G__30046 = seq__30037_30041;
var G__30047 = chunk__30038_30042;
var G__30048 = count__30039_30043;
var G__30049 = (i__30040_30044 + (1));
seq__30037_30041 = G__30046;
chunk__30038_30042 = G__30047;
count__30039_30043 = G__30048;
i__30040_30044 = G__30049;
continue;
} else {
var temp__4425__auto___30050 = cljs.core.seq.call(null,seq__30037_30041);
if(temp__4425__auto___30050){
var seq__30037_30051__$1 = temp__4425__auto___30050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30037_30051__$1)){
var c__17629__auto___30052 = cljs.core.chunk_first.call(null,seq__30037_30051__$1);
var G__30053 = cljs.core.chunk_rest.call(null,seq__30037_30051__$1);
var G__30054 = c__17629__auto___30052;
var G__30055 = cljs.core.count.call(null,c__17629__auto___30052);
var G__30056 = (0);
seq__30037_30041 = G__30053;
chunk__30038_30042 = G__30054;
count__30039_30043 = G__30055;
i__30040_30044 = G__30056;
continue;
} else {
var ns_30057 = cljs.core.first.call(null,seq__30037_30051__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30057);

var G__30058 = cljs.core.next.call(null,seq__30037_30051__$1);
var G__30059 = null;
var G__30060 = (0);
var G__30061 = (0);
seq__30037_30041 = G__30058;
chunk__30038_30042 = G__30059;
count__30039_30043 = G__30060;
i__30040_30044 = G__30061;
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
var G__30062__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30063__i = 0, G__30063__a = new Array(arguments.length -  0);
while (G__30063__i < G__30063__a.length) {G__30063__a[G__30063__i] = arguments[G__30063__i + 0]; ++G__30063__i;}
  args = new cljs.core.IndexedSeq(G__30063__a,0);
} 
return G__30062__delegate.call(this,args);};
G__30062.cljs$lang$maxFixedArity = 0;
G__30062.cljs$lang$applyTo = (function (arglist__30064){
var args = cljs.core.seq(arglist__30064);
return G__30062__delegate(args);
});
G__30062.cljs$core$IFn$_invoke$arity$variadic = G__30062__delegate;
return G__30062;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30066 = cljs.core._EQ_;
var expr__30067 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30066.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30067))){
var path_parts = ((function (pred__30066,expr__30067){
return (function (p1__30065_SHARP_){
return clojure.string.split.call(null,p1__30065_SHARP_,/[\/\\]/);
});})(pred__30066,expr__30067))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30066,expr__30067){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30069){if((e30069 instanceof Error)){
var e = e30069;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30069;

}
}})());
});
;})(path_parts,sep,root,pred__30066,expr__30067))
} else {
if(cljs.core.truth_(pred__30066.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30067))){
return ((function (pred__30066,expr__30067){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30066,expr__30067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30066,expr__30067))
);

return deferred.addErrback(((function (deferred,pred__30066,expr__30067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30066,expr__30067))
);
});
;})(pred__30066,expr__30067))
} else {
return ((function (pred__30066,expr__30067){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30066,expr__30067))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30070,callback){
var map__30073 = p__30070;
var map__30073__$1 = ((((!((map__30073 == null)))?((((map__30073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30073):map__30073);
var file_msg = map__30073__$1;
var request_url = cljs.core.get.call(null,map__30073__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30073,map__30073__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30073,map__30073__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__){
return (function (state_30097){
var state_val_30098 = (state_30097[(1)]);
if((state_val_30098 === (7))){
var inst_30093 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
var statearr_30099_30119 = state_30097__$1;
(statearr_30099_30119[(2)] = inst_30093);

(statearr_30099_30119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (1))){
var state_30097__$1 = state_30097;
var statearr_30100_30120 = state_30097__$1;
(statearr_30100_30120[(2)] = null);

(statearr_30100_30120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (4))){
var inst_30077 = (state_30097[(7)]);
var inst_30077__$1 = (state_30097[(2)]);
var state_30097__$1 = (function (){var statearr_30101 = state_30097;
(statearr_30101[(7)] = inst_30077__$1);

return statearr_30101;
})();
if(cljs.core.truth_(inst_30077__$1)){
var statearr_30102_30121 = state_30097__$1;
(statearr_30102_30121[(1)] = (5));

} else {
var statearr_30103_30122 = state_30097__$1;
(statearr_30103_30122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (6))){
var state_30097__$1 = state_30097;
var statearr_30104_30123 = state_30097__$1;
(statearr_30104_30123[(2)] = null);

(statearr_30104_30123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (3))){
var inst_30095 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30097__$1,inst_30095);
} else {
if((state_val_30098 === (2))){
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30097__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30098 === (11))){
var inst_30089 = (state_30097[(2)]);
var state_30097__$1 = (function (){var statearr_30105 = state_30097;
(statearr_30105[(8)] = inst_30089);

return statearr_30105;
})();
var statearr_30106_30124 = state_30097__$1;
(statearr_30106_30124[(2)] = null);

(statearr_30106_30124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (9))){
var inst_30083 = (state_30097[(9)]);
var inst_30081 = (state_30097[(10)]);
var inst_30085 = inst_30083.call(null,inst_30081);
var state_30097__$1 = state_30097;
var statearr_30107_30125 = state_30097__$1;
(statearr_30107_30125[(2)] = inst_30085);

(statearr_30107_30125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (5))){
var inst_30077 = (state_30097[(7)]);
var inst_30079 = figwheel.client.file_reloading.blocking_load.call(null,inst_30077);
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30097__$1,(8),inst_30079);
} else {
if((state_val_30098 === (10))){
var inst_30081 = (state_30097[(10)]);
var inst_30087 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30081);
var state_30097__$1 = state_30097;
var statearr_30108_30126 = state_30097__$1;
(statearr_30108_30126[(2)] = inst_30087);

(statearr_30108_30126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30098 === (8))){
var inst_30083 = (state_30097[(9)]);
var inst_30077 = (state_30097[(7)]);
var inst_30081 = (state_30097[(2)]);
var inst_30082 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30083__$1 = cljs.core.get.call(null,inst_30082,inst_30077);
var state_30097__$1 = (function (){var statearr_30109 = state_30097;
(statearr_30109[(9)] = inst_30083__$1);

(statearr_30109[(10)] = inst_30081);

return statearr_30109;
})();
if(cljs.core.truth_(inst_30083__$1)){
var statearr_30110_30127 = state_30097__$1;
(statearr_30110_30127[(1)] = (9));

} else {
var statearr_30111_30128 = state_30097__$1;
(statearr_30111_30128[(1)] = (10));

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
});})(c__18942__auto__))
;
return ((function (switch__18921__auto__,c__18942__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18922__auto__ = null;
var figwheel$client$file_reloading$state_machine__18922__auto____0 = (function (){
var statearr_30115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30115[(0)] = figwheel$client$file_reloading$state_machine__18922__auto__);

(statearr_30115[(1)] = (1));

return statearr_30115;
});
var figwheel$client$file_reloading$state_machine__18922__auto____1 = (function (state_30097){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_30097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e30116){if((e30116 instanceof Object)){
var ex__18925__auto__ = e30116;
var statearr_30117_30129 = state_30097;
(statearr_30117_30129[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30130 = state_30097;
state_30097 = G__30130;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18922__auto__ = function(state_30097){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18922__auto____1.call(this,state_30097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18922__auto____0;
figwheel$client$file_reloading$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18922__auto____1;
return figwheel$client$file_reloading$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__))
})();
var state__18944__auto__ = (function (){var statearr_30118 = f__18943__auto__.call(null);
(statearr_30118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_30118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__))
);

return c__18942__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30131,callback){
var map__30134 = p__30131;
var map__30134__$1 = ((((!((map__30134 == null)))?((((map__30134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30134):map__30134);
var file_msg = map__30134__$1;
var namespace = cljs.core.get.call(null,map__30134__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30134,map__30134__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30134,map__30134__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30136){
var map__30139 = p__30136;
var map__30139__$1 = ((((!((map__30139 == null)))?((((map__30139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30139):map__30139);
var file_msg = map__30139__$1;
var namespace = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30141,callback){
var map__30144 = p__30141;
var map__30144__$1 = ((((!((map__30144 == null)))?((((map__30144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30144):map__30144);
var file_msg = map__30144__$1;
var request_url = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18942__auto___30232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___30232,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___30232,out){
return (function (state_30214){
var state_val_30215 = (state_30214[(1)]);
if((state_val_30215 === (1))){
var inst_30192 = cljs.core.nth.call(null,files,(0),null);
var inst_30193 = cljs.core.nthnext.call(null,files,(1));
var inst_30194 = files;
var state_30214__$1 = (function (){var statearr_30216 = state_30214;
(statearr_30216[(7)] = inst_30193);

(statearr_30216[(8)] = inst_30192);

(statearr_30216[(9)] = inst_30194);

return statearr_30216;
})();
var statearr_30217_30233 = state_30214__$1;
(statearr_30217_30233[(2)] = null);

(statearr_30217_30233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (2))){
var inst_30197 = (state_30214[(10)]);
var inst_30194 = (state_30214[(9)]);
var inst_30197__$1 = cljs.core.nth.call(null,inst_30194,(0),null);
var inst_30198 = cljs.core.nthnext.call(null,inst_30194,(1));
var inst_30199 = (inst_30197__$1 == null);
var inst_30200 = cljs.core.not.call(null,inst_30199);
var state_30214__$1 = (function (){var statearr_30218 = state_30214;
(statearr_30218[(10)] = inst_30197__$1);

(statearr_30218[(11)] = inst_30198);

return statearr_30218;
})();
if(inst_30200){
var statearr_30219_30234 = state_30214__$1;
(statearr_30219_30234[(1)] = (4));

} else {
var statearr_30220_30235 = state_30214__$1;
(statearr_30220_30235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (3))){
var inst_30212 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30214__$1,inst_30212);
} else {
if((state_val_30215 === (4))){
var inst_30197 = (state_30214[(10)]);
var inst_30202 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30197);
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30214__$1,(7),inst_30202);
} else {
if((state_val_30215 === (5))){
var inst_30208 = cljs.core.async.close_BANG_.call(null,out);
var state_30214__$1 = state_30214;
var statearr_30221_30236 = state_30214__$1;
(statearr_30221_30236[(2)] = inst_30208);

(statearr_30221_30236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (6))){
var inst_30210 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
var statearr_30222_30237 = state_30214__$1;
(statearr_30222_30237[(2)] = inst_30210);

(statearr_30222_30237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (7))){
var inst_30198 = (state_30214[(11)]);
var inst_30204 = (state_30214[(2)]);
var inst_30205 = cljs.core.async.put_BANG_.call(null,out,inst_30204);
var inst_30194 = inst_30198;
var state_30214__$1 = (function (){var statearr_30223 = state_30214;
(statearr_30223[(12)] = inst_30205);

(statearr_30223[(9)] = inst_30194);

return statearr_30223;
})();
var statearr_30224_30238 = state_30214__$1;
(statearr_30224_30238[(2)] = null);

(statearr_30224_30238[(1)] = (2));


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
});})(c__18942__auto___30232,out))
;
return ((function (switch__18921__auto__,c__18942__auto___30232,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____0 = (function (){
var statearr_30228 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30228[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__);

(statearr_30228[(1)] = (1));

return statearr_30228;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____1 = (function (state_30214){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_30214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e30229){if((e30229 instanceof Object)){
var ex__18925__auto__ = e30229;
var statearr_30230_30239 = state_30214;
(statearr_30230_30239[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30240 = state_30214;
state_30214 = G__30240;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__ = function(state_30214){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____1.call(this,state_30214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___30232,out))
})();
var state__18944__auto__ = (function (){var statearr_30231 = f__18943__auto__.call(null);
(statearr_30231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___30232);

return statearr_30231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___30232,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30241,opts){
var map__30245 = p__30241;
var map__30245__$1 = ((((!((map__30245 == null)))?((((map__30245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30245):map__30245);
var eval_body__$1 = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30247){var e = e30247;
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
return (function (p1__30248_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30248_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30253){
var vec__30254 = p__30253;
var k = cljs.core.nth.call(null,vec__30254,(0),null);
var v = cljs.core.nth.call(null,vec__30254,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30255){
var vec__30256 = p__30255;
var k = cljs.core.nth.call(null,vec__30256,(0),null);
var v = cljs.core.nth.call(null,vec__30256,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30260,p__30261){
var map__30508 = p__30260;
var map__30508__$1 = ((((!((map__30508 == null)))?((((map__30508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30508):map__30508);
var opts = map__30508__$1;
var before_jsload = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30509 = p__30261;
var map__30509__$1 = ((((!((map__30509 == null)))?((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var msg = map__30509__$1;
var files = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30662){
var state_val_30663 = (state_30662[(1)]);
if((state_val_30663 === (7))){
var inst_30526 = (state_30662[(7)]);
var inst_30523 = (state_30662[(8)]);
var inst_30524 = (state_30662[(9)]);
var inst_30525 = (state_30662[(10)]);
var inst_30531 = cljs.core._nth.call(null,inst_30524,inst_30526);
var inst_30532 = figwheel.client.file_reloading.eval_body.call(null,inst_30531,opts);
var inst_30533 = (inst_30526 + (1));
var tmp30664 = inst_30523;
var tmp30665 = inst_30524;
var tmp30666 = inst_30525;
var inst_30523__$1 = tmp30664;
var inst_30524__$1 = tmp30665;
var inst_30525__$1 = tmp30666;
var inst_30526__$1 = inst_30533;
var state_30662__$1 = (function (){var statearr_30667 = state_30662;
(statearr_30667[(7)] = inst_30526__$1);

(statearr_30667[(8)] = inst_30523__$1);

(statearr_30667[(9)] = inst_30524__$1);

(statearr_30667[(11)] = inst_30532);

(statearr_30667[(10)] = inst_30525__$1);

return statearr_30667;
})();
var statearr_30668_30754 = state_30662__$1;
(statearr_30668_30754[(2)] = null);

(statearr_30668_30754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (20))){
var inst_30566 = (state_30662[(12)]);
var inst_30574 = figwheel.client.file_reloading.sort_files.call(null,inst_30566);
var state_30662__$1 = state_30662;
var statearr_30669_30755 = state_30662__$1;
(statearr_30669_30755[(2)] = inst_30574);

(statearr_30669_30755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (27))){
var state_30662__$1 = state_30662;
var statearr_30670_30756 = state_30662__$1;
(statearr_30670_30756[(2)] = null);

(statearr_30670_30756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (1))){
var inst_30515 = (state_30662[(13)]);
var inst_30512 = before_jsload.call(null,files);
var inst_30513 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30514 = (function (){return ((function (inst_30515,inst_30512,inst_30513,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30257_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30257_SHARP_);
});
;})(inst_30515,inst_30512,inst_30513,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30515__$1 = cljs.core.filter.call(null,inst_30514,files);
var inst_30516 = cljs.core.not_empty.call(null,inst_30515__$1);
var state_30662__$1 = (function (){var statearr_30671 = state_30662;
(statearr_30671[(14)] = inst_30512);

(statearr_30671[(13)] = inst_30515__$1);

(statearr_30671[(15)] = inst_30513);

return statearr_30671;
})();
if(cljs.core.truth_(inst_30516)){
var statearr_30672_30757 = state_30662__$1;
(statearr_30672_30757[(1)] = (2));

} else {
var statearr_30673_30758 = state_30662__$1;
(statearr_30673_30758[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (24))){
var state_30662__$1 = state_30662;
var statearr_30674_30759 = state_30662__$1;
(statearr_30674_30759[(2)] = null);

(statearr_30674_30759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (39))){
var inst_30616 = (state_30662[(16)]);
var state_30662__$1 = state_30662;
var statearr_30675_30760 = state_30662__$1;
(statearr_30675_30760[(2)] = inst_30616);

(statearr_30675_30760[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (46))){
var inst_30657 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30676_30761 = state_30662__$1;
(statearr_30676_30761[(2)] = inst_30657);

(statearr_30676_30761[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (4))){
var inst_30560 = (state_30662[(2)]);
var inst_30561 = cljs.core.List.EMPTY;
var inst_30562 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30561);
var inst_30563 = (function (){return ((function (inst_30560,inst_30561,inst_30562,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30258_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30258_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30258_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_30560,inst_30561,inst_30562,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30564 = cljs.core.filter.call(null,inst_30563,files);
var inst_30565 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30566 = cljs.core.concat.call(null,inst_30564,inst_30565);
var state_30662__$1 = (function (){var statearr_30677 = state_30662;
(statearr_30677[(12)] = inst_30566);

(statearr_30677[(17)] = inst_30562);

(statearr_30677[(18)] = inst_30560);

return statearr_30677;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30678_30762 = state_30662__$1;
(statearr_30678_30762[(1)] = (16));

} else {
var statearr_30679_30763 = state_30662__$1;
(statearr_30679_30763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (15))){
var inst_30550 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30680_30764 = state_30662__$1;
(statearr_30680_30764[(2)] = inst_30550);

(statearr_30680_30764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (21))){
var inst_30576 = (state_30662[(19)]);
var inst_30576__$1 = (state_30662[(2)]);
var inst_30577 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30576__$1);
var state_30662__$1 = (function (){var statearr_30681 = state_30662;
(statearr_30681[(19)] = inst_30576__$1);

return statearr_30681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30662__$1,(22),inst_30577);
} else {
if((state_val_30663 === (31))){
var inst_30660 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30662__$1,inst_30660);
} else {
if((state_val_30663 === (32))){
var inst_30616 = (state_30662[(16)]);
var inst_30621 = inst_30616.cljs$lang$protocol_mask$partition0$;
var inst_30622 = (inst_30621 & (64));
var inst_30623 = inst_30616.cljs$core$ISeq$;
var inst_30624 = (inst_30622) || (inst_30623);
var state_30662__$1 = state_30662;
if(cljs.core.truth_(inst_30624)){
var statearr_30682_30765 = state_30662__$1;
(statearr_30682_30765[(1)] = (35));

} else {
var statearr_30683_30766 = state_30662__$1;
(statearr_30683_30766[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (40))){
var inst_30637 = (state_30662[(20)]);
var inst_30636 = (state_30662[(2)]);
var inst_30637__$1 = cljs.core.get.call(null,inst_30636,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30638 = cljs.core.get.call(null,inst_30636,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30639 = cljs.core.not_empty.call(null,inst_30637__$1);
var state_30662__$1 = (function (){var statearr_30684 = state_30662;
(statearr_30684[(20)] = inst_30637__$1);

(statearr_30684[(21)] = inst_30638);

return statearr_30684;
})();
if(cljs.core.truth_(inst_30639)){
var statearr_30685_30767 = state_30662__$1;
(statearr_30685_30767[(1)] = (41));

} else {
var statearr_30686_30768 = state_30662__$1;
(statearr_30686_30768[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (33))){
var state_30662__$1 = state_30662;
var statearr_30687_30769 = state_30662__$1;
(statearr_30687_30769[(2)] = false);

(statearr_30687_30769[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (13))){
var inst_30536 = (state_30662[(22)]);
var inst_30540 = cljs.core.chunk_first.call(null,inst_30536);
var inst_30541 = cljs.core.chunk_rest.call(null,inst_30536);
var inst_30542 = cljs.core.count.call(null,inst_30540);
var inst_30523 = inst_30541;
var inst_30524 = inst_30540;
var inst_30525 = inst_30542;
var inst_30526 = (0);
var state_30662__$1 = (function (){var statearr_30688 = state_30662;
(statearr_30688[(7)] = inst_30526);

(statearr_30688[(8)] = inst_30523);

(statearr_30688[(9)] = inst_30524);

(statearr_30688[(10)] = inst_30525);

return statearr_30688;
})();
var statearr_30689_30770 = state_30662__$1;
(statearr_30689_30770[(2)] = null);

(statearr_30689_30770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (22))){
var inst_30580 = (state_30662[(23)]);
var inst_30584 = (state_30662[(24)]);
var inst_30579 = (state_30662[(25)]);
var inst_30576 = (state_30662[(19)]);
var inst_30579__$1 = (state_30662[(2)]);
var inst_30580__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30579__$1);
var inst_30581 = (function (){var all_files = inst_30576;
var res_SINGLEQUOTE_ = inst_30579__$1;
var res = inst_30580__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30580,inst_30584,inst_30579,inst_30576,inst_30579__$1,inst_30580__$1,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30259_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30259_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30580,inst_30584,inst_30579,inst_30576,inst_30579__$1,inst_30580__$1,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30582 = cljs.core.filter.call(null,inst_30581,inst_30579__$1);
var inst_30583 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30584__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30583);
var inst_30585 = cljs.core.not_empty.call(null,inst_30584__$1);
var state_30662__$1 = (function (){var statearr_30690 = state_30662;
(statearr_30690[(23)] = inst_30580__$1);

(statearr_30690[(24)] = inst_30584__$1);

(statearr_30690[(26)] = inst_30582);

(statearr_30690[(25)] = inst_30579__$1);

return statearr_30690;
})();
if(cljs.core.truth_(inst_30585)){
var statearr_30691_30771 = state_30662__$1;
(statearr_30691_30771[(1)] = (23));

} else {
var statearr_30692_30772 = state_30662__$1;
(statearr_30692_30772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (36))){
var state_30662__$1 = state_30662;
var statearr_30693_30773 = state_30662__$1;
(statearr_30693_30773[(2)] = false);

(statearr_30693_30773[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (41))){
var inst_30637 = (state_30662[(20)]);
var inst_30641 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30642 = cljs.core.map.call(null,inst_30641,inst_30637);
var inst_30643 = cljs.core.pr_str.call(null,inst_30642);
var inst_30644 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30643)].join('');
var inst_30645 = figwheel.client.utils.log.call(null,inst_30644);
var state_30662__$1 = state_30662;
var statearr_30694_30774 = state_30662__$1;
(statearr_30694_30774[(2)] = inst_30645);

(statearr_30694_30774[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (43))){
var inst_30638 = (state_30662[(21)]);
var inst_30648 = (state_30662[(2)]);
var inst_30649 = cljs.core.not_empty.call(null,inst_30638);
var state_30662__$1 = (function (){var statearr_30695 = state_30662;
(statearr_30695[(27)] = inst_30648);

return statearr_30695;
})();
if(cljs.core.truth_(inst_30649)){
var statearr_30696_30775 = state_30662__$1;
(statearr_30696_30775[(1)] = (44));

} else {
var statearr_30697_30776 = state_30662__$1;
(statearr_30697_30776[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (29))){
var inst_30580 = (state_30662[(23)]);
var inst_30584 = (state_30662[(24)]);
var inst_30582 = (state_30662[(26)]);
var inst_30579 = (state_30662[(25)]);
var inst_30576 = (state_30662[(19)]);
var inst_30616 = (state_30662[(16)]);
var inst_30612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30615 = (function (){var all_files = inst_30576;
var res_SINGLEQUOTE_ = inst_30579;
var res = inst_30580;
var files_not_loaded = inst_30582;
var dependencies_that_loaded = inst_30584;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30616,inst_30612,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30614){
var map__30698 = p__30614;
var map__30698__$1 = ((((!((map__30698 == null)))?((((map__30698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30698):map__30698);
var namespace = cljs.core.get.call(null,map__30698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30616,inst_30612,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30616__$1 = cljs.core.group_by.call(null,inst_30615,inst_30582);
var inst_30618 = (inst_30616__$1 == null);
var inst_30619 = cljs.core.not.call(null,inst_30618);
var state_30662__$1 = (function (){var statearr_30700 = state_30662;
(statearr_30700[(28)] = inst_30612);

(statearr_30700[(16)] = inst_30616__$1);

return statearr_30700;
})();
if(inst_30619){
var statearr_30701_30777 = state_30662__$1;
(statearr_30701_30777[(1)] = (32));

} else {
var statearr_30702_30778 = state_30662__$1;
(statearr_30702_30778[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (44))){
var inst_30638 = (state_30662[(21)]);
var inst_30651 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30638);
var inst_30652 = cljs.core.pr_str.call(null,inst_30651);
var inst_30653 = [cljs.core.str("not required: "),cljs.core.str(inst_30652)].join('');
var inst_30654 = figwheel.client.utils.log.call(null,inst_30653);
var state_30662__$1 = state_30662;
var statearr_30703_30779 = state_30662__$1;
(statearr_30703_30779[(2)] = inst_30654);

(statearr_30703_30779[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (6))){
var inst_30557 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30704_30780 = state_30662__$1;
(statearr_30704_30780[(2)] = inst_30557);

(statearr_30704_30780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (28))){
var inst_30582 = (state_30662[(26)]);
var inst_30609 = (state_30662[(2)]);
var inst_30610 = cljs.core.not_empty.call(null,inst_30582);
var state_30662__$1 = (function (){var statearr_30705 = state_30662;
(statearr_30705[(29)] = inst_30609);

return statearr_30705;
})();
if(cljs.core.truth_(inst_30610)){
var statearr_30706_30781 = state_30662__$1;
(statearr_30706_30781[(1)] = (29));

} else {
var statearr_30707_30782 = state_30662__$1;
(statearr_30707_30782[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (25))){
var inst_30580 = (state_30662[(23)]);
var inst_30596 = (state_30662[(2)]);
var inst_30597 = cljs.core.not_empty.call(null,inst_30580);
var state_30662__$1 = (function (){var statearr_30708 = state_30662;
(statearr_30708[(30)] = inst_30596);

return statearr_30708;
})();
if(cljs.core.truth_(inst_30597)){
var statearr_30709_30783 = state_30662__$1;
(statearr_30709_30783[(1)] = (26));

} else {
var statearr_30710_30784 = state_30662__$1;
(statearr_30710_30784[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (34))){
var inst_30631 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
if(cljs.core.truth_(inst_30631)){
var statearr_30711_30785 = state_30662__$1;
(statearr_30711_30785[(1)] = (38));

} else {
var statearr_30712_30786 = state_30662__$1;
(statearr_30712_30786[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (17))){
var state_30662__$1 = state_30662;
var statearr_30713_30787 = state_30662__$1;
(statearr_30713_30787[(2)] = recompile_dependents);

(statearr_30713_30787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (3))){
var state_30662__$1 = state_30662;
var statearr_30714_30788 = state_30662__$1;
(statearr_30714_30788[(2)] = null);

(statearr_30714_30788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (12))){
var inst_30553 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30715_30789 = state_30662__$1;
(statearr_30715_30789[(2)] = inst_30553);

(statearr_30715_30789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (2))){
var inst_30515 = (state_30662[(13)]);
var inst_30522 = cljs.core.seq.call(null,inst_30515);
var inst_30523 = inst_30522;
var inst_30524 = null;
var inst_30525 = (0);
var inst_30526 = (0);
var state_30662__$1 = (function (){var statearr_30716 = state_30662;
(statearr_30716[(7)] = inst_30526);

(statearr_30716[(8)] = inst_30523);

(statearr_30716[(9)] = inst_30524);

(statearr_30716[(10)] = inst_30525);

return statearr_30716;
})();
var statearr_30717_30790 = state_30662__$1;
(statearr_30717_30790[(2)] = null);

(statearr_30717_30790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (23))){
var inst_30580 = (state_30662[(23)]);
var inst_30584 = (state_30662[(24)]);
var inst_30582 = (state_30662[(26)]);
var inst_30579 = (state_30662[(25)]);
var inst_30576 = (state_30662[(19)]);
var inst_30587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30589 = (function (){var all_files = inst_30576;
var res_SINGLEQUOTE_ = inst_30579;
var res = inst_30580;
var files_not_loaded = inst_30582;
var dependencies_that_loaded = inst_30584;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30587,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30588){
var map__30718 = p__30588;
var map__30718__$1 = ((((!((map__30718 == null)))?((((map__30718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30718):map__30718);
var request_url = cljs.core.get.call(null,map__30718__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30587,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30590 = cljs.core.reverse.call(null,inst_30584);
var inst_30591 = cljs.core.map.call(null,inst_30589,inst_30590);
var inst_30592 = cljs.core.pr_str.call(null,inst_30591);
var inst_30593 = figwheel.client.utils.log.call(null,inst_30592);
var state_30662__$1 = (function (){var statearr_30720 = state_30662;
(statearr_30720[(31)] = inst_30587);

return statearr_30720;
})();
var statearr_30721_30791 = state_30662__$1;
(statearr_30721_30791[(2)] = inst_30593);

(statearr_30721_30791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (35))){
var state_30662__$1 = state_30662;
var statearr_30722_30792 = state_30662__$1;
(statearr_30722_30792[(2)] = true);

(statearr_30722_30792[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (19))){
var inst_30566 = (state_30662[(12)]);
var inst_30572 = figwheel.client.file_reloading.expand_files.call(null,inst_30566);
var state_30662__$1 = state_30662;
var statearr_30723_30793 = state_30662__$1;
(statearr_30723_30793[(2)] = inst_30572);

(statearr_30723_30793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (11))){
var state_30662__$1 = state_30662;
var statearr_30724_30794 = state_30662__$1;
(statearr_30724_30794[(2)] = null);

(statearr_30724_30794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (9))){
var inst_30555 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30725_30795 = state_30662__$1;
(statearr_30725_30795[(2)] = inst_30555);

(statearr_30725_30795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (5))){
var inst_30526 = (state_30662[(7)]);
var inst_30525 = (state_30662[(10)]);
var inst_30528 = (inst_30526 < inst_30525);
var inst_30529 = inst_30528;
var state_30662__$1 = state_30662;
if(cljs.core.truth_(inst_30529)){
var statearr_30726_30796 = state_30662__$1;
(statearr_30726_30796[(1)] = (7));

} else {
var statearr_30727_30797 = state_30662__$1;
(statearr_30727_30797[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (14))){
var inst_30536 = (state_30662[(22)]);
var inst_30545 = cljs.core.first.call(null,inst_30536);
var inst_30546 = figwheel.client.file_reloading.eval_body.call(null,inst_30545,opts);
var inst_30547 = cljs.core.next.call(null,inst_30536);
var inst_30523 = inst_30547;
var inst_30524 = null;
var inst_30525 = (0);
var inst_30526 = (0);
var state_30662__$1 = (function (){var statearr_30728 = state_30662;
(statearr_30728[(32)] = inst_30546);

(statearr_30728[(7)] = inst_30526);

(statearr_30728[(8)] = inst_30523);

(statearr_30728[(9)] = inst_30524);

(statearr_30728[(10)] = inst_30525);

return statearr_30728;
})();
var statearr_30729_30798 = state_30662__$1;
(statearr_30729_30798[(2)] = null);

(statearr_30729_30798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (45))){
var state_30662__$1 = state_30662;
var statearr_30730_30799 = state_30662__$1;
(statearr_30730_30799[(2)] = null);

(statearr_30730_30799[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (26))){
var inst_30580 = (state_30662[(23)]);
var inst_30584 = (state_30662[(24)]);
var inst_30582 = (state_30662[(26)]);
var inst_30579 = (state_30662[(25)]);
var inst_30576 = (state_30662[(19)]);
var inst_30599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30601 = (function (){var all_files = inst_30576;
var res_SINGLEQUOTE_ = inst_30579;
var res = inst_30580;
var files_not_loaded = inst_30582;
var dependencies_that_loaded = inst_30584;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30599,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30600){
var map__30731 = p__30600;
var map__30731__$1 = ((((!((map__30731 == null)))?((((map__30731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30731):map__30731);
var namespace = cljs.core.get.call(null,map__30731__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30731__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30599,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30602 = cljs.core.map.call(null,inst_30601,inst_30580);
var inst_30603 = cljs.core.pr_str.call(null,inst_30602);
var inst_30604 = figwheel.client.utils.log.call(null,inst_30603);
var inst_30605 = (function (){var all_files = inst_30576;
var res_SINGLEQUOTE_ = inst_30579;
var res = inst_30580;
var files_not_loaded = inst_30582;
var dependencies_that_loaded = inst_30584;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30599,inst_30601,inst_30602,inst_30603,inst_30604,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30580,inst_30584,inst_30582,inst_30579,inst_30576,inst_30599,inst_30601,inst_30602,inst_30603,inst_30604,state_val_30663,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30606 = setTimeout(inst_30605,(10));
var state_30662__$1 = (function (){var statearr_30733 = state_30662;
(statearr_30733[(33)] = inst_30604);

(statearr_30733[(34)] = inst_30599);

return statearr_30733;
})();
var statearr_30734_30800 = state_30662__$1;
(statearr_30734_30800[(2)] = inst_30606);

(statearr_30734_30800[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (16))){
var state_30662__$1 = state_30662;
var statearr_30735_30801 = state_30662__$1;
(statearr_30735_30801[(2)] = reload_dependents);

(statearr_30735_30801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (38))){
var inst_30616 = (state_30662[(16)]);
var inst_30633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30616);
var state_30662__$1 = state_30662;
var statearr_30736_30802 = state_30662__$1;
(statearr_30736_30802[(2)] = inst_30633);

(statearr_30736_30802[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (30))){
var state_30662__$1 = state_30662;
var statearr_30737_30803 = state_30662__$1;
(statearr_30737_30803[(2)] = null);

(statearr_30737_30803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (10))){
var inst_30536 = (state_30662[(22)]);
var inst_30538 = cljs.core.chunked_seq_QMARK_.call(null,inst_30536);
var state_30662__$1 = state_30662;
if(inst_30538){
var statearr_30738_30804 = state_30662__$1;
(statearr_30738_30804[(1)] = (13));

} else {
var statearr_30739_30805 = state_30662__$1;
(statearr_30739_30805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (18))){
var inst_30570 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
if(cljs.core.truth_(inst_30570)){
var statearr_30740_30806 = state_30662__$1;
(statearr_30740_30806[(1)] = (19));

} else {
var statearr_30741_30807 = state_30662__$1;
(statearr_30741_30807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (42))){
var state_30662__$1 = state_30662;
var statearr_30742_30808 = state_30662__$1;
(statearr_30742_30808[(2)] = null);

(statearr_30742_30808[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (37))){
var inst_30628 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30743_30809 = state_30662__$1;
(statearr_30743_30809[(2)] = inst_30628);

(statearr_30743_30809[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (8))){
var inst_30523 = (state_30662[(8)]);
var inst_30536 = (state_30662[(22)]);
var inst_30536__$1 = cljs.core.seq.call(null,inst_30523);
var state_30662__$1 = (function (){var statearr_30744 = state_30662;
(statearr_30744[(22)] = inst_30536__$1);

return statearr_30744;
})();
if(inst_30536__$1){
var statearr_30745_30810 = state_30662__$1;
(statearr_30745_30810[(1)] = (10));

} else {
var statearr_30746_30811 = state_30662__$1;
(statearr_30746_30811[(1)] = (11));

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
});})(c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18921__auto__,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____0 = (function (){
var statearr_30750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30750[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__);

(statearr_30750[(1)] = (1));

return statearr_30750;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____1 = (function (state_30662){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_30662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e30751){if((e30751 instanceof Object)){
var ex__18925__auto__ = e30751;
var statearr_30752_30812 = state_30662;
(statearr_30752_30812[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30813 = state_30662;
state_30662 = G__30813;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__ = function(state_30662){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____1.call(this,state_30662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18944__auto__ = (function (){var statearr_30753 = f__18943__auto__.call(null);
(statearr_30753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__,map__30508,map__30508__$1,opts,before_jsload,on_jsload,reload_dependents,map__30509,map__30509__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18942__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30816,link){
var map__30819 = p__30816;
var map__30819__$1 = ((((!((map__30819 == null)))?((((map__30819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30819):map__30819);
var file = cljs.core.get.call(null,map__30819__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30819,map__30819__$1,file){
return (function (p1__30814_SHARP_,p2__30815_SHARP_){
if(cljs.core._EQ_.call(null,p1__30814_SHARP_,p2__30815_SHARP_)){
return p1__30814_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30819,map__30819__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30825){
var map__30826 = p__30825;
var map__30826__$1 = ((((!((map__30826 == null)))?((((map__30826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30826):map__30826);
var match_length = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30821_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30821_SHARP_);
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
var args30828 = [];
var len__17884__auto___30831 = arguments.length;
var i__17885__auto___30832 = (0);
while(true){
if((i__17885__auto___30832 < len__17884__auto___30831)){
args30828.push((arguments[i__17885__auto___30832]));

var G__30833 = (i__17885__auto___30832 + (1));
i__17885__auto___30832 = G__30833;
continue;
} else {
}
break;
}

var G__30830 = args30828.length;
switch (G__30830) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30828.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30835_SHARP_,p2__30836_SHARP_){
return cljs.core.assoc.call(null,p1__30835_SHARP_,cljs.core.get.call(null,p2__30836_SHARP_,key),p2__30836_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30837){
var map__30840 = p__30837;
var map__30840__$1 = ((((!((map__30840 == null)))?((((map__30840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30840):map__30840);
var f_data = map__30840__$1;
var file = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30842,files_msg){
var map__30849 = p__30842;
var map__30849__$1 = ((((!((map__30849 == null)))?((((map__30849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30849):map__30849);
var opts = map__30849__$1;
var on_cssload = cljs.core.get.call(null,map__30849__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30851_30855 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30852_30856 = null;
var count__30853_30857 = (0);
var i__30854_30858 = (0);
while(true){
if((i__30854_30858 < count__30853_30857)){
var f_30859 = cljs.core._nth.call(null,chunk__30852_30856,i__30854_30858);
figwheel.client.file_reloading.reload_css_file.call(null,f_30859);

var G__30860 = seq__30851_30855;
var G__30861 = chunk__30852_30856;
var G__30862 = count__30853_30857;
var G__30863 = (i__30854_30858 + (1));
seq__30851_30855 = G__30860;
chunk__30852_30856 = G__30861;
count__30853_30857 = G__30862;
i__30854_30858 = G__30863;
continue;
} else {
var temp__4425__auto___30864 = cljs.core.seq.call(null,seq__30851_30855);
if(temp__4425__auto___30864){
var seq__30851_30865__$1 = temp__4425__auto___30864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30851_30865__$1)){
var c__17629__auto___30866 = cljs.core.chunk_first.call(null,seq__30851_30865__$1);
var G__30867 = cljs.core.chunk_rest.call(null,seq__30851_30865__$1);
var G__30868 = c__17629__auto___30866;
var G__30869 = cljs.core.count.call(null,c__17629__auto___30866);
var G__30870 = (0);
seq__30851_30855 = G__30867;
chunk__30852_30856 = G__30868;
count__30853_30857 = G__30869;
i__30854_30858 = G__30870;
continue;
} else {
var f_30871 = cljs.core.first.call(null,seq__30851_30865__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30871);

var G__30872 = cljs.core.next.call(null,seq__30851_30865__$1);
var G__30873 = null;
var G__30874 = (0);
var G__30875 = (0);
seq__30851_30855 = G__30872;
chunk__30852_30856 = G__30873;
count__30853_30857 = G__30874;
i__30854_30858 = G__30875;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30849,map__30849__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30849,map__30849__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1451440004549