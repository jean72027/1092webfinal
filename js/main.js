let serverURL = 'https://script.google.com/macros/s/AKfycbyaXgtdD6dWHXhDt-4bpgFQxDo64uSENguZfI_UaZA5aTg-5wQP0NGYOW_mcxIb7Hs/exec';
let articleNum = 1;
let event_ary = ['input[type=text]','textarea'];

$(document).ready(function() {
	initBtnFunc();
});

function initBtnFunc(){
	$('.btn-next').click(function(event) {
		checkorder();//等等自定義函式寫入
	});

	$('.btn-send').click(function(event) {
		sendToServer();
	});

}


function checkorder(){

	let riceorder;
    let rice = new Array();
	$('input[name=rice]:checked').each(function(index, el) {
		
		if($(this).val() == '雷夢奶油蝦蝦飯'){
			rice.push('雷夢奶油蝦蝦飯: '+$('input[name=rice-1-text]').val());
		}else if($(this).val() == '照燒雞肉丸子'){
			rice.push('照燒雞肉丸子: '+$('input[name=rice-2-text]').val());
		}else if($(this).val() == '牛五花時蔬捲'){
			rice.push('牛五花時蔬捲: '+$('input[name=rice-3-text]').val());
		}else if($(this).val() == '番茄肉醬乾咖哩'){
			rice.push('番茄肉醬乾咖哩: '+$('input[name=rice-4-text]').val());
		}else if($(this).val() == '牛肉咖哩'){
			rice.push('牛肉咖哩: '+$('input[name=rice-5-text]').val());
		}else if($(this).val() == '香煎鹽漬鮭魚'){
			rice.push('香煎鹽漬鮭魚: '+$('input[name=rice-6-text]').val());
		}else {
			rice.push($(this).val());
		}

	});
	riceorder = JSON.stringify(rice);
    console.log(riceorder);


	let scakeorder = [];

    let scake = new Array();
	$('input[name=scake]:checked').each(function(index, el) {
		
		if($(this).val() == '小山園抹茶芒果'){
			scake.push('小山園抹茶芒果: '+$('input[name=scake-1-text]').val());
		}else if($(this).val() == '草莓法芙娜可可'){
			scake.push('草莓法芙娜可可: '+$('input[name=scake-2-text]').val());
		}else if($(this).val() == '小山園抹茶草莓'){
			scake.push('小山園抹茶草莓: '+$('input[name=scake-3-text]').val());
		}else if($(this).val() == '茉莉哈密瓜'){
			scake.push('茉莉哈密瓜: '+$('input[name=scake-4-text]').val());
		}else if($(this).val() == '小山園濃抹茶紅豆'){
			scake.push('小山園濃抹茶紅豆: '+$('input[name=scake-5-text]').val());
		}else if($(this).val() == '海鹽焦糖可可'){
			scake.push('海鹽焦糖可可: '+$('input[name=scake-6-text]').val());
		}else {
			scake.push($(this).val());
		}

	});
	scakeorder = JSON.stringify(scake);
	
	console.log(scakeorder);


	let cakeorder = [];

    let cake = new Array();
	$('input[name=cake]:checked').each(function(index, el) {
		
		if($(this).val() == '白櫻桃鮮奶油'){
			cake.push('白櫻桃鮮奶油: '+$('input[name=cake-1-text]').val());
		}else if($(this).val() == '焙茶無花果'){
			cake.push('焙茶無花果: '+$('input[name=cake-2-text]').val());
		}else if($(this).val() == '草莓抹茶'){
			cake.push('草莓抹茶: '+$('input[name=cake-3-text]').val());
		}else if($(this).val() == '玄米抹茶柚子'){
			cake.push('玄米抹茶柚子: '+$('input[name=cake-4-text]').val());
		}else if($(this).val() == '伯爵白葡萄'){
			cake.push('伯爵白葡萄: '+$('input[name=cake-5-text]').val());
		}else if($(this).val() == '焙茶栗子'){
			cake.push('焙茶栗子: '+$('input[name=cake-6-text]').val());
		}else if($(this).val() == '青檸哈密瓜'){
			cake.push('青檸哈密瓜: '+$('input[name=cake-6-text]').val());
		}else if($(this).val() == '伯爵無花果'){
			cake.push('伯爵無花果: '+$('input[name=cake-6-text]').val());
		}else {
			cake.push($(this).val());
		}

	});
	cakeorder = JSON.stringify(cake);
    console.log(cakeorder);
	

    let coffeeorder = [];

    let coffee = new Array();
	$('input[name=coffee]:checked').each(function(index, el) {
		
		if($(this).val() == '宇治抹茶拿鐵'){
			coffee.push('宇治抹茶拿鐵: '+$('input[name=coffee-1-text]').val());
		}else if($(this).val() == '柴燒黑糖卡布奇諾'){
			coffee.push('柴燒黑糖卡布奇諾: '+$('input[name=coffee-2-text]').val());
		}else if($(this).val() == '拿鐵'){
			coffee.push('拿鐵: '+$('input[name=coffee-3-text]').val());
		}else if($(this).val() == '海鹽焦糖拿鐵'){
			coffee.push('海鹽焦糖拿鐵: '+$('input[name=coffee-4-text]').val());
		}else if($(this).val() == '法芙娜摩卡'){
			coffee.push('法芙娜摩卡: '+$('input[name=coffee-5-text]').val());
		}else {
			coffee.push($(this).val());
		}

	});
	coffeeorder = JSON.stringify(coffee);
    console.log(coffeeorder);

    
	let teaorder = [];

    let tea = new Array();
	$('input[name=tea]:checked').each(function(index, el) {
		
		if($(this).val() == '萊茵莓果接骨木花茶'){
			tea.push('萊茵莓果接骨木花茶: '+$('input[name=tea-1-text]').val());
		}else if($(this).val() == '百香伯爵冰茶'){
			tea.push('百香伯爵冰茶: '+$('input[name=tea-2-text]').val());
		}else if($(this).val() == '芒果鳳梨冰茶'){
			tea.push('芒果鳳梨冰茶: '+$('input[name=tea-3-text]').val());
		}else if($(this).val() == '洋甘菊柚子冰茶'){
			tea.push('洋甘菊柚子冰茶: '+$('input[name=tea-4-text]').val());
		}else {
			tea.push($(this).val());
		}

	});
	teaorder = JSON.stringify(tea);
    console.log(teaorder);


	let drinkorder = [];

    let drink = new Array();
	$('input[name=drink]:checked').each(function(index, el) {
		
		if($(this).val() == '皇家阿薩姆奶茶'){
			drink.push('皇家阿薩姆奶茶: '+$('input[name=drink-1-text]').val());
		}else if($(this).val() == '柴燒黑糖奶茶'){
			drink.push('柴燒黑糖奶茶: '+$('input[name=drink-2-text]').val());
		}else if($(this).val() == '有機薄荷草本茶'){
			drink.push('有機薄荷草本茶: '+$('input[name=drink-3-text]').val());
		}else if($(this).val() == '芒果摩西多'){
			drink.push('芒果摩西多: '+$('input[name=drink-4-text]').val());
		}else if($(this).val() == '季節現做果汁'){
			drink.push('季節現做果汁: '+$('input[name=drink-5-text]').val());
		}else {
			drink.push($(this).val());
		}

	});
	drinkorder = JSON.stringify(drink);
    console.log(drinkorder);

	//置入
	let $order_here = $('#tipTemplate01');
	let $inner = $order_here.html();
	$inner = $inner.replace('RICE_HERE',riceorder);
	$inner = $inner.replace('SCAKE_HERE',scakeorder);
	$inner = $inner.replace('CAKE_HERE',cakeorder);
	$inner = $inner.replace('COFFEE_HERE',coffeeorder);
	$inner = $inner.replace('TEA_HERE',teaorder);
	$inner = $inner.replace('DRINK_HERE',drinkorder);
	
	$('body .orderlist').append($inner);
	
}



function sendToServer(){
		
	let parameter = {};

    let rice = new Array();
	$('input[name=rice]:checked').each(function(index, el) {
		
		if($(this).val() == '雷夢奶油蝦蝦飯'){
			rice.push('雷夢奶油蝦蝦飯: '+$('input[name=rice-1-text]').val());
		}else if($(this).val() == '照燒雞肉丸子'){
			rice.push('照燒雞肉丸子: '+$('input[name=rice-2-text]').val());
		}else if($(this).val() == '牛五花時蔬捲'){
			rice.push('牛五花時蔬捲: '+$('input[name=rice-3-text]').val());
		}else if($(this).val() == '番茄肉醬乾咖哩'){
			rice.push('番茄肉醬乾咖哩: '+$('input[name=rice-4-text]').val());
		}else if($(this).val() == '牛肉咖哩'){
			rice.push('牛肉咖哩: '+$('input[name=rice-5-text]').val());
		}else if($(this).val() == '香煎鹽漬鮭魚'){
			rice.push('香煎鹽漬鮭魚: '+$('input[name=rice-6-text]').val());
		}else {
			rice.push($(this).val());
		}

	});
	parameter.Rice = JSON.stringify(rice);

    let scake = new Array();
	$('input[name=scake]:checked').each(function(index, el) {
		
		if($(this).val() == '小山園抹茶芒果'){
			scake.push('小山園抹茶芒果: '+$('input[name=scake-1-text]').val());
		}else if($(this).val() == '草莓法芙娜可可'){
			scake.push('草莓法芙娜可可: '+$('input[name=scake-2-text]').val());
		}else if($(this).val() == '小山園抹茶草莓'){
			scake.push('小山園抹茶草莓: '+$('input[name=scake-3-text]').val());
		}else if($(this).val() == '茉莉哈密瓜'){
			scake.push('茉莉哈密瓜: '+$('input[name=scake-4-text]').val());
		}else if($(this).val() == '小山園濃抹茶紅豆'){
			scake.push('小山園濃抹茶紅豆: '+$('input[name=scake-5-text]').val());
		}else if($(this).val() == '海鹽焦糖可可'){
			scake.push('海鹽焦糖可可: '+$('input[name=scake-6-text]').val());
		}else {
			scake.push($(this).val());
		}

	});
	parameter.Scake = JSON.stringify(scake);

    let cake = new Array();
	$('input[name=cake]:checked').each(function(index, el) {
		
		if($(this).val() == '白櫻桃鮮奶油'){
			cake.push('白櫻桃鮮奶油: '+$('input[name=cake-1-text]').val());
		}else if($(this).val() == '焙茶無花果'){
			cake.push('焙茶無花果: '+$('input[name=cake-2-text]').val());
		}else if($(this).val() == '草莓抹茶'){
			cake.push('草莓抹茶: '+$('input[name=cake-3-text]').val());
		}else if($(this).val() == '玄米抹茶柚子'){
			cake.push('玄米抹茶柚子: '+$('input[name=cake-4-text]').val());
		}else if($(this).val() == '伯爵白葡萄'){
			cake.push('伯爵白葡萄: '+$('input[name=cake-5-text]').val());
		}else if($(this).val() == '焙茶栗子'){
			cake.push('焙茶栗子: '+$('input[name=cake-6-text]').val());
		}else if($(this).val() == '青檸哈密瓜'){
			cake.push('青檸哈密瓜: '+$('input[name=cake-6-text]').val());
		}else if($(this).val() == '伯爵無花果'){
			cake.push('伯爵無花果: '+$('input[name=cake-6-text]').val());
		}else {
			cake.push($(this).val());
		}

	});
	parameter.Cake = JSON.stringify(cake);
	
    let coffee = new Array();
	$('input[name=coffee]:checked').each(function(index, el) {
		
		if($(this).val() == '宇治抹茶拿鐵'){
			coffee.push('宇治抹茶拿鐵: '+$('input[name=coffee-1-text]').val());
		}else if($(this).val() == '柴燒黑糖卡布奇諾'){
			coffee.push('柴燒黑糖卡布奇諾: '+$('input[name=coffee-2-text]').val());
		}else if($(this).val() == '拿鐵'){
			coffee.push('拿鐵: '+$('input[name=coffee-3-text]').val());
		}else if($(this).val() == '海鹽焦糖拿鐵'){
			coffee.push('海鹽焦糖拿鐵: '+$('input[name=coffee-4-text]').val());
		}else if($(this).val() == '法芙娜摩卡'){
			coffee.push('法芙娜摩卡: '+$('input[name=coffee-5-text]').val());
		}else {
			coffee.push($(this).val());
		}

	});
	parameter.Coffee = JSON.stringify(coffee);

    let tea = new Array();
	$('input[name=tea]:checked').each(function(index, el) {
		
		if($(this).val() == '萊茵莓果接骨木花茶'){
			tea.push('萊茵莓果接骨木花茶: '+$('input[name=tea-1-text]').val());
		}else if($(this).val() == '百香伯爵冰茶'){
			tea.push('百香伯爵冰茶: '+$('input[name=tea-2-text]').val());
		}else if($(this).val() == '芒果鳳梨冰茶'){
			tea.push('芒果鳳梨冰茶: '+$('input[name=tea-3-text]').val());
		}else if($(this).val() == '洋甘菊柚子冰茶'){
			tea.push('洋甘菊柚子冰茶: '+$('input[name=tea-4-text]').val());
		}else {
			tea.push($(this).val());
		}

	});
	parameter.Tea = JSON.stringify(tea);

    let drink = new Array();
	$('input[name=drink]:checked').each(function(index, el) {
		
		if($(this).val() == '皇家阿薩姆奶茶'){
			drink.push('皇家阿薩姆奶茶: '+$('input[name=drink-1-text]').val());
		}else if($(this).val() == '柴燒黑糖奶茶'){
			drink.push('柴燒黑糖奶茶: '+$('input[name=drink-2-text]').val());
		}else if($(this).val() == '有機薄荷草本茶'){
			drink.push('有機薄荷草本茶: '+$('input[name=drink-3-text]').val());
		}else if($(this).val() == '芒果摩西多'){
			drink.push('芒果摩西多: '+$('input[name=drink-4-text]').val());
		}else if($(this).val() == '季節現做果汁'){
			drink.push('季節現做果汁: '+$('input[name=drink-5-text]').val());
		}else {
			drink.push($(this).val());
		}

	});
	parameter.Drink = JSON.stringify(drink);

	parameter.userrequest = $('input[name=userrequest]').val();
	parameter.userName = $('input[name=userName]').val();
	
	parameter.method = "write1";

	console.log(parameter);

	
	$.post(serverURL, parameter, function(data){
		console.log(data);
		if(data.result = 'sus'){
			alert('送出成功');
		}else{
			
			alert('送出失敗QQ，請檢查後再試');
		}
	}).fail(function(data){
		alert('送出失敗QQ');
		console.log(data);
	});
}