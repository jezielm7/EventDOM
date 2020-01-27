addEventListener('mouseover', over)
addEventListener('click', click)

function over() {

  var boxElement2 = document.getElementById('box')
  boxElement2.style.color = '#fff';
  boxElement2.style.width = '300px';
  boxElement2.style.height = '300px';
  boxElement2.style.cursor = 'pointer';
  boxElement2.style.background = '#04D301';
  boxElement2.innerText = 'Go Stack';
  boxElement2.style.fontSize = '50px';
  boxElement2.style.lineHeight = '285px';
  boxElement2.style.textAlign = 'center';
  boxElement2.style.textTransform = 'uppercase';
  boxElement2.style.fontFamily = 'Trebuchet MS';

}

function click() {

  var boxElement3 = document.getElementById('box')
  boxElement3.style.width = '300px';
  boxElement3.style.height = '300px';
  boxElement3.style.cursor = 'pointer';
  boxElement3.style.background = '#FD951F';
  boxElement3.innerText = 'Launch Base';
  boxElement3.style.fontSize = '47px';
  boxElement3.style.lineHeight = '285px';
  boxElement3.style.textAlign = 'center';
  boxElement3.style.textTransform = 'uppercase';
  boxElement3.style.fontFamily = 'Trebuchet MS';

};