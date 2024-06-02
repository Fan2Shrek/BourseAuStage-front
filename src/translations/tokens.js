const tokens = {
    entities: {
        company: {
            name: "entities.company.name"
        },
        offer: {
            name: "entities.offer.name"
        }
    },
    apiCollectionList: {
        title: "apiCollection.title",
        sorting: {
            label: "apiCollection.sorting.label",
        },
    },
    card: {
        company: {
            internship: {
                singular: "card.company.internship.singular",
                plural: "card.company.internship.plural",
            },
            workStudy: {
                singular: "card.company.workStudy.singular",
                plural: "card.company.workStudy.plural",
            },
        },
        offer: {
            internship: "card.offer.internship",
            workStudy: "card.offer.workStudy",
            dates: {
                column: "card.offer.dates.column",
                row: "card.offer.dates.row",
            },
            payed: "card.offer.payed",
            cta: {
                button: {
                    main: "card.offer.cta.button.main",
                    more: "card.offer.cta.button.more",
                },
                progress: {
                    singular: "card.offer.progress.singular",
                    plural: "card.offer.progress.plural",
                },
            },
        },
        request: {
            studentLine: "card.request.studentLine",
            internship: "card.request.internship",
            workStudy: "card.request.workStudy",
            dates: "card.request.dates",
        },
    },
    facets: {
        label: {
            companies: {
                effective: "facets.label.companies.effective",
                activities: {
                    name: "facets.label.companies.activities.name",
                },
                category: {
                    name: "facets.label.companies.category.name",
                },
                range: {
                    global: "facets.label.companies.range.global",
                    input: "facets.label.companies.range.input",
                },
            },
            offers: {
                activities: {
                    name: "facets.label.offers.activities.name",
                },
                studyLevel: {
                    name: "facets.label.offers.studyLevel.name",
                },
                end: "facets.label.offers.end",
                range: {
                    global: "facets.label.offers.range.global",
                    input: "facets.label.offers.range.input",
                },
            }
        },
        options: {
            all: "facets.options.all",
            betweenAndMore: "facets.options.betweenAndMore",
        }
    },
    input: {
        file: {
            infos: "input.file.infos",
        },
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
        internship: "navbar.internship",
        workStudy: "navbar.workStudy",
        UI: "navbar.UI"
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
        home: {
            hero: {
                title: {
                    first: "page.home.hero.title.first",
                    underlined: "page.home.hero.title.underlined",
                },
                description: "page.home.hero.description",
                offers: "page.home.hero.offers",
            },
            incentive: {
                title: "page.home.incentive.title",
                text: "page.home.incentive.text",
                cta: "page.home.incentive.cta",
            },
            highlightedCompanies: {
                title: "page.home.highlightedCompanies.title",
                image: {
                    alt: "page.home.highlightedCompanies.image.alt",
                },
            },
            lastOffers: {
                title: "page.home.lastOffers.title",
                cta: "page.home.lastOffers.cta",
            },
            lastRequests: {
                title: "page.home.lastRequests.title",
                cta: "page.home.lastRequests.cta",
                studentLine: "page.home.lastRequests.studentLine",
            },
        },
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
            apiCollectionList: {
                foundLabel: "page.companies.apiCollectionList.foundLabel",
            }
        },
        offerDetails: {
            presentationInternShip: "page.offerDetails.presentationInternShip",
            presentationWork: "page.offerDetails.presentationWork",
            mission: "page.offerDetails.mission",
            profile: "page.offerDetails.profile",
            deadlines: "page.offerDetails.deadlines",
            progress: {
                singular: "card.offer.progress.singular",
                plural: "card.offer.progress.plural",
            },
            availableAt: "page.offerDetails.availableAt",
            createdAt: "page.offerDetails.createdAt",
            typeOffer: "page.offerDetails.typeOffer",
            internship: "page.offerDetails.internship",
            workStudy: "page.offerDetails.workStudy",
            payed: "page.offerDetails.payed",
            isPayed: "page.offerDetails.isPayed",
            isNotPayed: "page.offerDetails.isNotPayed",
            submitted: "page.offerDetails.submitted",
            profileJob: "page.offerDetails.profileJob",
            skills: "page.offerDetails.skills",
            more: "page.offerDetails.more",
            cta: "page.offerDetails.request",
            images: {
                alt: "page.companyDetails.images.alt"
            }
        },
        offers: {
            internship: {
                title: "page.offers.internship.title",
                apiCollectionList: {
                    foundLabel: "page.offers.internship.apiCollectionList.foundLabel",
                },
            },
            workStudy: {
                title: "page.offers.workStudy.title",
                apiCollectionList: {
                    foundLabel: "page.offers.workStudy.apiCollectionList.foundLabel",
                },
            },
        },
    },
    breadCrumb: {
        home: "breadCrumb.home",
        uiExample: "breadCrumb.uiExample",
        companies: "breadCrumb.companies",
        offers: {
            base: "breadCrumb.offers.base",
            internship: "breadCrumb.offers.internship",
            workStudy: "breadCrumb.offers.workStudy",
        },
    },
    sortings: {
        clarifications: {
            alphabeticalSortAZ: "sortings.clarifications.alphabeticalSortAZ",
            alphabeticalSortZA: "sortings.clarifications.alphabeticalSortZA",
        },
    },
}

export default tokens
