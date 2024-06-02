import tokens from "../tokens";

const fr = {
    [tokens.entities.company.name]: "Nom",
    [tokens.entities.offer.name]: "Nom",
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
    [tokens.breadCrumb.home]: "Accueil",
    [tokens.breadCrumb.uiExample]: "Exemples d'UI",
    [tokens.breadCrumb.companies]: "Entreprises",
    [tokens.breadCrumb.offers.base]: "Offres",
    [tokens.breadCrumb.offers.internship]: "Stages",
    [tokens.breadCrumb.offers.workStudy]: "Alternances",
    [tokens.sortings.clarifications.alphabeticalSortAZ]: "A-Z",
    [tokens.sortings.clarifications.alphabeticalSortZA]: " Z-A",
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
}

export default fr
