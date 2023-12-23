import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { getORMConfig } from "./ormconfig";
import { DataSource, DataSourceOptions } from 'typeorm';
//const config: PostgresConnectionOptions = getORMConfig();
const config: DataSourceOptions = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "student_user",
    password: "admin",
    database: "student_db",
    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    synchronize: false,
}

export const dataSource = new DataSource(config);
