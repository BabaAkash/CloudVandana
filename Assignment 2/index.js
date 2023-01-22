const sentence = document.querySelector('#sentence')
const letter = document.querySelector('#letter')
const btn = document.querySelector('#btn')

btn.addEventListener('click',(e)=>{
e.preventDefault()
var str = sentence.value
var lett =letter.value
  function check(data){
      for(var i in str){
      if(data==str[i]){
         var num =parseInt(i)+1
         console.log(num)
         return str.substring(num)
      }
  }
  return `The letter does not exist in the 
  sentence.`
  }
  var result = check(lett)
  console.log("data:",result)
  let heading = document.getElementById('heading')
  heading.innerHTML=result
  InputClearData()
})

function InputClearData(){
  document.querySelector('#sentence').value='';
  document.querySelector('#letter').value=''
}




