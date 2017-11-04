
var clientId="lyszn9cytfoogtkiaq5j06plw2kudy";
var channels = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp"];
var search = channels[2];
var url="";
var li,ul;
function main(){
	getTwitchtv();
	getnewTwitchtv();
	getnew();
}
//this function requests json objects for first element of array
	function getTwitchtv(){
		var myRequest = new XMLHttpRequest();
			myRequest.onreadystatechange = function(){
				if (myRequest.readyState === XMLHttpRequest.DONE){
					if (myRequest.status <400){
						var str = JSON.parse(myRequest.responseText);
						nullTwitch(str);
					}
				}
			};
			url ='https://api.twitch.tv/kraken/channels/'+channels[0]+'?client_id='+clientId;	
						
			myRequest.open('GET',url,true);
			myRequest.send(null);
		
	    
	}
// this function calls fourth element in channels array
	function getnewTwitchtv(){
		var myRequest = new XMLHttpRequest();
			myRequest.onreadystatechange = function(){
				if (myRequest.readyState === XMLHttpRequest.DONE){
					if (myRequest.status <400){
						var str = JSON.parse(myRequest.responseText);
						nullTwitch(str);
					}
				}
			};
			url ='https://api.twitch.tv/kraken/channels/'+channels[3]+'?client_id='+clientId;	
						
			myRequest.open('GET',url,true);
			myRequest.send(null);
	    
	}
// this fucntion calls third elements from channels array
	function getnew(){
		var myRequest = new XMLHttpRequest();
			myRequest.onreadystatechange = function(){
				if (myRequest.readyState === XMLHttpRequest.DONE){
					if (myRequest.status <400){
						var str = JSON.parse(myRequest.responseText);
						nullTwitch(str);
					}
				}
			};
			url ='https://api.twitch.tv/kraken/channels/'+channels[2]+'?client_id='+clientId;	
						
			myRequest.open('GET',url,true);
			myRequest.send(null);
		
	    
	}

	function nullTwitch(data){
		var logo = data.logo;
		var name = data.display_name;
		var channelUrl= data.url;
		console.log(data);
		if (data.name == "freecodecamp") {
			ul = document.getElementById('list1');
		}
		else if(data.name == "cretetion"){
			ul = document.getElementById('list2');

		}
		else if(data.name ==="esl_sc2"){
			ul=document.getElementById('list3');
		}
		else{
			console.log("AWWW,Some is Wrong Again!!!")
		}
		var anchorElement;
		var x;
		x=document.createElement("IMG");
		x.setAttribute("src",logo);
		x.setAttribute("width", "100");
	    x.setAttribute("height", "100");
		//ul = document.getElementById('list1');
		li = document.createElement('li');
		anchorElement = document.createElement('a');
		anchorElement.setAttribute("href",channelUrl);
		anchorElement.innerHTML="Channel:  "+name;
		li.appendChild(anchorElement);
		ul.appendChild(x);ul.appendChild(li);
	}



