Vue.config.devtools = true;

new Vue
({
	el: '#screen',
	data:
	{
		title: 'hello',
		current: '',
		height: 164,
		computedHeight:
		{
			height: '164px',
		},
		time: 59,
		playing: false,
		count: 0,
		mistake: 0,
		interval: null,
		words:
		[
			"writing","bus","track","edge","huge","length",
			"pride","tales","soon","road","parallel","somewhere",
			"women","independent","parent","face","appropriate","proper",
			"truth","walk","fell","she","aside","require",
			"gas","village","base","feathers","natural","loose",
			"late","instrument","remarkable","naturally","broad","doubt",
			"grandmother","cream","perhaps","collect","allow","book",
			"production","shore","letter","cry","prepare","which",
			"pound","carefully","scene","cover","camera","remarkable",
			"begun","down","lot","combine","onlinetools","bill",
			"colony","instead","consist","except","ice","nervous",
			"wall","board","joy","daily","jump","imagine",
			"function","visitor","bee","clean","whispered","suddenly",
			"star","income","result","voice","slide","himself"
		],
	},
	methods:
	{
		
		random: function(words)
		{
			//pulls random word from "words" array
			var num = Math.floor(Math.random() * this.words.length);
			//Output the random word
			this.title = this.words[num];
		},
		check: function()
		{
			//if first word is hello, doesn't count hello
			if(this.current == 'hello')
			{
				this.playing = true;
				this.current = '';
				this.random(this.words);
				//sets the interval for timer's countdown
				this.interval = setInterval(function()
				{
					this.countdown();
				}.bind(this), 1000);			
			}
			else if(this.playing == false)
			{
				alert('Times up, WPM: ' + this.count + '. Number of Mistakes: ' + this.mistake);
			}
			//if the word matches, randomize the next word and counter++
			else if(this.current == this.title)
			{
				this.current = '';
				this.random(this.words);
				this.count = this.count + 1;
			}
			//if height hits it's max (4 mistakes), the game ends
			else if(this.height == 656)
			{
				this.mistake = this.mistake + 1;
				alert('You have exceeded the mistakes limit of 4. Words: ' + this.count + ' Time remaining: ' + this.time);
				this.playing = false;
				this.reset();
			}
			//if the user makes a mistake, the ceiling drops
			else
			{
				this.height = this.height + 164;
				this.computedHeight.height = this.height + 'px';
				this.mistake = this.mistake + 1;
			}
		},
		//the countdown function
		countdown: function()
		{
			if(this.time > 0)
			{
				this.time = this.time - 1;
			}
			else if(this.time == 0 || this.playing == false)
			{
				this.playing = false;
				this.check();
				this.reset();
			}
		},
		//resets the game without refreshing the page
		reset: function()
		{
			clearInterval(this.interval);
			this.time = 59;
			this.count = 0;
			this.title = 'hello';
			this.current = '';
			this.height = 164;
			this.computedHeight.height = this.height + 'px';
		},
	},
});