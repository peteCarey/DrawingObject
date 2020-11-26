const names = [
  { firstname: "Jon", lastname: "Snow", titles: ["King in the North"] },
  {
    firstname: "Eddard",
    lastname: "Stark",
    titles: ["Lord of Winterfell", "Warden of the North"],
  },
  { firstname: "Gregor", lastname: "Clegane", titles: ["Ser"] },
  {
    firstname: "Cersei",
    lastname: "Lannister",
    titles: [
      "Lady of Casterly Rock",
      "Queen of the Andals and the First Men",
      "Protector of the Seven Kingdoms",
    ],
  },
  { firstname: "Melisandre", titles: ["The Red Woman", "The Red Witch"] },
  {
    firstname: "Daenerys",
    lastname: "Targaryen",
    titles: ["Mother of Dragons", "Breaker of Chains"],
  },
  { firstname: "Drogo", titles: ["Kahl"] },
  { firstname: "Margaery", lastname: "Tyrell", titles: ["Queen Consort"] },
  { firstname: "Tyrion", lastname: "Lannister", titles: ["Hand of the Queen"] },
  { firstname: "Arya", lastname: "Stark", titles: ["Princess"] },
  { firstname: "Shae" },
  { firstname: "Varys", titles: ["Master of Whisperers"] },
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
  // console.log(namesArray[i]); 
  var fullName =namesArray[i].titles + " " + namesArray[i].firstname + " " + namesArray[i].lastname;
  console.log(fullName);
  // console.log(namesArray[i].titles);
  var Titles = new Array( namesArray[i].titles);
  console.log(Titles);
  
  var res = Titles.toString();
  console.log(res);
  // res = Titles.replace(",","and");
  // console.log(res);
  var pos = res.indexOf(",");
  console.log(pos);

}
console.log(Titles.length);
var x;
for (j in namesArray.titles){
  x +=  namesArray.titles[j].Array
  console.log(x);
  for (k in namesArray.titles[j].Array ){
    x += namesArray.titles[j].Array[k];
    console.log(x);
  }
}
