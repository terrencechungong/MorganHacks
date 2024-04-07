async function FileUpload(blob) {
    const formData = new FormData();
    // Providing a filename for the blob; adjust "audio.mp3" as needed
    formData.append('file', blob, "audio.mp3");

    try {
        const response = await fetch('http://localhost:8080/api/files/upload', {
            method: 'POST',
            body: formData, // FormData will now include the filename
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            // Handle success, such as updating the UI or alerting the user
        } else {
            console.error('Upload failed');
            // Handle error, such as showing an error message
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle network or unexpected errors
    }
}

  

export default FileUpload;