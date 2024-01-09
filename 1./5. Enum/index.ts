enum Example {
  USER,
  MODERATOR,
  ADMIN,
  TEST = 12,
  TESTTEST // 13 
}

type UserTypes = 0 | 1 | 2;

interface User {
    type: UserTypes,
}
const user: User = {
  type: Example.MODERATOR,
};

if (user.type === Example.USER) {
  console.log("Uzytkownik");
} else if (user.type === Example.MODERATOR) {
  console.log("Moderaotr");
} else if (user.type === Example.ADMIN) {
  console.log("Admin");
}
