// Persistence the info in sql lite
// DB name: persistence.sqlite
// DB location: assets/persistence.sqlite

var db = setUpDB();

/**
 * Get db instance
 * if db is null instance it else use the current value
 */
function getDB() {
	db = db != null ? db : setUpDB();
	db = openDB();
	return db;
}

/**
 * Set up DB, Try to call this method once
 * when load the application.
 * @return : Installed DB
 */
function setUpDB() {	
	return Ti.Database.install('persistence.sqlite','persistence');
}

/**
 * Open db in order to work with it
 */
function openDB() {
	return Ti.Database.open("persistence");
}

/**
 * Close DB, always call this function when finish to use the db
 */
function closeDB() {
	db.close();
}

exports.info = {
	db: getDB,
	close: closeDB
};

