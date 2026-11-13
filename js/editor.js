const code=document.getElementById('code'),numbers=document.getElementById('lineNumbers'),select=document.getElementById('exampleSelect');
function syncLines(){const count=Math.max(1,code.value.split('\n').length);numbers.textContent=Array.from({length:count},(_,i)=>i+1).join('\n')}
const previousInput=code.oninput;code.oninput=()=>{syncLines();if(previousInput)previousInput()};
const previousSelect=select.onchange;select.onchange=()=>{if(select.value==='custom'){syncLines();code.focus();return}if(previousSelect)previousSelect();syncLines()};
code.addEventListener('scroll',()=>{numbers.scrollTop=code.scrollTop});syncLines();
