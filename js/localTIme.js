const Timer=document.querySelector('.Timer_Data');

const InputValue=document.querySelector('.name');
const addUserBtn=document.querySelector('.Event_listener');

const form=document.getElementById('login');


const greeting=document.getElementById('greeting');


Timer.style.color="red";


setInterval(()=>{
  Timer.textContent=`${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`

},1000)

const user=[];


function LoginCheck(e){
  e.preventDefault();
  const username=InputValue.value;

  form.classList.add('hidden');

  localStorage.setItem('user',username);


  greeting.textContent=`${username} Hello!`


  greeting.classList.remove('hidden');

}


const search=localStorage.getItem('user');



if(search===null){
  form.classList.remove('hidden');
  form.addEventListener('submit',LoginCheck);

}else{
  greeting.textContent=`${search}`;
  greeting.classList.remove('hidden');
  form.classList.add('hidden');
}



form.addEventListener('submit',LoginCheck);