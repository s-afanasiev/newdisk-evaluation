import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { configuration } from './config/configuration';

export const getORMConfig = (): PostgresConnectionOptions => {
    const {
        host,
        port,
        type,
        username,
        password,
        database,
        synchronize
    } = configuration().dbConfig;

    const config: PostgresConnectionOptions = {
        type: 'postgres',
        host,
        port,
        username,
        password,
        database,
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        migrations: [`${__dirname}/migrations/*{.ts,.js}`],
        synchronize,
    };
    return config;
};
