/**
 * Created by Administrator on 2017/1/14.
 */
if(!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
if(!Array.isArray){
    Array.isArray = function(arg){
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
}
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}
if (!Array.prototype.fill) {
    Array.prototype.fill = function(value) {
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var start = arguments[1];
        var relativeStart = start >> 0;
        var k = relativeStart < 0 ?
            Math.max(len + relativeStart, 0) :
            Math.min(relativeStart, len);
        var end = arguments[2];
        var relativeEnd = end === undefined ?
            len :
            end >> 0;
        var final = relativeEnd < 0 ?
            Math.max(len + relativeEnd, 0) :
            Math.min(relativeEnd, len);
        while(k < final) {
            O[k] = value;
            k++;
        }
        return O;
    };
}

if(!Date.prototype.formatDate){  //日期格式化
    Date.prototype.formatDate = function(arg,Booleans){
        if(typeof arg==='undefined'){
            return this;
        }
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        if(typeof Booleans==='undefined'){
            Booleans = true;
        }

        var O = Object(this);
        var arr = arg.split(''),
            str='',
            len = arr.length,
            k=0,
            Y = O.getFullYear(),
            m = O.getMonth()+1,
            d = O.getDate(),
            H = O.getHours(),
            i = O.getMinutes(),
            s = O.getSeconds();
        function toNum(num,Bool){
            if(Bool){
                return num;
            }
            return num>9 ? num : '0'+num;
        }
        while (k<len){
            switch(arr[k]){
                case 'Y':
                    str += Y;
                    break;
                case 'm':
                    str += toNum(m);
                    break;
                case 'd':
                    str += toNum(d);
                    break;
                case 'H':
                    str += toNum(H);
                    break;
                case 'i':
                    str += toNum(i);
                    break;
                case 's':
                    str += toNum(s);
                    break;
                default:
                    str += arr[k];
                    break;
            }
            k++
        }
        return str;
    };
}
if(!Date.prototype.getDayCount){
    Date.prototype.getDayCount = function(){   //获取某个月总的天数
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var d = new Date(O.getFullYear(),O.getMonth(),1);
        d.setDate(32);
        return 32-d.getDate();
    };
}










































