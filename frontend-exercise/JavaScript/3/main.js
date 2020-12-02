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

/*
Title formatting rules:
For a character with a single title: `King of the Castle Mark Zuckerberg`
For a character with more than one title: `King of the Castle and Watcher of People Mark Zuckerberg`
Optionally, for characters with more than two titles: `King of the Castle, Watcher of People and Brogrammer Mark Zuckerberg`
*/

console.table(names);
arrayLength = names.length;
const charTitles = [];

for (i = 0; i < arrayLength; i++) {
  names.sort(function (a, z) {
    if (a.firstname < z.firstname) {
      return -1;
    }
    if (a.firstname > z.firstname) {
      return 1;
    }
    return 0;
  });

  for (i = 0; i < arrayLength; i++) {
    if (names[i].lastname == undefined) {
      var str = String(names[i].lastname);
      var res = str.replace(undefined, " ");
      names[i].lastname = res;
    }

    charTitles[i] = names[i]["titles"];

    text = String(charTitles[i]);
    var t = 0;
    text = text.replace(/,/g, function (match) {
      t++;
      return t === 2 ? " and " : match;
    });

    if (text == "undefined") {
      var res = text.replace(undefined, " ");
      text = res;
    }
    console.log(text + " " + names[i].firstname + " " + names[i].lastname);
  }
}
