const firstName =document.querySelector('#fName');
const lastNast =document.querySelector('#lNast')
const City =document.querySelector('#City')
const CountryName =document.querySelector('#Country')
const appendRowTop =document.querySelector('#appendRowTop')
const appendRowBottom =document.querySelector('#appendRowBottom')
const table=document.getElementById("sampleTable");
appendRowTop.addEventListener('click',(e)=>{
    e.preventDefault()
    if(firstName.value !='' && lastNast.value !='' &&  CountryName.value!='' && City.value !=''){
        var x=document.getElementById('sampleTable').insertRow(1);
        var sNo = x.insertCell(0);
        var z = x.insertCell(1);
        var a = x.insertCell(2);
        var b = x.insertCell(3);
        var c = x.insertCell(4);
    
        sNo.innerHTML='1';
        z.innerHTML=firstName.value;
        a.innerHTML=lastNast.value;
        b.innerHTML=City.value;
        c.innerHTML=CountryName.value;
        InputClearData()
        for (let i=2;i<table.rows.length;i++){
            table.rows[i].cells[0].innerHTML=i;
          }
    }else{
      alert("please fill all the data")
    }
})

appendRowBottom.addEventListener('click',(e)=>{
    e.preventDefault()

    if(firstName.value !='' && lastNast.value !='' &&  CountryName.value!='' && City.value !=''){
        var x=document.getElementById('sampleTable').insertRow(-1);

        var sNo = x.insertCell(0);
        var z = x.insertCell(1);
        var a = x.insertCell(2);
        var b = x.insertCell(3);
        var c = x.insertCell(4);
    
        sNo.innerHTML=(table.rows.length-1);;
        z.innerHTML=firstName.value;;
        a.innerHTML=lastNast.value;
        b.innerHTML=City.value;
        c.innerHTML=CountryName.value;
        InputClearData()
    }else{
        alert("please fill all the data")
    }
   
})
function InputClearData(){
    document.querySelector('#fName').value='';
    document.querySelector('#lNast').value=''
    document.querySelector('#City').value=''
    document.querySelector('#Country') .value=''
}

