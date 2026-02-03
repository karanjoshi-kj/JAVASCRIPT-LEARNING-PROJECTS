let selectedCourse = "";

function openSemester(course) {
  selectedCourse = course;

  document.getElementById("courseSection").classList.add("hidden");
  document.getElementById("semesterSection").classList.remove("hidden");
}
function goTo(folder) {
  window.location.href = `./${folder}/index.html`;
}

function openPapers(semester) {
  

  window.location.href = `./${selectedCourse}/${semester}/`;
}
