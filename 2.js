function check_filenumber()
{
	var name=document.getElementById("rname").value;
	document.getElementById("error").innerHTML="";
	
	if(name=="" )
	{
	
		
		var ul=document.getElementById("error");
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(" please fill 12 digit file number "));
		ul.appendChild(li);
		return false;
		
		
	}
	else if (name.length<12||name.length>12)
	{
		
		
		var ul=document.getElementById("error");
		var li=document.createElement("li");
		li.appendChild(document.createTextNode("file number must contain 12 characters only  "));
		ul.appendChild(li);
		return false;
		
	}
	
	else if (/[^a-zA-Z0-9\-\/]/.test(name))
	{
		
		
		var ul=document.getElementById("error");
		var li=document.createElement("li");
		li.appendChild(document.createTextNode("special character not allowed "));
		ul.appendChild(li);
		return false;
		
	}
	
	
}
function check_sname()
{
	var gname=document.getElementById("g").value;
	var hname=document.getElementById("h").value;
	var mname=document.getElementById("m").value;
	var nname=document.getElementById("n").value;
	var oname=document.getElementById("o").value;
	var pname=document.getElementById("p").value;
	var z19=document.getElementById("z19").value;
	var z28=document.getElementById("z28").value;
	
	
	if(gname=="" ||hname==""||mname==""||nname==""||oname==""||pname==""||z19==""||z28=="")
	{
	
		
		var ul=document.getElementById("error");
		var li=document.createElement("li");
		li.appendChild(document.createTextNode("please fill complete details in all points of 2. Applicant details "));
		ul.appendChild(li);
		return false;
		
		
	}
}


function check_aadhar()
{
	var aadhar=document.getElementById("aadhar").value;
	if(aadhar==""||aadhar.length<12||aadhar.length>12)
	{
		
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill 12 digit aadhar number in 2.17"));
			ul.appendChild(li);
			return false;
			
	}
	

	
}
function check_pan()
{
	var pan=document.getElementById("pan").value;
	if(pan==""||pan.length<10||pan.length>10)
	{
		
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill 10 character pan number"));
			ul.appendChild(li);
			return false;
			
	}
	
	
	
}
function check_pin()
{
	var pin=document.getElementById("pin").value;
	
	
	if(pin==""||pin.length<6||pin.length>6)
	{
		
		var ul=document.getElementById("error");
		var li=document.createElement("li");
		li.appendChild(document.createTextNode("please fill 6 digit pin only"));
		ul.appendChild(li);
		return false;
			
	}
	

	
}
function check_contact()
{
	var contact=document.getElementById("contact").value;
	if(contact=="")
	{
		
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill 10 digit mobile number"));
			ul.appendChild(li);
			return false;
			
	}
	else (contact.length<10||contact.length>10)
	{
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("only 10 digit mobile number is allowed"));
			ul.appendChild(li);
			return false;
	}
	
}
		
function check_email()
{
	var email=document.getElementById("email").value;
	
	
	if(email=="")
	{
		
		
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill email address in 4.1"));
		
			ul.appendChild(li);
			return false;
		
		
		
		
	}
	
}
function check_voterId()
{
	var voterId=document.getElementById("voterId").value;
	
	if(voterId==""||voterId.length<10||voterId.length>10)
	{
		
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill voterID in 2.10"));
			ul.appendChild(li);
			return false;
			
	}
	
	
	
}
function check_mob()
{
	var mob=document.getElementById("mob").value;
	
	if(mob=="")
	{
		
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill mobile number in 4.1"));
			ul.appendChild(li);
			return false;
			
	}
	else if(mob.length<10||mob.length>10)
	{
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill exact 10 digit number in 4.1"));
			ul.appendChild(li);
			return false;
	}
	
	
	
	
}
function check_fname()
{
	var aname=document.getElementById("1name").value;
	var bname=document.getElementById("2name").value;
	var cname=document.getElementById("3name").value;
	var dname=document.getElementById("4name").value;
	var ename=document.getElementById("5name").value;
	var fname=document.getElementById("6name").value;
	var gname=document.getElementById("7name").value;
	var hname=document.getElementById("8name").value;
	var iname=document.getElementById("9name").value;
	var jname=document.getElementById("10name").value;
	var kname=document.getElementById("11name").value;
	var lname=document.getElementById("12name").value;
	
	if(aname==""||bname==""||cname=="" ||dname==""||ename==""||fname==""||gname==""||hname==""||iname==""||jname==""||kname==""||lname=="")
	{
		
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill complete details in  all points of 3.Family Details"));
			ul.appendChild(li);
			return false;
			
	}
	
	
}
function check_address()
 {
  var address=document.getElementById("address").value;

  if (address== "")
		{
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("please fill address in 4.1"));
			ul.appendChild(li);
			return false;
			
		} 
		
		else if (document.getElementById('address').value.length > 150) 
		{
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("Address cannot be more than 150 characters"));
			ul.appendChild(li);
			return false;
		  
			
		}
		  else if (/[^a-zA-Z0-9\-\/]/.test(address))
		{
			var ul=document.getElementById("error");
			var li=document.createElement("li");
			
			li.appendChild(document.createTextNode("Address can only contain alphanumeric characters, hyphens(-) and back slashs(\)"));
			ul.appendChild(li);
			return false;
		}

}




 function check_validate()
 {
			var email=document.getElementById("email").value;
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(email) == false) 
            {
                alert('Invalid Email Address');
                return (false);
            }
 }
function ValidationEvent()
{
	let isNameValid= check_filenumber(),
		isSnameValid=check_sname(),
		isContactValid=check_contact(),
		isEmailValid=check_email(),
		isAadharValid=check_aadhar(),
		isPanValid=check_pan(),
		isPinValid=check_pin(),
		isVoterIdValid=check_voterId(),
		isFnameValid=check_fname(),
		isMobValid=check_mob(),
		isAdressValid=check_address();
		//isvalidateValid=check_validate;
		return isNameValid &&isSnameValid && isContactValid&&isvalidateValid && isEmailValid && isAadharValid && isPanValid && isPinValid && isVoterIdValid &&isFnameValid &&isMobValid&&isAddressValid;
		
	
	
}











document.getElementById("Form").addEventListener('submit',function(event)
	{
		event.preventDefault();
		var isFormValid=ValidationEvent();
		
		
	/*	if(isFormValid)
		{
			alert("all type of validation done");
		}
		else
		{
			alert("please complete the remaining  form");
		}*/
	});
		
		
