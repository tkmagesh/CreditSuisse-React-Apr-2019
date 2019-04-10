(function(){
	function addSync(x,y){
		console.log(`	[@service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y, callback){
		console.log(`	[@service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@service] returning result`);
			//return result;
			callback(result);
		}, 5000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	function addAsyncPromise(x,y){
		console.log(`	[@service] processing ${x} and ${y}`);
		
		var p = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@service] returning result`);
				//return result;
				resolveFn(result);
			}, 5000);
		});

		return p;
	}

	window['addAsyncPromise'] = addAsyncPromise;

})();

/*
Client usage
*/
var p = addAsyncPromise(10,20);

var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var p2 = new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			var doubleResult = result * 2;
			resolveFn(doubleResult);
			console.log('doubleResult done');
    	},5000);
    });
	return p2;
})

var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	return new Promise(function(resolveFn, rejectFn){
		var doubleResult = result * 2;
		resolveFn(doubleResult);
    });
})

var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
	return Promise.resolve(doubleResult);
})

var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
	return doubleResult;
})
