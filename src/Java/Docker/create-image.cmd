docker build --no-cache -f SQL\Dockerfile.PostgreSql -t da-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t da-java/app ../../..
