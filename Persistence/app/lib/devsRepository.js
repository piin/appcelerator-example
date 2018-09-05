var persistence = require('persistence');
var db;

/**
 * Setup DB, be sure to cal this before tu use the db
 */
function setup() {
	db = persistence.info.db();
}

/**
 * Get devs from the DB
 * @return: devs[{id:number, name:string}]
 */
function getDevs() {
	setup();
	var devs = [];
	var query = db.execute("SELECT * FROM devs");
	
	while(query.isValidRow()) {
		var obj = createDevObj(query);
		devs.push(obj);
		query.next();	
	}
	
	query.close();
	db.close();
	
	return devs;
}

/**
 * Create a dev obj
 * @param {id:number, name: string} item
 */
function createDevObj(item) {
	var id = item.fieldByName('id');
	var name = item.fieldByName('name');
	return { id:id, name: name };
}

/**
 * 
 * @param {String} name
 */
function setDev(name) {
	setup();
	
	var query = db.execute("INSERT INTO devs (name) VALUES (?)",name);
	var lastInsertRow = db.lastInsertRowId;
	db.close();
	
	return lastInsertRow;
}

exports.devs = {
	get: getDevs,
	set: setDev
};
