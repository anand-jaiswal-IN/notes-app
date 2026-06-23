FROM python:3.13-slim AS builder

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt ./

RUN pip wheel --wheel-dir /wheels -r requirements.txt

FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends libpq5 \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /wheels /wheels
COPY backend/requirements.txt ./

RUN pip install --no-cache-dir /wheels/*

COPY backend/ ./

ENV SECRET_KEY=build-only-secret-key \
    DEBUG=False \
    ALLOWED_HOSTS=localhost \
    FRONTEND_URL=http://localhost:3000 \
    DB_NAME=notes_app \
    DB_USER=notes_app \
    DB_PASSWORD=notes_password \
    DB_HOST=localhost \
    DB_PORT=5432

RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate --noinput && exec gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 60"]