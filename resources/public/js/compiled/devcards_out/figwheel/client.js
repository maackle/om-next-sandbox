// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31196 = cljs.core._EQ_;
var expr__31197 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31196.call(null,"true",expr__31197))){
return true;
} else {
if(cljs.core.truth_(pred__31196.call(null,"false",expr__31197))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31197)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31199__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31200__i = 0, G__31200__a = new Array(arguments.length -  0);
while (G__31200__i < G__31200__a.length) {G__31200__a[G__31200__i] = arguments[G__31200__i + 0]; ++G__31200__i;}
  args = new cljs.core.IndexedSeq(G__31200__a,0);
} 
return G__31199__delegate.call(this,args);};
G__31199.cljs$lang$maxFixedArity = 0;
G__31199.cljs$lang$applyTo = (function (arglist__31201){
var args = cljs.core.seq(arglist__31201);
return G__31199__delegate(args);
});
G__31199.cljs$core$IFn$_invoke$arity$variadic = G__31199__delegate;
return G__31199;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31202){
var map__31205 = p__31202;
var map__31205__$1 = ((((!((map__31205 == null)))?((((map__31205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31205):map__31205);
var message = cljs.core.get.call(null,map__31205__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31205__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18942__auto___31367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___31367,ch){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___31367,ch){
return (function (state_31336){
var state_val_31337 = (state_31336[(1)]);
if((state_val_31337 === (7))){
var inst_31332 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31338_31368 = state_31336__$1;
(statearr_31338_31368[(2)] = inst_31332);

(statearr_31338_31368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (1))){
var state_31336__$1 = state_31336;
var statearr_31339_31369 = state_31336__$1;
(statearr_31339_31369[(2)] = null);

(statearr_31339_31369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (4))){
var inst_31289 = (state_31336[(7)]);
var inst_31289__$1 = (state_31336[(2)]);
var state_31336__$1 = (function (){var statearr_31340 = state_31336;
(statearr_31340[(7)] = inst_31289__$1);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31289__$1)){
var statearr_31341_31370 = state_31336__$1;
(statearr_31341_31370[(1)] = (5));

} else {
var statearr_31342_31371 = state_31336__$1;
(statearr_31342_31371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (15))){
var inst_31296 = (state_31336[(8)]);
var inst_31311 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31296);
var inst_31312 = cljs.core.first.call(null,inst_31311);
var inst_31313 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31312);
var inst_31314 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31313)].join('');
var inst_31315 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31314);
var state_31336__$1 = state_31336;
var statearr_31343_31372 = state_31336__$1;
(statearr_31343_31372[(2)] = inst_31315);

(statearr_31343_31372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (13))){
var inst_31320 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31344_31373 = state_31336__$1;
(statearr_31344_31373[(2)] = inst_31320);

(statearr_31344_31373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (6))){
var state_31336__$1 = state_31336;
var statearr_31345_31374 = state_31336__$1;
(statearr_31345_31374[(2)] = null);

(statearr_31345_31374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (17))){
var inst_31318 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31346_31375 = state_31336__$1;
(statearr_31346_31375[(2)] = inst_31318);

(statearr_31346_31375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (3))){
var inst_31334 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31336__$1,inst_31334);
} else {
if((state_val_31337 === (12))){
var inst_31295 = (state_31336[(9)]);
var inst_31309 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31295,opts);
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31309)){
var statearr_31347_31376 = state_31336__$1;
(statearr_31347_31376[(1)] = (15));

} else {
var statearr_31348_31377 = state_31336__$1;
(statearr_31348_31377[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (2))){
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31336__$1,(4),ch);
} else {
if((state_val_31337 === (11))){
var inst_31296 = (state_31336[(8)]);
var inst_31301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31302 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31296);
var inst_31303 = cljs.core.async.timeout.call(null,(1000));
var inst_31304 = [inst_31302,inst_31303];
var inst_31305 = (new cljs.core.PersistentVector(null,2,(5),inst_31301,inst_31304,null));
var state_31336__$1 = state_31336;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31336__$1,(14),inst_31305);
} else {
if((state_val_31337 === (9))){
var inst_31296 = (state_31336[(8)]);
var inst_31322 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31323 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31296);
var inst_31324 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31323);
var inst_31325 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31324)].join('');
var inst_31326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31325);
var state_31336__$1 = (function (){var statearr_31349 = state_31336;
(statearr_31349[(10)] = inst_31322);

return statearr_31349;
})();
var statearr_31350_31378 = state_31336__$1;
(statearr_31350_31378[(2)] = inst_31326);

(statearr_31350_31378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (5))){
var inst_31289 = (state_31336[(7)]);
var inst_31291 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31292 = (new cljs.core.PersistentArrayMap(null,2,inst_31291,null));
var inst_31293 = (new cljs.core.PersistentHashSet(null,inst_31292,null));
var inst_31294 = figwheel.client.focus_msgs.call(null,inst_31293,inst_31289);
var inst_31295 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31294);
var inst_31296 = cljs.core.first.call(null,inst_31294);
var inst_31297 = figwheel.client.autoload_QMARK_.call(null);
var state_31336__$1 = (function (){var statearr_31351 = state_31336;
(statearr_31351[(8)] = inst_31296);

(statearr_31351[(9)] = inst_31295);

return statearr_31351;
})();
if(cljs.core.truth_(inst_31297)){
var statearr_31352_31379 = state_31336__$1;
(statearr_31352_31379[(1)] = (8));

} else {
var statearr_31353_31380 = state_31336__$1;
(statearr_31353_31380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (14))){
var inst_31307 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31354_31381 = state_31336__$1;
(statearr_31354_31381[(2)] = inst_31307);

(statearr_31354_31381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (16))){
var state_31336__$1 = state_31336;
var statearr_31355_31382 = state_31336__$1;
(statearr_31355_31382[(2)] = null);

(statearr_31355_31382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (10))){
var inst_31328 = (state_31336[(2)]);
var state_31336__$1 = (function (){var statearr_31356 = state_31336;
(statearr_31356[(11)] = inst_31328);

return statearr_31356;
})();
var statearr_31357_31383 = state_31336__$1;
(statearr_31357_31383[(2)] = null);

(statearr_31357_31383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (8))){
var inst_31295 = (state_31336[(9)]);
var inst_31299 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31295,opts);
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31299)){
var statearr_31358_31384 = state_31336__$1;
(statearr_31358_31384[(1)] = (11));

} else {
var statearr_31359_31385 = state_31336__$1;
(statearr_31359_31385[(1)] = (12));

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
});})(c__18942__auto___31367,ch))
;
return ((function (switch__18921__auto__,c__18942__auto___31367,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____0 = (function (){
var statearr_31363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31363[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__);

(statearr_31363[(1)] = (1));

return statearr_31363;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____1 = (function (state_31336){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_31336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e31364){if((e31364 instanceof Object)){
var ex__18925__auto__ = e31364;
var statearr_31365_31386 = state_31336;
(statearr_31365_31386[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31387 = state_31336;
state_31336 = G__31387;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__ = function(state_31336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____1.call(this,state_31336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___31367,ch))
})();
var state__18944__auto__ = (function (){var statearr_31366 = f__18943__auto__.call(null);
(statearr_31366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___31367);

return statearr_31366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___31367,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31388_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31388_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31395 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31395){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31393 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31394 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31393,_STAR_print_newline_STAR_31394,base_path_31395){
return (function() { 
var G__31396__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31397__i = 0, G__31397__a = new Array(arguments.length -  0);
while (G__31397__i < G__31397__a.length) {G__31397__a[G__31397__i] = arguments[G__31397__i + 0]; ++G__31397__i;}
  args = new cljs.core.IndexedSeq(G__31397__a,0);
} 
return G__31396__delegate.call(this,args);};
G__31396.cljs$lang$maxFixedArity = 0;
G__31396.cljs$lang$applyTo = (function (arglist__31398){
var args = cljs.core.seq(arglist__31398);
return G__31396__delegate(args);
});
G__31396.cljs$core$IFn$_invoke$arity$variadic = G__31396__delegate;
return G__31396;
})()
;})(_STAR_print_fn_STAR_31393,_STAR_print_newline_STAR_31394,base_path_31395))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31394;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31393;
}}catch (e31392){if((e31392 instanceof Error)){
var e = e31392;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31395], null));
} else {
var e = e31392;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31395))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31399){
var map__31406 = p__31399;
var map__31406__$1 = ((((!((map__31406 == null)))?((((map__31406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31406):map__31406);
var opts = map__31406__$1;
var build_id = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31406,map__31406__$1,opts,build_id){
return (function (p__31408){
var vec__31409 = p__31408;
var map__31410 = cljs.core.nth.call(null,vec__31409,(0),null);
var map__31410__$1 = ((((!((map__31410 == null)))?((((map__31410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31410):map__31410);
var msg = map__31410__$1;
var msg_name = cljs.core.get.call(null,map__31410__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31409,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31409,map__31410,map__31410__$1,msg,msg_name,_,map__31406,map__31406__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31409,map__31410,map__31410__$1,msg,msg_name,_,map__31406,map__31406__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31406,map__31406__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31416){
var vec__31417 = p__31416;
var map__31418 = cljs.core.nth.call(null,vec__31417,(0),null);
var map__31418__$1 = ((((!((map__31418 == null)))?((((map__31418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31418):map__31418);
var msg = map__31418__$1;
var msg_name = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31417,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31420){
var map__31430 = p__31420;
var map__31430__$1 = ((((!((map__31430 == null)))?((((map__31430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31430):map__31430);
var on_compile_warning = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31430,map__31430__$1,on_compile_warning,on_compile_fail){
return (function (p__31432){
var vec__31433 = p__31432;
var map__31434 = cljs.core.nth.call(null,vec__31433,(0),null);
var map__31434__$1 = ((((!((map__31434 == null)))?((((map__31434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31434):map__31434);
var msg = map__31434__$1;
var msg_name = cljs.core.get.call(null,map__31434__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31433,(1));
var pred__31436 = cljs.core._EQ_;
var expr__31437 = msg_name;
if(cljs.core.truth_(pred__31436.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31437))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31436.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31437))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31430,map__31430__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__,msg_hist,msg_names,msg){
return (function (state_31653){
var state_val_31654 = (state_31653[(1)]);
if((state_val_31654 === (7))){
var inst_31577 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31577)){
var statearr_31655_31701 = state_31653__$1;
(statearr_31655_31701[(1)] = (8));

} else {
var statearr_31656_31702 = state_31653__$1;
(statearr_31656_31702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (20))){
var inst_31647 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31657_31703 = state_31653__$1;
(statearr_31657_31703[(2)] = inst_31647);

(statearr_31657_31703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (27))){
var inst_31643 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31658_31704 = state_31653__$1;
(statearr_31658_31704[(2)] = inst_31643);

(statearr_31658_31704[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (1))){
var inst_31570 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31570)){
var statearr_31659_31705 = state_31653__$1;
(statearr_31659_31705[(1)] = (2));

} else {
var statearr_31660_31706 = state_31653__$1;
(statearr_31660_31706[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (24))){
var inst_31645 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31661_31707 = state_31653__$1;
(statearr_31661_31707[(2)] = inst_31645);

(statearr_31661_31707[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (4))){
var inst_31651 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31653__$1,inst_31651);
} else {
if((state_val_31654 === (15))){
var inst_31649 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31662_31708 = state_31653__$1;
(statearr_31662_31708[(2)] = inst_31649);

(statearr_31662_31708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (21))){
var inst_31608 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31663_31709 = state_31653__$1;
(statearr_31663_31709[(2)] = inst_31608);

(statearr_31663_31709[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (31))){
var inst_31632 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31632)){
var statearr_31664_31710 = state_31653__$1;
(statearr_31664_31710[(1)] = (34));

} else {
var statearr_31665_31711 = state_31653__$1;
(statearr_31665_31711[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (32))){
var inst_31641 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31666_31712 = state_31653__$1;
(statearr_31666_31712[(2)] = inst_31641);

(statearr_31666_31712[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (33))){
var inst_31630 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31667_31713 = state_31653__$1;
(statearr_31667_31713[(2)] = inst_31630);

(statearr_31667_31713[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (13))){
var inst_31591 = figwheel.client.heads_up.clear.call(null);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(16),inst_31591);
} else {
if((state_val_31654 === (22))){
var inst_31612 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31613 = figwheel.client.heads_up.append_message.call(null,inst_31612);
var state_31653__$1 = state_31653;
var statearr_31668_31714 = state_31653__$1;
(statearr_31668_31714[(2)] = inst_31613);

(statearr_31668_31714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (36))){
var inst_31639 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31669_31715 = state_31653__$1;
(statearr_31669_31715[(2)] = inst_31639);

(statearr_31669_31715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (29))){
var inst_31623 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31670_31716 = state_31653__$1;
(statearr_31670_31716[(2)] = inst_31623);

(statearr_31670_31716[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (6))){
var inst_31572 = (state_31653[(7)]);
var state_31653__$1 = state_31653;
var statearr_31671_31717 = state_31653__$1;
(statearr_31671_31717[(2)] = inst_31572);

(statearr_31671_31717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (28))){
var inst_31619 = (state_31653[(2)]);
var inst_31620 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31621 = figwheel.client.heads_up.display_warning.call(null,inst_31620);
var state_31653__$1 = (function (){var statearr_31672 = state_31653;
(statearr_31672[(8)] = inst_31619);

return statearr_31672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(29),inst_31621);
} else {
if((state_val_31654 === (25))){
var inst_31617 = figwheel.client.heads_up.clear.call(null);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(28),inst_31617);
} else {
if((state_val_31654 === (34))){
var inst_31634 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(37),inst_31634);
} else {
if((state_val_31654 === (17))){
var inst_31599 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31673_31718 = state_31653__$1;
(statearr_31673_31718[(2)] = inst_31599);

(statearr_31673_31718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (3))){
var inst_31589 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31589)){
var statearr_31674_31719 = state_31653__$1;
(statearr_31674_31719[(1)] = (13));

} else {
var statearr_31675_31720 = state_31653__$1;
(statearr_31675_31720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (12))){
var inst_31585 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31676_31721 = state_31653__$1;
(statearr_31676_31721[(2)] = inst_31585);

(statearr_31676_31721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (2))){
var inst_31572 = (state_31653[(7)]);
var inst_31572__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31653__$1 = (function (){var statearr_31677 = state_31653;
(statearr_31677[(7)] = inst_31572__$1);

return statearr_31677;
})();
if(cljs.core.truth_(inst_31572__$1)){
var statearr_31678_31722 = state_31653__$1;
(statearr_31678_31722[(1)] = (5));

} else {
var statearr_31679_31723 = state_31653__$1;
(statearr_31679_31723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (23))){
var inst_31615 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31615)){
var statearr_31680_31724 = state_31653__$1;
(statearr_31680_31724[(1)] = (25));

} else {
var statearr_31681_31725 = state_31653__$1;
(statearr_31681_31725[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (35))){
var state_31653__$1 = state_31653;
var statearr_31682_31726 = state_31653__$1;
(statearr_31682_31726[(2)] = null);

(statearr_31682_31726[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (19))){
var inst_31610 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31610)){
var statearr_31683_31727 = state_31653__$1;
(statearr_31683_31727[(1)] = (22));

} else {
var statearr_31684_31728 = state_31653__$1;
(statearr_31684_31728[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (11))){
var inst_31581 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31685_31729 = state_31653__$1;
(statearr_31685_31729[(2)] = inst_31581);

(statearr_31685_31729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (9))){
var inst_31583 = figwheel.client.heads_up.clear.call(null);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(12),inst_31583);
} else {
if((state_val_31654 === (5))){
var inst_31574 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31653__$1 = state_31653;
var statearr_31686_31730 = state_31653__$1;
(statearr_31686_31730[(2)] = inst_31574);

(statearr_31686_31730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (14))){
var inst_31601 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31601)){
var statearr_31687_31731 = state_31653__$1;
(statearr_31687_31731[(1)] = (18));

} else {
var statearr_31688_31732 = state_31653__$1;
(statearr_31688_31732[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (26))){
var inst_31625 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31625)){
var statearr_31689_31733 = state_31653__$1;
(statearr_31689_31733[(1)] = (30));

} else {
var statearr_31690_31734 = state_31653__$1;
(statearr_31690_31734[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (16))){
var inst_31593 = (state_31653[(2)]);
var inst_31594 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31595 = figwheel.client.format_messages.call(null,inst_31594);
var inst_31596 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31597 = figwheel.client.heads_up.display_error.call(null,inst_31595,inst_31596);
var state_31653__$1 = (function (){var statearr_31691 = state_31653;
(statearr_31691[(9)] = inst_31593);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(17),inst_31597);
} else {
if((state_val_31654 === (30))){
var inst_31627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31628 = figwheel.client.heads_up.display_warning.call(null,inst_31627);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(33),inst_31628);
} else {
if((state_val_31654 === (10))){
var inst_31587 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31692_31735 = state_31653__$1;
(statearr_31692_31735[(2)] = inst_31587);

(statearr_31692_31735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (18))){
var inst_31603 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31604 = figwheel.client.format_messages.call(null,inst_31603);
var inst_31605 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31606 = figwheel.client.heads_up.display_error.call(null,inst_31604,inst_31605);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(21),inst_31606);
} else {
if((state_val_31654 === (37))){
var inst_31636 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31693_31736 = state_31653__$1;
(statearr_31693_31736[(2)] = inst_31636);

(statearr_31693_31736[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (8))){
var inst_31579 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(11),inst_31579);
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
});})(c__18942__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18921__auto__,c__18942__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____0 = (function (){
var statearr_31697 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31697[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__);

(statearr_31697[(1)] = (1));

return statearr_31697;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____1 = (function (state_31653){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_31653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e31698){if((e31698 instanceof Object)){
var ex__18925__auto__ = e31698;
var statearr_31699_31737 = state_31653;
(statearr_31699_31737[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31738 = state_31653;
state_31653 = G__31738;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__ = function(state_31653){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____1.call(this,state_31653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__,msg_hist,msg_names,msg))
})();
var state__18944__auto__ = (function (){var statearr_31700 = f__18943__auto__.call(null);
(statearr_31700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_31700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__,msg_hist,msg_names,msg))
);

return c__18942__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18942__auto___31801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___31801,ch){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___31801,ch){
return (function (state_31784){
var state_val_31785 = (state_31784[(1)]);
if((state_val_31785 === (1))){
var state_31784__$1 = state_31784;
var statearr_31786_31802 = state_31784__$1;
(statearr_31786_31802[(2)] = null);

(statearr_31786_31802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (2))){
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31784__$1,(4),ch);
} else {
if((state_val_31785 === (3))){
var inst_31782 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31784__$1,inst_31782);
} else {
if((state_val_31785 === (4))){
var inst_31772 = (state_31784[(7)]);
var inst_31772__$1 = (state_31784[(2)]);
var state_31784__$1 = (function (){var statearr_31787 = state_31784;
(statearr_31787[(7)] = inst_31772__$1);

return statearr_31787;
})();
if(cljs.core.truth_(inst_31772__$1)){
var statearr_31788_31803 = state_31784__$1;
(statearr_31788_31803[(1)] = (5));

} else {
var statearr_31789_31804 = state_31784__$1;
(statearr_31789_31804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (5))){
var inst_31772 = (state_31784[(7)]);
var inst_31774 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31772);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31784__$1,(8),inst_31774);
} else {
if((state_val_31785 === (6))){
var state_31784__$1 = state_31784;
var statearr_31790_31805 = state_31784__$1;
(statearr_31790_31805[(2)] = null);

(statearr_31790_31805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (7))){
var inst_31780 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31791_31806 = state_31784__$1;
(statearr_31791_31806[(2)] = inst_31780);

(statearr_31791_31806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (8))){
var inst_31776 = (state_31784[(2)]);
var state_31784__$1 = (function (){var statearr_31792 = state_31784;
(statearr_31792[(8)] = inst_31776);

return statearr_31792;
})();
var statearr_31793_31807 = state_31784__$1;
(statearr_31793_31807[(2)] = null);

(statearr_31793_31807[(1)] = (2));


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
});})(c__18942__auto___31801,ch))
;
return ((function (switch__18921__auto__,c__18942__auto___31801,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18922__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18922__auto____0 = (function (){
var statearr_31797 = [null,null,null,null,null,null,null,null,null];
(statearr_31797[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18922__auto__);

(statearr_31797[(1)] = (1));

return statearr_31797;
});
var figwheel$client$heads_up_plugin_$_state_machine__18922__auto____1 = (function (state_31784){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_31784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e31798){if((e31798 instanceof Object)){
var ex__18925__auto__ = e31798;
var statearr_31799_31808 = state_31784;
(statearr_31799_31808[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31809 = state_31784;
state_31784 = G__31809;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18922__auto__ = function(state_31784){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18922__auto____1.call(this,state_31784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18922__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18922__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___31801,ch))
})();
var state__18944__auto__ = (function (){var statearr_31800 = f__18943__auto__.call(null);
(statearr_31800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___31801);

return statearr_31800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___31801,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__){
return (function (state_31830){
var state_val_31831 = (state_31830[(1)]);
if((state_val_31831 === (1))){
var inst_31825 = cljs.core.async.timeout.call(null,(3000));
var state_31830__$1 = state_31830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31830__$1,(2),inst_31825);
} else {
if((state_val_31831 === (2))){
var inst_31827 = (state_31830[(2)]);
var inst_31828 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31830__$1 = (function (){var statearr_31832 = state_31830;
(statearr_31832[(7)] = inst_31827);

return statearr_31832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31830__$1,inst_31828);
} else {
return null;
}
}
});})(c__18942__auto__))
;
return ((function (switch__18921__auto__,c__18942__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____0 = (function (){
var statearr_31836 = [null,null,null,null,null,null,null,null];
(statearr_31836[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__);

(statearr_31836[(1)] = (1));

return statearr_31836;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____1 = (function (state_31830){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_31830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e31837){if((e31837 instanceof Object)){
var ex__18925__auto__ = e31837;
var statearr_31838_31840 = state_31830;
(statearr_31838_31840[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31841 = state_31830;
state_31830 = G__31841;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__ = function(state_31830){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____1.call(this,state_31830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__))
})();
var state__18944__auto__ = (function (){var statearr_31839 = f__18943__auto__.call(null);
(statearr_31839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_31839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__))
);

return c__18942__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31842){
var map__31849 = p__31842;
var map__31849__$1 = ((((!((map__31849 == null)))?((((map__31849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31849):map__31849);
var ed = map__31849__$1;
var formatted_exception = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31851_31855 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31852_31856 = null;
var count__31853_31857 = (0);
var i__31854_31858 = (0);
while(true){
if((i__31854_31858 < count__31853_31857)){
var msg_31859 = cljs.core._nth.call(null,chunk__31852_31856,i__31854_31858);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31859);

var G__31860 = seq__31851_31855;
var G__31861 = chunk__31852_31856;
var G__31862 = count__31853_31857;
var G__31863 = (i__31854_31858 + (1));
seq__31851_31855 = G__31860;
chunk__31852_31856 = G__31861;
count__31853_31857 = G__31862;
i__31854_31858 = G__31863;
continue;
} else {
var temp__4425__auto___31864 = cljs.core.seq.call(null,seq__31851_31855);
if(temp__4425__auto___31864){
var seq__31851_31865__$1 = temp__4425__auto___31864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31851_31865__$1)){
var c__17629__auto___31866 = cljs.core.chunk_first.call(null,seq__31851_31865__$1);
var G__31867 = cljs.core.chunk_rest.call(null,seq__31851_31865__$1);
var G__31868 = c__17629__auto___31866;
var G__31869 = cljs.core.count.call(null,c__17629__auto___31866);
var G__31870 = (0);
seq__31851_31855 = G__31867;
chunk__31852_31856 = G__31868;
count__31853_31857 = G__31869;
i__31854_31858 = G__31870;
continue;
} else {
var msg_31871 = cljs.core.first.call(null,seq__31851_31865__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31871);

var G__31872 = cljs.core.next.call(null,seq__31851_31865__$1);
var G__31873 = null;
var G__31874 = (0);
var G__31875 = (0);
seq__31851_31855 = G__31872;
chunk__31852_31856 = G__31873;
count__31853_31857 = G__31874;
i__31854_31858 = G__31875;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31876){
var map__31879 = p__31876;
var map__31879__$1 = ((((!((map__31879 == null)))?((((map__31879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31879):map__31879);
var w = map__31879__$1;
var message = cljs.core.get.call(null,map__31879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31887 = cljs.core.seq.call(null,plugins);
var chunk__31888 = null;
var count__31889 = (0);
var i__31890 = (0);
while(true){
if((i__31890 < count__31889)){
var vec__31891 = cljs.core._nth.call(null,chunk__31888,i__31890);
var k = cljs.core.nth.call(null,vec__31891,(0),null);
var plugin = cljs.core.nth.call(null,vec__31891,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31893 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31887,chunk__31888,count__31889,i__31890,pl_31893,vec__31891,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31893.call(null,msg_hist);
});})(seq__31887,chunk__31888,count__31889,i__31890,pl_31893,vec__31891,k,plugin))
);
} else {
}

var G__31894 = seq__31887;
var G__31895 = chunk__31888;
var G__31896 = count__31889;
var G__31897 = (i__31890 + (1));
seq__31887 = G__31894;
chunk__31888 = G__31895;
count__31889 = G__31896;
i__31890 = G__31897;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31887);
if(temp__4425__auto__){
var seq__31887__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31887__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__31887__$1);
var G__31898 = cljs.core.chunk_rest.call(null,seq__31887__$1);
var G__31899 = c__17629__auto__;
var G__31900 = cljs.core.count.call(null,c__17629__auto__);
var G__31901 = (0);
seq__31887 = G__31898;
chunk__31888 = G__31899;
count__31889 = G__31900;
i__31890 = G__31901;
continue;
} else {
var vec__31892 = cljs.core.first.call(null,seq__31887__$1);
var k = cljs.core.nth.call(null,vec__31892,(0),null);
var plugin = cljs.core.nth.call(null,vec__31892,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31902 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31887,chunk__31888,count__31889,i__31890,pl_31902,vec__31892,k,plugin,seq__31887__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31902.call(null,msg_hist);
});})(seq__31887,chunk__31888,count__31889,i__31890,pl_31902,vec__31892,k,plugin,seq__31887__$1,temp__4425__auto__))
);
} else {
}

var G__31903 = cljs.core.next.call(null,seq__31887__$1);
var G__31904 = null;
var G__31905 = (0);
var G__31906 = (0);
seq__31887 = G__31903;
chunk__31888 = G__31904;
count__31889 = G__31905;
i__31890 = G__31906;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31907 = [];
var len__17884__auto___31910 = arguments.length;
var i__17885__auto___31911 = (0);
while(true){
if((i__17885__auto___31911 < len__17884__auto___31910)){
args31907.push((arguments[i__17885__auto___31911]));

var G__31912 = (i__17885__auto___31911 + (1));
i__17885__auto___31911 = G__31912;
continue;
} else {
}
break;
}

var G__31909 = args31907.length;
switch (G__31909) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31907.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___31918 = arguments.length;
var i__17885__auto___31919 = (0);
while(true){
if((i__17885__auto___31919 < len__17884__auto___31918)){
args__17891__auto__.push((arguments[i__17885__auto___31919]));

var G__31920 = (i__17885__auto___31919 + (1));
i__17885__auto___31919 = G__31920;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31915){
var map__31916 = p__31915;
var map__31916__$1 = ((((!((map__31916 == null)))?((((map__31916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31916):map__31916);
var opts = map__31916__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31914){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31914));
});

//# sourceMappingURL=client.js.map?rel=1451440005198