function mostrarMensagem() {
  const div = document.getElementById("mensagem");
  div.textContent = "💡Esse é o meu mini site! Obrigada. ";
  div.style.opacity = "0";
  setTimeout(() => div.style.opacity = "1", 100);
}
