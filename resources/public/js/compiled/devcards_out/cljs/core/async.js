// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23829 = [];
var len__17884__auto___23835 = arguments.length;
var i__17885__auto___23836 = (0);
while(true){
if((i__17885__auto___23836 < len__17884__auto___23835)){
args23829.push((arguments[i__17885__auto___23836]));

var G__23837 = (i__17885__auto___23836 + (1));
i__17885__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var G__23831 = args23829.length;
switch (G__23831) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23829.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23832 = (function (f,blockable,meta23833){
this.f = f;
this.blockable = blockable;
this.meta23833 = meta23833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23834,meta23833__$1){
var self__ = this;
var _23834__$1 = this;
return (new cljs.core.async.t_cljs$core$async23832(self__.f,self__.blockable,meta23833__$1));
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23834){
var self__ = this;
var _23834__$1 = this;
return self__.meta23833;
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23833","meta23833",-1551598670,null)], null);
});

cljs.core.async.t_cljs$core$async23832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23832";

cljs.core.async.t_cljs$core$async23832.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23832");
});

cljs.core.async.__GT_t_cljs$core$async23832 = (function cljs$core$async$__GT_t_cljs$core$async23832(f__$1,blockable__$1,meta23833){
return (new cljs.core.async.t_cljs$core$async23832(f__$1,blockable__$1,meta23833));
});

}

return (new cljs.core.async.t_cljs$core$async23832(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23841 = [];
var len__17884__auto___23844 = arguments.length;
var i__17885__auto___23845 = (0);
while(true){
if((i__17885__auto___23845 < len__17884__auto___23844)){
args23841.push((arguments[i__17885__auto___23845]));

var G__23846 = (i__17885__auto___23845 + (1));
i__17885__auto___23845 = G__23846;
continue;
} else {
}
break;
}

var G__23843 = args23841.length;
switch (G__23843) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23841.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23848 = [];
var len__17884__auto___23851 = arguments.length;
var i__17885__auto___23852 = (0);
while(true){
if((i__17885__auto___23852 < len__17884__auto___23851)){
args23848.push((arguments[i__17885__auto___23852]));

var G__23853 = (i__17885__auto___23852 + (1));
i__17885__auto___23852 = G__23853;
continue;
} else {
}
break;
}

var G__23850 = args23848.length;
switch (G__23850) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23848.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23855 = [];
var len__17884__auto___23858 = arguments.length;
var i__17885__auto___23859 = (0);
while(true){
if((i__17885__auto___23859 < len__17884__auto___23858)){
args23855.push((arguments[i__17885__auto___23859]));

var G__23860 = (i__17885__auto___23859 + (1));
i__17885__auto___23859 = G__23860;
continue;
} else {
}
break;
}

var G__23857 = args23855.length;
switch (G__23857) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23855.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23862 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23862);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23862,ret){
return (function (){
return fn1.call(null,val_23862);
});})(val_23862,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23863 = [];
var len__17884__auto___23866 = arguments.length;
var i__17885__auto___23867 = (0);
while(true){
if((i__17885__auto___23867 < len__17884__auto___23866)){
args23863.push((arguments[i__17885__auto___23867]));

var G__23868 = (i__17885__auto___23867 + (1));
i__17885__auto___23867 = G__23868;
continue;
} else {
}
break;
}

var G__23865 = args23863.length;
switch (G__23865) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23863.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___23870 = n;
var x_23871 = (0);
while(true){
if((x_23871 < n__17729__auto___23870)){
(a[x_23871] = (0));

var G__23872 = (x_23871 + (1));
x_23871 = G__23872;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23873 = (i + (1));
i = G__23873;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23877 = (function (alt_flag,flag,meta23878){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23878 = meta23878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23879,meta23878__$1){
var self__ = this;
var _23879__$1 = this;
return (new cljs.core.async.t_cljs$core$async23877(self__.alt_flag,self__.flag,meta23878__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23879){
var self__ = this;
var _23879__$1 = this;
return self__.meta23878;
});})(flag))
;

cljs.core.async.t_cljs$core$async23877.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23877.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23878","meta23878",971868043,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23877";

cljs.core.async.t_cljs$core$async23877.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23877");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23877 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23877(alt_flag__$1,flag__$1,meta23878){
return (new cljs.core.async.t_cljs$core$async23877(alt_flag__$1,flag__$1,meta23878));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23877(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23883 = (function (alt_handler,flag,cb,meta23884){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23884 = meta23884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23885,meta23884__$1){
var self__ = this;
var _23885__$1 = this;
return (new cljs.core.async.t_cljs$core$async23883(self__.alt_handler,self__.flag,self__.cb,meta23884__$1));
});

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23885){
var self__ = this;
var _23885__$1 = this;
return self__.meta23884;
});

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23884","meta23884",-1591109167,null)], null);
});

cljs.core.async.t_cljs$core$async23883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23883";

cljs.core.async.t_cljs$core$async23883.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23883");
});

cljs.core.async.__GT_t_cljs$core$async23883 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23883(alt_handler__$1,flag__$1,cb__$1,meta23884){
return (new cljs.core.async.t_cljs$core$async23883(alt_handler__$1,flag__$1,cb__$1,meta23884));
});

}

return (new cljs.core.async.t_cljs$core$async23883(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23886_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23886_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23887_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23887_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23888 = (i + (1));
i = G__23888;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23894 = arguments.length;
var i__17885__auto___23895 = (0);
while(true){
if((i__17885__auto___23895 < len__17884__auto___23894)){
args__17891__auto__.push((arguments[i__17885__auto___23895]));

var G__23896 = (i__17885__auto___23895 + (1));
i__17885__auto___23895 = G__23896;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23891){
var map__23892 = p__23891;
var map__23892__$1 = ((((!((map__23892 == null)))?((((map__23892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23892):map__23892);
var opts = map__23892__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23889){
var G__23890 = cljs.core.first.call(null,seq23889);
var seq23889__$1 = cljs.core.next.call(null,seq23889);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23890,seq23889__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23897 = [];
var len__17884__auto___23947 = arguments.length;
var i__17885__auto___23948 = (0);
while(true){
if((i__17885__auto___23948 < len__17884__auto___23947)){
args23897.push((arguments[i__17885__auto___23948]));

var G__23949 = (i__17885__auto___23948 + (1));
i__17885__auto___23948 = G__23949;
continue;
} else {
}
break;
}

var G__23899 = args23897.length;
switch (G__23899) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23897.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18942__auto___23951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___23951){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___23951){
return (function (state_23923){
var state_val_23924 = (state_23923[(1)]);
if((state_val_23924 === (7))){
var inst_23919 = (state_23923[(2)]);
var state_23923__$1 = state_23923;
var statearr_23925_23952 = state_23923__$1;
(statearr_23925_23952[(2)] = inst_23919);

(statearr_23925_23952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (1))){
var state_23923__$1 = state_23923;
var statearr_23926_23953 = state_23923__$1;
(statearr_23926_23953[(2)] = null);

(statearr_23926_23953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (4))){
var inst_23902 = (state_23923[(7)]);
var inst_23902__$1 = (state_23923[(2)]);
var inst_23903 = (inst_23902__$1 == null);
var state_23923__$1 = (function (){var statearr_23927 = state_23923;
(statearr_23927[(7)] = inst_23902__$1);

return statearr_23927;
})();
if(cljs.core.truth_(inst_23903)){
var statearr_23928_23954 = state_23923__$1;
(statearr_23928_23954[(1)] = (5));

} else {
var statearr_23929_23955 = state_23923__$1;
(statearr_23929_23955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (13))){
var state_23923__$1 = state_23923;
var statearr_23930_23956 = state_23923__$1;
(statearr_23930_23956[(2)] = null);

(statearr_23930_23956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (6))){
var inst_23902 = (state_23923[(7)]);
var state_23923__$1 = state_23923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23923__$1,(11),to,inst_23902);
} else {
if((state_val_23924 === (3))){
var inst_23921 = (state_23923[(2)]);
var state_23923__$1 = state_23923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23923__$1,inst_23921);
} else {
if((state_val_23924 === (12))){
var state_23923__$1 = state_23923;
var statearr_23931_23957 = state_23923__$1;
(statearr_23931_23957[(2)] = null);

(statearr_23931_23957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (2))){
var state_23923__$1 = state_23923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23923__$1,(4),from);
} else {
if((state_val_23924 === (11))){
var inst_23912 = (state_23923[(2)]);
var state_23923__$1 = state_23923;
if(cljs.core.truth_(inst_23912)){
var statearr_23932_23958 = state_23923__$1;
(statearr_23932_23958[(1)] = (12));

} else {
var statearr_23933_23959 = state_23923__$1;
(statearr_23933_23959[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (9))){
var state_23923__$1 = state_23923;
var statearr_23934_23960 = state_23923__$1;
(statearr_23934_23960[(2)] = null);

(statearr_23934_23960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (5))){
var state_23923__$1 = state_23923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23935_23961 = state_23923__$1;
(statearr_23935_23961[(1)] = (8));

} else {
var statearr_23936_23962 = state_23923__$1;
(statearr_23936_23962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (14))){
var inst_23917 = (state_23923[(2)]);
var state_23923__$1 = state_23923;
var statearr_23937_23963 = state_23923__$1;
(statearr_23937_23963[(2)] = inst_23917);

(statearr_23937_23963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (10))){
var inst_23909 = (state_23923[(2)]);
var state_23923__$1 = state_23923;
var statearr_23938_23964 = state_23923__$1;
(statearr_23938_23964[(2)] = inst_23909);

(statearr_23938_23964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23924 === (8))){
var inst_23906 = cljs.core.async.close_BANG_.call(null,to);
var state_23923__$1 = state_23923;
var statearr_23939_23965 = state_23923__$1;
(statearr_23939_23965[(2)] = inst_23906);

(statearr_23939_23965[(1)] = (10));


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
});})(c__18942__auto___23951))
;
return ((function (switch__18921__auto__,c__18942__auto___23951){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_23943 = [null,null,null,null,null,null,null,null];
(statearr_23943[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_23943[(1)] = (1));

return statearr_23943;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_23923){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_23923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e23944){if((e23944 instanceof Object)){
var ex__18925__auto__ = e23944;
var statearr_23945_23966 = state_23923;
(statearr_23945_23966[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23967 = state_23923;
state_23923 = G__23967;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_23923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_23923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___23951))
})();
var state__18944__auto__ = (function (){var statearr_23946 = f__18943__auto__.call(null);
(statearr_23946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___23951);

return statearr_23946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___23951))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24151){
var vec__24152 = p__24151;
var v = cljs.core.nth.call(null,vec__24152,(0),null);
var p = cljs.core.nth.call(null,vec__24152,(1),null);
var job = vec__24152;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18942__auto___24334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___24334,res,vec__24152,v,p,job,jobs,results){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___24334,res,vec__24152,v,p,job,jobs,results){
return (function (state_24157){
var state_val_24158 = (state_24157[(1)]);
if((state_val_24158 === (1))){
var state_24157__$1 = state_24157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24157__$1,(2),res,v);
} else {
if((state_val_24158 === (2))){
var inst_24154 = (state_24157[(2)]);
var inst_24155 = cljs.core.async.close_BANG_.call(null,res);
var state_24157__$1 = (function (){var statearr_24159 = state_24157;
(statearr_24159[(7)] = inst_24154);

return statearr_24159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24157__$1,inst_24155);
} else {
return null;
}
}
});})(c__18942__auto___24334,res,vec__24152,v,p,job,jobs,results))
;
return ((function (switch__18921__auto__,c__18942__auto___24334,res,vec__24152,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0 = (function (){
var statearr_24163 = [null,null,null,null,null,null,null,null];
(statearr_24163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__);

(statearr_24163[(1)] = (1));

return statearr_24163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1 = (function (state_24157){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24164){if((e24164 instanceof Object)){
var ex__18925__auto__ = e24164;
var statearr_24165_24335 = state_24157;
(statearr_24165_24335[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24336 = state_24157;
state_24157 = G__24336;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = function(state_24157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1.call(this,state_24157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___24334,res,vec__24152,v,p,job,jobs,results))
})();
var state__18944__auto__ = (function (){var statearr_24166 = f__18943__auto__.call(null);
(statearr_24166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___24334);

return statearr_24166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___24334,res,vec__24152,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24167){
var vec__24168 = p__24167;
var v = cljs.core.nth.call(null,vec__24168,(0),null);
var p = cljs.core.nth.call(null,vec__24168,(1),null);
var job = vec__24168;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___24337 = n;
var __24338 = (0);
while(true){
if((__24338 < n__17729__auto___24337)){
var G__24169_24339 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24169_24339) {
case "compute":
var c__18942__auto___24341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24338,c__18942__auto___24341,G__24169_24339,n__17729__auto___24337,jobs,results,process,async){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (__24338,c__18942__auto___24341,G__24169_24339,n__17729__auto___24337,jobs,results,process,async){
return (function (state_24182){
var state_val_24183 = (state_24182[(1)]);
if((state_val_24183 === (1))){
var state_24182__$1 = state_24182;
var statearr_24184_24342 = state_24182__$1;
(statearr_24184_24342[(2)] = null);

(statearr_24184_24342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24183 === (2))){
var state_24182__$1 = state_24182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24182__$1,(4),jobs);
} else {
if((state_val_24183 === (3))){
var inst_24180 = (state_24182[(2)]);
var state_24182__$1 = state_24182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24182__$1,inst_24180);
} else {
if((state_val_24183 === (4))){
var inst_24172 = (state_24182[(2)]);
var inst_24173 = process.call(null,inst_24172);
var state_24182__$1 = state_24182;
if(cljs.core.truth_(inst_24173)){
var statearr_24185_24343 = state_24182__$1;
(statearr_24185_24343[(1)] = (5));

} else {
var statearr_24186_24344 = state_24182__$1;
(statearr_24186_24344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24183 === (5))){
var state_24182__$1 = state_24182;
var statearr_24187_24345 = state_24182__$1;
(statearr_24187_24345[(2)] = null);

(statearr_24187_24345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24183 === (6))){
var state_24182__$1 = state_24182;
var statearr_24188_24346 = state_24182__$1;
(statearr_24188_24346[(2)] = null);

(statearr_24188_24346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24183 === (7))){
var inst_24178 = (state_24182[(2)]);
var state_24182__$1 = state_24182;
var statearr_24189_24347 = state_24182__$1;
(statearr_24189_24347[(2)] = inst_24178);

(statearr_24189_24347[(1)] = (3));


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
});})(__24338,c__18942__auto___24341,G__24169_24339,n__17729__auto___24337,jobs,results,process,async))
;
return ((function (__24338,switch__18921__auto__,c__18942__auto___24341,G__24169_24339,n__17729__auto___24337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0 = (function (){
var statearr_24193 = [null,null,null,null,null,null,null];
(statearr_24193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__);

(statearr_24193[(1)] = (1));

return statearr_24193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1 = (function (state_24182){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24194){if((e24194 instanceof Object)){
var ex__18925__auto__ = e24194;
var statearr_24195_24348 = state_24182;
(statearr_24195_24348[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24349 = state_24182;
state_24182 = G__24349;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = function(state_24182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1.call(this,state_24182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__;
})()
;})(__24338,switch__18921__auto__,c__18942__auto___24341,G__24169_24339,n__17729__auto___24337,jobs,results,process,async))
})();
var state__18944__auto__ = (function (){var statearr_24196 = f__18943__auto__.call(null);
(statearr_24196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___24341);

return statearr_24196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(__24338,c__18942__auto___24341,G__24169_24339,n__17729__auto___24337,jobs,results,process,async))
);


break;
case "async":
var c__18942__auto___24350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24338,c__18942__auto___24350,G__24169_24339,n__17729__auto___24337,jobs,results,process,async){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (__24338,c__18942__auto___24350,G__24169_24339,n__17729__auto___24337,jobs,results,process,async){
return (function (state_24209){
var state_val_24210 = (state_24209[(1)]);
if((state_val_24210 === (1))){
var state_24209__$1 = state_24209;
var statearr_24211_24351 = state_24209__$1;
(statearr_24211_24351[(2)] = null);

(statearr_24211_24351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (2))){
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(4),jobs);
} else {
if((state_val_24210 === (3))){
var inst_24207 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24209__$1,inst_24207);
} else {
if((state_val_24210 === (4))){
var inst_24199 = (state_24209[(2)]);
var inst_24200 = async.call(null,inst_24199);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24200)){
var statearr_24212_24352 = state_24209__$1;
(statearr_24212_24352[(1)] = (5));

} else {
var statearr_24213_24353 = state_24209__$1;
(statearr_24213_24353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (5))){
var state_24209__$1 = state_24209;
var statearr_24214_24354 = state_24209__$1;
(statearr_24214_24354[(2)] = null);

(statearr_24214_24354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (6))){
var state_24209__$1 = state_24209;
var statearr_24215_24355 = state_24209__$1;
(statearr_24215_24355[(2)] = null);

(statearr_24215_24355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (7))){
var inst_24205 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24216_24356 = state_24209__$1;
(statearr_24216_24356[(2)] = inst_24205);

(statearr_24216_24356[(1)] = (3));


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
});})(__24338,c__18942__auto___24350,G__24169_24339,n__17729__auto___24337,jobs,results,process,async))
;
return ((function (__24338,switch__18921__auto__,c__18942__auto___24350,G__24169_24339,n__17729__auto___24337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0 = (function (){
var statearr_24220 = [null,null,null,null,null,null,null];
(statearr_24220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__);

(statearr_24220[(1)] = (1));

return statearr_24220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1 = (function (state_24209){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24221){if((e24221 instanceof Object)){
var ex__18925__auto__ = e24221;
var statearr_24222_24357 = state_24209;
(statearr_24222_24357[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24358 = state_24209;
state_24209 = G__24358;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = function(state_24209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1.call(this,state_24209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__;
})()
;})(__24338,switch__18921__auto__,c__18942__auto___24350,G__24169_24339,n__17729__auto___24337,jobs,results,process,async))
})();
var state__18944__auto__ = (function (){var statearr_24223 = f__18943__auto__.call(null);
(statearr_24223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___24350);

return statearr_24223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(__24338,c__18942__auto___24350,G__24169_24339,n__17729__auto___24337,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24359 = (__24338 + (1));
__24338 = G__24359;
continue;
} else {
}
break;
}

var c__18942__auto___24360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___24360,jobs,results,process,async){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___24360,jobs,results,process,async){
return (function (state_24245){
var state_val_24246 = (state_24245[(1)]);
if((state_val_24246 === (1))){
var state_24245__$1 = state_24245;
var statearr_24247_24361 = state_24245__$1;
(statearr_24247_24361[(2)] = null);

(statearr_24247_24361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (2))){
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24245__$1,(4),from);
} else {
if((state_val_24246 === (3))){
var inst_24243 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24245__$1,inst_24243);
} else {
if((state_val_24246 === (4))){
var inst_24226 = (state_24245[(7)]);
var inst_24226__$1 = (state_24245[(2)]);
var inst_24227 = (inst_24226__$1 == null);
var state_24245__$1 = (function (){var statearr_24248 = state_24245;
(statearr_24248[(7)] = inst_24226__$1);

return statearr_24248;
})();
if(cljs.core.truth_(inst_24227)){
var statearr_24249_24362 = state_24245__$1;
(statearr_24249_24362[(1)] = (5));

} else {
var statearr_24250_24363 = state_24245__$1;
(statearr_24250_24363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (5))){
var inst_24229 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24245__$1 = state_24245;
var statearr_24251_24364 = state_24245__$1;
(statearr_24251_24364[(2)] = inst_24229);

(statearr_24251_24364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (6))){
var inst_24226 = (state_24245[(7)]);
var inst_24231 = (state_24245[(8)]);
var inst_24231__$1 = cljs.core.async.chan.call(null,(1));
var inst_24232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24233 = [inst_24226,inst_24231__$1];
var inst_24234 = (new cljs.core.PersistentVector(null,2,(5),inst_24232,inst_24233,null));
var state_24245__$1 = (function (){var statearr_24252 = state_24245;
(statearr_24252[(8)] = inst_24231__$1);

return statearr_24252;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24245__$1,(8),jobs,inst_24234);
} else {
if((state_val_24246 === (7))){
var inst_24241 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24253_24365 = state_24245__$1;
(statearr_24253_24365[(2)] = inst_24241);

(statearr_24253_24365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (8))){
var inst_24231 = (state_24245[(8)]);
var inst_24236 = (state_24245[(2)]);
var state_24245__$1 = (function (){var statearr_24254 = state_24245;
(statearr_24254[(9)] = inst_24236);

return statearr_24254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24245__$1,(9),results,inst_24231);
} else {
if((state_val_24246 === (9))){
var inst_24238 = (state_24245[(2)]);
var state_24245__$1 = (function (){var statearr_24255 = state_24245;
(statearr_24255[(10)] = inst_24238);

return statearr_24255;
})();
var statearr_24256_24366 = state_24245__$1;
(statearr_24256_24366[(2)] = null);

(statearr_24256_24366[(1)] = (2));


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
});})(c__18942__auto___24360,jobs,results,process,async))
;
return ((function (switch__18921__auto__,c__18942__auto___24360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0 = (function (){
var statearr_24260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__);

(statearr_24260[(1)] = (1));

return statearr_24260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1 = (function (state_24245){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24261){if((e24261 instanceof Object)){
var ex__18925__auto__ = e24261;
var statearr_24262_24367 = state_24245;
(statearr_24262_24367[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24368 = state_24245;
state_24245 = G__24368;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = function(state_24245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1.call(this,state_24245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___24360,jobs,results,process,async))
})();
var state__18944__auto__ = (function (){var statearr_24263 = f__18943__auto__.call(null);
(statearr_24263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___24360);

return statearr_24263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___24360,jobs,results,process,async))
);


var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__,jobs,results,process,async){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__,jobs,results,process,async){
return (function (state_24301){
var state_val_24302 = (state_24301[(1)]);
if((state_val_24302 === (7))){
var inst_24297 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24303_24369 = state_24301__$1;
(statearr_24303_24369[(2)] = inst_24297);

(statearr_24303_24369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (20))){
var state_24301__$1 = state_24301;
var statearr_24304_24370 = state_24301__$1;
(statearr_24304_24370[(2)] = null);

(statearr_24304_24370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (1))){
var state_24301__$1 = state_24301;
var statearr_24305_24371 = state_24301__$1;
(statearr_24305_24371[(2)] = null);

(statearr_24305_24371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (4))){
var inst_24266 = (state_24301[(7)]);
var inst_24266__$1 = (state_24301[(2)]);
var inst_24267 = (inst_24266__$1 == null);
var state_24301__$1 = (function (){var statearr_24306 = state_24301;
(statearr_24306[(7)] = inst_24266__$1);

return statearr_24306;
})();
if(cljs.core.truth_(inst_24267)){
var statearr_24307_24372 = state_24301__$1;
(statearr_24307_24372[(1)] = (5));

} else {
var statearr_24308_24373 = state_24301__$1;
(statearr_24308_24373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (15))){
var inst_24279 = (state_24301[(8)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24301__$1,(18),to,inst_24279);
} else {
if((state_val_24302 === (21))){
var inst_24292 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24309_24374 = state_24301__$1;
(statearr_24309_24374[(2)] = inst_24292);

(statearr_24309_24374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (13))){
var inst_24294 = (state_24301[(2)]);
var state_24301__$1 = (function (){var statearr_24310 = state_24301;
(statearr_24310[(9)] = inst_24294);

return statearr_24310;
})();
var statearr_24311_24375 = state_24301__$1;
(statearr_24311_24375[(2)] = null);

(statearr_24311_24375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (6))){
var inst_24266 = (state_24301[(7)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24301__$1,(11),inst_24266);
} else {
if((state_val_24302 === (17))){
var inst_24287 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24287)){
var statearr_24312_24376 = state_24301__$1;
(statearr_24312_24376[(1)] = (19));

} else {
var statearr_24313_24377 = state_24301__$1;
(statearr_24313_24377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (3))){
var inst_24299 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24301__$1,inst_24299);
} else {
if((state_val_24302 === (12))){
var inst_24276 = (state_24301[(10)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24301__$1,(14),inst_24276);
} else {
if((state_val_24302 === (2))){
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24301__$1,(4),results);
} else {
if((state_val_24302 === (19))){
var state_24301__$1 = state_24301;
var statearr_24314_24378 = state_24301__$1;
(statearr_24314_24378[(2)] = null);

(statearr_24314_24378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (11))){
var inst_24276 = (state_24301[(2)]);
var state_24301__$1 = (function (){var statearr_24315 = state_24301;
(statearr_24315[(10)] = inst_24276);

return statearr_24315;
})();
var statearr_24316_24379 = state_24301__$1;
(statearr_24316_24379[(2)] = null);

(statearr_24316_24379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (9))){
var state_24301__$1 = state_24301;
var statearr_24317_24380 = state_24301__$1;
(statearr_24317_24380[(2)] = null);

(statearr_24317_24380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (5))){
var state_24301__$1 = state_24301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24318_24381 = state_24301__$1;
(statearr_24318_24381[(1)] = (8));

} else {
var statearr_24319_24382 = state_24301__$1;
(statearr_24319_24382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (14))){
var inst_24281 = (state_24301[(11)]);
var inst_24279 = (state_24301[(8)]);
var inst_24279__$1 = (state_24301[(2)]);
var inst_24280 = (inst_24279__$1 == null);
var inst_24281__$1 = cljs.core.not.call(null,inst_24280);
var state_24301__$1 = (function (){var statearr_24320 = state_24301;
(statearr_24320[(11)] = inst_24281__$1);

(statearr_24320[(8)] = inst_24279__$1);

return statearr_24320;
})();
if(inst_24281__$1){
var statearr_24321_24383 = state_24301__$1;
(statearr_24321_24383[(1)] = (15));

} else {
var statearr_24322_24384 = state_24301__$1;
(statearr_24322_24384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (16))){
var inst_24281 = (state_24301[(11)]);
var state_24301__$1 = state_24301;
var statearr_24323_24385 = state_24301__$1;
(statearr_24323_24385[(2)] = inst_24281);

(statearr_24323_24385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (10))){
var inst_24273 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24324_24386 = state_24301__$1;
(statearr_24324_24386[(2)] = inst_24273);

(statearr_24324_24386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (18))){
var inst_24284 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24325_24387 = state_24301__$1;
(statearr_24325_24387[(2)] = inst_24284);

(statearr_24325_24387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (8))){
var inst_24270 = cljs.core.async.close_BANG_.call(null,to);
var state_24301__$1 = state_24301;
var statearr_24326_24388 = state_24301__$1;
(statearr_24326_24388[(2)] = inst_24270);

(statearr_24326_24388[(1)] = (10));


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
});})(c__18942__auto__,jobs,results,process,async))
;
return ((function (switch__18921__auto__,c__18942__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0 = (function (){
var statearr_24330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__);

(statearr_24330[(1)] = (1));

return statearr_24330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1 = (function (state_24301){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24331){if((e24331 instanceof Object)){
var ex__18925__auto__ = e24331;
var statearr_24332_24389 = state_24301;
(statearr_24332_24389[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24390 = state_24301;
state_24301 = G__24390;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__ = function(state_24301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1.call(this,state_24301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__,jobs,results,process,async))
})();
var state__18944__auto__ = (function (){var statearr_24333 = f__18943__auto__.call(null);
(statearr_24333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_24333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__,jobs,results,process,async))
);

return c__18942__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24391 = [];
var len__17884__auto___24394 = arguments.length;
var i__17885__auto___24395 = (0);
while(true){
if((i__17885__auto___24395 < len__17884__auto___24394)){
args24391.push((arguments[i__17885__auto___24395]));

var G__24396 = (i__17885__auto___24395 + (1));
i__17885__auto___24395 = G__24396;
continue;
} else {
}
break;
}

var G__24393 = args24391.length;
switch (G__24393) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24391.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24398 = [];
var len__17884__auto___24401 = arguments.length;
var i__17885__auto___24402 = (0);
while(true){
if((i__17885__auto___24402 < len__17884__auto___24401)){
args24398.push((arguments[i__17885__auto___24402]));

var G__24403 = (i__17885__auto___24402 + (1));
i__17885__auto___24402 = G__24403;
continue;
} else {
}
break;
}

var G__24400 = args24398.length;
switch (G__24400) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24398.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24405 = [];
var len__17884__auto___24458 = arguments.length;
var i__17885__auto___24459 = (0);
while(true){
if((i__17885__auto___24459 < len__17884__auto___24458)){
args24405.push((arguments[i__17885__auto___24459]));

var G__24460 = (i__17885__auto___24459 + (1));
i__17885__auto___24459 = G__24460;
continue;
} else {
}
break;
}

var G__24407 = args24405.length;
switch (G__24407) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24405.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18942__auto___24462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___24462,tc,fc){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___24462,tc,fc){
return (function (state_24433){
var state_val_24434 = (state_24433[(1)]);
if((state_val_24434 === (7))){
var inst_24429 = (state_24433[(2)]);
var state_24433__$1 = state_24433;
var statearr_24435_24463 = state_24433__$1;
(statearr_24435_24463[(2)] = inst_24429);

(statearr_24435_24463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (1))){
var state_24433__$1 = state_24433;
var statearr_24436_24464 = state_24433__$1;
(statearr_24436_24464[(2)] = null);

(statearr_24436_24464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (4))){
var inst_24410 = (state_24433[(7)]);
var inst_24410__$1 = (state_24433[(2)]);
var inst_24411 = (inst_24410__$1 == null);
var state_24433__$1 = (function (){var statearr_24437 = state_24433;
(statearr_24437[(7)] = inst_24410__$1);

return statearr_24437;
})();
if(cljs.core.truth_(inst_24411)){
var statearr_24438_24465 = state_24433__$1;
(statearr_24438_24465[(1)] = (5));

} else {
var statearr_24439_24466 = state_24433__$1;
(statearr_24439_24466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (13))){
var state_24433__$1 = state_24433;
var statearr_24440_24467 = state_24433__$1;
(statearr_24440_24467[(2)] = null);

(statearr_24440_24467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (6))){
var inst_24410 = (state_24433[(7)]);
var inst_24416 = p.call(null,inst_24410);
var state_24433__$1 = state_24433;
if(cljs.core.truth_(inst_24416)){
var statearr_24441_24468 = state_24433__$1;
(statearr_24441_24468[(1)] = (9));

} else {
var statearr_24442_24469 = state_24433__$1;
(statearr_24442_24469[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (3))){
var inst_24431 = (state_24433[(2)]);
var state_24433__$1 = state_24433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24433__$1,inst_24431);
} else {
if((state_val_24434 === (12))){
var state_24433__$1 = state_24433;
var statearr_24443_24470 = state_24433__$1;
(statearr_24443_24470[(2)] = null);

(statearr_24443_24470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (2))){
var state_24433__$1 = state_24433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24433__$1,(4),ch);
} else {
if((state_val_24434 === (11))){
var inst_24410 = (state_24433[(7)]);
var inst_24420 = (state_24433[(2)]);
var state_24433__$1 = state_24433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24433__$1,(8),inst_24420,inst_24410);
} else {
if((state_val_24434 === (9))){
var state_24433__$1 = state_24433;
var statearr_24444_24471 = state_24433__$1;
(statearr_24444_24471[(2)] = tc);

(statearr_24444_24471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (5))){
var inst_24413 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24414 = cljs.core.async.close_BANG_.call(null,fc);
var state_24433__$1 = (function (){var statearr_24445 = state_24433;
(statearr_24445[(8)] = inst_24413);

return statearr_24445;
})();
var statearr_24446_24472 = state_24433__$1;
(statearr_24446_24472[(2)] = inst_24414);

(statearr_24446_24472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (14))){
var inst_24427 = (state_24433[(2)]);
var state_24433__$1 = state_24433;
var statearr_24447_24473 = state_24433__$1;
(statearr_24447_24473[(2)] = inst_24427);

(statearr_24447_24473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (10))){
var state_24433__$1 = state_24433;
var statearr_24448_24474 = state_24433__$1;
(statearr_24448_24474[(2)] = fc);

(statearr_24448_24474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (8))){
var inst_24422 = (state_24433[(2)]);
var state_24433__$1 = state_24433;
if(cljs.core.truth_(inst_24422)){
var statearr_24449_24475 = state_24433__$1;
(statearr_24449_24475[(1)] = (12));

} else {
var statearr_24450_24476 = state_24433__$1;
(statearr_24450_24476[(1)] = (13));

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
});})(c__18942__auto___24462,tc,fc))
;
return ((function (switch__18921__auto__,c__18942__auto___24462,tc,fc){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_24454 = [null,null,null,null,null,null,null,null,null];
(statearr_24454[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_24454[(1)] = (1));

return statearr_24454;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_24433){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24455){if((e24455 instanceof Object)){
var ex__18925__auto__ = e24455;
var statearr_24456_24477 = state_24433;
(statearr_24456_24477[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24478 = state_24433;
state_24433 = G__24478;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_24433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_24433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___24462,tc,fc))
})();
var state__18944__auto__ = (function (){var statearr_24457 = f__18943__auto__.call(null);
(statearr_24457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___24462);

return statearr_24457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___24462,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__){
return (function (state_24542){
var state_val_24543 = (state_24542[(1)]);
if((state_val_24543 === (7))){
var inst_24538 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
var statearr_24544_24565 = state_24542__$1;
(statearr_24544_24565[(2)] = inst_24538);

(statearr_24544_24565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (1))){
var inst_24522 = init;
var state_24542__$1 = (function (){var statearr_24545 = state_24542;
(statearr_24545[(7)] = inst_24522);

return statearr_24545;
})();
var statearr_24546_24566 = state_24542__$1;
(statearr_24546_24566[(2)] = null);

(statearr_24546_24566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (4))){
var inst_24525 = (state_24542[(8)]);
var inst_24525__$1 = (state_24542[(2)]);
var inst_24526 = (inst_24525__$1 == null);
var state_24542__$1 = (function (){var statearr_24547 = state_24542;
(statearr_24547[(8)] = inst_24525__$1);

return statearr_24547;
})();
if(cljs.core.truth_(inst_24526)){
var statearr_24548_24567 = state_24542__$1;
(statearr_24548_24567[(1)] = (5));

} else {
var statearr_24549_24568 = state_24542__$1;
(statearr_24549_24568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (6))){
var inst_24522 = (state_24542[(7)]);
var inst_24525 = (state_24542[(8)]);
var inst_24529 = (state_24542[(9)]);
var inst_24529__$1 = f.call(null,inst_24522,inst_24525);
var inst_24530 = cljs.core.reduced_QMARK_.call(null,inst_24529__$1);
var state_24542__$1 = (function (){var statearr_24550 = state_24542;
(statearr_24550[(9)] = inst_24529__$1);

return statearr_24550;
})();
if(inst_24530){
var statearr_24551_24569 = state_24542__$1;
(statearr_24551_24569[(1)] = (8));

} else {
var statearr_24552_24570 = state_24542__$1;
(statearr_24552_24570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (3))){
var inst_24540 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24542__$1,inst_24540);
} else {
if((state_val_24543 === (2))){
var state_24542__$1 = state_24542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24542__$1,(4),ch);
} else {
if((state_val_24543 === (9))){
var inst_24529 = (state_24542[(9)]);
var inst_24522 = inst_24529;
var state_24542__$1 = (function (){var statearr_24553 = state_24542;
(statearr_24553[(7)] = inst_24522);

return statearr_24553;
})();
var statearr_24554_24571 = state_24542__$1;
(statearr_24554_24571[(2)] = null);

(statearr_24554_24571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (5))){
var inst_24522 = (state_24542[(7)]);
var state_24542__$1 = state_24542;
var statearr_24555_24572 = state_24542__$1;
(statearr_24555_24572[(2)] = inst_24522);

(statearr_24555_24572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (10))){
var inst_24536 = (state_24542[(2)]);
var state_24542__$1 = state_24542;
var statearr_24556_24573 = state_24542__$1;
(statearr_24556_24573[(2)] = inst_24536);

(statearr_24556_24573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24543 === (8))){
var inst_24529 = (state_24542[(9)]);
var inst_24532 = cljs.core.deref.call(null,inst_24529);
var state_24542__$1 = state_24542;
var statearr_24557_24574 = state_24542__$1;
(statearr_24557_24574[(2)] = inst_24532);

(statearr_24557_24574[(1)] = (10));


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
});})(c__18942__auto__))
;
return ((function (switch__18921__auto__,c__18942__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18922__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18922__auto____0 = (function (){
var statearr_24561 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24561[(0)] = cljs$core$async$reduce_$_state_machine__18922__auto__);

(statearr_24561[(1)] = (1));

return statearr_24561;
});
var cljs$core$async$reduce_$_state_machine__18922__auto____1 = (function (state_24542){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24562){if((e24562 instanceof Object)){
var ex__18925__auto__ = e24562;
var statearr_24563_24575 = state_24542;
(statearr_24563_24575[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24576 = state_24542;
state_24542 = G__24576;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18922__auto__ = function(state_24542){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18922__auto____1.call(this,state_24542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18922__auto____0;
cljs$core$async$reduce_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18922__auto____1;
return cljs$core$async$reduce_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__))
})();
var state__18944__auto__ = (function (){var statearr_24564 = f__18943__auto__.call(null);
(statearr_24564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_24564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__))
);

return c__18942__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24577 = [];
var len__17884__auto___24629 = arguments.length;
var i__17885__auto___24630 = (0);
while(true){
if((i__17885__auto___24630 < len__17884__auto___24629)){
args24577.push((arguments[i__17885__auto___24630]));

var G__24631 = (i__17885__auto___24630 + (1));
i__17885__auto___24630 = G__24631;
continue;
} else {
}
break;
}

var G__24579 = args24577.length;
switch (G__24579) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24577.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__){
return (function (state_24604){
var state_val_24605 = (state_24604[(1)]);
if((state_val_24605 === (7))){
var inst_24586 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24606_24633 = state_24604__$1;
(statearr_24606_24633[(2)] = inst_24586);

(statearr_24606_24633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (1))){
var inst_24580 = cljs.core.seq.call(null,coll);
var inst_24581 = inst_24580;
var state_24604__$1 = (function (){var statearr_24607 = state_24604;
(statearr_24607[(7)] = inst_24581);

return statearr_24607;
})();
var statearr_24608_24634 = state_24604__$1;
(statearr_24608_24634[(2)] = null);

(statearr_24608_24634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (4))){
var inst_24581 = (state_24604[(7)]);
var inst_24584 = cljs.core.first.call(null,inst_24581);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24604__$1,(7),ch,inst_24584);
} else {
if((state_val_24605 === (13))){
var inst_24598 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24609_24635 = state_24604__$1;
(statearr_24609_24635[(2)] = inst_24598);

(statearr_24609_24635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (6))){
var inst_24589 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24589)){
var statearr_24610_24636 = state_24604__$1;
(statearr_24610_24636[(1)] = (8));

} else {
var statearr_24611_24637 = state_24604__$1;
(statearr_24611_24637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (3))){
var inst_24602 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24604__$1,inst_24602);
} else {
if((state_val_24605 === (12))){
var state_24604__$1 = state_24604;
var statearr_24612_24638 = state_24604__$1;
(statearr_24612_24638[(2)] = null);

(statearr_24612_24638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (2))){
var inst_24581 = (state_24604[(7)]);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24581)){
var statearr_24613_24639 = state_24604__$1;
(statearr_24613_24639[(1)] = (4));

} else {
var statearr_24614_24640 = state_24604__$1;
(statearr_24614_24640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (11))){
var inst_24595 = cljs.core.async.close_BANG_.call(null,ch);
var state_24604__$1 = state_24604;
var statearr_24615_24641 = state_24604__$1;
(statearr_24615_24641[(2)] = inst_24595);

(statearr_24615_24641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (9))){
var state_24604__$1 = state_24604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24616_24642 = state_24604__$1;
(statearr_24616_24642[(1)] = (11));

} else {
var statearr_24617_24643 = state_24604__$1;
(statearr_24617_24643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (5))){
var inst_24581 = (state_24604[(7)]);
var state_24604__$1 = state_24604;
var statearr_24618_24644 = state_24604__$1;
(statearr_24618_24644[(2)] = inst_24581);

(statearr_24618_24644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (10))){
var inst_24600 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24619_24645 = state_24604__$1;
(statearr_24619_24645[(2)] = inst_24600);

(statearr_24619_24645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (8))){
var inst_24581 = (state_24604[(7)]);
var inst_24591 = cljs.core.next.call(null,inst_24581);
var inst_24581__$1 = inst_24591;
var state_24604__$1 = (function (){var statearr_24620 = state_24604;
(statearr_24620[(7)] = inst_24581__$1);

return statearr_24620;
})();
var statearr_24621_24646 = state_24604__$1;
(statearr_24621_24646[(2)] = null);

(statearr_24621_24646[(1)] = (2));


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
});})(c__18942__auto__))
;
return ((function (switch__18921__auto__,c__18942__auto__){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_24625 = [null,null,null,null,null,null,null,null];
(statearr_24625[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_24625[(1)] = (1));

return statearr_24625;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_24604){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_24604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e24626){if((e24626 instanceof Object)){
var ex__18925__auto__ = e24626;
var statearr_24627_24647 = state_24604;
(statearr_24627_24647[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24648 = state_24604;
state_24604 = G__24648;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_24604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_24604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__))
})();
var state__18944__auto__ = (function (){var statearr_24628 = f__18943__auto__.call(null);
(statearr_24628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_24628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__))
);

return c__18942__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24870 = (function (mult,ch,cs,meta24871){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24871 = meta24871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24872,meta24871__$1){
var self__ = this;
var _24872__$1 = this;
return (new cljs.core.async.t_cljs$core$async24870(self__.mult,self__.ch,self__.cs,meta24871__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24872){
var self__ = this;
var _24872__$1 = this;
return self__.meta24871;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24871","meta24871",-823792119,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24870";

cljs.core.async.t_cljs$core$async24870.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24870");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24870 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24870(mult__$1,ch__$1,cs__$1,meta24871){
return (new cljs.core.async.t_cljs$core$async24870(mult__$1,ch__$1,cs__$1,meta24871));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24870(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18942__auto___25091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___25091,cs,m,dchan,dctr,done){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___25091,cs,m,dchan,dctr,done){
return (function (state_25003){
var state_val_25004 = (state_25003[(1)]);
if((state_val_25004 === (7))){
var inst_24999 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25005_25092 = state_25003__$1;
(statearr_25005_25092[(2)] = inst_24999);

(statearr_25005_25092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (20))){
var inst_24904 = (state_25003[(7)]);
var inst_24914 = cljs.core.first.call(null,inst_24904);
var inst_24915 = cljs.core.nth.call(null,inst_24914,(0),null);
var inst_24916 = cljs.core.nth.call(null,inst_24914,(1),null);
var state_25003__$1 = (function (){var statearr_25006 = state_25003;
(statearr_25006[(8)] = inst_24915);

return statearr_25006;
})();
if(cljs.core.truth_(inst_24916)){
var statearr_25007_25093 = state_25003__$1;
(statearr_25007_25093[(1)] = (22));

} else {
var statearr_25008_25094 = state_25003__$1;
(statearr_25008_25094[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (27))){
var inst_24946 = (state_25003[(9)]);
var inst_24875 = (state_25003[(10)]);
var inst_24944 = (state_25003[(11)]);
var inst_24951 = (state_25003[(12)]);
var inst_24951__$1 = cljs.core._nth.call(null,inst_24944,inst_24946);
var inst_24952 = cljs.core.async.put_BANG_.call(null,inst_24951__$1,inst_24875,done);
var state_25003__$1 = (function (){var statearr_25009 = state_25003;
(statearr_25009[(12)] = inst_24951__$1);

return statearr_25009;
})();
if(cljs.core.truth_(inst_24952)){
var statearr_25010_25095 = state_25003__$1;
(statearr_25010_25095[(1)] = (30));

} else {
var statearr_25011_25096 = state_25003__$1;
(statearr_25011_25096[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (1))){
var state_25003__$1 = state_25003;
var statearr_25012_25097 = state_25003__$1;
(statearr_25012_25097[(2)] = null);

(statearr_25012_25097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (24))){
var inst_24904 = (state_25003[(7)]);
var inst_24921 = (state_25003[(2)]);
var inst_24922 = cljs.core.next.call(null,inst_24904);
var inst_24884 = inst_24922;
var inst_24885 = null;
var inst_24886 = (0);
var inst_24887 = (0);
var state_25003__$1 = (function (){var statearr_25013 = state_25003;
(statearr_25013[(13)] = inst_24887);

(statearr_25013[(14)] = inst_24885);

(statearr_25013[(15)] = inst_24884);

(statearr_25013[(16)] = inst_24921);

(statearr_25013[(17)] = inst_24886);

return statearr_25013;
})();
var statearr_25014_25098 = state_25003__$1;
(statearr_25014_25098[(2)] = null);

(statearr_25014_25098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (39))){
var state_25003__$1 = state_25003;
var statearr_25018_25099 = state_25003__$1;
(statearr_25018_25099[(2)] = null);

(statearr_25018_25099[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (4))){
var inst_24875 = (state_25003[(10)]);
var inst_24875__$1 = (state_25003[(2)]);
var inst_24876 = (inst_24875__$1 == null);
var state_25003__$1 = (function (){var statearr_25019 = state_25003;
(statearr_25019[(10)] = inst_24875__$1);

return statearr_25019;
})();
if(cljs.core.truth_(inst_24876)){
var statearr_25020_25100 = state_25003__$1;
(statearr_25020_25100[(1)] = (5));

} else {
var statearr_25021_25101 = state_25003__$1;
(statearr_25021_25101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (15))){
var inst_24887 = (state_25003[(13)]);
var inst_24885 = (state_25003[(14)]);
var inst_24884 = (state_25003[(15)]);
var inst_24886 = (state_25003[(17)]);
var inst_24900 = (state_25003[(2)]);
var inst_24901 = (inst_24887 + (1));
var tmp25015 = inst_24885;
var tmp25016 = inst_24884;
var tmp25017 = inst_24886;
var inst_24884__$1 = tmp25016;
var inst_24885__$1 = tmp25015;
var inst_24886__$1 = tmp25017;
var inst_24887__$1 = inst_24901;
var state_25003__$1 = (function (){var statearr_25022 = state_25003;
(statearr_25022[(13)] = inst_24887__$1);

(statearr_25022[(14)] = inst_24885__$1);

(statearr_25022[(15)] = inst_24884__$1);

(statearr_25022[(18)] = inst_24900);

(statearr_25022[(17)] = inst_24886__$1);

return statearr_25022;
})();
var statearr_25023_25102 = state_25003__$1;
(statearr_25023_25102[(2)] = null);

(statearr_25023_25102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (21))){
var inst_24925 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25027_25103 = state_25003__$1;
(statearr_25027_25103[(2)] = inst_24925);

(statearr_25027_25103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (31))){
var inst_24951 = (state_25003[(12)]);
var inst_24955 = done.call(null,null);
var inst_24956 = cljs.core.async.untap_STAR_.call(null,m,inst_24951);
var state_25003__$1 = (function (){var statearr_25028 = state_25003;
(statearr_25028[(19)] = inst_24955);

return statearr_25028;
})();
var statearr_25029_25104 = state_25003__$1;
(statearr_25029_25104[(2)] = inst_24956);

(statearr_25029_25104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (32))){
var inst_24943 = (state_25003[(20)]);
var inst_24946 = (state_25003[(9)]);
var inst_24944 = (state_25003[(11)]);
var inst_24945 = (state_25003[(21)]);
var inst_24958 = (state_25003[(2)]);
var inst_24959 = (inst_24946 + (1));
var tmp25024 = inst_24943;
var tmp25025 = inst_24944;
var tmp25026 = inst_24945;
var inst_24943__$1 = tmp25024;
var inst_24944__$1 = tmp25025;
var inst_24945__$1 = tmp25026;
var inst_24946__$1 = inst_24959;
var state_25003__$1 = (function (){var statearr_25030 = state_25003;
(statearr_25030[(20)] = inst_24943__$1);

(statearr_25030[(9)] = inst_24946__$1);

(statearr_25030[(11)] = inst_24944__$1);

(statearr_25030[(22)] = inst_24958);

(statearr_25030[(21)] = inst_24945__$1);

return statearr_25030;
})();
var statearr_25031_25105 = state_25003__$1;
(statearr_25031_25105[(2)] = null);

(statearr_25031_25105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (40))){
var inst_24971 = (state_25003[(23)]);
var inst_24975 = done.call(null,null);
var inst_24976 = cljs.core.async.untap_STAR_.call(null,m,inst_24971);
var state_25003__$1 = (function (){var statearr_25032 = state_25003;
(statearr_25032[(24)] = inst_24975);

return statearr_25032;
})();
var statearr_25033_25106 = state_25003__$1;
(statearr_25033_25106[(2)] = inst_24976);

(statearr_25033_25106[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (33))){
var inst_24962 = (state_25003[(25)]);
var inst_24964 = cljs.core.chunked_seq_QMARK_.call(null,inst_24962);
var state_25003__$1 = state_25003;
if(inst_24964){
var statearr_25034_25107 = state_25003__$1;
(statearr_25034_25107[(1)] = (36));

} else {
var statearr_25035_25108 = state_25003__$1;
(statearr_25035_25108[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (13))){
var inst_24894 = (state_25003[(26)]);
var inst_24897 = cljs.core.async.close_BANG_.call(null,inst_24894);
var state_25003__$1 = state_25003;
var statearr_25036_25109 = state_25003__$1;
(statearr_25036_25109[(2)] = inst_24897);

(statearr_25036_25109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (22))){
var inst_24915 = (state_25003[(8)]);
var inst_24918 = cljs.core.async.close_BANG_.call(null,inst_24915);
var state_25003__$1 = state_25003;
var statearr_25037_25110 = state_25003__$1;
(statearr_25037_25110[(2)] = inst_24918);

(statearr_25037_25110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (36))){
var inst_24962 = (state_25003[(25)]);
var inst_24966 = cljs.core.chunk_first.call(null,inst_24962);
var inst_24967 = cljs.core.chunk_rest.call(null,inst_24962);
var inst_24968 = cljs.core.count.call(null,inst_24966);
var inst_24943 = inst_24967;
var inst_24944 = inst_24966;
var inst_24945 = inst_24968;
var inst_24946 = (0);
var state_25003__$1 = (function (){var statearr_25038 = state_25003;
(statearr_25038[(20)] = inst_24943);

(statearr_25038[(9)] = inst_24946);

(statearr_25038[(11)] = inst_24944);

(statearr_25038[(21)] = inst_24945);

return statearr_25038;
})();
var statearr_25039_25111 = state_25003__$1;
(statearr_25039_25111[(2)] = null);

(statearr_25039_25111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (41))){
var inst_24962 = (state_25003[(25)]);
var inst_24978 = (state_25003[(2)]);
var inst_24979 = cljs.core.next.call(null,inst_24962);
var inst_24943 = inst_24979;
var inst_24944 = null;
var inst_24945 = (0);
var inst_24946 = (0);
var state_25003__$1 = (function (){var statearr_25040 = state_25003;
(statearr_25040[(20)] = inst_24943);

(statearr_25040[(9)] = inst_24946);

(statearr_25040[(11)] = inst_24944);

(statearr_25040[(21)] = inst_24945);

(statearr_25040[(27)] = inst_24978);

return statearr_25040;
})();
var statearr_25041_25112 = state_25003__$1;
(statearr_25041_25112[(2)] = null);

(statearr_25041_25112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (43))){
var state_25003__$1 = state_25003;
var statearr_25042_25113 = state_25003__$1;
(statearr_25042_25113[(2)] = null);

(statearr_25042_25113[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (29))){
var inst_24987 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25043_25114 = state_25003__$1;
(statearr_25043_25114[(2)] = inst_24987);

(statearr_25043_25114[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (44))){
var inst_24996 = (state_25003[(2)]);
var state_25003__$1 = (function (){var statearr_25044 = state_25003;
(statearr_25044[(28)] = inst_24996);

return statearr_25044;
})();
var statearr_25045_25115 = state_25003__$1;
(statearr_25045_25115[(2)] = null);

(statearr_25045_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (6))){
var inst_24935 = (state_25003[(29)]);
var inst_24934 = cljs.core.deref.call(null,cs);
var inst_24935__$1 = cljs.core.keys.call(null,inst_24934);
var inst_24936 = cljs.core.count.call(null,inst_24935__$1);
var inst_24937 = cljs.core.reset_BANG_.call(null,dctr,inst_24936);
var inst_24942 = cljs.core.seq.call(null,inst_24935__$1);
var inst_24943 = inst_24942;
var inst_24944 = null;
var inst_24945 = (0);
var inst_24946 = (0);
var state_25003__$1 = (function (){var statearr_25046 = state_25003;
(statearr_25046[(20)] = inst_24943);

(statearr_25046[(9)] = inst_24946);

(statearr_25046[(11)] = inst_24944);

(statearr_25046[(29)] = inst_24935__$1);

(statearr_25046[(30)] = inst_24937);

(statearr_25046[(21)] = inst_24945);

return statearr_25046;
})();
var statearr_25047_25116 = state_25003__$1;
(statearr_25047_25116[(2)] = null);

(statearr_25047_25116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (28))){
var inst_24943 = (state_25003[(20)]);
var inst_24962 = (state_25003[(25)]);
var inst_24962__$1 = cljs.core.seq.call(null,inst_24943);
var state_25003__$1 = (function (){var statearr_25048 = state_25003;
(statearr_25048[(25)] = inst_24962__$1);

return statearr_25048;
})();
if(inst_24962__$1){
var statearr_25049_25117 = state_25003__$1;
(statearr_25049_25117[(1)] = (33));

} else {
var statearr_25050_25118 = state_25003__$1;
(statearr_25050_25118[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (25))){
var inst_24946 = (state_25003[(9)]);
var inst_24945 = (state_25003[(21)]);
var inst_24948 = (inst_24946 < inst_24945);
var inst_24949 = inst_24948;
var state_25003__$1 = state_25003;
if(cljs.core.truth_(inst_24949)){
var statearr_25051_25119 = state_25003__$1;
(statearr_25051_25119[(1)] = (27));

} else {
var statearr_25052_25120 = state_25003__$1;
(statearr_25052_25120[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (34))){
var state_25003__$1 = state_25003;
var statearr_25053_25121 = state_25003__$1;
(statearr_25053_25121[(2)] = null);

(statearr_25053_25121[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (17))){
var state_25003__$1 = state_25003;
var statearr_25054_25122 = state_25003__$1;
(statearr_25054_25122[(2)] = null);

(statearr_25054_25122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (3))){
var inst_25001 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25003__$1,inst_25001);
} else {
if((state_val_25004 === (12))){
var inst_24930 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25055_25123 = state_25003__$1;
(statearr_25055_25123[(2)] = inst_24930);

(statearr_25055_25123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (2))){
var state_25003__$1 = state_25003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25003__$1,(4),ch);
} else {
if((state_val_25004 === (23))){
var state_25003__$1 = state_25003;
var statearr_25056_25124 = state_25003__$1;
(statearr_25056_25124[(2)] = null);

(statearr_25056_25124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (35))){
var inst_24985 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25057_25125 = state_25003__$1;
(statearr_25057_25125[(2)] = inst_24985);

(statearr_25057_25125[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (19))){
var inst_24904 = (state_25003[(7)]);
var inst_24908 = cljs.core.chunk_first.call(null,inst_24904);
var inst_24909 = cljs.core.chunk_rest.call(null,inst_24904);
var inst_24910 = cljs.core.count.call(null,inst_24908);
var inst_24884 = inst_24909;
var inst_24885 = inst_24908;
var inst_24886 = inst_24910;
var inst_24887 = (0);
var state_25003__$1 = (function (){var statearr_25058 = state_25003;
(statearr_25058[(13)] = inst_24887);

(statearr_25058[(14)] = inst_24885);

(statearr_25058[(15)] = inst_24884);

(statearr_25058[(17)] = inst_24886);

return statearr_25058;
})();
var statearr_25059_25126 = state_25003__$1;
(statearr_25059_25126[(2)] = null);

(statearr_25059_25126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (11))){
var inst_24884 = (state_25003[(15)]);
var inst_24904 = (state_25003[(7)]);
var inst_24904__$1 = cljs.core.seq.call(null,inst_24884);
var state_25003__$1 = (function (){var statearr_25060 = state_25003;
(statearr_25060[(7)] = inst_24904__$1);

return statearr_25060;
})();
if(inst_24904__$1){
var statearr_25061_25127 = state_25003__$1;
(statearr_25061_25127[(1)] = (16));

} else {
var statearr_25062_25128 = state_25003__$1;
(statearr_25062_25128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (9))){
var inst_24932 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25063_25129 = state_25003__$1;
(statearr_25063_25129[(2)] = inst_24932);

(statearr_25063_25129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (5))){
var inst_24882 = cljs.core.deref.call(null,cs);
var inst_24883 = cljs.core.seq.call(null,inst_24882);
var inst_24884 = inst_24883;
var inst_24885 = null;
var inst_24886 = (0);
var inst_24887 = (0);
var state_25003__$1 = (function (){var statearr_25064 = state_25003;
(statearr_25064[(13)] = inst_24887);

(statearr_25064[(14)] = inst_24885);

(statearr_25064[(15)] = inst_24884);

(statearr_25064[(17)] = inst_24886);

return statearr_25064;
})();
var statearr_25065_25130 = state_25003__$1;
(statearr_25065_25130[(2)] = null);

(statearr_25065_25130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (14))){
var state_25003__$1 = state_25003;
var statearr_25066_25131 = state_25003__$1;
(statearr_25066_25131[(2)] = null);

(statearr_25066_25131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (45))){
var inst_24993 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25067_25132 = state_25003__$1;
(statearr_25067_25132[(2)] = inst_24993);

(statearr_25067_25132[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (26))){
var inst_24935 = (state_25003[(29)]);
var inst_24989 = (state_25003[(2)]);
var inst_24990 = cljs.core.seq.call(null,inst_24935);
var state_25003__$1 = (function (){var statearr_25068 = state_25003;
(statearr_25068[(31)] = inst_24989);

return statearr_25068;
})();
if(inst_24990){
var statearr_25069_25133 = state_25003__$1;
(statearr_25069_25133[(1)] = (42));

} else {
var statearr_25070_25134 = state_25003__$1;
(statearr_25070_25134[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (16))){
var inst_24904 = (state_25003[(7)]);
var inst_24906 = cljs.core.chunked_seq_QMARK_.call(null,inst_24904);
var state_25003__$1 = state_25003;
if(inst_24906){
var statearr_25071_25135 = state_25003__$1;
(statearr_25071_25135[(1)] = (19));

} else {
var statearr_25072_25136 = state_25003__$1;
(statearr_25072_25136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (38))){
var inst_24982 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25073_25137 = state_25003__$1;
(statearr_25073_25137[(2)] = inst_24982);

(statearr_25073_25137[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (30))){
var state_25003__$1 = state_25003;
var statearr_25074_25138 = state_25003__$1;
(statearr_25074_25138[(2)] = null);

(statearr_25074_25138[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (10))){
var inst_24887 = (state_25003[(13)]);
var inst_24885 = (state_25003[(14)]);
var inst_24893 = cljs.core._nth.call(null,inst_24885,inst_24887);
var inst_24894 = cljs.core.nth.call(null,inst_24893,(0),null);
var inst_24895 = cljs.core.nth.call(null,inst_24893,(1),null);
var state_25003__$1 = (function (){var statearr_25075 = state_25003;
(statearr_25075[(26)] = inst_24894);

return statearr_25075;
})();
if(cljs.core.truth_(inst_24895)){
var statearr_25076_25139 = state_25003__$1;
(statearr_25076_25139[(1)] = (13));

} else {
var statearr_25077_25140 = state_25003__$1;
(statearr_25077_25140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (18))){
var inst_24928 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25078_25141 = state_25003__$1;
(statearr_25078_25141[(2)] = inst_24928);

(statearr_25078_25141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (42))){
var state_25003__$1 = state_25003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25003__$1,(45),dchan);
} else {
if((state_val_25004 === (37))){
var inst_24875 = (state_25003[(10)]);
var inst_24962 = (state_25003[(25)]);
var inst_24971 = (state_25003[(23)]);
var inst_24971__$1 = cljs.core.first.call(null,inst_24962);
var inst_24972 = cljs.core.async.put_BANG_.call(null,inst_24971__$1,inst_24875,done);
var state_25003__$1 = (function (){var statearr_25079 = state_25003;
(statearr_25079[(23)] = inst_24971__$1);

return statearr_25079;
})();
if(cljs.core.truth_(inst_24972)){
var statearr_25080_25142 = state_25003__$1;
(statearr_25080_25142[(1)] = (39));

} else {
var statearr_25081_25143 = state_25003__$1;
(statearr_25081_25143[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (8))){
var inst_24887 = (state_25003[(13)]);
var inst_24886 = (state_25003[(17)]);
var inst_24889 = (inst_24887 < inst_24886);
var inst_24890 = inst_24889;
var state_25003__$1 = state_25003;
if(cljs.core.truth_(inst_24890)){
var statearr_25082_25144 = state_25003__$1;
(statearr_25082_25144[(1)] = (10));

} else {
var statearr_25083_25145 = state_25003__$1;
(statearr_25083_25145[(1)] = (11));

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
});})(c__18942__auto___25091,cs,m,dchan,dctr,done))
;
return ((function (switch__18921__auto__,c__18942__auto___25091,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18922__auto__ = null;
var cljs$core$async$mult_$_state_machine__18922__auto____0 = (function (){
var statearr_25087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25087[(0)] = cljs$core$async$mult_$_state_machine__18922__auto__);

(statearr_25087[(1)] = (1));

return statearr_25087;
});
var cljs$core$async$mult_$_state_machine__18922__auto____1 = (function (state_25003){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_25003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e25088){if((e25088 instanceof Object)){
var ex__18925__auto__ = e25088;
var statearr_25089_25146 = state_25003;
(statearr_25089_25146[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25147 = state_25003;
state_25003 = G__25147;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18922__auto__ = function(state_25003){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18922__auto____1.call(this,state_25003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18922__auto____0;
cljs$core$async$mult_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18922__auto____1;
return cljs$core$async$mult_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___25091,cs,m,dchan,dctr,done))
})();
var state__18944__auto__ = (function (){var statearr_25090 = f__18943__auto__.call(null);
(statearr_25090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___25091);

return statearr_25090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___25091,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25148 = [];
var len__17884__auto___25151 = arguments.length;
var i__17885__auto___25152 = (0);
while(true){
if((i__17885__auto___25152 < len__17884__auto___25151)){
args25148.push((arguments[i__17885__auto___25152]));

var G__25153 = (i__17885__auto___25152 + (1));
i__17885__auto___25152 = G__25153;
continue;
} else {
}
break;
}

var G__25150 = args25148.length;
switch (G__25150) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25148.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___25165 = arguments.length;
var i__17885__auto___25166 = (0);
while(true){
if((i__17885__auto___25166 < len__17884__auto___25165)){
args__17891__auto__.push((arguments[i__17885__auto___25166]));

var G__25167 = (i__17885__auto___25166 + (1));
i__17885__auto___25166 = G__25167;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25159){
var map__25160 = p__25159;
var map__25160__$1 = ((((!((map__25160 == null)))?((((map__25160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25160):map__25160);
var opts = map__25160__$1;
var statearr_25162_25168 = state;
(statearr_25162_25168[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25160,map__25160__$1,opts){
return (function (val){
var statearr_25163_25169 = state;
(statearr_25163_25169[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25160,map__25160__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25164_25170 = state;
(statearr_25164_25170[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25155){
var G__25156 = cljs.core.first.call(null,seq25155);
var seq25155__$1 = cljs.core.next.call(null,seq25155);
var G__25157 = cljs.core.first.call(null,seq25155__$1);
var seq25155__$2 = cljs.core.next.call(null,seq25155__$1);
var G__25158 = cljs.core.first.call(null,seq25155__$2);
var seq25155__$3 = cljs.core.next.call(null,seq25155__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25156,G__25157,G__25158,seq25155__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25334 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25335){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25335 = meta25335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25336,meta25335__$1){
var self__ = this;
var _25336__$1 = this;
return (new cljs.core.async.t_cljs$core$async25334(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25335__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25336){
var self__ = this;
var _25336__$1 = this;
return self__.meta25335;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25335","meta25335",1485212780,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25334";

cljs.core.async.t_cljs$core$async25334.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25334");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25334 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25334(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25335){
return (new cljs.core.async.t_cljs$core$async25334(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25335));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25334(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18942__auto___25497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___25497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___25497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25434){
var state_val_25435 = (state_25434[(1)]);
if((state_val_25435 === (7))){
var inst_25352 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25436_25498 = state_25434__$1;
(statearr_25436_25498[(2)] = inst_25352);

(statearr_25436_25498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (20))){
var inst_25364 = (state_25434[(7)]);
var state_25434__$1 = state_25434;
var statearr_25437_25499 = state_25434__$1;
(statearr_25437_25499[(2)] = inst_25364);

(statearr_25437_25499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (27))){
var state_25434__$1 = state_25434;
var statearr_25438_25500 = state_25434__$1;
(statearr_25438_25500[(2)] = null);

(statearr_25438_25500[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (1))){
var inst_25340 = (state_25434[(8)]);
var inst_25340__$1 = calc_state.call(null);
var inst_25342 = (inst_25340__$1 == null);
var inst_25343 = cljs.core.not.call(null,inst_25342);
var state_25434__$1 = (function (){var statearr_25439 = state_25434;
(statearr_25439[(8)] = inst_25340__$1);

return statearr_25439;
})();
if(inst_25343){
var statearr_25440_25501 = state_25434__$1;
(statearr_25440_25501[(1)] = (2));

} else {
var statearr_25441_25502 = state_25434__$1;
(statearr_25441_25502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (24))){
var inst_25408 = (state_25434[(9)]);
var inst_25394 = (state_25434[(10)]);
var inst_25387 = (state_25434[(11)]);
var inst_25408__$1 = inst_25387.call(null,inst_25394);
var state_25434__$1 = (function (){var statearr_25442 = state_25434;
(statearr_25442[(9)] = inst_25408__$1);

return statearr_25442;
})();
if(cljs.core.truth_(inst_25408__$1)){
var statearr_25443_25503 = state_25434__$1;
(statearr_25443_25503[(1)] = (29));

} else {
var statearr_25444_25504 = state_25434__$1;
(statearr_25444_25504[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (4))){
var inst_25355 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25355)){
var statearr_25445_25505 = state_25434__$1;
(statearr_25445_25505[(1)] = (8));

} else {
var statearr_25446_25506 = state_25434__$1;
(statearr_25446_25506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (15))){
var inst_25381 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25381)){
var statearr_25447_25507 = state_25434__$1;
(statearr_25447_25507[(1)] = (19));

} else {
var statearr_25448_25508 = state_25434__$1;
(statearr_25448_25508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (21))){
var inst_25386 = (state_25434[(12)]);
var inst_25386__$1 = (state_25434[(2)]);
var inst_25387 = cljs.core.get.call(null,inst_25386__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25388 = cljs.core.get.call(null,inst_25386__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25389 = cljs.core.get.call(null,inst_25386__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25434__$1 = (function (){var statearr_25449 = state_25434;
(statearr_25449[(13)] = inst_25388);

(statearr_25449[(12)] = inst_25386__$1);

(statearr_25449[(11)] = inst_25387);

return statearr_25449;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25434__$1,(22),inst_25389);
} else {
if((state_val_25435 === (31))){
var inst_25416 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25416)){
var statearr_25450_25509 = state_25434__$1;
(statearr_25450_25509[(1)] = (32));

} else {
var statearr_25451_25510 = state_25434__$1;
(statearr_25451_25510[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (32))){
var inst_25393 = (state_25434[(14)]);
var state_25434__$1 = state_25434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25434__$1,(35),out,inst_25393);
} else {
if((state_val_25435 === (33))){
var inst_25386 = (state_25434[(12)]);
var inst_25364 = inst_25386;
var state_25434__$1 = (function (){var statearr_25452 = state_25434;
(statearr_25452[(7)] = inst_25364);

return statearr_25452;
})();
var statearr_25453_25511 = state_25434__$1;
(statearr_25453_25511[(2)] = null);

(statearr_25453_25511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (13))){
var inst_25364 = (state_25434[(7)]);
var inst_25371 = inst_25364.cljs$lang$protocol_mask$partition0$;
var inst_25372 = (inst_25371 & (64));
var inst_25373 = inst_25364.cljs$core$ISeq$;
var inst_25374 = (inst_25372) || (inst_25373);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25374)){
var statearr_25454_25512 = state_25434__$1;
(statearr_25454_25512[(1)] = (16));

} else {
var statearr_25455_25513 = state_25434__$1;
(statearr_25455_25513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (22))){
var inst_25394 = (state_25434[(10)]);
var inst_25393 = (state_25434[(14)]);
var inst_25392 = (state_25434[(2)]);
var inst_25393__$1 = cljs.core.nth.call(null,inst_25392,(0),null);
var inst_25394__$1 = cljs.core.nth.call(null,inst_25392,(1),null);
var inst_25395 = (inst_25393__$1 == null);
var inst_25396 = cljs.core._EQ_.call(null,inst_25394__$1,change);
var inst_25397 = (inst_25395) || (inst_25396);
var state_25434__$1 = (function (){var statearr_25456 = state_25434;
(statearr_25456[(10)] = inst_25394__$1);

(statearr_25456[(14)] = inst_25393__$1);

return statearr_25456;
})();
if(cljs.core.truth_(inst_25397)){
var statearr_25457_25514 = state_25434__$1;
(statearr_25457_25514[(1)] = (23));

} else {
var statearr_25458_25515 = state_25434__$1;
(statearr_25458_25515[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (36))){
var inst_25386 = (state_25434[(12)]);
var inst_25364 = inst_25386;
var state_25434__$1 = (function (){var statearr_25459 = state_25434;
(statearr_25459[(7)] = inst_25364);

return statearr_25459;
})();
var statearr_25460_25516 = state_25434__$1;
(statearr_25460_25516[(2)] = null);

(statearr_25460_25516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (29))){
var inst_25408 = (state_25434[(9)]);
var state_25434__$1 = state_25434;
var statearr_25461_25517 = state_25434__$1;
(statearr_25461_25517[(2)] = inst_25408);

(statearr_25461_25517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (6))){
var state_25434__$1 = state_25434;
var statearr_25462_25518 = state_25434__$1;
(statearr_25462_25518[(2)] = false);

(statearr_25462_25518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (28))){
var inst_25404 = (state_25434[(2)]);
var inst_25405 = calc_state.call(null);
var inst_25364 = inst_25405;
var state_25434__$1 = (function (){var statearr_25463 = state_25434;
(statearr_25463[(7)] = inst_25364);

(statearr_25463[(15)] = inst_25404);

return statearr_25463;
})();
var statearr_25464_25519 = state_25434__$1;
(statearr_25464_25519[(2)] = null);

(statearr_25464_25519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (25))){
var inst_25430 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25465_25520 = state_25434__$1;
(statearr_25465_25520[(2)] = inst_25430);

(statearr_25465_25520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (34))){
var inst_25428 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25466_25521 = state_25434__$1;
(statearr_25466_25521[(2)] = inst_25428);

(statearr_25466_25521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (17))){
var state_25434__$1 = state_25434;
var statearr_25467_25522 = state_25434__$1;
(statearr_25467_25522[(2)] = false);

(statearr_25467_25522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (3))){
var state_25434__$1 = state_25434;
var statearr_25468_25523 = state_25434__$1;
(statearr_25468_25523[(2)] = false);

(statearr_25468_25523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (12))){
var inst_25432 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25434__$1,inst_25432);
} else {
if((state_val_25435 === (2))){
var inst_25340 = (state_25434[(8)]);
var inst_25345 = inst_25340.cljs$lang$protocol_mask$partition0$;
var inst_25346 = (inst_25345 & (64));
var inst_25347 = inst_25340.cljs$core$ISeq$;
var inst_25348 = (inst_25346) || (inst_25347);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25348)){
var statearr_25469_25524 = state_25434__$1;
(statearr_25469_25524[(1)] = (5));

} else {
var statearr_25470_25525 = state_25434__$1;
(statearr_25470_25525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (23))){
var inst_25393 = (state_25434[(14)]);
var inst_25399 = (inst_25393 == null);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25399)){
var statearr_25471_25526 = state_25434__$1;
(statearr_25471_25526[(1)] = (26));

} else {
var statearr_25472_25527 = state_25434__$1;
(statearr_25472_25527[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (35))){
var inst_25419 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
if(cljs.core.truth_(inst_25419)){
var statearr_25473_25528 = state_25434__$1;
(statearr_25473_25528[(1)] = (36));

} else {
var statearr_25474_25529 = state_25434__$1;
(statearr_25474_25529[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (19))){
var inst_25364 = (state_25434[(7)]);
var inst_25383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25364);
var state_25434__$1 = state_25434;
var statearr_25475_25530 = state_25434__$1;
(statearr_25475_25530[(2)] = inst_25383);

(statearr_25475_25530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (11))){
var inst_25364 = (state_25434[(7)]);
var inst_25368 = (inst_25364 == null);
var inst_25369 = cljs.core.not.call(null,inst_25368);
var state_25434__$1 = state_25434;
if(inst_25369){
var statearr_25476_25531 = state_25434__$1;
(statearr_25476_25531[(1)] = (13));

} else {
var statearr_25477_25532 = state_25434__$1;
(statearr_25477_25532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (9))){
var inst_25340 = (state_25434[(8)]);
var state_25434__$1 = state_25434;
var statearr_25478_25533 = state_25434__$1;
(statearr_25478_25533[(2)] = inst_25340);

(statearr_25478_25533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (5))){
var state_25434__$1 = state_25434;
var statearr_25479_25534 = state_25434__$1;
(statearr_25479_25534[(2)] = true);

(statearr_25479_25534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (14))){
var state_25434__$1 = state_25434;
var statearr_25480_25535 = state_25434__$1;
(statearr_25480_25535[(2)] = false);

(statearr_25480_25535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (26))){
var inst_25394 = (state_25434[(10)]);
var inst_25401 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25394);
var state_25434__$1 = state_25434;
var statearr_25481_25536 = state_25434__$1;
(statearr_25481_25536[(2)] = inst_25401);

(statearr_25481_25536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (16))){
var state_25434__$1 = state_25434;
var statearr_25482_25537 = state_25434__$1;
(statearr_25482_25537[(2)] = true);

(statearr_25482_25537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (38))){
var inst_25424 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25483_25538 = state_25434__$1;
(statearr_25483_25538[(2)] = inst_25424);

(statearr_25483_25538[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (30))){
var inst_25394 = (state_25434[(10)]);
var inst_25388 = (state_25434[(13)]);
var inst_25387 = (state_25434[(11)]);
var inst_25411 = cljs.core.empty_QMARK_.call(null,inst_25387);
var inst_25412 = inst_25388.call(null,inst_25394);
var inst_25413 = cljs.core.not.call(null,inst_25412);
var inst_25414 = (inst_25411) && (inst_25413);
var state_25434__$1 = state_25434;
var statearr_25484_25539 = state_25434__$1;
(statearr_25484_25539[(2)] = inst_25414);

(statearr_25484_25539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (10))){
var inst_25340 = (state_25434[(8)]);
var inst_25360 = (state_25434[(2)]);
var inst_25361 = cljs.core.get.call(null,inst_25360,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25362 = cljs.core.get.call(null,inst_25360,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25363 = cljs.core.get.call(null,inst_25360,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25364 = inst_25340;
var state_25434__$1 = (function (){var statearr_25485 = state_25434;
(statearr_25485[(7)] = inst_25364);

(statearr_25485[(16)] = inst_25362);

(statearr_25485[(17)] = inst_25363);

(statearr_25485[(18)] = inst_25361);

return statearr_25485;
})();
var statearr_25486_25540 = state_25434__$1;
(statearr_25486_25540[(2)] = null);

(statearr_25486_25540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (18))){
var inst_25378 = (state_25434[(2)]);
var state_25434__$1 = state_25434;
var statearr_25487_25541 = state_25434__$1;
(statearr_25487_25541[(2)] = inst_25378);

(statearr_25487_25541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (37))){
var state_25434__$1 = state_25434;
var statearr_25488_25542 = state_25434__$1;
(statearr_25488_25542[(2)] = null);

(statearr_25488_25542[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25435 === (8))){
var inst_25340 = (state_25434[(8)]);
var inst_25357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25340);
var state_25434__$1 = state_25434;
var statearr_25489_25543 = state_25434__$1;
(statearr_25489_25543[(2)] = inst_25357);

(statearr_25489_25543[(1)] = (10));


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
});})(c__18942__auto___25497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18921__auto__,c__18942__auto___25497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18922__auto__ = null;
var cljs$core$async$mix_$_state_machine__18922__auto____0 = (function (){
var statearr_25493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25493[(0)] = cljs$core$async$mix_$_state_machine__18922__auto__);

(statearr_25493[(1)] = (1));

return statearr_25493;
});
var cljs$core$async$mix_$_state_machine__18922__auto____1 = (function (state_25434){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_25434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e25494){if((e25494 instanceof Object)){
var ex__18925__auto__ = e25494;
var statearr_25495_25544 = state_25434;
(statearr_25495_25544[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25545 = state_25434;
state_25434 = G__25545;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18922__auto__ = function(state_25434){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18922__auto____1.call(this,state_25434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18922__auto____0;
cljs$core$async$mix_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18922__auto____1;
return cljs$core$async$mix_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___25497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18944__auto__ = (function (){var statearr_25496 = f__18943__auto__.call(null);
(statearr_25496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___25497);

return statearr_25496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___25497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25546 = [];
var len__17884__auto___25549 = arguments.length;
var i__17885__auto___25550 = (0);
while(true){
if((i__17885__auto___25550 < len__17884__auto___25549)){
args25546.push((arguments[i__17885__auto___25550]));

var G__25551 = (i__17885__auto___25550 + (1));
i__17885__auto___25550 = G__25551;
continue;
} else {
}
break;
}

var G__25548 = args25546.length;
switch (G__25548) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25546.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25554 = [];
var len__17884__auto___25679 = arguments.length;
var i__17885__auto___25680 = (0);
while(true){
if((i__17885__auto___25680 < len__17884__auto___25679)){
args25554.push((arguments[i__17885__auto___25680]));

var G__25681 = (i__17885__auto___25680 + (1));
i__17885__auto___25680 = G__25681;
continue;
} else {
}
break;
}

var G__25556 = args25554.length;
switch (G__25556) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25554.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__25553_SHARP_){
if(cljs.core.truth_(p1__25553_SHARP_.call(null,topic))){
return p1__25553_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25553_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25557 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25558){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25558 = meta25558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25559,meta25558__$1){
var self__ = this;
var _25559__$1 = this;
return (new cljs.core.async.t_cljs$core$async25557(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25558__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25559){
var self__ = this;
var _25559__$1 = this;
return self__.meta25558;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25558","meta25558",1331094603,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25557";

cljs.core.async.t_cljs$core$async25557.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25557");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25557 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25558){
return (new cljs.core.async.t_cljs$core$async25557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25558));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25557(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18942__auto___25683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___25683,mults,ensure_mult,p){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___25683,mults,ensure_mult,p){
return (function (state_25631){
var state_val_25632 = (state_25631[(1)]);
if((state_val_25632 === (7))){
var inst_25627 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
var statearr_25633_25684 = state_25631__$1;
(statearr_25633_25684[(2)] = inst_25627);

(statearr_25633_25684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (20))){
var state_25631__$1 = state_25631;
var statearr_25634_25685 = state_25631__$1;
(statearr_25634_25685[(2)] = null);

(statearr_25634_25685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (1))){
var state_25631__$1 = state_25631;
var statearr_25635_25686 = state_25631__$1;
(statearr_25635_25686[(2)] = null);

(statearr_25635_25686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (24))){
var inst_25610 = (state_25631[(7)]);
var inst_25619 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25610);
var state_25631__$1 = state_25631;
var statearr_25636_25687 = state_25631__$1;
(statearr_25636_25687[(2)] = inst_25619);

(statearr_25636_25687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (4))){
var inst_25562 = (state_25631[(8)]);
var inst_25562__$1 = (state_25631[(2)]);
var inst_25563 = (inst_25562__$1 == null);
var state_25631__$1 = (function (){var statearr_25637 = state_25631;
(statearr_25637[(8)] = inst_25562__$1);

return statearr_25637;
})();
if(cljs.core.truth_(inst_25563)){
var statearr_25638_25688 = state_25631__$1;
(statearr_25638_25688[(1)] = (5));

} else {
var statearr_25639_25689 = state_25631__$1;
(statearr_25639_25689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (15))){
var inst_25604 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
var statearr_25640_25690 = state_25631__$1;
(statearr_25640_25690[(2)] = inst_25604);

(statearr_25640_25690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (21))){
var inst_25624 = (state_25631[(2)]);
var state_25631__$1 = (function (){var statearr_25641 = state_25631;
(statearr_25641[(9)] = inst_25624);

return statearr_25641;
})();
var statearr_25642_25691 = state_25631__$1;
(statearr_25642_25691[(2)] = null);

(statearr_25642_25691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (13))){
var inst_25586 = (state_25631[(10)]);
var inst_25588 = cljs.core.chunked_seq_QMARK_.call(null,inst_25586);
var state_25631__$1 = state_25631;
if(inst_25588){
var statearr_25643_25692 = state_25631__$1;
(statearr_25643_25692[(1)] = (16));

} else {
var statearr_25644_25693 = state_25631__$1;
(statearr_25644_25693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (22))){
var inst_25616 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
if(cljs.core.truth_(inst_25616)){
var statearr_25645_25694 = state_25631__$1;
(statearr_25645_25694[(1)] = (23));

} else {
var statearr_25646_25695 = state_25631__$1;
(statearr_25646_25695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (6))){
var inst_25612 = (state_25631[(11)]);
var inst_25562 = (state_25631[(8)]);
var inst_25610 = (state_25631[(7)]);
var inst_25610__$1 = topic_fn.call(null,inst_25562);
var inst_25611 = cljs.core.deref.call(null,mults);
var inst_25612__$1 = cljs.core.get.call(null,inst_25611,inst_25610__$1);
var state_25631__$1 = (function (){var statearr_25647 = state_25631;
(statearr_25647[(11)] = inst_25612__$1);

(statearr_25647[(7)] = inst_25610__$1);

return statearr_25647;
})();
if(cljs.core.truth_(inst_25612__$1)){
var statearr_25648_25696 = state_25631__$1;
(statearr_25648_25696[(1)] = (19));

} else {
var statearr_25649_25697 = state_25631__$1;
(statearr_25649_25697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (25))){
var inst_25621 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
var statearr_25650_25698 = state_25631__$1;
(statearr_25650_25698[(2)] = inst_25621);

(statearr_25650_25698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (17))){
var inst_25586 = (state_25631[(10)]);
var inst_25595 = cljs.core.first.call(null,inst_25586);
var inst_25596 = cljs.core.async.muxch_STAR_.call(null,inst_25595);
var inst_25597 = cljs.core.async.close_BANG_.call(null,inst_25596);
var inst_25598 = cljs.core.next.call(null,inst_25586);
var inst_25572 = inst_25598;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25631__$1 = (function (){var statearr_25651 = state_25631;
(statearr_25651[(12)] = inst_25575);

(statearr_25651[(13)] = inst_25597);

(statearr_25651[(14)] = inst_25573);

(statearr_25651[(15)] = inst_25574);

(statearr_25651[(16)] = inst_25572);

return statearr_25651;
})();
var statearr_25652_25699 = state_25631__$1;
(statearr_25652_25699[(2)] = null);

(statearr_25652_25699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (3))){
var inst_25629 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25631__$1,inst_25629);
} else {
if((state_val_25632 === (12))){
var inst_25606 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
var statearr_25653_25700 = state_25631__$1;
(statearr_25653_25700[(2)] = inst_25606);

(statearr_25653_25700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (2))){
var state_25631__$1 = state_25631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25631__$1,(4),ch);
} else {
if((state_val_25632 === (23))){
var state_25631__$1 = state_25631;
var statearr_25654_25701 = state_25631__$1;
(statearr_25654_25701[(2)] = null);

(statearr_25654_25701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (19))){
var inst_25612 = (state_25631[(11)]);
var inst_25562 = (state_25631[(8)]);
var inst_25614 = cljs.core.async.muxch_STAR_.call(null,inst_25612);
var state_25631__$1 = state_25631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25631__$1,(22),inst_25614,inst_25562);
} else {
if((state_val_25632 === (11))){
var inst_25586 = (state_25631[(10)]);
var inst_25572 = (state_25631[(16)]);
var inst_25586__$1 = cljs.core.seq.call(null,inst_25572);
var state_25631__$1 = (function (){var statearr_25655 = state_25631;
(statearr_25655[(10)] = inst_25586__$1);

return statearr_25655;
})();
if(inst_25586__$1){
var statearr_25656_25702 = state_25631__$1;
(statearr_25656_25702[(1)] = (13));

} else {
var statearr_25657_25703 = state_25631__$1;
(statearr_25657_25703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (9))){
var inst_25608 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
var statearr_25658_25704 = state_25631__$1;
(statearr_25658_25704[(2)] = inst_25608);

(statearr_25658_25704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (5))){
var inst_25569 = cljs.core.deref.call(null,mults);
var inst_25570 = cljs.core.vals.call(null,inst_25569);
var inst_25571 = cljs.core.seq.call(null,inst_25570);
var inst_25572 = inst_25571;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25631__$1 = (function (){var statearr_25659 = state_25631;
(statearr_25659[(12)] = inst_25575);

(statearr_25659[(14)] = inst_25573);

(statearr_25659[(15)] = inst_25574);

(statearr_25659[(16)] = inst_25572);

return statearr_25659;
})();
var statearr_25660_25705 = state_25631__$1;
(statearr_25660_25705[(2)] = null);

(statearr_25660_25705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (14))){
var state_25631__$1 = state_25631;
var statearr_25664_25706 = state_25631__$1;
(statearr_25664_25706[(2)] = null);

(statearr_25664_25706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (16))){
var inst_25586 = (state_25631[(10)]);
var inst_25590 = cljs.core.chunk_first.call(null,inst_25586);
var inst_25591 = cljs.core.chunk_rest.call(null,inst_25586);
var inst_25592 = cljs.core.count.call(null,inst_25590);
var inst_25572 = inst_25591;
var inst_25573 = inst_25590;
var inst_25574 = inst_25592;
var inst_25575 = (0);
var state_25631__$1 = (function (){var statearr_25665 = state_25631;
(statearr_25665[(12)] = inst_25575);

(statearr_25665[(14)] = inst_25573);

(statearr_25665[(15)] = inst_25574);

(statearr_25665[(16)] = inst_25572);

return statearr_25665;
})();
var statearr_25666_25707 = state_25631__$1;
(statearr_25666_25707[(2)] = null);

(statearr_25666_25707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (10))){
var inst_25575 = (state_25631[(12)]);
var inst_25573 = (state_25631[(14)]);
var inst_25574 = (state_25631[(15)]);
var inst_25572 = (state_25631[(16)]);
var inst_25580 = cljs.core._nth.call(null,inst_25573,inst_25575);
var inst_25581 = cljs.core.async.muxch_STAR_.call(null,inst_25580);
var inst_25582 = cljs.core.async.close_BANG_.call(null,inst_25581);
var inst_25583 = (inst_25575 + (1));
var tmp25661 = inst_25573;
var tmp25662 = inst_25574;
var tmp25663 = inst_25572;
var inst_25572__$1 = tmp25663;
var inst_25573__$1 = tmp25661;
var inst_25574__$1 = tmp25662;
var inst_25575__$1 = inst_25583;
var state_25631__$1 = (function (){var statearr_25667 = state_25631;
(statearr_25667[(12)] = inst_25575__$1);

(statearr_25667[(14)] = inst_25573__$1);

(statearr_25667[(15)] = inst_25574__$1);

(statearr_25667[(16)] = inst_25572__$1);

(statearr_25667[(17)] = inst_25582);

return statearr_25667;
})();
var statearr_25668_25708 = state_25631__$1;
(statearr_25668_25708[(2)] = null);

(statearr_25668_25708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (18))){
var inst_25601 = (state_25631[(2)]);
var state_25631__$1 = state_25631;
var statearr_25669_25709 = state_25631__$1;
(statearr_25669_25709[(2)] = inst_25601);

(statearr_25669_25709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (8))){
var inst_25575 = (state_25631[(12)]);
var inst_25574 = (state_25631[(15)]);
var inst_25577 = (inst_25575 < inst_25574);
var inst_25578 = inst_25577;
var state_25631__$1 = state_25631;
if(cljs.core.truth_(inst_25578)){
var statearr_25670_25710 = state_25631__$1;
(statearr_25670_25710[(1)] = (10));

} else {
var statearr_25671_25711 = state_25631__$1;
(statearr_25671_25711[(1)] = (11));

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
});})(c__18942__auto___25683,mults,ensure_mult,p))
;
return ((function (switch__18921__auto__,c__18942__auto___25683,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_25675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25675[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_25675[(1)] = (1));

return statearr_25675;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_25631){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_25631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e25676){if((e25676 instanceof Object)){
var ex__18925__auto__ = e25676;
var statearr_25677_25712 = state_25631;
(statearr_25677_25712[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25713 = state_25631;
state_25631 = G__25713;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_25631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_25631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___25683,mults,ensure_mult,p))
})();
var state__18944__auto__ = (function (){var statearr_25678 = f__18943__auto__.call(null);
(statearr_25678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___25683);

return statearr_25678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___25683,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25714 = [];
var len__17884__auto___25717 = arguments.length;
var i__17885__auto___25718 = (0);
while(true){
if((i__17885__auto___25718 < len__17884__auto___25717)){
args25714.push((arguments[i__17885__auto___25718]));

var G__25719 = (i__17885__auto___25718 + (1));
i__17885__auto___25718 = G__25719;
continue;
} else {
}
break;
}

var G__25716 = args25714.length;
switch (G__25716) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25714.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25721 = [];
var len__17884__auto___25724 = arguments.length;
var i__17885__auto___25725 = (0);
while(true){
if((i__17885__auto___25725 < len__17884__auto___25724)){
args25721.push((arguments[i__17885__auto___25725]));

var G__25726 = (i__17885__auto___25725 + (1));
i__17885__auto___25725 = G__25726;
continue;
} else {
}
break;
}

var G__25723 = args25721.length;
switch (G__25723) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25721.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25728 = [];
var len__17884__auto___25799 = arguments.length;
var i__17885__auto___25800 = (0);
while(true){
if((i__17885__auto___25800 < len__17884__auto___25799)){
args25728.push((arguments[i__17885__auto___25800]));

var G__25801 = (i__17885__auto___25800 + (1));
i__17885__auto___25800 = G__25801;
continue;
} else {
}
break;
}

var G__25730 = args25728.length;
switch (G__25730) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25728.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18942__auto___25803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___25803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___25803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25769){
var state_val_25770 = (state_25769[(1)]);
if((state_val_25770 === (7))){
var state_25769__$1 = state_25769;
var statearr_25771_25804 = state_25769__$1;
(statearr_25771_25804[(2)] = null);

(statearr_25771_25804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (1))){
var state_25769__$1 = state_25769;
var statearr_25772_25805 = state_25769__$1;
(statearr_25772_25805[(2)] = null);

(statearr_25772_25805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (4))){
var inst_25733 = (state_25769[(7)]);
var inst_25735 = (inst_25733 < cnt);
var state_25769__$1 = state_25769;
if(cljs.core.truth_(inst_25735)){
var statearr_25773_25806 = state_25769__$1;
(statearr_25773_25806[(1)] = (6));

} else {
var statearr_25774_25807 = state_25769__$1;
(statearr_25774_25807[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (15))){
var inst_25765 = (state_25769[(2)]);
var state_25769__$1 = state_25769;
var statearr_25775_25808 = state_25769__$1;
(statearr_25775_25808[(2)] = inst_25765);

(statearr_25775_25808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (13))){
var inst_25758 = cljs.core.async.close_BANG_.call(null,out);
var state_25769__$1 = state_25769;
var statearr_25776_25809 = state_25769__$1;
(statearr_25776_25809[(2)] = inst_25758);

(statearr_25776_25809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (6))){
var state_25769__$1 = state_25769;
var statearr_25777_25810 = state_25769__$1;
(statearr_25777_25810[(2)] = null);

(statearr_25777_25810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (3))){
var inst_25767 = (state_25769[(2)]);
var state_25769__$1 = state_25769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25769__$1,inst_25767);
} else {
if((state_val_25770 === (12))){
var inst_25755 = (state_25769[(8)]);
var inst_25755__$1 = (state_25769[(2)]);
var inst_25756 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25755__$1);
var state_25769__$1 = (function (){var statearr_25778 = state_25769;
(statearr_25778[(8)] = inst_25755__$1);

return statearr_25778;
})();
if(cljs.core.truth_(inst_25756)){
var statearr_25779_25811 = state_25769__$1;
(statearr_25779_25811[(1)] = (13));

} else {
var statearr_25780_25812 = state_25769__$1;
(statearr_25780_25812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (2))){
var inst_25732 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25733 = (0);
var state_25769__$1 = (function (){var statearr_25781 = state_25769;
(statearr_25781[(9)] = inst_25732);

(statearr_25781[(7)] = inst_25733);

return statearr_25781;
})();
var statearr_25782_25813 = state_25769__$1;
(statearr_25782_25813[(2)] = null);

(statearr_25782_25813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (11))){
var inst_25733 = (state_25769[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25769,(10),Object,null,(9));
var inst_25742 = chs__$1.call(null,inst_25733);
var inst_25743 = done.call(null,inst_25733);
var inst_25744 = cljs.core.async.take_BANG_.call(null,inst_25742,inst_25743);
var state_25769__$1 = state_25769;
var statearr_25783_25814 = state_25769__$1;
(statearr_25783_25814[(2)] = inst_25744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25769__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (9))){
var inst_25733 = (state_25769[(7)]);
var inst_25746 = (state_25769[(2)]);
var inst_25747 = (inst_25733 + (1));
var inst_25733__$1 = inst_25747;
var state_25769__$1 = (function (){var statearr_25784 = state_25769;
(statearr_25784[(10)] = inst_25746);

(statearr_25784[(7)] = inst_25733__$1);

return statearr_25784;
})();
var statearr_25785_25815 = state_25769__$1;
(statearr_25785_25815[(2)] = null);

(statearr_25785_25815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (5))){
var inst_25753 = (state_25769[(2)]);
var state_25769__$1 = (function (){var statearr_25786 = state_25769;
(statearr_25786[(11)] = inst_25753);

return statearr_25786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25769__$1,(12),dchan);
} else {
if((state_val_25770 === (14))){
var inst_25755 = (state_25769[(8)]);
var inst_25760 = cljs.core.apply.call(null,f,inst_25755);
var state_25769__$1 = state_25769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25769__$1,(16),out,inst_25760);
} else {
if((state_val_25770 === (16))){
var inst_25762 = (state_25769[(2)]);
var state_25769__$1 = (function (){var statearr_25787 = state_25769;
(statearr_25787[(12)] = inst_25762);

return statearr_25787;
})();
var statearr_25788_25816 = state_25769__$1;
(statearr_25788_25816[(2)] = null);

(statearr_25788_25816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (10))){
var inst_25737 = (state_25769[(2)]);
var inst_25738 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25769__$1 = (function (){var statearr_25789 = state_25769;
(statearr_25789[(13)] = inst_25737);

return statearr_25789;
})();
var statearr_25790_25817 = state_25769__$1;
(statearr_25790_25817[(2)] = inst_25738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25769__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25770 === (8))){
var inst_25751 = (state_25769[(2)]);
var state_25769__$1 = state_25769;
var statearr_25791_25818 = state_25769__$1;
(statearr_25791_25818[(2)] = inst_25751);

(statearr_25791_25818[(1)] = (5));


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
});})(c__18942__auto___25803,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18921__auto__,c__18942__auto___25803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_25795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25795[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_25795[(1)] = (1));

return statearr_25795;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_25769){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_25769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e25796){if((e25796 instanceof Object)){
var ex__18925__auto__ = e25796;
var statearr_25797_25819 = state_25769;
(statearr_25797_25819[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25820 = state_25769;
state_25769 = G__25820;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_25769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_25769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___25803,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18944__auto__ = (function (){var statearr_25798 = f__18943__auto__.call(null);
(statearr_25798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___25803);

return statearr_25798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___25803,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25822 = [];
var len__17884__auto___25878 = arguments.length;
var i__17885__auto___25879 = (0);
while(true){
if((i__17885__auto___25879 < len__17884__auto___25878)){
args25822.push((arguments[i__17885__auto___25879]));

var G__25880 = (i__17885__auto___25879 + (1));
i__17885__auto___25879 = G__25880;
continue;
} else {
}
break;
}

var G__25824 = args25822.length;
switch (G__25824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25822.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18942__auto___25882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___25882,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___25882,out){
return (function (state_25854){
var state_val_25855 = (state_25854[(1)]);
if((state_val_25855 === (7))){
var inst_25833 = (state_25854[(7)]);
var inst_25834 = (state_25854[(8)]);
var inst_25833__$1 = (state_25854[(2)]);
var inst_25834__$1 = cljs.core.nth.call(null,inst_25833__$1,(0),null);
var inst_25835 = cljs.core.nth.call(null,inst_25833__$1,(1),null);
var inst_25836 = (inst_25834__$1 == null);
var state_25854__$1 = (function (){var statearr_25856 = state_25854;
(statearr_25856[(7)] = inst_25833__$1);

(statearr_25856[(9)] = inst_25835);

(statearr_25856[(8)] = inst_25834__$1);

return statearr_25856;
})();
if(cljs.core.truth_(inst_25836)){
var statearr_25857_25883 = state_25854__$1;
(statearr_25857_25883[(1)] = (8));

} else {
var statearr_25858_25884 = state_25854__$1;
(statearr_25858_25884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (1))){
var inst_25825 = cljs.core.vec.call(null,chs);
var inst_25826 = inst_25825;
var state_25854__$1 = (function (){var statearr_25859 = state_25854;
(statearr_25859[(10)] = inst_25826);

return statearr_25859;
})();
var statearr_25860_25885 = state_25854__$1;
(statearr_25860_25885[(2)] = null);

(statearr_25860_25885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (4))){
var inst_25826 = (state_25854[(10)]);
var state_25854__$1 = state_25854;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25854__$1,(7),inst_25826);
} else {
if((state_val_25855 === (6))){
var inst_25850 = (state_25854[(2)]);
var state_25854__$1 = state_25854;
var statearr_25861_25886 = state_25854__$1;
(statearr_25861_25886[(2)] = inst_25850);

(statearr_25861_25886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (3))){
var inst_25852 = (state_25854[(2)]);
var state_25854__$1 = state_25854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25854__$1,inst_25852);
} else {
if((state_val_25855 === (2))){
var inst_25826 = (state_25854[(10)]);
var inst_25828 = cljs.core.count.call(null,inst_25826);
var inst_25829 = (inst_25828 > (0));
var state_25854__$1 = state_25854;
if(cljs.core.truth_(inst_25829)){
var statearr_25863_25887 = state_25854__$1;
(statearr_25863_25887[(1)] = (4));

} else {
var statearr_25864_25888 = state_25854__$1;
(statearr_25864_25888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (11))){
var inst_25826 = (state_25854[(10)]);
var inst_25843 = (state_25854[(2)]);
var tmp25862 = inst_25826;
var inst_25826__$1 = tmp25862;
var state_25854__$1 = (function (){var statearr_25865 = state_25854;
(statearr_25865[(11)] = inst_25843);

(statearr_25865[(10)] = inst_25826__$1);

return statearr_25865;
})();
var statearr_25866_25889 = state_25854__$1;
(statearr_25866_25889[(2)] = null);

(statearr_25866_25889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (9))){
var inst_25834 = (state_25854[(8)]);
var state_25854__$1 = state_25854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25854__$1,(11),out,inst_25834);
} else {
if((state_val_25855 === (5))){
var inst_25848 = cljs.core.async.close_BANG_.call(null,out);
var state_25854__$1 = state_25854;
var statearr_25867_25890 = state_25854__$1;
(statearr_25867_25890[(2)] = inst_25848);

(statearr_25867_25890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (10))){
var inst_25846 = (state_25854[(2)]);
var state_25854__$1 = state_25854;
var statearr_25868_25891 = state_25854__$1;
(statearr_25868_25891[(2)] = inst_25846);

(statearr_25868_25891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25855 === (8))){
var inst_25833 = (state_25854[(7)]);
var inst_25826 = (state_25854[(10)]);
var inst_25835 = (state_25854[(9)]);
var inst_25834 = (state_25854[(8)]);
var inst_25838 = (function (){var cs = inst_25826;
var vec__25831 = inst_25833;
var v = inst_25834;
var c = inst_25835;
return ((function (cs,vec__25831,v,c,inst_25833,inst_25826,inst_25835,inst_25834,state_val_25855,c__18942__auto___25882,out){
return (function (p1__25821_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25821_SHARP_);
});
;})(cs,vec__25831,v,c,inst_25833,inst_25826,inst_25835,inst_25834,state_val_25855,c__18942__auto___25882,out))
})();
var inst_25839 = cljs.core.filterv.call(null,inst_25838,inst_25826);
var inst_25826__$1 = inst_25839;
var state_25854__$1 = (function (){var statearr_25869 = state_25854;
(statearr_25869[(10)] = inst_25826__$1);

return statearr_25869;
})();
var statearr_25870_25892 = state_25854__$1;
(statearr_25870_25892[(2)] = null);

(statearr_25870_25892[(1)] = (2));


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
});})(c__18942__auto___25882,out))
;
return ((function (switch__18921__auto__,c__18942__auto___25882,out){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_25874 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25874[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_25874[(1)] = (1));

return statearr_25874;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_25854){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_25854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e25875){if((e25875 instanceof Object)){
var ex__18925__auto__ = e25875;
var statearr_25876_25893 = state_25854;
(statearr_25876_25893[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25894 = state_25854;
state_25854 = G__25894;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_25854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_25854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___25882,out))
})();
var state__18944__auto__ = (function (){var statearr_25877 = f__18943__auto__.call(null);
(statearr_25877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___25882);

return statearr_25877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___25882,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25895 = [];
var len__17884__auto___25944 = arguments.length;
var i__17885__auto___25945 = (0);
while(true){
if((i__17885__auto___25945 < len__17884__auto___25944)){
args25895.push((arguments[i__17885__auto___25945]));

var G__25946 = (i__17885__auto___25945 + (1));
i__17885__auto___25945 = G__25946;
continue;
} else {
}
break;
}

var G__25897 = args25895.length;
switch (G__25897) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25895.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18942__auto___25948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___25948,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___25948,out){
return (function (state_25921){
var state_val_25922 = (state_25921[(1)]);
if((state_val_25922 === (7))){
var inst_25903 = (state_25921[(7)]);
var inst_25903__$1 = (state_25921[(2)]);
var inst_25904 = (inst_25903__$1 == null);
var inst_25905 = cljs.core.not.call(null,inst_25904);
var state_25921__$1 = (function (){var statearr_25923 = state_25921;
(statearr_25923[(7)] = inst_25903__$1);

return statearr_25923;
})();
if(inst_25905){
var statearr_25924_25949 = state_25921__$1;
(statearr_25924_25949[(1)] = (8));

} else {
var statearr_25925_25950 = state_25921__$1;
(statearr_25925_25950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (1))){
var inst_25898 = (0);
var state_25921__$1 = (function (){var statearr_25926 = state_25921;
(statearr_25926[(8)] = inst_25898);

return statearr_25926;
})();
var statearr_25927_25951 = state_25921__$1;
(statearr_25927_25951[(2)] = null);

(statearr_25927_25951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (4))){
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25921__$1,(7),ch);
} else {
if((state_val_25922 === (6))){
var inst_25916 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25928_25952 = state_25921__$1;
(statearr_25928_25952[(2)] = inst_25916);

(statearr_25928_25952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (3))){
var inst_25918 = (state_25921[(2)]);
var inst_25919 = cljs.core.async.close_BANG_.call(null,out);
var state_25921__$1 = (function (){var statearr_25929 = state_25921;
(statearr_25929[(9)] = inst_25918);

return statearr_25929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25921__$1,inst_25919);
} else {
if((state_val_25922 === (2))){
var inst_25898 = (state_25921[(8)]);
var inst_25900 = (inst_25898 < n);
var state_25921__$1 = state_25921;
if(cljs.core.truth_(inst_25900)){
var statearr_25930_25953 = state_25921__$1;
(statearr_25930_25953[(1)] = (4));

} else {
var statearr_25931_25954 = state_25921__$1;
(statearr_25931_25954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (11))){
var inst_25898 = (state_25921[(8)]);
var inst_25908 = (state_25921[(2)]);
var inst_25909 = (inst_25898 + (1));
var inst_25898__$1 = inst_25909;
var state_25921__$1 = (function (){var statearr_25932 = state_25921;
(statearr_25932[(8)] = inst_25898__$1);

(statearr_25932[(10)] = inst_25908);

return statearr_25932;
})();
var statearr_25933_25955 = state_25921__$1;
(statearr_25933_25955[(2)] = null);

(statearr_25933_25955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (9))){
var state_25921__$1 = state_25921;
var statearr_25934_25956 = state_25921__$1;
(statearr_25934_25956[(2)] = null);

(statearr_25934_25956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (5))){
var state_25921__$1 = state_25921;
var statearr_25935_25957 = state_25921__$1;
(statearr_25935_25957[(2)] = null);

(statearr_25935_25957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (10))){
var inst_25913 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25936_25958 = state_25921__$1;
(statearr_25936_25958[(2)] = inst_25913);

(statearr_25936_25958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (8))){
var inst_25903 = (state_25921[(7)]);
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25921__$1,(11),out,inst_25903);
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
});})(c__18942__auto___25948,out))
;
return ((function (switch__18921__auto__,c__18942__auto___25948,out){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_25940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25940[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_25940[(1)] = (1));

return statearr_25940;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_25921){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_25921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e25941){if((e25941 instanceof Object)){
var ex__18925__auto__ = e25941;
var statearr_25942_25959 = state_25921;
(statearr_25942_25959[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25960 = state_25921;
state_25921 = G__25960;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_25921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_25921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___25948,out))
})();
var state__18944__auto__ = (function (){var statearr_25943 = f__18943__auto__.call(null);
(statearr_25943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___25948);

return statearr_25943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___25948,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25968 = (function (map_LT_,f,ch,meta25969){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25969 = meta25969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25970,meta25969__$1){
var self__ = this;
var _25970__$1 = this;
return (new cljs.core.async.t_cljs$core$async25968(self__.map_LT_,self__.f,self__.ch,meta25969__$1));
});

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25970){
var self__ = this;
var _25970__$1 = this;
return self__.meta25969;
});

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25971 = (function (map_LT_,f,ch,meta25969,_,fn1,meta25972){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25969 = meta25969;
this._ = _;
this.fn1 = fn1;
this.meta25972 = meta25972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25973,meta25972__$1){
var self__ = this;
var _25973__$1 = this;
return (new cljs.core.async.t_cljs$core$async25971(self__.map_LT_,self__.f,self__.ch,self__.meta25969,self__._,self__.fn1,meta25972__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25973){
var self__ = this;
var _25973__$1 = this;
return self__.meta25972;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25961_SHARP_){
return f1.call(null,(((p1__25961_SHARP_ == null))?null:self__.f.call(null,p1__25961_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25971.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25969","meta25969",1925827745,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25968","cljs.core.async/t_cljs$core$async25968",-1852197191,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25972","meta25972",1645234660,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25971";

cljs.core.async.t_cljs$core$async25971.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25971");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25971 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25971(map_LT___$1,f__$1,ch__$1,meta25969__$1,___$2,fn1__$1,meta25972){
return (new cljs.core.async.t_cljs$core$async25971(map_LT___$1,f__$1,ch__$1,meta25969__$1,___$2,fn1__$1,meta25972));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25971(self__.map_LT_,self__.f,self__.ch,self__.meta25969,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25969","meta25969",1925827745,null)], null);
});

cljs.core.async.t_cljs$core$async25968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25968";

cljs.core.async.t_cljs$core$async25968.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25968");
});

cljs.core.async.__GT_t_cljs$core$async25968 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25968(map_LT___$1,f__$1,ch__$1,meta25969){
return (new cljs.core.async.t_cljs$core$async25968(map_LT___$1,f__$1,ch__$1,meta25969));
});

}

return (new cljs.core.async.t_cljs$core$async25968(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25977 = (function (map_GT_,f,ch,meta25978){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25978 = meta25978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25979,meta25978__$1){
var self__ = this;
var _25979__$1 = this;
return (new cljs.core.async.t_cljs$core$async25977(self__.map_GT_,self__.f,self__.ch,meta25978__$1));
});

cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25979){
var self__ = this;
var _25979__$1 = this;
return self__.meta25978;
});

cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25978","meta25978",989824479,null)], null);
});

cljs.core.async.t_cljs$core$async25977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25977";

cljs.core.async.t_cljs$core$async25977.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25977");
});

cljs.core.async.__GT_t_cljs$core$async25977 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25977(map_GT___$1,f__$1,ch__$1,meta25978){
return (new cljs.core.async.t_cljs$core$async25977(map_GT___$1,f__$1,ch__$1,meta25978));
});

}

return (new cljs.core.async.t_cljs$core$async25977(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25983 = (function (filter_GT_,p,ch,meta25984){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25984 = meta25984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25985,meta25984__$1){
var self__ = this;
var _25985__$1 = this;
return (new cljs.core.async.t_cljs$core$async25983(self__.filter_GT_,self__.p,self__.ch,meta25984__$1));
});

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25985){
var self__ = this;
var _25985__$1 = this;
return self__.meta25984;
});

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25984","meta25984",-613737897,null)], null);
});

cljs.core.async.t_cljs$core$async25983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25983";

cljs.core.async.t_cljs$core$async25983.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25983");
});

cljs.core.async.__GT_t_cljs$core$async25983 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25983(filter_GT___$1,p__$1,ch__$1,meta25984){
return (new cljs.core.async.t_cljs$core$async25983(filter_GT___$1,p__$1,ch__$1,meta25984));
});

}

return (new cljs.core.async.t_cljs$core$async25983(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25986 = [];
var len__17884__auto___26030 = arguments.length;
var i__17885__auto___26031 = (0);
while(true){
if((i__17885__auto___26031 < len__17884__auto___26030)){
args25986.push((arguments[i__17885__auto___26031]));

var G__26032 = (i__17885__auto___26031 + (1));
i__17885__auto___26031 = G__26032;
continue;
} else {
}
break;
}

var G__25988 = args25986.length;
switch (G__25988) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25986.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18942__auto___26034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___26034,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___26034,out){
return (function (state_26009){
var state_val_26010 = (state_26009[(1)]);
if((state_val_26010 === (7))){
var inst_26005 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26011_26035 = state_26009__$1;
(statearr_26011_26035[(2)] = inst_26005);

(statearr_26011_26035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (1))){
var state_26009__$1 = state_26009;
var statearr_26012_26036 = state_26009__$1;
(statearr_26012_26036[(2)] = null);

(statearr_26012_26036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (4))){
var inst_25991 = (state_26009[(7)]);
var inst_25991__$1 = (state_26009[(2)]);
var inst_25992 = (inst_25991__$1 == null);
var state_26009__$1 = (function (){var statearr_26013 = state_26009;
(statearr_26013[(7)] = inst_25991__$1);

return statearr_26013;
})();
if(cljs.core.truth_(inst_25992)){
var statearr_26014_26037 = state_26009__$1;
(statearr_26014_26037[(1)] = (5));

} else {
var statearr_26015_26038 = state_26009__$1;
(statearr_26015_26038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (6))){
var inst_25991 = (state_26009[(7)]);
var inst_25996 = p.call(null,inst_25991);
var state_26009__$1 = state_26009;
if(cljs.core.truth_(inst_25996)){
var statearr_26016_26039 = state_26009__$1;
(statearr_26016_26039[(1)] = (8));

} else {
var statearr_26017_26040 = state_26009__$1;
(statearr_26017_26040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (3))){
var inst_26007 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26009__$1,inst_26007);
} else {
if((state_val_26010 === (2))){
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26009__$1,(4),ch);
} else {
if((state_val_26010 === (11))){
var inst_25999 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26018_26041 = state_26009__$1;
(statearr_26018_26041[(2)] = inst_25999);

(statearr_26018_26041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (9))){
var state_26009__$1 = state_26009;
var statearr_26019_26042 = state_26009__$1;
(statearr_26019_26042[(2)] = null);

(statearr_26019_26042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (5))){
var inst_25994 = cljs.core.async.close_BANG_.call(null,out);
var state_26009__$1 = state_26009;
var statearr_26020_26043 = state_26009__$1;
(statearr_26020_26043[(2)] = inst_25994);

(statearr_26020_26043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (10))){
var inst_26002 = (state_26009[(2)]);
var state_26009__$1 = (function (){var statearr_26021 = state_26009;
(statearr_26021[(8)] = inst_26002);

return statearr_26021;
})();
var statearr_26022_26044 = state_26009__$1;
(statearr_26022_26044[(2)] = null);

(statearr_26022_26044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (8))){
var inst_25991 = (state_26009[(7)]);
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26009__$1,(11),out,inst_25991);
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
});})(c__18942__auto___26034,out))
;
return ((function (switch__18921__auto__,c__18942__auto___26034,out){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_26026 = [null,null,null,null,null,null,null,null,null];
(statearr_26026[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_26026[(1)] = (1));

return statearr_26026;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_26009){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26027){if((e26027 instanceof Object)){
var ex__18925__auto__ = e26027;
var statearr_26028_26045 = state_26009;
(statearr_26028_26045[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26046 = state_26009;
state_26009 = G__26046;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_26009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_26009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___26034,out))
})();
var state__18944__auto__ = (function (){var statearr_26029 = f__18943__auto__.call(null);
(statearr_26029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___26034);

return statearr_26029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___26034,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26047 = [];
var len__17884__auto___26050 = arguments.length;
var i__17885__auto___26051 = (0);
while(true){
if((i__17885__auto___26051 < len__17884__auto___26050)){
args26047.push((arguments[i__17885__auto___26051]));

var G__26052 = (i__17885__auto___26051 + (1));
i__17885__auto___26051 = G__26052;
continue;
} else {
}
break;
}

var G__26049 = args26047.length;
switch (G__26049) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26047.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__){
return (function (state_26219){
var state_val_26220 = (state_26219[(1)]);
if((state_val_26220 === (7))){
var inst_26215 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
var statearr_26221_26262 = state_26219__$1;
(statearr_26221_26262[(2)] = inst_26215);

(statearr_26221_26262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (20))){
var inst_26185 = (state_26219[(7)]);
var inst_26196 = (state_26219[(2)]);
var inst_26197 = cljs.core.next.call(null,inst_26185);
var inst_26171 = inst_26197;
var inst_26172 = null;
var inst_26173 = (0);
var inst_26174 = (0);
var state_26219__$1 = (function (){var statearr_26222 = state_26219;
(statearr_26222[(8)] = inst_26172);

(statearr_26222[(9)] = inst_26174);

(statearr_26222[(10)] = inst_26173);

(statearr_26222[(11)] = inst_26171);

(statearr_26222[(12)] = inst_26196);

return statearr_26222;
})();
var statearr_26223_26263 = state_26219__$1;
(statearr_26223_26263[(2)] = null);

(statearr_26223_26263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (1))){
var state_26219__$1 = state_26219;
var statearr_26224_26264 = state_26219__$1;
(statearr_26224_26264[(2)] = null);

(statearr_26224_26264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (4))){
var inst_26160 = (state_26219[(13)]);
var inst_26160__$1 = (state_26219[(2)]);
var inst_26161 = (inst_26160__$1 == null);
var state_26219__$1 = (function (){var statearr_26225 = state_26219;
(statearr_26225[(13)] = inst_26160__$1);

return statearr_26225;
})();
if(cljs.core.truth_(inst_26161)){
var statearr_26226_26265 = state_26219__$1;
(statearr_26226_26265[(1)] = (5));

} else {
var statearr_26227_26266 = state_26219__$1;
(statearr_26227_26266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (15))){
var state_26219__$1 = state_26219;
var statearr_26231_26267 = state_26219__$1;
(statearr_26231_26267[(2)] = null);

(statearr_26231_26267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (21))){
var state_26219__$1 = state_26219;
var statearr_26232_26268 = state_26219__$1;
(statearr_26232_26268[(2)] = null);

(statearr_26232_26268[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (13))){
var inst_26172 = (state_26219[(8)]);
var inst_26174 = (state_26219[(9)]);
var inst_26173 = (state_26219[(10)]);
var inst_26171 = (state_26219[(11)]);
var inst_26181 = (state_26219[(2)]);
var inst_26182 = (inst_26174 + (1));
var tmp26228 = inst_26172;
var tmp26229 = inst_26173;
var tmp26230 = inst_26171;
var inst_26171__$1 = tmp26230;
var inst_26172__$1 = tmp26228;
var inst_26173__$1 = tmp26229;
var inst_26174__$1 = inst_26182;
var state_26219__$1 = (function (){var statearr_26233 = state_26219;
(statearr_26233[(8)] = inst_26172__$1);

(statearr_26233[(9)] = inst_26174__$1);

(statearr_26233[(10)] = inst_26173__$1);

(statearr_26233[(11)] = inst_26171__$1);

(statearr_26233[(14)] = inst_26181);

return statearr_26233;
})();
var statearr_26234_26269 = state_26219__$1;
(statearr_26234_26269[(2)] = null);

(statearr_26234_26269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (22))){
var state_26219__$1 = state_26219;
var statearr_26235_26270 = state_26219__$1;
(statearr_26235_26270[(2)] = null);

(statearr_26235_26270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (6))){
var inst_26160 = (state_26219[(13)]);
var inst_26169 = f.call(null,inst_26160);
var inst_26170 = cljs.core.seq.call(null,inst_26169);
var inst_26171 = inst_26170;
var inst_26172 = null;
var inst_26173 = (0);
var inst_26174 = (0);
var state_26219__$1 = (function (){var statearr_26236 = state_26219;
(statearr_26236[(8)] = inst_26172);

(statearr_26236[(9)] = inst_26174);

(statearr_26236[(10)] = inst_26173);

(statearr_26236[(11)] = inst_26171);

return statearr_26236;
})();
var statearr_26237_26271 = state_26219__$1;
(statearr_26237_26271[(2)] = null);

(statearr_26237_26271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (17))){
var inst_26185 = (state_26219[(7)]);
var inst_26189 = cljs.core.chunk_first.call(null,inst_26185);
var inst_26190 = cljs.core.chunk_rest.call(null,inst_26185);
var inst_26191 = cljs.core.count.call(null,inst_26189);
var inst_26171 = inst_26190;
var inst_26172 = inst_26189;
var inst_26173 = inst_26191;
var inst_26174 = (0);
var state_26219__$1 = (function (){var statearr_26238 = state_26219;
(statearr_26238[(8)] = inst_26172);

(statearr_26238[(9)] = inst_26174);

(statearr_26238[(10)] = inst_26173);

(statearr_26238[(11)] = inst_26171);

return statearr_26238;
})();
var statearr_26239_26272 = state_26219__$1;
(statearr_26239_26272[(2)] = null);

(statearr_26239_26272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (3))){
var inst_26217 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26219__$1,inst_26217);
} else {
if((state_val_26220 === (12))){
var inst_26205 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
var statearr_26240_26273 = state_26219__$1;
(statearr_26240_26273[(2)] = inst_26205);

(statearr_26240_26273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (2))){
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26219__$1,(4),in$);
} else {
if((state_val_26220 === (23))){
var inst_26213 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
var statearr_26241_26274 = state_26219__$1;
(statearr_26241_26274[(2)] = inst_26213);

(statearr_26241_26274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (19))){
var inst_26200 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
var statearr_26242_26275 = state_26219__$1;
(statearr_26242_26275[(2)] = inst_26200);

(statearr_26242_26275[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (11))){
var inst_26185 = (state_26219[(7)]);
var inst_26171 = (state_26219[(11)]);
var inst_26185__$1 = cljs.core.seq.call(null,inst_26171);
var state_26219__$1 = (function (){var statearr_26243 = state_26219;
(statearr_26243[(7)] = inst_26185__$1);

return statearr_26243;
})();
if(inst_26185__$1){
var statearr_26244_26276 = state_26219__$1;
(statearr_26244_26276[(1)] = (14));

} else {
var statearr_26245_26277 = state_26219__$1;
(statearr_26245_26277[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (9))){
var inst_26207 = (state_26219[(2)]);
var inst_26208 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26219__$1 = (function (){var statearr_26246 = state_26219;
(statearr_26246[(15)] = inst_26207);

return statearr_26246;
})();
if(cljs.core.truth_(inst_26208)){
var statearr_26247_26278 = state_26219__$1;
(statearr_26247_26278[(1)] = (21));

} else {
var statearr_26248_26279 = state_26219__$1;
(statearr_26248_26279[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (5))){
var inst_26163 = cljs.core.async.close_BANG_.call(null,out);
var state_26219__$1 = state_26219;
var statearr_26249_26280 = state_26219__$1;
(statearr_26249_26280[(2)] = inst_26163);

(statearr_26249_26280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (14))){
var inst_26185 = (state_26219[(7)]);
var inst_26187 = cljs.core.chunked_seq_QMARK_.call(null,inst_26185);
var state_26219__$1 = state_26219;
if(inst_26187){
var statearr_26250_26281 = state_26219__$1;
(statearr_26250_26281[(1)] = (17));

} else {
var statearr_26251_26282 = state_26219__$1;
(statearr_26251_26282[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (16))){
var inst_26203 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
var statearr_26252_26283 = state_26219__$1;
(statearr_26252_26283[(2)] = inst_26203);

(statearr_26252_26283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (10))){
var inst_26172 = (state_26219[(8)]);
var inst_26174 = (state_26219[(9)]);
var inst_26179 = cljs.core._nth.call(null,inst_26172,inst_26174);
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26219__$1,(13),out,inst_26179);
} else {
if((state_val_26220 === (18))){
var inst_26185 = (state_26219[(7)]);
var inst_26194 = cljs.core.first.call(null,inst_26185);
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26219__$1,(20),out,inst_26194);
} else {
if((state_val_26220 === (8))){
var inst_26174 = (state_26219[(9)]);
var inst_26173 = (state_26219[(10)]);
var inst_26176 = (inst_26174 < inst_26173);
var inst_26177 = inst_26176;
var state_26219__$1 = state_26219;
if(cljs.core.truth_(inst_26177)){
var statearr_26253_26284 = state_26219__$1;
(statearr_26253_26284[(1)] = (10));

} else {
var statearr_26254_26285 = state_26219__$1;
(statearr_26254_26285[(1)] = (11));

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
});})(c__18942__auto__))
;
return ((function (switch__18921__auto__,c__18942__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18922__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18922__auto____0 = (function (){
var statearr_26258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26258[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18922__auto__);

(statearr_26258[(1)] = (1));

return statearr_26258;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18922__auto____1 = (function (state_26219){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26259){if((e26259 instanceof Object)){
var ex__18925__auto__ = e26259;
var statearr_26260_26286 = state_26219;
(statearr_26260_26286[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26287 = state_26219;
state_26219 = G__26287;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18922__auto__ = function(state_26219){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18922__auto____1.call(this,state_26219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18922__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18922__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__))
})();
var state__18944__auto__ = (function (){var statearr_26261 = f__18943__auto__.call(null);
(statearr_26261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_26261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__))
);

return c__18942__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26288 = [];
var len__17884__auto___26291 = arguments.length;
var i__17885__auto___26292 = (0);
while(true){
if((i__17885__auto___26292 < len__17884__auto___26291)){
args26288.push((arguments[i__17885__auto___26292]));

var G__26293 = (i__17885__auto___26292 + (1));
i__17885__auto___26292 = G__26293;
continue;
} else {
}
break;
}

var G__26290 = args26288.length;
switch (G__26290) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26288.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26295 = [];
var len__17884__auto___26298 = arguments.length;
var i__17885__auto___26299 = (0);
while(true){
if((i__17885__auto___26299 < len__17884__auto___26298)){
args26295.push((arguments[i__17885__auto___26299]));

var G__26300 = (i__17885__auto___26299 + (1));
i__17885__auto___26299 = G__26300;
continue;
} else {
}
break;
}

var G__26297 = args26295.length;
switch (G__26297) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26295.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26302 = [];
var len__17884__auto___26353 = arguments.length;
var i__17885__auto___26354 = (0);
while(true){
if((i__17885__auto___26354 < len__17884__auto___26353)){
args26302.push((arguments[i__17885__auto___26354]));

var G__26355 = (i__17885__auto___26354 + (1));
i__17885__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var G__26304 = args26302.length;
switch (G__26304) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26302.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18942__auto___26357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___26357,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___26357,out){
return (function (state_26328){
var state_val_26329 = (state_26328[(1)]);
if((state_val_26329 === (7))){
var inst_26323 = (state_26328[(2)]);
var state_26328__$1 = state_26328;
var statearr_26330_26358 = state_26328__$1;
(statearr_26330_26358[(2)] = inst_26323);

(statearr_26330_26358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26329 === (1))){
var inst_26305 = null;
var state_26328__$1 = (function (){var statearr_26331 = state_26328;
(statearr_26331[(7)] = inst_26305);

return statearr_26331;
})();
var statearr_26332_26359 = state_26328__$1;
(statearr_26332_26359[(2)] = null);

(statearr_26332_26359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26329 === (4))){
var inst_26308 = (state_26328[(8)]);
var inst_26308__$1 = (state_26328[(2)]);
var inst_26309 = (inst_26308__$1 == null);
var inst_26310 = cljs.core.not.call(null,inst_26309);
var state_26328__$1 = (function (){var statearr_26333 = state_26328;
(statearr_26333[(8)] = inst_26308__$1);

return statearr_26333;
})();
if(inst_26310){
var statearr_26334_26360 = state_26328__$1;
(statearr_26334_26360[(1)] = (5));

} else {
var statearr_26335_26361 = state_26328__$1;
(statearr_26335_26361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26329 === (6))){
var state_26328__$1 = state_26328;
var statearr_26336_26362 = state_26328__$1;
(statearr_26336_26362[(2)] = null);

(statearr_26336_26362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26329 === (3))){
var inst_26325 = (state_26328[(2)]);
var inst_26326 = cljs.core.async.close_BANG_.call(null,out);
var state_26328__$1 = (function (){var statearr_26337 = state_26328;
(statearr_26337[(9)] = inst_26325);

return statearr_26337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26328__$1,inst_26326);
} else {
if((state_val_26329 === (2))){
var state_26328__$1 = state_26328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26328__$1,(4),ch);
} else {
if((state_val_26329 === (11))){
var inst_26308 = (state_26328[(8)]);
var inst_26317 = (state_26328[(2)]);
var inst_26305 = inst_26308;
var state_26328__$1 = (function (){var statearr_26338 = state_26328;
(statearr_26338[(10)] = inst_26317);

(statearr_26338[(7)] = inst_26305);

return statearr_26338;
})();
var statearr_26339_26363 = state_26328__$1;
(statearr_26339_26363[(2)] = null);

(statearr_26339_26363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26329 === (9))){
var inst_26308 = (state_26328[(8)]);
var state_26328__$1 = state_26328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26328__$1,(11),out,inst_26308);
} else {
if((state_val_26329 === (5))){
var inst_26308 = (state_26328[(8)]);
var inst_26305 = (state_26328[(7)]);
var inst_26312 = cljs.core._EQ_.call(null,inst_26308,inst_26305);
var state_26328__$1 = state_26328;
if(inst_26312){
var statearr_26341_26364 = state_26328__$1;
(statearr_26341_26364[(1)] = (8));

} else {
var statearr_26342_26365 = state_26328__$1;
(statearr_26342_26365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26329 === (10))){
var inst_26320 = (state_26328[(2)]);
var state_26328__$1 = state_26328;
var statearr_26343_26366 = state_26328__$1;
(statearr_26343_26366[(2)] = inst_26320);

(statearr_26343_26366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26329 === (8))){
var inst_26305 = (state_26328[(7)]);
var tmp26340 = inst_26305;
var inst_26305__$1 = tmp26340;
var state_26328__$1 = (function (){var statearr_26344 = state_26328;
(statearr_26344[(7)] = inst_26305__$1);

return statearr_26344;
})();
var statearr_26345_26367 = state_26328__$1;
(statearr_26345_26367[(2)] = null);

(statearr_26345_26367[(1)] = (2));


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
});})(c__18942__auto___26357,out))
;
return ((function (switch__18921__auto__,c__18942__auto___26357,out){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_26349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26349[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_26349[(1)] = (1));

return statearr_26349;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_26328){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26350){if((e26350 instanceof Object)){
var ex__18925__auto__ = e26350;
var statearr_26351_26368 = state_26328;
(statearr_26351_26368[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26369 = state_26328;
state_26328 = G__26369;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_26328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_26328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___26357,out))
})();
var state__18944__auto__ = (function (){var statearr_26352 = f__18943__auto__.call(null);
(statearr_26352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___26357);

return statearr_26352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___26357,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26370 = [];
var len__17884__auto___26440 = arguments.length;
var i__17885__auto___26441 = (0);
while(true){
if((i__17885__auto___26441 < len__17884__auto___26440)){
args26370.push((arguments[i__17885__auto___26441]));

var G__26442 = (i__17885__auto___26441 + (1));
i__17885__auto___26441 = G__26442;
continue;
} else {
}
break;
}

var G__26372 = args26370.length;
switch (G__26372) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26370.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18942__auto___26444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___26444,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___26444,out){
return (function (state_26410){
var state_val_26411 = (state_26410[(1)]);
if((state_val_26411 === (7))){
var inst_26406 = (state_26410[(2)]);
var state_26410__$1 = state_26410;
var statearr_26412_26445 = state_26410__$1;
(statearr_26412_26445[(2)] = inst_26406);

(statearr_26412_26445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (1))){
var inst_26373 = (new Array(n));
var inst_26374 = inst_26373;
var inst_26375 = (0);
var state_26410__$1 = (function (){var statearr_26413 = state_26410;
(statearr_26413[(7)] = inst_26374);

(statearr_26413[(8)] = inst_26375);

return statearr_26413;
})();
var statearr_26414_26446 = state_26410__$1;
(statearr_26414_26446[(2)] = null);

(statearr_26414_26446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (4))){
var inst_26378 = (state_26410[(9)]);
var inst_26378__$1 = (state_26410[(2)]);
var inst_26379 = (inst_26378__$1 == null);
var inst_26380 = cljs.core.not.call(null,inst_26379);
var state_26410__$1 = (function (){var statearr_26415 = state_26410;
(statearr_26415[(9)] = inst_26378__$1);

return statearr_26415;
})();
if(inst_26380){
var statearr_26416_26447 = state_26410__$1;
(statearr_26416_26447[(1)] = (5));

} else {
var statearr_26417_26448 = state_26410__$1;
(statearr_26417_26448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (15))){
var inst_26400 = (state_26410[(2)]);
var state_26410__$1 = state_26410;
var statearr_26418_26449 = state_26410__$1;
(statearr_26418_26449[(2)] = inst_26400);

(statearr_26418_26449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (13))){
var state_26410__$1 = state_26410;
var statearr_26419_26450 = state_26410__$1;
(statearr_26419_26450[(2)] = null);

(statearr_26419_26450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (6))){
var inst_26375 = (state_26410[(8)]);
var inst_26396 = (inst_26375 > (0));
var state_26410__$1 = state_26410;
if(cljs.core.truth_(inst_26396)){
var statearr_26420_26451 = state_26410__$1;
(statearr_26420_26451[(1)] = (12));

} else {
var statearr_26421_26452 = state_26410__$1;
(statearr_26421_26452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (3))){
var inst_26408 = (state_26410[(2)]);
var state_26410__$1 = state_26410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26410__$1,inst_26408);
} else {
if((state_val_26411 === (12))){
var inst_26374 = (state_26410[(7)]);
var inst_26398 = cljs.core.vec.call(null,inst_26374);
var state_26410__$1 = state_26410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26410__$1,(15),out,inst_26398);
} else {
if((state_val_26411 === (2))){
var state_26410__$1 = state_26410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26410__$1,(4),ch);
} else {
if((state_val_26411 === (11))){
var inst_26390 = (state_26410[(2)]);
var inst_26391 = (new Array(n));
var inst_26374 = inst_26391;
var inst_26375 = (0);
var state_26410__$1 = (function (){var statearr_26422 = state_26410;
(statearr_26422[(10)] = inst_26390);

(statearr_26422[(7)] = inst_26374);

(statearr_26422[(8)] = inst_26375);

return statearr_26422;
})();
var statearr_26423_26453 = state_26410__$1;
(statearr_26423_26453[(2)] = null);

(statearr_26423_26453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (9))){
var inst_26374 = (state_26410[(7)]);
var inst_26388 = cljs.core.vec.call(null,inst_26374);
var state_26410__$1 = state_26410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26410__$1,(11),out,inst_26388);
} else {
if((state_val_26411 === (5))){
var inst_26378 = (state_26410[(9)]);
var inst_26374 = (state_26410[(7)]);
var inst_26383 = (state_26410[(11)]);
var inst_26375 = (state_26410[(8)]);
var inst_26382 = (inst_26374[inst_26375] = inst_26378);
var inst_26383__$1 = (inst_26375 + (1));
var inst_26384 = (inst_26383__$1 < n);
var state_26410__$1 = (function (){var statearr_26424 = state_26410;
(statearr_26424[(12)] = inst_26382);

(statearr_26424[(11)] = inst_26383__$1);

return statearr_26424;
})();
if(cljs.core.truth_(inst_26384)){
var statearr_26425_26454 = state_26410__$1;
(statearr_26425_26454[(1)] = (8));

} else {
var statearr_26426_26455 = state_26410__$1;
(statearr_26426_26455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (14))){
var inst_26403 = (state_26410[(2)]);
var inst_26404 = cljs.core.async.close_BANG_.call(null,out);
var state_26410__$1 = (function (){var statearr_26428 = state_26410;
(statearr_26428[(13)] = inst_26403);

return statearr_26428;
})();
var statearr_26429_26456 = state_26410__$1;
(statearr_26429_26456[(2)] = inst_26404);

(statearr_26429_26456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (10))){
var inst_26394 = (state_26410[(2)]);
var state_26410__$1 = state_26410;
var statearr_26430_26457 = state_26410__$1;
(statearr_26430_26457[(2)] = inst_26394);

(statearr_26430_26457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (8))){
var inst_26374 = (state_26410[(7)]);
var inst_26383 = (state_26410[(11)]);
var tmp26427 = inst_26374;
var inst_26374__$1 = tmp26427;
var inst_26375 = inst_26383;
var state_26410__$1 = (function (){var statearr_26431 = state_26410;
(statearr_26431[(7)] = inst_26374__$1);

(statearr_26431[(8)] = inst_26375);

return statearr_26431;
})();
var statearr_26432_26458 = state_26410__$1;
(statearr_26432_26458[(2)] = null);

(statearr_26432_26458[(1)] = (2));


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
});})(c__18942__auto___26444,out))
;
return ((function (switch__18921__auto__,c__18942__auto___26444,out){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_26436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26436[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_26436[(1)] = (1));

return statearr_26436;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_26410){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26437){if((e26437 instanceof Object)){
var ex__18925__auto__ = e26437;
var statearr_26438_26459 = state_26410;
(statearr_26438_26459[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26460 = state_26410;
state_26410 = G__26460;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_26410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_26410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___26444,out))
})();
var state__18944__auto__ = (function (){var statearr_26439 = f__18943__auto__.call(null);
(statearr_26439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___26444);

return statearr_26439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___26444,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26461 = [];
var len__17884__auto___26535 = arguments.length;
var i__17885__auto___26536 = (0);
while(true){
if((i__17885__auto___26536 < len__17884__auto___26535)){
args26461.push((arguments[i__17885__auto___26536]));

var G__26537 = (i__17885__auto___26536 + (1));
i__17885__auto___26536 = G__26537;
continue;
} else {
}
break;
}

var G__26463 = args26461.length;
switch (G__26463) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26461.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18942__auto___26539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___26539,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___26539,out){
return (function (state_26505){
var state_val_26506 = (state_26505[(1)]);
if((state_val_26506 === (7))){
var inst_26501 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26507_26540 = state_26505__$1;
(statearr_26507_26540[(2)] = inst_26501);

(statearr_26507_26540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (1))){
var inst_26464 = [];
var inst_26465 = inst_26464;
var inst_26466 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26505__$1 = (function (){var statearr_26508 = state_26505;
(statearr_26508[(7)] = inst_26466);

(statearr_26508[(8)] = inst_26465);

return statearr_26508;
})();
var statearr_26509_26541 = state_26505__$1;
(statearr_26509_26541[(2)] = null);

(statearr_26509_26541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (4))){
var inst_26469 = (state_26505[(9)]);
var inst_26469__$1 = (state_26505[(2)]);
var inst_26470 = (inst_26469__$1 == null);
var inst_26471 = cljs.core.not.call(null,inst_26470);
var state_26505__$1 = (function (){var statearr_26510 = state_26505;
(statearr_26510[(9)] = inst_26469__$1);

return statearr_26510;
})();
if(inst_26471){
var statearr_26511_26542 = state_26505__$1;
(statearr_26511_26542[(1)] = (5));

} else {
var statearr_26512_26543 = state_26505__$1;
(statearr_26512_26543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (15))){
var inst_26495 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26513_26544 = state_26505__$1;
(statearr_26513_26544[(2)] = inst_26495);

(statearr_26513_26544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (13))){
var state_26505__$1 = state_26505;
var statearr_26514_26545 = state_26505__$1;
(statearr_26514_26545[(2)] = null);

(statearr_26514_26545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (6))){
var inst_26465 = (state_26505[(8)]);
var inst_26490 = inst_26465.length;
var inst_26491 = (inst_26490 > (0));
var state_26505__$1 = state_26505;
if(cljs.core.truth_(inst_26491)){
var statearr_26515_26546 = state_26505__$1;
(statearr_26515_26546[(1)] = (12));

} else {
var statearr_26516_26547 = state_26505__$1;
(statearr_26516_26547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (3))){
var inst_26503 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26505__$1,inst_26503);
} else {
if((state_val_26506 === (12))){
var inst_26465 = (state_26505[(8)]);
var inst_26493 = cljs.core.vec.call(null,inst_26465);
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26505__$1,(15),out,inst_26493);
} else {
if((state_val_26506 === (2))){
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26505__$1,(4),ch);
} else {
if((state_val_26506 === (11))){
var inst_26469 = (state_26505[(9)]);
var inst_26473 = (state_26505[(10)]);
var inst_26483 = (state_26505[(2)]);
var inst_26484 = [];
var inst_26485 = inst_26484.push(inst_26469);
var inst_26465 = inst_26484;
var inst_26466 = inst_26473;
var state_26505__$1 = (function (){var statearr_26517 = state_26505;
(statearr_26517[(11)] = inst_26483);

(statearr_26517[(7)] = inst_26466);

(statearr_26517[(12)] = inst_26485);

(statearr_26517[(8)] = inst_26465);

return statearr_26517;
})();
var statearr_26518_26548 = state_26505__$1;
(statearr_26518_26548[(2)] = null);

(statearr_26518_26548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (9))){
var inst_26465 = (state_26505[(8)]);
var inst_26481 = cljs.core.vec.call(null,inst_26465);
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26505__$1,(11),out,inst_26481);
} else {
if((state_val_26506 === (5))){
var inst_26469 = (state_26505[(9)]);
var inst_26473 = (state_26505[(10)]);
var inst_26466 = (state_26505[(7)]);
var inst_26473__$1 = f.call(null,inst_26469);
var inst_26474 = cljs.core._EQ_.call(null,inst_26473__$1,inst_26466);
var inst_26475 = cljs.core.keyword_identical_QMARK_.call(null,inst_26466,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26476 = (inst_26474) || (inst_26475);
var state_26505__$1 = (function (){var statearr_26519 = state_26505;
(statearr_26519[(10)] = inst_26473__$1);

return statearr_26519;
})();
if(cljs.core.truth_(inst_26476)){
var statearr_26520_26549 = state_26505__$1;
(statearr_26520_26549[(1)] = (8));

} else {
var statearr_26521_26550 = state_26505__$1;
(statearr_26521_26550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (14))){
var inst_26498 = (state_26505[(2)]);
var inst_26499 = cljs.core.async.close_BANG_.call(null,out);
var state_26505__$1 = (function (){var statearr_26523 = state_26505;
(statearr_26523[(13)] = inst_26498);

return statearr_26523;
})();
var statearr_26524_26551 = state_26505__$1;
(statearr_26524_26551[(2)] = inst_26499);

(statearr_26524_26551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (10))){
var inst_26488 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26525_26552 = state_26505__$1;
(statearr_26525_26552[(2)] = inst_26488);

(statearr_26525_26552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (8))){
var inst_26469 = (state_26505[(9)]);
var inst_26473 = (state_26505[(10)]);
var inst_26465 = (state_26505[(8)]);
var inst_26478 = inst_26465.push(inst_26469);
var tmp26522 = inst_26465;
var inst_26465__$1 = tmp26522;
var inst_26466 = inst_26473;
var state_26505__$1 = (function (){var statearr_26526 = state_26505;
(statearr_26526[(14)] = inst_26478);

(statearr_26526[(7)] = inst_26466);

(statearr_26526[(8)] = inst_26465__$1);

return statearr_26526;
})();
var statearr_26527_26553 = state_26505__$1;
(statearr_26527_26553[(2)] = null);

(statearr_26527_26553[(1)] = (2));


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
});})(c__18942__auto___26539,out))
;
return ((function (switch__18921__auto__,c__18942__auto___26539,out){
return (function() {
var cljs$core$async$state_machine__18922__auto__ = null;
var cljs$core$async$state_machine__18922__auto____0 = (function (){
var statearr_26531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26531[(0)] = cljs$core$async$state_machine__18922__auto__);

(statearr_26531[(1)] = (1));

return statearr_26531;
});
var cljs$core$async$state_machine__18922__auto____1 = (function (state_26505){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26532){if((e26532 instanceof Object)){
var ex__18925__auto__ = e26532;
var statearr_26533_26554 = state_26505;
(statearr_26533_26554[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26555 = state_26505;
state_26505 = G__26555;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
cljs$core$async$state_machine__18922__auto__ = function(state_26505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18922__auto____1.call(this,state_26505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18922__auto____0;
cljs$core$async$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18922__auto____1;
return cljs$core$async$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___26539,out))
})();
var state__18944__auto__ = (function (){var statearr_26534 = f__18943__auto__.call(null);
(statearr_26534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___26539);

return statearr_26534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___26539,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1451439998663