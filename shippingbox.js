const express = require('express');
const app = express()

app.use(express.json())
const items =[];

app.get("/",(req,res) =>{
    res.send("Shipping Box API")
})

app.get("/item",(req,res) =>{
    res.send("Shipping Items")
})


///create a shippingbox record
app.post('/items',(req,res) => {
    try{
        const item = req.body;
        items.push(item)
        res.send(items)
    }
    catch(error){
        res.send(error)
    }
    
})


//update shippingbox record
app.put("/items/:id",(req,res) => {
    try{
    const id = req.params.id;
    const index = items.findIndex((item)=> item.id == id);
    items[index]=req.body;
    res.send(items);
} 
catch(error){
    res.send(error)
}
});
//read shipping box records

app.get('/items',(req,res) => {
    try{
        res.send(items)
    } catch(error) {
        res.send(error)
    }

    })
//delete record

    app.delete("/items/:id",(req,res) =>{
        try{
            const index = items.findIndex((item) => item.id == req.params.id);
            items.id == req.params.id;
            items.splice(index,1);
            res.send("Deleted");
        }
        
        catch(error){
            res.send(error);
        }
    });
    
    ///read shiiping box record with id
    app.get('/items/:id',(req,res) => {
        try{
        const item =items.find((item) => item.id == req.params.id);
        res.send(item);
        } catch(error){
            res.send(error)
        }
    })
    
    


app.listen(4000,()=> {
    console.log("Server is running on port 4000")
})

