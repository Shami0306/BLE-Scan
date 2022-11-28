module.exports = {
	apps : [{
		name: 'BLE',
		script: 'python3 scan.py',
		watch: './scan.py',
		cron_restart: '0 0 * * *',
		}]
};
