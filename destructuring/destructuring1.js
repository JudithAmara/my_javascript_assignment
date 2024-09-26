const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };
  
  const { name: fullName, age: personAge } = person;
  
  console.log(fullName); // Output: John
  console.log(personAge); // Output: 30
  