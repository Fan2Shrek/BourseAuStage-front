git = $(shell which git)
npm = $(shell which npm)

deploy:
	${git} pull -fr
	${npm} install
	${npm} run build
