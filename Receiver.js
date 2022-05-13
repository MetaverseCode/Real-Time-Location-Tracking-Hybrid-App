const firebaseConfig = {
    
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  function get(){
      var latitude = "";
      var longitude = "";
      firebase.database().ref("Location").on("value", (snapshot) => {
            latitude = snapshot.val().latitude;
            longitude = snapshot.val().longitude;
      })
      sessionStorage.setItem("latitude", latitude);
        sessionStorage.setItem("longitude", longitude);
    
console.log(parseFloat(latitude));
console.log(parseFloat(longitude));
     

      setTimeout(function(){get()}, 2000);
  }

  function show(){
        var latitude = sessionStorage.getItem("latitude");
        var longitude = sessionStorage.getItem("longitude");
    const myLatLng = { lat: parseFloat(latitude), lng: parseFloat(longitude)};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "tracking",
    });
    
  }
  window.initMap = show;
  
