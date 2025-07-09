const user={
    username:'sanya',
    price:99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        
    }
}
//console.log(typeof user.welcomeMessage())
 user.welcomeMessage()
 user.username='sam'
 user.welcomeMessage()
 //console.log(this)
