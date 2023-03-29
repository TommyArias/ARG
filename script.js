body=document.querySelector('body')
background=document.querySelector('background')
logoandline=document.querySelector('logoandline')
video=document.querySelector('video')
triangle1=document.querySelector('triangle1')
triangle2=document.querySelector('triangle2')
abc=document.querySelector('abc')
xyz=document.querySelector('xyz')
acceuil=document.querySelector('acceuil')




button.onclick = function nique() {
    setTimeout(b, 100)
    setTimeout(c, 600)
    setTimeout(b, 1100)
    setTimeout(c, 1600)
    setTimeout(b, 2100)
    setTimeout(c, 2600)
    setTimeout(a, 3100)
  };

  function a() {
    body.style.display = 'none';
    window.location.replace("./darkPage.html")
  }

  function b() {
    body.style.backgroundColor = 'red';
  }

  function c() {
    body.style.backgroundColor = 'white';
  }


  console.log("OK")