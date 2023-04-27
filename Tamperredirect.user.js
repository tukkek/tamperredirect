// ==UserScript==
// @name         Tamperredirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirects sites towards privacy-friendly frontends.
// @author       tukkek
// @match        https://*.twitter.com/*
// @match        https://*.reddit.com/*
// @match        https://*.youtube.com/*
// @icon         https://libredirect.github.io/img/icon.svg
// @grant        none
// @run-at       document-start
// ==/UserScript==
const ALTERNATIVES=new Map([
    ['twitter.com','https://nitter.pw'],
    //['reddit.com','https://libreddit.spike.codes'],
    ['reddit.com','safereddit.com'],
    ['youtube.com','https://yewtu.be'],
])

let l=document.location
for(let a of ALTERNATIVES.keys()){
  if(l.hostname.indexOf(a)<0) continue
  let path=[ALTERNATIVES.get(a),l.pathname,l.search,l.hash]
  l.href=path.join('')
  break
}
