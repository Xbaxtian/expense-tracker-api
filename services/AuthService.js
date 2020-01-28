import md5 from "md5";


export default class AuthService {
    constructor(userModel){
        this.userModel = userModel;
    }

    async signUp(user) {
        try {
            const hashedPassword = md5(user.password);


            const userRecord = await this.userModel.create({
                ...user,
                password: hashedPassword
            });
        
            return { user: userRecord };
        } catch (error) {
            throw error;
        }
    }
};
