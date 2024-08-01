type Profile = {
    firstname: string,
    lastname: string,
    avatar?: string,
    bio?: string
}
type User = {
    id: number,
    username: string,
    email: string,
    profile: Profile
}

const user: User = {
    id: 1,
    username: "ParsaVlz",
    email: "parsavalizadeh@yahoo.com",
    profile: {
        firstname: "Parsa",
        lastname: "Valizadeh",
        bio: "Backend developer(ExpressJS/NestJS)"
    }
};

console.log(user);