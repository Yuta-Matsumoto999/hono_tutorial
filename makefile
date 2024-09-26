build:
	docker compose build
up:
	docker compose up -d
install:
	make up
	make generate
	make migrate
down:
	docker compose down
cache-clear:
	docker builder prune
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
server:
	docker compose exec backend bash
react:
	docker compose exec frontend bash
db:
	docker compose exec db bash
generate:
	docker compose exec backend bun generate
migrate:
	docker compose exec backend bun migrate