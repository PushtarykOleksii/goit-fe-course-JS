(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("vOC0");const o="https://api.apixu.com/v1",c="/current.json",i="?key=ea948e5e9c4e48f3a35170457190608&lang=uk",r={weatherSection:document.querySelector("#weather"),button:document.querySelector(".search-button"),icon:document.querySelector(".icon"),city:document.querySelector(".city"),temp:document.querySelector(".temp"),humidity:document.querySelector(".humidity"),wind:document.querySelector(".wind"),conditions:document.querySelector(".conditions")};function u(t){fetch(o+c+i+`&q=${t}`).then(t=>t.json()).then(t=>{console.log(t),r.weatherSection.classList.remove("is-hidden"),r.city.textContent=t.location.name,r.icon.src="https:"+t.current.condition.icon,r.temp.innerHTML=t.current.temp_c+"C",r.humidity.textContent=t.current.humidity+"%",r.wind.textContent=t.current.wind_kph+"km/h",r.conditions.textContent=t.current.condition.text})}var s=n("dIfx");document.querySelector(".search-form").addEventListener("submit",function(t){t.preventDefault();const e=t.currentTarget.elements.city.value;console.log("input :",e),u(e)}),(()=>{const t={timeout:5e3,maximumAge:18e5};return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(e,n,t)})})().then(t=>{u(`${t.coords.latitude}, ${t.coords.longitude}`),console.log(t),s.a.success({text:"Hello!",stack:{dir1:"down",dir2:"right",firstpos1:600,firstpos2:600}})}).catch(t=>{s.a.error({text:"Нет прав доступа к геопозиции, используйте поиск по имени города.",stack:{dir1:"down",dir2:"right",firstpos1:600,firstpos2:600}})})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.26478948ce6f1dace1c2.js.map