function showAlert() {
    setTimeout(() => showAlert1(), 1000);
}

const showAlert1 = () => alert('1');

const onInput = symbol => setTimeout(() => alert(symbol), 1000);