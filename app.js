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
	el: "#user",
	data: {
		message: "Reveal the truth!",
		binding: "v-model directive",
	},
	methods: {
		reveal: function () {
			this.message = "This is the new message revealed on click!";
		},
	},
});

var Nuclear = new Vue({
	el: "#Nuclear",
	data: {
		imageUrl: "",
		servantName: "",
		loading: false,
		servantIndex: 0,
	},
	methods: {
		async fetchData() {
			try {
				this.loading = true;

				const response = await fetch(
					"https://api.atlasacademy.io/export/NA/basic_servant.json"
				);
				const data = await response.json();

				if (data.length > this.servantIndex && data[this.servantIndex].face) {
					this.imageUrl = data[this.servantIndex].face;
					this.servantName = data[this.servantIndex].originalName;
				} else {
					console.error("Servant data not available at index", this.servantIndex);
					this.imageUrl = "";
					this.servantName = "Servant not found.";
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				this.imageUrl = "";
				this.servantName = "Failed to load data.";
			} finally {
				this.loading = false; // Stop loading
			}
		},
	},
	watch: {
		servantIndex(newIndex) {
			if (newIndex >= 0) {
				this.fetchData();
			}
		},
	},

	watch: {
		servantIndex(newIndex) {
			if (newIndex >= 0) {
				this.fetchData();
			}
		},
	},
});
