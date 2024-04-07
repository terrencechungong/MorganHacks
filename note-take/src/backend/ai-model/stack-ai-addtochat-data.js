const url =
'https://www.stack-inference.com/index/v0/\'6611c3ea1f5611d7a978382c\'/\'e73fe5b4-18e3-4a15-a764-7306aa894b59\'/\'docemb-0\'/documents'
const headers = {
  Authorization: 'Bearer a0c8ff3f-5272-4e09-b892-67c9d3588e55',
}


export default async function call_fetch(filename, myString) {
    const blob = new Blob([myString], { type: 'text/plain' });
    const file = new File([blob], filename, { type: 'text/plain' });

    const formData = new FormData();
    formData.append('file1', file);
    fetch(url, { headers, method: 'POST', body: formData })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error))

}