// chat
async function talk_to_chat(data) {
    const response = await fetch(
    "https://www.stack-inference.com/inference/v0/run/e73fe5b4-18e3-4a15-a764-7306aa894b59/6611c3ea1f5611d7a978382c",
    {
        headers: {'Authorization':
         'Bearer a0c8ff3f-5272-4e09-b892-67c9d3588e55',
         'Content-Type': 'application/json'
    },
        method: "POST",
        body: JSON.stringify(data),
    }
    );
    const result = await response.json();
    return result;
}

export async function ask_question(query) {
    talk_to_chat({"in-0": query, "user_id": `<USER or Conversation ID>`}).then((response) => {
        console.log(JSON.stringify(response));
    });
}
// add custom args




// code gen
async function generate_code(data) {
    const response = await fetch(
    "https://www.stack-inference.com/inference/v0/run/41a297d4-a9b3-4719-9090-7a2102e0571b/66121acc468d48c289b305d4",
    {
        headers: {'Authorization':
         'Bearer 3f051b11-620c-47d3-8b9c-1c071de1e215',
         'Content-Type': 'application/json'
    },
        method: "POST",
        body: JSON.stringify(data),
    }
    );
    const result = await response.json();
    return result;
}

// add custom params

export async function ask_for_code(){
    generate_code({"in-0": `using every non latex file in your knowledge base, generate a latex code that visulizes and explains everything. In my output I want diagrams, examples, explainations, and much more. No words only code. Do not cite your sources, just write code.`, "user_id": `<USER or Conversation ID>`}).then((response) => {
        console.log(JSON.stringify(response));
    });
}

