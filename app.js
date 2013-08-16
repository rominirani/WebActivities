$(document).ready(function(){

       //Shown below are just a few Intents (Web Activities)
	   //Check out https://developer.mozilla.org/en-US/docs/WebAPI/Web_Activities#Firefox_OS_activities
	   $("#btnCall").click(function(){
	      var call = new MozActivity({
				name: "dial",
				data: {
					number: "+1231231231"
				}
			});
		});
	   $("#btnSMS").click(function(){
	      var newSMS = new MozActivity({
				name: "new",
				data: {
				    type : "websms/sms",
					number: "+1231231231"
				}
			});
		});
	   $("#btnPickImage").click(function(){
			var pickImageActivity = new MozActivity({
			name: "pick",
			data: {
			  type: ["image/png", "image/jpg", "image/jpeg"]
			  }
			});
			
			pickImageActivity.onsuccess = function() {
			   //Create the element via jQuery
			   var imageElement = $('<img id="image1" height="400" width="300">');
			   imageElement.attr('src', window.URL.createObjectURL(this.result.blob));
			   $("#pickImage").html(imageElement);

			   //Switch to the #pageid = showImage
			   $.mobile.changePage ($("#showImage"));
			};
			
			pickImageActivity.onerror = function() {
			  alert("Cannot pick the image");
			  console.log(this.result);
			};
		});
			   
       //View a Web Page	   
	   $("#btnViewWebPage").click(function() {
	      var openURL = new MozActivity({
			name: "view",
			data: {
				type: "url", 
				url: "http://www.rominirani.com"
			}
		});
       });
	   
	   //Settings
	   $("#btnOpenSettings").click(function(){
	      var openSettings = new MozActivity({
		    name : "configure",
			data : {
			target : "device"
			}
		  });
		});
	   
});