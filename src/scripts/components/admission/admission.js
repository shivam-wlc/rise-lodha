import { renderContactUsScreen } from "../common.js";
import {
	renderAdmissionIntoScreen,
	renderAdmissionFeeStructureScreen,
	renderAdmissionProcessScreen1,
	renderAdmissionProcessScreen2,
	renderAdmissionRegistrationScreen1,
	// renderAdmissionRegistrationScreen2,
} from "./admission-components.js";

document.addEventListener("DOMContentLoaded", () => {
	const admissionContainer = document.getElementById("admission-1");
	const admissionContainer2 = document.getElementById("admission-2");
	const admissionContainer3 = document.getElementById("admission-3");
	const admissionContainer4 = document.getElementById("admission-4");
	const admissionContainer5 = document.getElementById("admission-5");
	const admissionContainer6 = document.getElementById("admission-6");
	const admissionContainer7 = document.getElementById("admission-7");

	admissionContainer.innerHTML += renderAdmissionIntoScreen();
	admissionContainer2.innerHTML += renderAdmissionProcessScreen1();
	admissionContainer3.innerHTML += renderAdmissionProcessScreen2();
	admissionContainer4.innerHTML += renderAdmissionFeeStructureScreen();
	// admissionContainer5.innerHTML += renderAdmissionRegistrationScreen1();
	// admissionContainer6.innerHTML += renderAdmissionRegistrationScreen2();
	admissionContainer7.innerHTML += renderContactUsScreen();
});
