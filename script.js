// Botão de ação
document.getElementById("cta").addEventListener("click", () => {
  // Dispara evento do Pixel
  fbq('trackCustom', 'EntrouGrupoWhatsApp');

  // Redireciona para o grupo
  window.location.href = "https://chat.whatsapp.com/JgD1ribpZ28AlNbZQdbR1";
});
