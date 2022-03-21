// Saves the form value in PDF
function createPDF() {
    if (document.getElementById("name").value == "" && document.getElementById("dob").value == "") {
        alert("Please enter all the fields");
    }
    else {
        // create the jspdf document

        var doc = new jsPDF();

        doc.text(document.getElementById("name").value, 10, 10);
        doc.text(document.getElementById("dob").value, 25, 25);

        // save the file
        doc.save("ouput.pdf");
    }
}

// function to uplod pdf file and display it in HTML
const inpFile = document.getElementById("inpFile");
const btnUpload = document.getElementById("btnUpload");
const resultText = document.getElementById("resultText");

btnUpload.addEventListener("click", () => {
    const formData = new FormData();

    formData.append("pdfFile", inpFile.files[0]);

    fetch("/extract-text", {
        method: "post",
        body: formData
    }).then(response => {
        return response.text();
    }).then(extractedText => {
        resultText.value = extractedText.trim();
    });
});

// Auto fill
document.getElementById("Btn").addEventListener("click", function(){ 
	var company = document.getElementById("company").value;
    var name = document.getElementById("name").value;
    var cust = document.getElementById("name1");
    var cpy = document.getElementById("cpy");

    console.log(company);
    console.log(name)
    cpy.innerHTML = "Company: " + company;
    cust.innerHTML = "Name: " + name;
});