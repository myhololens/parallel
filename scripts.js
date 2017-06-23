/* (c) Parallel Project, 2017 */

"use strict";function ready(){function a(){document.querySelector("#body").style.display="block",document.querySelector("footer").style.display="block"}function b(b){return b?(e.ref("users/"+b.uid).once("value").then(function(b){l.user=b.toJSON(),a(),document.body.scrollTop=document.documentElement.scrollTop=0})["catch"](function(a){console.log(a)}),void(g&&e.ref("answers/"+d.currentUser.uid+"/"+g).once("value").then(function(a){var b=a.toJSON();if(!b)return l.status=c(!1);var d=!0,e=!1,f=void 0;try{for(var g,h=Object.keys(b)[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value;Vue.set(l.answers,i,b[i])}}catch(j){e=!0,f=j}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}l.status=c(b.submitted)}))):(l.status=c(!1),a())}function c(a){var b=decodeURI(location.search.substring(1)),c=b?JSON.parse('{"'+b.replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{};if("status"in c)return c.status;if(!f)return null;var d=Date.now();return d<h?"locked":d<i?a?"submitted":"open":a?"revealed":"past"}var d=(firebase.app(),firebase.auth()),e=firebase.database();d.onAuthStateChanged(b);var f=document.querySelector("#submit"),g=f?f.dataset.challenge:null,h=f?Date.parse(f.dataset.available):null,i=f?Date.parse(f.dataset.deadline):null,j={error:null,school:null,country:"United Kingdom",birthYear:2e3,submit:function(a){a.preventDefault(),j.error=null,d.createUserWithEmailAndPassword(j.email,j.password).then(function(a){return l.user={first:j.first,last:j.last,birthYear:j.birthYear,country:j.country,gender:j.gender||"",school:j.school},e.ref("users/"+a.uid).set(l.user)})["catch"](function(a){switch(console.error("Signup error:",a),a.code){case"auth/email-already-in-use":return j.error="There already exists an account with this email address. Please login!";case"auth/invalid-email":return j.error="The email address you provided is invalid.";case"auth/weak-password":return j.error="Please pick a longer password!";default:return j.error="Sorry, we couldn't create your account. Please try again!"}})}},k={error:null,showDropdown:!1,toggleDropdown:function(){k.showDropdown=!k.showDropdown},submit:function(a){a.preventDefault(),k.error=null,d.signInWithEmailAndPassword(k.email,k.password).then(b)["catch"](function(a){switch(a.code){case"auth/invalid-email":return k.error="This email address is invalid.";case"auth/user-not-found":return k.error="There is no account with this email address.";case"auth/wrong-password":return k.error="Incorrect password!";default:return k.error="Sorry, we couldn't log you in. Please try again!"}})}},l=window.app=new Vue({el:"#body",data:{user:null,signup:j,login:k,answers:{submitted:!1},feedback:{},status:null,logout:function(){d.signOut().then(function(){l.user=null})},submit:function(){return l.user?(l.answers.submitted=!0,l.status=Date.now()<i?"submitted":"revealed",void e.ref("answers/"+d.currentUser.uid+"/"+g).set(l.answers)):warn("You have to login before submitting.")},setAnswer:function(a,b){l.answers.submitted||(Vue.set(l.answers,a,b),l.user&&e.ref("answers/"+d.currentUser.uid+"/"+g).set(l.answers))},refresh:function(){!l.answers.submitted&&d.currentUser&&e.ref("answers/"+d.currentUser.uid+"/"+g).set(l.answers)}},computed:{countdown:function(){return"locked"===l.status?_countdown(h):"open"===l.status||"submitted"===l.status?_countdown(i):void 0}}});Array.from(window.document.querySelectorAll(".hint")).forEach(function(a){a.addEventListener("click",function(){a.style.height=a.children[0].offsetHeight+"px"})})}function _countdown(a){var b=(+a-Date.now())/1e3;return b<120?Math.floor(b)+" seconds":(b/=60,b<120?Math.floor(b)+" minutes":(b/=60,b<48?Math.floor(b)+" hours":(b/=24,Math.floor(b)+" days")))}document.addEventListener("DOMContentLoaded",ready);