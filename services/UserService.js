import md5 from "md5";

export default class AuthService {
    constructor(userModel){
        this.userModel = userModel;
    }

    async findById(id) {
        try {
            const userRecord = await this.userModel.findById(id);
        
            return { user: userRecord };
        } catch (error) {
            throw error;
        }
    }
};
