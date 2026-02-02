MongoDB basic commands & operations

--Database commands

1. Check existing databases
   show databases
   OR
   show dbs

2. Create / Switch database
   use database_name

   Example:
   use anuragdb


--Collection commands

3. Create a collection
   (Collections are like tables in RDBMS)

   db.createCollection("collection_name")

   Example:
   db.createCollection("users")

4. View collections in current database

   show collections



--Document Structure

MongoDB stores data in the form of documents.

Example document:
{
  "name": "Spu",
  "age": 20,
  "city": "hyd"
}


--Create documents (insert)

5. Insert ONE document
   db.collection_name.insertOne(document)

   Example:
   db.students.insertOne({
     name: "Spu",
     age: 20,
     city: "hyd"
   })

6. Insert MULTIPLE documents
   db.collection_name.insertMany([doc1, doc2, ...])

   Example:
   db.students.insertMany([
     { name: "ravi", age: 20 },
     { name: "raju", age: 22 }
   ])


--Read documents

7. Read ONE document
   db.collection_name.findOne()

8. Read ALL documents
   db.collection_name.find()


--Query operations

Syntax:
db.collection_name.findOne({ field: { operator: value } })

Comparison Operators:
$eq   → Equal to (===)
$gt   → Greater than (>)
$gte  → Greater than or equal to (>=)
$lt   → Less than (<)
$lte  → Less than or equal to (<=)
$ne   → Not equal (!=)
$in   → Match values in array

Example:
db.students.find({ age: { $gt: 18 } })


--Update document

9. Update ONE document
   db.collection_name.updateOne(condition, update)

10. Update MULTIPLE documents
    db.collection_name.updateMany(condition, update)

Example:
db.students.updateOne(
  { name: "ravi" },
  { $set: { age: 22 } }
)


--Delete document

11. Delete ONE document
    db.collection_name.deleteOne(condition)

12. Delete MULTIPLE documents
    db.collection_name.deleteMany(condition)

--Embedded documents operations

Reading from embedded document:
db.collection_name.find({
  "mainField.nestedField": value
})

Example:
db.students.find({ "address.city": "hyderabad" })


--Updating embedded document:
db.collection_name.updateOne(
  condition,
  { $set: { "field.nestedField": value } }
)

--Removing embedded field:
db.collection_name.updateOne(
  condition,
  { $unset: { "field.nestedField": "" } }
)


--Array operations

--Reading from array:

1. Single element comparison
   db.collection_name.find({ arrayField: "element" })

2. Multiple elements comparison
   db.collection_name.find({
     arrayField: { $all: ["el1", "el2"] }
   })



--Update array 

Add new element to array:
db.collection_name.updateOne(
  condition,
  { $push: { field: "element" } }
)

Add multiple elements:
db.collection_name.updateOne(
  condition,
  { $push: { field: { $each: ["el1", "el2"] } } }
)


--Remove elements from array

Remove first or last element:
$pop : +1 → remove last
$pop : -1 → remove first

Example:
db.collection_name.updateOne(
  condition,
  { $pop: { field: 1 } }
)


Remove specific element:
db.collection_name.updateOne(
  condition,
  { $pull: { field: value } }
)

Remove multiple elements:
db.collection_name.updateOne(
  condition,
  { $pullAll: { field: [v1, v2, v3] } }
)


--Array of documents

Update nested field inside array of documents:

db.collection_name.updateOne(
  condition,
  { $set: { "field.index.nestedField": value } }
)

Example:
let x = [{ a: 10 }, { a: 20 }]
x[0].a   → 10
