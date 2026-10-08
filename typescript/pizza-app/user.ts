type UserRole = "guest" | "member" | "admin"

type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: Partial<User>) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser){
        console.error("user not found ")
        return
    } else {
        Object.assign(foundUser,updates)
    }
    
}


function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

updateUser(1,{username:"siyaa"})
console.log (users)