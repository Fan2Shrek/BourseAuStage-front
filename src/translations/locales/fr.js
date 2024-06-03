import tokens from "../tokens";

const fr = {
    [tokens.entities.company.name]: "Nom",
    [tokens.entities.offer.name]: "Nom",
    [tokens.entities.offer.createdAt]: "Date",
    [tokens.entities.offer.availableAt]: "Date limite",
    [tokens.apiCollectionList.title]: "Résultats",
    [tokens.apiCollectionList.sorting.label]: "Trier par :",
    [tokens.facets.label.companies.activities.name]: "Secteurs d'activité",
    [tokens.facets.label.companies.category.name]: "Catégorie",
    [tokens.facets.label.companies.effective]: "Effectif",
    [tokens.facets.label.companies.range.global]: "Distance - {{min}} à {{max}} km",
    [tokens.facets.label.companies.range.input]: "A moins de {{value}} km",
    [tokens.facets.label.offers.activities.name]: "Profils métiers",
    [tokens.facets.label.offers.studyLevel.name]: "Niveau recherché",
    [tokens.facets.label.offers.end]: "Durée",
    [tokens.facets.label.offers.range.global]: "Distance - {{min}} à {{max}} km",
    [tokens.facets.label.offers.range.input]: "A moins de {{value}} km",
    [tokens.facets.options.all]: "Tous",
    [tokens.facets.options.betweenAndMore]: "et supérieur",
    [tokens.input.file.infos]: "Aucun fichier séléctionné",
    [tokens.actions.login]: "Se connecter",
    [tokens.actions.createAccount]: "Créer un compte",
    [tokens.actions.logout]: "Se déconnecter",
    [tokens.actions.back]: "Retour",
    [tokens.actions.add]: "Ajouter",
    [tokens.navbar.home]: "Accueil",
    [tokens.navbar.offers]: "Offres",
    [tokens.navbar.requests]: "Demandes",
    [tokens.navbar.companies]: "Entreprises",
    [tokens.navbar.students]: "Etudiants",
    [tokens.navbar.internship]: "Offre de stage",
    [tokens.navbar.workStudy]: "Offre d'alternance",
    [tokens.navbar.UI]: "UI",
    [tokens.footer.description]: "Première plateforme dédiée à la recherche de stages et d’alternance qui relie automatiquement les étudiants et les entreprises.",
    [tokens.footer.links.home]: "Accueil",
    [tokens.footer.links.offers]: "Offres",
    [tokens.footer.links.students]: "Etudiants",
    [tokens.footer.links.companies]: "Entreprises",
    [tokens.footer.links.blog]: "Blog",
    [tokens.footer.links.sponsors]: "Sponsors",
    [tokens.footer.links.legal]: "Mentions légales",
    [tokens.footer.links.personalData]: "Données personnelles",
    [tokens.footer.links.contact]: "Contact",
    [tokens.footer.register.title]: "Etudiants, créez votre compte",
    [tokens.footer.register.description]: "Recevez automatiquement par email les offres qui vous intéressent !",
    [tokens.footer.register.email]: "Votre email",
    [tokens.footer.register.submit]: "C'est parti",
    [tokens.footer.copyright]: "2024 © Bourse aux Stages - Tous droits réservés",
    [tokens.page.companyDetails.activity]: "Activité",
    [tokens.page.companyDetails.age]: "Ancienneté",
    [tokens.page.companyDetails.effective]: "Effectif",
    [tokens.page.companyDetails.turnover]: "Chiffre d'affaires",
    [tokens.page.companyDetails.city]: "Situation",
    [tokens.page.companyDetails.presentation]: "Présentation",
    [tokens.page.companyDetails.socialsLinks]: "Réseaux sociaux",
    [tokens.page.companyDetails.contact]: "Nous joindre",
    [tokens.page.companyDetails.contacts]: "Vos contacts",
    [tokens.page.companyDetails.phone]: "Téléphone",
    [tokens.page.companyDetails.images.alt]: "Image de {{company}}",
    [tokens.page.companyDetails.relatedOffers.internship]: "Offres de stage proposées",
    [tokens.page.companyDetails.relatedOffers.workStudy]: "Offres en alternance proposées",
    [tokens.page.companies.title]: "Liste des entreprises",
    [tokens.page.companies.description]: "Découvrez les entreprises qui proposent des offres de stage ou d’alternance",
    [tokens.page.companies.apiCollectionList.foundLabel]: "entreprise(s) trouvée(s)",
    [tokens.page.offers.internship.title]: "Offres de stage",
    [tokens.page.offers.internship.apiCollectionList.foundLabel]: "offre(s) de stage trouvée(s)",
    [tokens.page.offers.workStudy.title]: "Offres d'alternance",
    [tokens.page.offers.workStudy.apiCollectionList.foundLabel]: "offre(s) d'alternance trouvée(s)",
    [tokens.page.home.hero.title.first]: "Trouver un stage n'aura jamais été",
    [tokens.page.home.hero.title.underlined]: "aussi facile !",
    [tokens.page.home.hero.description]: "Trouvez les offres de stage ou d’alternance près de chez vous qui correspondent à votre profil et à vos attentes.",
    [tokens.page.home.hero.offers]: "<secondary>{{internshipsNumber}}</secondary> offres de <bold>stages</bold> <bold>|</bold> <secondary>{{workStudiesNumber}}</secondary> offres <bold>d’alternance</bold> n’attendent que vous !",
    [tokens.page.home.highlightedCompanies.title]: "Entreprises à la une",
    [tokens.page.home.highlightedCompanies.image.alt]: "Logo de {{company}}",
    [tokens.page.home.incentive.title]: "Entreprises, déposez vos offres gratuitement",
    [tokens.page.home.incentive.text]: "Vous pourrez gérer votre planning d’accueil et bénéficier de nombreux services intégrés.",
    [tokens.page.home.incentive.cta]: "Créer votre compte",
    [tokens.page.home.lastOffers.title]: "Dernières <secondary>offres</secondary>",
    [tokens.page.home.lastOffers.cta]: "Toutes les offres",
    [tokens.page.home.lastRequests.title]: "Dernières <secondary>demandes</secondary>",
    [tokens.page.home.lastRequests.cta]: "Toutes les demandes",
    [tokens.page.offerDetails.presentationInternShip]: "A propos de ce stage",
    [tokens.page.offerDetails.presentationWork]: "A propos de cette alternance",
    [tokens.page.offerDetails.mission]: "Missions",
    [tokens.page.offerDetails.profile]: "Profil recherché",
    [tokens.page.offerDetails.deadlines]: "Échéances",
    [tokens.page.offerDetails.progress.singular]: "Reste {{remainingDays}} jour pour postuler",
    [tokens.page.offerDetails.progress.plural]: "Reste {{remainingDays}} jours pour postuler",
    [tokens.page.offerDetails.availableAt]: "Postuler avant le",
    [tokens.page.offerDetails.createdAt]: "Offre publié le",
    [tokens.page.offerDetails.typeOffer]: "Type d'offre",
    [tokens.page.offerDetails.internship]: "Stage",
    [tokens.page.offerDetails.workStudy]: "Alternance",
    [tokens.page.offerDetails.payed]: "Gratification",
    [tokens.page.offerDetails.isPayed]: "Obligatoire",
    [tokens.page.offerDetails.isNotPayed]: "Non obligatoire",
    [tokens.page.offerDetails.submitted]: "Candidatures déposées",
    [tokens.page.offerDetails.profileJob]: "Profils métiers",
    [tokens.page.offerDetails.skills]: "Compétences recherchées",
    [tokens.page.offerDetails.more]: "En savoir plus sur {{company}}",
    [tokens.page.offerDetails.cta]: "Postuler",
    [tokens.page.offerDetails.images.alt]: "Image de {{company}}",
    [tokens.page.offerDetails.similar.title]: "Offre de stage similaires",
    [tokens.page.offerDetails.similar.cta]: "Voir toutes les offres",
    [tokens.breadCrumb.home]: "Accueil",
    [tokens.breadCrumb.uiExample]: "Exemples d'UI",
    [tokens.breadCrumb.companies]: "Entreprises",
    [tokens.breadCrumb.offers.base]: "Offres",
    [tokens.breadCrumb.offers.internship]: "Stages",
    [tokens.breadCrumb.offers.workStudy]: "Alternances",
    [tokens.sortings.clarifications.alphabeticalSortAZ]: "A-Z",
    [tokens.sortings.clarifications.alphabeticalSortZA]: "Z-A",
    [tokens.sortings.clarifications.dateASC]: "plus récent",
    [tokens.sortings.clarifications.dateDESC]: "moins récent",
    [tokens.card.company.internship.singular]: "stage",
    [tokens.card.company.internship.plural]: "stages",
    [tokens.card.company.workStudy.singular]: "alternance",
    [tokens.card.company.workStudy.plural]: "alternances",
    [tokens.card.offer.internship]: "Stage",
    [tokens.card.offer.workStudy]: "Alternance",
    [tokens.card.offer.dates.column]: "{{start}} au {{end}}",
    [tokens.card.offer.dates.row]: "Du {{start}} au {{end}} ({{duration}} jours)",
    [tokens.card.offer.payed]: "Rémunéré",
    [tokens.card.offer.cta.button.main]: "Postuler",
    [tokens.card.offer.cta.button.more]: "En savoir plus",
    [tokens.card.offer.cta.progress.singular]: "Reste {{remainingDays}} jour pour postuler",
    [tokens.card.offer.cta.progress.plural]: "Reste {{remainingDays}} jours pour postuler",
    [tokens.card.request.studentLine]: "{{firstName}} ({{age}} ans)",
    [tokens.card.request.internship]: "Stage",
    [tokens.card.request.workStudy]: "Alternance",
    [tokens.card.request.dates]: "Du {{start}} au {{end}} ({{duration}} jours)",
    [tokens.page.apply.duration]: "Du {{start}} au {{end}}",
    [tokens.page.apply.title]: "Postuler à cette ofrre de stage",
    [tokens.page.apply.myPhoto.label]: "Votre photo",
    [tokens.page.apply.myPhoto.placeholder]: "<multiLine><main>Importer (500x500 pixels max)</main><grey>JPG or PNG (5 Mo max)</grey></multiLine>",
    [tokens.page.apply.mySkills]: "Vos compétences",
    [tokens.page.apply.youAre]: "Vous êtes",
    [tokens.page.apply.gender]: "Genre",
    [tokens.page.apply.firstname]: "Prénom",
    [tokens.page.apply.lastname]: "Nom",
    [tokens.page.apply.birth]: "Date de naissance",
    [tokens.page.apply.phone]: "Téléphone mobile",
    [tokens.page.apply.email]: "Email",
    [tokens.page.apply.confirmEmail]: "Confirmez votre email",
    [tokens.page.apply.address]: "Adresse",
    [tokens.page.apply.addressPlus]: "Complément d'adresse",
    [tokens.page.apply.postalCode]: "Code postal",
    [tokens.page.apply.city]: "Ville",
    [tokens.page.apply.personalWebsite]: "Adresse site web personnel",
    [tokens.page.apply.linkedIn]: "Liens vers votre profil LinkedIn",
    [tokens.page.apply.driverLicence]: "J'ai le permis de conduire",
    [tokens.page.apply.disability]: "J'ai une forme de handicap",
    [tokens.page.apply.mySituation]: "Votre situation actuelle",
    [tokens.page.apply.study]: "Niveau d'études",
    [tokens.page.apply.currentDiploma]: "Diplome préparé",
    [tokens.page.apply.school]: "Etablissement",
    [tokens.page.apply.currentFormation]: "Nom de la formation préparée",
    [tokens.page.apply.coverLetter]: "Vos atouts et motivations pour postuler à cette offre de stage",
    [tokens.page.apply.createAccount]: "Créer mon compte membre pour éviter de ressaisir ces informations à la fois prochaine",
    [tokens.page.apply.submit]: "Postuler à cette offre de stage",
    [tokens.page.apply.legal]: "En validant ce formulaire, vous confimez que vous acceptez nos conditions d'utilisation et notre politique de confidentialité",
    [tokens.page.apply.photoDescription]: "Ajouter votre photo à votre profil est apprécié par les entreprises et augmente vos chances",
    [tokens.page.apply.skillsDescription]: "Ajouter jusqu'a 10 compétences :",
    [tokens.page.apply.myLanguages]: "Vos langues :",
    [tokens.page.apply.languageDescription]: "Ajouter les langues que vous pratiquez :",
    [tokens.page.apply.documents]: "CV et autres documents",
    [tokens.page.apply.documentsDescription]: "Importez votre CV et votre lettre de motivation ou ajoutez tout document utile à votre candidature (présentation détaillée de vos projets, portfolio, etc.)",
    [tokens.page.apply.experiences]: "Vos expériences professionnelles",
    [tokens.page.apply.experiencesDescription]: "Stages, emplois d'été, projets personnels :",
    [tokens.page.apply.cvField.label]: "Votre CV",
    [tokens.page.apply.cvField.placeholder]: "Importer votre CV",
    [tokens.page.apply.cvRequirements]: "format PDF, 20 Mo max",
    [tokens.page.apply.coverLetterField.label]: "Lettre de motivation",
    [tokens.page.apply.coverLetterField.placeholder]: "Importer votre Lettre de motivation",
    [tokens.page.apply.coverLetterRequirements]: "format PDF, 20 Mo max",
    [tokens.page.apply.otherField.label]: "Autre document",
    [tokens.page.apply.otherField.placeholder]: "Importer un autre document",
    [tokens.page.apply.otherRequirements]: "format PDF ou ZIP, 50 Mo max",
    [tokens.page.apply.motivations]: "Vos atouts & motivations pour postuler à cette offre de stage",
}

export default fr
