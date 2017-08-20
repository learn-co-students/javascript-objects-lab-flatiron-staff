var recipes = new Object();

var updateObjectWithKeyAndValue = (object, key, value) => {
	return Object.assign({}, object, { [key]: value });
	return object;
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
	object[key] = value;
	return object;
}

var deleteFromObjectByKey = (object, key) => delete object.key;

var destructivelyDeleteFromObjectByKey = (object, key) => delete object[key];
