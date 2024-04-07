async function uploadBlobToS3(blob, customFileName) {
    // Fetch the pre-signed URL from your server
    const response = await fetch(`/generate-presigned-url?fileName=${customFileName}`);
    const data = await response.json();
    const presignedUrl = data.signedRequest;
  
    // Use the pre-signed URL to upload the blob
    const uploadResponse = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'audio/mp3',
      },
      body: blob,
    });
  
    if (uploadResponse.ok) {
      console.log('Upload successful');
    } else {
      console.error('Upload failed with HTTP code:', uploadResponse.status);
    }
  }
  
  // Example usage
  