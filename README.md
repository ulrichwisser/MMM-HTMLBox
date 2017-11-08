# MMM-HTMLBox
Just putting static HTML code into MagicMirror.
You can use this to show some text or HTML or web-widgets;

## Installation
```shell
cd <your MagicMirror Directory>/modules
git clone https://github.com/eouia/MMM-HTMLBox
```

## Configuration
```javascript
{
  module: "MMM-HTMLBox",
  position:"bottom_bar",
  config: {
    width: "100%",
    height: "200px",
    refresh_interval_sec: 0,
    content: "There is nothing to display. <br>Put your HTML code into content field in 'config.js'.",
    file: "", //When content is too long, you can use this for external file. relative path from `MMM-HTMLBox`
  }
},
```

### warning
When you put HTML code into `content` field, quotation mark `'` and double quotation mark `"` should be escaped with backslash `\`.
e.g)
```
content: "<span class="test">this is test!</span>",
```
will make error because of non-escaping quotation mark.
To avoid this, you need to escape chars.
```
content: "<span class=\"test\">this is test!</span>",
```
will work.
Or you can put your HTML codes into `file` and use it. If `file` is not blank, `content` will be ignored.
