const MongoClient = require("mongodb").MongoClient;
const User = require("./user")


describe("User Account", () => {
  let client;
  beforeAll(async () => {
    client = await MongoClient.connect(
      "mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.b5mhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true },
    );
    User.injectDB(client);
  })

  afterAll(async () => {
    await client.close();
  })

  test("New staff registration", async () => {
    const res = await User.register("Arifaiman", "1234","Arif","016768868","8")
    expect(res).toBe("new staff registered")
  })

  test("Duplicate username", async () => {
    const res = await User.register("Arifaiman", "1234","Arif","016768868","8")
    expect(res).toBe("username already existed")
  })

  test("User duplicate staff number", async () => {
    const res = await User.register("Arifaiman", "1234","Arif","016768868","8")
    expect(res).toBe("staff number existed")
  })

  test("User login invalid password", async () => {
    const res = await User.login("Arifaiman", "1234")
    expect(res).toBe("invalid password")
  })

  test("User login successfully", async () => {
    const res = await User.login("Arifaiman", "1234")
    expect(res).toBe("login successful")
  })
});
