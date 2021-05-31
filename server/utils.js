async function testMongoDBConnection(client) {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("Connected successfully to mongodb server");
		} finally {
		await client.close();
	}
}

function encryptRoomInfo(data) {

	let regions = ["", "", "", ""], result = data.roomId + "-";	
	if (data.roomId == undefined || data.state == undefined) {
		return "";
	}

	data.state.forEach(ele => {
		if (ele.regionId == undefined || ele.tileId == undefined) {
			return "";
		}
		regions[Number(ele.regionId) - 1] = ele.tileId;
	});

	if (data.tileId !== undefined && data.regionId !== undefined) {
		regions[Number(data.regionId) - 1] = data.tileId;
	}

	result += regions.join("-");
	return result;
}


// console.log(encryptRoomInfo({
// 	"tileId": "1",
//     "roomId": "1",
//     "regionId": "1",
//     "state": [
//         {"regionId": "1", "tileId": "3"},
//     ]
// }));

module.exports = {
	testMongoDBConnection: testMongoDBConnection,
	encryptRoomInfo: encryptRoomInfo
}