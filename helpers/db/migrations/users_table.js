const UsersTable = () => {


    const QUERY = `CREATE TABLE IF NOT EXISTS users (
        id SERIAL,
        full_name VARCHAR(250),
        age INT,
        password VARCHAR(250) DEFAULT NULL,
        CREATED_AT TIMESTAMP NOT NULL DEFAULT NOW(),
        UPDATED_AT TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY (id)
    )`;

    return QUERY;

}

module.exports = UsersTable;