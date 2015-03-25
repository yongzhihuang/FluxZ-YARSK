var _ = require('lodash');

var Util = {
	//slugify a string
	convertToSlug: function(text) {
	  return text
	        .toLowerCase()
	        .replace(/ /g,'-')
	        .replace(/[^\w-]+/g,'')
	        ;
	}
};

module.exports = Util;