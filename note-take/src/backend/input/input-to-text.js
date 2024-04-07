const fs = require('fs');
const { PDFReader } = require('pdfreader');
const docx = require('docx');

function extractTextFromPdf(pdfPath) {
    return new Promise((resolve, reject) => {
        let text = '';
        new PDFReader().parseFileItems(pdfPath, (err, item) => {
            if (err) reject(err);
            else if (!item) resolve(text);
            else if (item.text) text += item.text + '\n';
        });
    });
}

function extractTextFromDocx(docxPath) {
    const doc = new docx.Document(fs.readFileSync(docxPath));
    let text = '';
    doc.sections.forEach((section) => {
        section.children.forEach((child) => {
            if (child instanceof docx.Paragraph) {
                child.children.forEach((content) => {
                    if (content instanceof docx.TextRun) {
                        text += content.text + '\n';
                    }
                });
            }
        });
    });
    return text;
}

function saveTextToFile(text, outputFilePath) {
    fs.writeFileSync(outputFilePath, text, 'utf-8');
    console.log("Text saved to", outputFilePath);
}

async function main() {
    const inputFilePath = 'C:\\Users\\shane\\OneDrive\\Desktop\\MorganHacksFiles\\TakeNote\\Sample Pdfs\\Lab 7 - Cell Division Sp_2024.docx';
    const outputTextFile = 'output.txt';

    try {
        let extractedText;
        if (inputFilePath.toLowerCase().endsWith('.pdf')) {
            extractedText = await extractTextFromPdf(inputFilePath);
        } else if (inputFilePath.toLowerCase().endsWith('.docx')) {
            extractedText = extractTextFromDocx(inputFilePath);
        } else {
            console.log("Unsupported file type.");
            return;
        }
        saveTextToFile(extractedText, outputTextFile);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
