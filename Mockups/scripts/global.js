function randClass() {
	var cls = '';
	var rand = Math.floor((Math.random() * 10) + 1);

	if (rand < 2) cls = 'rejected';
	if (rand >= 2 && rand < 4) cls = 'pending';
	if (rand >= 4 && rand < 7) cls = 'past';
	if (rand >= 7) cls = 'approved';

	return cls;
}

function renderCell(offset) {
	return function (value, metaData, record, rowIndex, colIndex, store, view) {
		var month = record.data.month;
		var date = record.data.date + (offset || 0);

		var header = '<div class="ccw-top">' + month + ', ' + date + '</div>';
		var body = value ? '<div class="ccw-body ' + randClass() + '">' + value + '</div>' : '';
		var content = '<div class="ccw">' + header + body + '</div>';

		return content;
	};
}

function cellRender(value, meta) {
	if (!value) return value;

	meta.tdCls = randClass();

	return value;
}