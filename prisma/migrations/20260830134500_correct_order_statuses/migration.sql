-- Orders created before payment and shipping integrations existed were marked as
-- completed immediately. Reset only those legacy placeholder values.
UPDATE "Order"
SET "paymentStatus" = '支払い待ち'
WHERE "paymentStatus" = '支払い済み';

UPDATE "Order"
SET "shippingStatus" = '未発送'
WHERE "shippingStatus" = '発送済み';
