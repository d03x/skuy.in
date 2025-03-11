import ctx from "@/core/ctx";
import { users } from "@/databases";
export default {
    async get(req, res) {
        let data = await ctx.db.select().from(users)
        res.json(data);
    },
} satisfies BaseController;