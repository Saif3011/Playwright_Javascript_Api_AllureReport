const { test, expect } = require('@playwright/test');

var idUser;
//Using request as fixture , we can perform Api testing
test('Get User', async ({ request }) => {
const response =await request.get('https://reqres.in/api/users?page=2')
console.log(await response.json());
expect(response.status()).toBe(200)


    
})
test('Create User', async ({ request }) => {
  const response =await request.post('https://reqres.in/api/users/', {
    data :{
        "name" :"saif",
        "job":"Senior Automation tester"
    },
    headers:{
        "Accept":"application/json"
    }
  }) ;
  //console.log(await response.json());
  //expect(response.status()).toBe(201)
var res =await response.json()
idUser=  res.id
console.log(await idUser);


})
test('Update User', async ({ request }) => {
    const response =await request.put('https://reqres.in/api/users/'+idUser, {
        data :{
            "name" :"saif",
            "job":"Senior Automation tester1"
        },
        headers:{
            "Accept":"application/json"
        }
      }) ;
      console.log(await response.json());
      expect(response.status()).toBe(200)
})
test('Delete User', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/'+idUser)
    expect(response.status()).toBe(204)

})