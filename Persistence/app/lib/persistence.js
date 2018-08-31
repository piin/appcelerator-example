// Persistence the info in sql lite
// DB name: persistence.sqlite
// DB location: assets/persistence.sqlite

/**
 * Add data in the DB
 */
function createData() {
	var db = Ti.Database.open("persistence");
}

/**
 * Get data from the DB
 */
function readData() {
	return 'Hi';
}

/**
 * Update data from the DB
 */
function updateData() {
	
}

/**
 * Delete data from the DB
 */
function deleteData() {
	
}

exports.info = {
	set: createData,
	get: readData,
	put: updateData,
	del: deleteData
};

