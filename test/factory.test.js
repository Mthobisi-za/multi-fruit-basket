const {Pool} = require("pg");
const assert = require("assert");

var connectionString = process.env.DATABASE_URL;
var pool;
if(connectionString){
    pool = new Pool({connectionString, ssl: {rejectUnauthorized: false}});
} else{
    pool = new Pool({
        user: "postgres",
        port: 5432,
        database: "users",
        password: "mthobisi",
        ssl: false
    })
}
const factory = require("../js/database");
describe("Factory Function Tests", async ()=>{
    beforeEach( async ()=>{
        await pool.query("")
        //delete from table
    });
    it("should be able to insert new basket to database", async function(){
        var useFactory = factory(pool);
        useFactory.insertFruitToBasket("fresh", "apple", 5, 10);
        assert.deepEqual(1,await useFactory.getData);
    })
    after(async()=>{
        //await pool.end(); 
    })
})
