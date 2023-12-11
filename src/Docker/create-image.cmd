docker build --no-cache -f SQL\Dockerfile.PostgreSql -t da/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t da/app ../..
