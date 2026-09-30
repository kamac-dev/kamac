const copyBtn = document.querySelector('.copy-btn');
const acctNum = document.querySelector('.acct-num');
const message = document.querySelector('.message');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(acctNum.textContent)
    .then(() => {
      message.textContent = 'Copied!';
      message.classList.add('show');

      setTimeout(() => {
        message.classList.remove('show');
      }, 1000);
    })
    .catch(() => {
      message.textContent = 'Could not copy.';
      message.classList.add('show');
    });
});