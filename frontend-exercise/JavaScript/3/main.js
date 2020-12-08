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

rows = names.length;
// sort into first name order
for (i = 0; i < rows; i++) {
  names.sort(function (a, z) {
    if (a.firstname < z.firstname) {
      return -1;
    }
    if (a.firstname > z.firstname) {
      return 1;
    }
    return 0;
  });

  if (names[i].lastname == undefined) {
    var str = String(names[i].lastname);
    var res = str.replace(undefined, " ");
    names[i].lastname = res;
  }
}

for (let i = 0; i < rows; i++) {
  let items = names[i]["titles"];
  text = String(items);
  if (items != undefined) {
    for (let n = 0; n < items.length; n++) {
      if (items.length == 1) {
        console.log(text + " " + names[i].firstname + " " + names[i].lastname);
      }
      if (items.length == 2) {
        // replace only comma with the word "and"
        text = text.replace(",", " and ");
        if (n == 1) {
          console.log(
            text + " " + names[i].firstname + " " + names[i].lastname
          );
        }
      }
      if (items.length == 3) {
        // do not replace the first comma, but replace the second comma with the word "and"
        var t = 0;
        text = text.replace(/,/g, function (match) {
          t++;
          return t === 2 ? " and " : match;
        });
        if (n == 2) {
          console.log(
            text + " " + names[i].firstname + " " + names[i].lastname
          );
        }
      }
      if (items == "") {
        text = " ";
        console.log(text + names[i].firstname + " " + names[i].lastname);
      }
    }
  }

  if (items == undefined) {
    text = "";
    console.log(text + names[i].firstname + " " + names[i].lastname);
  }
}
