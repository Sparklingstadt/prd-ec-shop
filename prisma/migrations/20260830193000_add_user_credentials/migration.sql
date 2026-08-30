-- Add credentials as nullable columns so existing demo users can be migrated safely.
ALTER TABLE "User"
ADD COLUMN "email" TEXT,
ADD COLUMN "passwordHash" TEXT;

-- Preserve every existing user with a unique placeholder email and a valid
-- bcrypt hash. The public demo password is replaced by the seed on reset.
UPDATE "User"
SET
  "email" = 'migrated-user-' || "id" || '@invalid.local',
  "passwordHash" = '$2b$12$GIxHtmpviOfzN2mbD3HaVeeEavDg4Al6RRZvzNhp3qSDkWzvvdNLy';

UPDATE "User" SET "email" = 'user1@mail.com' WHERE "id" = 0;
UPDATE "User" SET "email" = 'user2@mail.com' WHERE "id" = 1;

ALTER TABLE "User"
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "passwordHash" SET NOT NULL;

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
