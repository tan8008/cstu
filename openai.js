

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const chat = document.getElementById('chat');
  const message = document.getElementById('message');
  const send = document.getElementById('send');
  const response = document.getElementById('response');
  
  send.addEventListener('click', () => {
    const text = message.value;
    const responseData = await openai.request({
      method: 'post',
      url: 'https://api.openai.com/v1/engines/chatGPT/completions',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      data: {
        prompt: text,
        temperature: 0.7,
        max_tokens: 30,
      },
    });
  
    response.innerHTML = responseData.choices[0].text;
  });
  