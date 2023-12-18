export const RequiredEnvVars = [
    'PORT',
    'DB_USER',
    'DB_PASSWORD',
    'DB_NAME',
    'DB_HOST',
    'DB_PORT',
];

interface Configuration {
    port: number;
    dbConfig: {
        host: string;
        port: number;
        type: string;
        username: string;
        password: string;
        database: string;
        entities: any[];
        synchronize: boolean;
    };
}

export const configuration = (): Configuration => {
    const config = {
        port: parseInt(process.env.PORT, 10) || 8080,
        dbConfig: {
            host: process.env.DB_HOST as string,
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            type: 'postgres',
            username: process.env.DB_USER as string,
            password: process.env.DB_PASSWORD as string,
            database: process.env.DB_NAME as string,
            entities: [],
            synchronize: false,
        }
    }
    return config;
};

export const validateEnvironmentVars = (): void => {
    if (process.env.NODE_ENV === undefined) {
        process.env.NODE_ENV = 'development';
    }

    RequiredEnvVars.forEach(v => {
        if (!process.env[v]) throw Error(`Missing required env variable ${v}`);
    });
};