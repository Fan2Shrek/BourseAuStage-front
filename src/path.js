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
    studentRegistration: '/inscription?profil=etudiant',
    companyRegistration: '/inscription/entreprise',
    uiExample: '/ui-example',
    admin: {
        profil: '/admin/profil',
        offers: '/admin/offres',
        createOffer: '/admin/offres/creer',
    },
}
export default path;
