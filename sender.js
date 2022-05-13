const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

function send(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var accuracy = position.coords.accuracy;
        firebase.database().ref("Location").set({
          longitude:longitude,
          latitude:latitude,
          accuracy:accuracy
         }).then(function(){
            console.log("Data Sent");
         });




    },
    function error(msg) {alert('Please enable your GPS position feature.');},
    {maximumAge:10000, timeout:5000, enableHighAccuracy: true});



}else{
  alert("error")
}
setTimeout(function(){send()},20000);

}
