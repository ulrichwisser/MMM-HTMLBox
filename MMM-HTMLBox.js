/* Magic Mirror
* Module: MMM-HTMLBox
*
* By eouia
*/
Module.register("MMM-HTMLBox",{
	defaults: {
		width: "100%",
		height: "inherit",
		refresh_interval_sec: 0,
		content: "There is nothing to display. <br>Put your HTML code into content field in 'config.js'.",
		file: "sample.html",
	},

	start: function() {
		this.timer = null

	},

	notificationReceived: function(noti, payload, sender) {
		if (noti == "DOM_OBJECTS_CREATED") {
			this.refresh()
		}
	},

	refresh: function() {
		if (this.config.file !== "") {
			this.readFileTrick("/modules/MMM-HTMLBox/" + this.config.file)
		}
		this.updateDom()
		if (this.config.refresh_interval_sec > 0) {
			var self = this
			this.timer = setTimeout(function(){
				self.refresh()
			}, this.config.refresh_interval_sec * 1000)
		}
	},

	getDom: function() {
		var wrapper = document.createElement("div")
		wrapper.innerHTML = this.config.content
		wrapper.className = "HTMLBX"
		wrapper.style.width = this.config.width
		wrapper.style.height = this.config.height
		return wrapper
	},

	readFileTrick: function (url, callback) {
		var xmlHttp = new XMLHttpRequest()
		var self = this
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				console.log("EEE!")
				self.config.content = xmlHttp.responseText
				self.updateDom()
			}
		}
		xmlHttp.open("GET", url, true)
		xmlHttp.send(null)
	}
})
