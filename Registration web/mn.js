`use strict`
const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const pas=document.getElementById('password')
const pas2=document.getElementById('password2')
const Selec=document.getElementById('Region')
const But=document.getElementById('Button')
const Geo=document.getElementById('Geo')
const ContRad=document.getElementById('Container-Rad')

function GetIdName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1,8);
}
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function checkEmail(input){
    const re=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,'Email not valid')
    }
}
function CheckAll(inpArry){
    inpArry.forEach(function(input){
         if(input.value.trim()===''){
             showError(input,`Plese check ${GetIdName(input)}`)
         }else{
            showSuccess(input)
         }
    });
}
function checkPassword(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'Password do not match')
    }
}
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`Entered  ${GetIdName(input)} should be exceeded ${min}`)
    }else if(input.value.length>max){
        showError(input,`Entered  ${GetIdName(input)} should not exceeded ${max}`)
    }else{
        showSuccess
    }
}
Selec.addEventListener('click',function(){
    if(document.getElementById('Region')){
            Selec.parentElement.style.height='650px'
            But.style.marginTop='100px'
            But.style.transition='0.5s'
            Selec.addEventListener('change',function(e){
                if(e.target.value==='Georgia'){
                    const Plme=document.createElement('p')
                    const Lab=document.createElement('label')
                    const Inp=document.createElement('input')
                    const Lab2=document.createElement('label')
                    const Inp2=document.createElement('input')
                    Inp2.setAttribute('type','radio')
                    Inp.setAttribute('type','radio')
                    Plme.innerText='Plese select Your land'
                    Plme.style.textAlign='center'
                    Inp.id='Cont'
                    Lab.innerText='სამეგრელო ზემო სვანეთი'
                    Lab.htmlFor='Cont'
                    Inp2.id='Cont2'
                    Lab2.innerText='სხვა საქართველო'
                    Lab2.htmlFor='Cont2'
                    Lab.style.marginRight='100px'
                    ContRad.appendChild(Plme)
                    ContRad.appendChild(Inp)
                    ContRad.appendChild(Lab)
                    ContRad.appendChild(Inp2)
                    ContRad.appendChild(Lab2)
                }
            })
    }
})

    function clicker (){
       let re2=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(document.getElementById('Cont')&&username.value&&re2.test(email.value.trim())&&pas.value===pas2.value){
            window.location.href='index2.html'
        }
    }
form.addEventListener('submit',function(e){
    e.preventDefault();
    CheckAll([username,email,pas,pas2])
    checkLength(username,3,15)
    checkLength(pas,6,25)
    checkEmail(email)
    checkPassword(pas,pas2)
})