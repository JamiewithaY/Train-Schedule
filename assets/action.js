

// Initialize Firebase
   var config = {
    apiKey: "AIzaSyANsmAbDL9GZfs1F2yWgDgXrZJenlGOC0k",
    authDomain: "train-schedule-8a736.firebaseapp.com",
    databaseURL: "https://train-schedule-8a736.firebaseio.com",
    projectId: "train-schedule-8a736",
    storageBucket: "train-schedule-8a736.appspot.com",
    messagingSenderId: "754210105641"
  };
    firebase.initializeApp(config);

    //creating a variable to reference the database
    var database = firebase.database();

    //calculations for total months worked and total billed
    //take the first train time and add the frequency= next arrival time
    



    // function to create the new row from input form
    function addRow(name, destination, firstTrain, freq) {


      
      // var nextArrival = (firstTrain + freq); figure out how to add these together
      var minsAway = ("500000000"); // not sure what they want here

     

      var newRow = $("<tr>").append( $("<td>").text(name) )
                            .append( $("<td>").text(destination) )
                            .append( $("<td>").text(freq) )
                            // .append( $("<td>").text(nextArrival))
                            .append( $("<td>").text(minsAway) )
                            
      $("tbody").append(newRow);

   //pushing the form data up to firebase
        database.ref().push({
          "TrainName": name,
          "Destination" : destination,
          "FirstTrain": firstTrain,
          "Frequency": freq
        })

    };


 // submit button to push the data up to the train schedule table
$("#submit-button").on("click", function(event){
	 event.preventDefault();

	var name = $("#name").val().trim();
	var destination = $("#destination").val().trim();
	var firstTrain = $("#firstTrain").val();   
	var freq = $("#freq").val();
  
  

  console.log(name);
  console.log(destination);
  console.log(firstTrain);
  console.log(freq);
    

	addRow(name, destination, firstTrain, freq);
	

});