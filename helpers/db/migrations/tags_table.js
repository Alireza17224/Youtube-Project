const TagsTable = () => {

    const QUERY = `CREATE TABLE IF NOT EXISTS tags (
        id SERIAL,
        name VARCHAR(250) NOT NULL,
        CREATED_AT TIMESTAMP NOT NULL DEFAULT NOW(),
        UPDATED_AT TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY (id)
    )`;

    return QUERY;

}

module.exports = TagsTable;