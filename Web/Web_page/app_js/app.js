"use strict"

import express from 'express'
import mysql from 'mysql2/promise'
import fs from 'fs'

const app = express()
const port = 5500


app.use(express.json())
app.use(express.static('./public'))

3
async function connectToDB() //la conexion a la base de datos es una promesa
{
    return await mysql.createConnection({
        host:'localhost',
        user:'arepita1',
        password:'Arepita1',
        database:'vg_db'
    })
}

app.get('/', (request,response)=>{
    fs.readFile('./public/index-1.html', 'utf8', (err, html)=>{
        if(err) response.status(500).send('There was an error: ' + err)
        console.log('Loading page...')
        response.send(html)
    })
})

app.get('/api/users', async (request, response)=>{ //definir un endpoint
    let connection = null
    //se hace la conexion y un query y después cierra la conexion

    try
    {
        connection = await connectToDB()
        const [results, fields] = await connection.execute('select * from User')
        //en execute le estamos pidiendo q selecciones toda la tabla de users
        //sigue siendo una promesa entonces usamos await
        //results es un array de objetos, cada objeto es un usuario, viene la info por query
        //fields es un array de objetos, cada objeto es un campo de la tabla
        console.log(`${results.length} rows returned`)//muestra los resultados en consola
        response.json(results)
        //formato json, cuyos atributos serán los nombres de columnas y los valores serán la info de las filas
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally //siempre se ejecuta con o sin error, cierra la conexion
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.get('/api/users/:id', async (request, response)=> // ya le manda un parámetro
{
    let connection = null

    try
    {
        connection = await connectToDB()

        const [results_user, _] = await connection.query('select * from User where identifier= ?', [request.params.id])
        
        console.log(`${results_user.length} rows returned`)
        response.json(results_user)
        //ya no manda una sentencia de sql sino un query
        //connection.query me permite pasar parámetros
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.post('/api/users', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into User set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.post('/api/users/login', async (request, response) => {
    const { username, password } = request.body;
  
    let connection = null;
  
    try {
      connection = await connectToDB();
  
      const [results] = await connection.query('SELECT * FROM User WHERE username = ? AND password = ?', [
        username,
        password
      ]);
  
      if (results.length > 0) {
        response.json({ message: 'Inicio de sesión exitoso' });
      } else {
        response.status(401).json({ error: 'Credenciales inválidas' });
      }
    } catch (error) {
      response.status(500).json({ error: 'Error en el servidor' });
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });
  
app.get('/unity', (request,response)=>{
    fs.readFile('./public/MealtimeMayhem_NoAPIbuild/index.html', 'utf8', (err, html)=>{
        if(err) response.status(500).send('There was an error: ' + err)
        console.log('Loading page...')
        response.send(html)
    })
})


//VIEWS
app.get('/api/chef', async(request, response)=>{
    
    let connection = null;
    

    try{

        connection = await connectToDB();

        const [results] = await connection.query('select * from MostChosenEyeColors')
        //LEADERBOARD DE NIVELES
        //TOP 5 EN RELACIÓN A COMPLETION_RATE
            
            console.log("Sending data correctly.")
            response.status(200)
            response.json(results)
        }

        
    
    catch(error)
    {
        console.log(error)
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        connection.end()
    }
}) 

app.get('/api/chef2', async(request, response)=>{
    
    let connection = null;
    

    try{

        connection = await connectToDB();

        const [results] = await connection.query('select * from MostChosenSkinColors')
        //LEADERBOARD DE NIVELES
        //TOP 5 EN RELACIÓN A COMPLETION_RATE
            
            console.log("Sending data correctly.")
            response.status(200)
            response.json(results)
        }

        
    
    catch(error)
    {
        console.log(error)
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        connection.end()
    }
}) 

//ENDPOINT PARA La VIEW DE TopUserByPoints
app.get('/api/top', async(request, response)=>{
    
    let connection = null;
    

    try{

        connection = await connectToDB();

        const [results] = await connection.query('select * from TopUsersByPoints')
        //LEADERBOARD DE NIVELES
        //TOP 5 EN RELACIÓN A COMPLETION_RATE
            
            console.log("Sending data correctly.")
            response.status(200)
            response.json(results)
        }

        
    
    catch(error)
    {
        console.log(error)
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        connection.end()
    }
}) 

///ENDPOINT PARA LA VIEW DE MostChosenNationalities
app.get('/api/nationality', async(request, response)=>{
    
    let connection = null;
    

    try{

        connection = await connectToDB();

        const [results] = await connection.query('select * from MostChosenNationalities')
        //LEADERBOARD DE NIVELES
        //TOP 5 EN RELACIÓN A COMPLETION_RATE
            
            console.log("Sending data correctly.")
            response.status(200)
            response.json(results)
        }

        
    
    catch(error)
    {
        console.log(error)
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        connection.end()
    }
}) 

//ENDPOINT PARA VIEW DE MostChosenSkillTreeUpgrades
app.get('/api/SKTRUP', async(request, response)=>{
    
    let connection = null;
    

    try{

        connection = await connectToDB();

        const [results] = await connection.query('select * from MostChosenSkillTreeUpgrades')
        //LEADERBOARD DE NIVELES
        //TOP 5 EN RELACIÓN A COMPLETION_RATE
            
            console.log("Sending data correctly.")
            response.status(200)
            response.json(results)
        }

        
    
    catch(error)
    {
        console.log(error)
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        connection.end()
    }
}) 

//siempre borrar con where, si no borra toda la tabla
app.listen(port, ()=>
{
    console.log(`App listening at http://localhost:${port}`)
})

// -----------------------------------------------------------------------------------------
// -------------------------------- Unity endpoints ----------------------------------------
// -----------------------------------------------------------------------------------------

app.get('/unity/users', async (request, response)=>{ //definir un endpoint
    let connection = null
    //se hace la conexion y un query y después cierra la conexion

    try
    {
        connection = await connectToDB()
        const [results, fields] = await connection.execute('select * from User')
        //en execute le estamos pidiendo q selecciones toda la tabla de users
        //sigue siendo una promesa entonces usamos await
        //results es un array de objetos, cada objeto es un usuario, viene la info por query
        //fields es un array de objetos, cada objeto es un campo de la tabla
        console.log(`${results.length} rows returned`)//muestra los resultados en consola
        response.json(results)
        //formato json, cuyos atributos serán los nombres de columnas y los valores serán la info de las filas
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally //siempre se ejecuta con o sin error, cierra la conexion
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.post('/unity/signup', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into User set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})
app.get('/unity/personalization', async (request, response)=>{ //definir un endpoint
    let connection = null
    //se hace la conexion y un query y después cierra la conexion

    try
    {
        connection = await connectToDB()
        const [results, fields] = await connection.execute('select * from Personalization')
        //en execute le estamos pidiendo q selecciones toda la tabla de users
        //sigue siendo una promesa entonces usamos await
        //results es un array de objetos, cada objeto es un usuario, viene la info por query
        //fields es un array de objetos, cada objeto es un campo de la tabla
        console.log(`${results.length} rows returned`)//muestra los resultados en consola
        response.json(results)
        //formato json, cuyos atributos serán los nombres de columnas y los valores serán la info de las filas
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally //siempre se ejecuta con o sin error, cierra la conexion
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.post('/unity/personalization', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into Personalization set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.get('/unity/session', async (request, response)=>{ //definir un endpoint
    let connection = null
    //se hace la conexion y un query y después cierra la conexion

    try
    {
        connection = await connectToDB()
        const [results, fields] = await connection.execute('select * from Session')
        //en execute le estamos pidiendo q selecciones toda la tabla de users
        //sigue siendo una promesa entonces usamos await
        //results es un array de objetos, cada objeto es un usuario, viene la info por query
        //fields es un array de objetos, cada objeto es un campo de la tabla
        console.log(`${results.length} rows returned`)//muestra los resultados en consola
        response.json(results)
        //formato json, cuyos atributos serán los nombres de columnas y los valores serán la info de las filas
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally //siempre se ejecuta con o sin error, cierra la conexion
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.post('/unity/session', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        //const [results, fields] = await connection.query('insert into Session (user_id) VALUES (?)', [request.body.user_id]);
        const [results, fields] = await connection.query('insert into Session set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

// Método GET para obtener los datos de Skilltree
app.get('/unity/skilltree/:tree_id', async (request, response) => {
    let connection = null;
  
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.query('SELECT * FROM Skilltree WHERE tree_id = ?', [request.params.tree_id]);
      console.log(`${results.length} rows returned`);
      response.json(results);
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });
  
  // Método POST para insertar o actualizar datos en Skilltree
  app.post('/unity/insert/skilltree', async (request, response) => {
    let connection = null;
  
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.query('SELECT * FROM Skilltree WHERE tree_id = ?', [request.body.tree_id]);
      console.log(`${results.length} rows returned`);
  
      if (results.length > 0) {
        const skill = results[0];
        const dataToInsert = [
          skill.tree_id,
          request.body.path || skill.path,
          request.body.attack || skill.attack,
          request.body.speed || skill.speed,
          request.body.life || skill.life
        ];
  
        if (dataToInsert.some(field => field !== null && field !== '')) {
          await connection.query('REPLACE INTO Skilltree (tree_id, path, attack, speed, life) VALUES (?, ?, ?, ?, ?)', dataToInsert);
          console.log('Data inserted successfully!');
        } else {
          console.log('Data is empty. Skipping insertion.');
        }
      }
  
      response.json({ 'message': 'Data inserted correctly.', 'id': results.insertId });
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });

app.get('/unity/session/:id', async (request, response) => {
    let connection = null;
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.execute('SELECT * FROM Session WHERE user_id = ?', [request.params.id]);
      console.log(`${results.length} rows returned`);
      response.json(results);
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });

// Método POST para insertar o actualizar datos en Session

  app.get('/unity/personalization/:id', async (request, response) => {
    let connection = null;
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.execute('SELECT * FROM Personalization WHERE person_id = ?', [request.params.id]);
      console.log(`${results.length} rows returned`);
      response.json(results);
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });
  
  app.get('/unity/login/:username', async (request, response) => {
    let connection = null;
  
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.query('SELECT * FROM User WHERE username = ?', [request.params.username]);
      console.log(`${results.length} rows returned`);
      response.json(results);
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
});

app.get('/unity/ally/:id', async (request, response) => {
    let connection = null;
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.execute('SELECT * FROM Ally WHERE ally_id = ?', [request.params.id]);
      console.log(`${results.length} rows returned`);
      response.json(results);
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });

  app.get('/unity/foodtruck/:id', async (request, response) => {
    let connection = null;
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.execute('SELECT * FROM Foodtruck WHERE truck_id = ?', [request.params.id]);
      console.log(`${results.length} rows returned`);
      response.json(results);
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });

  app.get('/unity/levelscore/:id', async (request, response) => {
    let connection = null;
    try {
      connection = await connectToDB();
      const [results, fields] = await connection.execute('SELECT * FROM LevelScore WHERE score_id = ?', [request.params.id]);
      console.log(`${results.length} rows returned`);
      response.json(results);
    } catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    } finally {
      if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
      }
    }
  });
  
  app.post('/unity/personalization', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into Personalization set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})
app.post('/unity/skilltree', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into Skilltree set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})
app.post('/unity/ally', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into Ally set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})
app.post('/unity/foodtruck', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into Foodtruck set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})
app.post('/unity/levelscore', async (request, response)=>{ // se usa post porque se quiere insertar algo

    let connection = null

    try
    {    
        connection = await connectToDB()

        const [results, fields] = await connection.query('insert into LevelScore set ?', request.body)
        //request.body es un objeto que contiene los datos que se quieren insertar
        
        console.log(`${results.affectedRows} row inserted`)
        response.json({'message': "Data inserted correctly.", "id": results.insertId})
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.get('/unity/signup/last', async (request, response)=>{ //definir un endpoint
    let connection = null
    //se hace la conexion y un query y después cierra la conexion

    try
    {
        connection = await connectToDB()
        const [results, fields] = await connection.execute('select * from Personalization order by person_id desc limit 1')
        //en execute le estamos pidiendo q selecciones toda la tabla de users
        //sigue siendo una promesa entonces usamos await
        //results es un array de objetos, cada objeto es un usuario, viene la info por query
        //fields es un array de objetos, cada objeto es un campo de la tabla
        console.log(`${results.length} rows returned`)//muestra los resultados en consola
        response.json(results)
        //formato json, cuyos atributos serán los nombres de columnas y los valores serán la info de las filas
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally //siempre se ejecuta con o sin error, cierra la conexion
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

app.put('/unity/update/personalization/:id', async (request, response) => {
    let connection = null;

    try {
        connection = await connectToDB();

        const { difficulty, eyecolor, skincolor, nationality } = request.body;
        const personId = request.params.id;

        const [results, fields] = await connection.query(
        'UPDATE Personalization SET difficulty=?, eyecolor=?, skincolor=?, nationality=? WHERE person_id=?',
        [difficulty, eyecolor, skincolor, nationality, personId]
        );

        console.log(`${results.affectedRows} row(s) updated`);
        response.json({ message: 'Data updated correctly.' });
    } catch (error) {
        response.status(500).json(error);
        console.log(error);
    } finally {
        if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
        }
    }
});
app.put('/unity/update/skilltree/:id', async (request, response) => {
    let connection = null;

    try {
        connection = await connectToDB();

        const { path, attack, speed, life } = request.body;
        const treeId = request.params.id;

        const [results, fields] = await connection.query(
        'UPDATE Skilltree SET path=?, attack=?, speed=?, life=? WHERE tree_id=?',
        [path, attack, speed, life, treeId]
        );

        console.log(`${results.affectedRows} row(s) updated`);
        response.json({ message: 'Data updated correctly.' });
    } catch (error) {
        response.status(500).json(error);
        console.log(error);
    } finally {
        if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
        }
    }
});
app.put('/unity/update/ally/:id', async (request, response) => {
    let connection = null;

    try {
        connection = await connectToDB();

        const { attack, speed, life } = request.body;
        const allyId = request.params.id;

        const [results, fields] = await connection.query(
        'UPDATE Ally SET attack=?, speed=?, life=? WHERE tree_id=?',
        [attack, speed, life, allyId]
        );

        console.log(`${results.affectedRows} row(s) updated`);
        response.json({ message: 'Data updated correctly.' });
    } catch (error) {
        response.status(500).json(error);
        console.log(error);
    } finally {
        if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
        }
    }
});
app.put('/unity/update/foodtruck/:id', async (request, response) => {
    let connection = null;

    try {
        connection = await connectToDB();

        const { life } = request.body;
        const truckId = request.params.id;

        const [results, fields] = await connection.query(
        'UPDATE Foodtruck SET life=? WHERE truck_id=?',
        [life, truckId]
        );

        console.log(`${results.affectedRows} row(s) updated`);
        response.json({ message: 'Data updated correctly.' });
    } catch (error) {
        response.status(500).json(error);
        console.log(error);
    } finally {
        if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
        }
    }
});
app.put('/unity/update/levelscore/:id', async (request, response) => {
    let connection = null;

    try {
        connection = await connectToDB();

        const { level1, level2, level3 } = request.body;
        const scoreId = request.params.id;

        const [results, fields] = await connection.query(
        'UPDATE LevelScore SET level1=?, level2=?, level3=? WHERE score_id=?',
        [attack, speed, life, scoreId]
        );

        console.log(`${results.affectedRows} row(s) updated`);
        response.json({ message: 'Data updated correctly.' });
    } catch (error) {
        response.status(500).json(error);
        console.log(error);
    } finally {
        if (connection !== null) {
        connection.end();
        console.log('Connection closed successfully!');
        }
    }
});