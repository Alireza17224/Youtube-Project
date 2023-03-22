const VideoLikesTable = () => {


    const QUERY = `CREATE TABLE IF NOT EXISTS video_likes (
        video_id INT NOT NULL,
        user_id INT NOT NULL,
        CONSTRAINT fk_video_id FOREIGN KEY (video_id) REFERENCES videos (id),
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
    )`;

    return QUERY;

}

module.exports = VideoLikesTable;