import fs from "fs"
import {randomUUID} from "crypto"
let alluser = []
fs.readFile("UserData.json","utf-8",(err,data)=>{
      if(err){
        console.log(err)
      }else{
       alluser = JSON.parse(data)
      }
    })
class UserRepository{
  user =[]
  findUser(userName){
    this.user = alluser
    const findUserName = this.user.find((users)=> users.userName === userName)
    return findUserName
  }
  getUser(){
    return alluser
  }
  save(data){
  const id = randomUUID()
    alluser.push({
      ...data,
      id
    })
    this.user = alluser
    writeUser(this.user)
    return this.user
  }
  update(datas){
    this.user = datas
    writeUser(this.user)
    return this.user
  }
  
}
 function writeUser(users){
    fs.writeFile("UserData.json",JSON.stringify(users),(err)=>{
      if(err){
        console.log(err)
      }else{
        console.log("Usuario inserido")
      }
    })
  }

export  {UserRepository}