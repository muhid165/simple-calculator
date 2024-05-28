import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();


const pool = mysql.createPool({             // pool == connections of connection to the database 
    host: process.env.MYSQL_HOST,           //'localhost',
    user: process.env.MYSQL_USER,           //'root',
    password: process.env.MYSQL_PASSWORD,   //'rootPassword',
    database: process.env.MYSQL_DATABASE,   //'notes_app',
}).promise();


// const row1 = result[0];



async function getNotes() {                     // This function will return all the notes in the notes table !!
    const [rows] = await pool.query(("SELECT * FROM notes"));
    return rows;
};


async function getOneNote(id) {
    const [rows] = await pool.query((`
    SELECT * FROM notes
    where id = ${id};

    `));
    return rows[0];               // rows[0] returns only the first element of the array not an array of the object 
};
// const notes = await getOneNote(1);


async function createNote(title, contents){
    const [result] = await pool.query((`
    insert into notes (title, contents)
    values 
    ('${title}','${contents}');                                 
    `));                                                    //(${title},${contents});
    
    const newID = result.insertId
    return getOneNote(newID);
}

let ttl = "note4";
let cnts = "A Fourth Note";
const result = await createNote(ttl,cnts);
console.log(result);