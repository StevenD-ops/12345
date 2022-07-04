class Collections extends Map {
	constructor(...args) {
		super(...args);
		this.methods = Object.getOwnPropertyNames(Collections.prototype);
	}
	setOptions(name, options = {}) {
		if (!name) return name;
		if (!Object.keys(options).length) return options;
		if (!this.has(name)) return `'${name}' no coincide con ningún comando`;
		let command = this.get(name);
		this.set(name, {
			...command,
			options: {
				...command.options,
				...options,
			},
		});
		return this.get(name);
	}
	rename(name, setName) {
		if (!name || !setName) return setName || name;
		if (!this.has(name)) return `'${name}' no coincide con ningún comando`;
		if (this.has(setName)) return `'${setName}' existe`;
		let command = this.get(name);
		command.name = setName;
		command.alias = [];
		this.set(setName, command);
		this.delete(name);
		return this.get(setName);
	}
	modified(name, options = {}) {
		if (!name) return name;
		if (!Object.keys(options).length) return options;
		if (!this.has(name)) return `'${name}' no coincide con ningún comando`;
		let command = this.get(name);
		this.set(name, {
			...command,
			...options,
		});
		return this.get(name);
	}
}

module.exports = Collections
