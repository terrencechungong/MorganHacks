from pypdf import PdfReader

import PyPDF2
import docx

def extract_text_from_pdf(pdf_path):
    # Open the PDF file in binary mode
    with open(pdf_path, 'rb') as file:
        # Create a PDF reader object
        pdf_reader = PyPDF2.PdfReader(file)
        
        # Initialize an empty string to store the extracted text
        text = ''
        
        # Iterate through each page of the PDF
        for page_num in range(len(pdf_reader.pages)):
            # Get the page object
            page = pdf_reader.pages[page_num]
            
            # Extract text from the page and append it to the 'text' string
            text += page.extract_text()
            
        return text

def extract_text_from_docx(docx_path):
    # Open the Word document
    doc = docx.Document(docx_path)
    
    # Initialize an empty string to store the extracted text
    text = ''
    
    # Iterate through each paragraph in the document
    for paragraph in doc.paragraphs:
        # Append the text of each paragraph to the 'text' string
        text += paragraph.text + '\n'
    
    return text

def save_text_to_file(text, output_file):
    # Write the extracted text to a text file
    try:
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(text)
        print("Text saved to", output_file)
    except Exception as e:
        print("Error:", e)


if __name__ == "__main__":
    # Path to the input PDF file
    
    input_file_path = 'C:\\Users\\shane\\OneDrive\\Desktop\\MorganHacksFiles\\TakeNote\\Sample Pdfs\\Lab 7 - Cell Division Sp_2024.docx'
    
    # Path to the output text file
    output_text_file = 'output.txt'
    
    # Determine the file type based on the file extension
    if input_file_path.lower().endswith('.pdf'):
        # Extract text from the PDF file
        extracted_text = extract_text_from_pdf(input_file_path)
    elif input_file_path.lower().endswith('.docx'):
        # Extract text from the Word document
        extracted_text = extract_text_from_docx(input_file_path)
    else:
        print("Unsupported file type.")
        exit()
    
    # Save the extracted text to a text file
    save_text_to_file(extracted_text, output_text_file)