  //creating a JSON for storing our data
  var data = [
    {"career":"Computer Engineer",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Computer Engineer",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Electrical Engineer",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Civil Engineer",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Data Scientist",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Data Scientist",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Data Scientist",
      "mainsub":"maths",
    "secondsub":"c/e",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Data Scientist",
      "mainsub":"maths",
    "secondsub":"c/e",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Statistician",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Statistician",
      "mainsub":"maths",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Entrepreneur",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"no"},
    {"career":"Entrepreneur",
      "mainsub":"maths",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Teacher",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Teacher",
      "mainsub":"maths",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Artificial Intelligence and Machine Learning Engineer",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Artificial Intelligence and Machine Learning Engineer",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Chartered Accountant",
      "mainsub":"maths",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Architect",
      "mainsub":"maths",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Architect",
      "mainsub":"maths",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Teacher",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Doctor",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Doctor",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Dentist",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Pharmacist",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Food Technologist",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Food Technologist",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"abroad"},
    {"career":"Entrepreneur",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Clinical Coder",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Health Care Analyst",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Health Care Analyst",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Veterinary Doctor",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Nutritionist",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Psychiatrist",
      "mainsub":"science",
    "secondsub":"p/c",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Accountant",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Accountant",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Chartered Accountant",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Teacher",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Entrepreneur",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Stock Broker",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Stock Broker",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Company Secretary",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Actuarist",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Web Developer",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Web Developer",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Banker",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Financial Analyst",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Financial Analyst",
      "mainsub":"commerce",
    "secondsub":"c/e",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Lawyer",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Lawyer",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Teacher",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"IAS",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"IPS",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Psychologist",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Psychologist",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Graphic Designer",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"yes",
    "highpay":"yes",
    "country":"india"},
    {"career":"Graphic Designer",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"yes",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Fashion Designer",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Fashion Designer",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"abroad"},
    {"career":"Historian",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    {"career":"Archaeologist",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"yes",
    "country":"india"},
    {"career":"Economist",
      "mainsub":"arts",
    "secondsub":"other",
    "computer":"no",
    "highpay":"no",
    "country":"india"},
    ];
      //defining a function that executes when the form is submitted
      function MyFunction(){
    
      //getting values from the from questions
      mainsub= document.getElementById("firstquestion").value;
      secondsub= document.getElementById("secondquestion").value;
      computer=document.getElementById("thirdquestion").value;
      highpay=document.getElementById("fourthquestion").value;
      country=document.getElementById("fifthquestion").value;
    
       // resets the DOM element to where we want to print the result
      document.getElementById("printanswer").innerHTML = "";
      
    //for loop to iterate through and read the JSON
     for (i=0; i<data.length; i++) {
      //using if statements to check if the data entries in the JSON document matches the values chosen in the form
       if (mainsub == data[i].mainsub){
          if (secondsub == data[i].secondsub){
            if (computer == data[i].computer){
              if (highpay == data[i].highpay){
                if (country == data[i].country){
                   // use the += here to append to the element for each iteration of the loop, rather than replace
                  document.getElementById("printanswer").innerHTML += data[i].career +"<br/>" ;
                }
              }
            }
          }
        }
      } 
    }
    
    