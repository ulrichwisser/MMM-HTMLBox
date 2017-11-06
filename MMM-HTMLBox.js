/* Magic Mirror
* Module: MMM-HTMLBox
*
* By eouia
*/
Module.register("MMM-HTMLBox",{
  getDom: function() {
    var wrapper = document.createElement("div")
    wrapper.innerHTML = this.config.content
    return wrapper
  }
})
