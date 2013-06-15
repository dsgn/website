define(function(){
	'use strict';

	return function(sandbox){
		var length = 0, counter = 0, repos = [];

		var url = 'https://api.github.com/users/{{user}}/repos?callback=define';
		//the logic of the module
		var list = function(github){
			var github = github.data;

			for (var i = 0, l= github.length; i<l; i++){
				var data = github[i];
				repos.push({
					name: data.name,
					url: data.html_url,
					description: data.description,
					user: {
						name: data.owner.login,
						url: data.owner.html_url,
						avatar: data.owner.avatar_url
					}
				});
			}
			counter++;

			if (counter === length) {
				sandbox.publish('git:fetch:done', {
					repos: repos
				});
			}
		};

		return {
			init:function(c){
				var acs = c.accounts, i = 0;
				if (!(acs instanceof Array)) {
					acs = [acs];
				}
				for (length=acs.length; i<length; i++) {
					require([url.replace('{{user}}', acs[i])], list);
				}
			}
		};
	};
});
