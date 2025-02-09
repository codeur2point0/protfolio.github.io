


// Fonction pour basculer le menu
function toggleMenu() {
    const navLinks = document.querySelector('nav ul');  // Sélectionne le menu
    navLinks.classList.toggle('active');  // Ajouter ou supprimer la classe 'active'
}

function showMessage(section) {
    const titles = {
        'about': "À propos de moi",
        'passion': "Ma passion",
        'contact': "Contact"
    };
   
    const messages = {
        'about': `
        <div style="display: flex; align-items: center; gap: 20px;">
            <div style="flex: 1;">
                <p style="margin: 0px;">
                    Titulaire d'une Licence en Informatique et Sciences du Numérique,
                    spécialisée en Développement d'Applications à l'Université Virtuelle
                    de Côte d'Ivoire, je suis un développeur web passionné et rigoureux, organisé et capable de travailler sous pression.
                    Je maîtrise les technologies web essentielles et m'adapte facilement au
                    travail en équipe. Une formation serait un point clé pour mon apprentissage,
                    vu mon statut de nouveau diplômé en quête d'emploi.
                    je souhaiterai apprendre plus dans le domaine du développement web et mobile.
                </p>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>Développement front-end (HTML, CSS, JavaScript)</li>
                    <li>Développement back-end (Laravel, Node.js, Express, MongoDB, ect)</li>
                    <li>Création d'interfaces responsives</li>
                    <li>Optimisation des performances</li>
                </ul>
            </div>
            <div style="flex-shrink: 0;">
                <img src="user.png" alt="Ma photo" style="max-width: 150px; border-radius: 10px;">
            </div>
        </div>
    `,
        'passion': `
        <p style="margin: 0px;">
            Ma plus grande passion est le développement web.
            J'aime particulièrement créer des interfaces utilisateur
            intuitives et esthétiques qui améliorent l'expérience des utilisateurs.
            <strong>J'apprécie également développer des programmes qui soutiennent ces interfaces,
            en m'assurant que tout fonctionne harmonieusement en coulisses.
            Cela me permet d'avoir une vision globale des projets que je réalise
            et de créer des solutions complètes et efficaces.</strong>
        </p>
    `,
        'contact': `
        <p style="margin: 0px;">Vous pouvez me contacter par email à :</p>
        <ul style="margin-left: 20px; margin-top: 10px;">
            <li>Mail: <strong>kevinndoufou@gmail.com</strong></li>
            <li>Téléphone: <strong>05 46 07 31 91</strong></li>
            <li>Commune: <strong>Yopougon</strong></li>
        </ul>
    `
    };


    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    modalTitle.textContent = titles[section];
    modalText.innerHTML = messages[section];
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Fermons le modal en cliquant en dehors
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}