// update documents
db.people.update(
  {"surname": "Butts"},
  {
    $set: { "height": 84 },
  },
  { multi: true}
);
