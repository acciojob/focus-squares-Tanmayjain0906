//your JS code here. If required.
const s1 = document.getElementById("square1");
const s2 = document.getElementById("square2");
const s3 = document.getElementById("square3");

s1.addEventListener("mouseover", () => {
	s2.style.backgroundColor = "#6F4E37";
	s3.style.backgroundColor = "#6F4E37";
})

s1.addEventListener("mouseout", () => {
	s2.style.backgroundColor = "#E6E6FA";
	s3.style.backgroundColor = "#E6E6FA";
})

s2.addEventListener("mouseover", () => {
	s1.style.backgroundColor = "#6F4E37";
	s3.style.backgroundColor = "#6F4E37";
})

s2.addEventListener("mouseout", () => {
	s1.style.backgroundColor = "#E6E6FA";
	s3.style.backgroundColor = "#E6E6FA";
})

s3.addEventListener("mouseover", () => {
	s2.style.backgroundColor = "#6F4E37";
	s1.style.backgroundColor = "#6F4E37";
})

s3.addEventListener("mouseout", () => {
	s2.style.backgroundColor = "#E6E6FA";
	s1.style.backgroundColor = "#E6E6FA";
})