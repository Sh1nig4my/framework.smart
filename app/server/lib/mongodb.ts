import "server-only";

import { MongoClient, type Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || "framework_smart";

type MongoCache = {
  client: MongoClient | null;
  promise: Promise<MongoClient> | null;
};

declare global {
  var mongoCache: MongoCache | undefined;
}

const globalCache = globalThis as typeof globalThis & { mongoCache?: MongoCache };

const cache = globalCache.mongoCache ?? { client: null, promise: null };

globalCache.mongoCache = cache;

export async function getDatabase(): Promise<Db> {
  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (cache.client) {
    return cache.client.db(MONGODB_DB_NAME);
  }

  if (!cache.promise) {
    const client = new MongoClient(MONGODB_URI);
    cache.promise = client.connect();
  }

  cache.client = await cache.promise;

  return cache.client.db(MONGODB_DB_NAME);
}
