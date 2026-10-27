const bids=[
  {n:"Yellow corn",d:"Nov",p:4.12,b:-0.28,f:"Dec",c:0.03},
  {n:"Yellow corn",d:"Jan",p:4.26,b:-0.24,f:"Mar",c:0.02},
  {n:"Soybeans",d:"Nov",p:10.18,b:-0.55,f:"Jan",c:-0.06},
  {n:"Soybeans",d:"Jan",p:10.34,b:-0.50,f:"Jan",c:-0.06},
  {n:"HRW wheat",d:"Nov",p:5.34,b:-0.65,f:"Dec",c:0.04},
  {n:"Milo",d:"Nov",p:6.70,b:-0.40,f:"Dec",c:0.00}
];
const futures=[
  {n:"Corn Dec",l:4.40,c:0.03,o:4.37,h:4.42,lo:4.35},
  {n:"Corn Mar",l:4.50,c:0.02,o:4.48,h:4.53,lo:4.46},
  {n:"Soybeans Jan",l:10.73,c:-0.06,o:10.80,h:10.84,lo:10.69},
  {n:"Soybeans Mar",l:10.88,c:-0.05,o:10.94,h:10.97,lo:10.84},
  {n:"KC wheat Dec",l:5.99,c:0.04,o:5.95,h:6.02,lo:5.93},
  {n:"Chicago wheat Dec",l:5.38,c:0.01,o:5.37,h:5.41,lo:5.34}
];
const wx={t:54,cond:"Partly cloudy",facts:[["Wind","NW 12 mph"],["Humidity","48%"],["Dew point","35°F"],["Precip (24 h)","0.00 in"],["Soil temp, 4 in","51°F"]],
 days:[["Tue","Sunny",58,38],["Wed","Cloudy",52,40],["Thu","Rain",49,41],["Fri","Showers",47,37],["Sat","Sunny",55,36]]};
const money=v=>"$"+v.toFixed(2);
const chg=v=>`<span class="${v>0?'up':v<0?'down':''}">${v>0?'▲ +':v<0?'▼ ':''}${v===0?'unch':v.toFixed(2)}</span>`;
const basis=v=>(v>0?"+":"")+v.toFixed(2);
document.getElementById("bidRows").innerHTML=bids.map(r=>`<tr><td class="name">${r.n}</td><td data-label="Delivery">${r.d}</td><td class="price" data-label="Cash price">${money(r.p)}</td><td data-label="Basis">${basis(r.b)}</td><td data-label="Futures month">${r.f}</td><td data-label="Change">${chg(r.c)}</td></tr>`).join("");
document.getElementById("futRows").innerHTML=futures.map(r=>`<tr><td class="name">${r.n}</td><td class="price" data-label="Last">${money(r.l)}</td><td data-label="Change">${chg(r.c)}</td><td data-label="Open">${money(r.o)}</td><td data-label="High">${money(r.h)}</td><td data-label="Low">${money(r.lo)}</td></tr>`).join("");
document.getElementById("wxTemp").textContent=wx.t+"°F";
document.getElementById("wxCond").textContent=wx.cond;
document.getElementById("wxFacts").innerHTML=wx.facts.map(f=>`<dt>${f[0]}</dt><dd>${f[1]}</dd>`).join("");
document.getElementById("wxDays").innerHTML=wx.days.map(d=>`<div class="day"><b>${d[0]}</b><span>${d[1]}</span><div class="hi">${d[2]}°</div><span>${d[3]}°</span></div>`).join("");
const root=document.documentElement,btn=document.getElementById("themeBtn");
function setTheme(t){root.setAttribute("data-theme",t);btn.textContent=t==="light"?"Dark mode":"Light mode";}
try{setTheme(localStorage.getItem("theme")==="dark"?"dark":"light")}catch(e){setTheme("light")}
btn.addEventListener("click",()=>{const n=root.getAttribute("data-theme")==="light"?"dark":"light";setTheme(n);try{localStorage.setItem("theme",n)}catch(e){}});
