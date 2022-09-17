// ==UserScript==
// @name         Youtube Irritation remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Elderny
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    var runChecks = setInterval(()=>{
    if(document.querySelector("#buttons > ytd-notification-topbar-button-renderer") != null) {
        let currentUrl = location.href;
        setInterval(() => {
        if (location.href !== currentUrl) {
            currentUrl = location.href;
            start()
        }
    }, 500);
        clearInterval(runChecks)
        start()
    }},500)
    function start(){
        document.querySelector('body').style.display='none'
        if(document.querySelector("#movie_player > div.html5-video-container > video"))document.querySelector("#movie_player > div.html5-video-container > video").pause()
        setTimeout(()=>{
        if(window.location.href.includes('watch')){
        const question = (Math.random() + 1).toString(36).substring(2)+(Math.random() + 1).toString(36).substring(5)
        document.querySelector('title').innerText = question
        const ask = prompt('Please Type the title of this tab')
        if(ask!=question)return window.location.replace('https://youtube.com')
        }else if(window.location.href.includes('shorts')){
        alert('No Shorts Man');return window.location.replace('https://youtube.com')
        }
        document.querySelector('body').style.display=''
        if(document.querySelector("#sections > ytd-guide-section-renderer:nth-child(5)"))sidebar()
        document.querySelector("#search-input > input").setAttribute('placeholder','Search Something Good Not Procasination!')
        document.querySelector("#buttons > ytd-notification-topbar-button-renderer").style.display='none'
        document.querySelector('#logo').innerHTML = `<a class="yt-simple-endpoint style-scope ytd-topbar-logo-renderer" id="logo" aria-label="" href="/" title="YouTube Home">
  <img src="https://cdn.setapp.com/blog/images/stop-procrastination-smt-1521-1200x628.png" style="width: 89px;"></a>`
        if(document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2)")){
        document.querySelector("#meta").style.display='none'
        document.querySelector("#container > h1 > yt-formatted-string").innerText=document.querySelector("#container > h1 > yt-formatted-string").innerText.toLowerCase()
        document.querySelector("#title > h1 > yt-formatted-string").innerText=document.querySelector("#title > h1 > yt-formatted-string").innerText.toLowerCase()
        document.querySelector("#description-inline-expander > yt-formatted-string").style.display='none'
        document.querySelectorAll("#description").forEach(e=>e.style.display='none')
        document.querySelector("#bottom-row").style.display='none'
        document.querySelector("#super-title").style.display='none'
        document.querySelector("#container > yt-formatted-string").style.display='none'
        document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2)").addEventListener('click',()=>{
        window.stop()
        alert('No Dislikes man')
        //const url = new URLSearchParams(window.location.search).get('v')
        //const LengthVid = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div.ytp-time-display.notranslate > span:nth-child(2) > span.ytp-time-current").textContent.split(':')
        //const TotalSec = LengthVid.length>2?Number(LengthVid[0])*60**2+Number(LengthVid[1])*60+Number(LengthVid[2]):Number(LengthVid[0]*60)+Number(LengthVid[1])
        //window.location.replace(`https://www.youtube.com/watch?v=${url}&t=${TotalSec}s`)
        })
}
        document.querySelector('title').innerText = 'No Procasination'
        console.clear()
        console.log('%c Made By Elderny','color:red;font-size:50px')
   },1000)
}
    function sidebar(){
        document.querySelector("#items > ytd-guide-entry-renderer:nth-child(1)").style.display='none'
        document.querySelector("#footer").style.display='none'
        document.querySelector("#sections > ytd-guide-section-renderer:nth-child(5)").style.display='none'
        document.querySelector("#sections > ytd-guide-section-renderer:nth-child(4)").style.display='none'
        document.querySelector("#items > ytd-guide-entry-renderer:nth-child(4)").style.display='none'
        document.querySelector("#header-entry").style.display='none'
        document.querySelector("#sections > ytd-guide-section-renderer:nth-child(2)").style.display='none'
        document.querySelector("#sections > ytd-guide-section-renderer:nth-child(3)").style.display='none'
    }
})()
