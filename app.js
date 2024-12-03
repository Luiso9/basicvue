
var app = new Vue({
	el: "#app",
	data: {
		message: "Hello, World!",
		message1: "Hello, User!",
	},
});

var conditional = new Vue({
	el: "#conditional",
	data: {
		seen: false,
		tooltip:
			"Go ahead and enter conditional.seen = true in the console. You should see the message disappear.",
		todos: [
			{ text: "Learn JavaScript" },
			{ text: "Learn Vue" },
			{ text: "Build something awesome" },
		],
	},
});

var user = new Vue({
    el: '#user',
    data: {
        message: 'Reveal the truth!',
        binding: 'v-model directive'
    },
    methods: {
        reveal: function () {
            this.message = 'This is the new message revealed on click!';
        }
    }
})
