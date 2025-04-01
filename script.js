

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

const elementsToShow = document.querySelectorAll('.section, .card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

elementsToShow.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});


const craftboxIcons = document.querySelector(".craftbox-imagens");

const observerIcons = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            craftboxIcons.classList.add("aparecer");
        }
    });
}, { threshold: 0.5 });

observerIcons.observe(craftboxIcons);













document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("julia").classList.add("aparecer");
    }, 500);
});



function trocarImagem(elemento, novaImagem) {
    elemento.src = novaImagem;
}






const translations = {
    en: {
        title: "JULIA MICHETTI",
        descricaoHero: "Computer Science focused on Project Development and Research",
        trabalhosTitulo: "01. WORKS",
        minhaJornada: "My journey in Computer Science is driven by the desire to put into practice what I study, explore and often connect subjects that interest me. I am dedicated to developing projects that make a difference in some way. I usually publish some of my code on my GitHub and I invite you to take a look. I believe that my projects reflect my dedication, commitment, and evolution. Notwithstanding this, I seek to commit myself to a lot of academic activities, I have already been part of the junior company Território of the Federal University of Minas Gerais.",
        tituloServicos: "02. WHAT CAN I DO FOR YOU?",
        projeto1: "#PROJECT01 - ChatBot",
        descricaoProjeto1: "This project was implemented with JavaScript and is easy to run. It generates a QRCode for the company to activate. It offers personalized and automated support, optimizing user contact and making processes more efficient.",
        projeto2: "#PROJECT02 - AI Predicting Flight Delays",
        descricaoProjeto2: "Uses machine learning in Python to predict flight delays by analyzing flight data inside and outside the Schengen area. Through exploratory analysis, it identifies patterns and trends that help with predictions.",
        projeto3: "#PROJECT03 - Registration System",
        descricaoProjeto3: "The registration system uses CRUD – Create, Read, Update, and Delete, one of the useful concepts not only in Java but in all programming languages.",
        craftbox: "CraftBox",
        craftboxDesc: "It consists of applications and languages that I enjoy using or have already mastered. These are my go-to choices for projects.",
        skills: "04. SKILLS",
        softSkills: "Soft Skills",
        hardSkills: "Hard Skills",
        filosofia: "05. PHILOSOPHY",
        textoFilosofia: "My life philosophy is that I am driven by curiosity. I like to understand new areas and I am fascinated by questions about the universe. As Feynman said: 'It is better to have questions that cannot be answered than to have answers that cannot be questioned.' I follow the philosophy that, with our limited time, knowledge must be passed on, with a strong emphasis on honesty. I enjoy solving logical exercises, and for me, focusing on the journey is just as important as reaching the result.",
        estudos: "+ STUDIES",
        estudo1: "Computer Science — <strong>PUC MG</strong>",
        estudo2: "Tourism  — <strong> UFMG </strong>",
        contato: "Contact",
        communication: "→ Empathetic communication",
        curiosity: "→ Intellectual curiosity",
        teamwork: "→ Teamwork",
        ml: "→ Machine Learning",
        databases: "→ Databases",
        architecture: "→ Architecture and Algorithms",
        contato: "Contact",
        contatoTexto: "Contact me by email or through my LinkedIn profile.",
        atenciosamente: "Sincerely",
    },
    it: {
        title: "JULIA MICHETTI",
        trabalhosTitulo: "01. LAVORI",
        descricaoHero: "Informatica focalizzata sullo sviluppo di progetti e ricerca",
        minhaJornada: "Minha esperienza in Informatica è guidata dal desiderio di mettere in pratica ciò che studio, esplorare e spesso collegare argomenti che mi appassionano. Mi dedico a sviluppare progetti che possano fare la differenza in qualche modo. Pubblico alcuni dei miei codici su GitHub e ti invito a dare un’occhiata. Credo che i miei progetti riflettano la mia dedizione, impegno e crescita. Inoltre, cerco sempre di partecipare attivamente ad attività accademiche e in passato ho fatto parte della junior enterprise Território dell’Università Federale del Minas Gerais.",
        tituloServicos: "02. COSA POSSO FARE PER TE?",
        projeto1: "#PROGETTO01 - ChatBot",
        descricaoProjeto1: "Questo progetto è stato implementato con JavaScript, facile da eseguire. Genera un QRCode per l'attivazione dell'azienda. Offre un supporto personalizzato e automatizzato, ottimizzando il contatto con gli utenti e rendendo i processi più efficienti.",
        projeto2: "#PROGETTO02 - IA Prevedendo Ritardi di Volo",
        descricaoProjeto2: "Il progetto IA Aumentata: Previsione dei Voli utilizza il machine learning in Python per prevedere i ritardi dei voli, analizzando i dati dei voli dentro e fuori l'area Schengen. Attraverso l'analisi esplorativa, identifica modelli e tendenze che aiutano nelle previsioni.",
        projeto3: "#PROGETTO03 - Sistema di Registrazione",
        descricaoProjeto3: "Il sistema di registrazione utilizza CRUD – Create, Read, Update e Delete, uno dei concetti utili non solo in Java ma in tutti i linguaggi di programmazione.",
        craftbox: "CraftBox",
        craftboxDesc: "È composta da applicazioni e linguaggi che mi piace usare o che ho già padroneggiato. Queste sono le mie preferenze per i progetti.",
        skills: "04. COMPETENZE",
        softSkills: "Competenze Interpersonali",
        hardSkills: "Competenze Tecniche",
        filosofia: "05. FILOSOFIA",
        textoFilosofia: "La mia filosofia di vita è che sono guidata dalla curiosità. Mi piace comprendere nuove aree e sono affascinata dalle domande sull'universo. Come diceva Feynman: 'È meglio avere domande che non possono essere risposte che avere risposte che non possono essere messe in discussione.' Seguo la filosofia che, con il nostro tempo limitato, la conoscenza deve essere trasmessa, con una forte enfasi sull'onestà. Mi piace risolvere esercizi logici e per me concentrarsi sul cammino è altrettanto importante quanto raggiungere il risultato.",
        estudos: "+ STUDI",
        estudo1: "Informatica — <strong>PUC MG</strong>",
        estudo2: "Turismo  — <strong> UFMG </strong>",
        contato: "Contatto",
        communication: "→ Comunicazione empatica",
        curiosity: "→ Curiosità intellettuale",
        teamwork: "→ Lavoro in squadra",
        ml: "→ Machine Learning",
        databases: "→ Basi di dati",
        architecture: "→ Architettura e Algoritmi",
        contato: "Contatto",
        contatoTexto: "Contattami via e-mail o tramite il mio profilo LinkedIn.",
        atenciosamente: "Cordiali saluti",
    }
};








function trocarIdioma(lang) {
    if (lang === "pt") {
        location.reload();
        return;
    }
    
    // Atualizando o título "TRABALHOS" na seção
    document.querySelector("#trabalhos h2").innerText = translations[lang].trabalhosTitulo;

    // Atualizando outros conteúdos conforme necessário
    document.getElementById("minha-jornada").innerHTML = translations[lang].minhaJornada;

    document.getElementById("julia").innerHTML = `<h1>${translations[lang].title}</h1>`;
    document.getElementById("minha-jornada").innerHTML = translations[lang].minhaJornada;
    document.getElementById("titulo-servicos").innerHTML = `<h2>${translations[lang].tituloServicos}</h2>`;
    document.querySelector(".contato-titulo").innerText = translations[lang].contato;
 
    // Atualizar o título das Skills
    document.querySelector("#skills h2").innerText = translations[lang].skills;

    // Atualizar os títulos de Soft Skills e Hard Skills
    document.querySelectorAll(".skills-container h3")[0].innerText = translations[lang].softSkills;
    document.querySelectorAll(".skills-container h3")[1].innerText = translations[lang].hardSkills;

    // Atualizar os itens das listas
    const softSkillsItems = document.querySelectorAll(".soft-skills li");
    const hardSkillsItems = document.querySelectorAll(".hard-skills li");

     // Atualiza os textos dos projetos
     let projetos = document.querySelectorAll(".card");
     projetos[0].querySelector("h3").innerText = translations[lang].projeto1;
     projetos[0].querySelector("p").innerText = translations[lang].descricaoProjeto1;
     projetos[1].querySelector("h3").innerText = translations[lang].projeto2;
     projetos[1].querySelector("p").innerText = translations[lang].descricaoProjeto2;
     projetos[2].querySelector("h3").innerText = translations[lang].projeto3;
     projetos[2].querySelector("p").innerText = translations[lang].descricaoProjeto3;
 
     // Atualiza CraftBox
     document.querySelector("#craftbox h2").innerText = translations[lang].craftbox;
     document.querySelector("#craftbox p").innerText = translations[lang].craftboxDesc;
 

    // Atualizando o conteúdo do contato
document.querySelector(".contato-info span").innerText = translations[lang].contatoTexto;

// Atualizando o texto "Atenciosamente"
document.querySelector(".atenciosamente").innerText = translations[lang].atenciosamente;

// Atualizando o título "+ ESTUDOS"
document.querySelector("#filosofia .estudos-titulo").innerText = translations[lang].estudosTitulo;

// Atualizando os estudos
document.querySelector("#filosofia .estudo1").innerHTML = translations[lang].estudo1;
document.querySelector("#filosofia .estudo2").innerHTML = translations[lang].estudo2;

    if (softSkillsItems.length === 3 && hardSkillsItems.length === 3) {
        softSkillsItems[0].innerText = translations[lang].communication;
        softSkillsItems[1].innerText = translations[lang].curiosity;
        softSkillsItems[2].innerText = translations[lang].teamwork;

        hardSkillsItems[0].innerText = translations[lang].ml;
        hardSkillsItems[1].innerText = translations[lang].databases;
        hardSkillsItems[2].innerText = translations[lang].architecture;
    }
    // Atualizar Filosofia
    document.querySelector("#filosofia h2:nth-child(1)").innerText = translations[lang].filosofia;
    document.querySelector(".texto-filo").innerText = translations[lang].textoFilosofia;
    document.querySelector("#filosofia div:nth-child(2) h2").innerText = translations[lang].estudos;
    document.querySelector("#filosofia div:nth-child(2) p:nth-child(1)").innerHTML = translations[lang].estudo1;
    document.querySelector("#filosofia div:nth-child(2) p:nth-child(2)").innerHTML = translations[lang].estudo2;


}




