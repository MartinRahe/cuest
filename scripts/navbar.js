fetch('navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
if(self.location.href.split('/').pop() == ""){var id = "indeks";}else{var id = self.location.href.split('/').pop();}
window.onload=function(){setTimeout(()=>{document.getElementById(id).className="active";},50)};