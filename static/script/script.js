


function GetQuesstion(password){
    
    
    //Request json file containing the data of the cardnumbers
    let jsonreq = new XMLHttpRequest();
    jsonreq.onload = function(){ 
      try{
      try{
        var responseData  = this.responseText;
       
      }catch(error){alert("Invalid response from the server\nTry again later");return}
        //Decrypt the data
        try{

        var decrypted_data = decrypt(responseData,password)
        
        }
        catch(error){
          
          alert("User or password may be incorrect or try again later");return
        }
        //Parse the text into object
        try{
         
        var dataJSON = JSON.parse(decrypted_data);
        
        }catch(error){
          
          alert("User or password may be incorrect or try again later");
        }
        try{
        if (dataJSON[questionNumber]===null || dataJSON[questionNumber]=="" || dataJSON[questionNumber].length ==0){
          alert("User or password may be incorrect or try again later");return

        }}catch(error){console.log(123);location.reload()}

        }catch(error){location.reload()}

        
        data = dataJSON[questionNumber]

      
      try{
        if(data === undefined){alert(data);return}
      }
      catch(error){alert(error);location.reload();return}
      directs()
    }

    jsonreq.open("GET","res/data.json");
    jsonreq.send();    
}


function decrypt(string,password){

try{
  var x =  CryptoJS.Rabbit.decrypt(string,password)
  return x.toString(CryptoJS.enc.Utf8)
}catch(error){throw "User or password may be incorrect or try again later"}
}



function checkCard(x){
  
        
        for(let i = 0;i<data.length;i++){
          if (x == data[i]){
            return true;
          }
        }
        return false;

    }
  

function handleSubmit(form){


var password = form.password.value

if (questionNumber == "" || questionNumber === null ||password == "" || password === null){alert("User and password can't be empty");return}

  
  GetQuesstion(password)
}



    function directs(){
      
      document.getElementsByTagName("h1")[0].remove()
      document.getElementById("login").remove()
      document.getElementById('img').src = 'data:image/png;base64,'+data;
      
    }

