class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    login(email, password) {
      if (email === this.email && password === this.password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  }
  
  class Author extends User {
    #numOfPost;
  
    constructor(email, password) {
      super(email, password);
      this.#numOfPost = 0;
    }
  
    createPost(content) {
      // add content to your DB. :)
      this.#numOfPost++;
    }
  
    getNumOfPost() {
      return this.#numOfPost;
    }
  }
  
  class Admin extends User {
    constructor(email, password) {
      super(email, password);
    }
  
    login(email, password) {
      // add extra layer of security as this is an admin account.
      const isValidAdmin = true; // we can have some 2FA type security check here.
      if (email === this.email && password === this.password && isValidAdmin) {
        console.log('Admin Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    removeUser(userId) {
      // remove this userId from your DB.
      console.log('User Removed successfully.');
    }
  }
  
  const nehal = new Author('nm@gmail.com', 'password:)');
  nehal.login('nm@gmail.com', 'password:)'); // Login Successfully
  
  const json = new Admin('jason@gmail.com', '[Object] [object]');
  json.login('jason@gmail.com', '[Object] [object]'); // Admin Login Successfully