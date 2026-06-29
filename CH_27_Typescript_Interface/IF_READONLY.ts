interface UserProfile {
    readonly id: number;
    name: string;
    email: string;
}

let user: UserProfile = {
    id: 1,
    name: "Alice",
    email: "alice@test.com"
};

console.log("User:", user);
console.log("ID:", user.id);

user.name = "Bob";
console.log("After name change:", user);

// user.id = 2;  // Error: Cannot assign to 'id' because it is a read-only property
