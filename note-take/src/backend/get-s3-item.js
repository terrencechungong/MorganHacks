const AWS = require('aws-sdk');

// Configure AWS
AWS.config.update({
  region: 'us-east-1',
  // Credentials are loaded from environment variables or AWS credentials file
});

const s3 = new AWS.S3();

app.get('/generate-presigned-url', (req, res) => {
  const fileName = req.query.fileName; // Use a query parameter for the custom file name
  const fileType = 'audio/mp3';

  const s3Params = {
    Bucket: 'morgan-hacks',
    Key: fileName,
    Expires: 60, // Expires in 60 seconds
    ContentType: fileType,
    ACL: 'bucket-owner-full-control',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
    };
    res.json(returnData);
  });
});

import React, { useState } from 'react';
import Amplify, { Storage } from 'aws-amplify';

// Configure Amplify with your AWS credentials
Amplify.configure({
  Auth: {
    // Add your Auth configuration here if needed
  },
  Storage: {
    // Replace 'YOUR_S3_BUCKET_NAME' with your actual bucket name
    bucket: 'morgan-hacks',
    region: 'us-east-1', // e.g. 'us-east-1'
  }
});

const UploadComponent = () => {
  const [file, setFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Function to handle file upload
  const handleUpload = async () => {
    if (file) {
      try {
        // Upload the file to S3 bucket
        await Storage.put(file.name, file, {
          contentType: file.type
        });
        console.log('File uploaded successfully');
        // Optionally, you can perform additional actions after successful upload
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadComponent;
