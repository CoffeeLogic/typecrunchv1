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
		time: 60,
		playing: false,
		count: 0,
		mistake: 0,
		words:
		[
			"noon","size","war","chapter","was","light",
			"earth","iron","somebody","family","tight","stick",
			"pay","surrounded","cover","smooth","theory","better",
			"satellites","pay","taught","path","everywhere","whom",
			"involved","vote","our","far","science","combine",
			"twenty","repeat","sharp","consider","from","whole",
			"arrive","visitor","highway","pupil","clay","victory"
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
				this.init();
				this.current = '';
				this.random(this.words);
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
				alert('You have exceeded the mistakes limit. Words: ' + this.count + ' Time remaining: ' + this.time);
			}
			//if the user makes a mistake, the ceiling drops
			else
			{
				this.height = this.height + 164;
				this.computedHeight.height = this.height + 'px';
				this.mistake = this.mistake + 1;
			}
		},
		//counts number of words typed in
		/* don't need a method to count, just manually count when needed
		counter: function()
		{
			this.count = this.count + 1;
		},*/
		//the countdown function
		countdown: function()
		{
			if(this.time > 0)
			{
				this.time = this.time - 1;
			}
			else if(this.time == 0)
			{
				this.playing = false;
			}
		},
		//starts the timer
		init: function()
		{
			this.playing = true;
			setInterval(function()
			{
				this.countdown();
			}.bind(this), 1000);
		},
	},
});