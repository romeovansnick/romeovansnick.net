bin = ./node_modules/.bin

__blue = $$(tput setaf 4)
__normal = $$(tput sgr0)

title = $(shell pwd | xargs basename)
log = printf "$(__blue)$(title): $(__normal) %s\\n"

.PHONY: dev
dev:
	@$(log) "Starting in dev mode..."
	@$(bin)/next dev

.PHONY: build
build:
	@$(log) "Building..."
	@$(bin)/next build

eslint_format = stylish
ifeq ($(CI), 1)
	eslint_format = @jamesacarr/github-actions
endif

.PHONY: lint
lint:
	@$(log) "Checking lint..."
	@$(bin)/next lint --format=$(eslint_format)

.PHONY: lint.fix
lint.fix:
	@$(log) "Fixing lint..."
	@$(bin)/eslint --fix

.PHONY: format
format:
	@$(log) "Checking formatting..."
	@$(bin)/prettier . --check --log-level=warn

.PHONY: format.fix
format.fix:
	@$(log) "Fixing formatting..."
	@$(bin)/prettier . --write

.PHONY: typecheck
typecheck:
	@$(log) "Checking types..."
	@$(bin)/tsc --noEmit

.PHONY: check
check: lint format typecheck test

.PHONY: fix
fix: lint.fix format.fix

.PHONY: revalidate
revalidate:
	@$(log) "Revalidating..."
	@curl "http://localhost:3000/admin/api/revalidate" -X POST -i

.PHONY: test
test:
	@$(log) "Testing..."
	@$(bin)/vitest run

.PHONY: test.watch
test.watch:
	@$(log) "Testing..."
	@$(bin)/vitest
