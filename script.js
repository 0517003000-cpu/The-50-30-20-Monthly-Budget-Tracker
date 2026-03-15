function num(v){
return parseInt(v.replace(/\./g,''))||0
}

function calculate(){

let eTotal=0
let nTotal=0
let sTotal=0

document.querySelectorAll(".essential").forEach(i=>{
eTotal+=num(i.value)
})

document.querySelectorAll(".non").forEach(i=>{
nTotal+=num(i.value)
})

document.querySelectorAll(".save").forEach(i=>{
sTotal+=num(i.value)
})

document.getElementById("essentialTotal").innerText=eTotal
document.getElementById("nonTotal").innerText=nTotal
document.getElementById("saveTotal").innerText=sTotal

updateStatus(eTotal,nTotal,sTotal)

}

function status(spend){

if(spend==0) return "Under Budget"
if(spend>0 && spend<1000000) return "Tight Budget"
return "Over Budget"

}

function updateStatus(e,n,s){

let eStatus=status(e)
let nStatus=status(n)
let sStatus=status(s)

document.getElementById("essentialStatus").innerText=eStatus
document.getElementById("nonStatus").innerText=nStatus
document.getElementById("saveStatus").innerText=sStatus

generateAdvice(eStatus,nStatus,sStatus)

}

function generateAdvice(e,n,s){

let box=document.getElementById("advice")

box.innerHTML=`

<b>Essential Expenses</b><br>
Status: ${e}<br>
Solutions / Recommendations:<br>
• Reduce large monthly bills<br>
• Compare essential service prices<br>
• Plan groceries and transportation<br><br>

<b>Non Essential Expenses</b><br>
Status: ${n}<br>
Solutions / Recommendations:<br>
• Reduce entertainment spending<br>
• Avoid impulse buying<br>
• Cancel unused subscriptions<br><br>

<b>Savings</b><br>
Status: ${s}<br>
Recommendations:<br>
• Try saving 20% of your income<br>
• Build an emergency fund<br>
• Set long-term financial goals

`

}

document.querySelectorAll("input").forEach(i=>{
i.addEventListener("input",calculate)
})

function newMonth(){
let m=prompt("Enter Month Name")
if(!m) return

let select=document.getElementById("monthSelect")

let option=document.createElement("option")
option.value=m
option.text=m

select.appendChild(option)
}
