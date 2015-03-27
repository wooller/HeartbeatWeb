Parse.initialize("LewmFIgnn4R9UZLRoFGh7vckZTBEXIwT7HBbADsl", "XFG8hpkT2ht5YiOCG28QW9uZBfzJ6WeRilUykRZm");

function process_login(){

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	//check to see if the username or password fields are blank
	if (username == '' || password == ''){
		alert('You must provide all the requested details. Please try again');
        return false;
	}else {

		Parse.User.logIn(username, password,{
			success:function(user){
				window.location.href = "http://heartbeatweb.parseapp.com/home.html";
			},
			error: function(user, error){
				alert('The login failed')
			}
		});

	}
}

function process_logout(){
	Parse.User.logOut();
	var currentUser = Parse.User.current();
}