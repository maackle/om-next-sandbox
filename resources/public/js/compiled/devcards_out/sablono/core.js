// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26655__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26654 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__26654,(0),null);
var body = cljs.core.nthnext.call(null,vec__26654,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26656__i = 0, G__26656__a = new Array(arguments.length -  0);
while (G__26656__i < G__26656__a.length) {G__26656__a[G__26656__i] = arguments[G__26656__i + 0]; ++G__26656__i;}
  args = new cljs.core.IndexedSeq(G__26656__a,0);
} 
return G__26655__delegate.call(this,args);};
G__26655.cljs$lang$maxFixedArity = 0;
G__26655.cljs$lang$applyTo = (function (arglist__26657){
var args = cljs.core.seq(arglist__26657);
return G__26655__delegate(args);
});
G__26655.cljs$core$IFn$_invoke$arity$variadic = G__26655__delegate;
return G__26655;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17598__auto__ = (function sablono$core$update_arglists_$_iter__26662(s__26663){
return (new cljs.core.LazySeq(null,(function (){
var s__26663__$1 = s__26663;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26663__$1);
if(temp__4425__auto__){
var s__26663__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26663__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__26663__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__26665 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__26664 = (0);
while(true){
if((i__26664 < size__17597__auto__)){
var args = cljs.core._nth.call(null,c__17596__auto__,i__26664);
cljs.core.chunk_append.call(null,b__26665,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26666 = (i__26664 + (1));
i__26664 = G__26666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26665),sablono$core$update_arglists_$_iter__26662.call(null,cljs.core.chunk_rest.call(null,s__26663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26665),null);
}
} else {
var args = cljs.core.first.call(null,s__26663__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26662.call(null,cljs.core.rest.call(null,s__26663__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17891__auto__ = [];
var len__17884__auto___26672 = arguments.length;
var i__17885__auto___26673 = (0);
while(true){
if((i__17885__auto___26673 < len__17884__auto___26672)){
args__17891__auto__.push((arguments[i__17885__auto___26673]));

var G__26674 = (i__17885__auto___26673 + (1));
i__17885__auto___26673 = G__26674;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17598__auto__ = (function sablono$core$iter__26668(s__26669){
return (new cljs.core.LazySeq(null,(function (){
var s__26669__$1 = s__26669;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26669__$1);
if(temp__4425__auto__){
var s__26669__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26669__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__26669__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__26671 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__26670 = (0);
while(true){
if((i__26670 < size__17597__auto__)){
var style = cljs.core._nth.call(null,c__17596__auto__,i__26670);
cljs.core.chunk_append.call(null,b__26671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26675 = (i__26670 + (1));
i__26670 = G__26675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26671),sablono$core$iter__26668.call(null,cljs.core.chunk_rest.call(null,s__26669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26671),null);
}
} else {
var style = cljs.core.first.call(null,s__26669__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26668.call(null,cljs.core.rest.call(null,s__26669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26667){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26667));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26676 = (function sablono$core$link_to26676(var_args){
var args__17891__auto__ = [];
var len__17884__auto___26679 = arguments.length;
var i__17885__auto___26680 = (0);
while(true){
if((i__17885__auto___26680 < len__17884__auto___26679)){
args__17891__auto__.push((arguments[i__17885__auto___26680]));

var G__26681 = (i__17885__auto___26680 + (1));
i__17885__auto___26680 = G__26681;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.link_to26676.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.link_to26676.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26676.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26676.cljs$lang$applyTo = (function (seq26677){
var G__26678 = cljs.core.first.call(null,seq26677);
var seq26677__$1 = cljs.core.next.call(null,seq26677);
return sablono.core.link_to26676.cljs$core$IFn$_invoke$arity$variadic(G__26678,seq26677__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26676);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26682 = (function sablono$core$mail_to26682(var_args){
var args__17891__auto__ = [];
var len__17884__auto___26687 = arguments.length;
var i__17885__auto___26688 = (0);
while(true){
if((i__17885__auto___26688 < len__17884__auto___26687)){
args__17891__auto__.push((arguments[i__17885__auto___26688]));

var G__26689 = (i__17885__auto___26688 + (1));
i__17885__auto___26688 = G__26689;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.mail_to26682.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.mail_to26682.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26685){
var vec__26686 = p__26685;
var content = cljs.core.nth.call(null,vec__26686,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16826__auto__ = content;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26682.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26682.cljs$lang$applyTo = (function (seq26683){
var G__26684 = cljs.core.first.call(null,seq26683);
var seq26683__$1 = cljs.core.next.call(null,seq26683);
return sablono.core.mail_to26682.cljs$core$IFn$_invoke$arity$variadic(G__26684,seq26683__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26682);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26690 = (function sablono$core$unordered_list26690(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17598__auto__ = (function sablono$core$unordered_list26690_$_iter__26695(s__26696){
return (new cljs.core.LazySeq(null,(function (){
var s__26696__$1 = s__26696;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26696__$1);
if(temp__4425__auto__){
var s__26696__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26696__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__26696__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__26698 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__26697 = (0);
while(true){
if((i__26697 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__26697);
cljs.core.chunk_append.call(null,b__26698,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26699 = (i__26697 + (1));
i__26697 = G__26699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26698),sablono$core$unordered_list26690_$_iter__26695.call(null,cljs.core.chunk_rest.call(null,s__26696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26698),null);
}
} else {
var x = cljs.core.first.call(null,s__26696__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26690_$_iter__26695.call(null,cljs.core.rest.call(null,s__26696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26690);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26700 = (function sablono$core$ordered_list26700(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17598__auto__ = (function sablono$core$ordered_list26700_$_iter__26705(s__26706){
return (new cljs.core.LazySeq(null,(function (){
var s__26706__$1 = s__26706;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26706__$1);
if(temp__4425__auto__){
var s__26706__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26706__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__26706__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__26708 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__26707 = (0);
while(true){
if((i__26707 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__26707);
cljs.core.chunk_append.call(null,b__26708,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26709 = (i__26707 + (1));
i__26707 = G__26709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26708),sablono$core$ordered_list26700_$_iter__26705.call(null,cljs.core.chunk_rest.call(null,s__26706__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26708),null);
}
} else {
var x = cljs.core.first.call(null,s__26706__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26700_$_iter__26705.call(null,cljs.core.rest.call(null,s__26706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26700);
/**
 * Create an image element.
 */
sablono.core.image26710 = (function sablono$core$image26710(var_args){
var args26711 = [];
var len__17884__auto___26714 = arguments.length;
var i__17885__auto___26715 = (0);
while(true){
if((i__17885__auto___26715 < len__17884__auto___26714)){
args26711.push((arguments[i__17885__auto___26715]));

var G__26716 = (i__17885__auto___26715 + (1));
i__17885__auto___26715 = G__26716;
continue;
} else {
}
break;
}

var G__26713 = args26711.length;
switch (G__26713) {
case 1:
return sablono.core.image26710.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26710.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26711.length)].join('')));

}
});

sablono.core.image26710.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26710.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26710.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26710);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26718_SHARP_,p2__26719_SHARP_){
return [cljs.core.str(p1__26718_SHARP_),cljs.core.str("["),cljs.core.str(p2__26719_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26720_SHARP_,p2__26721_SHARP_){
return [cljs.core.str(p1__26720_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26721_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26722 = (function sablono$core$color_field26722(var_args){
var args26723 = [];
var len__17884__auto___26790 = arguments.length;
var i__17885__auto___26791 = (0);
while(true){
if((i__17885__auto___26791 < len__17884__auto___26790)){
args26723.push((arguments[i__17885__auto___26791]));

var G__26792 = (i__17885__auto___26791 + (1));
i__17885__auto___26791 = G__26792;
continue;
} else {
}
break;
}

var G__26725 = args26723.length;
switch (G__26725) {
case 1:
return sablono.core.color_field26722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26723.length)].join('')));

}
});

sablono.core.color_field26722.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.color_field26722.call(null,name__19405__auto__,null);
});

sablono.core.color_field26722.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.color_field26722.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26722);

/**
 * Creates a date input field.
 */
sablono.core.date_field26726 = (function sablono$core$date_field26726(var_args){
var args26727 = [];
var len__17884__auto___26794 = arguments.length;
var i__17885__auto___26795 = (0);
while(true){
if((i__17885__auto___26795 < len__17884__auto___26794)){
args26727.push((arguments[i__17885__auto___26795]));

var G__26796 = (i__17885__auto___26795 + (1));
i__17885__auto___26795 = G__26796;
continue;
} else {
}
break;
}

var G__26729 = args26727.length;
switch (G__26729) {
case 1:
return sablono.core.date_field26726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26727.length)].join('')));

}
});

sablono.core.date_field26726.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.date_field26726.call(null,name__19405__auto__,null);
});

sablono.core.date_field26726.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.date_field26726.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26726);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26730 = (function sablono$core$datetime_field26730(var_args){
var args26731 = [];
var len__17884__auto___26798 = arguments.length;
var i__17885__auto___26799 = (0);
while(true){
if((i__17885__auto___26799 < len__17884__auto___26798)){
args26731.push((arguments[i__17885__auto___26799]));

var G__26800 = (i__17885__auto___26799 + (1));
i__17885__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var G__26733 = args26731.length;
switch (G__26733) {
case 1:
return sablono.core.datetime_field26730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26731.length)].join('')));

}
});

sablono.core.datetime_field26730.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.datetime_field26730.call(null,name__19405__auto__,null);
});

sablono.core.datetime_field26730.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.datetime_field26730.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26730);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26734 = (function sablono$core$datetime_local_field26734(var_args){
var args26735 = [];
var len__17884__auto___26802 = arguments.length;
var i__17885__auto___26803 = (0);
while(true){
if((i__17885__auto___26803 < len__17884__auto___26802)){
args26735.push((arguments[i__17885__auto___26803]));

var G__26804 = (i__17885__auto___26803 + (1));
i__17885__auto___26803 = G__26804;
continue;
} else {
}
break;
}

var G__26737 = args26735.length;
switch (G__26737) {
case 1:
return sablono.core.datetime_local_field26734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26735.length)].join('')));

}
});

sablono.core.datetime_local_field26734.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.datetime_local_field26734.call(null,name__19405__auto__,null);
});

sablono.core.datetime_local_field26734.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.datetime_local_field26734.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26734);

/**
 * Creates a email input field.
 */
sablono.core.email_field26738 = (function sablono$core$email_field26738(var_args){
var args26739 = [];
var len__17884__auto___26806 = arguments.length;
var i__17885__auto___26807 = (0);
while(true){
if((i__17885__auto___26807 < len__17884__auto___26806)){
args26739.push((arguments[i__17885__auto___26807]));

var G__26808 = (i__17885__auto___26807 + (1));
i__17885__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var G__26741 = args26739.length;
switch (G__26741) {
case 1:
return sablono.core.email_field26738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26739.length)].join('')));

}
});

sablono.core.email_field26738.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.email_field26738.call(null,name__19405__auto__,null);
});

sablono.core.email_field26738.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.email_field26738.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26738);

/**
 * Creates a file input field.
 */
sablono.core.file_field26742 = (function sablono$core$file_field26742(var_args){
var args26743 = [];
var len__17884__auto___26810 = arguments.length;
var i__17885__auto___26811 = (0);
while(true){
if((i__17885__auto___26811 < len__17884__auto___26810)){
args26743.push((arguments[i__17885__auto___26811]));

var G__26812 = (i__17885__auto___26811 + (1));
i__17885__auto___26811 = G__26812;
continue;
} else {
}
break;
}

var G__26745 = args26743.length;
switch (G__26745) {
case 1:
return sablono.core.file_field26742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26743.length)].join('')));

}
});

sablono.core.file_field26742.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.file_field26742.call(null,name__19405__auto__,null);
});

sablono.core.file_field26742.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.file_field26742.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26742);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26746 = (function sablono$core$hidden_field26746(var_args){
var args26747 = [];
var len__17884__auto___26814 = arguments.length;
var i__17885__auto___26815 = (0);
while(true){
if((i__17885__auto___26815 < len__17884__auto___26814)){
args26747.push((arguments[i__17885__auto___26815]));

var G__26816 = (i__17885__auto___26815 + (1));
i__17885__auto___26815 = G__26816;
continue;
} else {
}
break;
}

var G__26749 = args26747.length;
switch (G__26749) {
case 1:
return sablono.core.hidden_field26746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26747.length)].join('')));

}
});

sablono.core.hidden_field26746.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.hidden_field26746.call(null,name__19405__auto__,null);
});

sablono.core.hidden_field26746.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.hidden_field26746.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26746);

/**
 * Creates a month input field.
 */
sablono.core.month_field26750 = (function sablono$core$month_field26750(var_args){
var args26751 = [];
var len__17884__auto___26818 = arguments.length;
var i__17885__auto___26819 = (0);
while(true){
if((i__17885__auto___26819 < len__17884__auto___26818)){
args26751.push((arguments[i__17885__auto___26819]));

var G__26820 = (i__17885__auto___26819 + (1));
i__17885__auto___26819 = G__26820;
continue;
} else {
}
break;
}

var G__26753 = args26751.length;
switch (G__26753) {
case 1:
return sablono.core.month_field26750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26751.length)].join('')));

}
});

sablono.core.month_field26750.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.month_field26750.call(null,name__19405__auto__,null);
});

sablono.core.month_field26750.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.month_field26750.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26750);

/**
 * Creates a number input field.
 */
sablono.core.number_field26754 = (function sablono$core$number_field26754(var_args){
var args26755 = [];
var len__17884__auto___26822 = arguments.length;
var i__17885__auto___26823 = (0);
while(true){
if((i__17885__auto___26823 < len__17884__auto___26822)){
args26755.push((arguments[i__17885__auto___26823]));

var G__26824 = (i__17885__auto___26823 + (1));
i__17885__auto___26823 = G__26824;
continue;
} else {
}
break;
}

var G__26757 = args26755.length;
switch (G__26757) {
case 1:
return sablono.core.number_field26754.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26754.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26755.length)].join('')));

}
});

sablono.core.number_field26754.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.number_field26754.call(null,name__19405__auto__,null);
});

sablono.core.number_field26754.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.number_field26754.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26754);

/**
 * Creates a password input field.
 */
sablono.core.password_field26758 = (function sablono$core$password_field26758(var_args){
var args26759 = [];
var len__17884__auto___26826 = arguments.length;
var i__17885__auto___26827 = (0);
while(true){
if((i__17885__auto___26827 < len__17884__auto___26826)){
args26759.push((arguments[i__17885__auto___26827]));

var G__26828 = (i__17885__auto___26827 + (1));
i__17885__auto___26827 = G__26828;
continue;
} else {
}
break;
}

var G__26761 = args26759.length;
switch (G__26761) {
case 1:
return sablono.core.password_field26758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26759.length)].join('')));

}
});

sablono.core.password_field26758.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.password_field26758.call(null,name__19405__auto__,null);
});

sablono.core.password_field26758.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.password_field26758.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26758);

/**
 * Creates a range input field.
 */
sablono.core.range_field26762 = (function sablono$core$range_field26762(var_args){
var args26763 = [];
var len__17884__auto___26830 = arguments.length;
var i__17885__auto___26831 = (0);
while(true){
if((i__17885__auto___26831 < len__17884__auto___26830)){
args26763.push((arguments[i__17885__auto___26831]));

var G__26832 = (i__17885__auto___26831 + (1));
i__17885__auto___26831 = G__26832;
continue;
} else {
}
break;
}

var G__26765 = args26763.length;
switch (G__26765) {
case 1:
return sablono.core.range_field26762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26763.length)].join('')));

}
});

sablono.core.range_field26762.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.range_field26762.call(null,name__19405__auto__,null);
});

sablono.core.range_field26762.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.range_field26762.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26762);

/**
 * Creates a search input field.
 */
sablono.core.search_field26766 = (function sablono$core$search_field26766(var_args){
var args26767 = [];
var len__17884__auto___26834 = arguments.length;
var i__17885__auto___26835 = (0);
while(true){
if((i__17885__auto___26835 < len__17884__auto___26834)){
args26767.push((arguments[i__17885__auto___26835]));

var G__26836 = (i__17885__auto___26835 + (1));
i__17885__auto___26835 = G__26836;
continue;
} else {
}
break;
}

var G__26769 = args26767.length;
switch (G__26769) {
case 1:
return sablono.core.search_field26766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26767.length)].join('')));

}
});

sablono.core.search_field26766.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.search_field26766.call(null,name__19405__auto__,null);
});

sablono.core.search_field26766.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.search_field26766.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26766);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26770 = (function sablono$core$tel_field26770(var_args){
var args26771 = [];
var len__17884__auto___26838 = arguments.length;
var i__17885__auto___26839 = (0);
while(true){
if((i__17885__auto___26839 < len__17884__auto___26838)){
args26771.push((arguments[i__17885__auto___26839]));

var G__26840 = (i__17885__auto___26839 + (1));
i__17885__auto___26839 = G__26840;
continue;
} else {
}
break;
}

var G__26773 = args26771.length;
switch (G__26773) {
case 1:
return sablono.core.tel_field26770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26771.length)].join('')));

}
});

sablono.core.tel_field26770.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.tel_field26770.call(null,name__19405__auto__,null);
});

sablono.core.tel_field26770.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.tel_field26770.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26770);

/**
 * Creates a text input field.
 */
sablono.core.text_field26774 = (function sablono$core$text_field26774(var_args){
var args26775 = [];
var len__17884__auto___26842 = arguments.length;
var i__17885__auto___26843 = (0);
while(true){
if((i__17885__auto___26843 < len__17884__auto___26842)){
args26775.push((arguments[i__17885__auto___26843]));

var G__26844 = (i__17885__auto___26843 + (1));
i__17885__auto___26843 = G__26844;
continue;
} else {
}
break;
}

var G__26777 = args26775.length;
switch (G__26777) {
case 1:
return sablono.core.text_field26774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26775.length)].join('')));

}
});

sablono.core.text_field26774.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.text_field26774.call(null,name__19405__auto__,null);
});

sablono.core.text_field26774.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.text_field26774.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26774);

/**
 * Creates a time input field.
 */
sablono.core.time_field26778 = (function sablono$core$time_field26778(var_args){
var args26779 = [];
var len__17884__auto___26846 = arguments.length;
var i__17885__auto___26847 = (0);
while(true){
if((i__17885__auto___26847 < len__17884__auto___26846)){
args26779.push((arguments[i__17885__auto___26847]));

var G__26848 = (i__17885__auto___26847 + (1));
i__17885__auto___26847 = G__26848;
continue;
} else {
}
break;
}

var G__26781 = args26779.length;
switch (G__26781) {
case 1:
return sablono.core.time_field26778.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26778.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26779.length)].join('')));

}
});

sablono.core.time_field26778.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.time_field26778.call(null,name__19405__auto__,null);
});

sablono.core.time_field26778.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.time_field26778.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26778);

/**
 * Creates a url input field.
 */
sablono.core.url_field26782 = (function sablono$core$url_field26782(var_args){
var args26783 = [];
var len__17884__auto___26850 = arguments.length;
var i__17885__auto___26851 = (0);
while(true){
if((i__17885__auto___26851 < len__17884__auto___26850)){
args26783.push((arguments[i__17885__auto___26851]));

var G__26852 = (i__17885__auto___26851 + (1));
i__17885__auto___26851 = G__26852;
continue;
} else {
}
break;
}

var G__26785 = args26783.length;
switch (G__26785) {
case 1:
return sablono.core.url_field26782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26783.length)].join('')));

}
});

sablono.core.url_field26782.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.url_field26782.call(null,name__19405__auto__,null);
});

sablono.core.url_field26782.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.url_field26782.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26782);

/**
 * Creates a week input field.
 */
sablono.core.week_field26786 = (function sablono$core$week_field26786(var_args){
var args26787 = [];
var len__17884__auto___26854 = arguments.length;
var i__17885__auto___26855 = (0);
while(true){
if((i__17885__auto___26855 < len__17884__auto___26854)){
args26787.push((arguments[i__17885__auto___26855]));

var G__26856 = (i__17885__auto___26855 + (1));
i__17885__auto___26855 = G__26856;
continue;
} else {
}
break;
}

var G__26789 = args26787.length;
switch (G__26789) {
case 1:
return sablono.core.week_field26786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26787.length)].join('')));

}
});

sablono.core.week_field26786.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.week_field26786.call(null,name__19405__auto__,null);
});

sablono.core.week_field26786.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.week_field26786.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26786);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26858 = (function sablono$core$check_box26858(var_args){
var args26859 = [];
var len__17884__auto___26862 = arguments.length;
var i__17885__auto___26863 = (0);
while(true){
if((i__17885__auto___26863 < len__17884__auto___26862)){
args26859.push((arguments[i__17885__auto___26863]));

var G__26864 = (i__17885__auto___26863 + (1));
i__17885__auto___26863 = G__26864;
continue;
} else {
}
break;
}

var G__26861 = args26859.length;
switch (G__26861) {
case 1:
return sablono.core.check_box26858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26858.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26859.length)].join('')));

}
});

sablono.core.check_box26858.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26858.call(null,name,null);
});

sablono.core.check_box26858.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26858.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26858.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26858.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26858);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26866 = (function sablono$core$radio_button26866(var_args){
var args26867 = [];
var len__17884__auto___26870 = arguments.length;
var i__17885__auto___26871 = (0);
while(true){
if((i__17885__auto___26871 < len__17884__auto___26870)){
args26867.push((arguments[i__17885__auto___26871]));

var G__26872 = (i__17885__auto___26871 + (1));
i__17885__auto___26871 = G__26872;
continue;
} else {
}
break;
}

var G__26869 = args26867.length;
switch (G__26869) {
case 1:
return sablono.core.radio_button26866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26866.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26867.length)].join('')));

}
});

sablono.core.radio_button26866.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26866.call(null,group,null);
});

sablono.core.radio_button26866.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26866.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26866.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26866.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26866);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26874 = (function sablono$core$select_options26874(coll){
var iter__17598__auto__ = (function sablono$core$select_options26874_$_iter__26883(s__26884){
return (new cljs.core.LazySeq(null,(function (){
var s__26884__$1 = s__26884;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26884__$1);
if(temp__4425__auto__){
var s__26884__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26884__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__26884__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__26886 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__26885 = (0);
while(true){
if((i__26885 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__26885);
cljs.core.chunk_append.call(null,b__26886,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26889 = x;
var text = cljs.core.nth.call(null,vec__26889,(0),null);
var val = cljs.core.nth.call(null,vec__26889,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26889,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26874.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26891 = (i__26885 + (1));
i__26885 = G__26891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26886),sablono$core$select_options26874_$_iter__26883.call(null,cljs.core.chunk_rest.call(null,s__26884__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26886),null);
}
} else {
var x = cljs.core.first.call(null,s__26884__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26890 = x;
var text = cljs.core.nth.call(null,vec__26890,(0),null);
var val = cljs.core.nth.call(null,vec__26890,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26890,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26874.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26874_$_iter__26883.call(null,cljs.core.rest.call(null,s__26884__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26874);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26892 = (function sablono$core$drop_down26892(var_args){
var args26893 = [];
var len__17884__auto___26896 = arguments.length;
var i__17885__auto___26897 = (0);
while(true){
if((i__17885__auto___26897 < len__17884__auto___26896)){
args26893.push((arguments[i__17885__auto___26897]));

var G__26898 = (i__17885__auto___26897 + (1));
i__17885__auto___26897 = G__26898;
continue;
} else {
}
break;
}

var G__26895 = args26893.length;
switch (G__26895) {
case 2:
return sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26893.length)].join('')));

}
});

sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26892.call(null,name,options,null);
});

sablono.core.drop_down26892.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26892.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26892);
/**
 * Creates a text area element.
 */
sablono.core.text_area26900 = (function sablono$core$text_area26900(var_args){
var args26901 = [];
var len__17884__auto___26904 = arguments.length;
var i__17885__auto___26905 = (0);
while(true){
if((i__17885__auto___26905 < len__17884__auto___26904)){
args26901.push((arguments[i__17885__auto___26905]));

var G__26906 = (i__17885__auto___26905 + (1));
i__17885__auto___26905 = G__26906;
continue;
} else {
}
break;
}

var G__26903 = args26901.length;
switch (G__26903) {
case 1:
return sablono.core.text_area26900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26901.length)].join('')));

}
});

sablono.core.text_area26900.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26900.call(null,name,null);
});

sablono.core.text_area26900.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area26900.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26900);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26908 = (function sablono$core$label26908(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26908);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26909 = (function sablono$core$submit_button26909(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26909);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26910 = (function sablono$core$reset_button26910(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26910);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26911 = (function sablono$core$form_to26911(var_args){
var args__17891__auto__ = [];
var len__17884__auto___26916 = arguments.length;
var i__17885__auto___26917 = (0);
while(true){
if((i__17885__auto___26917 < len__17884__auto___26916)){
args__17891__auto__.push((arguments[i__17885__auto___26917]));

var G__26918 = (i__17885__auto___26917 + (1));
i__17885__auto___26917 = G__26918;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.form_to26911.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.form_to26911.cljs$core$IFn$_invoke$arity$variadic = (function (p__26914,body){
var vec__26915 = p__26914;
var method = cljs.core.nth.call(null,vec__26915,(0),null);
var action = cljs.core.nth.call(null,vec__26915,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26911.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26911.cljs$lang$applyTo = (function (seq26912){
var G__26913 = cljs.core.first.call(null,seq26912);
var seq26912__$1 = cljs.core.next.call(null,seq26912);
return sablono.core.form_to26911.cljs$core$IFn$_invoke$arity$variadic(G__26913,seq26912__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26911);

//# sourceMappingURL=core.js.map?rel=1451439999364