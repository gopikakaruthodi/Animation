document.getElementById("rounds").addEventListener('mousemove',(event)=> {
    const x = event.clientX; // Mouse position relative to the viewport
    const y = event.clientY; // Mouse position relative to the viewport
    document.getElementById("round").style.left=x+"px"
    document.getElementById("round").style.top=y+"px"
})