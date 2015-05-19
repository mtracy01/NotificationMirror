// for navigator language
var lang = window.navigator.language;
// you can change the language
// var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Vienna,Virginia',
    'units':'imperial',
    'lang':lang
};

//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';

//Set up news feed
var feed = 'http://feeds.bbci.co.uk/news/technology/rss.xml';

// compliments:
var morning = [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ];
       
var evening = [
            'Wow, you look hot!',
            'You look nice!',
            //'Hi, sexy!'
        ];
