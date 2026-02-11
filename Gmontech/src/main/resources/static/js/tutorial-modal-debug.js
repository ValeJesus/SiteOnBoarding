console.log("=== TUTORIAL MODAL DEBUG ===");
console.log("Page loaded at:", new Date().toLocaleTimeString());

// Verificar localStorage
const hasSeenTutorial = localStorage.getItem("tutorialSeen");
console.log("📦 localStorage tutorialSeen:", hasSeenTutorial);

// Aguardar DOM estar pronto
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTutorial);
} else {
    initTutorial();
}

function initTutorial() {
    console.log("\n=== DOM READY - INICIANDO TUTORIAL ===");
    
    // Elemento modal
    const modal = document.getElementById("tutorialModal");
    console.log("✓ Modal element:", modal ? "ENCONTRADO" : "❌ NÃO ENCONTRADO");
    
    if (!modal) {
        console.error("❌ ERRO CRÍTICO: Modal não encontrado!");
        return;
    }

    console.log("✓ Modal display inicial:", window.getComputedStyle(modal).display);
    console.log("✓ Modal classe inicial:", modal.className);

    // Verificar slides
    const slides = document.querySelectorAll(".tutorial-slide");
    console.log("✓ Slides encontrados:", slides.length);

    // Verificar botões
    const closeBtn = document.getElementById("tutorialClose");
    const prevBtn = document.getElementById("tutorialPrev");
    const nextBtn = document.getElementById("tutorialNext");
    
    console.log("✓ Close button:", closeBtn ? "ENCONTRADO" : "❌ NÃO");
    console.log("✓ Prev button:", prevBtn ? "ENCONTRADO" : "❌ NÃO");
    console.log("✓ Next button:", nextBtn ? "ENCONTRADO" : "❌ NÃO");

    // Verificar se vai abrir
    if (!hasSeenTutorial) {
        console.log("\n🎯 PRIMEIRA VISITA - VAI ABRIR O TUTORIAL");
        
        // Força display flex
        modal.style.display = "flex";
        console.log("✓ Modal display após setado:", modal.style.display);
        
        // Adiciona classe is-open
        modal.classList.add("is-open");
        console.log("✓ Classe 'is-open' adicionada");
        
        // Marca como visto
        localStorage.setItem("tutorialSeen", "true");
        console.log("✓ localStorage.tutorialSeen setado para 'true'");
        
        console.log("\n✅ TUTORIAL ABERTO COM SUCESSO!");
    } else {
        console.log("\n⏭️ JÁ VISTO - NÃO VAI ABRIR");
    }
}

// Função para resetar
window.debugResetTutorial = function() {
    console.log("\n🔄 RESETANDO TUTORIAL...");
    localStorage.removeItem("tutorialSeen");
    const modal = document.getElementById("tutorialModal");
    if (modal) {
        modal.style.display = "none";
        modal.classList.remove("is-open");
    }
    console.log("✓ Reset completo - recarregue a página");
};
