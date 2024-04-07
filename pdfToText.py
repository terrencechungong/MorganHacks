from pypdf import PdfReader

import PyPDF2

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
    
    input_pdf_path = 'C:\\Users\\shane\\OneDrive\\Desktop\\MorganHacksFiles\\TakeNote\\Sample Pdfs\\16-parsing2.pdf'
    
    # Extract text from the PDF file
    extracted_text = extract_text_from_pdf(input_pdf_path)
    
    # Print the extracted text to the console
    print(extracted_text)
    
    # Path to the output text file
    output_text_file = 'output.txt'
    
    # Extract text from the PDF file
    extracted_text = extract_text_from_pdf(input_pdf_path)
    
    # Save the extracted text to a text file
    save_text_to_file(extracted_text, output_text_file)