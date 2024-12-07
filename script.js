document.getElementById("downloadBtn").addEventListener("click", function () {
  // Create a new link element
  const link = document.createElement("a");
  // Set the file path of your resume (this should be relative or absolute URL)
  // Make sure resume.pdf is in the same directory or set the correct path
  link.href = "./Jafrul Alam Tusar.pdf";
  // Set the download attribute with a desired filename
  link.download = "Jafrul_Alam_Tusar.pdf";
  // Append the link to the body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();
  // Remove the link after triggering the download
  document.body.removeChild(link);
});
