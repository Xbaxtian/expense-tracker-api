db.createUser({
  user: "expense_db_user",
  pwd: "secret",
  roles: [{ role: "readWrite", db: "expenses_db" }],
});
