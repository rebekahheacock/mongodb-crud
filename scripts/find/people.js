// retrieve person documents
db.people.find({surname: "Payne", given_name: "Mason"});

// db.people.find({height: { $gt: 65 }});