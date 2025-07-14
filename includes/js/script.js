$(document).ready(function(){
    $('.picture-cont').html(`
           <div id="picture-text" class="col-3">
                 <h2 class="mb-5"><span class=" d-inline text-light">Welcome to </span><br>
                <span class="hotelName border border-2 rounded">Cartagena Hotel</span>
            </h2>
           </div>
           <div class="col-sm-6 ">
                <h4 class="ps-2 text-light"> Our history has proven that our customers always return </h4>
                 <a href="#bookingSec" class="m-5 btn offBtn bookScroll">Book Now</a>
           </div>
            <div class="col-sm-6">
                <img id="hotel-pic" src="./includes/images/pic1.jpg" alt="">
            </div>
        </div>`);
});
    $('.offBtn').hover(function(){
        $(this).css(
            {
                "background-color ": "pink",
                "color" : "white"
            }
        )
    }).mouseleave(function(){
        $(this).css({
            "background-color":"black",
            "color" : "tomato"
        })
    })
document.getElementById("subButton").addEventListener("click",()=>{
    //calling the methods
    let fName = firstNameVerification();
    let lName = lastNameVerification();
    let email  = emailVerification();
    let age = ageVerification();
    let postalCode = postalCodeVerification();
    let contactNumber = phoneVerification();
    //if methods are returning true then adding the info to the card
    if(fName && lName && email && age && postalCode && contactNumber){
        //make a container
        let myContainer = document.getElementById("myContainer");
        //create a div
        let myCard = document.createElement("div");
        //add class to div
        myCard.classList.add("container");
        //insert card to div
        myCard.innerHTML = ` <div class="card" style="width: 18rem;">
        <img src="./includes/images/person-placeHolder.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <ul class="list-group list-group-flush">
          <li class="list-group-item" id="personInfo">${fName} ${lName}</li>
          <li class="list-group-item">Age: <span style = "color: red">${age}</span></li>
          <li class="list-group-item">Postal Code: ${postalCode}</li>
          <li class="list-group-item">Ph: <span style = "color: green">${contactNumber}</span></li> 
        </ul>
        </div>
        </div>
       `
        myContainer.appendChild(myCard);
        //using the bootstrap.Modal.getInstance to directly hide modal elements
        //This only works for elements not btns
        let myModal = document.getElementById("exampleModal");
        let otherModal = bootstrap.Modal.getInstance(myModal);
        otherModal.hide();
        //hidding the log in btn after logging in
        let logInBtn = document.getElementById("log-in");
        logInBtn.style.display = "none";
        //show log out
        let logOutBtn = document.getElementById("log-out");
        logOutBtn.style.display = "inline-block";
        document.getElementById("#greeting").innerHTML = `Hello ${fName} ${lName}`;
    }
    
});

//log out press
document.getElementById("log-out").addEventListener("click",()=>{
    //removing the log-out
    let logOutBtn = document.getElementById("log-out");
    logOutBtn.style.display = "none";

    //showing the log in
    let logInBtn = document.getElementById("log-in");
    logInBtn.style.display = "inline-block";

    //removing greeting
    let myGreeting = document.getElementById("greeting");
    myGreeting.remove();

    //removing the card
    let myContainer = document.getElementById("myContainer");
    myContainer.remove();

    resetFormFields()
});

//clear all form fields when log-out
function resetFormFields() {
    // Reset first name
    document.getElementById("firstName").value = "";
    document.getElementById("firstName").style.borderColor = "";
    document.getElementById("firstName").placeholder = "First Name";
    document.getElementById("validateSign5").innerHTML = "";

    // Reset last name
    document.getElementById("lastName").value = "";
    document.getElementById("lastName").style.borderColor = "";
    document.getElementById("lastName").placeholder = "Last Name";
    document.getElementById("validateSign4").innerHTML = "";

    // Reset email
    document.getElementById("emailAddress").value = "";
    document.getElementById("emailAddress").style.borderColor = "";
    document.getElementById("emailAddress").placeholder = "Email Address";
    document.getElementById("validateSign3").innerHTML = "";

    // Reset age
    document.getElementById("age").value = "";
    document.getElementById("age").style.borderColor = "";
    document.getElementById("age").placeholder = "Age";
    document.getElementById("validateSign2").innerHTML = "";

    // Reset postal code
    document.getElementById("postalCode").value = "";
    document.getElementById("postalCode").style.borderColor = "";
    document.getElementById("postalCode").placeholder = "Postal Code";
    document.getElementById("validateSign1").innerHTML = "";

    // Reset contact number
    document.getElementById("contact").value = "";
    document.getElementById("contact").style.borderColor = "";
    document.getElementById("contact").placeholder = "Phone Number";
    document.getElementById("validateSign").innerHTML = "";
}


 function firstNameVerification(){
    //blank
    let blankInput = /^\s*$/;
    //No space
    let whiteSpace =/\s/;
    let valid = true;
         //first name blank condition
        let fName = document.getElementById("firstName").value;
         if (blankInput.test(fName)){
            document.getElementById("firstName").value = "";
            document.getElementById("firstName").style.borderColor = "red";
            document.getElementById("firstName").placeholder= "Name is Reuired";
            document.getElementById("validateSign5").innerHTML = "❌";
            valid =false;
        }else if(whiteSpace.test(fName)){
            document.getElementById("firstName").value = "";
            document.getElementById("firstName").style.borderColor = "red";
            document.getElementById("firstName").placeholder= "Space is not allowed";
            document.getElementById("validateSign5").innerHTML = "❌";
            valid =false;
        } else{
            document.getElementById("firstName").style.borderColor = "green";
            document.getElementById("validateSign5").innerHTML = "✅";
            return fName;
        }
        return;
 }
 function lastNameVerification(){
    //blank
    let blankInput = /^\s*$/;
    //No space
    let whiteSpace =/\s/;
    let lName = document.getElementById("lastName").value;
    let valid = true;
         //last name blank condition
         if (blankInput.test(lName)){
            document.getElementById("lastName").value = "";
            document.getElementById("lastName").style.borderColor = "red";
            document.getElementById("lastName").placeholder= "Last name is Reuired";
            document.getElementById("validateSign4").innerHTML = "❌";
            valid =false;
        }else if(whiteSpace.test(lName)){
            document.getElementById("lastName").value = "";
            document.getElementById("lastName").style.borderColor = "red";
            document.getElementById("lastName").placeholder= "Space is not allowed";
            document.getElementById("validateSign4").innerHTML = "❌";
            valid =false;
        } else{
            document.getElementById("lastName").style.borderColor = "green";
            document.getElementById("validateSign4").innerHTML = "✅";
            return lName;
        }
 }
 function emailVerification(){
    //blank
    let blankInput = /^\s*$/;
   //Email regex
    let emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let email = document.getElementById("emailAddress").value;
    let valid = true;
         //email blank condition
         if(!emailValidation.test(email)){
            document.getElementById("emailAddress").value = "";
            document.getElementById("emailAddress").style.borderColor = "red";
            document.getElementById("emailAddress").placeholder= "Not a valid email address";
            document.getElementById("validateSign3").innerHTML = "❌";
            valid =false;
        } else if(blankInput.test(email)){
            document.getElementById("emailAddress").value = "";
            document.getElementById("emailAddress").style.borderColor = "red";
            document.getElementById("emailAddress").placeholder= "Email Address Required";
            document.getElementById("validateSign3").innerHTML = "❌";
            valid =false;
        }else{
            document.getElementById("emailAddress").style.borderColor = "green";
            document.getElementById("validateSign3").innerHTML = "✅";
            return email;
        }
 }
 function ageVerification(){
    let blankInput = /^\s*$/;
  //number range
    let numberRange = /^(0|[1-9][0-9]?|1[01][0-9]|120)$/;
   let age = document.getElementById("age").value;
   let valid = true;
         //age blank condition
         if (blankInput.test(age)){
            document.getElementById("age").value = "";
            document.getElementById("age").style.borderColor = "red";
            document.getElementById("age").placeholder= "Age is Reuired";
            document.getElementById("validateSign2").innerHTML = "❌";
            valid =false;
        }else if(!numberRange.test(age)){
            document.getElementById("age").value = "";
            document.getElementById("age").style.borderColor = "red";
            document.getElementById("age").placeholder= "Wrong age";
            document.getElementById("validateSign2").innerHTML = "❌";
            valid =false;
        } else{
            document.getElementById("age").style.borderColor = "green";
            document.getElementById("validateSign2").innerHTML = "✅";
            return age;
        }
 }
 function postalCodeVerification(){
    let blankInput = /^\s*$/;
    //number range
    let postalCodeValidation = /^[ABCEGHJ-NPRSTVXY]\d[A-Z] \d[A-Z]\d$|^[ABCEGHJ-NPRSTVXY]\d[A-Z]\d[A-Z]\d$/;
      let postalCode = document.getElementById("postalCode").value.trim();
      let valid =true;
           //postal code blank condition
           if (blankInput.test(postalCode)){
              document.getElementById("postalCode").value = "";
              document.getElementById("postalCode").style.borderColor = "red";
              document.getElementById("postalCode").placeholder= "Postal code is Reuired";
              document.getElementById("validateSign1").innerHTML = "❌";
           valid = false;
          }else if(!postalCodeValidation.test(postalCode)){
              document.getElementById("postalCode").value = "";
              document.getElementById("postalCode").style.borderColor = "red";
              document.getElementById("postalCode").placeholder= "Wrong postal code";
              document.getElementById("validateSign1").innerHTML = "❌";
           valid = false;
          } else{
              document.getElementById("postalCode").style.borderColor = "green";
              document.getElementById("validateSign1").innerHTML = "✅";
              return postalCode;
          }
   }
   function phoneVerification(){
    let blankInput = /^\s*$/;
    //phone regex format 000 000 0000 0000000000 000-000-0000
    let phoneNumValidation = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    let contactNumber = document.getElementById("contact").value;
    let valid = true;
           //phone number blank condition
           if (blankInput.test(contactNumber)){
              document.getElementById("contact").value = "";
              document.getElementById("contact").style.borderColor = "red";
              document.getElementById("contact").placeholder= "Phone number is Reuired";
              document.getElementById("validateSign").innerHTML = "❌";
           valid = false;
          }else if(!phoneNumValidation.test(contactNumber)){
              document.getElementById("contact").value = "";
              document.getElementById("contact").style.borderColor = "red";
              document.getElementById("contact").placeholder= "Wrong number";
              document.getElementById("validateSign").innerHTML = "❌";
           valid = false;
          } else{
              document.getElementById("contact").style.borderColor = "green";
              document.getElementById("validateSign").innerHTML = "✅";
              return contactNumber;
          }
   }

//    api call
const apiKey = "552ede3c087c5810a2bbbf22dfea5b8c";

async function getWeather(city){

    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        if(response.status === 200){
            const data = await response.json();
            let {main:{temp},weather:[icon],weather:[description]} = data;
            let toCelsious = (temp - 273.15).toFixed(2);
            //the temp is in Kelvin and we converted it to celsious
            $('#temperature').html(`${toCelsious}°C`);
            document.getElementById("myIcon").src = `https://openweathermap.org/img/wn/${icon.icon}@2x.png`;
            $('#weatherDesc').html(`${description.description}`)
        }

    }catch (error) {
        document.getElementById("temperature").textContent = "Failed to load weather data.";
    }
}

getWeather("Cartagena");


//widget js code

const myRooms = [
    {
        type:'Standard',
        price:200
        
    },
    {
        type:'Double',
        price:300
    },
    {
        type:'Penthouse',
        price:400
    }
]

$('#cardHere').html(`

<div class="card w-100" id="myCardWidget">
  <div class="aboutSectTextOther card-header">
    Book Your Room
  </div>
  <div class="card-body">
    <h5 class="aboutSectTextOther card-title">Booking Widget</h5>  
    <form>
    <div class="input-group mb-3">
  <span class="aboutSectTextOther text-dark input-group-text" id="basic-addon1">Arrival & Departure</span>
  <input type="text" class="form-control" id="arrival" placeholder="click here">
  <input type="text" class="form-control" id="departure" placeholder="click here">
  </div>
  <p class="aboutSectTextOther">Select Room Type</p>
  <div class="input-group mb-3">
   <input type="radio" class="btn-check" name="options-base" id="standard" autocomplete="off">
    <label class="aboutSecTextOther btn" for="standard">Standard</label>

    <input type="radio" class=" btn-check" name="options-base" id="double" autocomplete="off">
    <label class="aboutSecTextOther btn" for="double">Double</label>

    <input type="radio" class=" btn-check" name="options-base" id="penthouse" autocomplete="off">
    <label class="btn aboutSecTextOther" for="penthouse">Penthouse</label>
  </div>
    <button type="submit" class=" btn offBtn " id="bookBtn">Book Room</button>
    <button type="submit" class="aboutSectTextOther btn offBtn " id="cancelBtn">Cancel Room</button>
</div>
`) 

//hover effect on room types
$('label').hover(function(){
    $(this).css({
        border: 'green solid 2px',
        color: 'white'
    })
},
function(){
    $(this).css({
        border: '',
        color: ''
    })     
})

    //adding date widget to the arrival and departure inputs
    $('#arrival').datepicker({
        dateFormat: 'yy-mm-dd',
        //from todays date
        minDate: 0
    })
    $('#departure').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
    })
    //calculating the days of stay
    const dateCalc = ()=>{
        //getting the values
        let arrival = $('#arrival').val();
        let departure =  $('#departure').val();
        let differenceDay = 0;
        //if arrival and departure are selected
       if(arrival && departure){
        //Putting them in date obj
        let arrivalDate = new Date(arrival); 
        let departureDate = new Date(departure);
        //getting the absoulte values(positve numbers) since we can get negative numbers if departure
        // is bigger than arrival
        let differenceMil = Math.abs(arrivalDate - departureDate);
        //calculating a day by mmil
        differenceDay = differenceMil / (1000 * 60 * 60 * 24);
       }
       
       return differenceDay;
    }
        $('#bookBtn').on('click', function(event) {
            event.preventDefault();
            // clear the previous booking info after changing the dates and room types
            $('#results').html('');
            
            // Calculate the length of stay
            let lengthOfStay = dateCalc();
        
            // Get the selected room type with the ids
            let selectedRoomType = $('input[type="radio"]:checked').attr('id');
        
            if (selectedRoomType) {
                // Find the selected room in the myRooms array
                let selectedRoom = myRooms.find(room => room.type.toLowerCase() === selectedRoomType.toLowerCase());
                
                if (selectedRoom && lengthOfStay > 0) {
                    // Calculate the total cost
                    let totalCost = selectedRoom.price * lengthOfStay;
                    
                    // insert the modal content
                    $('#results').html(`
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="aboutSectexts modal-title fs-5" id="staticBackdropLabel">Booked</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <p class="aboutSectexts" id="numberOfRoomsAvailable"><span style = "color:green;">There are ${resort.cancelRoom()}/${resort._rooms} rooms booked</span></p>
                                        <p class="aboutSecTextOther" id="hotelRoomType">Room: ${selectedRoom.type}</p>
                                        <p class="aboutSecTextOther">Price: $${selectedRoom.price}/Night</p>
                                        <p class="aboutSectexts" id="lengthOfStay">Length of Stay: ${lengthOfStay} days</p>
                                        <p class="aboutSectexts">Total Cost: $${totalCost}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-warning aboutSectexts" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);
                    
                    // Initialize the modal
                    const myModal = new bootstrap.Modal($('#staticBackdrop'));
                    myModal.show();
                }
            }
        });

    //cancel btn listener and decrement the number of rooms when cancelled
    $('#cancelBtn').on('click', (event) => {
        event.preventDefault();
        $('#staticBackdropLabel').html('Cancelled');
        // Show the updated room count
        $('#numberOfRoomsAvailable').html(`
            <span style="color:green;">There are ${resort.bookedRoom()}/${resort._rooms} rooms booked</span>
        `);
        $('#lengthOfStay').hide();
        $('#hotelRoomType').hide();
        
        // Reopen the modal with updated info
        const myModal = new bootstrap.Modal($('#staticBackdrop'));
        myModal.show();
    });
    

    //lab 6 code hotel rooms class
    class Hotel{
        roomTypes = ["Single","Double","Suite"];
        swimmingPool = true;
        airportShuttle = false;
        restaurants = [["Donde La Arepa", "Colombian"], ["Casa Ramen", "Japanese"], ["Pizza Hermosa", "Italian"]];
        
        constructor (name, city,rooms,booked,gym){
            this._name = name;
            this._city = city;
            this._rooms = Number(rooms);
            this._booked = booked;
            this._gym = gym;
        }
        //setters and getters for the constructor properties
        set name(hotelName){
            this._name = hotelName;
        }
        get name(){
            return this._name;
        }
        //city
        set city(cityName){
            this.city = cityName;
        }
        get city(){
            return this._city;
        }
        //rooms
        set rooms(numRooms){
            this._rooms = numRooms;
        }
        get rooms(){
            return this._rooms;
        }
        // booked
        set booked(bookedRoom){
            this._booked = bookedRoom;
        }
        get booked(){
            return this._booked;
        }
        //gym
        set gym(hasGym){
            this._gym = hasGym;
        }
        get gym(){
            return this._gym;
        }
        //calculating the remaining rooms after booking
        bookedRoom(){
            if(this._booked < this._rooms){
                this._booked +=1;
            }
            let remainingRooms = this._rooms - this._booked;
            return remainingRooms;
        }
        //calculating the remaining rooms after cancellations
        cancelRoom(){
            if(this._booked > 0){
                this._booked -= 1;
            }
            let remainingRooms = this._rooms - this._booked;
            return remainingRooms;
        }
    }

    const hotel = new Hotel("Marriot","Vancouver",40,25,true);

    //after cancellation button press
    document.getElementById("cancelBtn").addEventListener("click",function(){
        document.getElementById("totalRooms").innerHTML = "";
        document.getElementById("totalRooms").innerHTML = 
         `<span style = "color:green;">Booking cancelled <br>There are ${hotel.cancelRoom()}/${hotel._rooms} rooms available</span>`;
    });
    
     //swimming pool
    document.getElementById("hasPool").innerHTML =
     `<span style = "font-weight :bold;">Hotel has a swimming pool? </span> ${hotel.swimmingPool}`;

     let numberOfRes = hotel.restaurants.length;
     document.getElementById("displayRestNum").innerHTML = `<span style = "font-weight :bold;">Hotel has ${numberOfRes} restaurants each with different themes:</span>`;
     //lising the restaurants in 3 ordered lists
    const [rest1,rest2,rest3] = hotel.restaurants;
    for(let item of hotel.restaurants){
        if(item == rest1){
            //adding a theme to the first element using splice
        rest1.splice(1,0,`<span style = "font-weight:bold;">coffee bean artwork and cozy seating.</span>`)
            document.querySelector(".res1").innerHTML = `<span style = "font-weight:bold;">${rest1}</span>`;
        } else if(item == rest2){
            rest2.splice(1,0,`<span style = "font-weight:bold;">minimalist Japanese design</span>`)
            document.querySelector(".res2").innerHTML = `<span style = "font-weight:bold;">${rest2}</span>`;
        } else{
            rest3.splice(1,0,`<span style = "font-weight:bold;">Rustic and Romantic</span>`);
            document.querySelector(".res3").innerHTML = `<span style = "font-weight:bold;">${rest3}</span>`;
        }
    }
        
    //Child class
    class Resort extends Hotel{
        constructor(name,city,rooms,booked,resortType,beachFront,shuttle){
            super(name,city,rooms,booked);
            this._resortType = resortType;
            this._beachFront = beachFront;
            this._shuttle = shuttle;
            
        }

        // getter and setters
        set resortType(typOfResort){
            this._resortType = typOfResort;
        }
        get resortType(){
            return this._resortType;
        }
        //beach front setter getter
        set beachFront(beachFront){
            this._beachFront = beachFront;
        }
        get beachFront(){
            return this._beachFront;
        }
        //kid club setter and getter
        set shuttle(shuttle){
            this._shuttle = shuttle;
        }
        get shuttle(){
           return this._shuttle;
        }
    }
     const resort = new Resort("El Paraiso Complejo","Isla Palma",9,9,"Isla Palma Eco Resort",true,true);
     //returning the if the beach front is true
     $("#hasBeach").html (`<span style = "font-weight:bold;">Does it have a beach?</span> ${resort.beachFront}`);
     //used a parent attribute that's false here
     $("#hasShuttle").html (`<span style = "font-weight:bold;">Does it have shuttle?</span> ${resort.shuttle}`);

//third section amenties

//object array for different rooms

$('#thirdSec').append('<img class="secBack w-100" src="./includes/images/pic2.jpg" alt="">');
let hotelRooms = [
    {
      type: "Standard",
      features:"Single Room With a Bed",
      price: 159,
      pictures:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      type: "Double",
      features:"Double Room With a Bed",
      price: 229,
      pictures: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
    },
    {
      type: "Penthouse",
      features:"King Size Bed <br> Bar <br> Jacuzzi",
      price: 359,
      pictures: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  hotelRooms.forEach(room => {
    //creating a div
    $('#amenities').append(`<div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${room.pictures}" class="img-fluid rounded-start h-100" >
          </div>
          <div class="col-md-8 roomInfoCss">
            <div class="card-body">
              <h5 class="aboutSectexts card-title theRoomTypeText">${room.type}</h5>
              <hr>
              <p class="aboutSecTextOther card-text price"><small class="">${room.features}</small></p>
              <p class="aboutSecTextOther card-text thePrice">$${room.price}</p>
            </div>
          </div>
        </div>
      </div>`);
      $('.roomInfoCss').css({
       
        background:"rgb(16 15 15)",
        "color":"white"
      })
  });

  let date = new Date().getFullYear();
  $("#footerDate").html(`COPYRIGHT ${date}`);
