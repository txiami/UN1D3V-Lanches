function gerarCodigoPromocional() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = 'UN1D3V-';
    for (let i = 0; i < 6; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const codigo = gerarCodigoPromocional();
            document.getElementById('codigo-promocional').innerText = ` Código Promocional: ${codigo}`;
        });
    });
});
