import { renderContactUsScreen } from "../common.js";
import {
	renderProgrammesScreen,
	renderToddlerScreen,
	renderPlaygroundScreen,
	renderNurseryScreen,
	renderJuniorKgScreen,
	renderSeniorKgScreen,
} from "./programmes-components.js";

document.addEventListener("DOMContentLoaded", () => {
	const programmeContainer1 = document.getElementById("programme-1");
	const programmeContainer2 = document.getElementById("programme-2");
	const programmeContainer3 = document.getElementById("programme-3");
	const programmeContainer4 = document.getElementById("programme-4");
	const programmeContainer5 = document.getElementById("programme-5");
	const programmeContainer6 = document.getElementById("programme-6");
	const programmeContainer7 = document.getElementById("programme-7");

	programmeContainer1.innerHTML += renderProgrammesScreen();
	programmeContainer2.innerHTML += renderToddlerScreen();
	programmeContainer3.innerHTML += renderPlaygroundScreen();
	programmeContainer4.innerHTML += renderNurseryScreen();
	programmeContainer5.innerHTML += renderJuniorKgScreen();
	programmeContainer6.innerHTML += renderSeniorKgScreen();
	programmeContainer7.innerHTML += renderContactUsScreen();
});
