import ctx from "@/core/ctx";

ctx.router.get("/", (req, res) => {
  res.json({
    auth: true,
  });
});

ctx.router.get("/login", (req, res) => {
  res.json({
    status: true,
  });
});

export default ctx.router;