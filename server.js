import express from "express"
const app = express (

) 
app.get(
    "/",(
        req,res
    ) =>{
        res.json(
            {
                "name" :"sachin",
                "age" : "22",
                "location" : "hyderabad"
                
            }
        )
    }
        
    
)
app.listen(
    3000
)

