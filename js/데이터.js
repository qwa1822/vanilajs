const imgs = ["lol1.jpg", "lol2.jpg", "lol3.jpg",'lol4.jpg','lol5.jpg'];


const imgNum=Math.floor(Math.random()*imgs.length);
const randomImage=imgs[imgNum];



const hell=document.createElement('style');
hell.innerHTML=`
  body{
    background-image:url(img/${randomImage});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
  }
`

document.head.appendChild(hell);