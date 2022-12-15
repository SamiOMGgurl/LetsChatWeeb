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
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
    document.getElementById("msg").value = "";
  }

function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}