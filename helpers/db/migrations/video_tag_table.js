const VideoTagTable = () => {

    const QUERY = `CREATE TABLE IF NOT EXISTS video_tag (
        video_id INT NOT NULL,
        tag_id INT NOT NULL,
        CONSTRAINT fk_video_id FOREIGN KEY (video_id) REFERENCES videos (id),
        CONSTRAINT fk_tag_id FOREIGN KEY (tag_id) REFERENCES tags (id)
    )`;

    return QUERY;

}

module.exports = VideoTagTable;