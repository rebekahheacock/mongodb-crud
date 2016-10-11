// insert documents
// surname,given_name,gender,height,weight,bornOn
db.people.insert([{
  surname: "Potter",
  given_name: "Harry",
  gender: "",
  height: 66,
  bornOn: "1998-10-11"
  },
  {
  surname: "Horn",
  given_name: "Jeffrey",
  gender: "m",
  height: 72,
  weight: 190,
  bornOn: "1985-01-01"
}]);