import { defineConfig } from "drizzle-kit";

const postgresURL = process.env.DATABASE_URL || "";

const nonPoolingUrl = postgresURL.replace(":6543", ":5432");

export default defineConfig({
	schema: "./src/server/db/schema",
	out: "./src/server/db/migrations",
	dialect: "postgresql",
	schemaFilter: ["public"],  // Focus only on public schema for migrations
	tablesFilter: ["kathyclean_*"],  // Only include your application tables
	dbCredentials: {
		url: nonPoolingUrl,
	},
	entities: {
		roles: {
			provider: "supabase",
		},
	},
});
