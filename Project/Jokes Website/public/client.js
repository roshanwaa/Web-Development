document.addEventListener('DOMContentLoaded', () => {
  const jokeText = document.getElementById('joke-text');
  const refreshButton = document.getElementById('refresh-button');

  refreshButton.addEventListener('click', async () => {
    try {
      const jokeData = await fetch('/getJoke').then((res) => res.json());
      jokeText.innerText = jokeData.joke;
    } catch (error) {
      console.error('Error fetching joke:', error);
      jokeText.innerText = 'Failed to fetch joke';
    }
  });
});
