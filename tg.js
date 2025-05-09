function sendTelegramMessage(text) {
  fetch(`https://api.telegram.org/bot8042262752:AAGa7KB_77A7L23_bt66lAUJ1LiZCMzsBXw/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: 6268246679,
      text: text
    })
  }).catch(err => console.error('Telegram Error:', err));
}
