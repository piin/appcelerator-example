// Persistence the info in sql lite
// DB name: sksettings.sqlite
// DB location: assets/sksettings.sqlite

/**
 * Add data in the DB
 */
function createData() {
	
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

