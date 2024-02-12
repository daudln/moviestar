
import * as z from "zod";

const UserSchema = z.object({
    id: z.number(),
    name:z.string(),
    email:z.string().email({message:"Invalid email"}),
    username: z.string().min(1, {message:"Username is required"})
})

const CommentSchema = z.object({
    first_name:z.string(),
    last_name:z.string(),
    email:z.string().email(),
    comment:z.string(),
})

type User = z.infer<typeof UserSchema>;
type Comment = z.infer<typeof CommentSchema>;

export {User, Comment};