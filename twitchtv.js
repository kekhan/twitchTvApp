
var myRequest = new XMLHttpRequest();
var clientId="lyszn9cytfoogtkiaq5j06plw2kudy";
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var channelUrl,logo,name,anchorElement,x,lu,li;
var search = channels[2];
	function getTwitchtv(){
			myRequest.onreadystatechange = function(){
				if (myRequest.readyState === XMLHttpRequest.DONE){
					if (myRequest.status <400){
						var str = JSON.parse(myRequest.responseText);
						if(str.stream===null){
							requestnulltwitch(str);
						}
						else{
							displayNotNull(str);
						}

					}
				}
			};	
			var isnull= "channels";
			
			var url ='https://api.twitch.tv/kraken/streams/'+search+'?client_id='+clientId;
			
			myRequest.open('GET',url,true);
			myRequest.send(null);
	    
	}
	function displayNotNull(data){
		logo = data.stream.channel.logo;
		name = data.stream.channel.display_name;
		channelUrl= data.stream.channel.url;
		console.log(data);
		x=document.createElement("IMG");
		x.setAttribute("src",logo);
		x.setAttribute("width", "100");
	    x.setAttribute("height", "100");
		li = document.getElementById('t');
		li = document.createElement('li');
		anchorElement = document.createElement('a');
		anchorElement.setAttribute("href",channelUrl);
		anchorElement.innerHTML="Channel:  "+name;
		li.appendChild(anchorElement);
		ul.appendChild(x);ul.appendChild(li);
	}
	function requestnulltwitch(data){
			myRequest.onreadystatechange=function(){
				if (myRequest.readyState===XMLHttpRequest.DONE){
					if(myRequest.status< 400){
						var nullStr = JSON.parse(myRequest.responseText);
						nullTwitch(nullStr);

					}
				}
			};
			
			url ='https://api.twitch.tv/kraken/channels/'+search+'?client_id='+clientId;
			
			myRequest.open('GET',url,true);
			myRequest.send(null);

	}
	function nullTwitch(data){
		logo = data.logo;
		name = data.display_name;
		channelUrl= data.url;
		console.log(data);
		anchorElement;
		x;
		x=document.createElement("IMG");
		x.setAttribute("src",logo);
		x.setAttribute("width", "100");
	    x.setAttribute("height", "100");
		ul = document.getElementById('list');
		li = document.createElement('li');
		anchorElement = document.createElement('a');
		anchorElement.setAttribute("href",channelUrl);
		anchorElement.innerHTML="Channel:  "+name;
		li.appendChild(anchorElement);
		ul.appendChild(x);ul.appendChild(li);
	}



