import {LogLevel} from './logger.interface';

export class LogEntry {
	entryDate: string = new Date().toISOString();
	private _logWithDate: boolean = false;

	constructor(
		public level: LogLevel,
		public message: string,
		public params?: any[]
	) {}

	get logWithDate() {
		return this._logWithDate;
	}

	set logWithDate(logWithDate) {
		this._logWithDate = logWithDate;
	}

	/**
	 * Convert this log entry to an object
	 */
	toJson() {
		return JSON.parse(JSON.stringify(this));
	}

	/**
	 * Convert this log entry to a JSON string
	 */
	toString() {
		return JSON.stringify(this);
	}

	/**
	 * Convert this to a formatted JSON string
	 */
	toFormattedString() {
		return JSON.stringify(this, null, 2);
	}
}
