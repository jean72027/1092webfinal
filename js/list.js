const serverURL = 'https://script.google.com/macros/s/AKfycbyaXgtdD6dWHXhDt-4bpgFQxDo64uSENguZfI_UaZA5aTg-5wQP0NGYOW_mcxIb7Hs/exec';

$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	let parameter = {};
	parameter.method = 'read1';
	$.post(serverURL, parameter, function(data){
		setTable(data);
		console.log(data);//檢查用
	}).fail(function(data){
		alert('error');
	});
}

function setTable(sData){
	let node = $('#tr01').html();
	for(let i=1;i<sData.length;i++){
		let content = node.replace('LIST_HERE',i);
		content = content.replace('USER_HERE',sData[i][1]);
		content = content.replace('RICE_HERE',sData[i][2]);
		content = content.replace('SCAKE_HERE',sData[i][3]);
		content = content.replace('CAKE_HERE',sData[i][4]);
		content = content.replace('COFFEE_HERE',sData[i][5]);
		content = content.replace('TEA_HERE',sData[i][6]);
		content = content.replace('DRINK_HERE',sData[i][7]);
		content = content.replace('ASK_HERE',sData[i][8]);
		content = content.replace('TIME_HERE',sData[i][9]);
		$('tbody').append(content);
	}
}