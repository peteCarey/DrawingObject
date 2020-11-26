const names = [
  { firstname: "Jon", lastname: "Snow" },
  { firstname: "Eddard", lastname: "Stark" },
  { firstname: "Gregor", lastname: "Clegane" },
  { firstname: "Cersei", lastname: "Lannister" },
  { firstname: "Melisandre" },
  { firstname: "Daenerys", lastname: "Targaryen" },
  { firstname: "Drogo" },
  { firstname: "Margaery", lastname: "Tyrell" },
  { firstname: "Tyrion", lastname: "Lannister" },
  { firstname: "Arya", lastname: "Stark" },
  { firstname: "Shae" },
  { firstname: "Varys" },
];
  var namesArray = Array.from(names);
  arrayLength = namesArray.length;
  for (i = 0; i < arrayLength; i++){
    if(namesArray[i].lastname == undefined ){
      var newArray = namesArray[i].firstname;
      console.log(newArray);
    }
  }
 

