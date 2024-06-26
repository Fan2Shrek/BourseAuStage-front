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
    createOffer: '/offres/creer',
    unauthorized: '/403',
    uiExample: '/ui-example',
    admin: {
        profil: '/admin/profil',
        offers: '/admin/offres',
    },
}
export default path;
