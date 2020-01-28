import { Router } from "express"
import auth from "./auth";
import expenses from "./expenses";
import accounts from "./accounts";
import categories from "./categories";

export default () => {
    const app = Router();

    auth(app);
    expenses(app);
    accounts(app);
    categories(app);

    return app;
}
