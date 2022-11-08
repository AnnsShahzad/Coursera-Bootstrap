const nonsmoking = document.querySelector('#non-smoking-btn');
const smoking = document.querySelector('#smoking-btn');

nonsmoking.addEventListener('click', () => {
    nonsmoking.classList.add('active');
    smoking.classList.remove('active');
});

smoking.addEventListener('click', () => {
    smoking.classList.add('active');
    nonsmoking.classList.remove('active');
});

