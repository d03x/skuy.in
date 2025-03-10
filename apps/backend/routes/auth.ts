import ctx from "@/core/ctx";

ctx.router.get("/login", (req, res) => {
  res.json({
    status: true,
  });
});

export default ctx.router;