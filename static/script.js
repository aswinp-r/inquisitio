
function inputBox(){
    let textinput = document.getElementById("user");
    let val =  textinput.value;
    let len =val.length;
    
   
    if (len == 10){
      //First we need to check whether the card is already used
      if(attendance[val]===true){
        document.getElementById("output").innerHTML = "CARD ALREADY USED";
        document.getElementById("box").style.backgroundColor = "Red";
        permissiondenied.play()
        setTimeout(function(){document.getElementById("user").value = "";},800);
        
      }
      


      else if (checkCard(val)){
      attendance[val] = true
      document.getElementById("output").innerHTML = "PASS";
      document.getElementById("box").style.backgroundColor = "Green";
      bell.play()
    }


      else{document.getElementById("output").innerHTML = "FAIL";
      document.getElementById("box").style.backgroundColor = "Red";
          permissiondenied.play()
    }

      setTimeout(function(){document.getElementById("user").value = "";},800);
      setTimeout(function(){document.getElementById("box").style.backgroundColor = "white";},800);
      setTimeout(function(){document.getElementById("output").innerHTML = "";},800);
    }
    else if(len > 10){document.getElementById("user").value = "";}
}  




function GetData(user,password){
    
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
        if (dataJSON[user]===null || dataJSON[user]=="" || dataJSON[user].length ==0){
          alert("User or password may be incorrect or try again later");return

        }}catch(error){console.log(123);location.reload()}

        }catch(error){console.log(1);location.reload()}

        
        data = dataJSON[user]

        //Initialise the variable for storing the attendance
        attendance = {}
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
  console.log(x)
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
      
      var user = form.user.value
     
      var password = form.password.value
      
      if (user == "" || user === null ||password == "" || password === null){alert("User and password can't be empty");return}
      
       
       GetData(user,password)
    }
    


    function directs(){
      
    
'data:image/png,'+data;
      document.getElementById('img').src = 'data:image/png;base64,'+data;
      
    }

