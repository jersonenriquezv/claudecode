Compare what docs/context/database-schema.md says the database looks like with how the code actually uses it.

Check every API route in src/app/api/ and every Supabase query:
1. Are we querying tables that exist in the schema?
2. Are we using column names that match?
3. Are there any missing columns we're trying to use?
4. Are the data types compatible?

Report any mismatches and suggest fixes (either update the schema or update the code).
