#!/bin/bash
set -e

# Primeiro, chama o entrypoint original do PostgreSQL
docker-entrypoint.sh postgres &

# Aguarda o PostgreSQL ficar pronto
echo "Aguardando PostgreSQL iniciar..."
until pg_isready -h "localhost" -U "$POSTGRES_USER"; do
  sleep 2
done

# Executa o script SQL manualmente
echo "Executando script de inicialização..."
psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f /docker-entrypoint-initdb.d/init.sql

echo "Banco de dados pronto!"

# Mantém o container rodando
wait
