# bulk load data
mongoimport --db=mongo-crud --collection=books --type=csv --headerline --file=data/books.csv

# can also do without equals signs
# mongoimport --db mongo-crud --collection people --type csv --headerline --file data/people.csv