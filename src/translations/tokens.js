const tokens = {
    entities: {
        company: {
            name: "entities.company.name"
        },
        offer: {
            name: "entities.offer.name",
            createdAt: "entities.offer.createdAt",
            availableAt: "entities.offer.availableAt",
        }
    },
    roles: {
        collaborator: "roles.collaborator",
        student: "roles.student",
        sponsor: "roles.sponsor",
        admin: "roles.admin",
    },
    apiCollectionList: {
        title: "apiCollection.title",
        sorting: {
            label: "apiCollection.sorting.label",
        },
    },
    sexes: {
        man: "sexes.man",
        woman: "sexes.woman",
        nonBinary: "sexes.nonBinary"
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
        myAccount: "actions.myAccount",
        createAccount: "actions.createAccount",
        logout: "actions.logout",
        back: "actions.back",
        add: "actions.add",
    },
    navbar: {
        modal: {
            title: "navbar.modal.title",
            student: "navbar.modal.student",
            company: "navbar.modal.company",
        },
        links: {
            home: "navbar.links.home",
            offers: "navbar.links.offers",
            requests: "navbar.links.requests",
            companies: "navbar.links.companies",
            students: "navbar.links.students",
            internship: "navbar.links.internship",
            workStudy: "navbar.links.workStudy",
            UI: "navbar.links.UI",
        },
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
    sidebar: {
        title: "sidebar.admin.title",
        links: {
            myCompany: "sidebar.links.myCompany",
            requests: "sidebar.links.requests",
            offers: "sidebar.links.offers",
            parameters: "sidebar.links.parameters",
        }
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
        login: {
            hero: {
                title: {
                    first: "page.login.hero.title.first",
                    underlined: "page.login.hero.title.underlined",
                },
            },
            form: {
                email: "page.login.form.email",
                password: "page.login.form.password",
                submit: "page.login.form.submit",
            },
            notifications: {
                error: "page.login.notification.error",
            },
        },
        profil: {
            update: "page.profil.update",
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
            contactUs: "page.companyDetails.contactUs",
            phone: "page.companyDetails.phone",
            images: {
                alt: "page.companyDetails.images.alt"
            },
            relatedOffers: {
                internship: "page.companyDetails.relatedOffers.internship",
                workStudy: "page.companyDetails.relatedOffers.workStudy",
            },
        },
        companies: {
            title: "page.companies.title",
            description: "page.companies.description",
            apiCollectionList: {
                foundLabel: "page.companies.apiCollectionList.foundLabel",
            },
        },
        apply: {
            duration: "page.apply.duration",
            title: "page.apply.title",
            myPhoto: {
                label: "page.apply.myPhoto.label",
                placeholder: "page.apply.myPhoto.placeholder",
            },
            youAre: "page.apply.youAre",
            gender: "page.apply.gender",
            firstname: "page.apply.firstname",
            lastname: "page.apply.lastname",
            birth: "page.apply.birth",
            phone: "page.apply.phone",
            email: "page.apply.email",
            confirmEmail: "page.apply.confirmEmail",
            address: "page.apply.address",
            addressPlus: "page.apply.addressPlus",
            postalCode: "page.apply.postalCode",
            city: "page.apply.city",
            personalWebsite: "page.apply.personalWebsite",
            linkedIn: "page.apply.linkedIn",
            driverLicence: "page.apply.driverLicence",
            disability: "page.apply.disability",
            mySituation: "page.apply.mySituation",
            study: "page.apply.study",
            currentDiploma: "page.apply.currentDiploma",
            school: "page.apply.school",
            currentFormation: "page.apply.currentFormation",
            coverLetter: "page.apply.coverLetter",
            createAccount: "page.apply.createAccount",
            submit: "page.apply.submit",
            legal: "page.apply.legal",
            photoDescription: "page.apply.photoDescription",
            mySkills: "page.apply.mySkills",
            skillsDescription: "page.apply.skillsDescription",
            myLanguages: "page.apply.myLanguages",
            languageDescription: "page.apply.languageDescription",
            documents: "page.apply.documents",
            documentsDescription: "page.apply.documentsDescription",
            experiences: "page.apply.experiences",
            experiencesDescription: "page.apply.experiencesDescription",
            add: {
                skill: "page.apply.add.skill",
                language: "page.apply.add.language",
                experience: "page.apply.add.experience",
            },
            cvField: {
                label: "page.apply.cvField.title",
                placeholder: "page.apply.cvField.label",
            },
            cvRequirements: "page.apply.cvRequirements",
            coverLetterField: {
                label: "page.apply.coverLetterField.title",
                placeholder: "page.apply.coverLetterField.label",
            },
            coverLetterRequirements: "page.apply.coverLetterRequirements",
            otherField: {
                label: "page.apply.otherField.label",
                placeholder: "page.apply.otherField.placeholder",
            },
            errors: {
                emailsNotMatch: "page.apply.errors.emailsNotMatch",
            },
            otherRequirements: "page.apply.otherRequirements",
            motivations: "page.apply.motivations",
            addSkill: "page.apply.addSkill",
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
            },
            similar: {
                title: "page.offerDetails.similar.title",
                cta: "page.offerDetails.similar.cta",
            },
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
        createOffer: {
            title: "page.createOffer.title",
            states: {
                1: {
                    name: "page.createOffer.states.1.name",
                },
                2: {
                    name: "page.createOffer.states.2.name",
                },
                3: {
                    name: "page.createOffer.states.3.name",
                },
            },
            step: "page.createOffer.step",
            name: {
                title: "page.createOffer.name.title",
                description: "page.createOffer.name.description",
                placeholder: "page.createOffer.name.placeholder",
                formInfo: "page.createOffer.name.formInfo",
            },
            type: {
                title: "page.createOffer.type.title",
                internship: "page.createOffer.type.internship",
                workStudy: "page.createOffer.type.workStudy",
            },
            remuneration: {
                title: "page.createOffer.remuneration.title",
                placeholder: "page.createOffer.remuneration.placeholder",
                formInfo: "page.createOffer.remuneration.formInfo",
            },
            searchSkills: {
                title: "page.createOffer.searchSkills.title",
                description: "page.createOffer.searchSkills.description",
                formInfo: "page.createOffer.searchSkills.formInfo",
            },
            skills: {
                title: "page.createOffer.skills.title",
                description: "page.createOffer.skills.description",
            },
            add: {
                activity: "page.createOffer.add.activity",
                skill: "page.createOffer.add.skill",
            },
            nextStep: "page.createOffer.nextStep",
            previousStep: "page.createOffer.previousStep",
            submit: "page.createOffer.submit",
            description: {
                title: "page.createOffer.description.title",
                description: "page.createOffer.description.description",
                placeholder: "page.createOffer.description.placeholder",
            },
            missions: {
                title: "page.createOffer.missions.title",
                description: "page.createOffer.missions.description",
                placeholder: "page.createOffer.missions.placeholder",
            },
            profils: {
                title: "page.createOffer.profils.title",
                description: "page.createOffer.profils.description",
                placeholder: "page.createOffer.profils.placeholder",
            },
            start: {
                title: "page.createOffer.start.title",
            }, 
            end: {
                title: "page.createOffer.end.title",
            },
            availableAt: {
                title: "page.createOffer.availableAt.title",
            },
            success: "page.createOffer.success",
        }
    },
    admin: {
        company: {
            actions: {
                addOffer: "admin.company.actions.addOffer",
            },
        },
    },
    breadCrumb: {
        home: "breadCrumb.home",
        login: "breadCrumb.login",
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
            dateASC: "sortings.clarifications.dateASC",
            dateDESC: "sortings.clarifications.dateDESC",
        },
    },
    notifications: {
        login: "notifications.login",
        logout: "notifications.logout",
    },
}

export default tokens
