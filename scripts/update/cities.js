db.people.update(
  { name:"Boston"},
    {
      $set:
        {population:1234567}
    }
)
