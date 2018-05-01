var csvfile = [
    {
        "page": "Introduction",
        "number": 1,
        "description": "Welcome to the P5.js tutorial. Today you will be learning the three main functions provided by this powerful library. <br>",
        "task": "",
        "code": "",
        "hint_1": "",
        "hint_2": ""
    },
    {
        "page": "Introduction",
        "number": 2,
        "description": "First, let's learn the basic structure of P5.js.<br>\nAs you can see from the code area. All the codes in this function will only be executed once when the code is loaded. ",
        "task": "",
        "code": "<b style=\"color:#265eb7\">function</b> setup() {<br>\n<br>\n}\n",
        "hint_1": "",
        "hint_2": ""
    },
    {
        "page": "Introduction",
        "number": 3,
        "description": "\"createCanvas\" is a function from the P5.js library, which allows you to define a canvas with a specific width and height over the screen.<br>\nHowever, we defined the width and height here for you to fit the canvas window. Please do not modify these parameters.",
        "task": "",
        "code": "<b style=\"color:#265eb7\">function</b> setup() {<br>\n&nbsp;&nbsp;createCanvas(width, height);<br>\n}\n",
        "hint_1": "",
        "hint_2": ""
    },
    {
        "page": "Introduction",
        "number": 4,
        "description": "All the codes in this function will be executed repeatedly. ",
        "task": "",
        "code": "<b style=\"color:#265eb7\">function</b> draw() {<br>\n  <br>\n\n}",
        "hint_1": "",
        "hint_2": ""
    },
    {
        "page": "Introduction",
        "number": 5,
        "description": "\"background\" defines the color of the current Canvas you created. <br>\n",
        "task": "Now, please try to change 0 to another different value between 0 to 255. And then click \"Run\".",
        "code": "<b style=\"color:#265eb7\">function</b> draw() {<br>\n    &nbsp;&nbsp;background(0);<br>\n\n}",
        "hint_1": "",
        "hint_2": ""
    },
    {
        "page": "shape",
        "number": 1,
        "description": "Your first task will be creating different shapes on the graph.<br>\nTo create a shape, you should first specify the color of the shape. The default mode is RGB values from 0 to 255. Use this function to set the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange.",
        "task": "Please set the color to:<br>\nred = 250 <br>\ngreen = 60 <br>\nblue = 60 <br>",
        "code": "fill(r, g, b);",
        "hint_1": "red corresponds to the first parameter.<br>\ngreen corresponds to the second parameter.<br>\nblue corresponds to the thrid parameter.",
        "hint_2": "fill(250,60,60)"
    },
    {
        "page": "shape",
        "number": 2,
        "description": "Now you have successfully set the color, you can now draw the shapes on canvas.<br>\nUse the following function to draw a rectangle to the screen. A rectangle is a four-sided shape with every angle at ninety degrees. <br>By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height.",
        "task": "Please draw a rectangle with height 40 and width 30 at location (100,100).",
        "code": "rect(x, y, w, h);",
        "hint_1": "Use the formlua provided and fill in the four parameters as described by the task.",
        "hint_2": "rect(100,100,30,40)"
    },
    {
        "page": "shape",
        "number": 3,
        "description": "Draws an ellipse (oval) to the screen. An ellipse with equal width and height is a circle. <br>By default, the first two parameters set the location, and the third and fourth parameters set the shape's width and height. If no height is specified, the value of width is used for both the width and height. If a negative height or width is specified, the absolute value is taken.",
        "task": "Please draw a circle with radius 40 at location (50,50).",
        "code": "ellipse(x, y, w, h);",
        "hint_1": "Use the formlua provided and fill in the four parameters as described by the task.",
        "hint_2": "ellipse(50,50,40,40)"
    }
];