require(['core/lib/akase', 'module/renderGit', 'module/getGit'], function(core){
	'use strict';

	core.start('module/renderGit');

	core.start('module/getGit', { config: {
		accounts: ['sirLisko', 'cedmax']
	}});


});
