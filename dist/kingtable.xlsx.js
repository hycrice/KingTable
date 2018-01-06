/**
 * KingTable 2.0.0
 * https://github.com/RobertoPrevato/KingTable
 *
 * Copyright 2018, Roberto Prevato
 * https://robertoprevato.github.io
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
!function e(t,n,r){function o(l,a){if(!n[l]){if(!t[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[l]={exports:{}};t[l][0].call(f.exports,function(e){var n=t[l][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(e,t,n){"use strict";function r(e,t){var n=(t||"Error")+". For further details: https://github.com/RobertoPrevato/KingTable/wiki/Errors#"+e;throw"undefined"!=typeof console&&console.error(n),new Error(n)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},{}],2:[function(e,t,n){"use strict";function r(e,t){for(var n={},r={s:{c:1e7,r:1e7},e:{c:0,r:0}},o=0;o!=e.length;++o)for(var i=0;i!=e[o].length;++i){r.s.r>o&&(r.s.r=o),r.s.c>i&&(r.s.c=i),r.e.r<o&&(r.e.r=o),r.e.c<i&&(r.e.c=i);var l=e[o][i],a={v:l};if(null!=a.v){var s=XLSX.utils.encode_cell({c:i,r:o});"number"==typeof l?a.t="n":"boolean"==typeof l?a.t="b":l instanceof Date?(a.t="n",a.z=XLSX.SSF._table[14],a.v=d(a.v)):a.t="s",n[s]=a}}return r.s.c<1e7&&(n["!ref"]=XLSX.utils.encode_range(r)),n}function o(){if(!(this instanceof o))return new o;this.SheetNames=[],this.Sheets={}}function i(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r!=e.length;++r)n[r]=255&e.charCodeAt(r);return t}function l(e){("undefined"==typeof XLSX?"undefined":a(XLSX))==f&&(0,u.default)(2,"Missing dependency: js-xlsx"),("undefined"==typeof Blob?"undefined":a(Blob))==f&&(0,u.default)(2,"Missing dependency: Blob");var t=this,n=t.options,l=t.optimizeCollection(e,null,{format:n.excelAllStrings}),s=new o,d=r(l),p=n.excelWorkbookName;s.SheetNames.push(p),s.Sheets[p]=d;var b=n.excelCellPadding,y=n.excelCellMinWidth,x=c.cols(l),g=c.map(x,function(e){return{wch:Math.max(c.max(e,function(e){return e.length}),y)+b}});d["!cols"]=g;var h=XLSX.write(s,{bookType:"xlsx",bookSST:!0,type:"binary"});return new Blob([i(h)],{type:"application/octet-stream"})}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=e("../../scripts/raise"),u=function(e){return e&&e.__esModule?e:{default:e}}(s),f="undefined";("undefined"==typeof KingTable?"undefined":a(KingTable))==f&&(0,u.default)(39,"KingTable is not defined in global namespace");var c=KingTable.Utils,d=KingTable.DateUtils.toExcelDateValue;KingTable.regional.en.exportFormats.xlsx="Excel (.xlsx)",KingTable.defaults.excelWorkbookName="data",KingTable.defaults.excelCellPadding=0,KingTable.defaults.excelCellMinWidth=0,KingTable.defaults.excelAllStrings=!1,KingTable.defaults.exportFormats.unshift({name:"Xlsx",format:"xlsx",type:"application/octet-stream",cs:!0,handler:l})},{"../../scripts/raise":1}]},{},[2]);