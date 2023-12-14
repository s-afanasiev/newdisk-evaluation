export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    db: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        type: 'postgres',
        username: 'newdisk_user',
        password: 'newdisk_pwd',
        database: 'newdisk_db',
        entities: [],
        synchronize: false,
    }
});