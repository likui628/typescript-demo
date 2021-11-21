interface User {
    id: number;
    admin: boolean;
}

interface DB {
    users: User[];
    filterUsers(filter: (this: User) => boolean): User[];
}


test("declaring-this", () => {
    const db = {
        users: [
            { id: 1, admin: false },
            { id: 2, admin: true },
        ],
        filterUsers(predicted) {
            return this.users.filter((user) => predicted.call(user));
        },
    } as DB;

    const admins = db.filterUsers(function (this: User) {
        return this.admin;
    });
    expect(admins).toStrictEqual([
        {
            id: 2,
            admin: true,
        },
    ]);

    const users = db.filterUsers(function (this: User) {
        return !this.admin;
    });
    expect(users).toStrictEqual([
        {
            id: 1,
            admin: false,
        },
    ]);
});
