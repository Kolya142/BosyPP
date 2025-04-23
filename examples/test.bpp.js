const Graphics = {// Enum (Color)
Color: {RED: 0,0: "RED",GREEN: 1,1: "GREEN",BLUE: 2,2: "BLUE",BLACK: 3,3: "BLACK",GRAY: 4,4: "GRAY",},PrintColor: function (col){console.log(Graphics.Color[col]);
}};Graphics.PrintColor(Graphics.Color.BLUE);
if (((Graphics.Color.RED)) === (Graphics.Color.RED)) {{console.log("RED is RED");
}}if (((Graphics.Color.RED)) === (Graphics.Color.GREEN)) {{console.log("RED is GREEN");
}}function Vec2(_x, _y) { return {x: _x, y: _y}; }const my_vec=Vec2(5,3);
console.log(my_vec)