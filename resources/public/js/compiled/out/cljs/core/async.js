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
var args23571 = [];
var len__17884__auto___23577 = arguments.length;
var i__17885__auto___23578 = (0);
while(true){
if((i__17885__auto___23578 < len__17884__auto___23577)){
args23571.push((arguments[i__17885__auto___23578]));

var G__23579 = (i__17885__auto___23578 + (1));
i__17885__auto___23578 = G__23579;
continue;
} else {
}
break;
}

var G__23573 = args23571.length;
switch (G__23573) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23571.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23574 = (function (f,blockable,meta23575){
this.f = f;
this.blockable = blockable;
this.meta23575 = meta23575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23576,meta23575__$1){
var self__ = this;
var _23576__$1 = this;
return (new cljs.core.async.t_cljs$core$async23574(self__.f,self__.blockable,meta23575__$1));
});

cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23576){
var self__ = this;
var _23576__$1 = this;
return self__.meta23575;
});

cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23575","meta23575",-355995486,null)], null);
});

cljs.core.async.t_cljs$core$async23574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23574";

cljs.core.async.t_cljs$core$async23574.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23574");
});

cljs.core.async.__GT_t_cljs$core$async23574 = (function cljs$core$async$__GT_t_cljs$core$async23574(f__$1,blockable__$1,meta23575){
return (new cljs.core.async.t_cljs$core$async23574(f__$1,blockable__$1,meta23575));
});

}

return (new cljs.core.async.t_cljs$core$async23574(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23583 = [];
var len__17884__auto___23586 = arguments.length;
var i__17885__auto___23587 = (0);
while(true){
if((i__17885__auto___23587 < len__17884__auto___23586)){
args23583.push((arguments[i__17885__auto___23587]));

var G__23588 = (i__17885__auto___23587 + (1));
i__17885__auto___23587 = G__23588;
continue;
} else {
}
break;
}

var G__23585 = args23583.length;
switch (G__23585) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23583.length)].join('')));

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
var args23590 = [];
var len__17884__auto___23593 = arguments.length;
var i__17885__auto___23594 = (0);
while(true){
if((i__17885__auto___23594 < len__17884__auto___23593)){
args23590.push((arguments[i__17885__auto___23594]));

var G__23595 = (i__17885__auto___23594 + (1));
i__17885__auto___23594 = G__23595;
continue;
} else {
}
break;
}

var G__23592 = args23590.length;
switch (G__23592) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23590.length)].join('')));

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
var args23597 = [];
var len__17884__auto___23600 = arguments.length;
var i__17885__auto___23601 = (0);
while(true){
if((i__17885__auto___23601 < len__17884__auto___23600)){
args23597.push((arguments[i__17885__auto___23601]));

var G__23602 = (i__17885__auto___23601 + (1));
i__17885__auto___23601 = G__23602;
continue;
} else {
}
break;
}

var G__23599 = args23597.length;
switch (G__23599) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23597.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23604 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23604);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23604,ret){
return (function (){
return fn1.call(null,val_23604);
});})(val_23604,ret))
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
var args23605 = [];
var len__17884__auto___23608 = arguments.length;
var i__17885__auto___23609 = (0);
while(true){
if((i__17885__auto___23609 < len__17884__auto___23608)){
args23605.push((arguments[i__17885__auto___23609]));

var G__23610 = (i__17885__auto___23609 + (1));
i__17885__auto___23609 = G__23610;
continue;
} else {
}
break;
}

var G__23607 = args23605.length;
switch (G__23607) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23605.length)].join('')));

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
var n__17729__auto___23612 = n;
var x_23613 = (0);
while(true){
if((x_23613 < n__17729__auto___23612)){
(a[x_23613] = (0));

var G__23614 = (x_23613 + (1));
x_23613 = G__23614;
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

var G__23615 = (i + (1));
i = G__23615;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23619 = (function (alt_flag,flag,meta23620){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23620 = meta23620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23621,meta23620__$1){
var self__ = this;
var _23621__$1 = this;
return (new cljs.core.async.t_cljs$core$async23619(self__.alt_flag,self__.flag,meta23620__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23621){
var self__ = this;
var _23621__$1 = this;
return self__.meta23620;
});})(flag))
;

cljs.core.async.t_cljs$core$async23619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23619.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23619.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23620","meta23620",903747787,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23619";

cljs.core.async.t_cljs$core$async23619.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23619");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23619 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23619(alt_flag__$1,flag__$1,meta23620){
return (new cljs.core.async.t_cljs$core$async23619(alt_flag__$1,flag__$1,meta23620));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23619(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23625 = (function (alt_handler,flag,cb,meta23626){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23626 = meta23626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23627,meta23626__$1){
var self__ = this;
var _23627__$1 = this;
return (new cljs.core.async.t_cljs$core$async23625(self__.alt_handler,self__.flag,self__.cb,meta23626__$1));
});

cljs.core.async.t_cljs$core$async23625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23627){
var self__ = this;
var _23627__$1 = this;
return self__.meta23626;
});

cljs.core.async.t_cljs$core$async23625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23626","meta23626",2048095111,null)], null);
});

cljs.core.async.t_cljs$core$async23625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23625";

cljs.core.async.t_cljs$core$async23625.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23625");
});

cljs.core.async.__GT_t_cljs$core$async23625 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23625(alt_handler__$1,flag__$1,cb__$1,meta23626){
return (new cljs.core.async.t_cljs$core$async23625(alt_handler__$1,flag__$1,cb__$1,meta23626));
});

}

return (new cljs.core.async.t_cljs$core$async23625(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23628_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23628_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23629_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23629_SHARP_,port], null));
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
var G__23630 = (i + (1));
i = G__23630;
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
var len__17884__auto___23636 = arguments.length;
var i__17885__auto___23637 = (0);
while(true){
if((i__17885__auto___23637 < len__17884__auto___23636)){
args__17891__auto__.push((arguments[i__17885__auto___23637]));

var G__23638 = (i__17885__auto___23637 + (1));
i__17885__auto___23637 = G__23638;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23633){
var map__23634 = p__23633;
var map__23634__$1 = ((((!((map__23634 == null)))?((((map__23634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23634):map__23634);
var opts = map__23634__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23631){
var G__23632 = cljs.core.first.call(null,seq23631);
var seq23631__$1 = cljs.core.next.call(null,seq23631);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23632,seq23631__$1);
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
var args23639 = [];
var len__17884__auto___23689 = arguments.length;
var i__17885__auto___23690 = (0);
while(true){
if((i__17885__auto___23690 < len__17884__auto___23689)){
args23639.push((arguments[i__17885__auto___23690]));

var G__23691 = (i__17885__auto___23690 + (1));
i__17885__auto___23690 = G__23691;
continue;
} else {
}
break;
}

var G__23641 = args23639.length;
switch (G__23641) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23639.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23526__auto___23693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___23693){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___23693){
return (function (state_23665){
var state_val_23666 = (state_23665[(1)]);
if((state_val_23666 === (7))){
var inst_23661 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23667_23694 = state_23665__$1;
(statearr_23667_23694[(2)] = inst_23661);

(statearr_23667_23694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (1))){
var state_23665__$1 = state_23665;
var statearr_23668_23695 = state_23665__$1;
(statearr_23668_23695[(2)] = null);

(statearr_23668_23695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (4))){
var inst_23644 = (state_23665[(7)]);
var inst_23644__$1 = (state_23665[(2)]);
var inst_23645 = (inst_23644__$1 == null);
var state_23665__$1 = (function (){var statearr_23669 = state_23665;
(statearr_23669[(7)] = inst_23644__$1);

return statearr_23669;
})();
if(cljs.core.truth_(inst_23645)){
var statearr_23670_23696 = state_23665__$1;
(statearr_23670_23696[(1)] = (5));

} else {
var statearr_23671_23697 = state_23665__$1;
(statearr_23671_23697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (13))){
var state_23665__$1 = state_23665;
var statearr_23672_23698 = state_23665__$1;
(statearr_23672_23698[(2)] = null);

(statearr_23672_23698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (6))){
var inst_23644 = (state_23665[(7)]);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23665__$1,(11),to,inst_23644);
} else {
if((state_val_23666 === (3))){
var inst_23663 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23665__$1,inst_23663);
} else {
if((state_val_23666 === (12))){
var state_23665__$1 = state_23665;
var statearr_23673_23699 = state_23665__$1;
(statearr_23673_23699[(2)] = null);

(statearr_23673_23699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (2))){
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23665__$1,(4),from);
} else {
if((state_val_23666 === (11))){
var inst_23654 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
if(cljs.core.truth_(inst_23654)){
var statearr_23674_23700 = state_23665__$1;
(statearr_23674_23700[(1)] = (12));

} else {
var statearr_23675_23701 = state_23665__$1;
(statearr_23675_23701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (9))){
var state_23665__$1 = state_23665;
var statearr_23676_23702 = state_23665__$1;
(statearr_23676_23702[(2)] = null);

(statearr_23676_23702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (5))){
var state_23665__$1 = state_23665;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23677_23703 = state_23665__$1;
(statearr_23677_23703[(1)] = (8));

} else {
var statearr_23678_23704 = state_23665__$1;
(statearr_23678_23704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (14))){
var inst_23659 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23679_23705 = state_23665__$1;
(statearr_23679_23705[(2)] = inst_23659);

(statearr_23679_23705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (10))){
var inst_23651 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23680_23706 = state_23665__$1;
(statearr_23680_23706[(2)] = inst_23651);

(statearr_23680_23706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (8))){
var inst_23648 = cljs.core.async.close_BANG_.call(null,to);
var state_23665__$1 = state_23665;
var statearr_23681_23707 = state_23665__$1;
(statearr_23681_23707[(2)] = inst_23648);

(statearr_23681_23707[(1)] = (10));


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
});})(c__23526__auto___23693))
;
return ((function (switch__23414__auto__,c__23526__auto___23693){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_23685 = [null,null,null,null,null,null,null,null];
(statearr_23685[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_23685[(1)] = (1));

return statearr_23685;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_23665){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_23665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e23686){if((e23686 instanceof Object)){
var ex__23418__auto__ = e23686;
var statearr_23687_23708 = state_23665;
(statearr_23687_23708[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23709 = state_23665;
state_23665 = G__23709;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_23665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_23665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___23693))
})();
var state__23528__auto__ = (function (){var statearr_23688 = f__23527__auto__.call(null);
(statearr_23688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___23693);

return statearr_23688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___23693))
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
return (function (p__23893){
var vec__23894 = p__23893;
var v = cljs.core.nth.call(null,vec__23894,(0),null);
var p = cljs.core.nth.call(null,vec__23894,(1),null);
var job = vec__23894;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23526__auto___24076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___24076,res,vec__23894,v,p,job,jobs,results){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___24076,res,vec__23894,v,p,job,jobs,results){
return (function (state_23899){
var state_val_23900 = (state_23899[(1)]);
if((state_val_23900 === (1))){
var state_23899__$1 = state_23899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23899__$1,(2),res,v);
} else {
if((state_val_23900 === (2))){
var inst_23896 = (state_23899[(2)]);
var inst_23897 = cljs.core.async.close_BANG_.call(null,res);
var state_23899__$1 = (function (){var statearr_23901 = state_23899;
(statearr_23901[(7)] = inst_23896);

return statearr_23901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23899__$1,inst_23897);
} else {
return null;
}
}
});})(c__23526__auto___24076,res,vec__23894,v,p,job,jobs,results))
;
return ((function (switch__23414__auto__,c__23526__auto___24076,res,vec__23894,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0 = (function (){
var statearr_23905 = [null,null,null,null,null,null,null,null];
(statearr_23905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__);

(statearr_23905[(1)] = (1));

return statearr_23905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1 = (function (state_23899){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_23899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e23906){if((e23906 instanceof Object)){
var ex__23418__auto__ = e23906;
var statearr_23907_24077 = state_23899;
(statearr_23907_24077[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24078 = state_23899;
state_23899 = G__24078;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = function(state_23899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1.call(this,state_23899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___24076,res,vec__23894,v,p,job,jobs,results))
})();
var state__23528__auto__ = (function (){var statearr_23908 = f__23527__auto__.call(null);
(statearr_23908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___24076);

return statearr_23908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___24076,res,vec__23894,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23909){
var vec__23910 = p__23909;
var v = cljs.core.nth.call(null,vec__23910,(0),null);
var p = cljs.core.nth.call(null,vec__23910,(1),null);
var job = vec__23910;
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
var n__17729__auto___24079 = n;
var __24080 = (0);
while(true){
if((__24080 < n__17729__auto___24079)){
var G__23911_24081 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23911_24081) {
case "compute":
var c__23526__auto___24083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24080,c__23526__auto___24083,G__23911_24081,n__17729__auto___24079,jobs,results,process,async){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (__24080,c__23526__auto___24083,G__23911_24081,n__17729__auto___24079,jobs,results,process,async){
return (function (state_23924){
var state_val_23925 = (state_23924[(1)]);
if((state_val_23925 === (1))){
var state_23924__$1 = state_23924;
var statearr_23926_24084 = state_23924__$1;
(statearr_23926_24084[(2)] = null);

(statearr_23926_24084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (2))){
var state_23924__$1 = state_23924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23924__$1,(4),jobs);
} else {
if((state_val_23925 === (3))){
var inst_23922 = (state_23924[(2)]);
var state_23924__$1 = state_23924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23924__$1,inst_23922);
} else {
if((state_val_23925 === (4))){
var inst_23914 = (state_23924[(2)]);
var inst_23915 = process.call(null,inst_23914);
var state_23924__$1 = state_23924;
if(cljs.core.truth_(inst_23915)){
var statearr_23927_24085 = state_23924__$1;
(statearr_23927_24085[(1)] = (5));

} else {
var statearr_23928_24086 = state_23924__$1;
(statearr_23928_24086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (5))){
var state_23924__$1 = state_23924;
var statearr_23929_24087 = state_23924__$1;
(statearr_23929_24087[(2)] = null);

(statearr_23929_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (6))){
var state_23924__$1 = state_23924;
var statearr_23930_24088 = state_23924__$1;
(statearr_23930_24088[(2)] = null);

(statearr_23930_24088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (7))){
var inst_23920 = (state_23924[(2)]);
var state_23924__$1 = state_23924;
var statearr_23931_24089 = state_23924__$1;
(statearr_23931_24089[(2)] = inst_23920);

(statearr_23931_24089[(1)] = (3));


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
});})(__24080,c__23526__auto___24083,G__23911_24081,n__17729__auto___24079,jobs,results,process,async))
;
return ((function (__24080,switch__23414__auto__,c__23526__auto___24083,G__23911_24081,n__17729__auto___24079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0 = (function (){
var statearr_23935 = [null,null,null,null,null,null,null];
(statearr_23935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__);

(statearr_23935[(1)] = (1));

return statearr_23935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1 = (function (state_23924){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_23924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e23936){if((e23936 instanceof Object)){
var ex__23418__auto__ = e23936;
var statearr_23937_24090 = state_23924;
(statearr_23937_24090[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24091 = state_23924;
state_23924 = G__24091;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = function(state_23924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1.call(this,state_23924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__;
})()
;})(__24080,switch__23414__auto__,c__23526__auto___24083,G__23911_24081,n__17729__auto___24079,jobs,results,process,async))
})();
var state__23528__auto__ = (function (){var statearr_23938 = f__23527__auto__.call(null);
(statearr_23938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___24083);

return statearr_23938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(__24080,c__23526__auto___24083,G__23911_24081,n__17729__auto___24079,jobs,results,process,async))
);


break;
case "async":
var c__23526__auto___24092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24080,c__23526__auto___24092,G__23911_24081,n__17729__auto___24079,jobs,results,process,async){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (__24080,c__23526__auto___24092,G__23911_24081,n__17729__auto___24079,jobs,results,process,async){
return (function (state_23951){
var state_val_23952 = (state_23951[(1)]);
if((state_val_23952 === (1))){
var state_23951__$1 = state_23951;
var statearr_23953_24093 = state_23951__$1;
(statearr_23953_24093[(2)] = null);

(statearr_23953_24093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (2))){
var state_23951__$1 = state_23951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23951__$1,(4),jobs);
} else {
if((state_val_23952 === (3))){
var inst_23949 = (state_23951[(2)]);
var state_23951__$1 = state_23951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23951__$1,inst_23949);
} else {
if((state_val_23952 === (4))){
var inst_23941 = (state_23951[(2)]);
var inst_23942 = async.call(null,inst_23941);
var state_23951__$1 = state_23951;
if(cljs.core.truth_(inst_23942)){
var statearr_23954_24094 = state_23951__$1;
(statearr_23954_24094[(1)] = (5));

} else {
var statearr_23955_24095 = state_23951__$1;
(statearr_23955_24095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (5))){
var state_23951__$1 = state_23951;
var statearr_23956_24096 = state_23951__$1;
(statearr_23956_24096[(2)] = null);

(statearr_23956_24096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (6))){
var state_23951__$1 = state_23951;
var statearr_23957_24097 = state_23951__$1;
(statearr_23957_24097[(2)] = null);

(statearr_23957_24097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (7))){
var inst_23947 = (state_23951[(2)]);
var state_23951__$1 = state_23951;
var statearr_23958_24098 = state_23951__$1;
(statearr_23958_24098[(2)] = inst_23947);

(statearr_23958_24098[(1)] = (3));


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
});})(__24080,c__23526__auto___24092,G__23911_24081,n__17729__auto___24079,jobs,results,process,async))
;
return ((function (__24080,switch__23414__auto__,c__23526__auto___24092,G__23911_24081,n__17729__auto___24079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0 = (function (){
var statearr_23962 = [null,null,null,null,null,null,null];
(statearr_23962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__);

(statearr_23962[(1)] = (1));

return statearr_23962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1 = (function (state_23951){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_23951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e23963){if((e23963 instanceof Object)){
var ex__23418__auto__ = e23963;
var statearr_23964_24099 = state_23951;
(statearr_23964_24099[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24100 = state_23951;
state_23951 = G__24100;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = function(state_23951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1.call(this,state_23951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__;
})()
;})(__24080,switch__23414__auto__,c__23526__auto___24092,G__23911_24081,n__17729__auto___24079,jobs,results,process,async))
})();
var state__23528__auto__ = (function (){var statearr_23965 = f__23527__auto__.call(null);
(statearr_23965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___24092);

return statearr_23965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(__24080,c__23526__auto___24092,G__23911_24081,n__17729__auto___24079,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24101 = (__24080 + (1));
__24080 = G__24101;
continue;
} else {
}
break;
}

var c__23526__auto___24102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___24102,jobs,results,process,async){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___24102,jobs,results,process,async){
return (function (state_23987){
var state_val_23988 = (state_23987[(1)]);
if((state_val_23988 === (1))){
var state_23987__$1 = state_23987;
var statearr_23989_24103 = state_23987__$1;
(statearr_23989_24103[(2)] = null);

(statearr_23989_24103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (2))){
var state_23987__$1 = state_23987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23987__$1,(4),from);
} else {
if((state_val_23988 === (3))){
var inst_23985 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23987__$1,inst_23985);
} else {
if((state_val_23988 === (4))){
var inst_23968 = (state_23987[(7)]);
var inst_23968__$1 = (state_23987[(2)]);
var inst_23969 = (inst_23968__$1 == null);
var state_23987__$1 = (function (){var statearr_23990 = state_23987;
(statearr_23990[(7)] = inst_23968__$1);

return statearr_23990;
})();
if(cljs.core.truth_(inst_23969)){
var statearr_23991_24104 = state_23987__$1;
(statearr_23991_24104[(1)] = (5));

} else {
var statearr_23992_24105 = state_23987__$1;
(statearr_23992_24105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (5))){
var inst_23971 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23987__$1 = state_23987;
var statearr_23993_24106 = state_23987__$1;
(statearr_23993_24106[(2)] = inst_23971);

(statearr_23993_24106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (6))){
var inst_23973 = (state_23987[(8)]);
var inst_23968 = (state_23987[(7)]);
var inst_23973__$1 = cljs.core.async.chan.call(null,(1));
var inst_23974 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23975 = [inst_23968,inst_23973__$1];
var inst_23976 = (new cljs.core.PersistentVector(null,2,(5),inst_23974,inst_23975,null));
var state_23987__$1 = (function (){var statearr_23994 = state_23987;
(statearr_23994[(8)] = inst_23973__$1);

return statearr_23994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23987__$1,(8),jobs,inst_23976);
} else {
if((state_val_23988 === (7))){
var inst_23983 = (state_23987[(2)]);
var state_23987__$1 = state_23987;
var statearr_23995_24107 = state_23987__$1;
(statearr_23995_24107[(2)] = inst_23983);

(statearr_23995_24107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23988 === (8))){
var inst_23973 = (state_23987[(8)]);
var inst_23978 = (state_23987[(2)]);
var state_23987__$1 = (function (){var statearr_23996 = state_23987;
(statearr_23996[(9)] = inst_23978);

return statearr_23996;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23987__$1,(9),results,inst_23973);
} else {
if((state_val_23988 === (9))){
var inst_23980 = (state_23987[(2)]);
var state_23987__$1 = (function (){var statearr_23997 = state_23987;
(statearr_23997[(10)] = inst_23980);

return statearr_23997;
})();
var statearr_23998_24108 = state_23987__$1;
(statearr_23998_24108[(2)] = null);

(statearr_23998_24108[(1)] = (2));


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
});})(c__23526__auto___24102,jobs,results,process,async))
;
return ((function (switch__23414__auto__,c__23526__auto___24102,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0 = (function (){
var statearr_24002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__);

(statearr_24002[(1)] = (1));

return statearr_24002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1 = (function (state_23987){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_23987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e24003){if((e24003 instanceof Object)){
var ex__23418__auto__ = e24003;
var statearr_24004_24109 = state_23987;
(statearr_24004_24109[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24110 = state_23987;
state_23987 = G__24110;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = function(state_23987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1.call(this,state_23987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___24102,jobs,results,process,async))
})();
var state__23528__auto__ = (function (){var statearr_24005 = f__23527__auto__.call(null);
(statearr_24005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___24102);

return statearr_24005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___24102,jobs,results,process,async))
);


var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__,jobs,results,process,async){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__,jobs,results,process,async){
return (function (state_24043){
var state_val_24044 = (state_24043[(1)]);
if((state_val_24044 === (7))){
var inst_24039 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
var statearr_24045_24111 = state_24043__$1;
(statearr_24045_24111[(2)] = inst_24039);

(statearr_24045_24111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (20))){
var state_24043__$1 = state_24043;
var statearr_24046_24112 = state_24043__$1;
(statearr_24046_24112[(2)] = null);

(statearr_24046_24112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (1))){
var state_24043__$1 = state_24043;
var statearr_24047_24113 = state_24043__$1;
(statearr_24047_24113[(2)] = null);

(statearr_24047_24113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (4))){
var inst_24008 = (state_24043[(7)]);
var inst_24008__$1 = (state_24043[(2)]);
var inst_24009 = (inst_24008__$1 == null);
var state_24043__$1 = (function (){var statearr_24048 = state_24043;
(statearr_24048[(7)] = inst_24008__$1);

return statearr_24048;
})();
if(cljs.core.truth_(inst_24009)){
var statearr_24049_24114 = state_24043__$1;
(statearr_24049_24114[(1)] = (5));

} else {
var statearr_24050_24115 = state_24043__$1;
(statearr_24050_24115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (15))){
var inst_24021 = (state_24043[(8)]);
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24043__$1,(18),to,inst_24021);
} else {
if((state_val_24044 === (21))){
var inst_24034 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
var statearr_24051_24116 = state_24043__$1;
(statearr_24051_24116[(2)] = inst_24034);

(statearr_24051_24116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (13))){
var inst_24036 = (state_24043[(2)]);
var state_24043__$1 = (function (){var statearr_24052 = state_24043;
(statearr_24052[(9)] = inst_24036);

return statearr_24052;
})();
var statearr_24053_24117 = state_24043__$1;
(statearr_24053_24117[(2)] = null);

(statearr_24053_24117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (6))){
var inst_24008 = (state_24043[(7)]);
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24043__$1,(11),inst_24008);
} else {
if((state_val_24044 === (17))){
var inst_24029 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
if(cljs.core.truth_(inst_24029)){
var statearr_24054_24118 = state_24043__$1;
(statearr_24054_24118[(1)] = (19));

} else {
var statearr_24055_24119 = state_24043__$1;
(statearr_24055_24119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (3))){
var inst_24041 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24043__$1,inst_24041);
} else {
if((state_val_24044 === (12))){
var inst_24018 = (state_24043[(10)]);
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24043__$1,(14),inst_24018);
} else {
if((state_val_24044 === (2))){
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24043__$1,(4),results);
} else {
if((state_val_24044 === (19))){
var state_24043__$1 = state_24043;
var statearr_24056_24120 = state_24043__$1;
(statearr_24056_24120[(2)] = null);

(statearr_24056_24120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (11))){
var inst_24018 = (state_24043[(2)]);
var state_24043__$1 = (function (){var statearr_24057 = state_24043;
(statearr_24057[(10)] = inst_24018);

return statearr_24057;
})();
var statearr_24058_24121 = state_24043__$1;
(statearr_24058_24121[(2)] = null);

(statearr_24058_24121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (9))){
var state_24043__$1 = state_24043;
var statearr_24059_24122 = state_24043__$1;
(statearr_24059_24122[(2)] = null);

(statearr_24059_24122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (5))){
var state_24043__$1 = state_24043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24060_24123 = state_24043__$1;
(statearr_24060_24123[(1)] = (8));

} else {
var statearr_24061_24124 = state_24043__$1;
(statearr_24061_24124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (14))){
var inst_24023 = (state_24043[(11)]);
var inst_24021 = (state_24043[(8)]);
var inst_24021__$1 = (state_24043[(2)]);
var inst_24022 = (inst_24021__$1 == null);
var inst_24023__$1 = cljs.core.not.call(null,inst_24022);
var state_24043__$1 = (function (){var statearr_24062 = state_24043;
(statearr_24062[(11)] = inst_24023__$1);

(statearr_24062[(8)] = inst_24021__$1);

return statearr_24062;
})();
if(inst_24023__$1){
var statearr_24063_24125 = state_24043__$1;
(statearr_24063_24125[(1)] = (15));

} else {
var statearr_24064_24126 = state_24043__$1;
(statearr_24064_24126[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (16))){
var inst_24023 = (state_24043[(11)]);
var state_24043__$1 = state_24043;
var statearr_24065_24127 = state_24043__$1;
(statearr_24065_24127[(2)] = inst_24023);

(statearr_24065_24127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (10))){
var inst_24015 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
var statearr_24066_24128 = state_24043__$1;
(statearr_24066_24128[(2)] = inst_24015);

(statearr_24066_24128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (18))){
var inst_24026 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
var statearr_24067_24129 = state_24043__$1;
(statearr_24067_24129[(2)] = inst_24026);

(statearr_24067_24129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (8))){
var inst_24012 = cljs.core.async.close_BANG_.call(null,to);
var state_24043__$1 = state_24043;
var statearr_24068_24130 = state_24043__$1;
(statearr_24068_24130[(2)] = inst_24012);

(statearr_24068_24130[(1)] = (10));


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
});})(c__23526__auto__,jobs,results,process,async))
;
return ((function (switch__23414__auto__,c__23526__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0 = (function (){
var statearr_24072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__);

(statearr_24072[(1)] = (1));

return statearr_24072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1 = (function (state_24043){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_24043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e24073){if((e24073 instanceof Object)){
var ex__23418__auto__ = e24073;
var statearr_24074_24131 = state_24043;
(statearr_24074_24131[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24132 = state_24043;
state_24043 = G__24132;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__ = function(state_24043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1.call(this,state_24043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__,jobs,results,process,async))
})();
var state__23528__auto__ = (function (){var statearr_24075 = f__23527__auto__.call(null);
(statearr_24075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_24075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__,jobs,results,process,async))
);

return c__23526__auto__;
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
var args24133 = [];
var len__17884__auto___24136 = arguments.length;
var i__17885__auto___24137 = (0);
while(true){
if((i__17885__auto___24137 < len__17884__auto___24136)){
args24133.push((arguments[i__17885__auto___24137]));

var G__24138 = (i__17885__auto___24137 + (1));
i__17885__auto___24137 = G__24138;
continue;
} else {
}
break;
}

var G__24135 = args24133.length;
switch (G__24135) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24133.length)].join('')));

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
var args24140 = [];
var len__17884__auto___24143 = arguments.length;
var i__17885__auto___24144 = (0);
while(true){
if((i__17885__auto___24144 < len__17884__auto___24143)){
args24140.push((arguments[i__17885__auto___24144]));

var G__24145 = (i__17885__auto___24144 + (1));
i__17885__auto___24144 = G__24145;
continue;
} else {
}
break;
}

var G__24142 = args24140.length;
switch (G__24142) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24140.length)].join('')));

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
var args24147 = [];
var len__17884__auto___24200 = arguments.length;
var i__17885__auto___24201 = (0);
while(true){
if((i__17885__auto___24201 < len__17884__auto___24200)){
args24147.push((arguments[i__17885__auto___24201]));

var G__24202 = (i__17885__auto___24201 + (1));
i__17885__auto___24201 = G__24202;
continue;
} else {
}
break;
}

var G__24149 = args24147.length;
switch (G__24149) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24147.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23526__auto___24204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___24204,tc,fc){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___24204,tc,fc){
return (function (state_24175){
var state_val_24176 = (state_24175[(1)]);
if((state_val_24176 === (7))){
var inst_24171 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24177_24205 = state_24175__$1;
(statearr_24177_24205[(2)] = inst_24171);

(statearr_24177_24205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (1))){
var state_24175__$1 = state_24175;
var statearr_24178_24206 = state_24175__$1;
(statearr_24178_24206[(2)] = null);

(statearr_24178_24206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (4))){
var inst_24152 = (state_24175[(7)]);
var inst_24152__$1 = (state_24175[(2)]);
var inst_24153 = (inst_24152__$1 == null);
var state_24175__$1 = (function (){var statearr_24179 = state_24175;
(statearr_24179[(7)] = inst_24152__$1);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24153)){
var statearr_24180_24207 = state_24175__$1;
(statearr_24180_24207[(1)] = (5));

} else {
var statearr_24181_24208 = state_24175__$1;
(statearr_24181_24208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (13))){
var state_24175__$1 = state_24175;
var statearr_24182_24209 = state_24175__$1;
(statearr_24182_24209[(2)] = null);

(statearr_24182_24209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (6))){
var inst_24152 = (state_24175[(7)]);
var inst_24158 = p.call(null,inst_24152);
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24158)){
var statearr_24183_24210 = state_24175__$1;
(statearr_24183_24210[(1)] = (9));

} else {
var statearr_24184_24211 = state_24175__$1;
(statearr_24184_24211[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (3))){
var inst_24173 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24175__$1,inst_24173);
} else {
if((state_val_24176 === (12))){
var state_24175__$1 = state_24175;
var statearr_24185_24212 = state_24175__$1;
(statearr_24185_24212[(2)] = null);

(statearr_24185_24212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (2))){
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24175__$1,(4),ch);
} else {
if((state_val_24176 === (11))){
var inst_24152 = (state_24175[(7)]);
var inst_24162 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24175__$1,(8),inst_24162,inst_24152);
} else {
if((state_val_24176 === (9))){
var state_24175__$1 = state_24175;
var statearr_24186_24213 = state_24175__$1;
(statearr_24186_24213[(2)] = tc);

(statearr_24186_24213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (5))){
var inst_24155 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24156 = cljs.core.async.close_BANG_.call(null,fc);
var state_24175__$1 = (function (){var statearr_24187 = state_24175;
(statearr_24187[(8)] = inst_24155);

return statearr_24187;
})();
var statearr_24188_24214 = state_24175__$1;
(statearr_24188_24214[(2)] = inst_24156);

(statearr_24188_24214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (14))){
var inst_24169 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24189_24215 = state_24175__$1;
(statearr_24189_24215[(2)] = inst_24169);

(statearr_24189_24215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (10))){
var state_24175__$1 = state_24175;
var statearr_24190_24216 = state_24175__$1;
(statearr_24190_24216[(2)] = fc);

(statearr_24190_24216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (8))){
var inst_24164 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24164)){
var statearr_24191_24217 = state_24175__$1;
(statearr_24191_24217[(1)] = (12));

} else {
var statearr_24192_24218 = state_24175__$1;
(statearr_24192_24218[(1)] = (13));

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
});})(c__23526__auto___24204,tc,fc))
;
return ((function (switch__23414__auto__,c__23526__auto___24204,tc,fc){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_24196 = [null,null,null,null,null,null,null,null,null];
(statearr_24196[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_24196[(1)] = (1));

return statearr_24196;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_24175){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_24175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e24197){if((e24197 instanceof Object)){
var ex__23418__auto__ = e24197;
var statearr_24198_24219 = state_24175;
(statearr_24198_24219[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24220 = state_24175;
state_24175 = G__24220;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___24204,tc,fc))
})();
var state__23528__auto__ = (function (){var statearr_24199 = f__23527__auto__.call(null);
(statearr_24199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___24204);

return statearr_24199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___24204,tc,fc))
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
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_24284){
var state_val_24285 = (state_24284[(1)]);
if((state_val_24285 === (7))){
var inst_24280 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24286_24307 = state_24284__$1;
(statearr_24286_24307[(2)] = inst_24280);

(statearr_24286_24307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (1))){
var inst_24264 = init;
var state_24284__$1 = (function (){var statearr_24287 = state_24284;
(statearr_24287[(7)] = inst_24264);

return statearr_24287;
})();
var statearr_24288_24308 = state_24284__$1;
(statearr_24288_24308[(2)] = null);

(statearr_24288_24308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (4))){
var inst_24267 = (state_24284[(8)]);
var inst_24267__$1 = (state_24284[(2)]);
var inst_24268 = (inst_24267__$1 == null);
var state_24284__$1 = (function (){var statearr_24289 = state_24284;
(statearr_24289[(8)] = inst_24267__$1);

return statearr_24289;
})();
if(cljs.core.truth_(inst_24268)){
var statearr_24290_24309 = state_24284__$1;
(statearr_24290_24309[(1)] = (5));

} else {
var statearr_24291_24310 = state_24284__$1;
(statearr_24291_24310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (6))){
var inst_24264 = (state_24284[(7)]);
var inst_24267 = (state_24284[(8)]);
var inst_24271 = (state_24284[(9)]);
var inst_24271__$1 = f.call(null,inst_24264,inst_24267);
var inst_24272 = cljs.core.reduced_QMARK_.call(null,inst_24271__$1);
var state_24284__$1 = (function (){var statearr_24292 = state_24284;
(statearr_24292[(9)] = inst_24271__$1);

return statearr_24292;
})();
if(inst_24272){
var statearr_24293_24311 = state_24284__$1;
(statearr_24293_24311[(1)] = (8));

} else {
var statearr_24294_24312 = state_24284__$1;
(statearr_24294_24312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (3))){
var inst_24282 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24284__$1,inst_24282);
} else {
if((state_val_24285 === (2))){
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24284__$1,(4),ch);
} else {
if((state_val_24285 === (9))){
var inst_24271 = (state_24284[(9)]);
var inst_24264 = inst_24271;
var state_24284__$1 = (function (){var statearr_24295 = state_24284;
(statearr_24295[(7)] = inst_24264);

return statearr_24295;
})();
var statearr_24296_24313 = state_24284__$1;
(statearr_24296_24313[(2)] = null);

(statearr_24296_24313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (5))){
var inst_24264 = (state_24284[(7)]);
var state_24284__$1 = state_24284;
var statearr_24297_24314 = state_24284__$1;
(statearr_24297_24314[(2)] = inst_24264);

(statearr_24297_24314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (10))){
var inst_24278 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24298_24315 = state_24284__$1;
(statearr_24298_24315[(2)] = inst_24278);

(statearr_24298_24315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (8))){
var inst_24271 = (state_24284[(9)]);
var inst_24274 = cljs.core.deref.call(null,inst_24271);
var state_24284__$1 = state_24284;
var statearr_24299_24316 = state_24284__$1;
(statearr_24299_24316[(2)] = inst_24274);

(statearr_24299_24316[(1)] = (10));


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
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23415__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23415__auto____0 = (function (){
var statearr_24303 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24303[(0)] = cljs$core$async$reduce_$_state_machine__23415__auto__);

(statearr_24303[(1)] = (1));

return statearr_24303;
});
var cljs$core$async$reduce_$_state_machine__23415__auto____1 = (function (state_24284){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_24284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e24304){if((e24304 instanceof Object)){
var ex__23418__auto__ = e24304;
var statearr_24305_24317 = state_24284;
(statearr_24305_24317[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24318 = state_24284;
state_24284 = G__24318;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23415__auto__ = function(state_24284){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23415__auto____1.call(this,state_24284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23415__auto____0;
cljs$core$async$reduce_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23415__auto____1;
return cljs$core$async$reduce_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_24306 = f__23527__auto__.call(null);
(statearr_24306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_24306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
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
var args24319 = [];
var len__17884__auto___24371 = arguments.length;
var i__17885__auto___24372 = (0);
while(true){
if((i__17885__auto___24372 < len__17884__auto___24371)){
args24319.push((arguments[i__17885__auto___24372]));

var G__24373 = (i__17885__auto___24372 + (1));
i__17885__auto___24372 = G__24373;
continue;
} else {
}
break;
}

var G__24321 = args24319.length;
switch (G__24321) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24319.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_24346){
var state_val_24347 = (state_24346[(1)]);
if((state_val_24347 === (7))){
var inst_24328 = (state_24346[(2)]);
var state_24346__$1 = state_24346;
var statearr_24348_24375 = state_24346__$1;
(statearr_24348_24375[(2)] = inst_24328);

(statearr_24348_24375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (1))){
var inst_24322 = cljs.core.seq.call(null,coll);
var inst_24323 = inst_24322;
var state_24346__$1 = (function (){var statearr_24349 = state_24346;
(statearr_24349[(7)] = inst_24323);

return statearr_24349;
})();
var statearr_24350_24376 = state_24346__$1;
(statearr_24350_24376[(2)] = null);

(statearr_24350_24376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (4))){
var inst_24323 = (state_24346[(7)]);
var inst_24326 = cljs.core.first.call(null,inst_24323);
var state_24346__$1 = state_24346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24346__$1,(7),ch,inst_24326);
} else {
if((state_val_24347 === (13))){
var inst_24340 = (state_24346[(2)]);
var state_24346__$1 = state_24346;
var statearr_24351_24377 = state_24346__$1;
(statearr_24351_24377[(2)] = inst_24340);

(statearr_24351_24377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (6))){
var inst_24331 = (state_24346[(2)]);
var state_24346__$1 = state_24346;
if(cljs.core.truth_(inst_24331)){
var statearr_24352_24378 = state_24346__$1;
(statearr_24352_24378[(1)] = (8));

} else {
var statearr_24353_24379 = state_24346__$1;
(statearr_24353_24379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (3))){
var inst_24344 = (state_24346[(2)]);
var state_24346__$1 = state_24346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24346__$1,inst_24344);
} else {
if((state_val_24347 === (12))){
var state_24346__$1 = state_24346;
var statearr_24354_24380 = state_24346__$1;
(statearr_24354_24380[(2)] = null);

(statearr_24354_24380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (2))){
var inst_24323 = (state_24346[(7)]);
var state_24346__$1 = state_24346;
if(cljs.core.truth_(inst_24323)){
var statearr_24355_24381 = state_24346__$1;
(statearr_24355_24381[(1)] = (4));

} else {
var statearr_24356_24382 = state_24346__$1;
(statearr_24356_24382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (11))){
var inst_24337 = cljs.core.async.close_BANG_.call(null,ch);
var state_24346__$1 = state_24346;
var statearr_24357_24383 = state_24346__$1;
(statearr_24357_24383[(2)] = inst_24337);

(statearr_24357_24383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (9))){
var state_24346__$1 = state_24346;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24358_24384 = state_24346__$1;
(statearr_24358_24384[(1)] = (11));

} else {
var statearr_24359_24385 = state_24346__$1;
(statearr_24359_24385[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (5))){
var inst_24323 = (state_24346[(7)]);
var state_24346__$1 = state_24346;
var statearr_24360_24386 = state_24346__$1;
(statearr_24360_24386[(2)] = inst_24323);

(statearr_24360_24386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (10))){
var inst_24342 = (state_24346[(2)]);
var state_24346__$1 = state_24346;
var statearr_24361_24387 = state_24346__$1;
(statearr_24361_24387[(2)] = inst_24342);

(statearr_24361_24387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24347 === (8))){
var inst_24323 = (state_24346[(7)]);
var inst_24333 = cljs.core.next.call(null,inst_24323);
var inst_24323__$1 = inst_24333;
var state_24346__$1 = (function (){var statearr_24362 = state_24346;
(statearr_24362[(7)] = inst_24323__$1);

return statearr_24362;
})();
var statearr_24363_24388 = state_24346__$1;
(statearr_24363_24388[(2)] = null);

(statearr_24363_24388[(1)] = (2));


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
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_24367 = [null,null,null,null,null,null,null,null];
(statearr_24367[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_24367[(1)] = (1));

return statearr_24367;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_24346){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_24346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e24368){if((e24368 instanceof Object)){
var ex__23418__auto__ = e24368;
var statearr_24369_24389 = state_24346;
(statearr_24369_24389[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24390 = state_24346;
state_24346 = G__24390;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_24346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_24346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_24370 = f__23527__auto__.call(null);
(statearr_24370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_24370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async24612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24612 = (function (mult,ch,cs,meta24613){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24613 = meta24613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24614,meta24613__$1){
var self__ = this;
var _24614__$1 = this;
return (new cljs.core.async.t_cljs$core$async24612(self__.mult,self__.ch,self__.cs,meta24613__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24614){
var self__ = this;
var _24614__$1 = this;
return self__.meta24613;
});})(cs))
;

cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24612.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24612.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24613","meta24613",400203777,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24612";

cljs.core.async.t_cljs$core$async24612.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24612");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24612 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24612(mult__$1,ch__$1,cs__$1,meta24613){
return (new cljs.core.async.t_cljs$core$async24612(mult__$1,ch__$1,cs__$1,meta24613));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24612(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23526__auto___24833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___24833,cs,m,dchan,dctr,done){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___24833,cs,m,dchan,dctr,done){
return (function (state_24745){
var state_val_24746 = (state_24745[(1)]);
if((state_val_24746 === (7))){
var inst_24741 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24747_24834 = state_24745__$1;
(statearr_24747_24834[(2)] = inst_24741);

(statearr_24747_24834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (20))){
var inst_24646 = (state_24745[(7)]);
var inst_24656 = cljs.core.first.call(null,inst_24646);
var inst_24657 = cljs.core.nth.call(null,inst_24656,(0),null);
var inst_24658 = cljs.core.nth.call(null,inst_24656,(1),null);
var state_24745__$1 = (function (){var statearr_24748 = state_24745;
(statearr_24748[(8)] = inst_24657);

return statearr_24748;
})();
if(cljs.core.truth_(inst_24658)){
var statearr_24749_24835 = state_24745__$1;
(statearr_24749_24835[(1)] = (22));

} else {
var statearr_24750_24836 = state_24745__$1;
(statearr_24750_24836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (27))){
var inst_24686 = (state_24745[(9)]);
var inst_24693 = (state_24745[(10)]);
var inst_24617 = (state_24745[(11)]);
var inst_24688 = (state_24745[(12)]);
var inst_24693__$1 = cljs.core._nth.call(null,inst_24686,inst_24688);
var inst_24694 = cljs.core.async.put_BANG_.call(null,inst_24693__$1,inst_24617,done);
var state_24745__$1 = (function (){var statearr_24751 = state_24745;
(statearr_24751[(10)] = inst_24693__$1);

return statearr_24751;
})();
if(cljs.core.truth_(inst_24694)){
var statearr_24752_24837 = state_24745__$1;
(statearr_24752_24837[(1)] = (30));

} else {
var statearr_24753_24838 = state_24745__$1;
(statearr_24753_24838[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (1))){
var state_24745__$1 = state_24745;
var statearr_24754_24839 = state_24745__$1;
(statearr_24754_24839[(2)] = null);

(statearr_24754_24839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (24))){
var inst_24646 = (state_24745[(7)]);
var inst_24663 = (state_24745[(2)]);
var inst_24664 = cljs.core.next.call(null,inst_24646);
var inst_24626 = inst_24664;
var inst_24627 = null;
var inst_24628 = (0);
var inst_24629 = (0);
var state_24745__$1 = (function (){var statearr_24755 = state_24745;
(statearr_24755[(13)] = inst_24628);

(statearr_24755[(14)] = inst_24663);

(statearr_24755[(15)] = inst_24627);

(statearr_24755[(16)] = inst_24626);

(statearr_24755[(17)] = inst_24629);

return statearr_24755;
})();
var statearr_24756_24840 = state_24745__$1;
(statearr_24756_24840[(2)] = null);

(statearr_24756_24840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (39))){
var state_24745__$1 = state_24745;
var statearr_24760_24841 = state_24745__$1;
(statearr_24760_24841[(2)] = null);

(statearr_24760_24841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (4))){
var inst_24617 = (state_24745[(11)]);
var inst_24617__$1 = (state_24745[(2)]);
var inst_24618 = (inst_24617__$1 == null);
var state_24745__$1 = (function (){var statearr_24761 = state_24745;
(statearr_24761[(11)] = inst_24617__$1);

return statearr_24761;
})();
if(cljs.core.truth_(inst_24618)){
var statearr_24762_24842 = state_24745__$1;
(statearr_24762_24842[(1)] = (5));

} else {
var statearr_24763_24843 = state_24745__$1;
(statearr_24763_24843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (15))){
var inst_24628 = (state_24745[(13)]);
var inst_24627 = (state_24745[(15)]);
var inst_24626 = (state_24745[(16)]);
var inst_24629 = (state_24745[(17)]);
var inst_24642 = (state_24745[(2)]);
var inst_24643 = (inst_24629 + (1));
var tmp24757 = inst_24628;
var tmp24758 = inst_24627;
var tmp24759 = inst_24626;
var inst_24626__$1 = tmp24759;
var inst_24627__$1 = tmp24758;
var inst_24628__$1 = tmp24757;
var inst_24629__$1 = inst_24643;
var state_24745__$1 = (function (){var statearr_24764 = state_24745;
(statearr_24764[(13)] = inst_24628__$1);

(statearr_24764[(15)] = inst_24627__$1);

(statearr_24764[(16)] = inst_24626__$1);

(statearr_24764[(17)] = inst_24629__$1);

(statearr_24764[(18)] = inst_24642);

return statearr_24764;
})();
var statearr_24765_24844 = state_24745__$1;
(statearr_24765_24844[(2)] = null);

(statearr_24765_24844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (21))){
var inst_24667 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24769_24845 = state_24745__$1;
(statearr_24769_24845[(2)] = inst_24667);

(statearr_24769_24845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (31))){
var inst_24693 = (state_24745[(10)]);
var inst_24697 = done.call(null,null);
var inst_24698 = cljs.core.async.untap_STAR_.call(null,m,inst_24693);
var state_24745__$1 = (function (){var statearr_24770 = state_24745;
(statearr_24770[(19)] = inst_24697);

return statearr_24770;
})();
var statearr_24771_24846 = state_24745__$1;
(statearr_24771_24846[(2)] = inst_24698);

(statearr_24771_24846[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (32))){
var inst_24687 = (state_24745[(20)]);
var inst_24686 = (state_24745[(9)]);
var inst_24688 = (state_24745[(12)]);
var inst_24685 = (state_24745[(21)]);
var inst_24700 = (state_24745[(2)]);
var inst_24701 = (inst_24688 + (1));
var tmp24766 = inst_24687;
var tmp24767 = inst_24686;
var tmp24768 = inst_24685;
var inst_24685__$1 = tmp24768;
var inst_24686__$1 = tmp24767;
var inst_24687__$1 = tmp24766;
var inst_24688__$1 = inst_24701;
var state_24745__$1 = (function (){var statearr_24772 = state_24745;
(statearr_24772[(20)] = inst_24687__$1);

(statearr_24772[(9)] = inst_24686__$1);

(statearr_24772[(12)] = inst_24688__$1);

(statearr_24772[(21)] = inst_24685__$1);

(statearr_24772[(22)] = inst_24700);

return statearr_24772;
})();
var statearr_24773_24847 = state_24745__$1;
(statearr_24773_24847[(2)] = null);

(statearr_24773_24847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (40))){
var inst_24713 = (state_24745[(23)]);
var inst_24717 = done.call(null,null);
var inst_24718 = cljs.core.async.untap_STAR_.call(null,m,inst_24713);
var state_24745__$1 = (function (){var statearr_24774 = state_24745;
(statearr_24774[(24)] = inst_24717);

return statearr_24774;
})();
var statearr_24775_24848 = state_24745__$1;
(statearr_24775_24848[(2)] = inst_24718);

(statearr_24775_24848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (33))){
var inst_24704 = (state_24745[(25)]);
var inst_24706 = cljs.core.chunked_seq_QMARK_.call(null,inst_24704);
var state_24745__$1 = state_24745;
if(inst_24706){
var statearr_24776_24849 = state_24745__$1;
(statearr_24776_24849[(1)] = (36));

} else {
var statearr_24777_24850 = state_24745__$1;
(statearr_24777_24850[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (13))){
var inst_24636 = (state_24745[(26)]);
var inst_24639 = cljs.core.async.close_BANG_.call(null,inst_24636);
var state_24745__$1 = state_24745;
var statearr_24778_24851 = state_24745__$1;
(statearr_24778_24851[(2)] = inst_24639);

(statearr_24778_24851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (22))){
var inst_24657 = (state_24745[(8)]);
var inst_24660 = cljs.core.async.close_BANG_.call(null,inst_24657);
var state_24745__$1 = state_24745;
var statearr_24779_24852 = state_24745__$1;
(statearr_24779_24852[(2)] = inst_24660);

(statearr_24779_24852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (36))){
var inst_24704 = (state_24745[(25)]);
var inst_24708 = cljs.core.chunk_first.call(null,inst_24704);
var inst_24709 = cljs.core.chunk_rest.call(null,inst_24704);
var inst_24710 = cljs.core.count.call(null,inst_24708);
var inst_24685 = inst_24709;
var inst_24686 = inst_24708;
var inst_24687 = inst_24710;
var inst_24688 = (0);
var state_24745__$1 = (function (){var statearr_24780 = state_24745;
(statearr_24780[(20)] = inst_24687);

(statearr_24780[(9)] = inst_24686);

(statearr_24780[(12)] = inst_24688);

(statearr_24780[(21)] = inst_24685);

return statearr_24780;
})();
var statearr_24781_24853 = state_24745__$1;
(statearr_24781_24853[(2)] = null);

(statearr_24781_24853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (41))){
var inst_24704 = (state_24745[(25)]);
var inst_24720 = (state_24745[(2)]);
var inst_24721 = cljs.core.next.call(null,inst_24704);
var inst_24685 = inst_24721;
var inst_24686 = null;
var inst_24687 = (0);
var inst_24688 = (0);
var state_24745__$1 = (function (){var statearr_24782 = state_24745;
(statearr_24782[(27)] = inst_24720);

(statearr_24782[(20)] = inst_24687);

(statearr_24782[(9)] = inst_24686);

(statearr_24782[(12)] = inst_24688);

(statearr_24782[(21)] = inst_24685);

return statearr_24782;
})();
var statearr_24783_24854 = state_24745__$1;
(statearr_24783_24854[(2)] = null);

(statearr_24783_24854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (43))){
var state_24745__$1 = state_24745;
var statearr_24784_24855 = state_24745__$1;
(statearr_24784_24855[(2)] = null);

(statearr_24784_24855[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (29))){
var inst_24729 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24785_24856 = state_24745__$1;
(statearr_24785_24856[(2)] = inst_24729);

(statearr_24785_24856[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (44))){
var inst_24738 = (state_24745[(2)]);
var state_24745__$1 = (function (){var statearr_24786 = state_24745;
(statearr_24786[(28)] = inst_24738);

return statearr_24786;
})();
var statearr_24787_24857 = state_24745__$1;
(statearr_24787_24857[(2)] = null);

(statearr_24787_24857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (6))){
var inst_24677 = (state_24745[(29)]);
var inst_24676 = cljs.core.deref.call(null,cs);
var inst_24677__$1 = cljs.core.keys.call(null,inst_24676);
var inst_24678 = cljs.core.count.call(null,inst_24677__$1);
var inst_24679 = cljs.core.reset_BANG_.call(null,dctr,inst_24678);
var inst_24684 = cljs.core.seq.call(null,inst_24677__$1);
var inst_24685 = inst_24684;
var inst_24686 = null;
var inst_24687 = (0);
var inst_24688 = (0);
var state_24745__$1 = (function (){var statearr_24788 = state_24745;
(statearr_24788[(20)] = inst_24687);

(statearr_24788[(9)] = inst_24686);

(statearr_24788[(29)] = inst_24677__$1);

(statearr_24788[(12)] = inst_24688);

(statearr_24788[(30)] = inst_24679);

(statearr_24788[(21)] = inst_24685);

return statearr_24788;
})();
var statearr_24789_24858 = state_24745__$1;
(statearr_24789_24858[(2)] = null);

(statearr_24789_24858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (28))){
var inst_24704 = (state_24745[(25)]);
var inst_24685 = (state_24745[(21)]);
var inst_24704__$1 = cljs.core.seq.call(null,inst_24685);
var state_24745__$1 = (function (){var statearr_24790 = state_24745;
(statearr_24790[(25)] = inst_24704__$1);

return statearr_24790;
})();
if(inst_24704__$1){
var statearr_24791_24859 = state_24745__$1;
(statearr_24791_24859[(1)] = (33));

} else {
var statearr_24792_24860 = state_24745__$1;
(statearr_24792_24860[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (25))){
var inst_24687 = (state_24745[(20)]);
var inst_24688 = (state_24745[(12)]);
var inst_24690 = (inst_24688 < inst_24687);
var inst_24691 = inst_24690;
var state_24745__$1 = state_24745;
if(cljs.core.truth_(inst_24691)){
var statearr_24793_24861 = state_24745__$1;
(statearr_24793_24861[(1)] = (27));

} else {
var statearr_24794_24862 = state_24745__$1;
(statearr_24794_24862[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (34))){
var state_24745__$1 = state_24745;
var statearr_24795_24863 = state_24745__$1;
(statearr_24795_24863[(2)] = null);

(statearr_24795_24863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (17))){
var state_24745__$1 = state_24745;
var statearr_24796_24864 = state_24745__$1;
(statearr_24796_24864[(2)] = null);

(statearr_24796_24864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (3))){
var inst_24743 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24745__$1,inst_24743);
} else {
if((state_val_24746 === (12))){
var inst_24672 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24797_24865 = state_24745__$1;
(statearr_24797_24865[(2)] = inst_24672);

(statearr_24797_24865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (2))){
var state_24745__$1 = state_24745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24745__$1,(4),ch);
} else {
if((state_val_24746 === (23))){
var state_24745__$1 = state_24745;
var statearr_24798_24866 = state_24745__$1;
(statearr_24798_24866[(2)] = null);

(statearr_24798_24866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (35))){
var inst_24727 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24799_24867 = state_24745__$1;
(statearr_24799_24867[(2)] = inst_24727);

(statearr_24799_24867[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (19))){
var inst_24646 = (state_24745[(7)]);
var inst_24650 = cljs.core.chunk_first.call(null,inst_24646);
var inst_24651 = cljs.core.chunk_rest.call(null,inst_24646);
var inst_24652 = cljs.core.count.call(null,inst_24650);
var inst_24626 = inst_24651;
var inst_24627 = inst_24650;
var inst_24628 = inst_24652;
var inst_24629 = (0);
var state_24745__$1 = (function (){var statearr_24800 = state_24745;
(statearr_24800[(13)] = inst_24628);

(statearr_24800[(15)] = inst_24627);

(statearr_24800[(16)] = inst_24626);

(statearr_24800[(17)] = inst_24629);

return statearr_24800;
})();
var statearr_24801_24868 = state_24745__$1;
(statearr_24801_24868[(2)] = null);

(statearr_24801_24868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (11))){
var inst_24626 = (state_24745[(16)]);
var inst_24646 = (state_24745[(7)]);
var inst_24646__$1 = cljs.core.seq.call(null,inst_24626);
var state_24745__$1 = (function (){var statearr_24802 = state_24745;
(statearr_24802[(7)] = inst_24646__$1);

return statearr_24802;
})();
if(inst_24646__$1){
var statearr_24803_24869 = state_24745__$1;
(statearr_24803_24869[(1)] = (16));

} else {
var statearr_24804_24870 = state_24745__$1;
(statearr_24804_24870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (9))){
var inst_24674 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24805_24871 = state_24745__$1;
(statearr_24805_24871[(2)] = inst_24674);

(statearr_24805_24871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (5))){
var inst_24624 = cljs.core.deref.call(null,cs);
var inst_24625 = cljs.core.seq.call(null,inst_24624);
var inst_24626 = inst_24625;
var inst_24627 = null;
var inst_24628 = (0);
var inst_24629 = (0);
var state_24745__$1 = (function (){var statearr_24806 = state_24745;
(statearr_24806[(13)] = inst_24628);

(statearr_24806[(15)] = inst_24627);

(statearr_24806[(16)] = inst_24626);

(statearr_24806[(17)] = inst_24629);

return statearr_24806;
})();
var statearr_24807_24872 = state_24745__$1;
(statearr_24807_24872[(2)] = null);

(statearr_24807_24872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (14))){
var state_24745__$1 = state_24745;
var statearr_24808_24873 = state_24745__$1;
(statearr_24808_24873[(2)] = null);

(statearr_24808_24873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (45))){
var inst_24735 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24809_24874 = state_24745__$1;
(statearr_24809_24874[(2)] = inst_24735);

(statearr_24809_24874[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (26))){
var inst_24677 = (state_24745[(29)]);
var inst_24731 = (state_24745[(2)]);
var inst_24732 = cljs.core.seq.call(null,inst_24677);
var state_24745__$1 = (function (){var statearr_24810 = state_24745;
(statearr_24810[(31)] = inst_24731);

return statearr_24810;
})();
if(inst_24732){
var statearr_24811_24875 = state_24745__$1;
(statearr_24811_24875[(1)] = (42));

} else {
var statearr_24812_24876 = state_24745__$1;
(statearr_24812_24876[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (16))){
var inst_24646 = (state_24745[(7)]);
var inst_24648 = cljs.core.chunked_seq_QMARK_.call(null,inst_24646);
var state_24745__$1 = state_24745;
if(inst_24648){
var statearr_24813_24877 = state_24745__$1;
(statearr_24813_24877[(1)] = (19));

} else {
var statearr_24814_24878 = state_24745__$1;
(statearr_24814_24878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (38))){
var inst_24724 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24815_24879 = state_24745__$1;
(statearr_24815_24879[(2)] = inst_24724);

(statearr_24815_24879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (30))){
var state_24745__$1 = state_24745;
var statearr_24816_24880 = state_24745__$1;
(statearr_24816_24880[(2)] = null);

(statearr_24816_24880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (10))){
var inst_24627 = (state_24745[(15)]);
var inst_24629 = (state_24745[(17)]);
var inst_24635 = cljs.core._nth.call(null,inst_24627,inst_24629);
var inst_24636 = cljs.core.nth.call(null,inst_24635,(0),null);
var inst_24637 = cljs.core.nth.call(null,inst_24635,(1),null);
var state_24745__$1 = (function (){var statearr_24817 = state_24745;
(statearr_24817[(26)] = inst_24636);

return statearr_24817;
})();
if(cljs.core.truth_(inst_24637)){
var statearr_24818_24881 = state_24745__$1;
(statearr_24818_24881[(1)] = (13));

} else {
var statearr_24819_24882 = state_24745__$1;
(statearr_24819_24882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (18))){
var inst_24670 = (state_24745[(2)]);
var state_24745__$1 = state_24745;
var statearr_24820_24883 = state_24745__$1;
(statearr_24820_24883[(2)] = inst_24670);

(statearr_24820_24883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (42))){
var state_24745__$1 = state_24745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24745__$1,(45),dchan);
} else {
if((state_val_24746 === (37))){
var inst_24704 = (state_24745[(25)]);
var inst_24713 = (state_24745[(23)]);
var inst_24617 = (state_24745[(11)]);
var inst_24713__$1 = cljs.core.first.call(null,inst_24704);
var inst_24714 = cljs.core.async.put_BANG_.call(null,inst_24713__$1,inst_24617,done);
var state_24745__$1 = (function (){var statearr_24821 = state_24745;
(statearr_24821[(23)] = inst_24713__$1);

return statearr_24821;
})();
if(cljs.core.truth_(inst_24714)){
var statearr_24822_24884 = state_24745__$1;
(statearr_24822_24884[(1)] = (39));

} else {
var statearr_24823_24885 = state_24745__$1;
(statearr_24823_24885[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24746 === (8))){
var inst_24628 = (state_24745[(13)]);
var inst_24629 = (state_24745[(17)]);
var inst_24631 = (inst_24629 < inst_24628);
var inst_24632 = inst_24631;
var state_24745__$1 = state_24745;
if(cljs.core.truth_(inst_24632)){
var statearr_24824_24886 = state_24745__$1;
(statearr_24824_24886[(1)] = (10));

} else {
var statearr_24825_24887 = state_24745__$1;
(statearr_24825_24887[(1)] = (11));

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
});})(c__23526__auto___24833,cs,m,dchan,dctr,done))
;
return ((function (switch__23414__auto__,c__23526__auto___24833,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23415__auto__ = null;
var cljs$core$async$mult_$_state_machine__23415__auto____0 = (function (){
var statearr_24829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24829[(0)] = cljs$core$async$mult_$_state_machine__23415__auto__);

(statearr_24829[(1)] = (1));

return statearr_24829;
});
var cljs$core$async$mult_$_state_machine__23415__auto____1 = (function (state_24745){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_24745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e24830){if((e24830 instanceof Object)){
var ex__23418__auto__ = e24830;
var statearr_24831_24888 = state_24745;
(statearr_24831_24888[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24889 = state_24745;
state_24745 = G__24889;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23415__auto__ = function(state_24745){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23415__auto____1.call(this,state_24745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23415__auto____0;
cljs$core$async$mult_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23415__auto____1;
return cljs$core$async$mult_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___24833,cs,m,dchan,dctr,done))
})();
var state__23528__auto__ = (function (){var statearr_24832 = f__23527__auto__.call(null);
(statearr_24832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___24833);

return statearr_24832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___24833,cs,m,dchan,dctr,done))
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
var args24890 = [];
var len__17884__auto___24893 = arguments.length;
var i__17885__auto___24894 = (0);
while(true){
if((i__17885__auto___24894 < len__17884__auto___24893)){
args24890.push((arguments[i__17885__auto___24894]));

var G__24895 = (i__17885__auto___24894 + (1));
i__17885__auto___24894 = G__24895;
continue;
} else {
}
break;
}

var G__24892 = args24890.length;
switch (G__24892) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24890.length)].join('')));

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
var len__17884__auto___24907 = arguments.length;
var i__17885__auto___24908 = (0);
while(true){
if((i__17885__auto___24908 < len__17884__auto___24907)){
args__17891__auto__.push((arguments[i__17885__auto___24908]));

var G__24909 = (i__17885__auto___24908 + (1));
i__17885__auto___24908 = G__24909;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24901){
var map__24902 = p__24901;
var map__24902__$1 = ((((!((map__24902 == null)))?((((map__24902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24902):map__24902);
var opts = map__24902__$1;
var statearr_24904_24910 = state;
(statearr_24904_24910[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24902,map__24902__$1,opts){
return (function (val){
var statearr_24905_24911 = state;
(statearr_24905_24911[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24902,map__24902__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24906_24912 = state;
(statearr_24906_24912[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24897){
var G__24898 = cljs.core.first.call(null,seq24897);
var seq24897__$1 = cljs.core.next.call(null,seq24897);
var G__24899 = cljs.core.first.call(null,seq24897__$1);
var seq24897__$2 = cljs.core.next.call(null,seq24897__$1);
var G__24900 = cljs.core.first.call(null,seq24897__$2);
var seq24897__$3 = cljs.core.next.call(null,seq24897__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24898,G__24899,G__24900,seq24897__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25076 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25077){
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
this.meta25077 = meta25077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25078,meta25077__$1){
var self__ = this;
var _25078__$1 = this;
return (new cljs.core.async.t_cljs$core$async25076(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25077__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25078){
var self__ = this;
var _25078__$1 = this;
return self__.meta25077;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25076.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25077","meta25077",866539179,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25076";

cljs.core.async.t_cljs$core$async25076.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25076");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25076 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25076(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25077){
return (new cljs.core.async.t_cljs$core$async25076(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25077));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25076(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23526__auto___25239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___25239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___25239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25176){
var state_val_25177 = (state_25176[(1)]);
if((state_val_25177 === (7))){
var inst_25094 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25178_25240 = state_25176__$1;
(statearr_25178_25240[(2)] = inst_25094);

(statearr_25178_25240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (20))){
var inst_25106 = (state_25176[(7)]);
var state_25176__$1 = state_25176;
var statearr_25179_25241 = state_25176__$1;
(statearr_25179_25241[(2)] = inst_25106);

(statearr_25179_25241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (27))){
var state_25176__$1 = state_25176;
var statearr_25180_25242 = state_25176__$1;
(statearr_25180_25242[(2)] = null);

(statearr_25180_25242[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (1))){
var inst_25082 = (state_25176[(8)]);
var inst_25082__$1 = calc_state.call(null);
var inst_25084 = (inst_25082__$1 == null);
var inst_25085 = cljs.core.not.call(null,inst_25084);
var state_25176__$1 = (function (){var statearr_25181 = state_25176;
(statearr_25181[(8)] = inst_25082__$1);

return statearr_25181;
})();
if(inst_25085){
var statearr_25182_25243 = state_25176__$1;
(statearr_25182_25243[(1)] = (2));

} else {
var statearr_25183_25244 = state_25176__$1;
(statearr_25183_25244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (24))){
var inst_25150 = (state_25176[(9)]);
var inst_25129 = (state_25176[(10)]);
var inst_25136 = (state_25176[(11)]);
var inst_25150__$1 = inst_25129.call(null,inst_25136);
var state_25176__$1 = (function (){var statearr_25184 = state_25176;
(statearr_25184[(9)] = inst_25150__$1);

return statearr_25184;
})();
if(cljs.core.truth_(inst_25150__$1)){
var statearr_25185_25245 = state_25176__$1;
(statearr_25185_25245[(1)] = (29));

} else {
var statearr_25186_25246 = state_25176__$1;
(statearr_25186_25246[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (4))){
var inst_25097 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25097)){
var statearr_25187_25247 = state_25176__$1;
(statearr_25187_25247[(1)] = (8));

} else {
var statearr_25188_25248 = state_25176__$1;
(statearr_25188_25248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (15))){
var inst_25123 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25123)){
var statearr_25189_25249 = state_25176__$1;
(statearr_25189_25249[(1)] = (19));

} else {
var statearr_25190_25250 = state_25176__$1;
(statearr_25190_25250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (21))){
var inst_25128 = (state_25176[(12)]);
var inst_25128__$1 = (state_25176[(2)]);
var inst_25129 = cljs.core.get.call(null,inst_25128__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25130 = cljs.core.get.call(null,inst_25128__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25131 = cljs.core.get.call(null,inst_25128__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25176__$1 = (function (){var statearr_25191 = state_25176;
(statearr_25191[(12)] = inst_25128__$1);

(statearr_25191[(10)] = inst_25129);

(statearr_25191[(13)] = inst_25130);

return statearr_25191;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25176__$1,(22),inst_25131);
} else {
if((state_val_25177 === (31))){
var inst_25158 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25158)){
var statearr_25192_25251 = state_25176__$1;
(statearr_25192_25251[(1)] = (32));

} else {
var statearr_25193_25252 = state_25176__$1;
(statearr_25193_25252[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (32))){
var inst_25135 = (state_25176[(14)]);
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25176__$1,(35),out,inst_25135);
} else {
if((state_val_25177 === (33))){
var inst_25128 = (state_25176[(12)]);
var inst_25106 = inst_25128;
var state_25176__$1 = (function (){var statearr_25194 = state_25176;
(statearr_25194[(7)] = inst_25106);

return statearr_25194;
})();
var statearr_25195_25253 = state_25176__$1;
(statearr_25195_25253[(2)] = null);

(statearr_25195_25253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (13))){
var inst_25106 = (state_25176[(7)]);
var inst_25113 = inst_25106.cljs$lang$protocol_mask$partition0$;
var inst_25114 = (inst_25113 & (64));
var inst_25115 = inst_25106.cljs$core$ISeq$;
var inst_25116 = (inst_25114) || (inst_25115);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25116)){
var statearr_25196_25254 = state_25176__$1;
(statearr_25196_25254[(1)] = (16));

} else {
var statearr_25197_25255 = state_25176__$1;
(statearr_25197_25255[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (22))){
var inst_25135 = (state_25176[(14)]);
var inst_25136 = (state_25176[(11)]);
var inst_25134 = (state_25176[(2)]);
var inst_25135__$1 = cljs.core.nth.call(null,inst_25134,(0),null);
var inst_25136__$1 = cljs.core.nth.call(null,inst_25134,(1),null);
var inst_25137 = (inst_25135__$1 == null);
var inst_25138 = cljs.core._EQ_.call(null,inst_25136__$1,change);
var inst_25139 = (inst_25137) || (inst_25138);
var state_25176__$1 = (function (){var statearr_25198 = state_25176;
(statearr_25198[(14)] = inst_25135__$1);

(statearr_25198[(11)] = inst_25136__$1);

return statearr_25198;
})();
if(cljs.core.truth_(inst_25139)){
var statearr_25199_25256 = state_25176__$1;
(statearr_25199_25256[(1)] = (23));

} else {
var statearr_25200_25257 = state_25176__$1;
(statearr_25200_25257[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (36))){
var inst_25128 = (state_25176[(12)]);
var inst_25106 = inst_25128;
var state_25176__$1 = (function (){var statearr_25201 = state_25176;
(statearr_25201[(7)] = inst_25106);

return statearr_25201;
})();
var statearr_25202_25258 = state_25176__$1;
(statearr_25202_25258[(2)] = null);

(statearr_25202_25258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (29))){
var inst_25150 = (state_25176[(9)]);
var state_25176__$1 = state_25176;
var statearr_25203_25259 = state_25176__$1;
(statearr_25203_25259[(2)] = inst_25150);

(statearr_25203_25259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (6))){
var state_25176__$1 = state_25176;
var statearr_25204_25260 = state_25176__$1;
(statearr_25204_25260[(2)] = false);

(statearr_25204_25260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (28))){
var inst_25146 = (state_25176[(2)]);
var inst_25147 = calc_state.call(null);
var inst_25106 = inst_25147;
var state_25176__$1 = (function (){var statearr_25205 = state_25176;
(statearr_25205[(7)] = inst_25106);

(statearr_25205[(15)] = inst_25146);

return statearr_25205;
})();
var statearr_25206_25261 = state_25176__$1;
(statearr_25206_25261[(2)] = null);

(statearr_25206_25261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (25))){
var inst_25172 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25207_25262 = state_25176__$1;
(statearr_25207_25262[(2)] = inst_25172);

(statearr_25207_25262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (34))){
var inst_25170 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25208_25263 = state_25176__$1;
(statearr_25208_25263[(2)] = inst_25170);

(statearr_25208_25263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (17))){
var state_25176__$1 = state_25176;
var statearr_25209_25264 = state_25176__$1;
(statearr_25209_25264[(2)] = false);

(statearr_25209_25264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (3))){
var state_25176__$1 = state_25176;
var statearr_25210_25265 = state_25176__$1;
(statearr_25210_25265[(2)] = false);

(statearr_25210_25265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (12))){
var inst_25174 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25176__$1,inst_25174);
} else {
if((state_val_25177 === (2))){
var inst_25082 = (state_25176[(8)]);
var inst_25087 = inst_25082.cljs$lang$protocol_mask$partition0$;
var inst_25088 = (inst_25087 & (64));
var inst_25089 = inst_25082.cljs$core$ISeq$;
var inst_25090 = (inst_25088) || (inst_25089);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25090)){
var statearr_25211_25266 = state_25176__$1;
(statearr_25211_25266[(1)] = (5));

} else {
var statearr_25212_25267 = state_25176__$1;
(statearr_25212_25267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (23))){
var inst_25135 = (state_25176[(14)]);
var inst_25141 = (inst_25135 == null);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25141)){
var statearr_25213_25268 = state_25176__$1;
(statearr_25213_25268[(1)] = (26));

} else {
var statearr_25214_25269 = state_25176__$1;
(statearr_25214_25269[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (35))){
var inst_25161 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25161)){
var statearr_25215_25270 = state_25176__$1;
(statearr_25215_25270[(1)] = (36));

} else {
var statearr_25216_25271 = state_25176__$1;
(statearr_25216_25271[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (19))){
var inst_25106 = (state_25176[(7)]);
var inst_25125 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25106);
var state_25176__$1 = state_25176;
var statearr_25217_25272 = state_25176__$1;
(statearr_25217_25272[(2)] = inst_25125);

(statearr_25217_25272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (11))){
var inst_25106 = (state_25176[(7)]);
var inst_25110 = (inst_25106 == null);
var inst_25111 = cljs.core.not.call(null,inst_25110);
var state_25176__$1 = state_25176;
if(inst_25111){
var statearr_25218_25273 = state_25176__$1;
(statearr_25218_25273[(1)] = (13));

} else {
var statearr_25219_25274 = state_25176__$1;
(statearr_25219_25274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (9))){
var inst_25082 = (state_25176[(8)]);
var state_25176__$1 = state_25176;
var statearr_25220_25275 = state_25176__$1;
(statearr_25220_25275[(2)] = inst_25082);

(statearr_25220_25275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (5))){
var state_25176__$1 = state_25176;
var statearr_25221_25276 = state_25176__$1;
(statearr_25221_25276[(2)] = true);

(statearr_25221_25276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (14))){
var state_25176__$1 = state_25176;
var statearr_25222_25277 = state_25176__$1;
(statearr_25222_25277[(2)] = false);

(statearr_25222_25277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (26))){
var inst_25136 = (state_25176[(11)]);
var inst_25143 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25136);
var state_25176__$1 = state_25176;
var statearr_25223_25278 = state_25176__$1;
(statearr_25223_25278[(2)] = inst_25143);

(statearr_25223_25278[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (16))){
var state_25176__$1 = state_25176;
var statearr_25224_25279 = state_25176__$1;
(statearr_25224_25279[(2)] = true);

(statearr_25224_25279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (38))){
var inst_25166 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25225_25280 = state_25176__$1;
(statearr_25225_25280[(2)] = inst_25166);

(statearr_25225_25280[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (30))){
var inst_25129 = (state_25176[(10)]);
var inst_25130 = (state_25176[(13)]);
var inst_25136 = (state_25176[(11)]);
var inst_25153 = cljs.core.empty_QMARK_.call(null,inst_25129);
var inst_25154 = inst_25130.call(null,inst_25136);
var inst_25155 = cljs.core.not.call(null,inst_25154);
var inst_25156 = (inst_25153) && (inst_25155);
var state_25176__$1 = state_25176;
var statearr_25226_25281 = state_25176__$1;
(statearr_25226_25281[(2)] = inst_25156);

(statearr_25226_25281[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (10))){
var inst_25082 = (state_25176[(8)]);
var inst_25102 = (state_25176[(2)]);
var inst_25103 = cljs.core.get.call(null,inst_25102,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25104 = cljs.core.get.call(null,inst_25102,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25105 = cljs.core.get.call(null,inst_25102,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25106 = inst_25082;
var state_25176__$1 = (function (){var statearr_25227 = state_25176;
(statearr_25227[(16)] = inst_25104);

(statearr_25227[(7)] = inst_25106);

(statearr_25227[(17)] = inst_25103);

(statearr_25227[(18)] = inst_25105);

return statearr_25227;
})();
var statearr_25228_25282 = state_25176__$1;
(statearr_25228_25282[(2)] = null);

(statearr_25228_25282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (18))){
var inst_25120 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25229_25283 = state_25176__$1;
(statearr_25229_25283[(2)] = inst_25120);

(statearr_25229_25283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (37))){
var state_25176__$1 = state_25176;
var statearr_25230_25284 = state_25176__$1;
(statearr_25230_25284[(2)] = null);

(statearr_25230_25284[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (8))){
var inst_25082 = (state_25176[(8)]);
var inst_25099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25082);
var state_25176__$1 = state_25176;
var statearr_25231_25285 = state_25176__$1;
(statearr_25231_25285[(2)] = inst_25099);

(statearr_25231_25285[(1)] = (10));


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
});})(c__23526__auto___25239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23414__auto__,c__23526__auto___25239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23415__auto__ = null;
var cljs$core$async$mix_$_state_machine__23415__auto____0 = (function (){
var statearr_25235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25235[(0)] = cljs$core$async$mix_$_state_machine__23415__auto__);

(statearr_25235[(1)] = (1));

return statearr_25235;
});
var cljs$core$async$mix_$_state_machine__23415__auto____1 = (function (state_25176){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_25176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e25236){if((e25236 instanceof Object)){
var ex__23418__auto__ = e25236;
var statearr_25237_25286 = state_25176;
(statearr_25237_25286[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25287 = state_25176;
state_25176 = G__25287;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23415__auto__ = function(state_25176){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23415__auto____1.call(this,state_25176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23415__auto____0;
cljs$core$async$mix_$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23415__auto____1;
return cljs$core$async$mix_$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___25239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23528__auto__ = (function (){var statearr_25238 = f__23527__auto__.call(null);
(statearr_25238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___25239);

return statearr_25238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___25239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25288 = [];
var len__17884__auto___25291 = arguments.length;
var i__17885__auto___25292 = (0);
while(true){
if((i__17885__auto___25292 < len__17884__auto___25291)){
args25288.push((arguments[i__17885__auto___25292]));

var G__25293 = (i__17885__auto___25292 + (1));
i__17885__auto___25292 = G__25293;
continue;
} else {
}
break;
}

var G__25290 = args25288.length;
switch (G__25290) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25288.length)].join('')));

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
var args25296 = [];
var len__17884__auto___25421 = arguments.length;
var i__17885__auto___25422 = (0);
while(true){
if((i__17885__auto___25422 < len__17884__auto___25421)){
args25296.push((arguments[i__17885__auto___25422]));

var G__25423 = (i__17885__auto___25422 + (1));
i__17885__auto___25422 = G__25423;
continue;
} else {
}
break;
}

var G__25298 = args25296.length;
switch (G__25298) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25296.length)].join('')));

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
return (function (p1__25295_SHARP_){
if(cljs.core.truth_(p1__25295_SHARP_.call(null,topic))){
return p1__25295_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25295_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25299 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25300){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25300 = meta25300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25301,meta25300__$1){
var self__ = this;
var _25301__$1 = this;
return (new cljs.core.async.t_cljs$core$async25299(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25300__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25301){
var self__ = this;
var _25301__$1 = this;
return self__.meta25300;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25299.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25300","meta25300",1722157128,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25299";

cljs.core.async.t_cljs$core$async25299.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25299");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25299 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25299(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25300){
return (new cljs.core.async.t_cljs$core$async25299(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25300));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25299(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23526__auto___25425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___25425,mults,ensure_mult,p){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___25425,mults,ensure_mult,p){
return (function (state_25373){
var state_val_25374 = (state_25373[(1)]);
if((state_val_25374 === (7))){
var inst_25369 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25375_25426 = state_25373__$1;
(statearr_25375_25426[(2)] = inst_25369);

(statearr_25375_25426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (20))){
var state_25373__$1 = state_25373;
var statearr_25376_25427 = state_25373__$1;
(statearr_25376_25427[(2)] = null);

(statearr_25376_25427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (1))){
var state_25373__$1 = state_25373;
var statearr_25377_25428 = state_25373__$1;
(statearr_25377_25428[(2)] = null);

(statearr_25377_25428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (24))){
var inst_25352 = (state_25373[(7)]);
var inst_25361 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25352);
var state_25373__$1 = state_25373;
var statearr_25378_25429 = state_25373__$1;
(statearr_25378_25429[(2)] = inst_25361);

(statearr_25378_25429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (4))){
var inst_25304 = (state_25373[(8)]);
var inst_25304__$1 = (state_25373[(2)]);
var inst_25305 = (inst_25304__$1 == null);
var state_25373__$1 = (function (){var statearr_25379 = state_25373;
(statearr_25379[(8)] = inst_25304__$1);

return statearr_25379;
})();
if(cljs.core.truth_(inst_25305)){
var statearr_25380_25430 = state_25373__$1;
(statearr_25380_25430[(1)] = (5));

} else {
var statearr_25381_25431 = state_25373__$1;
(statearr_25381_25431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (15))){
var inst_25346 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25382_25432 = state_25373__$1;
(statearr_25382_25432[(2)] = inst_25346);

(statearr_25382_25432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (21))){
var inst_25366 = (state_25373[(2)]);
var state_25373__$1 = (function (){var statearr_25383 = state_25373;
(statearr_25383[(9)] = inst_25366);

return statearr_25383;
})();
var statearr_25384_25433 = state_25373__$1;
(statearr_25384_25433[(2)] = null);

(statearr_25384_25433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (13))){
var inst_25328 = (state_25373[(10)]);
var inst_25330 = cljs.core.chunked_seq_QMARK_.call(null,inst_25328);
var state_25373__$1 = state_25373;
if(inst_25330){
var statearr_25385_25434 = state_25373__$1;
(statearr_25385_25434[(1)] = (16));

} else {
var statearr_25386_25435 = state_25373__$1;
(statearr_25386_25435[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (22))){
var inst_25358 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25358)){
var statearr_25387_25436 = state_25373__$1;
(statearr_25387_25436[(1)] = (23));

} else {
var statearr_25388_25437 = state_25373__$1;
(statearr_25388_25437[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (6))){
var inst_25304 = (state_25373[(8)]);
var inst_25354 = (state_25373[(11)]);
var inst_25352 = (state_25373[(7)]);
var inst_25352__$1 = topic_fn.call(null,inst_25304);
var inst_25353 = cljs.core.deref.call(null,mults);
var inst_25354__$1 = cljs.core.get.call(null,inst_25353,inst_25352__$1);
var state_25373__$1 = (function (){var statearr_25389 = state_25373;
(statearr_25389[(11)] = inst_25354__$1);

(statearr_25389[(7)] = inst_25352__$1);

return statearr_25389;
})();
if(cljs.core.truth_(inst_25354__$1)){
var statearr_25390_25438 = state_25373__$1;
(statearr_25390_25438[(1)] = (19));

} else {
var statearr_25391_25439 = state_25373__$1;
(statearr_25391_25439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (25))){
var inst_25363 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25392_25440 = state_25373__$1;
(statearr_25392_25440[(2)] = inst_25363);

(statearr_25392_25440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (17))){
var inst_25328 = (state_25373[(10)]);
var inst_25337 = cljs.core.first.call(null,inst_25328);
var inst_25338 = cljs.core.async.muxch_STAR_.call(null,inst_25337);
var inst_25339 = cljs.core.async.close_BANG_.call(null,inst_25338);
var inst_25340 = cljs.core.next.call(null,inst_25328);
var inst_25314 = inst_25340;
var inst_25315 = null;
var inst_25316 = (0);
var inst_25317 = (0);
var state_25373__$1 = (function (){var statearr_25393 = state_25373;
(statearr_25393[(12)] = inst_25339);

(statearr_25393[(13)] = inst_25316);

(statearr_25393[(14)] = inst_25315);

(statearr_25393[(15)] = inst_25317);

(statearr_25393[(16)] = inst_25314);

return statearr_25393;
})();
var statearr_25394_25441 = state_25373__$1;
(statearr_25394_25441[(2)] = null);

(statearr_25394_25441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (3))){
var inst_25371 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25373__$1,inst_25371);
} else {
if((state_val_25374 === (12))){
var inst_25348 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25395_25442 = state_25373__$1;
(statearr_25395_25442[(2)] = inst_25348);

(statearr_25395_25442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (2))){
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25373__$1,(4),ch);
} else {
if((state_val_25374 === (23))){
var state_25373__$1 = state_25373;
var statearr_25396_25443 = state_25373__$1;
(statearr_25396_25443[(2)] = null);

(statearr_25396_25443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (19))){
var inst_25304 = (state_25373[(8)]);
var inst_25354 = (state_25373[(11)]);
var inst_25356 = cljs.core.async.muxch_STAR_.call(null,inst_25354);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25373__$1,(22),inst_25356,inst_25304);
} else {
if((state_val_25374 === (11))){
var inst_25314 = (state_25373[(16)]);
var inst_25328 = (state_25373[(10)]);
var inst_25328__$1 = cljs.core.seq.call(null,inst_25314);
var state_25373__$1 = (function (){var statearr_25397 = state_25373;
(statearr_25397[(10)] = inst_25328__$1);

return statearr_25397;
})();
if(inst_25328__$1){
var statearr_25398_25444 = state_25373__$1;
(statearr_25398_25444[(1)] = (13));

} else {
var statearr_25399_25445 = state_25373__$1;
(statearr_25399_25445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (9))){
var inst_25350 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25400_25446 = state_25373__$1;
(statearr_25400_25446[(2)] = inst_25350);

(statearr_25400_25446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (5))){
var inst_25311 = cljs.core.deref.call(null,mults);
var inst_25312 = cljs.core.vals.call(null,inst_25311);
var inst_25313 = cljs.core.seq.call(null,inst_25312);
var inst_25314 = inst_25313;
var inst_25315 = null;
var inst_25316 = (0);
var inst_25317 = (0);
var state_25373__$1 = (function (){var statearr_25401 = state_25373;
(statearr_25401[(13)] = inst_25316);

(statearr_25401[(14)] = inst_25315);

(statearr_25401[(15)] = inst_25317);

(statearr_25401[(16)] = inst_25314);

return statearr_25401;
})();
var statearr_25402_25447 = state_25373__$1;
(statearr_25402_25447[(2)] = null);

(statearr_25402_25447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (14))){
var state_25373__$1 = state_25373;
var statearr_25406_25448 = state_25373__$1;
(statearr_25406_25448[(2)] = null);

(statearr_25406_25448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (16))){
var inst_25328 = (state_25373[(10)]);
var inst_25332 = cljs.core.chunk_first.call(null,inst_25328);
var inst_25333 = cljs.core.chunk_rest.call(null,inst_25328);
var inst_25334 = cljs.core.count.call(null,inst_25332);
var inst_25314 = inst_25333;
var inst_25315 = inst_25332;
var inst_25316 = inst_25334;
var inst_25317 = (0);
var state_25373__$1 = (function (){var statearr_25407 = state_25373;
(statearr_25407[(13)] = inst_25316);

(statearr_25407[(14)] = inst_25315);

(statearr_25407[(15)] = inst_25317);

(statearr_25407[(16)] = inst_25314);

return statearr_25407;
})();
var statearr_25408_25449 = state_25373__$1;
(statearr_25408_25449[(2)] = null);

(statearr_25408_25449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (10))){
var inst_25316 = (state_25373[(13)]);
var inst_25315 = (state_25373[(14)]);
var inst_25317 = (state_25373[(15)]);
var inst_25314 = (state_25373[(16)]);
var inst_25322 = cljs.core._nth.call(null,inst_25315,inst_25317);
var inst_25323 = cljs.core.async.muxch_STAR_.call(null,inst_25322);
var inst_25324 = cljs.core.async.close_BANG_.call(null,inst_25323);
var inst_25325 = (inst_25317 + (1));
var tmp25403 = inst_25316;
var tmp25404 = inst_25315;
var tmp25405 = inst_25314;
var inst_25314__$1 = tmp25405;
var inst_25315__$1 = tmp25404;
var inst_25316__$1 = tmp25403;
var inst_25317__$1 = inst_25325;
var state_25373__$1 = (function (){var statearr_25409 = state_25373;
(statearr_25409[(17)] = inst_25324);

(statearr_25409[(13)] = inst_25316__$1);

(statearr_25409[(14)] = inst_25315__$1);

(statearr_25409[(15)] = inst_25317__$1);

(statearr_25409[(16)] = inst_25314__$1);

return statearr_25409;
})();
var statearr_25410_25450 = state_25373__$1;
(statearr_25410_25450[(2)] = null);

(statearr_25410_25450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (18))){
var inst_25343 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25411_25451 = state_25373__$1;
(statearr_25411_25451[(2)] = inst_25343);

(statearr_25411_25451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (8))){
var inst_25316 = (state_25373[(13)]);
var inst_25317 = (state_25373[(15)]);
var inst_25319 = (inst_25317 < inst_25316);
var inst_25320 = inst_25319;
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25320)){
var statearr_25412_25452 = state_25373__$1;
(statearr_25412_25452[(1)] = (10));

} else {
var statearr_25413_25453 = state_25373__$1;
(statearr_25413_25453[(1)] = (11));

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
});})(c__23526__auto___25425,mults,ensure_mult,p))
;
return ((function (switch__23414__auto__,c__23526__auto___25425,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_25417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25417[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_25417[(1)] = (1));

return statearr_25417;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_25373){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_25373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e25418){if((e25418 instanceof Object)){
var ex__23418__auto__ = e25418;
var statearr_25419_25454 = state_25373;
(statearr_25419_25454[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25455 = state_25373;
state_25373 = G__25455;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_25373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_25373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___25425,mults,ensure_mult,p))
})();
var state__23528__auto__ = (function (){var statearr_25420 = f__23527__auto__.call(null);
(statearr_25420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___25425);

return statearr_25420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___25425,mults,ensure_mult,p))
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
var args25456 = [];
var len__17884__auto___25459 = arguments.length;
var i__17885__auto___25460 = (0);
while(true){
if((i__17885__auto___25460 < len__17884__auto___25459)){
args25456.push((arguments[i__17885__auto___25460]));

var G__25461 = (i__17885__auto___25460 + (1));
i__17885__auto___25460 = G__25461;
continue;
} else {
}
break;
}

var G__25458 = args25456.length;
switch (G__25458) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25456.length)].join('')));

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
var args25463 = [];
var len__17884__auto___25466 = arguments.length;
var i__17885__auto___25467 = (0);
while(true){
if((i__17885__auto___25467 < len__17884__auto___25466)){
args25463.push((arguments[i__17885__auto___25467]));

var G__25468 = (i__17885__auto___25467 + (1));
i__17885__auto___25467 = G__25468;
continue;
} else {
}
break;
}

var G__25465 = args25463.length;
switch (G__25465) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25463.length)].join('')));

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
var args25470 = [];
var len__17884__auto___25541 = arguments.length;
var i__17885__auto___25542 = (0);
while(true){
if((i__17885__auto___25542 < len__17884__auto___25541)){
args25470.push((arguments[i__17885__auto___25542]));

var G__25543 = (i__17885__auto___25542 + (1));
i__17885__auto___25542 = G__25543;
continue;
} else {
}
break;
}

var G__25472 = args25470.length;
switch (G__25472) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25470.length)].join('')));

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
var c__23526__auto___25545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___25545,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___25545,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25511){
var state_val_25512 = (state_25511[(1)]);
if((state_val_25512 === (7))){
var state_25511__$1 = state_25511;
var statearr_25513_25546 = state_25511__$1;
(statearr_25513_25546[(2)] = null);

(statearr_25513_25546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (1))){
var state_25511__$1 = state_25511;
var statearr_25514_25547 = state_25511__$1;
(statearr_25514_25547[(2)] = null);

(statearr_25514_25547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (4))){
var inst_25475 = (state_25511[(7)]);
var inst_25477 = (inst_25475 < cnt);
var state_25511__$1 = state_25511;
if(cljs.core.truth_(inst_25477)){
var statearr_25515_25548 = state_25511__$1;
(statearr_25515_25548[(1)] = (6));

} else {
var statearr_25516_25549 = state_25511__$1;
(statearr_25516_25549[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (15))){
var inst_25507 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25517_25550 = state_25511__$1;
(statearr_25517_25550[(2)] = inst_25507);

(statearr_25517_25550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (13))){
var inst_25500 = cljs.core.async.close_BANG_.call(null,out);
var state_25511__$1 = state_25511;
var statearr_25518_25551 = state_25511__$1;
(statearr_25518_25551[(2)] = inst_25500);

(statearr_25518_25551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (6))){
var state_25511__$1 = state_25511;
var statearr_25519_25552 = state_25511__$1;
(statearr_25519_25552[(2)] = null);

(statearr_25519_25552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (3))){
var inst_25509 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else {
if((state_val_25512 === (12))){
var inst_25497 = (state_25511[(8)]);
var inst_25497__$1 = (state_25511[(2)]);
var inst_25498 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25497__$1);
var state_25511__$1 = (function (){var statearr_25520 = state_25511;
(statearr_25520[(8)] = inst_25497__$1);

return statearr_25520;
})();
if(cljs.core.truth_(inst_25498)){
var statearr_25521_25553 = state_25511__$1;
(statearr_25521_25553[(1)] = (13));

} else {
var statearr_25522_25554 = state_25511__$1;
(statearr_25522_25554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (2))){
var inst_25474 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25475 = (0);
var state_25511__$1 = (function (){var statearr_25523 = state_25511;
(statearr_25523[(7)] = inst_25475);

(statearr_25523[(9)] = inst_25474);

return statearr_25523;
})();
var statearr_25524_25555 = state_25511__$1;
(statearr_25524_25555[(2)] = null);

(statearr_25524_25555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (11))){
var inst_25475 = (state_25511[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25511,(10),Object,null,(9));
var inst_25484 = chs__$1.call(null,inst_25475);
var inst_25485 = done.call(null,inst_25475);
var inst_25486 = cljs.core.async.take_BANG_.call(null,inst_25484,inst_25485);
var state_25511__$1 = state_25511;
var statearr_25525_25556 = state_25511__$1;
(statearr_25525_25556[(2)] = inst_25486);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (9))){
var inst_25475 = (state_25511[(7)]);
var inst_25488 = (state_25511[(2)]);
var inst_25489 = (inst_25475 + (1));
var inst_25475__$1 = inst_25489;
var state_25511__$1 = (function (){var statearr_25526 = state_25511;
(statearr_25526[(7)] = inst_25475__$1);

(statearr_25526[(10)] = inst_25488);

return statearr_25526;
})();
var statearr_25527_25557 = state_25511__$1;
(statearr_25527_25557[(2)] = null);

(statearr_25527_25557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (5))){
var inst_25495 = (state_25511[(2)]);
var state_25511__$1 = (function (){var statearr_25528 = state_25511;
(statearr_25528[(11)] = inst_25495);

return statearr_25528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(12),dchan);
} else {
if((state_val_25512 === (14))){
var inst_25497 = (state_25511[(8)]);
var inst_25502 = cljs.core.apply.call(null,f,inst_25497);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25511__$1,(16),out,inst_25502);
} else {
if((state_val_25512 === (16))){
var inst_25504 = (state_25511[(2)]);
var state_25511__$1 = (function (){var statearr_25529 = state_25511;
(statearr_25529[(12)] = inst_25504);

return statearr_25529;
})();
var statearr_25530_25558 = state_25511__$1;
(statearr_25530_25558[(2)] = null);

(statearr_25530_25558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (10))){
var inst_25479 = (state_25511[(2)]);
var inst_25480 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25511__$1 = (function (){var statearr_25531 = state_25511;
(statearr_25531[(13)] = inst_25479);

return statearr_25531;
})();
var statearr_25532_25559 = state_25511__$1;
(statearr_25532_25559[(2)] = inst_25480);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (8))){
var inst_25493 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25533_25560 = state_25511__$1;
(statearr_25533_25560[(2)] = inst_25493);

(statearr_25533_25560[(1)] = (5));


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
});})(c__23526__auto___25545,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23414__auto__,c__23526__auto___25545,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_25537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25537[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_25537[(1)] = (1));

return statearr_25537;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_25511){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_25511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e25538){if((e25538 instanceof Object)){
var ex__23418__auto__ = e25538;
var statearr_25539_25561 = state_25511;
(statearr_25539_25561[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25562 = state_25511;
state_25511 = G__25562;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___25545,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23528__auto__ = (function (){var statearr_25540 = f__23527__auto__.call(null);
(statearr_25540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___25545);

return statearr_25540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___25545,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25564 = [];
var len__17884__auto___25620 = arguments.length;
var i__17885__auto___25621 = (0);
while(true){
if((i__17885__auto___25621 < len__17884__auto___25620)){
args25564.push((arguments[i__17885__auto___25621]));

var G__25622 = (i__17885__auto___25621 + (1));
i__17885__auto___25621 = G__25622;
continue;
} else {
}
break;
}

var G__25566 = args25564.length;
switch (G__25566) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25564.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23526__auto___25624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___25624,out){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___25624,out){
return (function (state_25596){
var state_val_25597 = (state_25596[(1)]);
if((state_val_25597 === (7))){
var inst_25575 = (state_25596[(7)]);
var inst_25576 = (state_25596[(8)]);
var inst_25575__$1 = (state_25596[(2)]);
var inst_25576__$1 = cljs.core.nth.call(null,inst_25575__$1,(0),null);
var inst_25577 = cljs.core.nth.call(null,inst_25575__$1,(1),null);
var inst_25578 = (inst_25576__$1 == null);
var state_25596__$1 = (function (){var statearr_25598 = state_25596;
(statearr_25598[(9)] = inst_25577);

(statearr_25598[(7)] = inst_25575__$1);

(statearr_25598[(8)] = inst_25576__$1);

return statearr_25598;
})();
if(cljs.core.truth_(inst_25578)){
var statearr_25599_25625 = state_25596__$1;
(statearr_25599_25625[(1)] = (8));

} else {
var statearr_25600_25626 = state_25596__$1;
(statearr_25600_25626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (1))){
var inst_25567 = cljs.core.vec.call(null,chs);
var inst_25568 = inst_25567;
var state_25596__$1 = (function (){var statearr_25601 = state_25596;
(statearr_25601[(10)] = inst_25568);

return statearr_25601;
})();
var statearr_25602_25627 = state_25596__$1;
(statearr_25602_25627[(2)] = null);

(statearr_25602_25627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (4))){
var inst_25568 = (state_25596[(10)]);
var state_25596__$1 = state_25596;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25596__$1,(7),inst_25568);
} else {
if((state_val_25597 === (6))){
var inst_25592 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
var statearr_25603_25628 = state_25596__$1;
(statearr_25603_25628[(2)] = inst_25592);

(statearr_25603_25628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (3))){
var inst_25594 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25596__$1,inst_25594);
} else {
if((state_val_25597 === (2))){
var inst_25568 = (state_25596[(10)]);
var inst_25570 = cljs.core.count.call(null,inst_25568);
var inst_25571 = (inst_25570 > (0));
var state_25596__$1 = state_25596;
if(cljs.core.truth_(inst_25571)){
var statearr_25605_25629 = state_25596__$1;
(statearr_25605_25629[(1)] = (4));

} else {
var statearr_25606_25630 = state_25596__$1;
(statearr_25606_25630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (11))){
var inst_25568 = (state_25596[(10)]);
var inst_25585 = (state_25596[(2)]);
var tmp25604 = inst_25568;
var inst_25568__$1 = tmp25604;
var state_25596__$1 = (function (){var statearr_25607 = state_25596;
(statearr_25607[(10)] = inst_25568__$1);

(statearr_25607[(11)] = inst_25585);

return statearr_25607;
})();
var statearr_25608_25631 = state_25596__$1;
(statearr_25608_25631[(2)] = null);

(statearr_25608_25631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (9))){
var inst_25576 = (state_25596[(8)]);
var state_25596__$1 = state_25596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25596__$1,(11),out,inst_25576);
} else {
if((state_val_25597 === (5))){
var inst_25590 = cljs.core.async.close_BANG_.call(null,out);
var state_25596__$1 = state_25596;
var statearr_25609_25632 = state_25596__$1;
(statearr_25609_25632[(2)] = inst_25590);

(statearr_25609_25632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (10))){
var inst_25588 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
var statearr_25610_25633 = state_25596__$1;
(statearr_25610_25633[(2)] = inst_25588);

(statearr_25610_25633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (8))){
var inst_25577 = (state_25596[(9)]);
var inst_25575 = (state_25596[(7)]);
var inst_25568 = (state_25596[(10)]);
var inst_25576 = (state_25596[(8)]);
var inst_25580 = (function (){var cs = inst_25568;
var vec__25573 = inst_25575;
var v = inst_25576;
var c = inst_25577;
return ((function (cs,vec__25573,v,c,inst_25577,inst_25575,inst_25568,inst_25576,state_val_25597,c__23526__auto___25624,out){
return (function (p1__25563_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25563_SHARP_);
});
;})(cs,vec__25573,v,c,inst_25577,inst_25575,inst_25568,inst_25576,state_val_25597,c__23526__auto___25624,out))
})();
var inst_25581 = cljs.core.filterv.call(null,inst_25580,inst_25568);
var inst_25568__$1 = inst_25581;
var state_25596__$1 = (function (){var statearr_25611 = state_25596;
(statearr_25611[(10)] = inst_25568__$1);

return statearr_25611;
})();
var statearr_25612_25634 = state_25596__$1;
(statearr_25612_25634[(2)] = null);

(statearr_25612_25634[(1)] = (2));


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
});})(c__23526__auto___25624,out))
;
return ((function (switch__23414__auto__,c__23526__auto___25624,out){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_25616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25616[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_25616[(1)] = (1));

return statearr_25616;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_25596){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_25596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e25617){if((e25617 instanceof Object)){
var ex__23418__auto__ = e25617;
var statearr_25618_25635 = state_25596;
(statearr_25618_25635[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25636 = state_25596;
state_25596 = G__25636;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_25596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_25596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___25624,out))
})();
var state__23528__auto__ = (function (){var statearr_25619 = f__23527__auto__.call(null);
(statearr_25619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___25624);

return statearr_25619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___25624,out))
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
var args25637 = [];
var len__17884__auto___25686 = arguments.length;
var i__17885__auto___25687 = (0);
while(true){
if((i__17885__auto___25687 < len__17884__auto___25686)){
args25637.push((arguments[i__17885__auto___25687]));

var G__25688 = (i__17885__auto___25687 + (1));
i__17885__auto___25687 = G__25688;
continue;
} else {
}
break;
}

var G__25639 = args25637.length;
switch (G__25639) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25637.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23526__auto___25690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___25690,out){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___25690,out){
return (function (state_25663){
var state_val_25664 = (state_25663[(1)]);
if((state_val_25664 === (7))){
var inst_25645 = (state_25663[(7)]);
var inst_25645__$1 = (state_25663[(2)]);
var inst_25646 = (inst_25645__$1 == null);
var inst_25647 = cljs.core.not.call(null,inst_25646);
var state_25663__$1 = (function (){var statearr_25665 = state_25663;
(statearr_25665[(7)] = inst_25645__$1);

return statearr_25665;
})();
if(inst_25647){
var statearr_25666_25691 = state_25663__$1;
(statearr_25666_25691[(1)] = (8));

} else {
var statearr_25667_25692 = state_25663__$1;
(statearr_25667_25692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (1))){
var inst_25640 = (0);
var state_25663__$1 = (function (){var statearr_25668 = state_25663;
(statearr_25668[(8)] = inst_25640);

return statearr_25668;
})();
var statearr_25669_25693 = state_25663__$1;
(statearr_25669_25693[(2)] = null);

(statearr_25669_25693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (4))){
var state_25663__$1 = state_25663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25663__$1,(7),ch);
} else {
if((state_val_25664 === (6))){
var inst_25658 = (state_25663[(2)]);
var state_25663__$1 = state_25663;
var statearr_25670_25694 = state_25663__$1;
(statearr_25670_25694[(2)] = inst_25658);

(statearr_25670_25694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (3))){
var inst_25660 = (state_25663[(2)]);
var inst_25661 = cljs.core.async.close_BANG_.call(null,out);
var state_25663__$1 = (function (){var statearr_25671 = state_25663;
(statearr_25671[(9)] = inst_25660);

return statearr_25671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25663__$1,inst_25661);
} else {
if((state_val_25664 === (2))){
var inst_25640 = (state_25663[(8)]);
var inst_25642 = (inst_25640 < n);
var state_25663__$1 = state_25663;
if(cljs.core.truth_(inst_25642)){
var statearr_25672_25695 = state_25663__$1;
(statearr_25672_25695[(1)] = (4));

} else {
var statearr_25673_25696 = state_25663__$1;
(statearr_25673_25696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (11))){
var inst_25640 = (state_25663[(8)]);
var inst_25650 = (state_25663[(2)]);
var inst_25651 = (inst_25640 + (1));
var inst_25640__$1 = inst_25651;
var state_25663__$1 = (function (){var statearr_25674 = state_25663;
(statearr_25674[(10)] = inst_25650);

(statearr_25674[(8)] = inst_25640__$1);

return statearr_25674;
})();
var statearr_25675_25697 = state_25663__$1;
(statearr_25675_25697[(2)] = null);

(statearr_25675_25697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (9))){
var state_25663__$1 = state_25663;
var statearr_25676_25698 = state_25663__$1;
(statearr_25676_25698[(2)] = null);

(statearr_25676_25698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (5))){
var state_25663__$1 = state_25663;
var statearr_25677_25699 = state_25663__$1;
(statearr_25677_25699[(2)] = null);

(statearr_25677_25699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (10))){
var inst_25655 = (state_25663[(2)]);
var state_25663__$1 = state_25663;
var statearr_25678_25700 = state_25663__$1;
(statearr_25678_25700[(2)] = inst_25655);

(statearr_25678_25700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25664 === (8))){
var inst_25645 = (state_25663[(7)]);
var state_25663__$1 = state_25663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25663__$1,(11),out,inst_25645);
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
});})(c__23526__auto___25690,out))
;
return ((function (switch__23414__auto__,c__23526__auto___25690,out){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_25682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25682[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_25682[(1)] = (1));

return statearr_25682;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_25663){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_25663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e25683){if((e25683 instanceof Object)){
var ex__23418__auto__ = e25683;
var statearr_25684_25701 = state_25663;
(statearr_25684_25701[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25702 = state_25663;
state_25663 = G__25702;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_25663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_25663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___25690,out))
})();
var state__23528__auto__ = (function (){var statearr_25685 = f__23527__auto__.call(null);
(statearr_25685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___25690);

return statearr_25685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___25690,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25710 = (function (map_LT_,f,ch,meta25711){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25711 = meta25711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25712,meta25711__$1){
var self__ = this;
var _25712__$1 = this;
return (new cljs.core.async.t_cljs$core$async25710(self__.map_LT_,self__.f,self__.ch,meta25711__$1));
});

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25712){
var self__ = this;
var _25712__$1 = this;
return self__.meta25711;
});

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25713 = (function (map_LT_,f,ch,meta25711,_,fn1,meta25714){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25711 = meta25711;
this._ = _;
this.fn1 = fn1;
this.meta25714 = meta25714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25715,meta25714__$1){
var self__ = this;
var _25715__$1 = this;
return (new cljs.core.async.t_cljs$core$async25713(self__.map_LT_,self__.f,self__.ch,self__.meta25711,self__._,self__.fn1,meta25714__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25715){
var self__ = this;
var _25715__$1 = this;
return self__.meta25714;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25703_SHARP_){
return f1.call(null,(((p1__25703_SHARP_ == null))?null:self__.f.call(null,p1__25703_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25713.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25711","meta25711",-156226015,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25710","cljs.core.async/t_cljs$core$async25710",915026175,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25714","meta25714",-627992434,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25713";

cljs.core.async.t_cljs$core$async25713.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25713");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25713 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25713(map_LT___$1,f__$1,ch__$1,meta25711__$1,___$2,fn1__$1,meta25714){
return (new cljs.core.async.t_cljs$core$async25713(map_LT___$1,f__$1,ch__$1,meta25711__$1,___$2,fn1__$1,meta25714));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25713(self__.map_LT_,self__.f,self__.ch,self__.meta25711,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25711","meta25711",-156226015,null)], null);
});

cljs.core.async.t_cljs$core$async25710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25710";

cljs.core.async.t_cljs$core$async25710.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25710");
});

cljs.core.async.__GT_t_cljs$core$async25710 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25710(map_LT___$1,f__$1,ch__$1,meta25711){
return (new cljs.core.async.t_cljs$core$async25710(map_LT___$1,f__$1,ch__$1,meta25711));
});

}

return (new cljs.core.async.t_cljs$core$async25710(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25719 = (function (map_GT_,f,ch,meta25720){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25720 = meta25720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25721,meta25720__$1){
var self__ = this;
var _25721__$1 = this;
return (new cljs.core.async.t_cljs$core$async25719(self__.map_GT_,self__.f,self__.ch,meta25720__$1));
});

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25721){
var self__ = this;
var _25721__$1 = this;
return self__.meta25720;
});

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25720","meta25720",542182169,null)], null);
});

cljs.core.async.t_cljs$core$async25719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25719";

cljs.core.async.t_cljs$core$async25719.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25719");
});

cljs.core.async.__GT_t_cljs$core$async25719 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25719(map_GT___$1,f__$1,ch__$1,meta25720){
return (new cljs.core.async.t_cljs$core$async25719(map_GT___$1,f__$1,ch__$1,meta25720));
});

}

return (new cljs.core.async.t_cljs$core$async25719(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25725 = (function (filter_GT_,p,ch,meta25726){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25726 = meta25726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25727,meta25726__$1){
var self__ = this;
var _25727__$1 = this;
return (new cljs.core.async.t_cljs$core$async25725(self__.filter_GT_,self__.p,self__.ch,meta25726__$1));
});

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25727){
var self__ = this;
var _25727__$1 = this;
return self__.meta25726;
});

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25726","meta25726",-148603554,null)], null);
});

cljs.core.async.t_cljs$core$async25725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25725";

cljs.core.async.t_cljs$core$async25725.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async25725");
});

cljs.core.async.__GT_t_cljs$core$async25725 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25725(filter_GT___$1,p__$1,ch__$1,meta25726){
return (new cljs.core.async.t_cljs$core$async25725(filter_GT___$1,p__$1,ch__$1,meta25726));
});

}

return (new cljs.core.async.t_cljs$core$async25725(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25728 = [];
var len__17884__auto___25772 = arguments.length;
var i__17885__auto___25773 = (0);
while(true){
if((i__17885__auto___25773 < len__17884__auto___25772)){
args25728.push((arguments[i__17885__auto___25773]));

var G__25774 = (i__17885__auto___25773 + (1));
i__17885__auto___25773 = G__25774;
continue;
} else {
}
break;
}

var G__25730 = args25728.length;
switch (G__25730) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25728.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23526__auto___25776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___25776,out){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___25776,out){
return (function (state_25751){
var state_val_25752 = (state_25751[(1)]);
if((state_val_25752 === (7))){
var inst_25747 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25753_25777 = state_25751__$1;
(statearr_25753_25777[(2)] = inst_25747);

(statearr_25753_25777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (1))){
var state_25751__$1 = state_25751;
var statearr_25754_25778 = state_25751__$1;
(statearr_25754_25778[(2)] = null);

(statearr_25754_25778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (4))){
var inst_25733 = (state_25751[(7)]);
var inst_25733__$1 = (state_25751[(2)]);
var inst_25734 = (inst_25733__$1 == null);
var state_25751__$1 = (function (){var statearr_25755 = state_25751;
(statearr_25755[(7)] = inst_25733__$1);

return statearr_25755;
})();
if(cljs.core.truth_(inst_25734)){
var statearr_25756_25779 = state_25751__$1;
(statearr_25756_25779[(1)] = (5));

} else {
var statearr_25757_25780 = state_25751__$1;
(statearr_25757_25780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (6))){
var inst_25733 = (state_25751[(7)]);
var inst_25738 = p.call(null,inst_25733);
var state_25751__$1 = state_25751;
if(cljs.core.truth_(inst_25738)){
var statearr_25758_25781 = state_25751__$1;
(statearr_25758_25781[(1)] = (8));

} else {
var statearr_25759_25782 = state_25751__$1;
(statearr_25759_25782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (3))){
var inst_25749 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25751__$1,inst_25749);
} else {
if((state_val_25752 === (2))){
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25751__$1,(4),ch);
} else {
if((state_val_25752 === (11))){
var inst_25741 = (state_25751[(2)]);
var state_25751__$1 = state_25751;
var statearr_25760_25783 = state_25751__$1;
(statearr_25760_25783[(2)] = inst_25741);

(statearr_25760_25783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (9))){
var state_25751__$1 = state_25751;
var statearr_25761_25784 = state_25751__$1;
(statearr_25761_25784[(2)] = null);

(statearr_25761_25784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (5))){
var inst_25736 = cljs.core.async.close_BANG_.call(null,out);
var state_25751__$1 = state_25751;
var statearr_25762_25785 = state_25751__$1;
(statearr_25762_25785[(2)] = inst_25736);

(statearr_25762_25785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (10))){
var inst_25744 = (state_25751[(2)]);
var state_25751__$1 = (function (){var statearr_25763 = state_25751;
(statearr_25763[(8)] = inst_25744);

return statearr_25763;
})();
var statearr_25764_25786 = state_25751__$1;
(statearr_25764_25786[(2)] = null);

(statearr_25764_25786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25752 === (8))){
var inst_25733 = (state_25751[(7)]);
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25751__$1,(11),out,inst_25733);
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
});})(c__23526__auto___25776,out))
;
return ((function (switch__23414__auto__,c__23526__auto___25776,out){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_25768 = [null,null,null,null,null,null,null,null,null];
(statearr_25768[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_25768[(1)] = (1));

return statearr_25768;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_25751){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_25751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object)){
var ex__23418__auto__ = e25769;
var statearr_25770_25787 = state_25751;
(statearr_25770_25787[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25788 = state_25751;
state_25751 = G__25788;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_25751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_25751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___25776,out))
})();
var state__23528__auto__ = (function (){var statearr_25771 = f__23527__auto__.call(null);
(statearr_25771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___25776);

return statearr_25771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___25776,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25789 = [];
var len__17884__auto___25792 = arguments.length;
var i__17885__auto___25793 = (0);
while(true){
if((i__17885__auto___25793 < len__17884__auto___25792)){
args25789.push((arguments[i__17885__auto___25793]));

var G__25794 = (i__17885__auto___25793 + (1));
i__17885__auto___25793 = G__25794;
continue;
} else {
}
break;
}

var G__25791 = args25789.length;
switch (G__25791) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25789.length)].join('')));

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
var c__23526__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto__){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto__){
return (function (state_25961){
var state_val_25962 = (state_25961[(1)]);
if((state_val_25962 === (7))){
var inst_25957 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
var statearr_25963_26004 = state_25961__$1;
(statearr_25963_26004[(2)] = inst_25957);

(statearr_25963_26004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (20))){
var inst_25927 = (state_25961[(7)]);
var inst_25938 = (state_25961[(2)]);
var inst_25939 = cljs.core.next.call(null,inst_25927);
var inst_25913 = inst_25939;
var inst_25914 = null;
var inst_25915 = (0);
var inst_25916 = (0);
var state_25961__$1 = (function (){var statearr_25964 = state_25961;
(statearr_25964[(8)] = inst_25913);

(statearr_25964[(9)] = inst_25938);

(statearr_25964[(10)] = inst_25914);

(statearr_25964[(11)] = inst_25916);

(statearr_25964[(12)] = inst_25915);

return statearr_25964;
})();
var statearr_25965_26005 = state_25961__$1;
(statearr_25965_26005[(2)] = null);

(statearr_25965_26005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (1))){
var state_25961__$1 = state_25961;
var statearr_25966_26006 = state_25961__$1;
(statearr_25966_26006[(2)] = null);

(statearr_25966_26006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (4))){
var inst_25902 = (state_25961[(13)]);
var inst_25902__$1 = (state_25961[(2)]);
var inst_25903 = (inst_25902__$1 == null);
var state_25961__$1 = (function (){var statearr_25967 = state_25961;
(statearr_25967[(13)] = inst_25902__$1);

return statearr_25967;
})();
if(cljs.core.truth_(inst_25903)){
var statearr_25968_26007 = state_25961__$1;
(statearr_25968_26007[(1)] = (5));

} else {
var statearr_25969_26008 = state_25961__$1;
(statearr_25969_26008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (15))){
var state_25961__$1 = state_25961;
var statearr_25973_26009 = state_25961__$1;
(statearr_25973_26009[(2)] = null);

(statearr_25973_26009[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (21))){
var state_25961__$1 = state_25961;
var statearr_25974_26010 = state_25961__$1;
(statearr_25974_26010[(2)] = null);

(statearr_25974_26010[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (13))){
var inst_25913 = (state_25961[(8)]);
var inst_25914 = (state_25961[(10)]);
var inst_25916 = (state_25961[(11)]);
var inst_25915 = (state_25961[(12)]);
var inst_25923 = (state_25961[(2)]);
var inst_25924 = (inst_25916 + (1));
var tmp25970 = inst_25913;
var tmp25971 = inst_25914;
var tmp25972 = inst_25915;
var inst_25913__$1 = tmp25970;
var inst_25914__$1 = tmp25971;
var inst_25915__$1 = tmp25972;
var inst_25916__$1 = inst_25924;
var state_25961__$1 = (function (){var statearr_25975 = state_25961;
(statearr_25975[(8)] = inst_25913__$1);

(statearr_25975[(10)] = inst_25914__$1);

(statearr_25975[(14)] = inst_25923);

(statearr_25975[(11)] = inst_25916__$1);

(statearr_25975[(12)] = inst_25915__$1);

return statearr_25975;
})();
var statearr_25976_26011 = state_25961__$1;
(statearr_25976_26011[(2)] = null);

(statearr_25976_26011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (22))){
var state_25961__$1 = state_25961;
var statearr_25977_26012 = state_25961__$1;
(statearr_25977_26012[(2)] = null);

(statearr_25977_26012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (6))){
var inst_25902 = (state_25961[(13)]);
var inst_25911 = f.call(null,inst_25902);
var inst_25912 = cljs.core.seq.call(null,inst_25911);
var inst_25913 = inst_25912;
var inst_25914 = null;
var inst_25915 = (0);
var inst_25916 = (0);
var state_25961__$1 = (function (){var statearr_25978 = state_25961;
(statearr_25978[(8)] = inst_25913);

(statearr_25978[(10)] = inst_25914);

(statearr_25978[(11)] = inst_25916);

(statearr_25978[(12)] = inst_25915);

return statearr_25978;
})();
var statearr_25979_26013 = state_25961__$1;
(statearr_25979_26013[(2)] = null);

(statearr_25979_26013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (17))){
var inst_25927 = (state_25961[(7)]);
var inst_25931 = cljs.core.chunk_first.call(null,inst_25927);
var inst_25932 = cljs.core.chunk_rest.call(null,inst_25927);
var inst_25933 = cljs.core.count.call(null,inst_25931);
var inst_25913 = inst_25932;
var inst_25914 = inst_25931;
var inst_25915 = inst_25933;
var inst_25916 = (0);
var state_25961__$1 = (function (){var statearr_25980 = state_25961;
(statearr_25980[(8)] = inst_25913);

(statearr_25980[(10)] = inst_25914);

(statearr_25980[(11)] = inst_25916);

(statearr_25980[(12)] = inst_25915);

return statearr_25980;
})();
var statearr_25981_26014 = state_25961__$1;
(statearr_25981_26014[(2)] = null);

(statearr_25981_26014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (3))){
var inst_25959 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25961__$1,inst_25959);
} else {
if((state_val_25962 === (12))){
var inst_25947 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
var statearr_25982_26015 = state_25961__$1;
(statearr_25982_26015[(2)] = inst_25947);

(statearr_25982_26015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (2))){
var state_25961__$1 = state_25961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25961__$1,(4),in$);
} else {
if((state_val_25962 === (23))){
var inst_25955 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
var statearr_25983_26016 = state_25961__$1;
(statearr_25983_26016[(2)] = inst_25955);

(statearr_25983_26016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (19))){
var inst_25942 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
var statearr_25984_26017 = state_25961__$1;
(statearr_25984_26017[(2)] = inst_25942);

(statearr_25984_26017[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (11))){
var inst_25913 = (state_25961[(8)]);
var inst_25927 = (state_25961[(7)]);
var inst_25927__$1 = cljs.core.seq.call(null,inst_25913);
var state_25961__$1 = (function (){var statearr_25985 = state_25961;
(statearr_25985[(7)] = inst_25927__$1);

return statearr_25985;
})();
if(inst_25927__$1){
var statearr_25986_26018 = state_25961__$1;
(statearr_25986_26018[(1)] = (14));

} else {
var statearr_25987_26019 = state_25961__$1;
(statearr_25987_26019[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (9))){
var inst_25949 = (state_25961[(2)]);
var inst_25950 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25961__$1 = (function (){var statearr_25988 = state_25961;
(statearr_25988[(15)] = inst_25949);

return statearr_25988;
})();
if(cljs.core.truth_(inst_25950)){
var statearr_25989_26020 = state_25961__$1;
(statearr_25989_26020[(1)] = (21));

} else {
var statearr_25990_26021 = state_25961__$1;
(statearr_25990_26021[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (5))){
var inst_25905 = cljs.core.async.close_BANG_.call(null,out);
var state_25961__$1 = state_25961;
var statearr_25991_26022 = state_25961__$1;
(statearr_25991_26022[(2)] = inst_25905);

(statearr_25991_26022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (14))){
var inst_25927 = (state_25961[(7)]);
var inst_25929 = cljs.core.chunked_seq_QMARK_.call(null,inst_25927);
var state_25961__$1 = state_25961;
if(inst_25929){
var statearr_25992_26023 = state_25961__$1;
(statearr_25992_26023[(1)] = (17));

} else {
var statearr_25993_26024 = state_25961__$1;
(statearr_25993_26024[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (16))){
var inst_25945 = (state_25961[(2)]);
var state_25961__$1 = state_25961;
var statearr_25994_26025 = state_25961__$1;
(statearr_25994_26025[(2)] = inst_25945);

(statearr_25994_26025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25962 === (10))){
var inst_25914 = (state_25961[(10)]);
var inst_25916 = (state_25961[(11)]);
var inst_25921 = cljs.core._nth.call(null,inst_25914,inst_25916);
var state_25961__$1 = state_25961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25961__$1,(13),out,inst_25921);
} else {
if((state_val_25962 === (18))){
var inst_25927 = (state_25961[(7)]);
var inst_25936 = cljs.core.first.call(null,inst_25927);
var state_25961__$1 = state_25961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25961__$1,(20),out,inst_25936);
} else {
if((state_val_25962 === (8))){
var inst_25916 = (state_25961[(11)]);
var inst_25915 = (state_25961[(12)]);
var inst_25918 = (inst_25916 < inst_25915);
var inst_25919 = inst_25918;
var state_25961__$1 = state_25961;
if(cljs.core.truth_(inst_25919)){
var statearr_25995_26026 = state_25961__$1;
(statearr_25995_26026[(1)] = (10));

} else {
var statearr_25996_26027 = state_25961__$1;
(statearr_25996_26027[(1)] = (11));

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
});})(c__23526__auto__))
;
return ((function (switch__23414__auto__,c__23526__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23415__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23415__auto____0 = (function (){
var statearr_26000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26000[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23415__auto__);

(statearr_26000[(1)] = (1));

return statearr_26000;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23415__auto____1 = (function (state_25961){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_25961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e26001){if((e26001 instanceof Object)){
var ex__23418__auto__ = e26001;
var statearr_26002_26028 = state_25961;
(statearr_26002_26028[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26029 = state_25961;
state_25961 = G__26029;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23415__auto__ = function(state_25961){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23415__auto____1.call(this,state_25961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23415__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23415__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto__))
})();
var state__23528__auto__ = (function (){var statearr_26003 = f__23527__auto__.call(null);
(statearr_26003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto__);

return statearr_26003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto__))
);

return c__23526__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26030 = [];
var len__17884__auto___26033 = arguments.length;
var i__17885__auto___26034 = (0);
while(true){
if((i__17885__auto___26034 < len__17884__auto___26033)){
args26030.push((arguments[i__17885__auto___26034]));

var G__26035 = (i__17885__auto___26034 + (1));
i__17885__auto___26034 = G__26035;
continue;
} else {
}
break;
}

var G__26032 = args26030.length;
switch (G__26032) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26030.length)].join('')));

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
var args26037 = [];
var len__17884__auto___26040 = arguments.length;
var i__17885__auto___26041 = (0);
while(true){
if((i__17885__auto___26041 < len__17884__auto___26040)){
args26037.push((arguments[i__17885__auto___26041]));

var G__26042 = (i__17885__auto___26041 + (1));
i__17885__auto___26041 = G__26042;
continue;
} else {
}
break;
}

var G__26039 = args26037.length;
switch (G__26039) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26037.length)].join('')));

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
var args26044 = [];
var len__17884__auto___26095 = arguments.length;
var i__17885__auto___26096 = (0);
while(true){
if((i__17885__auto___26096 < len__17884__auto___26095)){
args26044.push((arguments[i__17885__auto___26096]));

var G__26097 = (i__17885__auto___26096 + (1));
i__17885__auto___26096 = G__26097;
continue;
} else {
}
break;
}

var G__26046 = args26044.length;
switch (G__26046) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26044.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23526__auto___26099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___26099,out){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___26099,out){
return (function (state_26070){
var state_val_26071 = (state_26070[(1)]);
if((state_val_26071 === (7))){
var inst_26065 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26072_26100 = state_26070__$1;
(statearr_26072_26100[(2)] = inst_26065);

(statearr_26072_26100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (1))){
var inst_26047 = null;
var state_26070__$1 = (function (){var statearr_26073 = state_26070;
(statearr_26073[(7)] = inst_26047);

return statearr_26073;
})();
var statearr_26074_26101 = state_26070__$1;
(statearr_26074_26101[(2)] = null);

(statearr_26074_26101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (4))){
var inst_26050 = (state_26070[(8)]);
var inst_26050__$1 = (state_26070[(2)]);
var inst_26051 = (inst_26050__$1 == null);
var inst_26052 = cljs.core.not.call(null,inst_26051);
var state_26070__$1 = (function (){var statearr_26075 = state_26070;
(statearr_26075[(8)] = inst_26050__$1);

return statearr_26075;
})();
if(inst_26052){
var statearr_26076_26102 = state_26070__$1;
(statearr_26076_26102[(1)] = (5));

} else {
var statearr_26077_26103 = state_26070__$1;
(statearr_26077_26103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (6))){
var state_26070__$1 = state_26070;
var statearr_26078_26104 = state_26070__$1;
(statearr_26078_26104[(2)] = null);

(statearr_26078_26104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (3))){
var inst_26067 = (state_26070[(2)]);
var inst_26068 = cljs.core.async.close_BANG_.call(null,out);
var state_26070__$1 = (function (){var statearr_26079 = state_26070;
(statearr_26079[(9)] = inst_26067);

return statearr_26079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26070__$1,inst_26068);
} else {
if((state_val_26071 === (2))){
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26070__$1,(4),ch);
} else {
if((state_val_26071 === (11))){
var inst_26050 = (state_26070[(8)]);
var inst_26059 = (state_26070[(2)]);
var inst_26047 = inst_26050;
var state_26070__$1 = (function (){var statearr_26080 = state_26070;
(statearr_26080[(10)] = inst_26059);

(statearr_26080[(7)] = inst_26047);

return statearr_26080;
})();
var statearr_26081_26105 = state_26070__$1;
(statearr_26081_26105[(2)] = null);

(statearr_26081_26105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (9))){
var inst_26050 = (state_26070[(8)]);
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26070__$1,(11),out,inst_26050);
} else {
if((state_val_26071 === (5))){
var inst_26050 = (state_26070[(8)]);
var inst_26047 = (state_26070[(7)]);
var inst_26054 = cljs.core._EQ_.call(null,inst_26050,inst_26047);
var state_26070__$1 = state_26070;
if(inst_26054){
var statearr_26083_26106 = state_26070__$1;
(statearr_26083_26106[(1)] = (8));

} else {
var statearr_26084_26107 = state_26070__$1;
(statearr_26084_26107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (10))){
var inst_26062 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26085_26108 = state_26070__$1;
(statearr_26085_26108[(2)] = inst_26062);

(statearr_26085_26108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (8))){
var inst_26047 = (state_26070[(7)]);
var tmp26082 = inst_26047;
var inst_26047__$1 = tmp26082;
var state_26070__$1 = (function (){var statearr_26086 = state_26070;
(statearr_26086[(7)] = inst_26047__$1);

return statearr_26086;
})();
var statearr_26087_26109 = state_26070__$1;
(statearr_26087_26109[(2)] = null);

(statearr_26087_26109[(1)] = (2));


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
});})(c__23526__auto___26099,out))
;
return ((function (switch__23414__auto__,c__23526__auto___26099,out){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_26091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26091[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_26091[(1)] = (1));

return statearr_26091;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_26070){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_26070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e26092){if((e26092 instanceof Object)){
var ex__23418__auto__ = e26092;
var statearr_26093_26110 = state_26070;
(statearr_26093_26110[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26111 = state_26070;
state_26070 = G__26111;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_26070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_26070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___26099,out))
})();
var state__23528__auto__ = (function (){var statearr_26094 = f__23527__auto__.call(null);
(statearr_26094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___26099);

return statearr_26094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___26099,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26112 = [];
var len__17884__auto___26182 = arguments.length;
var i__17885__auto___26183 = (0);
while(true){
if((i__17885__auto___26183 < len__17884__auto___26182)){
args26112.push((arguments[i__17885__auto___26183]));

var G__26184 = (i__17885__auto___26183 + (1));
i__17885__auto___26183 = G__26184;
continue;
} else {
}
break;
}

var G__26114 = args26112.length;
switch (G__26114) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26112.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23526__auto___26186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___26186,out){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___26186,out){
return (function (state_26152){
var state_val_26153 = (state_26152[(1)]);
if((state_val_26153 === (7))){
var inst_26148 = (state_26152[(2)]);
var state_26152__$1 = state_26152;
var statearr_26154_26187 = state_26152__$1;
(statearr_26154_26187[(2)] = inst_26148);

(statearr_26154_26187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (1))){
var inst_26115 = (new Array(n));
var inst_26116 = inst_26115;
var inst_26117 = (0);
var state_26152__$1 = (function (){var statearr_26155 = state_26152;
(statearr_26155[(7)] = inst_26116);

(statearr_26155[(8)] = inst_26117);

return statearr_26155;
})();
var statearr_26156_26188 = state_26152__$1;
(statearr_26156_26188[(2)] = null);

(statearr_26156_26188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (4))){
var inst_26120 = (state_26152[(9)]);
var inst_26120__$1 = (state_26152[(2)]);
var inst_26121 = (inst_26120__$1 == null);
var inst_26122 = cljs.core.not.call(null,inst_26121);
var state_26152__$1 = (function (){var statearr_26157 = state_26152;
(statearr_26157[(9)] = inst_26120__$1);

return statearr_26157;
})();
if(inst_26122){
var statearr_26158_26189 = state_26152__$1;
(statearr_26158_26189[(1)] = (5));

} else {
var statearr_26159_26190 = state_26152__$1;
(statearr_26159_26190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (15))){
var inst_26142 = (state_26152[(2)]);
var state_26152__$1 = state_26152;
var statearr_26160_26191 = state_26152__$1;
(statearr_26160_26191[(2)] = inst_26142);

(statearr_26160_26191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (13))){
var state_26152__$1 = state_26152;
var statearr_26161_26192 = state_26152__$1;
(statearr_26161_26192[(2)] = null);

(statearr_26161_26192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (6))){
var inst_26117 = (state_26152[(8)]);
var inst_26138 = (inst_26117 > (0));
var state_26152__$1 = state_26152;
if(cljs.core.truth_(inst_26138)){
var statearr_26162_26193 = state_26152__$1;
(statearr_26162_26193[(1)] = (12));

} else {
var statearr_26163_26194 = state_26152__$1;
(statearr_26163_26194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (3))){
var inst_26150 = (state_26152[(2)]);
var state_26152__$1 = state_26152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26152__$1,inst_26150);
} else {
if((state_val_26153 === (12))){
var inst_26116 = (state_26152[(7)]);
var inst_26140 = cljs.core.vec.call(null,inst_26116);
var state_26152__$1 = state_26152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26152__$1,(15),out,inst_26140);
} else {
if((state_val_26153 === (2))){
var state_26152__$1 = state_26152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26152__$1,(4),ch);
} else {
if((state_val_26153 === (11))){
var inst_26132 = (state_26152[(2)]);
var inst_26133 = (new Array(n));
var inst_26116 = inst_26133;
var inst_26117 = (0);
var state_26152__$1 = (function (){var statearr_26164 = state_26152;
(statearr_26164[(10)] = inst_26132);

(statearr_26164[(7)] = inst_26116);

(statearr_26164[(8)] = inst_26117);

return statearr_26164;
})();
var statearr_26165_26195 = state_26152__$1;
(statearr_26165_26195[(2)] = null);

(statearr_26165_26195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (9))){
var inst_26116 = (state_26152[(7)]);
var inst_26130 = cljs.core.vec.call(null,inst_26116);
var state_26152__$1 = state_26152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26152__$1,(11),out,inst_26130);
} else {
if((state_val_26153 === (5))){
var inst_26120 = (state_26152[(9)]);
var inst_26116 = (state_26152[(7)]);
var inst_26117 = (state_26152[(8)]);
var inst_26125 = (state_26152[(11)]);
var inst_26124 = (inst_26116[inst_26117] = inst_26120);
var inst_26125__$1 = (inst_26117 + (1));
var inst_26126 = (inst_26125__$1 < n);
var state_26152__$1 = (function (){var statearr_26166 = state_26152;
(statearr_26166[(12)] = inst_26124);

(statearr_26166[(11)] = inst_26125__$1);

return statearr_26166;
})();
if(cljs.core.truth_(inst_26126)){
var statearr_26167_26196 = state_26152__$1;
(statearr_26167_26196[(1)] = (8));

} else {
var statearr_26168_26197 = state_26152__$1;
(statearr_26168_26197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (14))){
var inst_26145 = (state_26152[(2)]);
var inst_26146 = cljs.core.async.close_BANG_.call(null,out);
var state_26152__$1 = (function (){var statearr_26170 = state_26152;
(statearr_26170[(13)] = inst_26145);

return statearr_26170;
})();
var statearr_26171_26198 = state_26152__$1;
(statearr_26171_26198[(2)] = inst_26146);

(statearr_26171_26198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (10))){
var inst_26136 = (state_26152[(2)]);
var state_26152__$1 = state_26152;
var statearr_26172_26199 = state_26152__$1;
(statearr_26172_26199[(2)] = inst_26136);

(statearr_26172_26199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26153 === (8))){
var inst_26116 = (state_26152[(7)]);
var inst_26125 = (state_26152[(11)]);
var tmp26169 = inst_26116;
var inst_26116__$1 = tmp26169;
var inst_26117 = inst_26125;
var state_26152__$1 = (function (){var statearr_26173 = state_26152;
(statearr_26173[(7)] = inst_26116__$1);

(statearr_26173[(8)] = inst_26117);

return statearr_26173;
})();
var statearr_26174_26200 = state_26152__$1;
(statearr_26174_26200[(2)] = null);

(statearr_26174_26200[(1)] = (2));


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
});})(c__23526__auto___26186,out))
;
return ((function (switch__23414__auto__,c__23526__auto___26186,out){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_26178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26178[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_26178[(1)] = (1));

return statearr_26178;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_26152){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_26152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e26179){if((e26179 instanceof Object)){
var ex__23418__auto__ = e26179;
var statearr_26180_26201 = state_26152;
(statearr_26180_26201[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26202 = state_26152;
state_26152 = G__26202;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_26152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_26152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___26186,out))
})();
var state__23528__auto__ = (function (){var statearr_26181 = f__23527__auto__.call(null);
(statearr_26181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___26186);

return statearr_26181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___26186,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26203 = [];
var len__17884__auto___26277 = arguments.length;
var i__17885__auto___26278 = (0);
while(true){
if((i__17885__auto___26278 < len__17884__auto___26277)){
args26203.push((arguments[i__17885__auto___26278]));

var G__26279 = (i__17885__auto___26278 + (1));
i__17885__auto___26278 = G__26279;
continue;
} else {
}
break;
}

var G__26205 = args26203.length;
switch (G__26205) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26203.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23526__auto___26281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23526__auto___26281,out){
return (function (){
var f__23527__auto__ = (function (){var switch__23414__auto__ = ((function (c__23526__auto___26281,out){
return (function (state_26247){
var state_val_26248 = (state_26247[(1)]);
if((state_val_26248 === (7))){
var inst_26243 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26249_26282 = state_26247__$1;
(statearr_26249_26282[(2)] = inst_26243);

(statearr_26249_26282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (1))){
var inst_26206 = [];
var inst_26207 = inst_26206;
var inst_26208 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26247__$1 = (function (){var statearr_26250 = state_26247;
(statearr_26250[(7)] = inst_26207);

(statearr_26250[(8)] = inst_26208);

return statearr_26250;
})();
var statearr_26251_26283 = state_26247__$1;
(statearr_26251_26283[(2)] = null);

(statearr_26251_26283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (4))){
var inst_26211 = (state_26247[(9)]);
var inst_26211__$1 = (state_26247[(2)]);
var inst_26212 = (inst_26211__$1 == null);
var inst_26213 = cljs.core.not.call(null,inst_26212);
var state_26247__$1 = (function (){var statearr_26252 = state_26247;
(statearr_26252[(9)] = inst_26211__$1);

return statearr_26252;
})();
if(inst_26213){
var statearr_26253_26284 = state_26247__$1;
(statearr_26253_26284[(1)] = (5));

} else {
var statearr_26254_26285 = state_26247__$1;
(statearr_26254_26285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (15))){
var inst_26237 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26255_26286 = state_26247__$1;
(statearr_26255_26286[(2)] = inst_26237);

(statearr_26255_26286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (13))){
var state_26247__$1 = state_26247;
var statearr_26256_26287 = state_26247__$1;
(statearr_26256_26287[(2)] = null);

(statearr_26256_26287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (6))){
var inst_26207 = (state_26247[(7)]);
var inst_26232 = inst_26207.length;
var inst_26233 = (inst_26232 > (0));
var state_26247__$1 = state_26247;
if(cljs.core.truth_(inst_26233)){
var statearr_26257_26288 = state_26247__$1;
(statearr_26257_26288[(1)] = (12));

} else {
var statearr_26258_26289 = state_26247__$1;
(statearr_26258_26289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (3))){
var inst_26245 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26247__$1,inst_26245);
} else {
if((state_val_26248 === (12))){
var inst_26207 = (state_26247[(7)]);
var inst_26235 = cljs.core.vec.call(null,inst_26207);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26247__$1,(15),out,inst_26235);
} else {
if((state_val_26248 === (2))){
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26247__$1,(4),ch);
} else {
if((state_val_26248 === (11))){
var inst_26215 = (state_26247[(10)]);
var inst_26211 = (state_26247[(9)]);
var inst_26225 = (state_26247[(2)]);
var inst_26226 = [];
var inst_26227 = inst_26226.push(inst_26211);
var inst_26207 = inst_26226;
var inst_26208 = inst_26215;
var state_26247__$1 = (function (){var statearr_26259 = state_26247;
(statearr_26259[(7)] = inst_26207);

(statearr_26259[(11)] = inst_26227);

(statearr_26259[(12)] = inst_26225);

(statearr_26259[(8)] = inst_26208);

return statearr_26259;
})();
var statearr_26260_26290 = state_26247__$1;
(statearr_26260_26290[(2)] = null);

(statearr_26260_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (9))){
var inst_26207 = (state_26247[(7)]);
var inst_26223 = cljs.core.vec.call(null,inst_26207);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26247__$1,(11),out,inst_26223);
} else {
if((state_val_26248 === (5))){
var inst_26215 = (state_26247[(10)]);
var inst_26211 = (state_26247[(9)]);
var inst_26208 = (state_26247[(8)]);
var inst_26215__$1 = f.call(null,inst_26211);
var inst_26216 = cljs.core._EQ_.call(null,inst_26215__$1,inst_26208);
var inst_26217 = cljs.core.keyword_identical_QMARK_.call(null,inst_26208,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26218 = (inst_26216) || (inst_26217);
var state_26247__$1 = (function (){var statearr_26261 = state_26247;
(statearr_26261[(10)] = inst_26215__$1);

return statearr_26261;
})();
if(cljs.core.truth_(inst_26218)){
var statearr_26262_26291 = state_26247__$1;
(statearr_26262_26291[(1)] = (8));

} else {
var statearr_26263_26292 = state_26247__$1;
(statearr_26263_26292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (14))){
var inst_26240 = (state_26247[(2)]);
var inst_26241 = cljs.core.async.close_BANG_.call(null,out);
var state_26247__$1 = (function (){var statearr_26265 = state_26247;
(statearr_26265[(13)] = inst_26240);

return statearr_26265;
})();
var statearr_26266_26293 = state_26247__$1;
(statearr_26266_26293[(2)] = inst_26241);

(statearr_26266_26293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (10))){
var inst_26230 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26267_26294 = state_26247__$1;
(statearr_26267_26294[(2)] = inst_26230);

(statearr_26267_26294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (8))){
var inst_26207 = (state_26247[(7)]);
var inst_26215 = (state_26247[(10)]);
var inst_26211 = (state_26247[(9)]);
var inst_26220 = inst_26207.push(inst_26211);
var tmp26264 = inst_26207;
var inst_26207__$1 = tmp26264;
var inst_26208 = inst_26215;
var state_26247__$1 = (function (){var statearr_26268 = state_26247;
(statearr_26268[(7)] = inst_26207__$1);

(statearr_26268[(8)] = inst_26208);

(statearr_26268[(14)] = inst_26220);

return statearr_26268;
})();
var statearr_26269_26295 = state_26247__$1;
(statearr_26269_26295[(2)] = null);

(statearr_26269_26295[(1)] = (2));


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
});})(c__23526__auto___26281,out))
;
return ((function (switch__23414__auto__,c__23526__auto___26281,out){
return (function() {
var cljs$core$async$state_machine__23415__auto__ = null;
var cljs$core$async$state_machine__23415__auto____0 = (function (){
var statearr_26273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26273[(0)] = cljs$core$async$state_machine__23415__auto__);

(statearr_26273[(1)] = (1));

return statearr_26273;
});
var cljs$core$async$state_machine__23415__auto____1 = (function (state_26247){
while(true){
var ret_value__23416__auto__ = (function (){try{while(true){
var result__23417__auto__ = switch__23414__auto__.call(null,state_26247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23417__auto__;
}
break;
}
}catch (e26274){if((e26274 instanceof Object)){
var ex__23418__auto__ = e26274;
var statearr_26275_26296 = state_26247;
(statearr_26275_26296[(5)] = ex__23418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26297 = state_26247;
state_26247 = G__26297;
continue;
} else {
return ret_value__23416__auto__;
}
break;
}
});
cljs$core$async$state_machine__23415__auto__ = function(state_26247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23415__auto____1.call(this,state_26247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23415__auto____0;
cljs$core$async$state_machine__23415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23415__auto____1;
return cljs$core$async$state_machine__23415__auto__;
})()
;})(switch__23414__auto__,c__23526__auto___26281,out))
})();
var state__23528__auto__ = (function (){var statearr_26276 = f__23527__auto__.call(null);
(statearr_26276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23526__auto___26281);

return statearr_26276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23528__auto__);
});})(c__23526__auto___26281,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1451439387342