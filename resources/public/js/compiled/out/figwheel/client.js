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
var pred__27749 = cljs.core._EQ_;
var expr__27750 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27749.call(null,"true",expr__27750))){
return true;
} else {
if(cljs.core.truth_(pred__27749.call(null,"false",expr__27750))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27750)].join('')));
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
var G__27752__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27753__i = 0, G__27753__a = new Array(arguments.length -  0);
while (G__27753__i < G__27753__a.length) {G__27753__a[G__27753__i] = arguments[G__27753__i + 0]; ++G__27753__i;}
  args = new cljs.core.IndexedSeq(G__27753__a,0);
} 
return G__27752__delegate.call(this,args);};
G__27752.cljs$lang$maxFixedArity = 0;
G__27752.cljs$lang$applyTo = (function (arglist__27754){
var args = cljs.core.seq(arglist__27754);
return G__27752__delegate(args);
});
G__27752.cljs$core$IFn$_invoke$arity$variadic = G__27752__delegate;
return G__27752;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27755){
var map__27758 = p__27755;
var map__27758__$1 = ((((!((map__27758 == null)))?((((map__27758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27758):map__27758);
var message = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23526__auto___27920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___27920,ch){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___27920,ch){
return (function (state_27889){
var state_val_27890 = (state_27889[(1)]);
if((state_val_27890 === (7))){
var inst_27885 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27891_27921 = state_27889__$1;
(statearr_27891_27921[(2)] = inst_27885);

(statearr_27891_27921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (1))){
var state_27889__$1 = state_27889;
var statearr_27892_27922 = state_27889__$1;
(statearr_27892_27922[(2)] = null);

(statearr_27892_27922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (4))){
var inst_27842 = (state_27889[(7)]);
var inst_27842__$1 = (state_27889[(2)]);
var state_27889__$1 = (function (){var statearr_27893 = state_27889;
(statearr_27893[(7)] = inst_27842__$1);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27842__$1)){
var statearr_27894_27923 = state_27889__$1;
(statearr_27894_27923[(1)] = (5));

} else {
var statearr_27895_27924 = state_27889__$1;
(statearr_27895_27924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (15))){
var inst_27849 = (state_27889[(8)]);
var inst_27864 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27849);
var inst_27865 = cljs.core.first.call(null,inst_27864);
var inst_27866 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27865);
var inst_27867 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27866)].join('');
var inst_27868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27867);
var state_27889__$1 = state_27889;
var statearr_27896_27925 = state_27889__$1;
(statearr_27896_27925[(2)] = inst_27868);

(statearr_27896_27925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (13))){
var inst_27873 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27897_27926 = state_27889__$1;
(statearr_27897_27926[(2)] = inst_27873);

(statearr_27897_27926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (6))){
var state_27889__$1 = state_27889;
var statearr_27898_27927 = state_27889__$1;
(statearr_27898_27927[(2)] = null);

(statearr_27898_27927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (17))){
var inst_27871 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27899_27928 = state_27889__$1;
(statearr_27899_27928[(2)] = inst_27871);

(statearr_27899_27928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (3))){
var inst_27887 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27889__$1,inst_27887);
} else {
if((state_val_27890 === (12))){
var inst_27848 = (state_27889[(9)]);
var inst_27862 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27848,opts);
var state_27889__$1 = state_27889;
if(cljs.core.truth_(inst_27862)){
var statearr_27900_27929 = state_27889__$1;
(statearr_27900_27929[(1)] = (15));

} else {
var statearr_27901_27930 = state_27889__$1;
(statearr_27901_27930[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (2))){
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27889__$1,(4),ch);
} else {
if((state_val_27890 === (11))){
var inst_27849 = (state_27889[(8)]);
var inst_27854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27855 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27849);
var inst_27856 = cljs.core.async.timeout.call(null,(1000));
var inst_27857 = [inst_27855,inst_27856];
var inst_27858 = (new cljs.core.PersistentVector(null,2,(5),inst_27854,inst_27857,null));
var state_27889__$1 = state_27889;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27889__$1,(14),inst_27858);
} else {
if((state_val_27890 === (9))){
var inst_27849 = (state_27889[(8)]);
var inst_27875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27876 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27849);
var inst_27877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27876);
var inst_27878 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27877)].join('');
var inst_27879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27878);
var state_27889__$1 = (function (){var statearr_27902 = state_27889;
(statearr_27902[(10)] = inst_27875);

return statearr_27902;
})();
var statearr_27903_27931 = state_27889__$1;
(statearr_27903_27931[(2)] = inst_27879);

(statearr_27903_27931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (5))){
var inst_27842 = (state_27889[(7)]);
var inst_27844 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27845 = (new cljs.core.PersistentArrayMap(null,2,inst_27844,null));
var inst_27846 = (new cljs.core.PersistentHashSet(null,inst_27845,null));
var inst_27847 = figwheel.client.focus_msgs.call(null,inst_27846,inst_27842);
var inst_27848 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27847);
var inst_27849 = cljs.core.first.call(null,inst_27847);
var inst_27850 = figwheel.client.autoload_QMARK_.call(null);
var state_27889__$1 = (function (){var statearr_27904 = state_27889;
(statearr_27904[(8)] = inst_27849);

(statearr_27904[(9)] = inst_27848);

return statearr_27904;
})();
if(cljs.core.truth_(inst_27850)){
var statearr_27905_27932 = state_27889__$1;
(statearr_27905_27932[(1)] = (8));

} else {
var statearr_27906_27933 = state_27889__$1;
(statearr_27906_27933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (14))){
var inst_27860 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27907_27934 = state_27889__$1;
(statearr_27907_27934[(2)] = inst_27860);

(statearr_27907_27934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (16))){
var state_27889__$1 = state_27889;
var statearr_27908_27935 = state_27889__$1;
(statearr_27908_27935[(2)] = null);

(statearr_27908_27935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (10))){
var inst_27881 = (state_27889[(2)]);
var state_27889__$1 = (function (){var statearr_27909 = state_27889;
(statearr_27909[(11)] = inst_27881);

return statearr_27909;
})();
var statearr_27910_27936 = state_27889__$1;
(statearr_27910_27936[(2)] = null);

(statearr_27910_27936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (8))){
var inst_27848 = (state_27889[(9)]);
var inst_27852 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27848,opts);
var state_27889__$1 = state_27889;
if(cljs.core.truth_(inst_27852)){
var statearr_27911_27937 = state_27889__$1;
(statearr_27911_27937[(1)] = (11));

} else {
var statearr_27912_27938 = state_27889__$1;
(statearr_27912_27938[(1)] = (12));

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
});})(c__23526__auto___27920,ch))
;
return ((function (switch__23414__auto__,c__23526__auto___27920,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23415__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23415__auto____0 = (function (){
var statearr_27916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27916[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23415__auto__);

(statearr_27916[(1)] = (1));

return statearr_27916;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23415__auto____1 = (function (state_27889){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_27889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e27917){if((e27917 instanceof Object)){
var ex__23418__auto__ = e27917;
var statearr_27918_27939 = state_27889;
(statearr_27918_27939[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27940 = state_27889;
state_27889 = G__27940;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23415__auto__ = function(state_27889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23415__auto____1.call(this,state_27889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23415__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23415__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___27920,ch))
})();
var state__23528__auto__ = (function (){var statearr_27919 = f__23527__auto__.call(null);
(statearr_27919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___27920);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___27920,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27941_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27941_SHARP_));
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
var base_path_27948 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27948){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27946 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27947 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27946,_STAR_print_newline_STAR_27947,base_path_27948){
return (function() { 
var G__27949__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27950__i = 0, G__27950__a = new Array(arguments.length -  0);
while (G__27950__i < G__27950__a.length) {G__27950__a[G__27950__i] = arguments[G__27950__i + 0]; ++G__27950__i;}
  args = new cljs.core.IndexedSeq(G__27950__a,0);
} 
return G__27949__delegate.call(this,args);};
G__27949.cljs$lang$maxFixedArity = 0;
G__27949.cljs$lang$applyTo = (function (arglist__27951){
var args = cljs.core.seq(arglist__27951);
return G__27949__delegate(args);
});
G__27949.cljs$core$IFn$_invoke$arity$variadic = G__27949__delegate;
return G__27949;
})()
;})(_STAR_print_fn_STAR_27946,_STAR_print_newline_STAR_27947,base_path_27948))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27947;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27946;
}}catch (e27945){if((e27945 instanceof Error)){
var e = e27945;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27948], null));
} else {
var e = e27945;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27948))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27952){
var map__27959 = p__27952;
var map__27959__$1 = ((((!((map__27959 == null)))?((((map__27959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27959):map__27959);
var opts = map__27959__$1;
var build_id = cljs.core.get.call(null,map__27959__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27959,map__27959__$1,opts,build_id){
return (function (p__27961){
var vec__27962 = p__27961;
var map__27963 = cljs.core.nth.call(null,vec__27962,(0),null);
var map__27963__$1 = ((((!((map__27963 == null)))?((((map__27963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27963):map__27963);
var msg = map__27963__$1;
var msg_name = cljs.core.get.call(null,map__27963__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27962,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27962,map__27963,map__27963__$1,msg,msg_name,_,map__27959,map__27959__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27962,map__27963,map__27963__$1,msg,msg_name,_,map__27959,map__27959__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27959,map__27959__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27969){
var vec__27970 = p__27969;
var map__27971 = cljs.core.nth.call(null,vec__27970,(0),null);
var map__27971__$1 = ((((!((map__27971 == null)))?((((map__27971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27971):map__27971);
var msg = map__27971__$1;
var msg_name = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27970,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27973){
var map__27983 = p__27973;
var map__27983__$1 = ((((!((map__27983 == null)))?((((map__27983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27983):map__27983);
var on_compile_warning = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27983,map__27983__$1,on_compile_warning,on_compile_fail){
return (function (p__27985){
var vec__27986 = p__27985;
var map__27987 = cljs.core.nth.call(null,vec__27986,(0),null);
var map__27987__$1 = ((((!((map__27987 == null)))?((((map__27987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27987):map__27987);
var msg = map__27987__$1;
var msg_name = cljs.core.get.call(null,map__27987__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27986,(1));
var pred__27989 = cljs.core._EQ_;
var expr__27990 = msg_name;
if(cljs.core.truth_(pred__27989.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27990))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27989.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27990))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27983,map__27983__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__,msg_hist,msg_names,msg){
return (function (state_28206){
var state_val_28207 = (state_28206[(1)]);
if((state_val_28207 === (7))){
var inst_28130 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28130)){
var statearr_28208_28254 = state_28206__$1;
(statearr_28208_28254[(1)] = (8));

} else {
var statearr_28209_28255 = state_28206__$1;
(statearr_28209_28255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (20))){
var inst_28200 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28210_28256 = state_28206__$1;
(statearr_28210_28256[(2)] = inst_28200);

(statearr_28210_28256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (27))){
var inst_28196 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28211_28257 = state_28206__$1;
(statearr_28211_28257[(2)] = inst_28196);

(statearr_28211_28257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (1))){
var inst_28123 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28123)){
var statearr_28212_28258 = state_28206__$1;
(statearr_28212_28258[(1)] = (2));

} else {
var statearr_28213_28259 = state_28206__$1;
(statearr_28213_28259[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (24))){
var inst_28198 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28214_28260 = state_28206__$1;
(statearr_28214_28260[(2)] = inst_28198);

(statearr_28214_28260[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (4))){
var inst_28204 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28206__$1,inst_28204);
} else {
if((state_val_28207 === (15))){
var inst_28202 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28215_28261 = state_28206__$1;
(statearr_28215_28261[(2)] = inst_28202);

(statearr_28215_28261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (21))){
var inst_28161 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28216_28262 = state_28206__$1;
(statearr_28216_28262[(2)] = inst_28161);

(statearr_28216_28262[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (31))){
var inst_28185 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28185)){
var statearr_28217_28263 = state_28206__$1;
(statearr_28217_28263[(1)] = (34));

} else {
var statearr_28218_28264 = state_28206__$1;
(statearr_28218_28264[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (32))){
var inst_28194 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28219_28265 = state_28206__$1;
(statearr_28219_28265[(2)] = inst_28194);

(statearr_28219_28265[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (33))){
var inst_28183 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28220_28266 = state_28206__$1;
(statearr_28220_28266[(2)] = inst_28183);

(statearr_28220_28266[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (13))){
var inst_28144 = figwheel.client.heads_up.clear.call(null);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(16),inst_28144);
} else {
if((state_val_28207 === (22))){
var inst_28165 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28166 = figwheel.client.heads_up.append_message.call(null,inst_28165);
var state_28206__$1 = state_28206;
var statearr_28221_28267 = state_28206__$1;
(statearr_28221_28267[(2)] = inst_28166);

(statearr_28221_28267[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (36))){
var inst_28192 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28222_28268 = state_28206__$1;
(statearr_28222_28268[(2)] = inst_28192);

(statearr_28222_28268[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (29))){
var inst_28176 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28223_28269 = state_28206__$1;
(statearr_28223_28269[(2)] = inst_28176);

(statearr_28223_28269[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (6))){
var inst_28125 = (state_28206[(7)]);
var state_28206__$1 = state_28206;
var statearr_28224_28270 = state_28206__$1;
(statearr_28224_28270[(2)] = inst_28125);

(statearr_28224_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (28))){
var inst_28172 = (state_28206[(2)]);
var inst_28173 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28174 = figwheel.client.heads_up.display_warning.call(null,inst_28173);
var state_28206__$1 = (function (){var statearr_28225 = state_28206;
(statearr_28225[(8)] = inst_28172);

return statearr_28225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(29),inst_28174);
} else {
if((state_val_28207 === (25))){
var inst_28170 = figwheel.client.heads_up.clear.call(null);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(28),inst_28170);
} else {
if((state_val_28207 === (34))){
var inst_28187 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(37),inst_28187);
} else {
if((state_val_28207 === (17))){
var inst_28152 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28226_28271 = state_28206__$1;
(statearr_28226_28271[(2)] = inst_28152);

(statearr_28226_28271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (3))){
var inst_28142 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28142)){
var statearr_28227_28272 = state_28206__$1;
(statearr_28227_28272[(1)] = (13));

} else {
var statearr_28228_28273 = state_28206__$1;
(statearr_28228_28273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (12))){
var inst_28138 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28229_28274 = state_28206__$1;
(statearr_28229_28274[(2)] = inst_28138);

(statearr_28229_28274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (2))){
var inst_28125 = (state_28206[(7)]);
var inst_28125__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28206__$1 = (function (){var statearr_28230 = state_28206;
(statearr_28230[(7)] = inst_28125__$1);

return statearr_28230;
})();
if(cljs.core.truth_(inst_28125__$1)){
var statearr_28231_28275 = state_28206__$1;
(statearr_28231_28275[(1)] = (5));

} else {
var statearr_28232_28276 = state_28206__$1;
(statearr_28232_28276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (23))){
var inst_28168 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28168)){
var statearr_28233_28277 = state_28206__$1;
(statearr_28233_28277[(1)] = (25));

} else {
var statearr_28234_28278 = state_28206__$1;
(statearr_28234_28278[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (35))){
var state_28206__$1 = state_28206;
var statearr_28235_28279 = state_28206__$1;
(statearr_28235_28279[(2)] = null);

(statearr_28235_28279[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (19))){
var inst_28163 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28163)){
var statearr_28236_28280 = state_28206__$1;
(statearr_28236_28280[(1)] = (22));

} else {
var statearr_28237_28281 = state_28206__$1;
(statearr_28237_28281[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (11))){
var inst_28134 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28238_28282 = state_28206__$1;
(statearr_28238_28282[(2)] = inst_28134);

(statearr_28238_28282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (9))){
var inst_28136 = figwheel.client.heads_up.clear.call(null);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(12),inst_28136);
} else {
if((state_val_28207 === (5))){
var inst_28127 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28206__$1 = state_28206;
var statearr_28239_28283 = state_28206__$1;
(statearr_28239_28283[(2)] = inst_28127);

(statearr_28239_28283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (14))){
var inst_28154 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28154)){
var statearr_28240_28284 = state_28206__$1;
(statearr_28240_28284[(1)] = (18));

} else {
var statearr_28241_28285 = state_28206__$1;
(statearr_28241_28285[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (26))){
var inst_28178 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28178)){
var statearr_28242_28286 = state_28206__$1;
(statearr_28242_28286[(1)] = (30));

} else {
var statearr_28243_28287 = state_28206__$1;
(statearr_28243_28287[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (16))){
var inst_28146 = (state_28206[(2)]);
var inst_28147 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28148 = figwheel.client.format_messages.call(null,inst_28147);
var inst_28149 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28150 = figwheel.client.heads_up.display_error.call(null,inst_28148,inst_28149);
var state_28206__$1 = (function (){var statearr_28244 = state_28206;
(statearr_28244[(9)] = inst_28146);

return statearr_28244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(17),inst_28150);
} else {
if((state_val_28207 === (30))){
var inst_28180 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28181 = figwheel.client.heads_up.display_warning.call(null,inst_28180);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(33),inst_28181);
} else {
if((state_val_28207 === (10))){
var inst_28140 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28245_28288 = state_28206__$1;
(statearr_28245_28288[(2)] = inst_28140);

(statearr_28245_28288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (18))){
var inst_28156 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28157 = figwheel.client.format_messages.call(null,inst_28156);
var inst_28158 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28159 = figwheel.client.heads_up.display_error.call(null,inst_28157,inst_28158);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(21),inst_28159);
} else {
if((state_val_28207 === (37))){
var inst_28189 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28246_28289 = state_28206__$1;
(statearr_28246_28289[(2)] = inst_28189);

(statearr_28246_28289[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (8))){
var inst_28132 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(11),inst_28132);
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
});})(c__23526__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23414__auto__,c__23526__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28250[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto____1 = (function (state_28206){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_28206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object)){
var ex__23418__auto__ = e28251;
var statearr_28252_28290 = state_28206;
(statearr_28252_28290[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28291 = state_28206;
state_28206 = G__28291;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto__ = function(state_28206){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto____1.call(this,state_28206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__,msg_hist,msg_names,msg))
})();
var state__23528__auto__ = (function (){var statearr_28253 = f__23527__auto__.call(null);
(statearr_28253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_28253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__,msg_hist,msg_names,msg))
);

return c__23526__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23526__auto___28354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___28354,ch){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___28354,ch){
return (function (state_28337){
var state_val_28338 = (state_28337[(1)]);
if((state_val_28338 === (1))){
var state_28337__$1 = state_28337;
var statearr_28339_28355 = state_28337__$1;
(statearr_28339_28355[(2)] = null);

(statearr_28339_28355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (2))){
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28337__$1,(4),ch);
} else {
if((state_val_28338 === (3))){
var inst_28335 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28337__$1,inst_28335);
} else {
if((state_val_28338 === (4))){
var inst_28325 = (state_28337[(7)]);
var inst_28325__$1 = (state_28337[(2)]);
var state_28337__$1 = (function (){var statearr_28340 = state_28337;
(statearr_28340[(7)] = inst_28325__$1);

return statearr_28340;
})();
if(cljs.core.truth_(inst_28325__$1)){
var statearr_28341_28356 = state_28337__$1;
(statearr_28341_28356[(1)] = (5));

} else {
var statearr_28342_28357 = state_28337__$1;
(statearr_28342_28357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (5))){
var inst_28325 = (state_28337[(7)]);
var inst_28327 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28325);
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28337__$1,(8),inst_28327);
} else {
if((state_val_28338 === (6))){
var state_28337__$1 = state_28337;
var statearr_28343_28358 = state_28337__$1;
(statearr_28343_28358[(2)] = null);

(statearr_28343_28358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (7))){
var inst_28333 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28344_28359 = state_28337__$1;
(statearr_28344_28359[(2)] = inst_28333);

(statearr_28344_28359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (8))){
var inst_28329 = (state_28337[(2)]);
var state_28337__$1 = (function (){var statearr_28345 = state_28337;
(statearr_28345[(8)] = inst_28329);

return statearr_28345;
})();
var statearr_28346_28360 = state_28337__$1;
(statearr_28346_28360[(2)] = null);

(statearr_28346_28360[(1)] = (2));


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
});})(c__23526__auto___28354,ch))
;
return ((function (switch__23414__auto__,c__23526__auto___28354,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23415__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23415__auto____0 = (function (){
var statearr_28350 = [null,null,null,null,null,null,null,null,null];
(statearr_28350[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23415__auto__);

(statearr_28350[(1)] = (1));

return statearr_28350;
});
var figwheel$client$heads_up_plugin_$_state_machine__23415__auto____1 = (function (state_28337){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_28337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e28351){if((e28351 instanceof Object)){
var ex__23418__auto__ = e28351;
var statearr_28352_28361 = state_28337;
(statearr_28352_28361[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28362 = state_28337;
state_28337 = G__28362;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23415__auto__ = function(state_28337){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23415__auto____1.call(this,state_28337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23415__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23415__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___28354,ch))
})();
var state__23528__auto__ = (function (){var statearr_28353 = f__23527__auto__.call(null);
(statearr_28353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___28354);

return statearr_28353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___28354,ch))
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
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_28383){
var state_val_28384 = (state_28383[(1)]);
if((state_val_28384 === (1))){
var inst_28378 = cljs.core.async.timeout.call(null,(3000));
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28383__$1,(2),inst_28378);
} else {
if((state_val_28384 === (2))){
var inst_28380 = (state_28383[(2)]);
var inst_28381 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28383__$1 = (function (){var statearr_28385 = state_28383;
(statearr_28385[(7)] = inst_28380);

return statearr_28385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28383__$1,inst_28381);
} else {
return null;
}
}
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23415__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23415__auto____0 = (function (){
var statearr_28389 = [null,null,null,null,null,null,null,null];
(statearr_28389[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23415__auto__);

(statearr_28389[(1)] = (1));

return statearr_28389;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23415__auto____1 = (function (state_28383){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_28383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e28390){if((e28390 instanceof Object)){
var ex__23418__auto__ = e28390;
var statearr_28391_28393 = state_28383;
(statearr_28391_28393[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28394 = state_28383;
state_28383 = G__28394;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23415__auto__ = function(state_28383){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23415__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23415__auto____1.call(this,state_28383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23415__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23415__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_28392 = f__23527__auto__.call(null);
(statearr_28392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_28392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28395){
var map__28402 = p__28395;
var map__28402__$1 = ((((!((map__28402 == null)))?((((map__28402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28402):map__28402);
var ed = map__28402__$1;
var formatted_exception = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28404_28408 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28405_28409 = null;
var count__28406_28410 = (0);
var i__28407_28411 = (0);
while(true){
if((i__28407_28411 < count__28406_28410)){
var msg_28412 = cljs.core._nth.call(null,chunk__28405_28409,i__28407_28411);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28412);

var G__28413 = seq__28404_28408;
var G__28414 = chunk__28405_28409;
var G__28415 = count__28406_28410;
var G__28416 = (i__28407_28411 + (1));
seq__28404_28408 = G__28413;
chunk__28405_28409 = G__28414;
count__28406_28410 = G__28415;
i__28407_28411 = G__28416;
continue;
} else {
var temp__4425__auto___28417 = cljs.core.seq.call(null,seq__28404_28408);
if(temp__4425__auto___28417){
var seq__28404_28418__$1 = temp__4425__auto___28417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28404_28418__$1)){
var c__17629__auto___28419 = cljs.core.chunk_first.call(null,seq__28404_28418__$1);
var G__28420 = cljs.core.chunk_rest.call(null,seq__28404_28418__$1);
var G__28421 = c__17629__auto___28419;
var G__28422 = cljs.core.count.call(null,c__17629__auto___28419);
var G__28423 = (0);
seq__28404_28408 = G__28420;
chunk__28405_28409 = G__28421;
count__28406_28410 = G__28422;
i__28407_28411 = G__28423;
continue;
} else {
var msg_28424 = cljs.core.first.call(null,seq__28404_28418__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28424);

var G__28425 = cljs.core.next.call(null,seq__28404_28418__$1);
var G__28426 = null;
var G__28427 = (0);
var G__28428 = (0);
seq__28404_28408 = G__28425;
chunk__28405_28409 = G__28426;
count__28406_28410 = G__28427;
i__28407_28411 = G__28428;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28429){
var map__28432 = p__28429;
var map__28432__$1 = ((((!((map__28432 == null)))?((((map__28432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28432):map__28432);
var w = map__28432__$1;
var message = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28440 = cljs.core.seq.call(null,plugins);
var chunk__28441 = null;
var count__28442 = (0);
var i__28443 = (0);
while(true){
if((i__28443 < count__28442)){
var vec__28444 = cljs.core._nth.call(null,chunk__28441,i__28443);
var k = cljs.core.nth.call(null,vec__28444,(0),null);
var plugin = cljs.core.nth.call(null,vec__28444,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28446 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28440,chunk__28441,count__28442,i__28443,pl_28446,vec__28444,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28446.call(null,msg_hist);
});})(seq__28440,chunk__28441,count__28442,i__28443,pl_28446,vec__28444,k,plugin))
);
} else {
}

var G__28447 = seq__28440;
var G__28448 = chunk__28441;
var G__28449 = count__28442;
var G__28450 = (i__28443 + (1));
seq__28440 = G__28447;
chunk__28441 = G__28448;
count__28442 = G__28449;
i__28443 = G__28450;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28440);
if(temp__4425__auto__){
var seq__28440__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28440__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__28440__$1);
var G__28451 = cljs.core.chunk_rest.call(null,seq__28440__$1);
var G__28452 = c__17629__auto__;
var G__28453 = cljs.core.count.call(null,c__17629__auto__);
var G__28454 = (0);
seq__28440 = G__28451;
chunk__28441 = G__28452;
count__28442 = G__28453;
i__28443 = G__28454;
continue;
} else {
var vec__28445 = cljs.core.first.call(null,seq__28440__$1);
var k = cljs.core.nth.call(null,vec__28445,(0),null);
var plugin = cljs.core.nth.call(null,vec__28445,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28455 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28440,chunk__28441,count__28442,i__28443,pl_28455,vec__28445,k,plugin,seq__28440__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28455.call(null,msg_hist);
});})(seq__28440,chunk__28441,count__28442,i__28443,pl_28455,vec__28445,k,plugin,seq__28440__$1,temp__4425__auto__))
);
} else {
}

var G__28456 = cljs.core.next.call(null,seq__28440__$1);
var G__28457 = null;
var G__28458 = (0);
var G__28459 = (0);
seq__28440 = G__28456;
chunk__28441 = G__28457;
count__28442 = G__28458;
i__28443 = G__28459;
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
var args28460 = [];
var len__17884__auto___28463 = arguments.length;
var i__17885__auto___28464 = (0);
while(true){
if((i__17885__auto___28464 < len__17884__auto___28463)){
args28460.push((arguments[i__17885__auto___28464]));

var G__28465 = (i__17885__auto___28464 + (1));
i__17885__auto___28464 = G__28465;
continue;
} else {
}
break;
}

var G__28462 = args28460.length;
switch (G__28462) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28460.length)].join('')));

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
var len__17884__auto___28471 = arguments.length;
var i__17885__auto___28472 = (0);
while(true){
if((i__17885__auto___28472 < len__17884__auto___28471)){
args__17891__auto__.push((arguments[i__17885__auto___28472]));

var G__28473 = (i__17885__auto___28472 + (1));
i__17885__auto___28472 = G__28473;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28468){
var map__28469 = p__28468;
var map__28469__$1 = ((((!((map__28469 == null)))?((((map__28469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28469):map__28469);
var opts = map__28469__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28467){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28467));
});

//# sourceMappingURL=client.js.map?rel=1451439390318