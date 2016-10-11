cursor = db.doctors.find({"specialty": "General practice"});
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}