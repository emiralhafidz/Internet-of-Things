import mysql from 'mysql'

export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_skripsi'
});

db.connect((err)=>{
    if(err){
        console.log('Database tidak terhubung')
    }
    else{
        console.log('Database terhubung')
    }
})
