
document.getElementById("certBtn").addEventListener("click", function() 
{
    const downloadLink = document.createElement("a");
    downloadLink.href = "downloads/certificate.pdf";
    downloadLink.download = "Sospeter_Owino_project_certificate.pdf";
    downloadLink.click();
    alert("Downloading...");
});

