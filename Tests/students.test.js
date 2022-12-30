const app = require("../api"); 
const supertest = require("supertest");
const request = supertest(app);

it("gets the test endpoint", async () => {
  const response = await request.get("/api");
  expect(response.status).toBe(404);
});

var token;
describe("Register student details-> POST api/student ", () => {
  test("insert student ", async () => {
      const stuDetails= {
        name:"A0130",
        email:"hly",
        roll:"2230",
        password:"1400"
      };

      // hit the API with details.
      const res = await request.post("/api/student").send(stuDetails);
      
      console.log(res.body.accesstoken);
      token=res.body.accesstoken;
      expect(res.status).toBe(201);
  });
});


describe("ALL student details-> GET api/students ", () => {
  test(" student data ", async () => {  
      // hit the API .
      const res = await request.get("/api/students").set('Cookie', `token=${token}`);
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
  });
});


describe("Roll student detail-> GET api/student/:id ", () => {
  test(" Roll student data ", async () => {  
      // hit the API .
      const res = await request.get("/api/students/3").set('Cookie', `token=${token}`);
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toEqual(1);
       // Check data
       expect(res.body[0][0].name).toBe("asdasd    ");
       expect(res.body[0][0].email).toBe("sadd@sd   ");
       expect(res.body[0][0].roll).toBe("3         ");
       expect(res.body[0][0].password).toBe(null);
  });
});


describe("Update student details-> PUT api/student ", () => {
  test(" Update student ", async () => {
      const stuDetails= {
          name:"A0130",
          email:"hly",
          roll:"2230",
          password:"1400"
      };

      // hit the API with details.
      const res = await request.put("/api/student").set('Cookie', `token=${token}`).send(stuDetails);
      
      expect(res.status).toBe(200);
  });
});


describe("Delete student details-> DELETE api/student ", () => {
  test(" Delete student ", async () => {
      const stuDetails= {
          name:"A01314",
          email:"hly03311o",
          roll:"2200113",
          password:"140322"
      };

      // hit the API with details.
      const res = await request.delete("/api/student").set('Cookie', `token=${token}`).send(stuDetails); 
      expect(res.status).toBe(200);
  });
});
