const tokens = {
    entities: {
        collaborator: {
            jobTitle: "entities.collaborator.jobTitle",
        },
        company: {
            name: "entities.company.name",
            legalStatus: "entities.company.legalStatus",
            siretNumber: "entities.company.siretNumber",
            socialLink: "entities.company.socialLink",
            city: "entities.company.city",
            postCode: "entities.company.postCode",
            address: "entities.company.address",
            phone: "entities.company.phone",
            age: {
                label: "entities.company.age.label",
                string: {
                    singular: "entities.company.age.string.singular",
                    plural: "entities.company.age.string.plural",
                    less: "entities.company.age.string.less",
                },
            },
            effective: "entities.company.effective",
            turnover: "entities.company.turnover",
            presentation: "entities.company.presentation",
            openingTime: "entities.company.openingTime",
            twitterLink: "entities.company.twitterLink",
            linkedinLink: "entities.company.linkedinLink",
            facebookLink: "entities.company.facebookLink",
            instagramLink: "entities.company.instagramLink",
            logo: "entities.company.logo",
            logoIcon: "entities.company.logoIcon",
            category: "entities.company.category",
            additionalAddress: "entities.company.additionalAddress",
            activities: "entities.company.activities",
            firstImage: "entities.company.firstImage",
            secondImage: "entities.company.secondImage",
            thirdImage: "entities.company.thirdImage",
            fourthImage: "entities.company.fourthImage",
            fifthImage: "entities.company.fifthImage",
        },
        offer: {
            name: "entities.offer.name",
            createdAt: {
                first: "entities.offer.createdAt.first",
                second: "entities.offer.createdAt.second",
            },
            availableAt: "entities.offer.availableAt",
            deletedAt: "entities.offer.deletedAt",
            isInternship: "entities.offer.isInternship",
        },
    },
    roles: {
        collaborator: {
            feminine: "roles.collaborator.feminine",
            masculine: "roles.collaborator.masculine",
        },
        student: {
            feminine: "roles.student.feminine",
            masculine: "roles.student.masculine",
        },
        admin: {
            feminine: "roles.admin.feminine",
            masculine: "roles.admin.masculine",
        },
        sponsor: "roles.sponsor",
    },
    apiCollectionList: {
        title: "apiCollectionList.title",
        sorting: {
            label: "apiCollectionList.sorting.label",
        },
    },
    apiCollectionTable: {
        title: "apiCollectionTable.title",
        filter: {
            label: "apiCollectionTable.filter.label",
        },
        itemsPerPage: {
            label: "apiCollectionTable.itemsPerPage.label",
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
                    back: "card.offer.cta.button.back",
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
    filters: {
        all: "filters.all",
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
        update: "actions.update",
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
                inactive: "page.login.notification.inactive",
            },
        },
        register: {
            titleCompany: "page.register.titleCompany",
            title: {
                collaborator: "page.register.form.collaborator",
                company: "page.register.form.company"
            },
            form: {
                gender: "page.register.form.gender",
                genderPlaceholder: "page.register.form.genderPlaceholder",
                lastname: "page.register.form.lastname",
                firstname: "page.register.form.firstname",
                jobTitle: "page.register.form.jobTitle",
                email: "page.register.form.email",
                confirmEmail: "page.register.form.confirmEmail",
                password: "page.register.form.password",
                confirmPassword: "page.register.form.confirmPassword",
                phone: "page.register.form.phone",
                name: "page.register.form.name",
                siretNumber: "page.register.form.siretNumber",
                activities: "page.register.form.activities",
                activitiesPlaceholder: "page.register.form.activitiesPlaceholder",
                category: "page.register.form.category",
                categoryPlaceholder: "page.register.form.categoryPlaceholder",
                address: "page.register.form.address",
                additionalAddress: "page.register.form.additionalAddress",
                city: "page.register.form.city",
                postCode: "page.register.form.postcode",
                phoneCompany: "page.register.form.phoneCompany",
                submit: "page.register.form.submit",
                requiredFields: "page.register.form.requiredField",
                emailError: "page.register.form.emailError",
                passwordError: "page.register.form.passwordError",
            },
            modal: {
                title: "page.register.modal.title",
            },
        },
        profil: {
            notifications: {
                success: "page.profil.notifications.success",
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
            notStudent: "page.apply.notStudent",
            notifications: {
                success: "page.apply.notifications.success",
                error: "page.apply.notifications.error",
            },
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
                internship: {
                    title: "page.offerDetails.similar.internship.title",
                },
                workStudy: {
                    title: "page.offerDetails.similar.workStudy.title",
                },
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
        },
        admin: {
            offers: {
                apiCollectionTable: {
                    foundLabel: "page.admin.offers.apiCollectionTable.foundLabel",
                    itemsPerPageLabel: "page.admin.offers.apiCollectionTable.itemsPerPageLabel",
                },
                status: {
                    active: "page.admin.offers.status.active",
                    inactive: "page.admin.offers.status.inactive",
                },
                type: {
                    internship: "page.admin.offers.type.internship",
                    workStudy: "page.admin.offers.type.workStudy",
                },
            },
        },
        createStudent: {
            submit: "page.createStudent.submit",
            password: "page.createStudent.password",
            confirmPassword: "page.createStudent.confirmPassword",
            wrongPassword: "page.createStudent.wrongPassword",
            study: {
                placeholder: "page.createStudent.study.placeholder"
            }
        },
        confirmation: {
            text: "page.confirmation.text",
            btn: "page.confirmation.btn",
        }
    },
    admin: {
        company: {
            actions: {
                addOffer: "admin.company.actions.addOffer",
            },
        },
    },
    form: {
        company: {
            submit: "form.company.submit",
            notifications: {
                success: "form.company.notifications.success",
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
        apply: "breadCrumb.apply",
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
        linkCopied: "notifications.linkCopied",
        accountUpdated: "notifications.accountUpdated",
        login: "notifications.login",
        logout: "notifications.logout",
    },
    errors: {
        403: {
            message: "errors.403.message",
        },
        404: {
            message: "errors.404.message",
        },
        actions: {
            back: "errors.actions.back",
        },
    },
}

export default tokens
