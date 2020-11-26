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
    }
    namesArray.sort(function(a, z){
      if(a.firstname < z.firstname) { return -1; }
      if(a.firstname > z.firstname) { return 1; }
      return 0;
  })
  console.log(namesArray);
  for (i = 0; i < arrayLength; i++){
    console.log(namesArray[i]);  
  }
 

