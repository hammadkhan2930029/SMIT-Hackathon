import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, getDatabase, doc, setDoc, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyAZT8WeEJcHEuj9Yn7iu5Qzf5NVFs9XU9Y",
  authDomain: "test-da73d.firebaseapp.com",
  projectId: "test-da73d",
  storageBucket: "test-da73d.appspot.com",
  messagingSenderId: "807758052932",
  appId: "1:807758052932:web:b96b300bda9761e2c0c611",
  measurementId: "G-JLKWY5NQD2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


// ---------sign Out----------

let signout = document.getElementById("signOut")
console.log(signout)
if (signout) {
  signout.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        window.location.replace("login.html")

      }).catch((error) => {
        console.log(error)
      });
  })
}




onAuthStateChanged(auth, (user) => {
  console.log(user)
  if (user) {
    if (location.pathname !== "/dashboard.html") {

      window.location.replace("dashboard.html")
    }
  } else {
    if (location.pathname !== "/login.html") {

      window.location.replace("login.html")
    }
  }
});



// -------Student register form--------------

var firstName = document.getElementById("First_Name");
var lastName = document.getElementById("Last_Name");
var fatherName = document.getElementById("father_Name");
var mobileNumber = document.getElementById("mobile_number");
var course = document.getElementById("course");
var date = document.getElementById("date");
var dropDown = document.getElementById("dropDown");
var btn = document.getElementById("btn");


var value = dropDown.value;
var text = dropDown.options[dropDown.selectedIndex].text;

btn.addEventListener("click", () => {
  event.preventDefault()
  if (firstName.value.trim() == "") {
    swal({
      title: "Empty First and last Name field",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

  }
  else if (lastName.value.trim() == "") {
    swal({
      title: "Empty mobile number field",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })


  }
  else if (fatherName.value.trim() == "") {
    swal({
      title: "Empty mobile number field",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })


  }
  else if (date.value.trim() == "") {
    swal({
      title: "Empty mobile number field",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })


  }
  else if (mobileNumber.value.length < 11) {
    swal({
      title: "Mobile No is to short",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

  }

  else if (dropDown.value.trim() == "") {
    swal({
      title: "Select City",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

  }

  else {

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        window.location.replace("login.html")

        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          FirstName: firstLastName.value,
          lastName: lastName.value,
          fatherName: fatherName.value,
          mobile: mobileNumber.value,
          courseName: course.value,
                      
          
          selectBatch: dropDown.value,
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal(errorMessage)

      });
  }

});



