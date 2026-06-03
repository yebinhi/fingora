/**
 * Shared backend types — expand as DynamoDB entities are implemented.
 */
export type SubscriptionStatus = "free" | "paid";

export interface UserRecord {
  userId: string;
  email: string;
  displayName?: string;
  createdAt: string;
  subscriptionStatus: SubscriptionStatus;
  creditBalance: number;
}
