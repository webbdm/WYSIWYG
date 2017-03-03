var peepsContainer = document.getElementById('peepsDiv');
var textInput = document.getElementById('textInput');
// var clear = document.getElementById("clear");
var wayne = {

  name: "Wayne Gretsky",
  bio: "",
  image: "https://s-media-cache-ak0.pinimg.com/originals/b9/1c/b2/b91cb2af28bbf52bd1fb8ec568d6d12f.jpg",
  lifespan: {
    birth: 1747,
    death: "N/A"
  }
}
var kobe = {
  title: "The Black Mamba",
  name: "Kobe Bryant",
  bio: "",
  image: "http://www.aretehoops.com/wp-content/uploads/2015/06/460255510.0.jpg",
  lifespan: {
    birth: 1978,
    death: "N/A"
  }
}
var terry = {
  title: "The Blonde Bomber",
  name: "Terry Bradshaw",
  bio: "",
  image: "https://davidmandre.files.wordpress.com/2011/12/bradshaw2.jpg",
  lifespan: {
    birth: 1948,
    death: "N/A"
  }
}
var jerome = {
  title: "The Bus",
  name: "Jerome Bettis",
  bio: "",
  image: "http://www.post-gazette.com/.media/2/2015/06/09/d85463a3-41fb-4837-b348-31309c4890b8.jpg",
  lifespan: {
    birth: 1972 ,
    death: "N/A"
  }
}

var peepsArray = [];

peepsArray.push(wayne,kobe,terry,jerome);

for(i=0; i< peepsArray.length; i++){
  
  var newPeeps = "";
  newPeeps += `<div class="peeps" id="${i}">`
  newPeeps += `<header>`
  newPeeps += `<p>${peepsArray[i].title}</p>`
  newPeeps += `<p>${peepsArray[i].name}</p>`
  newPeeps += `<section>`
  newPeeps += `<img src="${peepsArray[i].image}">`
  newPeeps += `<p id="bio">${peepsArray[i].bio}</p>`
  newPeeps += `</section>`
  newPeeps += `</header>`
  newPeeps += `<footer><p>${peepsArray[i].lifespan.birth} - Present</p></footer>`
  newPeeps += `</div>`
  peepsContainer.innerHTML += newPeeps;
  
}


function bioKey(){
  document.getElementById('bio').innerHTML += textInput.value;
}

function enterClear(event){
    if(event.keyCode === 13){
     textInput.value = " ";
    }
}

// clear.addEventListener("click",function(){
  
//   textInput.value = " ";
  
// });
  


function dottedBorder(event){
    if(event.target.parentNode.className === "peeps"){
      
        event.target.parentNode.classList.add('dotted');
        textInput.focus();
        textInput.addEventListener("keypress",bioKey);
        textInput.addEventListener("keypress",enterClear);
        
      
    } else if(event.target.parentNode.classList.contains("peeps")){
        event.target.parentNode.classList.remove('dotted');
    } 
}


var peepsCard = document.getElementsByClassName('peeps');
for(i=0; i<peepsCard.length; i++){
    peepsCard[i].addEventListener("click",dottedBorder);
}