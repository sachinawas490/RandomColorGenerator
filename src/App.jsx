import React, { useState } from "react";
import './App.css'
function App() {
	const [color, setcolor] = useState("color");
  const [colortype,setcolortype]=useState('');
	function generatecolor() {
		let temp = "#";
		let t = Math.floor(Math.random() * 1000000);
		temp += t;
		console.log(t);
		setcolor(temp);
    setcolortype("RGB")
	}
	function handleRandomUtilityGenerator(len) {
		return Math.floor(Math.random() * len) ;
	}
	function handlehex() {
		let t = [
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
		];
		let temp = "#";
		for (let i = 0; i < 6; i++) {
      const a=handleRandomUtilityGenerator(t.length);
      console.log(a);
			temp += t[a];
		}
		console.log(temp);
		setcolor(temp);
    setcolortype("HEX");
	}
	function handlergb() {
		let temp = "rgb(";
		for (let i = 0; i < 3; i++) {
			temp += handleRandomUtilityGenerator(255)-1;
			if (i !== 2) {
				temp += ",";
			}
		}

		temp += ")";

		console.log(temp);
		setcolor(temp);
    setcolortype("RGB")
	}

	return (
		<div style={ {
     
      backgroundColor: `${color}`,
    }} className="cls">
			<div>
      <button onClick={generatecolor}>Generate color</button>
			<button onClick={handlehex}>generate hex color</button>
			<button onClick={handlergb}>generate rgb color</button>
      </div>

      <h1 className="colortype">{colortype}</h1>
      <h1 className="colorcode">{color}</h1>
		</div>
	);
}

export default App;
