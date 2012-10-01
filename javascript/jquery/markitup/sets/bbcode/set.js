// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	previewParserPath:	'', // path to your BBCode parser
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]'},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]'},
		{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]'},
		{separator:'---------------' },
		//{name:'Picture', key:'P', replaceWith:'[img][![Url]!][/img]'},
		{name:'Link', key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...'},
		//{separator:'---------------' },

		
		{name:'Quotes', openWith:'[quote]', closeWith:'[/quote]'},
		{name:'Code', openWith:'[code]', closeWith:'[/code]'}, 
		{separator:'---------------' },
		{name:'Clean', className:"clean", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } },
		{name:'Emoticons', dropMenu:[
				{title:'<):)',replaceWith:'<):)'},
				{title:'>:)',replaceWith:'>:)'},
				{title:':((',replaceWith:':(('},
				{title:':))',replaceWith:':))'},
				{title:':)',replaceWith:':)'},				
	          	{title:':(',replaceWith:':('},				
	          	{title:';)',replaceWith:';)'},	          							
	        	{title:':D',replaceWith:':D'},
	          	{title:':x',replaceWith:':x'},
	          	{title:':P',replaceWith:':P'},	
	          	{title:':-*',replaceWith:':-*'},	          			          		          		        	
	          	{title:':-O',replaceWith:':-O'},	
	          	{title:'X(',replaceWith:'X('},		          	
	          	{title:'O:-)',replaceWith:'O:-)'},	
	          	{title:'=;',replaceWith:'=;'},	
	          	{title:':-c',replaceWith:':-c'},	
	          	{title:':-h',replaceWith:':-h'},          		          	
	          	{title:':-t',replaceWith:':-t'},	          	
	          	{title:'8-|',replaceWith:'8-|'},
	          	{title:':-&',replaceWith:':-&'},
				{title:'[-(',replaceWith:'[-('},
				{title:':O)',replaceWith:':O)'},
				{title:'8-}',replaceWith:'8-}'},
				{title:'<:-P',replaceWith:'<:-P'},
				{title:'=P~',replaceWith:'=P~'},
				{title:'=D>',replaceWith:'=D>'},
				{title:':-SS',replaceWith:':-SS'},
				{title:':-<',replaceWith:':-<'},
				
			] }
		//{name:'Preview', className:"preview", call:'preview' }
	]
}


//added by HoangNova


