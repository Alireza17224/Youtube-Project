const { Pool , Client } = require('pg');
const fs = require('fs');
const chalk = require('chalk');

const db = {
    
    properties : {
        
        pool : {},

        database_connected : false,


    },

    connect : async () => {

        // connect to DB

        var status = false;

        try {

            const pool = new Pool({

                host : 'localhost',
    
                user : 'postgres',
    
                database : "youtube",
    
                password : process.env.DB_PASSWORD,
    
                port : process.env.DB_PORT,
    
            })
    
            await pool.connect();
    
            db.properties.pool = pool;
    
            db.properties.database_connected = true;
    
            status = true;    

        }

        catch(error){



        }

        return status;

    },

    tables : async () => {

        try {

            const DEFAULT_PATH = "helpers/db/migrations"

            const files = fs.readdirSync(DEFAULT_PATH);
    
            if (files.length > 0){
    
                files.forEach(async file => {

                    const QUERY = require(`./migrations/${file}`)();

                    if (QUERY.length > 0){

                        await db.fire(QUERY);

                    }

                    else {

                        console.log(chalk.bold.red(`${file} migration is empty`));

                    }

                })
    
            }    
            else {

                // no migration files founded

                console.log(chalk.bold.yellow("No migration files found"))

            }

        }
        
        catch(error){

            console.log(chalk.bold.red(`Migrating failed ! error => ${error}`))

        }

    },

    fire : async (query) => {

        if (db.properties.database_connected && Object.keys(db.properties.pool).length == 0){

            console.log(chalk.bold.red("Pool connection is out"));

            return;
        }

        var status = true;

        if (Object.keys(db.properties.pool).length == 0 && !db.properties.database_connected){

            const connection = await db.connect();

            status = connection;

        }

        if (status){

            // ready to go !

            const status = await db.properties.pool.query(query);

            console.log(status);

        }

        else {

            // failed

            return;

        }
        
    }, 

    init : async () => {

        // fullfil the pool

        const connection = await db.connect();

        if (connection){

            await db.tables();

        }

    }

}

module.exports = db;