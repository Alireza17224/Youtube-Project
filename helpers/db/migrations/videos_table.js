const VideosTable = () => {

    const QUERY = `CREATE TABLE IF NOT EXISTS videos (
        id SERIAL,
        user_id INT NOT NULL,
        title INT,
        like_count INT NOT NULL DEFAULT 0,
        view_count INT NOT NULL DEFAULT 0,
        video VARCHAR(250) NOT NULL,
        CREATED_AT TIMESTAMP NOT NULL DEFAULT NOW(),
        UPDATED_AT TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY (id),
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
    )`;

    return QUERY;

}

module.exports = VideosTable;