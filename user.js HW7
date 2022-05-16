let users;

class User {
  static async injectDB(conn) {
    users = await conn.db("Newdatabase").collection("users")
  }

  static async register(username, password,name,phonenumber,staffnumber) {

   // TODO: Check if username exists
  return users.findOne({        
  
   'username': username,    
   }).then(async user =>{
  if (user) {
   if ( user.username == username )
   {
    return "username already existed"
   }
   //check staff number exist
   else if (user.staffnumber==staffnumber)
   {
     return "staff number existed"
   }
  }
  else
  {
   // TODO: Save user to database
   await users.insertOne({      
    'username' : username,
    'password' : password,
    'name': name,
    'phone number': phonenumber,
    'staff number': staffnumber,
    
   })
   return "new staff registered"
  }
   }) 
  }
 
  static async login(username, password) {
   // TODO: Check if username exists
   return users.findOne({        
  
   'username': username   
   }).then(async user =>{
   // TODO: Validate password
  if (user) {
    
    if(user.password!=password){
      return "invalid password"
    }
    else{
   
    return "login successful"
    }
  }
  else
  {
   return "No such document"
  }
   })
  }
 }
 
 module.exports = User;
