// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD5_XKxeH1vVxSItqQwAKZ-tFqGB26BHHI",
  authDomain: "kwitter-project-45d93.firebaseapp.com",
  databaseURL: "https://kwitter-project-45d93-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-45d93",
  storageBucket: "kwitter-project-45d93.appspot.com",
  messagingSenderId: "129016133427",
  appId: "1:129016133427:web:ed4759960f5cd564aab046"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Hey" + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      user : user_name
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  console.log(firebase);

  function getData()
 {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}