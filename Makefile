# Makefile
setup:
	@echo "Setting up Python backend environment..."
	python3 -m venv venv && . venv/bin/activate && pip install -r backend/requirements.txt

npm-setup:
	@echo "Setting up frontend dependencies..."
	cd frontend && npm install

docker-up:
	docker-compose up --build

clean:
	rm -rf __pycache__ venv .pytest_cache *.egg-info
