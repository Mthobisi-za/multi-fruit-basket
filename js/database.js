module.exports = function database(pool){
    async function insertFruitToBasket(basketName, fruit, price, count){
        //get Basket id first
        var id = (await pool.query("select id from multi_fruit_basket where name = $1", [basketName])).rows
        var actualId = id[0].id;
        console.log(id)
        console.log("not id")
        //insert basket first
        await pool.query(`insert into fruit_basket_item (multi_fruit_basket_id, fruit_name, fruit_price, count)
        values($1, $2, $3, $4)`,
        [actualId, fruit, price, count])
    }
    async function getData(){
        var data = await pool.query("select * from fruit_basket_item");
        console.log(data.rows);
        return await data.rows
    }
    return{
        insertFruitToBasket,
        getData
    }
}
