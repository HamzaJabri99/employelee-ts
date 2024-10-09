import  express  from "express";
const app = express();
const port = 3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome to employees CMS App ✨')
})
app.listen(port,()=>{
console.log(`{listening to ${port})`);
})
