 const accoundId = 12216632
 let accountEmail = "prisi@gmail.com"
 var accountPassword = "123"// prefer not using var beacause of log scope
 accountCity = "Jaipur"//not a good practice

 // accoundId = 2 This is not allowed as we declared accountId as constant

 accountEmail = "Something@some.com"
 accountPassword = "abc"

 console.table([accoundId,accountEmail,accountPassword, accountCity])

