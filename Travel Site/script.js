const dialog = document.querySelector('dialog')
const openL = document.getElementById('open')

openL.addEventListener('click', () => {
  dialog.showModal();
});

dialog.addEventListener('click', (event) => {
    if (event.target == dialog) {
        dialog.close()
    }
});
