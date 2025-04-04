var typed = new Typed('.typing',{
    strings:["Mateus Mendes"],
    backSpeed:40,
    typeSpeed:40,
    loop: true
});
var typed = new Typed('.tipin',{
    strings:["Full Stack Developer and Teacher"],
    backSpeed:40,
    typeSpeed:40,
    loop:true
});


const chk = document.getElementById('chk');

// Verificar o tema atual
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'claro') {
    chk.checked = true;
  }
}

// Função para alternar o tema
chk.addEventListener('change', () => {
  if (chk.checked) {
    document.documentElement.setAttribute('data-theme', 'claro');
    localStorage.setItem('theme', 'claro');
  } else {
    document.documentElement.setAttribute('data-theme', 'escuro');
    localStorage.setItem('theme', 'escuro');
  }
});




























const translations = {
  pt: {
    homee: "Menu",
    servicess: "Serviços",
    contactt: "Contato",
    aboutt: "Sobre",
    hello: "Olá, eu sou ",
    full: "Desenvolvedor",
    e: " e",
    estudante:"Estudante",
    mim:"Tenho 17 anos e sou um desenvolvedor Full Stack. Estou sempre aprendendo e praticando com tecnologias como HTML, CSS, JavaScript, C#, MySQL. Embora eu não tenha nenhuma experiência profissional ainda, estou focado em desenvolver minhas habilidades e buscando oportunidades para aplicar meus conhecimentos e crescer como profissional.",
    baixar:"Baixar CV"
  },
  en: {
      homee: "Home",
      servicess: "Services",
      contactt: "Contact",
      aboutt: "About",
      hello:"Hello I'm ",
      full: "Develompent",
      e:" and",
      estudante:"Estudent",
      mim:"I'm 17 years old and I'm a Full Stack developer. I'm always learning and practicing with technologies such as HTML, CSS, JavaScript, C#, MySQL. Although I don't have any professional experience yet, I'm focused on developing my skills and looking for opportunities to apply my knowledge and grow as a professional.",
      baixar:"Download CV"
  }
};

// Função para mudar o idioma
function changeLanguage(language) {
  document.getElementById("homee").textContent = translations[language].homee;
  document.getElementById("servicess").textContent = translations[language].servicess;
  document.getElementById("contactt").textContent = translations[language].contactt;
  document.getElementById("aboutt").textContent = translations[language].aboutt;
  document.getElementById("hello").textContent = translations[language].hello;
  document.getElementById("full").textContent = translations[language].full;
  document.getElementById("e").textContent = translations[language].e;
  document.getElementById("estudante").textContent = translations[language].estudante;
  document.getElementById("mim").textContent = translations[language].mim;
  document.getElementById("baixar").textContent = translations[language].baixar;



}

// Evento de mudança do seletor de idioma
document.getElementById("language").addEventListener("change", (event) => {
  changeLanguage(event.target.value);
});

// Inicializa com o idioma padrão (Português)
changeLanguage("pt");






