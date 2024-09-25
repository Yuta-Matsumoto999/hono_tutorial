build:
	docker compose build
up:
	docker compose up -d
install:
	make up
down:
	docker compose down
cache-clear:
	docker builder prune
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
backend:
	docker compose exec backend bash
frontend:
	docker compose exec frontend bash
db:
	docker compose exec db bash