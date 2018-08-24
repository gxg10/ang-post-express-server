function initial(){
 
  let customers = [
    {
      firstname: "Joe",
      lastname: "Thomas",
      age: 36
    },
    {
      firstname: "Peter",
      lastname: "Smith",
      age: 18
    },
    {
      firstname: "Lauren",
      lastname: "Taylor",
      age: 31
    },
    {
      firstname: "Mary",
      lastname: "Taylor",
      age: 24
    },
    {
      firstname: "David",
      lastname: "Moore",
      age: 25
    },
    {
      firstname: "Holly",
      lastname: "Davies",
      age: 27
    },
    {
      firstname: "Michael",
      lastname: "Brown",
      age: 45
    }
  ]
 
  // Init data -> save to PostgreSQL
  const Customer = db.customers;
  for (let i = 0; i < customers.length; i++) { 
    Customer.create(customers[i]);  
  }
}