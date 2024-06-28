const path = {
    home: '/',
    login: '/connexion',
    companies: '/entreprises',
    company: '/entreprises/:id',
    internship: '/offres/stage',
    workStudy: '/offres/alternance',
    offer: '/offres/:id',
    requestDetail: '/demandes/:id',
    apply: '/offres/postuler/:id',
    studentRegistration: '/inscription/etudiant',
    companyRegistration: '/inscription/entreprise',
    uiExample: '/ui-example',
    admin: {
        profil: '/admin/profil',
        offers: '/admin/offres',
        createOffer: '/admin/offres/creer',
    },
    confirmation: '/confirmation'
}

export default path;
