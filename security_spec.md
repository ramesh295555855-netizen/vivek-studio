# Security Specification for Zoya AI

## Data Invariants
1. A user profile must match the authenticated user's ID.
2. Interactions must belong to the user who created them.
3. Users cannot modify their `uid` or `createdAt` fields once set.

## The "Dirty Dozen" Payloads (Denial Tests)
1. Update another user's profile.
2. Create an interaction for another user.
3. List interactions of another user.
4. Set `uid` to a different value during profile update.
5. Inject 1MB string into `displayName`.
6. Set `createdAt` to a future date from the client.
7. Create a profile without an email.
8. Update a profile's `email` to an invalid format.
9. Delete another user's interaction.
10. Anonymous users attempting to write data.
11. Spoofing `userId` in the `interactions` document.
12. Batch writing 500 documents at once to bypass limits.

## Test Runner
(Tests will be implemented in `firestore.rules.test.ts` if requested, for now we follow the rules generation logic).
