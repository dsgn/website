define(function(){
	'use strict';

	return function(sandbox){

		var sortByProp = function(arr, p) {
			return arr.sort(function(a,b){
				return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
			});
		};

		var render = function(render){
			render = sortByProp(render.repos, 'name');
			console.log(render)
		};


		return {
			init:function(){
				sandbox.subscribe('git:fetch:done', render);
			}
		};
	};
});
