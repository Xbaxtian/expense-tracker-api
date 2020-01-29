import passportLoader from './passport';
import mongooseLoader from './mongoose';

export default async () => {
    const mongoConnection = await mongooseLoader();

    passportLoader();
};
