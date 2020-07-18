/* -- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS test_books_db;
-- Creates the "blogger" database --
CREATE DATABASE test_books_db;

USE test_books_db;

CREATE TABLE books (
	id INT auto_increment NOT NULL,
    title VARCHAR(200) NOT NULL,
    subtitle VARCHAR(200),
    authors VARCHAR(200) NOT NULL,
    categories VARCHAR(200) NOT NULL,
    thumbnail VARCHAR(200),
    description VARCHAR(5000),
    published_year INT NOT NULL,
    average_rating INT,
    num_pages INT NOT NULL,
    ratings_count INT,
    PRIMARY KEY (id)
);

-- INSERT INTO books (title,subtitle,authors,categories,thumbnail,description,published_year,average_rating,num_pages,ratings_count)
-- VALUES ("Gilead", "","Marilynne Robinson","Fiction","http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It’s 1956 in Gilead, Iowa, towards the end of the Reverend Ames’s life, and he is absorbed in recording his family’s story, a legacy for the young son he will never see grow up. Haunted by his grandfather’s presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend’s lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames’s joyous, rambling voice that finds beauty, humour and truth in the smallest of life’s details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike.",2004,3.85,247,361);

SELECT * FROM books;

 */
