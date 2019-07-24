# README

## Database creation
```
$ docker-compose run --rm backend bin/rails db:create
```

## Database initialization
```
$ docker-compose run --rm backend bin/rails db:reset
```

### Database Reset
```
$ docker-compose run --rm backend bin/rails db:migrate:reset
```

## Seed
```
$ docker-compose run --rm web bin/rails db:seed
```

## How to bundle install
```
$ docker-compose run --rm web bundle install
```

## How to run app
```
$ docker-compose up
```

## How to run rspec
```
$ docker-compose run --rm web bin/rspec
```