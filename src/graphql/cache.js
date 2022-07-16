import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
    User: {
      keyFields: ["id"],
    },
  },
});

export const isLoggedInVar = makeVar(
  !!JSON.parse(localStorage.getItem("pendingAccountsApp"))?.value
);

export const userLogged = makeVar(
  JSON.parse(localStorage.getItem("pendingAccountsApp"))?.userLogged
);
