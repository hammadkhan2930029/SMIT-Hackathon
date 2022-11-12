import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


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
const db = getFirestore();



// ---------sign Out----------

// let signout = document.getElementById("signOut")
// console.log(signout)
// if (signout) {
//   signout.addEventListener("click", () => {
//     signOut(auth)
//       .then(() => {
//         window.location.replace("login.html")

//       }).catch((error) => {
//         console.log(error)
//       });
//   })
// }




// onAuthStateChanged(auth, (user) => {
//   console.log(user)
//   if (user) {
//     if (location.pathname !== "/dashboard.html") {

//       window.location.replace("dashboard.html")
//     }
//   } else {
//     if (location.pathname !== "/login.html") {

//       window.location.replace("login.html")
//     }
//   }
// });



// -------admin form--------------



const btn = document.getElementById("btn");




const getClassValue = async () => {

  event.preventDefault()
  let dropdown1 = document.getElementById("Class_Timing")
  let result1 = dropdown1.options[dropdown1.selectedIndex].value;
  console.log(result1)

  let dropdown2 = document.getElementById("Shedule")
  let result2 = dropdown2.options[dropdown2.selectedIndex].value;

  let dropdown3 = document.getElementById("teachers")
  let result3 = dropdown3.options[dropdown3.selectedIndex].value;

  let dropdown4 = document.getElementById("section")
  let result4 = dropdown4.options[dropdown4.selectedIndex].value;

  let dropdown5 = document.getElementById("course")
  let result5 = dropdown5.options[dropdown5.selectedIndex].value;
  console.log(result4)

  let dropdown6 = document.getElementById("batch")
  let result6 = dropdown6.options[dropdown6.selectedIndex].value;
  console.log(result5)

  if (result1 != 0 && result2 != 0 && result3 != 0 && result4 != 0 && result5 != 0) {
    //  && dropdown2 != "0" && dropdown3 != "0" && dropdown4 != "0" && dropdown5 != "0") {
    console.log("hi")
    const docRef = await addDoc(collection(db, "classList"), {
      timing: result1,
      schedule: result2,
      current_teacher: result3,
      section: result4,
      course: result5,
      batch: result6
    });
    swal(`Class Added Successfully`)
    console.log("Document written with ID: ", docRef.id);
  }

}


// ------student portal ------

const SecondBtn = document.getElementById("SecondBtn")


SecondBtn.addEventListener("click",async()=>{
event.preventDefault();

  const name = document.getElementById("name")
  const father = document.getElementById("fatherName")
  const rollNumber = document.getElementById("rollNumber")
  const contact = document.getElementById("contact")
  const cnic = document.getElementById("cnic")
  const pic = document.getElementById("pic")
  const courseName =document.getElementById("courseName")
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      fathert: father.value,
      rollNumber: rollNumber.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})


