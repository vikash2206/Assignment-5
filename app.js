var firebaseConfig = {
  apiKey: "AIzaSyCbevmpc1dOEGPHut7bPccFGFkkeF7_nnA",
  authDomain: "restaurant-f2c98.firebaseapp.com",
  projectId: "restaurant-f2c98",
  storageBucket: "restaurant-f2c98.appspot.com",
  messagingSenderId: "943520844059",
  appId: "1:943520844059:web:b8e329d0823c9781d96bbe",
  measurementId: "G-DNJ1DENJZB"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }