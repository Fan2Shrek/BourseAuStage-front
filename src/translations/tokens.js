const tokens = {
    facets: {
        label: {
            roles: "facets.label.roles",
            firstName: "facets.label.firstName",
            company: {
                name: "facets.label.company.name",
                effective: "facets.label.company.effective",
                range: {
                    global: "facets.label.company.range.global",
                    input: "facets.label.company.range.input",
                },
            },
        },
        options: {
            all: 'facets.options.all',
            betweenAndMore: 'facets.options.betweenAndMore',
        }
    },
    actions: {
        login: "actions.login",
        createAccount: "actions.createAccount",
        logout: "actions.logout",
    },
    navbar: {
        home: "navbar.home",
        offers: "navbar.offers",
        requests: "navbar.requests",
        companies: "navbar.companies",
        students: "navbar.students",
    },
    footer: {
        description: "footer.description",
        links: {
            home: "footer.links.home",
            offers: "footer.links.offers",
            students: "footer.links.students",
            companies: "footer.links.companies",
            blog: "footer.links.blog",
            sponsors: "footer.links.sponsors",
            legal: "footer.links.legal",
            personalData: "footer.links.personalData",
            contact: "footer.links.contact",
        },
        register: {
            title: "footer.register.title",
            description: "footer.register.description",
            email: "footer.register.email",
            submit: "footer.register.submit",
        },
        copyright: "footer.copyright",
    },
    page: {
        companyDetails: {
            activity: "page.companyDetails.activity",
            age: "page.companyDetails.age",
            effective: "page.companyDetails.effective",
            turnover: "page.companyDetails.turnover",
            city: "page.companyDetails.city",
            presentation: "page.companyDetails.presentation",
            socialsLinks: "page.companyDetails.socialsLinks",
            contact: "page.companyDetails.contact",
            contacts: "page.companyDetails.contacts",
            phone: "page.companyDetails.phone",
            images: {
                alt: "page.companyDetails.images.alt"
            }
        },
        companies: {
            title: "page.companies.title",
            description: "page.companies.description",
        }
    },
    breadCrumb: {
        home: "breadCrumb.home",
        uiExample: "breadCrumb.uiExample",
        companies: "breadCrumb.companies",
    }
}

export default tokens
