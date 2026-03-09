abstract class StringArray<T extends string> extends Array<T> {
	constructor(str: string, delimiter: string) {
		super();
		const parsed = str.split(delimiter) as this;
		return parsed.filter((i) => i.length);
	}
}

export class CommaSeparatedStringArray<T extends string> extends StringArray<T> {
	constructor(str: string) {
		super(str, ',');
	}
}

export class ColonSeparatedStringArray<T extends string = string> extends StringArray<T> {
	constructor(str: string) {
		super(str, ':');
	}
}
